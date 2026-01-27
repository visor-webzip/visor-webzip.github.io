/* global ContentService, DriveApp, HtmlService, PropertiesService, CacheService, UrlFetchApp, Utilities */

var SITE_ROOT_FOLDER = 'ZipWebSites';
var MANIFEST_FILE = 'manifest.json';
var CACHE_SECONDS = 21600; // 6 hours
var MAX_BUNDLE_BYTES = 100 * 1024 * 1024; // 100 MB before base64

function authorize() {
  // Run once to grant Drive and UrlFetch scopes for the deploying user.
  DriveApp.getRootFolder().getName();
  UrlFetchApp.fetch('https://www.google.com', { muteHttpExceptions: true });
  return 'ok';
}

function doGet(e) {
  var pathInfo = (e && e.pathInfo) ? e.pathInfo : '';
  pathInfo = pathInfo.replace(/^\/+/, '');

  if (pathInfo) {
    return servePath_(pathInfo);
  }

  var url = (e && e.parameter && e.parameter.url) ? e.parameter.url : '';
  var site = (e && e.parameter && e.parameter.site) ? e.parameter.site : '';

  if (url) {
    try {
      if (wantsBundle_(e)) {
        return jsonOutput_(buildBundle_(url));
      }
      var siteId = ensureSiteFromUrl_(url);
      if (wantsJson_(e)) {
        return jsonOutput_(getSiteInfo_(siteId));
      }
      return redirectToSite_(siteId);
    } catch (err) {
      if (wantsJson_(e) || wantsBundle_(e)) {
        return jsonOutput_({ error: 'No se pudo cargar el ZIP. ' + err.message });
      }
      return errorPage_('No se pudo cargar el ZIP. ' + err.message);
    }
  }

  if (site) {
    return redirectToSite_(site);
  }

  return renderHome_();
}

function renderHome_() {
  var html =
    '<!doctype html>' +
    '<html><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<title>Visor ZIP</title>' +
    '<style>' +
    'body{font-family:ui-sans-serif,system-ui;max-width:720px;margin:40px auto;padding:0 16px;}' +
    'input{width:100%;padding:12px;font-size:16px;margin:8px 0;}' +
    'button{padding:12px 16px;font-size:16px;cursor:pointer;}' +
    '.note{color:#555;font-size:14px;line-height:1.4;}' +
    '</style></head>' +
    '<body>' +
    '<h1>Visor ZIP</h1>' +
    '<p class="note">Pega el enlace al ZIP (Drive/GitHub/Dropbox...). Se creara un enlace fijo para compartir con alumnos.</p>' +
    '<form id="f">' +
    '<input id="u" name="url" placeholder="https://..." required>' +
    '<button type="submit">Crear enlace</button>' +
    '</form>' +
    '<pre id="out" class="note"></pre>' +
    '<script>' +
    'document.getElementById("f").addEventListener("submit", function(e){' +
    'e.preventDefault();' +
    'var url = document.getElementById("u").value.trim();' +
    'if(!url){return;}' +
    'var base = window.location.href.split("?")[0];' +
    'document.getElementById("out").textContent = "Creando...";' +
    'window.location.href = base + "?url=" + encodeURIComponent(url);' +
    '});' +
    '</script>' +
    '</body></html>';
  return htmlOutput_(html);
}

function redirectToSite_(siteId) {
  var base = ScriptApp.getService().getUrl();
  var url = base.replace(/\/$/, '') + '/site/' + siteId + '/';
  return redirectHtml_(url);
}

function redirectToPath_(siteId, path) {
  var base = ScriptApp.getService().getUrl();
  var url = base.replace(/\/$/, '') + '/site/' + siteId + '/' + encodeURI(path);
  return redirectHtml_(url);
}

