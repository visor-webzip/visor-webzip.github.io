(function () {
  var form = document.querySelector('[data-form]');
  var input = document.querySelector('[data-url]');
  var output = document.querySelector('[data-output]');
  var iframe = document.querySelector('[data-view]');

  function buildFixedUrl(siteId) {
    if (!GAS_WEBAPP_URL) {
      return '';
    }
    var base = GAS_WEBAPP_URL.replace(/\/exec\/?$/, '/exec');
    return base + '/site/' + siteId + '/';
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var zipUrl = input.value.trim();
    if (!zipUrl) {
      return;
    }

    if (!GAS_WEBAPP_URL) {
      output.textContent = 'Configura GAS_WEBAPP_URL en docs/config.js.';
      return;
    }

    output.textContent = 'Creando...';
    fetch(GAS_WEBAPP_URL + '?url=' + encodeURIComponent(zipUrl) + '&json=1')
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.error) {
          output.textContent = data.error;
          return;
        }
        var link = buildFixedUrl(data.siteId);
        output.textContent = link;
        iframe.src = link;
      })
      .catch(function () {
        output.textContent = 'No se pudo generar el enlace.';
      });
  });
})();
