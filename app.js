(function () {
  var form = document.querySelector('[data-form]');
  var input = document.querySelector('[data-url]');
  var output = document.querySelector('[data-output]');
  var iframe = document.querySelector('[data-view]');
  var copyButton = document.querySelector('[data-copy]');
  var openLink = document.querySelector('[data-open]');
  var currentLink = '';

  function setLink(link) {
    currentLink = link;
    output.textContent = link;
    if (iframe) {
      iframe.src = link;
    }
    if (copyButton) {
      copyButton.disabled = !link;
    }
    if (openLink) {
      openLink.href = link;
      openLink.setAttribute('aria-disabled', link ? 'false' : 'true');
    }
  }

  function flashMessage(message) {
    output.textContent = message;
    if (currentLink) {
      setTimeout(function () {
        output.textContent = currentLink;
      }, 1200);
    }
  }

  function buildFixedUrl(siteId, indexPath) {
    if (!GAS_WEBAPP_URL) {
      return '';
    }
    var base = GAS_WEBAPP_URL.replace(/\/exec\/?$/, '/exec');
    if (indexPath) {
      return base + '/site/' + siteId + '/' + encodeURI(indexPath);
    }
    return base + '/site/' + siteId + '/';
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

  function warmSite(zipUrl) {
    if (!GAS_WEBAPP_URL) {
      return;
    }
    var warmUrl = GAS_WEBAPP_URL + '?url=' + encodeURIComponent(zipUrl);
    try {
      fetch(warmUrl, { mode: 'no-cors' });
    } catch (err) {
      // Ignore warm-up errors.
    }
  }

  if (copyButton) {
    copyButton.addEventListener('click', function () {
      if (!currentLink) {
        return;
      }
      var done = function () {
        flashMessage('Enlace copiado.');
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(currentLink).then(done, done);
        return;
      }
      var textarea = document.createElement('textarea');
      textarea.value = currentLink;
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

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var zipUrl = input.value.trim();
    if (!zipUrl) {
      return;
    }

    if (!GAS_WEBAPP_URL) {
      output.textContent = 'Configura GAS_WEBAPP_URL en docs/config.js.';
      if (copyButton) {
        copyButton.disabled = true;
      }
      if (openLink) {
        openLink.setAttribute('aria-disabled', 'true');
      }
      return;
    }

    output.textContent = 'Creando...';
    if (copyButton) {
      copyButton.disabled = true;
    }
    if (openLink) {
      openLink.setAttribute('aria-disabled', 'true');
    }

    warmSite(zipUrl);

    var fallbackShown = false;
    var fallbackPromise = computeSiteId(zipUrl)
      .then(function (siteId) {
        var link = buildFixedUrl(siteId, '');
        setLink(link);
        fallbackShown = true;
        output.textContent = 'Enlace generado. Si es la primera vez, puede tardar en cargar.';
      })
      .catch(function () {
        // Ignore; JSON may still succeed.
      });

    var controller = new AbortController();
    var timeout = setTimeout(function () {
      controller.abort();
    }, 15000);

    fetch(GAS_WEBAPP_URL + '?url=' + encodeURIComponent(zipUrl) + '&json=1', { signal: controller.signal })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        clearTimeout(timeout);
        if (data.error) {
          output.textContent = data.error;
          return;
        }
        var link = buildFixedUrl(data.siteId, data.indexPath);
        setLink(link);
        output.textContent = link;
      })
      .catch(function () {
        clearTimeout(timeout);
        if (!fallbackShown) {
          fallbackPromise.then(function () {
            // fallback handles UI
          });
        }
      });
  });
})();
