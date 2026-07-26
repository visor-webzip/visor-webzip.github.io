var DB_NAME = 'visor-web-sites';
var DB_VERSION = 1;
var STORE_SITES = 'sites';
var STORE_FILES = 'files';
var dbPromise = null;

function openDb() {
  if (dbPromise) {
    return dbPromise;
  }
  dbPromise = new Promise(function (resolve, reject) {
    var request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = function () {
      var db = request.result;
      if (!db.objectStoreNames.contains(STORE_SITES)) {
        db.createObjectStore(STORE_SITES, { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains(STORE_FILES)) {
        var store = db.createObjectStore(STORE_FILES, { keyPath: 'key' });
        store.createIndex('siteId', 'siteId', { unique: false });
      }
    };
    request.onsuccess = function () {
      resolve(request.result);
    };
    request.onerror = function () {
      reject(request.error);
    };
  });
  return dbPromise;
}

function getSite(siteId) {
  return openDb().then(function (db) {
    return new Promise(function (resolve, reject) {
      var tx = db.transaction(STORE_SITES, 'readonly');
      var store = tx.objectStore(STORE_SITES);
      var request = store.get(siteId);
      request.onsuccess = function () {
        resolve(request.result || null);
      };
      request.onerror = function () {
        reject(request.error);
      };
    });
  });
}

function getFile(siteId, path) {
  var key = siteId + '::' + path;
  return openDb().then(function (db) {
    return new Promise(function (resolve, reject) {
      var tx = db.transaction(STORE_FILES, 'readonly');
      var store = tx.objectStore(STORE_FILES);
      var request = store.get(key);
      request.onsuccess = function () {
        resolve(request.result || null);
      };
      request.onerror = function () {
        reject(request.error);
      };
    });
  });
}

function guessMimeType(path) {
  var lower = path.toLowerCase();
  if (lower.endsWith('.html') || lower.endsWith('.htm')) return 'text/html';
  if (lower.endsWith('.pdf')) return 'application/pdf';
  if (lower.endsWith('.css')) return 'text/css';
  if (lower.endsWith('.js')) return 'text/javascript';
  if (lower.endsWith('.json')) return 'application/json';
  if (lower.endsWith('.svg')) return 'image/svg+xml';
  if (lower.endsWith('.png')) return 'image/png';
  if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
  if (lower.endsWith('.gif')) return 'image/gif';
  if (lower.endsWith('.webp')) return 'image/webp';
  if (lower.endsWith('.woff')) return 'font/woff';
  if (lower.endsWith('.woff2')) return 'font/woff2';
  if (lower.endsWith('.ttf')) return 'font/ttf';
  if (lower.endsWith('.otf')) return 'font/otf';
  if (lower.endsWith('.ico')) return 'image/x-icon';
  if (lower.endsWith('.mp3')) return 'audio/mpeg';
  if (lower.endsWith('.mp4')) return 'video/mp4';
  if (lower.endsWith('.webm')) return 'video/webm';
  return 'application/octet-stream';
}

function isLiveEndExpired(site) {
  var restrictions = site && site.restrictions ? site.restrictions : null;
  if (!restrictions || !restrictions.enabled || restrictions.neverExpires || !restrictions.enforceEndDuringView || !restrictions.endAt) {
    return false;
  }
  var endTs = Date.parse(restrictions.endAt);
  if (isNaN(endTs)) return false;
  return Date.now() > endTs;
}

function restrictedHtmlResponse() {
  var html = '<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'
    + '<title>Acceso restringido</title><style>'
    + 'body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f6f8fc;color:#0f172a;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;padding:16px;}'
    + '.card{max-width:560px;width:min(100%,560px);background:#fff;border:1px solid #dbe4f0;border-radius:16px;padding:22px 20px;box-shadow:0 18px 45px rgba(15,23,42,0.12);text-align:center;}'
    + '.title{font-size:1.6rem;line-height:1.1;font-weight:700;margin:0 0 10px;}'
    + '.body{margin:0;color:#334155;font-size:1.05rem;line-height:1.4;}'
    + '</style></head><body><div class="card"><h1 class="title">Acceso restringido</h1><p class="body">Este recurso no está disponible en este momento.</p></div></body></html>';
  return new Response(new Blob([html], { type: 'text/html' }), {
    status: 403,
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' }
  });
}

function notCachedHtmlResponse() {
  var html = '<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'
    + '<title>Enlace local no válido</title><style>'
    + 'body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f6f8fc;color:#0f172a;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;padding:16px;}'
    + '.card{max-width:640px;width:min(100%,640px);background:#fff;border:1px solid #dbe4f0;border-radius:16px;padding:24px 22px;box-shadow:0 18px 45px rgba(15,23,42,0.12);}'
    + '.eyebrow{display:inline-block;margin-bottom:10px;padding:4px 10px;border-radius:999px;background:#e8eefc;color:#31507f;font-size:.82rem;font-weight:700;letter-spacing:.02em;text-transform:uppercase;}'
    + '.title{font-size:1.75rem;line-height:1.1;font-weight:800;margin:0 0 12px;}'
    + '.body{margin:0 0 12px;color:#334155;font-size:1.02rem;line-height:1.5;}'
    + '.list{margin:0 0 18px;padding-left:20px;color:#334155;line-height:1.5;}'
    + '.actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px;}'
    + '.button{display:inline-flex;align-items:center;justify-content:center;padding:10px 14px;border-radius:999px;border:1px solid #cbd5e1;background:#fff;color:#0f172a;text-decoration:none;font-weight:600;}'
    + '.button--primary{background:#2563eb;border-color:#2563eb;color:#fff;}'
    + '</style></head><body><div class="card"><div class="eyebrow">Visor Web-ZIP</div><h1 class="title" id="title">Este enlace no se puede abrir aquí</h1><p class="body" id="lead">La dirección que has usado es una URL local del navegador donde se guardó el recurso. No es la URL correcta para compartir.</p><p class="body" id="body">Para abrir este material necesitas la URL de compartir correcta. Pide el enlace generado con el botón Compartir del visor.</p><ul class="list" id="tips"><li>Si este enlace te lo ha enviado otra persona, pídele la URL correcta para compartir.</li><li>Si tú guardaste este material antes en este navegador, vuelve al gestor de recursos y busca allí el material guardado.</li></ul><div class="actions"><a class="button button--primary" href="/?tab=manager" id="home-link">Ir al gestor</a></div></div><script>(function(){function normalizeLang(l){if(!l)return\"es\";l=String(l).toLowerCase().split(/[-_]/)[0];return[\"es\",\"ca\",\"gl\",\"eu\",\"en\",\"de\",\"it\",\"fr\"].indexOf(l)!==-1?l:\"es\";}var path=location.pathname||\"/\";function getHomeHref(){var marker=\"/site/\";var idx=path.indexOf(marker);if(idx===-1)return\"/?tab=manager\";var base=path.slice(0,idx+1);return(base||\"/\")+\"?tab=manager\";}var lang=normalizeLang((function(){try{return localStorage.getItem(\"visor-lang\");}catch(e){return null;}})()||navigator.language||\"es\");var copy={es:{title:\"Este enlace no se puede abrir aquí\",lead:\"La dirección que has usado es una URL local del navegador donde se guardó el recurso. No es la URL correcta para compartir.\",body:\"Para abrir este material necesitas la URL de compartir correcta. Pide el enlace generado con el botón Compartir del visor.\",tips:[\"Si este enlace te lo ha enviado otra persona, pídele la URL correcta para compartir.\",\"Si tú guardaste este material antes en este navegador, vuelve al gestor de recursos y busca allí el material guardado.\"],home:\"Ir al gestor\"},ca:{title:\"Aquest enllaç no es pot obrir aquí\",lead:\"L’adreça que has fet servir és una URL local del navegador on es va desar el recurs. No és la URL correcta per compartir.\",body:\"Per obrir aquest material necessites l’URL correcta per compartir. Demana l’enllaç generat amb el botó Compartir del visor.\",tips:[\"Si aquest enllaç te l’ha enviat una altra persona, demana-li la URL correcta per compartir.\",\"Si tu havies desat aquest material abans en aquest navegador, torna al gestor de recursos i busca-hi el material desat.\"],home:\"Anar al gestor\"},gl:{title:\"Esta ligazón non se pode abrir aquí\",lead:\"O enderezo que usaches é unha URL local do navegador onde se gardou o recurso. Non é a URL correcta para compartir.\",body:\"Para abrir este material necesitas a URL correcta para compartir. Pide a ligazón xerada co botón Compartir do visor.\",tips:[\"Se esta ligazón cha enviou outra persoa, pídelle a URL correcta para compartir.\",\"Se ti gardaras este material antes neste navegador, volve ao xestor de recursos e busca alí o material gardado.\"],home:\"Ir ao xestor\"},eu:{title:\"Esteka hau ezin da hemen ireki\",lead:\"Erabili duzun helbidea baliabidea gorde zen nabigatzaileko URL lokala da. Ez da partekatzeko URL zuzena.\",body:\"Material hau irekitzeko partekatzeko URL zuzena behar duzu. Eskatu ikuslearen Partekatu botoiarekin sortutako esteka.\",tips:[\"Beste norbaitek bidali badizu esteka hau, eskatu partekatzeko URL zuzena.\",\"Material hau lehenago nabigatzaile honetan gorde bazenuen, itzuli baliabideen kudeatzailera eta bilatu han gordetako materiala.\"],home:\"Joan kudeatzailera\"},en:{title:\"This link cannot be opened here\",lead:\"The address you used is a local browser URL where the resource was stored. It is not the correct sharing URL.\",body:\"To open this material you need the correct sharing URL. Ask for the link generated with the Share button in the viewer.\",tips:[\"If someone sent you this link, ask them for the proper sharing URL.\",\"If you previously saved this material in this browser, go to the resource manager and look for the saved material there.\"],home:\"Open manager\"},de:{title:\"Dieser Link kann hier nicht geöffnet werden\",lead:\"Die verwendete Adresse ist eine lokale Browser-URL, unter der die Ressource gespeichert wurde. Sie ist nicht die richtige Freigabe-URL.\",body:\"Um dieses Material zu öffnen, brauchst du die richtige Freigabe-URL. Bitte um den Link, der mit der Schaltfläche Teilen im Viewer erzeugt wurde.\",tips:[\"Wenn dir jemand diesen Link geschickt hat, bitte um die richtige Freigabe-URL.\",\"Wenn du dieses Material früher in diesem Browser gespeichert hast, gehe zur Ressourcenverwaltung zurück und suche dort nach dem gespeicherten Material.\"],home:\"Manager öffnen\"},it:{title:\"Questo link non si può aprire qui\",lead:\"L’indirizzo che hai usato è un URL locale del browser in cui è stata salvata la risorsa. Non è l’URL corretto da condividere.\",body:\"Per aprire questo materiale ti serve l’URL di condivisione corretto. Chiedi il link generato con il pulsante Condividere del visore.\",tips:[\"Se questo link te l’ha inviato un’altra persona, chiedile l’URL corretto da condividere.\",\"Se sei tu ad aver salvato prima questo materiale in questo browser, torna alla gestione risorse e cerca lì il materiale salvato.\"],home:\"Aprire la gestione\"},fr:{title:\"Ce lien ne peut pas être ouvert ici\",lead:\"L’adresse que vous avez utilisée est une URL locale du navigateur où la ressource a été enregistrée. Ce n’est pas l’URL correcte à partager.\",body:\"Pour ouvrir ce matériel, il vous faut l’URL de partage correcte. Demandez le lien généré avec le bouton Partager de la visionneuse.\",tips:[\"Si quelqu’un vous a envoyé ce lien, demandez-lui l’URL correcte à partager.\",\"Si vous aviez enregistré ce matériel auparavant dans ce navigateur, revenez au gestionnaire de ressources et cherchez-y le matériel enregistré.\"],home:\"Ouvrir le gestionnaire\"}};var text=copy[lang]||copy.es;document.documentElement.lang=lang;document.getElementById(\"title\").textContent=text.title;document.getElementById(\"lead\").textContent=text.lead;document.getElementById(\"body\").textContent=text.body;document.getElementById(\"home-link\").textContent=text.home;document.getElementById(\"home-link\").setAttribute(\"href\",getHomeHref());var tips=document.getElementById(\"tips\");tips.innerHTML=\"\";text.tips.forEach(function(item){var li=document.createElement(\"li\");li.textContent=item;tips.appendChild(li);});})();</script></body></html>';
  return new Response(new Blob([html], { type: 'text/html' }), {
    status: 404,
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' }
  });
}

function notCachedTextResponse() {
  return new Response('This local URL is not valid in this browser. Ask for the share URL.', {
    status: 404,
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' }
  });
}

self.addEventListener('install', function (event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') {
    return;
  }
  var url = new URL(event.request.url);
  var scopePath = new URL(self.registration.scope).pathname;
  var prefix = scopePath + 'site/';
  if (!url.pathname.startsWith(prefix)) {
    return;
  }
  event.respondWith(handleSiteRequest(url, scopePath));
});

function handleSiteRequest(url, scopePath) {
  var relative = url.pathname.slice(scopePath.length);
  var parts = relative.split('/');
  if (parts[0] !== 'site' || !parts[1]) {
    return fetch(url);
  }
  var siteId = parts[1];
  var path = parts.slice(2).join('/');
  if (!path || path.endsWith('/')) {
    path = '';
  }
  return getSite(siteId).then(function (site) {
    var resolvedPath = path;
    if (!resolvedPath) {
      resolvedPath = site && site.indexPath ? site.indexPath : 'index.html';
    }
    return getFile(siteId, decodeURIComponent(resolvedPath)).then(function (record) {
      if (!record || !record.blob) {
        var type = guessMimeType(resolvedPath);
        if (type && type.indexOf('text/html') === 0) {
          return notCachedHtmlResponse();
        }
        return notCachedTextResponse();
      }
      var type = record.type || guessMimeType(resolvedPath);
      if (isLiveEndExpired(site)) {
        if (type && type.indexOf('text/html') === 0) {
          return restrictedHtmlResponse();
        }
        return new Response('Restricted', { status: 403 });
      }
      if (type && type.indexOf('text/html') === 0) {
        return injectOverlayResponse(record.blob, {
          siteId: siteId,
          updateAvailable: !!(site && site.updateAvailable),
          restrictions: site && site.restrictions ? site.restrictions : null
        });
      }
      return new Response(record.blob, {
        status: 200,
        headers: { 'Content-Type': type }
      });
    });
  });
}

function injectOverlayResponse(blob, payload) {
  return blob.text().then(function (html) {
    var siteId = payload && payload.siteId ? String(payload.siteId) : '';
    var updateFlag = payload && payload.updateAvailable ? '1' : '0';
    var restrictions = payload && payload.restrictions ? payload.restrictions : null;
    var restrictLiveEnd = !!(restrictions && restrictions.enabled && !restrictions.neverExpires && restrictions.enforceEndDuringView);
    var restrictEndAt = restrictions && restrictions.endAt ? String(restrictions.endAt) : '';
    var hasWarningMinutes = !!(restrictions && restrictions.warningMinutes !== undefined && restrictions.warningMinutes !== null);
    var warningMinutes = hasWarningMinutes ? parseInt(restrictions.warningMinutes, 10) : 5;
    if (isNaN(warningMinutes) || warningMinutes < 0) warningMinutes = 5;
    warningMinutes = Math.min(180, warningMinutes);
    var warningMessage = restrictions && restrictions.warningMessage ? String(restrictions.warningMessage) : '';
    var overlay = [
      '<div id="vwz-update-overlay" data-site-id="', siteId, '" data-update-available="', updateFlag, '" class="vwz-update-overlay">',
      '<div class="vwz-update-card" role="dialog" aria-live="polite" aria-label="Actualización disponible">',
      '<div class="vwz-update-title">Nueva versión disponible</div>',
      '<div class="vwz-update-body">Este recurso ha cambiado en la nube. ¿Quieres actualizarlo?</div>',
      '<div class="vwz-update-actions">',
      '<button type="button" class="vwz-update-btn" data-vwz-update>Actualizar</button>',
      '<button type="button" class="vwz-update-btn vwz-update-btn--ghost" data-vwz-dismiss>Ahora no</button>',
      '</div>',
      '</div>',
      '</div>',
      '<style>',
      '.vwz-update-overlay{position:fixed;right:16px;bottom:16px;z-index:2147483647;display:none;max-width:320px;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;}',
      '.vwz-update-overlay.vwz-show{display:block;}',
      '.vwz-update-card{background:rgba(17,24,39,0.72);color:#fff;border:1px solid rgba(255,255,255,0.15);border-radius:12px;padding:12px 14px;backdrop-filter:blur(8px);box-shadow:0 10px 24px rgba(0,0,0,0.28);}',
      '.vwz-update-title{font-weight:600;font-size:0.95rem;margin-bottom:4px;}',
      '.vwz-update-body{font-size:0.86rem;line-height:1.35;margin-bottom:10px;color:rgba(255,255,255,0.9);}',
      '.vwz-update-actions{display:flex;gap:8px;justify-content:flex-end;flex-wrap:wrap;}',
      '.vwz-update-btn{appearance:none;border:0;border-radius:999px;padding:6px 12px;font-size:0.82rem;font-weight:600;cursor:pointer;background:#f59e0b;color:#1f2937;}',
      '.vwz-update-btn--ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,0.35);}',
      '@media (max-width:640px){.vwz-update-overlay{left:16px;right:16px;bottom:12px;max-width:none;}}',
      '</style>',
      '<script>(function(){',
      'var overlay=document.getElementById("vwz-update-overlay");if(!overlay)return;',
      'var btnUpdate=overlay.querySelector("[data-vwz-update]");',
      'var btnDismiss=overlay.querySelector("[data-vwz-dismiss]");',
      'var restrictLiveEnd=', (restrictLiveEnd ? 'true' : 'false'), ';',
      'var restrictEndAt=', JSON.stringify(restrictEndAt), ';',
      'var warningMinutes=', String(warningMinutes), ';',
      'var warningMessage=', JSON.stringify(warningMessage), ';',
      'function normalizeLang(l){if(!l)return "es";l=(String(l).toLowerCase()).split(/[-_]/)[0];return ["es","ca","gl","eu","en","de","it","fr"].indexOf(l)!==-1?l:"es";}',
      'var strings={',
      'es:{t:"Nueva versión disponible",b:"Este recurso ha cambiado en la nube. ¿Quieres actualizarlo?",u:"Actualizar",d:"Ahora no",rt:"Acceso restringido",rb:"Este recurso no está disponible en este momento.",wt:"Aviso",wb:"El tiempo de acceso se agota en {minutes} minutos.",wc:"Cerrar"},',
      'ca:{t:"Nova versio disponible",b:"Aquest recurs ha canviat al nuvol. Vols actualitzar-lo?",u:"Actualitzar",d:"Ara no",rt:"Acces restringit",rb:"Aquest recurs no esta disponible en aquest moment.",wt:"Avís",wb:"El temps d\'acces s\'esgota en {minutes} minuts.",wc:"Tancar"},',
      'gl:{t:"Nova version dispoñible",b:"Este recurso cambiou na nube. Queres actualizalo?",u:"Actualizar",d:"Agora non",rt:"Acceso restrinxido",rb:"Este recurso non esta dispoñible neste momento.",wt:"Aviso",wb:"O tempo de acceso esgótase en {minutes} minutos.",wc:"Pechar"},',
      'eu:{t:"Bertsio berria eskuragarri",b:"Baliabidea hodeian aldatu da. Eguneratu nahi duzu?",u:"Eguneratu",d:"Orain ez",rt:"Sarbide mugatua",rb:"Baliabide hau une honetan ez dago eskuragarri.",wt:"Abisua",wb:"Sarbide-denbora {minutes} minututan amaituko da.",wc:"Itxi"},',
      'en:{t:"New version available",b:"This resource changed in the cloud. Update now?",u:"Update",d:"Not now",rt:"Restricted access",rb:"This resource is not available right now.",wt:"Warning",wb:"Access time will end in {minutes} minutes.",wc:"Close"},',
      'de:{t:"Neue Version verfugbar",b:"Diese Ressource hat sich in der Cloud geandert. Jetzt aktualisieren?",u:"Aktualisieren",d:"Jetzt nicht",rt:"Zugriff eingeschrankt",rb:"Diese Ressource ist im Moment nicht verfugbar.",wt:"Hinweis",wb:"Die Zugriffszeit endet in {minutes} Minuten.",wc:"Schliessen"},',
      'it:{t:"Nuova versione disponibile",b:"Questa risorsa e cambiata nel cloud. Vuoi aggiornarla?",u:"Aggiornare",d:"Non ora",rt:"Accesso limitato",rb:"Questa risorsa non e disponibile in questo momento.",wt:"Avviso",wb:"Il tempo di accesso terminera tra {minutes} minuti.",wc:"Chiudere"},',
      'fr:{t:"Nouvelle version disponible",b:"Cette ressource a change dans le cloud. Mettre a jour maintenant ?",u:"Mettre a jour",d:"Pas maintenant",rt:"Acces restreint",rb:"Cette ressource n\'est pas disponible pour le moment.",wt:"Avertissement",wb:"Le temps d\'acces se termine dans {minutes} minutes.",wc:"Fermer"}',
      '};',
      'var lang=normalizeLang((function(){try{return localStorage.getItem("visor-lang");}catch(e){return null;}})()||navigator.language||"es");',
      'var s=strings[lang]||strings.es;',
      'var titleEl=overlay.querySelector(".vwz-update-title");var bodyEl=overlay.querySelector(".vwz-update-body");',
      'if(titleEl)titleEl.textContent=s.t;if(bodyEl)bodyEl.textContent=s.b;',
      'if(btnUpdate)btnUpdate.textContent=s.u;if(btnDismiss)btnDismiss.textContent=s.d;',
      'var siteId=(overlay.getAttribute("data-site-id")||"");',
      'var dismissKey="vwz-update-dismissed:"+siteId;',
      'var lastRemoteMeta=null;',
      'function show(){overlay.classList.add("vwz-show");}',
      'function hide(){overlay.classList.remove("vwz-show");}',
      'function buildMetaToken(meta){if(!meta)return"";var parts=[];if(meta.etag)parts.push("e:"+meta.etag);if(meta.lastModified)parts.push("m:"+meta.lastModified);if(meta.size)parts.push("s:"+meta.size);if(meta.sampleHash)parts.push("h:"+meta.sampleHash);return parts.join("|");}',
      'function currentDismissKey(){var token=buildMetaToken(lastRemoteMeta);return token?(dismissKey+":"+token):dismissKey;}',
      'function isDismissed(){try{return sessionStorage.getItem(currentDismissKey())==="1";}catch(e){return false;}}',
      'function setDismissed(flag){try{var key=currentDismissKey();if(flag){sessionStorage.setItem(key,"1");}else{sessionStorage.removeItem(key);sessionStorage.removeItem(dismissKey);}}catch(e){}}',
      'var restrictHost=null;',
      'function showRestrict(){if(restrictHost)return;restrictHost=document.createElement("div");restrictHost.style.cssText="position:fixed;inset:0;z-index:2147483647;";var root=restrictHost.attachShadow?restrictHost.attachShadow({mode:"open"}):restrictHost;root.innerHTML="<style>.vwz-restrict-overlay{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(15,23,42,0.5);font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;}.vwz-restrict-card{max-width:520px;width:min(100%,520px);background:#fff;color:#0f172a;border:1px solid #dbe4f0;border-radius:16px;padding:22px 20px;box-shadow:0 18px 45px rgba(15,23,42,0.22);text-align:center;}.vwz-restrict-title{font-weight:700;font-size:1.5rem;line-height:1.15;margin-bottom:10px;}.vwz-restrict-body{font-size:1.08rem;line-height:1.4;color:#334155;}</style><div class=\\"vwz-restrict-overlay\\"><div class=\\"vwz-restrict-card\\" role=\\"dialog\\" aria-live=\\"assertive\\"><div class=\\"vwz-restrict-title\\"></div><div class=\\"vwz-restrict-body\\"></div></div></div>";var rt=root.querySelector(".vwz-restrict-title");var rb=root.querySelector(".vwz-restrict-body");if(rt)rt.textContent=s.rt;if(rb)rb.textContent=s.rb;document.documentElement.appendChild(restrictHost);}',
      'var warningHost=null;',
      'var warningKey=(overlay.getAttribute("data-site-id")||"")+"::"+String(restrictEndAt||"");',
      'function fillMessage(template){var base=template||s.wb||"";return base.replace(/\\{minutes\\}/g,String(warningMinutes));}',
      'function hasShownWarning(){try{return sessionStorage.getItem("vwz-warning-shown:"+warningKey)==="1";}catch(e){return false;}}',
      'function markWarningShown(){try{sessionStorage.setItem("vwz-warning-shown:"+warningKey,"1");}catch(e){}}',
      'function closeWarning(){if(warningHost&&warningHost.parentNode){warningHost.parentNode.removeChild(warningHost);}warningHost=null;}',
      'function showWarning(){if(warningHost||hasShownWarning())return;markWarningShown();warningHost=document.createElement("div");warningHost.style.cssText="position:fixed;inset:0;z-index:2147483646;";var root=warningHost.attachShadow?warningHost.attachShadow({mode:"open"}):warningHost;root.innerHTML="<style>.vwz-warning-wrap{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(15,23,42,0.48);font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;}.vwz-warning-card{max-width:620px;width:min(100%,620px);background:#fff;color:#0f172a;border:1px solid #dbe4f0;border-radius:16px;padding:20px 18px;box-shadow:0 18px 45px rgba(15,23,42,0.22);text-align:center;}.vwz-warning-title{font-weight:700;font-size:1.28rem;line-height:1.15;margin-bottom:10px;}.vwz-warning-body{font-size:1rem;line-height:1.4;color:#334155;margin-bottom:14px;}.vwz-warning-close{appearance:none;border:1px solid #cbd5e1;background:#fff;border-radius:999px;padding:8px 14px;font-size:0.9rem;font-weight:600;color:#0f172a;cursor:pointer;}</style><div class=\\"vwz-warning-wrap\\"><div class=\\"vwz-warning-card\\" role=\\"dialog\\" aria-live=\\"polite\\"><div class=\\"vwz-warning-title\\"></div><div class=\\"vwz-warning-body\\"></div><button type=\\"button\\" class=\\"vwz-warning-close\\"></button></div></div>";var wt=root.querySelector(".vwz-warning-title");var wb=root.querySelector(".vwz-warning-body");var wc=root.querySelector(".vwz-warning-close");if(wt)wt.textContent=s.wt||"Warning";if(wb)wb.textContent=fillMessage(warningMessage);if(wc)wc.textContent=s.wc||"Close";if(wc)wc.addEventListener("click",closeWarning);document.documentElement.appendChild(warningHost);}',
      'if(overlay.getAttribute("data-update-available")==="1"){if(!isDismissed()){show();}}else{setDismissed(false);}',
      'if(restrictLiveEnd){var endTs=Date.parse(restrictEndAt||"");var endTimer=null;var reloadRestricted=function(){try{location.reload();}catch(e){showRestrict();}};var checkEnd=function(){if(isNaN(endTs))return;var now=Date.now();var warnEnabled=warningMinutes>0;var warnTs=endTs-(warningMinutes*60000);if(warnEnabled&&now>=warnTs&&now<endTs){showWarning();}if(now>endTs){if(endTimer){clearInterval(endTimer);endTimer=null;}reloadRestricted();}};checkEnd();if(!isNaN(endTs)&&Date.now()<=endTs){endTimer=setInterval(checkEnd,1000);if(warningMinutes>0){var warnDelay=Math.max(0,(endTs-warningMinutes*60000)-Date.now());if(warnDelay<=2147483647){setTimeout(function(){if(Date.now()<endTs){showWarning();}},warnDelay);}}var delay=Math.max(0,endTs-Date.now()+200);if(delay<=2147483647){setTimeout(reloadRestricted,delay);}else{setTimeout(function(){if(Date.now()>endTs){reloadRestricted();}},2147483647);}}}',
      'function getBasePath(){var p=location.pathname;var idx=p.indexOf("/site/");if(idx!==-1){return p.slice(0,idx+1);}return "/";}',
      'function fetchConfig(){var url=getBasePath()+"config.js";return fetch(url,{cache:"no-store"}).then(function(r){return r.ok?r.text():"";}).then(function(text){var m=text.match(/GAS_WEBAPP_URL\\s*=\\s*[\"\\\']([^\"\\\']+)[\"\\\']/);return m?m[1]:"";}).catch(function(){return "";});}',
      'function openDb(){return new Promise(function(resolve,reject){var req=indexedDB.open("visor-web-sites",1);req.onupgradeneeded=function(){var db=req.result;if(!db.objectStoreNames.contains("sites")){db.createObjectStore("sites",{keyPath:"id"});}if(!db.objectStoreNames.contains("files")){var store=db.createObjectStore("files",{keyPath:"key"});store.createIndex("siteId","siteId",{unique:false});}};req.onsuccess=function(){resolve(req.result);};req.onerror=function(){reject(req.error);};});}',
      'function getSite(id){return openDb().then(function(db){return new Promise(function(resolve,reject){var tx=db.transaction("sites","readonly");var store=tx.objectStore("sites");var req=store.get(id);req.onsuccess=function(){resolve(req.result||null);};req.onerror=function(){reject(req.error);};});});}',
      'function saveSite(site){return openDb().then(function(db){return new Promise(function(resolve,reject){var tx=db.transaction("sites","readwrite");var store=tx.objectStore("sites");var req=store.put(site);req.onsuccess=function(){resolve();};req.onerror=function(){reject(req.error);};});});}',
      'function normalizeMeta(meta){if(!meta)return null;var s={};if(meta.size)s.size=meta.size;if(meta.etag)s.etag=meta.etag;if(meta.lastModified)s.lastModified=meta.lastModified;if(meta.sampleHash)s.sampleHash=meta.sampleHash;return Object.keys(s).length?s:null;}',
      'function mergeMeta(a,b){var s={};if(a){if(a.size)s.size=a.size;if(a.etag)s.etag=a.etag;if(a.lastModified)s.lastModified=a.lastModified;if(a.sampleHash)s.sampleHash=a.sampleHash;}if(b){if(b.size)s.size=b.size;if(b.etag)s.etag=b.etag;if(b.lastModified)s.lastModified=b.lastModified;if(b.sampleHash)s.sampleHash=b.sampleHash;}return Object.keys(s).length?s:null;}',
      'function isChanged(a,b){if(!a||!b)return false;var comparable=false;if(a.etag&&b.etag){comparable=true;if(a.etag!==b.etag)return true;}if(a.lastModified&&b.lastModified){comparable=true;if(a.lastModified!==b.lastModified)return true;}if(a.size&&b.size){comparable=true;if(a.size!==b.size)return true;}if(a.sampleHash&&b.sampleHash){comparable=true;if(a.sampleHash!==b.sampleHash)return true;}return comparable?false:false;}',
      'var checking=false;',
      'function check(){if(checking)return;checking=true;Promise.all([fetchConfig(),getSite(overlay.getAttribute("data-site-id"))]).then(function(res){var gasUrl=res[0];var site=res[1];if(!gasUrl||!site||!site.url){return;}var endpoint=gasUrl+"?url="+encodeURIComponent(site.url)+"&bundle=1&meta=1&ts="+Date.now();return fetch(endpoint,{cache:"no-store"}).then(function(r){return r.ok?r.json():null;}).then(function(data){if(!data||data.error){return;}var remote=normalizeMeta(data);if(!remote){return;}lastRemoteMeta=remote;var stored=site.remoteMeta||null;var changed=stored?isChanged(stored,remote):false;var nextMeta=changed?stored:mergeMeta(stored,remote);site.remoteMeta=nextMeta;site.updateAvailable=changed;return saveSite(site).then(function(){if(changed){if(!isDismissed()){show();}}else{setDismissed(false);}});});}).catch(function(){}).finally(function(){checking=false;});}',
      'setTimeout(check,1200);',
      'if("requestIdleCallback" in window){try{requestIdleCallback(check,{timeout:4000});}catch(e){}}',
      'setInterval(check,60000);',
      'if(btnDismiss){btnDismiss.addEventListener("click",function(){setDismissed(true);hide();});}',
      'if(btnUpdate){btnUpdate.addEventListener("click",function(){setDismissed(false);hide();getSite(overlay.getAttribute("data-site-id")).then(function(site){if(!site||!site.url)return;var base=getBasePath();var target=base+"?url="+encodeURIComponent(site.url)+"&view=full&force=1";if(site.indexPath){target+="&entry="+encodeURIComponent(site.indexPath);}location.assign(target);});});}',
      '})();</script>'
    ].join('');
    var lowerHtml = html.toLowerCase();
    var htmlCloseIdx = lowerHtml.lastIndexOf('</html>');
    if (htmlCloseIdx !== -1) {
      html = html.slice(0, htmlCloseIdx) + overlay + html.slice(htmlCloseIdx);
    } else {
      var bodyCloseIdx = lowerHtml.lastIndexOf('</body>');
      if (bodyCloseIdx !== -1) {
        html = html.slice(0, bodyCloseIdx) + overlay + html.slice(bodyCloseIdx);
      } else {
        html += overlay;
      }
    }
    return new Response(new Blob([html], { type: 'text/html' }), {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  });
}
