(function () {
  var UI = window.UI || {};
  var GAS_WEBAPP_URL = window.GAS_WEBAPP_URL || '';
  var t = window.t || function (key) { return key; };
  var base64ToBytes = window.base64ToBytes || function () { return new Uint8Array(0); };
  var CORS_PROXIES = [
    { url: 'https://corsproxy.io/?', encode: true },
    { url: 'https://cors.eu.org/', encode: false }
  ];

  function init(options) {
    options = options || {};
    if (options.ui) UI = options.ui;
    if (options.gasUrl) GAS_WEBAPP_URL = options.gasUrl;
    if (options.t) t = options.t;
    if (options.base64ToBytes) base64ToBytes = options.base64ToBytes;
    if (options.corsProxies && options.corsProxies.length) {
      CORS_PROXIES = options.corsProxies.slice();
    }
  }

  function formatMiB(bytes) {
    var mib = bytes / (1024 * 1024);
    return mib.toFixed(3).replace('.', ',') + ' MB';
  }

  function pad2(n) {
    return (n < 10 ? '0' : '') + n;
  }

  function formatEta(seconds) {
    if (!isFinite(seconds) || seconds < 0) return '';
    var s = Math.round(seconds);
    var h = Math.floor(s / 3600);
    s -= h * 3600;
    var m = Math.floor(s / 60);
    s -= m * 60;
    if (h > 0) return h + ':' + pad2(m) + ':' + pad2(s);
    return m + ':' + pad2(s);
  }

  function concatUint8Arrays(chunks, totalSize) {
    var size = totalSize;
    if (!size) {
      size = chunks.reduce(function (sum, chunk) { return sum + chunk.length; }, 0);
    }
    var out = new Uint8Array(size);
    var offset = 0;
    for (var i = 0; i < chunks.length; i++) {
      out.set(chunks[i], offset);
      offset += chunks[i].length;
    }
    if (offset !== size) {
      return out.slice(0, offset);
    }
    return out;
  }

  function parseFilenameFromDisposition(value) {
    if (!value) return '';
    var match = /filename\*=UTF-8''([^;]+)/i.exec(value);
    if (match && match[1]) {
      try {
        return decodeURIComponent(match[1].replace(/"/g, ''));
      } catch (e) {
        return match[1].replace(/"/g, '');
      }
    }
    match = /filename=([^;]+)/i.exec(value);
    if (match && match[1]) {
      return match[1].trim().replace(/^"|"$/g, '');
    }
    return '';
  }

  function deriveFilenameFromUrl(url) {
    if (!url) return 'site.zip';
    try {
      var parsed = new URL(url);
      var path = parsed.pathname || '';
      var parts = path.split('/').filter(Boolean);
      var last = parts.length ? parts[parts.length - 1] : '';
      if (last) return last;
    } catch (e) {
      // ignore
    }
    return 'site.zip';
  }

  function fetchZipBundleDirect(zipUrl) {
    var downloaded = 0;
    var totalSize = 0;
    var chunks = [];
    var etaTimer = null;
    var lastEtaText = '';
    var lastChunkAt = Date.now();
    var avgSpeed = 0;
    var etaBaseSeconds = 0;
    var etaBaseAt = 0;
    var lastEtaSeconds = 0;
    var baseProgress = 0;
    var maxProgress = baseProgress;
    var hasStartedDownload = false;
    var dotPhase = 0;
    var dotText = '.';
    var resolvedName = '';
    var downloadStartedAt = 0;

    function buildDownloadMessage() {
      var pct = 0;
      var message = hasStartedDownload
        ? (t('loading.downloadedPrefix') + formatMiB(downloaded))
        : (t('status.connecting') + dotText);
      if (hasStartedDownload && totalSize) {
        pct = downloaded / totalSize;
        if (pct < 0) pct = 0;
        if (pct > 1) pct = 1;
        message += ' / ' + formatMiB(totalSize) + ' (' + Math.round(pct * 100) + '%)';
      }
      return { message: message, pct: pct };
    }

    function updateEta() {
      if (!totalSize || !avgSpeed) {
        UI.setLoadingEtaVisible(false);
        return;
      }
      if (!downloadStartedAt) {
        UI.setLoadingEtaVisible(false);
        return;
      }
      if (downloaded < 5 * 1024 * 1024) {
        UI.setLoadingEtaVisible(false);
        return;
      }
      var elapsedOverall = (Date.now() - downloadStartedAt) / 1000;
      if (elapsedOverall < 2) {
        UI.setLoadingEtaVisible(false);
        return;
      }
      var elapsed = (Date.now() - etaBaseAt) / 1000;
      var overallSpeed = elapsedOverall > 0 ? (downloaded / elapsedOverall) : 0;
      var speed = Math.max(avgSpeed || 0, overallSpeed || 0);
      if (!speed) {
        UI.setLoadingEtaVisible(false);
        return;
      }
      var etaSeconds = (totalSize - downloaded) / speed;
      if (isNaN(etaSeconds) || !isFinite(etaSeconds)) {
        UI.setLoadingEtaVisible(false);
        return;
      }
      // Smooth sudden spikes
      if (lastEtaSeconds && etaSeconds > lastEtaSeconds * 1.5) {
        etaSeconds = lastEtaSeconds * 1.5;
      }
      if (etaSeconds < 0) etaSeconds = 0;
      if (lastEtaSeconds && etaSeconds > lastEtaSeconds) {
        etaSeconds = lastEtaSeconds;
      }
      lastEtaSeconds = etaSeconds;
      var etaText = formatEta(etaSeconds);
      if (etaText) {
        UI.setLoadingEta(t('loading.etaPrefix') + etaText);
        UI.setLoadingEtaVisible(true);
      } else {
        UI.setLoadingEtaVisible(false);
      }
    }

    function updateDownloadProgress() {
      var info = buildDownloadMessage();
      UI.setLoadingMessage(info.message);

      if (!totalSize) {
        if (UI.setLoadingProgressVisible) {
          UI.setLoadingProgressVisible(false);
        }
        return;
      }
      if (UI.setLoadingProgressVisible) {
        UI.setLoadingProgressVisible(true);
      }
      var pct = info.pct;
      var progress = baseProgress + Math.round(pct * 100);
      if (progress > 100) progress = 100;
      if (progress < maxProgress) progress = maxProgress;
      maxProgress = progress;
      UI.setProgress(progress);
    }

    UI.stopProgress();
    UI.startProgress(2);
    UI.setLoadingMessage(t('status.connecting') + '...');
    updateDownloadProgress();
    etaTimer = setInterval(function () {
      dotPhase = (dotPhase + 1) % 3;
      dotText = dotPhase === 0 ? '.' : (dotPhase === 1 ? '..' : '...');
      var info = buildDownloadMessage();
      if (info.message !== lastEtaText) {
        lastEtaText = info.message;
        UI.setLoadingMessage(info.message);
      }
      if (totalSize && downloaded) {
        updateEta();
      }
    }, 1000);

    function finalize(name) {
      if (etaTimer) {
        clearInterval(etaTimer);
        etaTimer = null;
      }
      var zipBytes = concatUint8Arrays(chunks, totalSize || downloaded);
      if (!zipBytes || zipBytes.length < 4 || zipBytes[0] !== 0x50 || zipBytes[1] !== 0x4b) {
        throw new Error('ZIP_SIGNATURE_MISSING');
      }
      return {
        name: name || resolvedName || deriveFilenameFromUrl(zipUrl) || 'site.zip',
        size: totalSize || zipBytes.length,
        bytes: zipBytes
      };
    }

    function buildProxyUrl(proxy, targetUrl) {
      if (!proxy || !proxy.url) return targetUrl;
      if (proxy.encode) {
        return proxy.url + encodeURIComponent(targetUrl);
      }
      return proxy.url + targetUrl;
    }

    function fetchWithCorsFallback(targetUrl) {
      return fetch(targetUrl, { method: 'GET', mode: 'cors', credentials: 'omit' })
        .then(function (response) {
          if (response && response.ok) return response;
          throw new Error('HTTP ' + (response ? response.status : '0'));
        })
        .catch(function () {
          var chain = Promise.reject();
          CORS_PROXIES.forEach(function (proxy) {
            chain = chain.catch(function () {
              var proxyUrl = buildProxyUrl(proxy, targetUrl);
              return fetch(proxyUrl, { method: 'GET', mode: 'cors', credentials: 'omit' })
                .then(function (response) {
                  if (response && response.ok) {
                    return response;
                  }
                  throw new Error('HTTP ' + (response ? response.status : '0'));
                });
            });
          });
          return chain;
        });
    }

    return fetchWithCorsFallback(zipUrl)
      .then(function (response) {
        if (!response.ok) {
          throw new Error('HTTP ' + response.status);
        }
        var contentLength = response.headers.get('Content-Length');
        totalSize = contentLength ? parseInt(contentLength, 10) : 0;
        resolvedName = parseFilenameFromDisposition(response.headers.get('Content-Disposition'));
        if (!resolvedName) {
          resolvedName = deriveFilenameFromUrl(zipUrl);
        }

        var contentType = (response.headers.get('Content-Type') || '').toLowerCase();
        if (contentType && contentType.indexOf('text/html') !== -1) {
          throw new Error('ZIP_SIGNATURE_MISSING');
        }
        if (response.body && response.body.getReader) {
          var reader = response.body.getReader();

          function pump() {
            return reader.read().then(function (result) {
              if (result.done) return null;
              var value = result.value;
              if (value && value.length) {
                if (!hasStartedDownload) {
                  hasStartedDownload = true;
                  downloadStartedAt = Date.now();
                  UI.stopProgress();
                  UI.setProgress(0);
                }
                chunks.push(value);
                downloaded += value.length;
                var now = Date.now();
                var delta = Math.max(0.2, (now - lastChunkAt) / 1000);
                var chunkSpeed = value.length / delta;
                avgSpeed = avgSpeed ? (avgSpeed * 0.8 + chunkSpeed * 0.2) : chunkSpeed;
                lastChunkAt = now;
                if (totalSize) {
                  etaBaseSeconds = (totalSize - downloaded) / avgSpeed;
                  etaBaseAt = now;
                  if (!lastEtaSeconds) lastEtaSeconds = etaBaseSeconds;
                }
                updateDownloadProgress();
              }
              return pump();
            });
          }

          return pump().then(function () {
            return finalize(resolvedName);
          });
        }

        return response.arrayBuffer().then(function (buffer) {
          var bytes = new Uint8Array(buffer || []);
          chunks.push(bytes);
          downloaded = bytes.length;
          if (!downloadStartedAt && downloaded) {
            downloadStartedAt = Date.now();
          }
          return finalize(resolvedName);
        });
      })
      .catch(function (err) {
        if (etaTimer) {
          clearInterval(etaTimer);
          etaTimer = null;
        }
        throw err;
      });
  }

  function hasGas() {
    return !!GAS_WEBAPP_URL;
  }

  function isGoogleDriveUrl(url) {
    if (!url) return false;
    try {
      var host = (new URL(url)).hostname || '';
      host = host.toLowerCase();
      if (host === 'drive.google.com' || host.endsWith('.drive.google.com')) return true;
    } catch (e) {
      // ignore
    }
    return /drive\.google\.com/i.test(url);
  }

  function isBoxUrl(url) {
    if (!url) return false;
    try {
      var host = (new URL(url)).hostname || '';
      host = host.toLowerCase();
      if (host === 'box.com' || host === 'app.box.com' || /(^|\.)box\.com$/.test(host)) return true;
    } catch (e) {
      // ignore
    }
    return /(?:^|\/\/)(?:app\.)?box\.com\//i.test(url);
  }

  function fetchZipBundleViaGas(zipUrl) {
    var endpoint = GAS_WEBAPP_URL + '?url=' + encodeURIComponent(zipUrl) + '&bundle=1&ts=' + Date.now();
    return fetch(endpoint, { cache: 'no-store' })
      .then(function (res) {
        if (!res.ok) {
          throw new Error('HTTP ' + res.status);
        }
        return res.json();
      })
      .then(function (data) {
        if (data && data.error) {
          throw new Error(data.error);
        }
        var bytes = base64ToBytes(data && data.base64 ? data.base64 : '');
        return {
          name: (data && data.name) ? data.name : (deriveFilenameFromUrl(zipUrl) || 'site.zip'),
          size: (data && data.size) ? data.size : bytes.length,
          bytes: bytes
        };
      });
  }

  function fetchZipBundle(zipUrl) {
    if (hasGas() && isBoxUrl(zipUrl)) {
      return fetchZipBundleChunked(zipUrl);
    }
    return fetchZipBundleDirect(zipUrl).catch(function (err) {
      if (!hasGas()) {
        throw err;
      }
      if (isGoogleDriveUrl(zipUrl)) {
        return fetchZipBundleMeta(zipUrl).then(function (meta) {
          var name = (meta && meta.name) ? String(meta.name).toLowerCase() : '';
          if (/\.h5p$/i.test(name)) {
            return fetchZipBundleViaGas(zipUrl);
          }
          return fetchZipBundleChunked(zipUrl);
        }).catch(function () {
          return fetchZipBundleChunked(zipUrl);
        });
      }
      return fetchZipBundleChunked(zipUrl);
    });
  }

  function fetchZipBundleMeta(zipUrl) {
    var endpoint = GAS_WEBAPP_URL + '?url=' + encodeURIComponent(zipUrl) + '&bundle=1&meta=1&ts=' + Date.now();
    return fetch(endpoint, { cache: 'no-store' })
      .then(function (res) {
        if (!res.ok) {
          throw new Error('HTTP ' + res.status);
        }
        return res.json();
      })
      .then(function (data) {
        if (data && data.error) {
          throw new Error(data.error);
        }
        return data || {};
      });
  }

  function fetchZipBundleChunked(zipUrl) {
    var meta = { name: 'site.zip', size: 0, acceptRanges: false, etag: '', lastModified: '' };
    var chunkSize = 20 * 1024 * 1024;
    var chunks = [];
    var downloaded = 0;
    var totalSize = 0;
    var etaTimer = null;
    var lastEtaText = '';
    var lastChunkAt = Date.now();
    var avgSpeed = 0;
    var etaBaseSeconds = 0;
    var etaBaseAt = 0;
    var lastEtaSeconds = 0;
    var baseProgress = 0;
    var maxProgress = baseProgress;
    var hasStartedDownload = false;
    var dotPhase = 0;
    var dotText = '.';
    var downloadStartedAt = 0;
    var maxParallel = 3;

    function buildDownloadMessage() {
      var pct = 0;
      var message = hasStartedDownload
        ? (t('loading.downloadedPrefix') + formatMiB(downloaded))
        : (t('status.connecting') + dotText);
      if (hasStartedDownload && totalSize) {
        pct = downloaded / totalSize;
        if (pct < 0) pct = 0;
        if (pct > 1) pct = 1;
        message += ' / ' + formatMiB(totalSize) + ' (' + Math.round(pct * 100) + '%)';
      }
      return { message: message, pct: pct };
    }

    function updateEta() {
      if (!totalSize || !avgSpeed) {
        UI.setLoadingEtaVisible(false);
        return;
      }
      if (!downloadStartedAt) {
        UI.setLoadingEtaVisible(false);
        return;
      }
      if (downloaded < 5 * 1024 * 1024) {
        UI.setLoadingEtaVisible(false);
        return;
      }
      var elapsedOverall = (Date.now() - downloadStartedAt) / 1000;
      if (elapsedOverall < 2) {
        UI.setLoadingEtaVisible(false);
        return;
      }
      var elapsed = (Date.now() - etaBaseAt) / 1000;
      var overallSpeed = elapsedOverall > 0 ? (downloaded / elapsedOverall) : 0;
      var speed = Math.max(avgSpeed || 0, overallSpeed || 0);
      if (!speed) {
        UI.setLoadingEtaVisible(false);
        return;
      }
      var etaSeconds = (totalSize - downloaded) / speed;
      if (isNaN(etaSeconds) || !isFinite(etaSeconds)) {
        UI.setLoadingEtaVisible(false);
        return;
      }
      if (lastEtaSeconds && etaSeconds > lastEtaSeconds * 1.5) {
        etaSeconds = lastEtaSeconds * 1.5;
      }
      if (etaSeconds < 0) etaSeconds = 0;
      if (lastEtaSeconds && etaSeconds > lastEtaSeconds) {
        etaSeconds = lastEtaSeconds;
      }
      lastEtaSeconds = etaSeconds;
      var etaText = formatEta(etaSeconds);
      if (etaText) {
        UI.setLoadingEta(t('loading.etaPrefix') + etaText);
        UI.setLoadingEtaVisible(true);
      } else {
        UI.setLoadingEtaVisible(false);
      }
    }

    function updateDownloadProgress() {
      var info = buildDownloadMessage();
      UI.setLoadingMessage(info.message);

      if (!totalSize) {
        if (UI.setLoadingProgressVisible) {
          UI.setLoadingProgressVisible(false);
        }
        return;
      }
      if (UI.setLoadingProgressVisible) {
        UI.setLoadingProgressVisible(true);
      }
      var pct = info.pct;
      var progress = baseProgress + Math.round(pct * 100);
      if (progress > 100) progress = 100;
      if (progress < maxProgress) progress = maxProgress;
      maxProgress = progress;
      UI.setProgress(progress);
    }

    UI.stopProgress();
    UI.startProgress(2);
    UI.setLoadingMessage(t('status.connecting') + '...');
    updateDownloadProgress();
    etaTimer = setInterval(function () {
      dotPhase = (dotPhase + 1) % 3;
      dotText = dotPhase === 0 ? '.' : (dotPhase === 1 ? '..' : '...');
      var info = buildDownloadMessage();
      if (info.message !== lastEtaText) {
        lastEtaText = info.message;
        UI.setLoadingMessage(info.message);
      }
      if (totalSize && downloaded) {
        updateEta();
      }
    }, 1000);

    function fetchPart(part, attempt) {
      var tries = typeof attempt === 'number' ? attempt : 0;
      var endpoint = GAS_WEBAPP_URL + '?url=' + encodeURIComponent(zipUrl) + '&bundle=1&part=' + part + '&chunkSize=' + chunkSize;
      return fetch(endpoint)
        .then(function (res) {
          if (!res.ok) {
            throw new Error('HTTP ' + res.status);
          }
          return res.json();
        })
        .then(function (data) {
          if (data && data.error) {
            throw new Error(data.error);
          }
          if (data && data.chunkSize && data.chunkSize !== chunkSize) {
            chunkSize = data.chunkSize;
          }
          if (!meta.name && data.name) meta.name = data.name;
          if (!totalSize && data.totalSize) totalSize = data.totalSize;
          if (!meta.acceptRanges && data.acceptRanges) meta.acceptRanges = true;
          if (totalSize && meta.size !== totalSize) meta.size = totalSize;
          var partBytes = base64ToBytes(data.base64 || '');
          if (partBytes.length) {
            if (!hasStartedDownload) {
              hasStartedDownload = true;
              downloadStartedAt = Date.now();
              UI.stopProgress();
              UI.setProgress(0);
            }
          }
          chunks.push(partBytes);
          downloaded += partBytes.length;
          var now = Date.now();
          var delta = Math.max(0.2, (now - lastChunkAt) / 1000);
          var chunkSpeed = partBytes.length / delta;
          avgSpeed = avgSpeed ? (avgSpeed * 0.8 + chunkSpeed * 0.2) : chunkSpeed;
          lastChunkAt = now;
          if (totalSize) {
            etaBaseSeconds = (totalSize - downloaded) / avgSpeed;
            etaBaseAt = now;
            if (!lastEtaSeconds) lastEtaSeconds = etaBaseSeconds;
          }
          updateDownloadProgress();
          if (totalSize && downloaded >= totalSize) {
            return;
          }
          if (!totalSize && partBytes.length < chunkSize) {
            return;
          }
          return fetchPart(part + 1, 0);
        })
        .catch(function (err) {
          if (tries >= 2) {
            throw err;
          }
          UI.setLoadingMessage('Reintentando trozo ' + (part + 1) + ' (' + (tries + 1) + '/2)...');
          return new Promise(function (resolve) { setTimeout(resolve, 700 * (tries + 1)); })
            .then(function () { return fetchPart(part, tries + 1); });
        });
    }

    function fetchPartOnce(part, attempt) {
      var tries = typeof attempt === 'number' ? attempt : 0;
      var endpoint = GAS_WEBAPP_URL + '?url=' + encodeURIComponent(zipUrl) + '&bundle=1&part=' + part + '&chunkSize=' + chunkSize;
      return fetch(endpoint)
        .then(function (res) {
          if (!res.ok) {
            throw new Error('HTTP ' + res.status);
          }
          return res.json();
        })
        .then(function (data) {
          if (data && data.error) {
            throw new Error(data.error);
          }
          if (data && data.chunkSize && data.chunkSize !== chunkSize) {
            chunkSize = data.chunkSize;
          }
          if (!meta.name && data.name) meta.name = data.name;
          if (!totalSize && data.totalSize) totalSize = data.totalSize;
          if (!meta.acceptRanges && data.acceptRanges) meta.acceptRanges = true;
          if (totalSize && meta.size !== totalSize) meta.size = totalSize;
          var partBytes = base64ToBytes(data.base64 || '');
          if (partBytes.length) {
            if (!hasStartedDownload) {
              hasStartedDownload = true;
              downloadStartedAt = Date.now();
              UI.stopProgress();
              UI.setProgress(0);
            }
          }
          chunks[part] = partBytes;
          downloaded += partBytes.length;
          var now = Date.now();
          var delta = Math.max(0.2, (now - lastChunkAt) / 1000);
          var chunkSpeed = partBytes.length / delta;
          avgSpeed = avgSpeed ? (avgSpeed * 0.8 + chunkSpeed * 0.2) : chunkSpeed;
          lastChunkAt = now;
          if (totalSize) {
            etaBaseSeconds = (totalSize - downloaded) / avgSpeed;
            etaBaseAt = now;
            if (!lastEtaSeconds) lastEtaSeconds = etaBaseSeconds;
          }
          updateDownloadProgress();
          return partBytes.length;
        })
        .catch(function (err) {
          if (tries >= 2) {
            throw err;
          }
          UI.setLoadingMessage('Reintentando trozo ' + (part + 1) + ' (' + (tries + 1) + '/2)...');
          return new Promise(function (resolve) { setTimeout(resolve, 700 * (tries + 1)); })
            .then(function () { return fetchPartOnce(part, tries + 1); });
        });
    }

    function fetchPartsParallel(totalParts) {
      var nextPart = 0;
      var active = 0;
      return new Promise(function (resolve, reject) {
        function pump() {
          while (active < maxParallel && nextPart < totalParts) {
            (function (part) {
              active += 1;
              fetchPartOnce(part, 0).then(function () {
                active -= 1;
                if (downloaded >= totalSize || chunks.filter(Boolean).length >= totalParts) {
                  resolve();
                  return;
                }
                pump();
              }).catch(function (err) {
                reject(err);
              });
            })(nextPart);
            nextPart += 1;
          }
          if (active === 0 && nextPart >= totalParts) {
            resolve();
          }
        }
        pump();
      });
    }

    function finalizeChunks() {
      if (etaTimer) {
        clearInterval(etaTimer);
        etaTimer = null;
      }
      var zipBytes = concatUint8Arrays(chunks.filter(function (c) { return c && c.length; }), totalSize || downloaded);
      return {
        name: meta.name || 'site.zip',
        size: totalSize || zipBytes.length,
        bytes: zipBytes
      };
    }

    var metaPromise = fetchZipBundleMeta(zipUrl).then(function (data) {
      if (data && data.name) meta.name = data.name;
      if (data && data.size) meta.size = data.size;
      if (data && data.acceptRanges) meta.acceptRanges = true;
      if (data && data.etag) meta.etag = data.etag;
      if (data && data.lastModified) meta.lastModified = data.lastModified;
      if (meta.size) totalSize = meta.size;
    }).catch(function () {
      // ignore meta errors
    });

    return metaPromise.then(function () {
      if (totalSize && maxParallel > 1) {
        var totalParts = Math.ceil(totalSize / chunkSize);
        return fetchPartsParallel(totalParts).then(function () {
          return finalizeChunks();
        });
      }
      return fetchPart(0, 0).then(function () {
        return finalizeChunks();
      });
    }).catch(function (err) {
      if (etaTimer) {
        clearInterval(etaTimer);
        etaTimer = null;
      }
      throw err;
    });
  }

  window.Downloads = {
    init: init,
    hasGas: hasGas,
    fetchZipBundle: fetchZipBundle,
    fetchZipBundleDirect: fetchZipBundleDirect,
    fetchZipBundleChunked: fetchZipBundleChunked,
    fetchZipBundleChunkedParallel: fetchZipBundleChunked,
    fetchZipBundleMeta: fetchZipBundleMeta,
    formatMiB: formatMiB,
    formatEta: formatEta,
    concatUint8Arrays: concatUint8Arrays
  };
})();