function servePath_(pathInfo) {
  var parts = pathInfo.split('/');
  if (parts.length < 2 || parts[0] !== 'site') {
    return notFound_('Ruta no valida');
  }

  var siteId = parts[1];
  var reqPath = parts.slice(2).join('/');

  var manifest = getManifest_(siteId);
  if (!manifest) {
    return notFound_('Sitio no encontrado');
  }

  ensurePublicSite_(siteId);

  if (!reqPath) {
    if (!manifest.indexPath) {
      return notFound_('Index no encontrado');
    }
    reqPath = manifest.indexPath;
  }

  reqPath = decodeURIComponent(reqPath);
  var entry = manifest.files[reqPath];
  if (!entry) {
    // Try to find by stripping leading ./ or / if present.
    var normalized = reqPath.replace(/^\.\//, '').replace(/^\//, '');
    entry = manifest.files[normalized];
  }

  if (!entry) {
    return notFound_('Archivo no encontrado: ' + reqPath);
  }

  var file = DriveApp.getFileById(entry.id);
  var blob = file.getBlob();
  var mime = entry.mime || guessMime_(reqPath) || blob.getContentType() || 'application/octet-stream';
  if (mime.indexOf('text/html') === 0) {
    var baseHref = buildBaseHref_(siteId, reqPath);
    var html = injectBaseTag_(blob.getDataAsString('UTF-8'), baseHref);
    return ContentService.createTextOutput(html)
      .setMimeType(ContentService.MimeType.HTML);
  }
  if (mime.indexOf('text/css') === 0) {
    var cssBase = buildBaseHref_(siteId, reqPath);
    var css = rewriteCssUrls_(blob.getDataAsString('UTF-8'), cssBase);
    return Utilities.newBlob(css, 'text/css', file.getName());
  }
  blob.setContentType(mime);
  return blob;
}

function buildBundle_(rawUrl) {
  var url = normalizeDownloadUrl_(rawUrl);
  var blob = fetchZipBlob_(url);
  var bytes = blob.getBytes();
  if (looksLikeHtml_(blob, bytes)) {
    throw new Error('La URL no devolvio un ZIP (se recibio HTML). Revisa permisos o usa un enlace directo.');
  }
  if (bytes.length > MAX_BUNDLE_BYTES) {
    throw new Error('El ZIP supera el limite de ' + (MAX_BUNDLE_BYTES / (1024 * 1024)) + ' MB.');
  }
  return {
    name: blob.getName() || 'site.zip',
    size: bytes.length,
    base64: Utilities.base64Encode(bytes)
  };
}

function ensureSiteFromUrl_(rawUrl) {
  var url = normalizeDownloadUrl_(rawUrl);
  var siteId = computeSiteId_(url);
  var props = PropertiesService.getScriptProperties();
  var folderId = props.getProperty('site_' + siteId);

  if (folderId && folderExists_(folderId)) {
    return siteId;
  }

  folderId = buildSiteFromZip_(siteId, url);
  props.setProperty('site_' + siteId, folderId);
  return siteId;
}

function buildSiteFromZip_(siteId, url) {
  var zipBlob = fetchZipBlob_(url);
  var files;
  try {
    files = Utilities.unzip(zipBlob);
  } catch (err) {
    throw new Error('El archivo no es un ZIP valido o esta corrupto.');
  }

  var root = getOrCreateRootFolder_();
  var siteFolder = root.createFolder(siteId);

  var folderMap = {};
  folderMap[''] = siteFolder;

  var manifest = {
    siteId: siteId,
    indexPath: '',
    files: {}
  };

  for (var i = 0; i < files.length; i++) {
    var blob = files[i];
    var name = blob.getName();
    if (name.slice(-1) === '/') {
      continue;
    }

    var normalized = name.replace(/^\//, '');
    var parts = normalized.split('/');
    var filename = parts.pop();
    var folderPath = parts.join('/');

    var folder = ensureFolderPath_(folderMap, siteFolder, folderPath);
    var file = folder.createFile(blob.setName(filename));

    var pathKey = (folderPath ? folderPath + '/' : '') + filename;
    manifest.files[pathKey] = {
      id: file.getId(),
      mime: guessMime_(pathKey)
    };

    if (!manifest.indexPath) {
      if (filename.toLowerCase() === 'index.html' || filename.toLowerCase() === 'index.htm') {
        manifest.indexPath = pathKey;
      }
    }
  }

  if (!manifest.indexPath) {
    var first = Object.keys(manifest.files)[0];
    if (first) {
      manifest.indexPath = first;
    }
  }

  var manifestFile = siteFolder.createFile(MANIFEST_FILE, JSON.stringify(manifest, null, 2), MimeType.PLAIN_TEXT);
  manifestFile.setDescription('Manifest for site ' + siteId);

  return siteFolder.getId();
}

function ensurePublicSite_(siteId) {
  var cache = CacheService.getScriptCache();
  if (cache.get('public_' + siteId)) {
    return;
  }
  var props = PropertiesService.getScriptProperties();
  var folderId = props.getProperty('site_' + siteId);
  if (!folderId) {
    return;
  }
  try {
    DriveApp.getFolderById(folderId)
      .setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    cache.put('public_' + siteId, '1', 21600);
  } catch (err) {
    // Ignore sharing errors; access might still work for owner.
  }
}

function getManifest_(siteId) {
  var cache = CacheService.getScriptCache();
  var cached = cache.get('manifest_' + siteId);
  if (cached) {
    return JSON.parse(cached);
  }

  var props = PropertiesService.getScriptProperties();
  var folderId = props.getProperty('site_' + siteId);
  if (!folderId || !folderExists_(folderId)) {
    return null;
  }

  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFilesByName(MANIFEST_FILE);
  if (!files.hasNext()) {
    return null;
  }

  var manifestText = files.next().getBlob().getDataAsString('UTF-8');
  cache.put('manifest_' + siteId, manifestText, CACHE_SECONDS);
  return JSON.parse(manifestText);
}

function getOrCreateRootFolder_() {
  var folders = DriveApp.getFoldersByName(SITE_ROOT_FOLDER);
  if (folders.hasNext()) {
    return folders.next();
  }
  return DriveApp.createFolder(SITE_ROOT_FOLDER);
}

function ensureFolderPath_(folderMap, root, path) {
  if (!path) {
    return root;
  }
  if (folderMap[path]) {
    return folderMap[path];
  }

  var parts = path.split('/');
  var currentPath = '';
  var currentFolder = root;

  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    currentPath = currentPath ? currentPath + '/' + part : part;
    if (!folderMap[currentPath]) {
      currentFolder = currentFolder.createFolder(part);
      folderMap[currentPath] = currentFolder;
    } else {
      currentFolder = folderMap[currentPath];
    }
  }

  return folderMap[path];
}

function normalizeDownloadUrl_(url) {
  var driveId = extractDriveId_(url);
  if (driveId) {
    return 'https://drive.google.com/uc?export=download&id=' + driveId;
  }
  return url;
}

function extractDriveId_(url) {
  var match = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return match[1];
  }
  match = url.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return match[1];
  }
  match = url.match(/drive\.google\.com\/uc\?id=([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return match[1];
  }
  return '';
}

function fetchZipBlob_(url) {
  var driveId = extractDriveId_(url);
  if (driveId) {
    return fetchDriveZip_(driveId);
  }

  var response = UrlFetchApp.fetch(url, { muteHttpExceptions: true, followRedirects: true });
  var code = response.getResponseCode();
  if (code >= 400) {
    throw new Error('Respuesta HTTP ' + code);
  }
  return response.getBlob();
}

function fetchDriveZip_(driveId) {
  var baseUrl = 'https://drive.google.com/uc?export=download&id=' + driveId;
  var response = UrlFetchApp.fetch(baseUrl, { muteHttpExceptions: true, followRedirects: true });
  var code = response.getResponseCode();
  if (code >= 400) {
    throw new Error('Drive respondio con HTTP ' + code);
  }

  var blob = response.getBlob();
  if (!looksLikeHtml_(blob)) {
    return blob;
  }

  var cookies = extractCookies_(response.getAllHeaders());
  var html = blob.getDataAsString('UTF-8');
  var downloadUrl = extractDriveDownloadUrl_(html);
  if (downloadUrl) {
    return fetchDriveWithCookies_(downloadUrl, cookies);
  }
  var match = html.match(/confirm=([0-9A-Za-z_-]+)&amp;id=/) || html.match(/confirm=([0-9A-Za-z_-]+)&id=/);
  if (!match) {
    var headers = response.getAllHeaders();
    var cookieHeader = headers['Set-Cookie'] || headers['set-cookie'] || '';
    if (Array.isArray(cookieHeader)) {
      cookieHeader = cookieHeader.join(';');
    }
    var cookieMatch = cookieHeader.match(/download_warning[^=]*=([0-9A-Za-z_-]+)/);
    if (!cookieMatch) {
      throw new Error('Drive devolvio una pagina HTML en lugar del ZIP. Revisa el enlace y los permisos.');
    }
    match = cookieMatch;
  }

  var confirm = match[1];
  var confirmUrl = 'https://drive.google.com/uc?export=download&confirm=' + confirm + '&id=' + driveId;
  var confirmResp = fetchDriveWithCookies_(confirmUrl, cookies);
  var confirmCode = confirmResp.getResponseCode();
  if (confirmCode >= 400) {
    throw new Error('No se pudo descargar el ZIP desde Drive (HTTP ' + confirmCode + ').');
  }
  var confirmBlob = confirmResp.getBlob();
  if (looksLikeHtml_(confirmBlob)) {
    throw new Error('Drive devolvio HTML incluso tras la confirmacion. Revisa permisos o el enlace.');
  }
  return confirmBlob;
}

function fetchDriveWithCookies_(url, cookies) {
  var options = { muteHttpExceptions: true, followRedirects: true };
  if (cookies) {
    options.headers = { Cookie: cookies };
  }
  return UrlFetchApp.fetch(url, options);
}

function extractDriveDownloadUrl_(html) {
  if (!html) return '';
  var match = html.match(/https?:\/\/drive\.usercontent\.google\.com\/download\?[^"'<>]+/);
  if (match && match[0]) {
    return match[0].replace(/&amp;/g, '&');
  }
  match = html.match(/https?:\/\/docs\.google\.com\/uc\?export=download[^"'<>]+/);
  if (match && match[0]) {
    return match[0].replace(/&amp;/g, '&');
  }
  return '';
}

function extractCookies_(headers) {
  if (!headers) return '';
  var cookieHeader = headers['Set-Cookie'] || headers['set-cookie'];
  var cookies = [];
  var rawList = [];
  if (Array.isArray(cookieHeader)) {
    rawList = cookieHeader;
  } else if (cookieHeader) {
    rawList = cookieHeader.split(/,(?=[^;]+?=)/);
  }
  rawList.forEach(function (item) {
    if (!item) return;
    var part = item.split(';')[0];
    if (part) {
      cookies.push(part.trim());
    }
  });
  return cookies.join('; ');
}

function looksLikeHtml_(blob, bytes) {
  var type = (blob.getContentType() || '').toLowerCase();
  if (type.indexOf('text/html') !== -1) return true;
  var name = (blob.getName() || '').toLowerCase();
  if (name.endsWith('.html') || name.endsWith('.htm')) return true;
  if (bytes && bytes.length) {
    var limit = Math.min(bytes.length, 200);
    var sample = '';
    for (var i = 0; i < limit; i++) {
      sample += String.fromCharCode(bytes[i]);
    }
    if (/^\s*<!doctype html|^\s*<html/i.test(sample)) {
      return true;
    }
  }
  return false;
}

function computeSiteId_(url) {
  var digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_1, url, Utilities.Charset.UTF_8);
  return digest.map(function(b) {
    var v = (b < 0) ? b + 256 : b;
    return ('0' + v.toString(16)).slice(-2);
  }).join('');
}

function buildBaseHref_(siteId, reqPath) {
  var base = ScriptApp.getService().getUrl().replace(/\/$/, '');
  var parts = reqPath.split('/');
  parts.pop();
  var dir = parts.join('/');
  var encodedDir = dir ? encodePath_(dir) + '/' : '';
  return base + '/site/' + siteId + '/' + encodedDir;
}

function encodePath_(path) {
  return path.split('/').map(function(part) {
    return encodeURIComponent(part);
  }).join('/');
}

function injectBaseTag_(html, baseHref) {
  if (/<base\s/i.test(html)) {
    return html;
  }
  var baseTag = '<base href="' + baseHref + '">';
  if (/<head[^>]*>/i.test(html)) {
    return html.replace(/<head[^>]*>/i, function(match) {
      return match + baseTag;
    });
  }
  return baseTag + html;
}

function rewriteCssUrls_(css, baseHref) {
  return css.replace(/url\(\s*(['"]?)([^"')]+)\1\s*\)/gi, function(match, quote, url) {
    if (isAbsoluteUrl_(url)) {
      return match;
    }
    var cleaned = url.replace(/^\.\//, '');
    return 'url(' + quote + baseHref + cleaned + quote + ')';
  });
}

function isAbsoluteUrl_(url) {
  if (!url) return true;
  if (url.indexOf('#') === 0) return true;
  if (url.indexOf('data:') === 0) return true;
  if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) return true;
  if (url.indexOf('//') === 0) return true;
  if (url.indexOf('mailto:') === 0 || url.indexOf('tel:') === 0) return true;
  return false;
}

function textOutputMime_(mime) {
  if (!mime) return ContentService.MimeType.TEXT;
  if (mime.indexOf('text/html') === 0) return ContentService.MimeType.HTML;
  if (mime.indexOf('application/javascript') === 0) return ContentService.MimeType.JAVASCRIPT;
  if (mime.indexOf('application/json') === 0) return ContentService.MimeType.JSON;
  if (mime.indexOf('application/xml') === 0) return ContentService.MimeType.XML;
  return ContentService.MimeType.TEXT;
}

function isTextMime_(mime) {
  if (!mime) return false;
  if (mime.indexOf('text/') === 0) return true;
  if (mime === 'application/javascript') return true;
  if (mime === 'application/json') return true;
  if (mime === 'application/xml') return true;
  if (mime === 'image/svg+xml') return true;
  return false;
}

function guessMime_(path) {
  var lower = path.toLowerCase();
  if (lower.endsWith('.html') || lower.endsWith('.htm')) return 'text/html';
  if (lower.endsWith('.css')) return 'text/css';
  if (lower.endsWith('.js')) return 'application/javascript';
  if (lower.endsWith('.json')) return 'application/json';
  if (lower.endsWith('.svg')) return 'image/svg+xml';
  if (lower.endsWith('.png')) return 'image/png';
  if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
  if (lower.endsWith('.gif')) return 'image/gif';
  if (lower.endsWith('.webp')) return 'image/webp';
  if (lower.endsWith('.ico')) return 'image/x-icon';
  if (lower.endsWith('.woff')) return 'font/woff';
  if (lower.endsWith('.woff2')) return 'font/woff2';
  if (lower.endsWith('.ttf')) return 'font/ttf';
  if (lower.endsWith('.otf')) return 'font/otf';
  if (lower.endsWith('.mp3')) return 'audio/mpeg';
  if (lower.endsWith('.mp4')) return 'video/mp4';
  if (lower.endsWith('.webm')) return 'video/webm';
  if (lower.endsWith('.xml')) return 'application/xml';
  if (lower.endsWith('.txt')) return 'text/plain';
  return '';
}

function folderExists_(folderId) {
  try {
    DriveApp.getFolderById(folderId).getName();
    return true;
  } catch (err) {
    return false;
  }
}

function notFound_(message) {
  return htmlOutput_(
    '<!doctype html><meta charset="utf-8"><h2>404</h2><p>' + message + '</p>'
  );
}

function errorPage_(message) {
  return htmlOutput_(
    '<!doctype html><meta charset="utf-8"><h2>Error</h2><p>' + message + '</p>'
  );
}

function redirectHtml_(url) {
  var html = '<!doctype html><meta http-equiv="refresh" content="0; url=' + url + '">';
  return htmlOutput_(html);
}

function htmlOutput_(html) {
  return ContentService.createTextOutput(html)
    .setMimeType(ContentService.MimeType.HTML);
}

function getSiteInfo_(siteId) {
  var manifest = getManifest_(siteId);
  var indexPath = manifest ? (manifest.indexPath || '') : '';
  return { siteId: siteId, indexPath: indexPath };
}

function jsonOutput_(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function wantsBundle_(e) {
  return !!(e && e.parameter && (e.parameter.bundle === '1' || e.parameter.format === 'bundle'));
}

function wantsJson_(e) {
  return !!(e && e.parameter && (e.parameter.json === '1' || e.parameter.format === 'json'));
}
