// Set this to your published Apps Script web app URL.
// Example: https://script.google.com/macros/s/AKfycb.../exec
var GAS_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbxTxNMhU6DsxfnwbtqfLzafj9AvMDYMyDG0qd03vKW8M2grSpZtsjerwO5NtxeWCWbI/exec';

// *** PROTECCIÓN DEL DESPLIEGUE DEL AUTOR ***
//
// El GAS_WEBAPP_URL de arriba apunta al Google Apps Script del autor del
// repositorio. Si alguien clona el repo y lo publica en otro dominio, seguiría
// consumiendo la cuota de Google del autor. Para evitarlo, comprobamos en qué
// dominio se ejecuta la aplicación:
//
//   - Sitio oficial (visor-webzip.github.io): se usa el GAS_WEBAPP_URL tal cual.
//   - Ejecución local (localhost, 127.0.0.1, file://, *.local): se permite,
//     para que el autor y quien colabore puedan desarrollar y probar.
//   - Cualquier otro dominio (un fork publicado en otro sitio): se anula el
//     GAS_WEBAPP_URL y se muestra un aviso indicando que hay que desplegar el
//     propio Google Apps Script (ver README.md).
(function () {
  var host = (location.hostname || '').toLowerCase();

  var isOfficial = host === 'visor-webzip.github.io';
  var isLocal =
    location.protocol === 'file:' ||
    host === '' ||
    host === 'localhost' ||
    host === '127.0.0.1' ||
    host === '0.0.0.0' ||
    host === '[::1]' ||
    host.endsWith('.local') ||
    host.endsWith('.localhost');

  if (isOfficial || isLocal) return;

  // Despliegue en un dominio ajeno: no usar el GAS del autor.
  GAS_WEBAPP_URL = '';

  var DOCS_URL =
    'https://github.com/visor-webzip/visor-webzip.github.io/blob/main/README.md#1-backend-en-google-apps-script';

  // Traducciones del aviso, en los mismos idiomas que el resto de la aplicación.
  // config.js es un script plano que se carga antes que i18n.js, así que se
  // replica aquí la detección de idioma (clave 'visor-lang') y los textos.
  var NOTICE_I18N = {
    es: {
      lead: 'Configuración pendiente.',
      body: 'Esta copia del Visor Web-ZIP no se ejecuta en el sitio oficial, así que la descarga de recursos está desactivada para no usar la cuenta de Google de otra persona. Despliega tu propio Google Apps Script y pon su URL en <code>GAS_WEBAPP_URL</code> (config.js).',
      link: 'Ver instrucciones de despliegue',
      close: 'Cerrar aviso'
    },
    ca: {
      lead: 'Configuració pendent.',
      body: "Aquesta còpia del Visor Web-ZIP no s'executa al lloc oficial, així que la baixada de recursos està desactivada per no fer servir el compte de Google d'una altra persona. Desplega el teu propi Google Apps Script i posa la seva URL a <code>GAS_WEBAPP_URL</code> (config.js).",
      link: 'Veure instruccions de desplegament',
      close: 'Tancar avís'
    },
    gl: {
      lead: 'Configuración pendente.',
      body: 'Esta copia do Visor Web-ZIP non se executa no sitio oficial, así que a descarga de recursos está desactivada para non usar a conta de Google doutra persoa. Desprega o teu propio Google Apps Script e pon o seu URL en <code>GAS_WEBAPP_URL</code> (config.js).',
      link: 'Ver instrucións de despregamento',
      close: 'Pechar aviso'
    },
    eu: {
      lead: 'Konfigurazioa egiteke.',
      body: 'Visor Web-ZIP-en kopia hau ez da gune ofizialean exekutatzen, beraz, baliabideen deskarga desgaituta dago beste norbaiten Google kontua ez erabiltzeko. Zabaldu zure Google Apps Script propioa eta jarri haren URLa <code>GAS_WEBAPP_URL</code> aldagaian (config.js).',
      link: 'Ikusi hedapen-argibideak',
      close: 'Itxi oharra'
    },
    en: {
      lead: 'Configuration needed.',
      body: "This copy of Visor Web-ZIP is not running on the official site, so resource downloads are disabled to avoid using someone else's Google account. Deploy your own Google Apps Script and set its URL in <code>GAS_WEBAPP_URL</code> (config.js).",
      link: 'See deployment instructions',
      close: 'Close notice'
    },
    fr: {
      lead: 'Configuration requise.',
      body: 'Cette copie de Visor Web-ZIP ne s\'exécute pas sur le site officiel : le téléchargement des ressources est donc désactivé afin de ne pas utiliser le compte Google d\'une autre personne. Déployez votre propre Google Apps Script et indiquez son URL dans <code>GAS_WEBAPP_URL</code> (config.js).',
      link: 'Voir les instructions de déploiement',
      close: 'Fermer l\'avis'
    },
    it: {
      lead: 'Configurazione necessaria.',
      body: 'Questa copia del Visore Web-ZIP non è in esecuzione nel sito ufficiale, quindi il download delle risorse è disattivato per non usare l\'account Google di un\'altra persona. Distribuisci il tuo Google Apps Script e inserisci il suo URL in <code>GAS_WEBAPP_URL</code> (config.js).',
      link: 'Vedere le istruzioni di distribuzione',
      close: 'Chiudere l\'avviso'
    },
    de: {
      lead: 'Konfiguration erforderlich.',
      body: 'Diese Kopie von Visor Web-ZIP läuft nicht auf der offiziellen Seite, daher ist der Ressourcen-Download deaktiviert, um nicht das Google-Konto einer anderen Person zu verwenden. Stelle dein eigenes Google Apps Script bereit und trage dessen URL in <code>GAS_WEBAPP_URL</code> (config.js) ein.',
      link: 'Bereitstellungsanleitung ansehen',
      close: 'Hinweis schließen'
    }
  };

  function noticeLang() {
    var avail = Object.keys(NOTICE_I18N);
    var stored;
    try { stored = localStorage.getItem('visor-lang'); } catch (e) { /* ignore */ }
    if (stored) {
      stored = String(stored).toLowerCase().split('-')[0].split('_')[0];
      if (avail.indexOf(stored) !== -1) return stored;
    }
    var browser = (navigator.language || 'es').slice(0, 2).toLowerCase();
    return avail.indexOf(browser) !== -1 ? browser : 'es';
  }

  function showNotice() {
    if (document.getElementById('vwz-foreign-notice')) return;
    var tr = NOTICE_I18N[noticeLang()];

    var bar = document.createElement('div');
    bar.id = 'vwz-foreign-notice';
    bar.setAttribute('role', 'alert');
    bar.style.cssText = [
      'position:fixed', 'left:0', 'right:0', 'bottom:0', 'z-index:99999',
      'background:#7f1d1d', 'color:#fff', 'padding:12px 16px',
      'font:14px/1.5 system-ui,sans-serif', 'box-shadow:0 -2px 8px rgba(0,0,0,.3)',
      'display:flex', 'gap:12px', 'align-items:flex-start',
      'justify-content:space-between', 'flex-wrap:wrap'
    ].join(';');

    var text = document.createElement('div');
    text.style.flex = '1 1 320px';
    text.innerHTML =
      '<strong>' + tr.lead + '</strong> ' + tr.body + ' ' +
      '<a href="' + DOCS_URL + '" target="_blank" rel="noopener" ' +
      'style="color:#fde68a;text-decoration:underline;">' + tr.link + '</a>.';

    var close = document.createElement('button');
    close.type = 'button';
    close.textContent = '✕';
    close.setAttribute('aria-label', tr.close);
    close.style.cssText =
      'background:transparent;border:0;color:#fff;font-size:18px;cursor:pointer;line-height:1;padding:0 4px;';
    close.addEventListener('click', function () { bar.remove(); });

    bar.appendChild(text);
    bar.appendChild(close);
    document.body.appendChild(bar);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showNotice);
  } else {
    showNotice();
  }
})();
