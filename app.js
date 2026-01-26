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

  function buildFixedUrl(siteId) {
    if (!GAS_WEBAPP_URL) {
      return '';
    }
    var base = GAS_WEBAPP_URL.replace(/\/exec\/?$/, '/exec');
    return base + '/site/' + siteId + '/';
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
    fetch(GAS_WEBAPP_URL + '?url=' + encodeURIComponent(zipUrl) + '&json=1')
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.error) {
          output.textContent = data.error;
          return;
        }
        var link = buildFixedUrl(data.siteId);
        setLink(link);
      })
      .catch(function () {
        output.textContent = 'No se pudo generar el enlace.';
        if (copyButton) {
          copyButton.disabled = true;
        }
        if (openLink) {
          openLink.setAttribute('aria-disabled', 'true');
        }
      });
  });
})();
