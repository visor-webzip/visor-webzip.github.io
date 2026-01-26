(function () {
  var form = document.querySelector('[data-form]');
  var input = document.querySelector('[data-url]');
  var output = document.querySelector('[data-output]');
  var copyButton = document.querySelector('[data-copy]');
  var openLink = document.querySelector('[data-open]');
  var loadingScreen = document.querySelector('[data-loading]');
  var loadingMessage = document.querySelector('[data-loading-message]');
  var loadingBar = document.querySelector('[data-loading-bar]');
  var mainContent = document.querySelector('[data-main]');
  var serviceSelect = document.querySelector('[data-service]');
  var serviceNote = document.querySelector('[data-service-note]');
  var helpOpen = document.querySelector('[data-help-open]');
  var helpModal = document.querySelector('[data-help-modal]');
  var helpCloseButtons = document.querySelectorAll('[data-help-close]');

  var currentShareLink = '';
  var loadingActive = false;
  var progressTimer = null;

  var DB_NAME = 'visor-web-sites';
  var DB_VERSION = 1;
  var STORE_SITES = 'sites';
  var STORE_FILES = 'files';

  var SERVICE_INFO = {
    drive: {
      placeholder: 'https://drive.google.com/...',
      note: 'Google Drive:\n- Comparte el ZIP como "Cualquiera con el enlace".\n- Usa un enlace de archivo o de compartir.\n- El sistema convierte el enlace a descarga directa.'
    },
    dropbox: {
      placeholder: 'https://www.dropbox.com/...',
      note: 'Dropbox:\n- Asegura que el archivo sea publico o con enlace compartido.\n- Cambia ?dl=0 por ?dl=1 para descarga directa.'
    },
    onedrive: {
      placeholder: 'https://1drv.ms/...',
      note: 'OneDrive:\n- Comparte el ZIP para que cualquiera con el enlace pueda verlo.\n- Usa el enlace de descarga directa (suele incluir download=1).'
    },
    github: {
      placeholder: 'https://github.com/usuario/repo/archive/refs/heads/main.zip',
      note: 'GitHub:\n- Usa un enlace directo a un ZIP.\n- Ejemplo: https://github.com/usuario/repo/archive/refs/heads/main.zip'
    },
    other: {
      placeholder: 'https://servidor.com/archivo.zip',
      note: 'Otros servicios:\n- Debe ser un enlace directo al ZIP.\n- Evita enlaces que requieran login o cookies.'
    }
  };

  function updateServiceInfo() {
    if (!serviceSelect) return;
    var key = serviceSelect.value || 'drive';
    var info = SERVICE_INFO[key] || SERVICE_INFO.other;
    if (serviceNote) {
      serviceNote.textContent = info.note;
    }
    if (input) {
      input.placeholder = info.placeholder;
    }
  }

  function setLoading(active) {
    loadingActive = !!active;
    if (loadingScreen) {
      if (active) {
        loadingScreen.removeAttribute('hidden');
      } else {
        loadingScreen.setAttribute('hidden', '');
      }
    }
    document.body.setAttribute('data-loading', active ? 'true' : 'false');
    if (!active) {
      stopProgress();
    }
  }

  function setLoadingMessage(message) {
    if (loadingMessage) {
      loadingMessage.textContent = message;
    }
  }

  function setProgress(value) {
    if (!loadingBar) return;
    var percent = Math.max(0, Math.min(100, value));
    loadingBar.style.width = percent + '%';
  }

  function startProgress(initial) {
    stopProgress();
    var current = initial || 5;
    setProgress(current);
    progressTimer = setInterval(function () {
      current = Math.min(current + 2, 85);
      setProgress(current);
    }, 600);
  }

  function stopProgress() {
    if (progressTimer) {
      clearInterval(progressTimer);
      progressTimer = null;
    }
  }
  function appBase() {
    var path = window.location.pathname;
    if (!path.endsWith('/')) {
      path = path.replace(/[^/]+$/, '');
    }
    return window.location.origin + path;
  }

  function setStatus(message) {
    output.textContent = message;
    if (loadingActive && !(message && /^https?:\/\//i.test(message))) {
      setLoadingMessage(message);
    }
  }

  function setShareLink(link) {
    currentShareLink = link;
    output.textContent = link;
    if (copyButton) {
      copyButton.disabled = !link;
    }
    if (openLink) {
      openLink.href = link || '#';
      openLink.setAttribute('aria-disabled', link ? 'false' : 'true');
    }
  }

  function flashMessage(message) {
    output.textContent = message;
    if (currentShareLink) {
      setTimeout(function () {
        output.textContent = currentShareLink;
      }, 1500);
    }
  }

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) {
      return Promise.reject(new Error('Service worker no disponible.'));
    }
    return navigator.serviceWorker.register('sw.js', { scope: './' }).then(function () {
      return navigator.serviceWorker.ready;
    });
  }

  function waitForServiceWorkerControl() {
    if (!('serviceWorker' in navigator)) {
      return Promise.resolve();
    }
    if (navigator.serviceWorker.controller) {
      return Promise.resolve();
    }
    return new Promise(function (resolve) {
      var resolved = false;
      var finish = function () {
        if (resolved) return;
        resolved = true;
        navigator.serviceWorker.removeEventListener('controllerchange', onChange);
        resolve();
      };
      var onChange = function () {
        if (navigator.serviceWorker.controller) {
          finish();
        }
      };
      navigator.serviceWorker.addEventListener('controllerchange', onChange);
      setTimeout(finish, 5000);
    });
  }

  function openDb() {
    return new Promise(function (resolve, reject) {
      var request = window.indexedDB.open(DB_NAME, DB_VERSION);
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
  }

  function withStore(storeName, mode, action) {
    return openDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(storeName, mode);
        var store = tx.objectStore(storeName);
        var request = action(store);
        request.onsuccess = function () {
          resolve(request.result);
        };
        request.onerror = function () {
          reject(request.error);
        };
      });
    });
  }

  function getSite(siteId) {
    return withStore(STORE_SITES, 'readonly', function (store) {
      return store.get(siteId);
    });
  }

  function saveSite(site) {
    return withStore(STORE_SITES, 'readwrite', function (store) {
      return store.put(site);
    });
  }

  function saveFiles(files) {
    if (!files.length) {
      return Promise.resolve();
    }
    return openDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(STORE_FILES, 'readwrite');
        var store = tx.objectStore(STORE_FILES);
        files.forEach(function (file) {
          store.put(file);
        });
        tx.oncomplete = function () {
          resolve();
        };
        tx.onerror = function () {
          reject(tx.error);
        };
      });
    });
  }

  function deleteSite(siteId) {
    return openDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction([STORE_SITES, STORE_FILES], 'readwrite');
        tx.objectStore(STORE_SITES).delete(siteId);
        var fileStore = tx.objectStore(STORE_FILES);
        var index = fileStore.index('siteId');
        var request = index.getAllKeys(IDBKeyRange.only(siteId));
        request.onsuccess = function () {
          var keys = request.result || [];
          keys.forEach(function (key) {
            fileStore.delete(key);
          });
        };
        tx.oncomplete = function () {
          resolve();
        };
        tx.onerror = function () {
          reject(tx.error);
        };
      });
    });
  }

  function normalizePath(path) {
    return path.replace(/\\/g, '/').replace(/^\.?\//, '');
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

  function extractDriveId(url) {
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

  function normalizeZipUrl(url) {
    var driveId = extractDriveId(url);
    if (driveId) {
      return 'https://drive.google.com/uc?export=download&id=' + driveId;
    }
    if (url.indexOf('dropbox.com') !== -1) {
      return url.replace(/([?&])dl=0\b/, '$1dl=1');
    }
    return url;
  }

  function sha1Hex(value) {
    if (!window.crypto || !window.crypto.subtle || !window.TextEncoder) {
      return Promise.reject(new Error('SHA-1 no disponible en este navegador.'));
    }
    var data = new TextEncoder().encode(value);
    return window.crypto.subtle.digest('SHA-1', data).then(function (hash) {
      var bytes = Array.from(new Uint8Array(hash));
      return bytes.map(function (b) {
        return ('0' + b.toString(16)).slice(-2);
      }).join('');
    });
  }

  function computeSiteId(zipUrl) {
    return sha1Hex(normalizeZipUrl(zipUrl));
  }

  function buildShareLink(zipUrl, fullView) {
    var base = appBase() + '?url=' + encodeURIComponent(zipUrl);
    if (fullView) {
      base += '&view=full';
    }
    return base;
  }

  function buildSiteUrl(siteId, indexPath) {
    var base = appBase() + 'site/' + siteId + '/';
    if (indexPath) {
      return base + encodeURI(indexPath);
    }
    return base;
  }

  function base64ToBytes(base64) {
    var binary = atob(base64);
    var len = binary.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  function fetchZipBundle(zipUrl) {
    if (!GAS_WEBAPP_URL) {
      return Promise.reject(new Error('Configura GAS_WEBAPP_URL en docs/config.js.'));
    }
    var endpoint = GAS_WEBAPP_URL + '?url=' + encodeURIComponent(zipUrl) + '&bundle=1';
    return fetch(endpoint)
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.error) {
          throw new Error(data.error);
        }
        return data;
      });
  }

  function findIndexPath(paths) {
    var lower = paths.map(function (path) { return path.toLowerCase(); });
    var idx = lower.indexOf('index.html');
    if (idx !== -1) return paths[idx];
    idx = lower.indexOf('index.htm');
    if (idx !== -1) return paths[idx];
    var htmlIndex = lower.findIndex(function (p) { return p.endsWith('.html') || p.endsWith('.htm'); });
    if (htmlIndex !== -1) return paths[htmlIndex];
    return paths[0] || '';
  }

  function loadZip(zipUrl, options) {
    var opts = options || {};
    var autoOpen = !!opts.autoOpen;
    var showProgress = opts.showProgress !== false;
    if (autoOpen) {
      setLoading(true);
      setProgress(5);
      setLoadingMessage('Preparando...');
    }
    if (!GAS_WEBAPP_URL) {
      setStatus('Configura GAS_WEBAPP_URL en docs/config.js.');
      if (showProgress && !autoOpen) {
        setLoading(false);
      }
      return Promise.resolve();
    }
    setStatus('Preparando ZIP...');
    if (autoOpen) {
      startProgress(8);
    }

    var workerPromise = registerServiceWorker().catch(function () {
      throw new Error('Este navegador no permite el visor offline.');
    });
    var controlPromise = workerPromise.then(function () {
      return waitForServiceWorkerControl();
    });

    return computeSiteId(zipUrl)
      .then(function (siteId) {
        return getSite(siteId).then(function (site) {
          return { siteId: siteId, cached: !!site, site: site };
        });
      })
      .then(function (result) {
        var shareLink = buildShareLink(zipUrl, true);
        setShareLink(shareLink);

        if (result.cached && !opts.force) {
          var siteUrl = buildSiteUrl(result.siteId, result.site.indexPath);
          return controlPromise.then(function () {
            if (autoOpen) {
              setProgress(100);
              window.location.assign(siteUrl);
            }
            if (showProgress && !autoOpen) {
              setLoading(false);
            }
            return { siteId: result.siteId, siteUrl: siteUrl };
          });
        }

        setStatus('Descargando ZIP...');
        if (showProgress && !autoOpen) {
          setLoading(true);
          setLoadingMessage('Descargando ZIP...');
        }
        if (autoOpen) {
          startProgress(20);
        } else if (showProgress) {
          startProgress(20);
        }
        return fetchZipBundle(zipUrl).then(function (bundle) {
          setStatus('Descomprimiendo...');
          if (autoOpen) {
            stopProgress();
            setProgress(70);
          } else if (showProgress) {
            stopProgress();
            setProgress(70);
          }
          if (!window.fflate || !window.fflate.unzipSync) {
            throw new Error('No se pudo cargar el motor ZIP (fflate).');
          }
          var bytes = base64ToBytes(bundle.base64);
          var entries = window.fflate.unzipSync(bytes);
          var files = [];
          Object.keys(entries).forEach(function (entryPath) {
            if (entryPath.endsWith('/') || entryPath.indexOf('__MACOSX/') === 0) {
              return;
            }
            var normalized = normalizePath(entryPath);
            var data = entries[entryPath];
            var type = guessMimeType(normalized);
            var blob = new Blob([data], { type: type });
            files.push({
              key: result.siteId + '::' + normalized,
              siteId: result.siteId,
              path: normalized,
              blob: blob,
              size: blob.size,
              type: type
            });
          });

          if (!files.length) {
            throw new Error('El ZIP no contiene archivos web.');
          }

          var paths = files.map(function (file) { return file.path; });
          var indexPath = findIndexPath(paths);
          if (!indexPath) {
            throw new Error('No se encontro un index.html.');
          }

          setStatus('Guardando en el navegador...');
          if (autoOpen) {
            stopProgress();
            setProgress(85);
          } else if (showProgress) {
            stopProgress();
            setProgress(85);
          }

          return deleteSite(result.siteId).catch(function () {
            // Ignore delete errors.
          }).then(function () {
            var site = {
              id: result.siteId,
              url: normalizeZipUrl(zipUrl),
              indexPath: indexPath,
              updatedAt: Date.now(),
              fileCount: files.length,
              totalBytes: files.reduce(function (sum, item) { return sum + item.size; }, 0)
            };
            return saveSite(site).then(function () {
              return saveFiles(files).then(function () {
                var siteUrl = buildSiteUrl(result.siteId, indexPath);
                return controlPromise.then(function () {
                  if (autoOpen) {
                    window.location.assign(siteUrl);
                  }
                  if (showProgress && !autoOpen) {
                    setProgress(100);
                    stopProgress();
                    setLoading(false);
                  }
                  return { siteId: result.siteId, siteUrl: siteUrl };
                });
              });
            });
          });
        });
      })
      .then(function () {
        setStatus(currentShareLink);
      })
      .catch(function (err) {
        setShareLink('');
        setStatus(err.message || 'No se pudo cargar el ZIP.');
        if (autoOpen) {
          setLoading(false);
        }
        if (showProgress && !autoOpen) {
          stopProgress();
          setLoading(false);
        }
      });
  }

  if (copyButton) {
    copyButton.addEventListener('click', function () {
      if (!currentShareLink) {
        return;
      }
      var done = function () {
        flashMessage('Enlace copiado.');
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(currentShareLink).then(done, done);
        return;
      }
      var textarea = document.createElement('textarea');
      textarea.value = currentShareLink;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        done();
      } finally {
        document.body.removeChild(textarea);
      }
    });
  }

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var zipUrl = input.value.trim();
      if (!zipUrl) {
        return;
      }
      loadZip(zipUrl, { force: true });
    });
  }

  var params = new URLSearchParams(window.location.search);
  var urlParam = params.get('url');
  if (serviceSelect) {
    serviceSelect.addEventListener('change', updateServiceInfo);
    updateServiceInfo();
  }
  if (helpOpen && helpModal) {
    helpOpen.addEventListener('click', function () {
      helpModal.removeAttribute('hidden');
    });
    helpCloseButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        helpModal.setAttribute('hidden', '');
      });
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        helpModal.setAttribute('hidden', '');
      }
    });
  }
  if (urlParam) {
    if (input) {
      input.value = urlParam;
    }
    var viewParam = (params.get('view') || '').toLowerCase();
    var autoOpen = viewParam === 'full' || viewParam === '1';
    loadZip(urlParam, { force: false, autoOpen: autoOpen });
  } else {
    setLoading(false);
  }
})();
