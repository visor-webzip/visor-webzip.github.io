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
  return Promise.resolve()
    .then(function () {
      if (path) {
        return path;
      }
      return getSite(siteId).then(function (site) {
        return site && site.indexPath ? site.indexPath : 'index.html';
      });
    })
    .then(function (resolvedPath) {
      return getFile(siteId, decodeURIComponent(resolvedPath)).then(function (record) {
        if (!record || !record.blob) {
          return new Response('Not cached', { status: 404 });
        }
        var type = record.type || guessMimeType(resolvedPath);
        return new Response(record.blob, {
          status: 200,
          headers: { 'Content-Type': type }
        });
      });
    });
}
