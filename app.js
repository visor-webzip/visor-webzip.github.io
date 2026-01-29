(function () {
  var form = document.querySelector('[data-form]');
  var input = document.querySelector('[data-url]');
  var output = document.querySelector('[data-output]');
  var copyButton = document.querySelector('[data-copy]');
  var openLink = document.querySelector('[data-open]');
  var stepThree = document.querySelector('[data-step-three]');
  var loadingScreen = document.querySelector('[data-loading]');
  var loadingMessage = document.querySelector('[data-loading-message]');
  var loadingBar = document.querySelector('[data-loading-bar]');
  var mainContent = document.querySelector('[data-main]');
  var aboutOpen = document.querySelector('[data-about-open]');
  var aboutModal = document.querySelector('[data-about-modal]');
  var aboutCloseButtons = document.querySelectorAll('[data-about-close]');
  var htmlModal = document.querySelector('[data-html-modal]');
  var htmlList = document.querySelector('[data-html-list]');
  var htmlConfirm = document.querySelector('[data-html-confirm]');
  var htmlCloseButtons = document.querySelectorAll('[data-html-close]');
  var tabButtons = document.querySelectorAll('[data-tab]');
  var tabPanels = document.querySelectorAll('[data-tab-panel]');
  var managerList = document.querySelector('[data-manager-list]');
  var storageUsed = document.querySelector('[data-storage-used]');
  var storageUsedPercent = document.querySelector('[data-storage-used-percent]');
  var storageTotal = document.querySelector('[data-storage-total]');
  var storageCount = document.querySelector('[data-storage-count]');
  var deleteAllButton = document.querySelector('[data-delete-all]');
  var dropzone = document.querySelector('[data-dropzone]');
  var folderInput = document.querySelector('[data-folder-input]');
  var fileInput = document.querySelector('[data-file-input]');
  var folderButton = document.querySelector('[data-folder-button]');
  var fileButton = document.querySelector('[data-file-button]');
  var uploadStatus = document.querySelector('[data-upload-status]');
  var buildZipButton = document.querySelector('[data-build-zip]');
  var zipStatus = document.querySelector('[data-zip-status]');
  var zipNameInput = document.querySelector('[data-zip-name]');
  var langSelect = document.querySelector('[data-lang-select]');
  var cleanupThresholdInput = document.querySelector('[data-cleanup-threshold]');
  var cleanupThresholdValue = document.querySelector('[data-cleanup-threshold-value]');
  var cleanupDaysInput = document.querySelector('[data-cleanup-days]');
  var resetCleanupButton = document.querySelector('[data-reset-cleanup]');
  var managerSortSelect = document.querySelector('[data-manager-sort]');

  var currentShareLink = '';
  var loadingActive = false;
  var progressTimer = null;
  var selectedFiles = [];
  var zipNameDirty = false;
  var htmlPickerResolve = null;
  var htmlPickerReject = null;
  var htmlPickerWasLoading = false;
  var toastTimer = null;
  var inlineToastTimer = null;
  var activeTitleEdit = null;

  var DB_NAME = 'visor-web-sites';
  var DB_VERSION = 1;
  var STORE_SITES = 'sites';
  var STORE_FILES = 'files';

  var I18N = {
    es: {
      page: { title: 'Visor Web-ZIP' },
      loading: {
        title: 'Cargando material',
        message: 'Preparando...',
        note: 'Este proceso puede tardar unos segundos la primera vez.'
      },
      header: {
        eyebrow: 'Materiales en ZIP',
        title: 'Visor Web-ZIP',
        help: 'Ayuda',
        subtitle: 'Comparte tus recursos educativos desde tu almacenamiento favorito en la nube.'
      },
      lang: {
        label: 'Idioma',
        es: 'Español',
        ca: 'Català',
        gl: 'Galego',
        eu: 'Euskara',
        en: 'English',
        de: 'Deutsch'
      },
      tab: {
        main: '2. Compartir recurso',
        zipper: '1. Crear ZIP',
        manager: 'Gestor de recursos'
      },
      tabs: {
        label: 'Secciones'
      },
      main: {
        subtitle: 'Para compartir tu recurso debes haberlo subido a Internet (Drive, Dropbox, etc.) en formato ZIP y compartirlo para que todo el mundo pueda verlo.',
        form: {
          title: 'Pega aquí el enlace público',
          step: 'Paso 1: pega el enlace público al ZIP y pulsa “Crear enlace”.',
          placeholder: 'Pega aquí el enlace público del ZIP',
          submit: 'Crear enlace'
        },
        output: {
          title: 'Enlace para compartir',
          step: 'Paso 2: copia el enlace o abre la vista previa.',
          placeholder: 'Enlace para compartir',
          copy: 'Copiar enlace',
          open: 'Abrir vista previa'
        }
      },
      service: {
        drive: 'Google Drive',
        dropbox: 'Dropbox',
        nextcloud: 'Nextcloud',
        github: 'GitHub',
        other: 'Otros servicios',
        drivePlaceholder: 'https://drive.google.com/...',
        dropboxPlaceholder: 'https://www.dropbox.com/...',
        nextcloudPlaceholder: 'https://tu-servidor/s/...',
        githubPlaceholder: 'https://github.com/usuario/repo/archive/refs/heads/main.zip',
        otherPlaceholder: 'https://servidor.com/archivo.zip'
      },
      manager: {
        title: 'Recursos guardados',
        subtitle: 'Gestiona el espacio que ocupan los materiales guardados en este navegador.',
        deleteAll: 'Eliminar todos los recursos',
        stats: {
          used: 'Espacio usado',
          total: 'Espacio total',
          count: 'Recursos guardados'
        },
        sort: {
          label: 'Ordenar por',
          title: 'Título',
          date: 'Fecha',
          size: 'Tamaño',
          dirAsc: 'Ascendente',
          dirDesc: 'Descendente',
          dirHelp: 'Cambiar sentido de orden.'
        },
        deleteAllHelp: 'Borra todos los recursos guardados en este navegador.',
        settings: {
          usage: {
            label: 'Límite de uso antes de limpiar',
            help: 'Si se supera este porcentaje de la cuota, se borran los recursos más antiguos.'
          },
          days: {
            label: 'Días para borrar recursos antiguos',
            help: 'Si un recurso no se abre en este periodo, se eliminará automáticamente.',
            suffix: 'días'
          },
          reset: 'Restaurar valores por defecto',
          resetHelp: 'Vuelve a 70% y 30 días y aplica la limpieza.'
        },
        actions: {
          view: 'Ver',
          share: 'Compartir',
          edit: 'Editar',
          download: 'Descargar ZIP'
        },
        editPrompt: 'Título del recurso',
        empty: 'No hay recursos guardados en este navegador.',
        siteNoUrl: 'Sitio sin URL',
        noDate: 'sin fecha'
      },
      zipper: {
        title: 'Crear ZIP para el visor',
        subtitle: {
          lead: 'Para compartir tu recurso, comprime los archivos (o la carpeta que los contiene) en un archivo .zip.',
          exeSentenceHtml: 'Si usas <strong>eXeLearning</strong>, también puedes crear el ZIP desde el propio programa y pasar directamente a la siguiente pestaña.'
        },
        exe: {
          tooltip: 'Cómo exportar desde eXeLearning. Versión 2.x: Archivo > Exportar > Sitio Web > Archivo comprimido ZIP. Versión 3.x: Archivo > Descargar como > Sitio web.',
          tooltipHtml: '<strong>Cómo exportar desde eXeLearning:</strong><br>• Versión 2.x: Archivo &gt; Exportar &gt; Sitio Web &gt; Archivo comprimido ZIP.<br>• Versión 3.x: Archivo &gt; Descargar como &gt; Sitio web.'
        },
        step1: {
          title: '1. Añade tus archivos',
          note: 'Paso 1: arrastra la carpeta o selecciona los archivos desde el botón.',
          detail: 'Puedes arrastrar una carpeta o archivos. También puedes seleccionar una carpeta completa desde el botón.'
        },
        dropzone: {
          title: 'Arrastra aquí la carpeta o los archivos',
          hint: 'Se respetan las carpetas internas.',
          folder: 'Elegir carpeta',
          files: 'Elegir archivos'
        },
        status: {
          empty: 'No hay archivos seleccionados.',
          filesReady: 'Archivos listos: {count}.',
          ready: 'Listo para crear el ZIP.',
          readyHint: 'Prepara el ZIP para obtener tu archivo.',
          selectFirst: 'Selecciona archivos o una carpeta primero.',
          engineMissing: 'No se pudo cargar el motor ZIP.',
          creating: 'Creando ZIP...',
          downloaded: 'ZIP descargado.',
          failed: 'No se pudo crear el ZIP. Revisa los archivos.'
        },
        step2: {
          title: '2. Descarga el ZIP',
          note: 'Paso 2: crea el ZIP y se descargará automáticamente.',
          detail: 'Al crear el ZIP se descargará un archivo que puedes subir a Drive, Dropbox, Nextcloud, etc.'
        },
        zipName: {
          label: 'Nombre del ZIP',
          placeholder: 'materiales',
          default: 'materiales'
        },
        build: 'Crear y descargar ZIP',
        help: {
          title: '¿Qué hacer con el ZIP?',
          step1: 'Sube el ZIP a un servicio con enlace público (Drive, Dropbox, GitHub…).',
          step2: 'Copia el enlace público y pégalo en la pestaña “2. Compartir recurso”.',
          step3: 'Comparte el enlace generado por el visor con tu alumnado.'
        }
      },
      html: {
        title: 'Elige el HTML inicial',
        subtitle: 'No se encontró un index.html. Selecciona el archivo HTML que quieres abrir primero.',
        confirm: 'Usar este HTML'
      },
      about: {
        title: '¿Qué hace este visor?',
        intro: 'Este visor abre un ZIP que contiene una web sencilla con HTML, CSS, imágenes, vídeos, audio y enlaces internos para que puedas compartirla con tu alumnado sin instalar nada.',
        can: {
          title: 'Qué puedes subir',
          item1: 'ZIPs con páginas web estáticas y sus recursos (archivos HTML, imágenes, audio, vídeo, PDF, etc.).',
          item2: 'Materiales creados con eXeLearning u otras herramientas que exportan a web.',
          item3: 'Cualquier material creado con IA (documentos, infografías, etc.) que puedas descargar como página web (HTML).',
          item4: 'Carpetas con un HTML principal (normalmente <code>index.html</code>).'
        },
        cant: {
          title: 'Qué no funciona o puede fallar',
          item1: 'Webs que necesitan servidor (formularios que guardan datos, bases de datos, PHP o similar).',
          item2: 'Enlaces externos que requieren iniciar sesión o permisos especiales.',
          item3: 'ZIPs que no contienen ningún archivo HTML.'
        },
        how: {
          title: 'Cómo funciona',
          step1: 'Prepara tu recurso como una carpeta con páginas web (HTML) y comprímelo en ZIP. Puedes hacerlo en la pestaña “1. Crear ZIP”.',
          step2: 'Sube el ZIP a un servicio con enlace público (Google Drive, Dropbox, Nextcloud, GitHub…).',
          step3: 'Comparte el archivo para que cualquiera con el enlace pueda verlo.',
          step4: 'Copia la URL y pégala en el campo “Pega aquí el enlace público”.',
          step5: 'El enlace para compartir es permanente, así que puedes distribuirlo al alumnado.'
        },
        drive: {
          title: 'Importante sobre Google Drive',
          note: 'Google Drive limita la descarga directa de archivos grandes (aprox. 25 MB). Si tu ZIP supera ese tamaño, puede fallar. Dropbox, Nextcloud y otros servicios suelen permitir archivos más grandes sin ese límite.'
        },
        body: '<p>Visor Web_ZIP genera enlaces permanentes a recursos educativos en formato web almacenados en servicios de almacenamiento en la nube como Google Drive o Dropbox, facilitando su publicación y acceso por parte del alumnado.</p>'
          + '<div class="about-section"><h3>Guía rápida</h3><ol><li>En "1. Crear ZIP" comprime tu carpeta con HTML en un .zip.</li><li>Sube el archivo ZIP a un servicio de almacenamiento en la nube (Google Drive, Dropbox, etc.) y compártelo para que cualquier persona con el enlace pueda verlo.</li><li>En "2. Compartir recurso" pega el enlace público al ZIP y pulsa "Crear enlace".</li><li>Comparte el enlace generado con tu alumnado.</li></ol></div>'
          + '<div class="about-section"><h3>1. Crear ZIP</h3><ul><li>Incluye un <code>index.html</code> si es posible.</li><li>Si no hay <code>index.html</code>, el visor te pedirá qué HTML abrir primero.</li></ul></div>'
          + '<div class="about-section"><h3>2. Compartir recurso</h3><ol><li>Pega el enlace público del ZIP.</li><li>El visor detecta automáticamente el tipo de enlace.</li><li>Pulsa "Crear enlace" y copia el resultado.</li></ol></div>'
          + '<div class="about-section"><h3>3. Recursos guardados</h3><ul><li>En esta pestaña puedes ver y gestionar los recursos que has abierto desde este navegador.</li><li><strong>Ver</strong> abre el recurso guardado.</li><li><strong>Compartir</strong> copia el enlace público del visor (pantalla completa).</li><li><strong>Editar</strong> cambia el título.</li><li><strong>Eliminar</strong> borra ese recurso del navegador.</li></ul></div>'
          + '<div class="about-section"><h3>Qué funciona y qué puede fallar</h3><ul><li>Funciona con webs estáticas (HTML, CSS, imágenes, audio, vídeo, PDF...).</li><li>No funciona con webs que requieren servidor (formularios con BD, PHP, etc.).</li><li>Google Drive limita descargas directas de archivos grandes (~25 MB).</li></ul></div>'
      },
      error: {
        driveTooLarge: 'El archivo es demasiado grande y Google Drive limita las descargas.',
        loadZip: 'No se pudo cargar el ZIP.',
        noHtmlSelected: 'No se seleccionó ningún HTML.',
        htmlPickerOpen: 'No se pudo abrir el selector de HTML.',
        serviceWorkerUnavailable: 'Service worker no disponible.',
        sha1Unavailable: 'SHA-1 no disponible en este navegador.',
        configMissing: 'Configura GAS_WEBAPP_URL en config.js.',
        needHtmlFile: 'El ZIP necesita al menos un archivo .html.',
        offlineNotAllowed: 'Este navegador no permite el visor offline.',
        fflateMissing: 'No se pudo cargar el motor ZIP (fflate).',
        zipNoWebFiles: 'El ZIP no contiene archivos web.',
        noSpace: 'No hay espacio suficiente en el navegador.'
      },
      status: {
        preparing: 'Preparando...',
        preparingZip: 'Preparando ZIP...',
        downloadingZip: 'Descargando ZIP...',
        unpacking: 'Descomprimiendo...',
        saving: 'Guardando en el navegador...',
        copySuccess: 'Enlace copiado.'
      },
      common: {
        close: 'Cerrar',
        cancel: 'Cancelar',
        delete: 'Eliminar'
      },
      units: ['B', 'KB', 'MB', 'GB']
    },
    ca: {
      page: { title: 'Visor Web-ZIP' },
      loading: {
        title: 'Carregant material',
        message: 'Preparant...',
        note: 'Aquest procés pot trigar uns segons la primera vegada.'
      },
      header: {
        eyebrow: 'Materials en ZIP',
        title: 'Visor Web-ZIP',
        help: 'Ajuda',
        subtitle: 'Comparteix els teus recursos educatius des del teu emmagatzematge favorit al núvol.'
      },
      lang: {
        label: 'Idioma',
        es: 'Español',
        ca: 'Català',
        gl: 'Galego',
        eu: 'Euskara',
        en: 'English',
        de: 'Deutsch'
      },
      tab: {
        main: '2. Compartir recurs',
        zipper: '1. Crear ZIP',
        manager: 'Gestor de recursos'
      },
      tabs: {
        label: 'Seccions'
      },
      main: {
        subtitle: "Per compartir el teu recurs l'has d'haver pujat a Internet (Drive, Dropbox, etc.) en format ZIP i compartir-lo perquè tothom el pugui veure.",
        form: {
          title: "Enganxa aquí l'enllaç públic",
          step: 'Pas 1: enganxa l’enllaç públic al ZIP i prem “Crear enllaç”.',
          placeholder: "Enganxa aquí l'enllaç públic del ZIP",
          submit: 'Crear enllaç'
        },
        output: {
          title: 'Enllaç per compartir',
          step: 'Pas 2: copia l’enllaç o obre la vista prèvia.',
          placeholder: 'Enllaç per compartir',
          copy: 'Copiar enllaç',
          open: 'Obrir vista prèvia'
        }
      },
      service: {
        drive: 'Google Drive',
        dropbox: 'Dropbox',
        nextcloud: 'Nextcloud',
        github: 'GitHub',
        other: 'Altres serveis',
        drivePlaceholder: 'https://drive.google.com/...',
        dropboxPlaceholder: 'https://www.dropbox.com/...',
        nextcloudPlaceholder: 'https://el-teu-servidor/s/...',
        githubPlaceholder: 'https://github.com/usuari/repositori/archive/refs/heads/main.zip',
        otherPlaceholder: 'https://servidor.com/arxiu.zip'
      },
      manager: {
        title: 'Recursos desats',
        subtitle: 'Gestiona l’espai que ocupen els materials desats en aquest navegador.',
        deleteAll: 'Eliminar tots els recursos',
        deleteAllHelp: 'Esborra tots els recursos desats en aquest navegador.',
        stats: {
          used: 'Espai usat',
          total: 'Espai total',
          count: 'Recursos desats'
        },
        sort: {
          label: 'Ordenar per',
          title: 'Títol',
          date: 'Data',
          size: 'Mida',
          dirAsc: 'Ascendent',
          dirDesc: 'Descendent',
          dirHelp: 'Canviar el sentit d’ordenació.'
        },
        settings: {
          usage: {
            label: 'Límit d’ús abans de netejar',
            help: 'Si se supera aquest percentatge de la quota, s’esborraran els recursos més antics.'
          },
          days: {
            label: 'Dies per esborrar recursos antics',
            help: 'Si un recurs no s’obre en aquest període, s’eliminarà automàticament.',
            suffix: 'dies'
          },
          reset: 'Restaurar valors per defecte',
          resetHelp: 'Torna a 70% i 30 dies i aplica la neteja.'
        },
        actions: {
          view: 'Veure',
          share: 'Compartir',
          edit: 'Editar',
          download: 'Descarregar ZIP'
        },
        editPrompt: 'Títol del recurs',
        empty: 'No hi ha recursos desats en aquest navegador.',
        siteNoUrl: 'Lloc sense URL',
        noDate: 'sense data'
      },
      zipper: {
        title: 'Crear ZIP per al visor',
        subtitle: {
          lead: 'Per compartir el teu recurs has de comprimir els fitxers (o la carpeta que els conté) en un arxiu ZIP.',
          exeSentenceHtml: "Si fas servir <strong>eXeLearning</strong>, també pots crear el ZIP des del mateix programa i passar directament a la pestanya següent."
        },
        exe: {
          tooltip: "Com exportar des d'eXeLearning. Versió 2.x: Fitxer > Exportar > Lloc web > Arxiu comprimit ZIP. Versió 3.x: Fitxer > Descarregar com > Lloc web.",
          tooltipHtml: "<strong>Com exportar des d'eXeLearning:</strong><br>• Versió 2.x: Fitxer &gt; Exportar &gt; Lloc web &gt; Arxiu comprimit ZIP.<br>• Versió 3.x: Fitxer &gt; Descarregar com &gt; Lloc web."
        },
        step1: {
          title: '1. Afegeix els teus fitxers',
          note: 'Pas 1: arrossega la carpeta o selecciona els fitxers des del botó.',
          detail: 'Pots arrossegar una carpeta o fitxers. També pots seleccionar una carpeta completa des del botó.'
        },
        dropzone: {
          title: 'Arrossega aquí la carpeta o els fitxers',
          hint: 'Es respecten les carpetes internes.',
          folder: 'Escollir carpeta',
          files: 'Escollir fitxers'
        },
        status: {
          empty: 'No hi ha fitxers seleccionats.',
          filesReady: 'Fitxers llestos: {count}.',
          ready: 'A punt per crear el ZIP.',
          readyHint: 'Prepara el ZIP per obtenir el teu fitxer.',
          selectFirst: 'Selecciona fitxers o una carpeta primer.',
          engineMissing: 'No s’ha pogut carregar el motor ZIP.',
          creating: 'Creant ZIP...',
          downloaded: 'ZIP descarregat.',
          failed: 'No s’ha pogut crear el ZIP. Revisa els fitxers.'
        },
        step2: {
          title: '2. Descarrega el ZIP',
          note: 'Pas 2: crea el ZIP i es descarregarà automàticament.',
          detail: 'En crear el ZIP es descarregarà un fitxer que pots pujar a Drive, Dropbox, Nextcloud, etc.'
        },
        zipName: {
          label: 'Nom del ZIP',
          placeholder: 'materials',
          default: 'materials'
        },
        build: 'Crear i descarregar ZIP',
        help: {
          title: 'Què fer amb el ZIP?',
          step1: 'Puja el ZIP a un servei amb enllaç públic (Drive, Dropbox, GitHub…).',
          step2: 'Copia l’enllaç públic i enganxa’l a la pestanya “2. Compartir recurs”.',
          step3: 'Comparteix l’enllaç generat pel visor amb l’alumnat.'
        }
      },
      html: {
        title: 'Tria l’HTML inicial',
        subtitle: 'No s’ha trobat un index.html. Selecciona el fitxer HTML que vols obrir primer.',
        confirm: 'Fes servir aquest HTML'
      },
      about: {
        title: 'Què fa aquest visor?',
        intro: 'Aquest visor obre un ZIP que conté una web senzilla amb HTML, CSS, imatges, vídeos, àudio i enllaços interns perquè la puguis compartir amb l’alumnat sense instal·lar res.',
        can: {
          title: 'Què pots pujar',
          item1: 'ZIPs amb pàgines web estàtiques i els seus recursos (arxius HTML, imatges, àudio, vídeo, PDF, etc.).',
          item2: 'Materials creats amb eXeLearning o altres eines que exporten a web.',
          item3: 'Qualsevol material creat amb IA (documents, infografies, etc.) que puguis descarregar com a pàgina web (HTML).',
          item4: 'Carpetes amb un HTML principal (normalment <code>index.html</code>).'
        },
        cant: {
          title: 'Què no funciona o pot fallar',
          item1: 'Webs que necessiten servidor (formularis que guarden dades, bases de dades, PHP o similar).',
          item2: 'Enllaços externs que requereixen iniciar sessió o permisos especials.',
          item3: 'ZIPs que no contenen cap fitxer HTML.'
        },
        how: {
          title: 'Com funciona',
          step1: 'Prepara el teu recurs com una carpeta amb pàgines web (HTML) i comprimeix-lo en ZIP. Ho pots fer a la pestanya “1. Crear ZIP”.',
          step2: 'Puja el ZIP a un servei amb enllaç públic (Google Drive, Dropbox, Nextcloud, GitHub…).',
          step3: 'Comparteix l’arxiu perquè qualsevol amb l’enllaç el pugui veure.',
          step4: 'Copia l’URL i enganxa-la al camp “Enganxa aquí l’enllaç públic”.',
          step5: 'L’enllaç per compartir és permanent, així que el pots distribuir a l’alumnat.'
        },
        drive: {
          title: 'Important sobre Google Drive',
          note: 'Google Drive limita la descàrrega directa d’arxius grans (aprox. 25 MB). Si el teu ZIP supera aquesta mida, pot fallar. Dropbox, Nextcloud i altres serveis solen permetre fitxers més grans sense aquest límit.'
        },
        body: '<p>Visor Web_ZIP genera enlaces permanentes a recursos educativos en formato web almacenados en servicios de almacenamiento en la nube como Google Drive o Dropbox, facilitando su publicación y acceso por parte del alumnado.</p>'
          + '<div class="about-section"><h3>Guía rápida</h3><ol><li>En "1. Crear ZIP" comprime tu carpeta con HTML en un .zip.</li><li>Sube el archivo ZIP a un servicio de almacenamiento en la nube (Google Drive, Dropbox, etc.) y compártelo para que cualquier persona con el enlace pueda verlo.</li><li>En "2. Compartir recurso" pega el enlace público al ZIP y pulsa "Crear enlace".</li><li>Comparte el enlace generado con tu alumnado.</li></ol></div>'
          + '<div class="about-section"><h3>1. Crear ZIP</h3><ul><li>Incluye un <code>index.html</code> si es posible.</li><li>Si no hay <code>index.html</code>, el visor te pedirá qué HTML abrir primero.</li></ul></div>'
          + '<div class="about-section"><h3>2. Compartir recurso</h3><ol><li>Pega el enlace público del ZIP.</li><li>El visor detecta automáticamente el tipo de enlace.</li><li>Pulsa "Crear enlace" y copia el resultado.</li></ol></div>'
          + '<div class="about-section"><h3>3. Recursos guardados</h3><ul><li>En esta pestaña puedes ver y gestionar los recursos que has abierto desde este navegador.</li><li><strong>Ver</strong> abre el recurso guardado.</li><li><strong>Compartir</strong> copia el enlace público del visor (pantalla completa).</li><li><strong>Editar</strong> cambia el título.</li><li><strong>Eliminar</strong> borra ese recurso del navegador.</li></ul></div>'
          + '<div class="about-section"><h3>Qué funciona y qué puede fallar</h3><ul><li>Funciona con webs estáticas (HTML, CSS, imágenes, audio, vídeo, PDF...).</li><li>No funciona con webs que requieren servidor (formularios con BD, PHP, etc.).</li><li>Google Drive limita descargas directas de archivos grandes (~25 MB).</li></ul></div>'
      },
      error: {
        driveTooLarge: 'El fitxer és massa gran i Google Drive limita les descàrregues.',
        loadZip: 'No s’ha pogut carregar el ZIP.',
        noHtmlSelected: 'No s’ha seleccionat cap HTML.',
        htmlPickerOpen: 'No s’ha pogut obrir el selector d’HTML.',
        serviceWorkerUnavailable: 'Service worker no disponible.',
        sha1Unavailable: 'SHA-1 no disponible en aquest navegador.',
        configMissing: 'Configura GAS_WEBAPP_URL a config.js.',
        needHtmlFile: 'El ZIP necessita com a mínim un fitxer .html.',
        offlineNotAllowed: 'Aquest navegador no permet el visor offline.',
        fflateMissing: 'No s’ha pogut carregar el motor ZIP (fflate).',
        zipNoWebFiles: 'El ZIP no conté fitxers web.',
        noSpace: 'No hi ha prou espai al navegador.'
      },
      status: {
        preparing: 'Preparant...',
        preparingZip: 'Preparant ZIP...',
        downloadingZip: 'Descarregant ZIP...',
        unpacking: 'Descomprimint...',
        saving: 'Desant al navegador...',
        copySuccess: 'Enllaç copiat.'
      },
      common: {
        close: 'Tancar',
        cancel: 'Cancel·lar',
        delete: 'Eliminar'
      },
      units: ['B', 'KB', 'MB', 'GB']
    },
    gl: {
      page: { title: 'Visor Web-ZIP' },
      loading: {
        title: 'Cargando material',
        message: 'Preparando...',
        note: 'Este proceso pode tardar uns segundos a primeira vez.'
      },
      header: {
        eyebrow: 'Materiais en ZIP',
        title: 'Visor Web-ZIP',
        help: 'Axuda',
        subtitle: 'Comparte os teus recursos educativos desde o teu almacenamento favorito na nube.'
      },
      lang: {
        label: 'Idioma',
        es: 'Español',
        ca: 'Català',
        gl: 'Galego',
        eu: 'Euskara',
        en: 'English',
        de: 'Deutsch'
      },
      tab: {
        main: '2. Compartir recurso',
        zipper: '1. Crear ZIP',
        manager: 'Xestor de recursos'
      },
      tabs: {
        label: 'Seccións'
      },
      main: {
        subtitle: 'Para compartir o teu recurso debes subilo a Internet (Drive, Dropbox, etc.) en formato ZIP e compartilo para que todo o mundo poida velo.',
        form: {
          title: 'Pega aquí a ligazón pública',
          step: 'Paso 1: pega a ligazón pública ao ZIP e preme “Crear ligazón”.',
          placeholder: 'Pega aquí a ligazón pública do ZIP',
          submit: 'Crear ligazón'
        },
        output: {
          title: 'Ligazón para compartir',
          step: 'Paso 2: copia a ligazón ou abre a vista previa.',
          placeholder: 'Ligazón para compartir',
          copy: 'Copiar ligazón',
          open: 'Abrir vista previa'
        }
      },
      service: {
        drive: 'Google Drive',
        dropbox: 'Dropbox',
        nextcloud: 'Nextcloud',
        github: 'GitHub',
        other: 'Outros servizos',
        drivePlaceholder: 'https://drive.google.com/...',
        dropboxPlaceholder: 'https://www.dropbox.com/...',
        nextcloudPlaceholder: 'https://o-teu-servidor/s/...',
        githubPlaceholder: 'https://github.com/usuario/repositorio/archive/refs/heads/main.zip',
        otherPlaceholder: 'https://servidor.com/ficheiro.zip'
      },
      manager: {
        title: 'Recursos gardados',
        subtitle: 'Xestiona o espazo que ocupan os materiais gardados neste navegador.',
        deleteAll: 'Eliminar todos os recursos',
        deleteAllHelp: 'Borra todos os recursos gardados neste navegador.',
        stats: {
          used: 'Espazo usado',
          total: 'Espazo total',
          count: 'Recursos gardados'
        },
        sort: {
          label: 'Ordenar por',
          title: 'Título',
          date: 'Data',
          size: 'Tamaño',
          dirAsc: 'Ascendente',
          dirDesc: 'Descendente',
          dirHelp: 'Cambiar o sentido de orde.'
        },
        settings: {
          usage: {
            label: 'Límite de uso antes de limpar',
            help: 'Se se supera esta porcentaxe da cota, borraranse os recursos máis antigos.'
          },
          days: {
            label: 'Días para borrar recursos antigos',
            help: 'Se un recurso non se abre neste período, eliminarase automaticamente.',
            suffix: 'días'
          },
          reset: 'Restaurar valores por defecto',
          resetHelp: 'Volver a 70% e 30 días e aplicar a limpeza.'
        },
        actions: {
          view: 'Ver',
          share: 'Compartir',
          edit: 'Editar',
          download: 'Descargar ZIP'
        },
        editPrompt: 'Título do recurso',
        empty: 'Non hai recursos gardados neste navegador.',
        siteNoUrl: 'Sitio sen URL',
        noDate: 'sen data'
      },
      zipper: {
        title: 'Crear ZIP para o visor',
        subtitle: {
          lead: 'Para compartir o teu recurso necesitas comprimir os ficheiros (ou o cartafol que os contén) nun arquivo ZIP.',
          exeSentenceHtml: 'Se usas <strong>eXeLearning</strong>, tamén podes crear o ZIP desde o propio programa e pasar directamente á seguinte lapela.'
        },
        exe: {
          tooltip: 'Como exportar desde eXeLearning. Versión 2.x: Arquivo > Exportar > Sitio web > Arquivo comprimido ZIP. Versión 3.x: Arquivo > Descargar como > Sitio web.',
          tooltipHtml: '<strong>Como exportar desde eXeLearning:</strong><br>• Versión 2.x: Arquivo &gt; Exportar &gt; Sitio web &gt; Arquivo comprimido ZIP.<br>• Versión 3.x: Arquivo &gt; Descargar como &gt; Sitio web.'
        },
        step1: {
          title: '1. Engade os teus ficheiros',
          note: 'Paso 1: arrastra o cartafol ou selecciona os ficheiros desde o botón.',
          detail: 'Podes arrastrar un cartafol ou ficheiros. Tamén podes seleccionar un cartafol completo desde o botón.'
        },
        dropzone: {
          title: 'Arrastra aquí o cartafol ou os ficheiros',
          hint: 'Respéctanse os cartafoles internos.',
          folder: 'Escoller cartafol',
          files: 'Escoller ficheiros'
        },
        status: {
          empty: 'Non hai ficheiros seleccionados.',
          filesReady: 'Ficheiros listos: {count}.',
          ready: 'Listo para crear o ZIP.',
          readyHint: 'Prepara o ZIP para obter o teu ficheiro.',
          selectFirst: 'Selecciona ficheiros ou un cartafol primeiro.',
          engineMissing: 'Non se puido cargar o motor ZIP.',
          creating: 'Creando ZIP...',
          downloaded: 'ZIP descargado.',
          failed: 'Non se puido crear o ZIP. Revisa os ficheiros.'
        },
        step2: {
          title: '2. Descarga o ZIP',
          note: 'Paso 2: crea o ZIP e descargarase automaticamente.',
          detail: 'Ao crear o ZIP descargarase un ficheiro que podes subir a Drive, Dropbox, Nextcloud, etc.'
        },
        zipName: {
          label: 'Nome do ZIP',
          placeholder: 'materiais',
          default: 'materiais'
        },
        build: 'Crear e descargar ZIP',
        help: {
          title: 'Que facer co ZIP?',
          step1: 'Sube o ZIP a un servizo con ligazón pública (Drive, Dropbox, GitHub…).',
          step2: 'Copia a ligazón pública e pégala na lapela “2. Compartir recurso”.',
          step3: 'Comparte a ligazón xerada polo visor co teu alumnado.'
        }
      },
      html: {
        title: 'Escolle o HTML inicial',
        subtitle: 'Non se atopou un index.html. Selecciona o ficheiro HTML que queres abrir primeiro.',
        confirm: 'Usar este HTML'
      },
      about: {
        title: 'Que fai este visor?',
        intro: 'Este visor abre un ZIP que contén unha web sinxela con HTML, CSS, imaxes, vídeos, audio e ligazóns internas para que a poidas compartir co teu alumnado sen instalar nada.',
        can: {
          title: 'Que podes subir',
          item1: 'ZIPs con páxinas web estáticas e os seus recursos (ficheiros HTML, imaxes, audio, vídeo, PDF, etc.).',
          item2: 'Materiais creados con eXeLearning ou outras ferramentas que exportan a web.',
          item3: 'Calquera material creado con IA (documentos, infografías, etc.) que poidas descargar como páxina web (HTML).',
          item4: 'Cartafoles cun HTML principal (normalmente <code>index.html</code>).'
        },
        cant: {
          title: 'Que non funciona ou pode fallar',
          item1: 'Webs que necesitan servidor (formularios que gardan datos, bases de datos, PHP ou similar).',
          item2: 'Ligazóns externas que requiren iniciar sesión ou permisos especiais.',
          item3: 'ZIPs que non conteñen ningún ficheiro HTML.'
        },
        how: {
          title: 'Como funciona',
          step1: 'Prepara o teu recurso como un cartafol con páxinas web (HTML) e comprímeo en ZIP. Podes facelo na lapela “1. Crear ZIP”.',
          step2: 'Sube o ZIP a un servizo con ligazón pública (Google Drive, Dropbox, Nextcloud, GitHub…).',
          step3: 'Comparte o ficheiro para que calquera coa ligazón poida velo.',
          step4: 'Copia a URL e pégala no campo “Pega aquí a ligazón pública”.',
          step5: 'A ligazón para compartir é permanente, así que podes distribuíla ao alumnado.'
        },
        drive: {
          title: 'Importante sobre Google Drive',
          note: 'Google Drive limita a descarga directa de ficheiros grandes (aprox. 25 MB). Se o teu ZIP supera ese tamaño, pode fallar. Dropbox, Nextcloud e outros servizos adoitan permitir ficheiros máis grandes sen ese límite.'
        },
        body: '<p>Visor Web_ZIP genera enlaces permanentes a recursos educativos en formato web almacenados en servicios de almacenamiento en la nube como Google Drive o Dropbox, facilitando su publicación y acceso por parte del alumnado.</p>'
          + '<div class="about-section"><h3>Guía rápida</h3><ol><li>En "1. Crear ZIP" comprime tu carpeta con HTML en un .zip.</li><li>Sube el archivo ZIP a un servicio de almacenamiento en la nube (Google Drive, Dropbox, etc.) y compártelo para que cualquier persona con el enlace pueda verlo.</li><li>En "2. Compartir recurso" pega el enlace público al ZIP y pulsa "Crear enlace".</li><li>Comparte el enlace generado con tu alumnado.</li></ol></div>'
          + '<div class="about-section"><h3>1. Crear ZIP</h3><ul><li>Incluye un <code>index.html</code> si es posible.</li><li>Si no hay <code>index.html</code>, el visor te pedirá qué HTML abrir primero.</li></ul></div>'
          + '<div class="about-section"><h3>2. Compartir recurso</h3><ol><li>Pega el enlace público del ZIP.</li><li>El visor detecta automáticamente el tipo de enlace.</li><li>Pulsa "Crear enlace" y copia el resultado.</li></ol></div>'
          + '<div class="about-section"><h3>3. Recursos guardados</h3><ul><li>En esta pestaña puedes ver y gestionar los recursos que has abierto desde este navegador.</li><li><strong>Ver</strong> abre el recurso guardado.</li><li><strong>Compartir</strong> copia el enlace público del visor (pantalla completa).</li><li><strong>Editar</strong> cambia el título.</li><li><strong>Eliminar</strong> borra ese recurso del navegador.</li></ul></div>'
          + '<div class="about-section"><h3>Qué funciona y qué puede fallar</h3><ul><li>Funciona con webs estáticas (HTML, CSS, imágenes, audio, vídeo, PDF...).</li><li>No funciona con webs que requieren servidor (formularios con BD, PHP, etc.).</li><li>Google Drive limita descargas directas de archivos grandes (~25 MB).</li></ul></div>'
      },
      error: {
        driveTooLarge: 'O ficheiro é demasiado grande e Google Drive limita as descargas.',
        loadZip: 'Non se puido cargar o ZIP.',
        noHtmlSelected: 'Non se seleccionou ningún HTML.',
        htmlPickerOpen: 'Non se puido abrir o selector de HTML.',
        serviceWorkerUnavailable: 'Service worker non dispoñible.',
        sha1Unavailable: 'SHA-1 non dispoñible neste navegador.',
        configMissing: 'Configura GAS_WEBAPP_URL en config.js.',
        needHtmlFile: 'O ZIP necesita polo menos un ficheiro .html.',
        offlineNotAllowed: 'Este navegador non permite o visor offline.',
        fflateMissing: 'Non se puido cargar o motor ZIP (fflate).',
        zipNoWebFiles: 'O ZIP non contén ficheiros web.',
        noSpace: 'Non hai espazo suficiente no navegador.'
      },
      status: {
        preparing: 'Preparando...',
        preparingZip: 'Preparando ZIP...',
        downloadingZip: 'Descargando ZIP...',
        unpacking: 'Descomprimindo...',
        saving: 'Gardando no navegador...',
        copySuccess: 'Ligazón copiada.'
      },
      common: {
        close: 'Pechar',
        cancel: 'Cancelar',
        delete: 'Eliminar'
      },
      units: ['B', 'KB', 'MB', 'GB']
    },
    eu: {
      page: { title: 'Web-ZIP Bisorea' },
      loading: {
        title: 'Materiala kargatzen',
        message: 'Prestatzen...',
        note: 'Prozesu honek lehen aldian segundo batzuk har ditzake.'
      },
      header: {
        eyebrow: 'ZIP materialen artean',
        title: 'Web-ZIP Bisorea',
        help: 'Laguntza',
        subtitle: 'Partekatu zure hezkuntza-baliabideak hodeiko biltegiratze gogokoenetik.'
      },
      lang: {
        label: 'Hizkuntza',
        es: 'Español',
        ca: 'Català',
        gl: 'Galego',
        eu: 'Euskara',
        en: 'English',
        de: 'Deutsch'
      },
      tab: {
        main: '2. Partekatu baliabidea',
        zipper: '1. Sortu ZIP',
        manager: 'Baliabide kudeatzailea'
      },
      tabs: {
        label: 'Atalak'
      },
      main: {
        subtitle: 'Zure baliabidea partekatzeko, Internetera igoa izan behar duzu (Drive, Dropbox, etab.) ZIP formatuan, eta partekatu, edonork ikusi ahal izan dezan.',
        form: {
          title: 'Itsatsi hemen esteka publikoa',
          step: '1. urratsa: itsatsi ZIParen esteka publikoa eta sakatu “Esteka sortu”.',
          placeholder: 'Itsatsi hemen ZIParen esteka publikoa',
          submit: 'Esteka sortu'
        },
        output: {
          title: 'Partekatze esteka',
          step: '2. urratsa: kopiatu esteka edo ireki aurrebista.',
          placeholder: 'Partekatze esteka',
          copy: 'Esteka kopiatu',
          open: 'Aurrebista ireki'
        }
      },
      service: {
        drive: 'Google Drive',
        dropbox: 'Dropbox',
        nextcloud: 'Nextcloud',
        github: 'GitHub',
        other: 'Beste zerbitzuak',
        drivePlaceholder: 'https://drive.google.com/...',
        dropboxPlaceholder: 'https://www.dropbox.com/...',
        nextcloudPlaceholder: 'https://zure-zerbitzaria/s/...',
        githubPlaceholder: 'https://github.com/erabiltzailea/errepositorioa/archive/refs/heads/main.zip',
        otherPlaceholder: 'https://zerbitzaria.com/fitxategia.zip'
      },
      manager: {
        title: 'Gordetako baliabideak',
        subtitle: 'Kudeatu nabigatzaile honetan gordetako materialen okupazioa.',
        deleteAll: 'Baliabide guztiak ezabatu',
        deleteAllHelp: 'Nabigatzaile honetan gordetako baliabide guztiak ezabatzen ditu.',
        stats: {
          used: 'Erabilitako espazioa',
          total: 'Guztizko espazioa',
          count: 'Gordetako baliabideak'
        },
        sort: {
          label: 'Ordenatu',
          title: 'Izenburua',
          date: 'Data',
          size: 'Tamaina',
          dirAsc: 'Gorantz',
          dirDesc: 'Beherantz',
          dirHelp: 'Ordena norabidea aldatu.'
        },
        settings: {
          usage: {
            label: 'Garbitu aurreko erabilera-muga',
            help: 'Kota-portzentaje hau gainditzen bada, baliabide zaharrenak ezabatuko dira.'
          },
          days: {
            label: 'Baliabide zaharrak ezabatzeko egunak',
            help: 'Baliabide bat epe honetan irekitzen ez bada, automatikoki ezabatuko da.',
            suffix: 'egun'
          },
          reset: 'Lehenetsitako balioak berrezarri',
          resetHelp: '70% eta 30 egunetara itzuli eta garbiketa aplikatu.'
        },
        actions: {
          view: 'Ikusi',
          share: 'Partekatu',
          edit: 'Editatu',
          download: 'ZIPa deskargatu'
        },
        editPrompt: 'Baliabidearen izenburua',
        empty: 'Ez dago gordetako baliabiderik nabigatzaile honetan.',
        siteNoUrl: 'URLrik gabeko gunea',
        noDate: 'datarik gabe'
      },
      zipper: {
        title: 'Bisorerako ZIP sortu',
        subtitle: {
          lead: 'Zure baliabidea partekatzeko, fitxategiak (edo horiek dituen karpeta) ZIP fitxategi batean konprimitu behar dituzu.',
          exeSentenceHtml: '<strong>eXeLearning</strong> erabiltzen baduzu, ZIPa programatik bertatik sor dezakezu eta zuzenean hurrengo fitxara pasa.'
        },
        exe: {
          tooltip: 'eXeLearningetik nola esportatu. 2.x bertsioa: Fitxategia > Esportatu > Webgunea > ZIP fitxategi konprimatua. 3.x bertsioa: Fitxategia > Deskargatu honela > Webgunea.',
          tooltipHtml: '<strong>eXeLearningetik nola esportatu:</strong><br>• 2.x bertsioa: Fitxategia &gt; Esportatu &gt; Webgunea &gt; ZIP fitxategi konprimatua.<br>• 3.x bertsioa: Fitxategia &gt; Deskargatu honela &gt; Webgunea.'
        },
        step1: {
          title: '1. Gehitu zure fitxategiak',
          note: '1. urratsa: arrastatu karpeta edo hautatu fitxategiak botoitik.',
          detail: 'Karpeta edo fitxategiak arrastatu ditzakezu. Botoitik karpeta osoa ere hauta dezakezu.'
        },
        dropzone: {
          title: 'Arrastatu hona karpeta edo fitxategiak',
          hint: 'Barneko karpetak errespetatzen dira.',
          folder: 'Karpeta aukeratu',
          files: 'Fitxategiak aukeratu'
        },
        status: {
          empty: 'Ez dago hautatutako fitxategirik.',
          filesReady: 'Prest dauden fitxategiak: {count}.',
          ready: 'ZIPa sortzeko prest.',
          readyHint: 'Prestatu ZIPa zure fitxategia eskuratzeko.',
          selectFirst: 'Aukeratu fitxategiak edo karpeta bat lehenik.',
          engineMissing: 'Ezin izan da ZIP motorra kargatu.',
          creating: 'ZIPa sortzen...',
          downloaded: 'ZIPa deskargatuta.',
          failed: 'Ezin izan da ZIPa sortu. Berrikusi fitxategiak.'
        },
        step2: {
          title: '2. Deskargatu ZIPa',
          note: '2. urratsa: sortu ZIPa eta automatikoki deskargatuko da.',
          detail: 'ZIPa sortzean, fitxategi bat deskargatuko da (Drive, Dropbox, Nextcloud, etab. igo dezakezu).'
        },
        zipName: {
          label: 'ZIParen izena',
          placeholder: 'materialak',
          default: 'materialak'
        },
        build: 'Sortu eta deskargatu ZIPa',
        help: {
          title: 'Zer egin ZIParekin?',
          step1: 'Igo ZIPa esteka publikoarekin duen zerbitzu batera (Drive, Dropbox, GitHub…).',
          step2: 'Kopiatu esteka publikoa eta itsatsi “2. Partekatu baliabidea” fitxan.',
          step3: 'Partekatu bisoreak sortutako esteka zure ikasleekin.'
        }
      },
      html: {
        title: 'Aukeratu hasierako HTMLa',
        subtitle: 'Ez da index.html aurkitu. Hautatu lehenik ireki nahi duzun HTML fitxategia.',
        confirm: 'Erabili HTML hau'
      },
      about: {
        title: 'Zer egiten du bisore honek?',
        intro: 'Bisore honek ZIP bat irekitzen du, HTML, CSS, irudiak, bideoak, audioa eta barne-estekak dituen web sinple batekin, instalatu beharrik gabe partekatzeko.',
        can: {
          title: 'Zer igo dezakezu',
          item1: 'ZIPak web estatikoekin eta haien baliabideekin (HTML fitxategiak, irudiak, audioa, bideoa, PDF, etab.).',
          item2: 'eXeLearning edo web-era esportatzen duten beste tresna batzuekin sortutako materialak.',
          item3: 'IArekin sortutako edozein material (dokumentuak, infografiak, etab.) HTML orri gisa deskarga dezakezuna.',
          item4: 'HTML nagusi bat duen karpeta (normalean <code>index.html</code>).'
        },
        cant: {
          title: 'Zer ez dabil edo huts egin dezake',
          item1: 'Zerbitzaria behar duten webak (datuak gordetzen dituzten formularioak, datu-baseak, PHP edo antzekoa).',
          item2: 'Saioa hasteko edo baimen bereziak behar dituzten kanpo-estekak.',
          item3: 'HTML fitxategirik ez duten ZIPak.'
        },
        how: {
          title: 'Nola funtzionatzen du',
          step1: 'Prestatu zure baliabidea web-orriak (HTML) dituen karpeta gisa eta ZIPean konprimitzen. “1. Sortu ZIP” fitxan egin dezakezu.',
          step2: 'Igo ZIPa esteka publikoarekin duen zerbitzu batera (Google Drive, Dropbox, Nextcloud, GitHub…).',
          step3: 'Partekatu fitxategia esteka duen edonork ikus dezan.',
          step4: 'Kopiatu URLa eta itsatsi “Itsatsi hemen esteka publikoa” eremuan.',
          step5: 'Partekatze esteka iraunkorra da, beraz, ikasleekin bana dezakezu.'
        },
        drive: {
          title: 'Google Drive-ri buruzko oharra',
          note: 'Google Drivek fitxategi handien deskarga zuzena mugatzen du (gutxi gorabehera 25 MB). Zure ZIPak tamaina hori gainditzen badu, huts egin dezake. Dropbox, Nextcloud eta beste zerbitzu batzuek, normalean, handiagoak onartzen dituzte muga horik gabe.'
        },
        body: '<p>Visor Web_ZIP genera enlaces permanentes a recursos educativos en formato web almacenados en servicios de almacenamiento en la nube como Google Drive o Dropbox, facilitando su publicación y acceso por parte del alumnado.</p>'
          + '<div class="about-section"><h3>Guía rápida</h3><ol><li>En "1. Crear ZIP" comprime tu carpeta con HTML en un .zip.</li><li>Sube el archivo ZIP a un servicio de almacenamiento en la nube (Google Drive, Dropbox, etc.) y compártelo para que cualquier persona con el enlace pueda verlo.</li><li>En "2. Compartir recurso" pega el enlace público al ZIP y pulsa "Crear enlace".</li><li>Comparte el enlace generado con tu alumnado.</li></ol></div>'
          + '<div class="about-section"><h3>1. Crear ZIP</h3><ul><li>Incluye un <code>index.html</code> si es posible.</li><li>Si no hay <code>index.html</code>, el visor te pedirá qué HTML abrir primero.</li></ul></div>'
          + '<div class="about-section"><h3>2. Compartir recurso</h3><ol><li>Pega el enlace público del ZIP.</li><li>El visor detecta automáticamente el tipo de enlace.</li><li>Pulsa "Crear enlace" y copia el resultado.</li></ol></div>'
          + '<div class="about-section"><h3>3. Recursos guardados</h3><ul><li>En esta pestaña puedes ver y gestionar los recursos que has abierto desde este navegador.</li><li><strong>Ver</strong> abre el recurso guardado.</li><li><strong>Compartir</strong> copia el enlace público del visor (pantalla completa).</li><li><strong>Editar</strong> cambia el título.</li><li><strong>Eliminar</strong> borra ese recurso del navegador.</li></ul></div>'
          + '<div class="about-section"><h3>Qué funciona y qué puede fallar</h3><ul><li>Funciona con webs estáticas (HTML, CSS, imágenes, audio, vídeo, PDF...).</li><li>No funciona con webs que requieren servidor (formularios con BD, PHP, etc.).</li><li>Google Drive limita descargas directas de archivos grandes (~25 MB).</li></ul></div>'
      },
      error: {
        driveTooLarge: 'Fitxategia handiegia da eta Google Drivek deskargak mugatzen ditu.',
        loadZip: 'Ezin izan da ZIPa kargatu.',
        noHtmlSelected: 'Ez da HTMLrik hautatu.',
        htmlPickerOpen: 'Ezin izan da HTML hautatzailea ireki.',
        serviceWorkerUnavailable: 'Service worker ez dago erabilgarri.',
        sha1Unavailable: 'SHA-1 ez dago erabilgarri nabigatzaile honetan.',
        configMissing: 'Konfiguratu GAS_WEBAPP_URL config.js fitxategian.',
        needHtmlFile: 'ZIPak gutxienez .html fitxategi bat behar du.',
        offlineNotAllowed: 'Nabigatzaile honek ez du offline bisorea onartzen.',
        fflateMissing: 'Ezin izan da ZIP motorra kargatu (fflate).',
        zipNoWebFiles: 'ZIPak ez dauka web fitxategirik.',
        noSpace: 'Ez dago nahikoa leku nabigatzailean.'
      },
      status: {
        preparing: 'Prestatzen...',
        preparingZip: 'ZIPa prestatzen...',
        downloadingZip: 'ZIPa deskargatzen...',
        unpacking: 'Deskonprimatzen...',
        saving: 'Nabigatzailean gordetzen...',
        copySuccess: 'Esteka kopiatuta.'
      },
      common: {
        close: 'Itxi',
        cancel: 'Utzi',
        delete: 'Ezabatu'
      },
      units: ['B', 'KB', 'MB', 'GB']
    },
    en: {
      page: { title: 'Web-ZIP Viewer' },
      loading: {
        title: 'Loading material',
        message: 'Preparing...',
        note: 'This process may take a few seconds the first time.'
      },
      header: {
        eyebrow: 'Materials in ZIP',
        title: 'Web-ZIP Viewer',
        help: 'Help',
        subtitle: 'Share your educational resources from your favorite cloud storage.'
      },
      lang: {
        label: 'Language',
        es: 'Español',
        ca: 'Català',
        gl: 'Galego',
        eu: 'Euskara',
        en: 'English',
        de: 'Deutsch'
      },
      tab: {
        main: '2. Share resource',
        zipper: '1. Create ZIP',
        manager: 'Resource manager'
      },
      tabs: {
        label: 'Sections'
      },
      main: {
        subtitle: 'To share your resource, it must be uploaded to the internet (Drive, Dropbox, etc.) as a ZIP and shared so anyone can view it.',
        form: {
          title: 'Paste the public link here',
          step: 'Step 1: paste the public ZIP link and click “Create link”.',
          placeholder: 'Paste the public ZIP link here',
          submit: 'Create link'
        },
        output: {
          title: 'Shareable link',
          step: 'Step 2: copy the link or open the preview.',
          placeholder: 'Shareable link',
          copy: 'Copy link',
          open: 'Open preview'
        }
      },
      service: {
        drive: 'Google Drive',
        dropbox: 'Dropbox',
        nextcloud: 'Nextcloud',
        github: 'GitHub',
        other: 'Other services',
        drivePlaceholder: 'https://drive.google.com/...',
        dropboxPlaceholder: 'https://www.dropbox.com/...',
        nextcloudPlaceholder: 'https://your-server/s/...',
        githubPlaceholder: 'https://github.com/user/repo/archive/refs/heads/main.zip',
        otherPlaceholder: 'https://server.com/file.zip'
      },
      manager: {
        title: 'Saved resources',
        subtitle: 'Manage the space used by materials stored in this browser.',
        deleteAll: 'Delete all resources',
        deleteAllHelp: 'Deletes all resources saved in this browser.',
        stats: {
          used: 'Space used',
          total: 'Total space',
          count: 'Saved resources'
        },
        sort: {
          label: 'Sort by',
          title: 'Title',
          date: 'Date',
          size: 'Size',
          dirAsc: 'Ascending',
          dirDesc: 'Descending',
          dirHelp: 'Change sort direction.'
        },
        settings: {
          usage: {
            label: 'Usage limit before cleanup',
            help: 'If this percentage of the quota is exceeded, the oldest resources are deleted.'
          },
          days: {
            label: 'Days before removing old resources',
            help: 'If a resource is not opened within this period, it will be removed automatically.',
            suffix: 'days'
          },
          reset: 'Restore default values',
          resetHelp: 'Back to 70% and 30 days and apply cleanup.'
        },
        actions: {
          view: 'View',
          share: 'Share',
          edit: 'Edit',
          download: 'Download ZIP'
        },
        editPrompt: 'Resource title',
        empty: 'No saved resources in this browser.',
        siteNoUrl: 'Site without URL',
        noDate: 'no date'
      },
      zipper: {
        title: 'Create ZIP for the viewer',
        subtitle: {
          lead: 'To share your resource, compress the files (or the folder that contains them) into a .zip file.',
          exeSentenceHtml: 'If you use <strong>eXeLearning</strong>, you can also create the ZIP from the program itself and move straight to the next tab.'
        },
        exe: {
          tooltip: 'How to export from eXeLearning. Version 2.x: File > Export > Website > Compressed ZIP file. Version 3.x: File > Download as > Website.',
          tooltipHtml: '<strong>How to export from eXeLearning:</strong><br>• Version 2.x: File &gt; Export &gt; Website &gt; Compressed ZIP file.<br>• Version 3.x: File &gt; Download as &gt; Website.'
        },
        step1: {
          title: '1. Add your files',
          note: 'Step 1: drag the folder or select files using the buttons.',
          detail: 'You can drag a folder or files. You can also select a full folder from the button.'
        },
        dropzone: {
          title: 'Drop the folder or files here',
          hint: 'Internal folders are preserved.',
          folder: 'Choose folder',
          files: 'Choose files'
        },
        status: {
          empty: 'No files selected.',
          filesReady: 'Files ready: {count}.',
          ready: 'Ready to create the ZIP.',
          readyHint: 'Prepare the ZIP to get your file.',
          selectFirst: 'Select files or a folder first.',
          engineMissing: 'ZIP engine could not be loaded.',
          creating: 'Creating ZIP...',
          downloaded: 'ZIP downloaded.',
          failed: 'Could not create the ZIP. Check the files.'
        },
        step2: {
          title: '2. Download the ZIP',
          note: 'Step 2: create the ZIP and it will download automatically.',
          detail: 'When you create the ZIP, a file will download that you can upload to Drive, Dropbox, Nextcloud, etc.'
        },
        zipName: {
          label: 'ZIP name',
          placeholder: 'materials',
          default: 'materials'
        },
        build: 'Create and download ZIP',
        help: {
          title: 'What to do with the ZIP?',
          step1: 'Upload the ZIP to a service with a public link (Drive, Dropbox, GitHub…).',
          step2: 'Copy the public link and paste it in the “2. Share resource” tab.',
          step3: 'Share the link generated by the viewer with your students.'
        }
      },
      html: {
        title: 'Choose the initial HTML',
        subtitle: 'index.html was not found. Select the HTML file you want to open first.',
        confirm: 'Use this HTML'
      },
      about: {
        title: 'What does this viewer do?',
        intro: 'This viewer opens a ZIP containing a simple website with HTML, CSS, images, videos, audio and internal links so you can share it with your students without installing anything.',
        can: {
          title: 'What you can upload',
          item1: 'ZIPs with static web pages and their assets (HTML files, images, audio, video, PDF, etc.).',
          item2: 'Materials created with eXeLearning or other tools that export to web.',
          item3: 'Any AI-created material (documents, infographics, etc.) that you can download as a web page (HTML).',
          item4: 'Folders with a main HTML file (usually <code>index.html</code>).'
        },
        cant: {
          title: 'What does not work or may fail',
          item1: 'Webs that require a server (forms that save data, databases, PHP, etc.).',
          item2: 'External links that require login or special permissions.',
          item3: 'ZIPs that do not contain any HTML file.'
        },
        how: {
          title: 'How it works',
          step1: 'Prepare your resource as a folder with web pages (HTML) and compress it into a ZIP. You can do this in the “1. Create ZIP” tab.',
          step2: 'Upload the ZIP to a service with a public link (Google Drive, Dropbox, Nextcloud, GitHub…).',
          step3: 'Share the file so anyone with the link can view it.',
          step4: 'Copy the URL and paste it into the “Paste the public link here” field.',
          step5: 'The share link is permanent, so you can distribute it to your students.'
        },
        drive: {
          title: 'Important about Google Drive',
          note: 'Google Drive limits direct downloads of large files (approx. 25 MB). If your ZIP exceeds that size, it may fail. Dropbox, Nextcloud and other services usually allow larger files without that limit.'
        },
        body: '<p>Visor Web_ZIP genera enlaces permanentes a recursos educativos en formato web almacenados en servicios de almacenamiento en la nube como Google Drive o Dropbox, facilitando su publicación y acceso por parte del alumnado.</p>'
          + '<div class="about-section"><h3>Guía rápida</h3><ol><li>En "1. Crear ZIP" comprime tu carpeta con HTML en un .zip.</li><li>Sube el archivo ZIP a un servicio de almacenamiento en la nube (Google Drive, Dropbox, etc.) y compártelo para que cualquier persona con el enlace pueda verlo.</li><li>En "2. Compartir recurso" pega el enlace público al ZIP y pulsa "Crear enlace".</li><li>Comparte el enlace generado con tu alumnado.</li></ol></div>'
          + '<div class="about-section"><h3>1. Crear ZIP</h3><ul><li>Incluye un <code>index.html</code> si es posible.</li><li>Si no hay <code>index.html</code>, el visor te pedirá qué HTML abrir primero.</li></ul></div>'
          + '<div class="about-section"><h3>2. Compartir recurso</h3><ol><li>Pega el enlace público del ZIP.</li><li>El visor detecta automáticamente el tipo de enlace.</li><li>Pulsa "Crear enlace" y copia el resultado.</li></ol></div>'
          + '<div class="about-section"><h3>3. Recursos guardados</h3><ul><li>En esta pestaña puedes ver y gestionar los recursos que has abierto desde este navegador.</li><li><strong>Ver</strong> abre el recurso guardado.</li><li><strong>Compartir</strong> copia el enlace público del visor (pantalla completa).</li><li><strong>Editar</strong> cambia el título.</li><li><strong>Eliminar</strong> borra ese recurso del navegador.</li></ul></div>'
          + '<div class="about-section"><h3>Qué funciona y qué puede fallar</h3><ul><li>Funciona con webs estáticas (HTML, CSS, imágenes, audio, vídeo, PDF...).</li><li>No funciona con webs que requieren servidor (formularios con BD, PHP, etc.).</li><li>Google Drive limita descargas directas de archivos grandes (~25 MB).</li></ul></div>'
      },
      error: {
        driveTooLarge: 'The file is too large and Google Drive limits downloads.',
        loadZip: 'Could not load the ZIP.',
        noHtmlSelected: 'No HTML selected.',
        htmlPickerOpen: 'Could not open the HTML selector.',
        serviceWorkerUnavailable: 'Service worker not available.',
        sha1Unavailable: 'SHA-1 not available in this browser.',
        configMissing: 'Set GAS_WEBAPP_URL in config.js.',
        needHtmlFile: 'The ZIP needs at least one .html file.',
        offlineNotAllowed: 'This browser does not allow offline viewer.',
        fflateMissing: 'Could not load ZIP engine (fflate).',
        zipNoWebFiles: 'The ZIP does not contain web files.',
        noSpace: 'Not enough space in the browser.'
      },
      status: {
        preparing: 'Preparing...',
        preparingZip: 'Preparing ZIP...',
        downloadingZip: 'Downloading ZIP...',
        unpacking: 'Unpacking...',
        saving: 'Saving in the browser...',
        copySuccess: 'Link copied.'
      },
      common: {
        close: 'Close',
        cancel: 'Cancel',
        delete: 'Delete'
      },
      units: ['B', 'KB', 'MB', 'GB']
    },
    de: {
      page: { title: 'Web-ZIP-Viewer' },
      loading: {
        title: 'Material wird geladen',
        message: 'Vorbereiten...',
        note: 'Dieser Vorgang kann beim ersten Mal ein paar Sekunden dauern.'
      },
      header: {
        eyebrow: 'Materialien im ZIP',
        title: 'Web-ZIP-Viewer',
        help: 'Hilfe',
        subtitle: 'Teile deine Bildungsressourcen aus deinem bevorzugten Cloud-Speicher.'
      },
      lang: {
        label: 'Sprache',
        es: 'Español',
        ca: 'Català',
        gl: 'Galego',
        eu: 'Euskara',
        en: 'English',
        de: 'Deutsch'
      },
      tab: {
        main: '2. Ressource teilen',
        zipper: '1. ZIP erstellen',
        manager: 'Ressourcenverwaltung'
      },
      tabs: {
        label: 'Abschnitte'
      },
      main: {
        subtitle: 'Um deine Ressource zu teilen, musst du sie als ZIP ins Internet hochladen (Drive, Dropbox usw.) und freigeben, damit alle sie sehen können.',
        form: {
          title: 'Füge hier den öffentlichen Link ein',
          step: 'Schritt 1: Füge den öffentlichen ZIP-Link ein und klicke auf „Link erstellen“.',
          placeholder: 'Füge hier den öffentlichen ZIP-Link ein',
          submit: 'Link erstellen'
        },
        output: {
          title: 'Link zum Teilen',
          step: 'Schritt 2: Kopiere den Link oder öffne die Vorschau.',
          placeholder: 'Link zum Teilen',
          copy: 'Link kopieren',
          open: 'Vorschau öffnen'
        }
      },
      service: {
        drive: 'Google Drive',
        dropbox: 'Dropbox',
        nextcloud: 'Nextcloud',
        github: 'GitHub',
        other: 'Andere Dienste',
        drivePlaceholder: 'https://drive.google.com/...',
        dropboxPlaceholder: 'https://www.dropbox.com/...',
        nextcloudPlaceholder: 'https://dein-server/s/...',
        githubPlaceholder: 'https://github.com/benutzer/repo/archive/refs/heads/main.zip',
        otherPlaceholder: 'https://server.com/datei.zip'
      },
      manager: {
        title: 'Gespeicherte Ressourcen',
        subtitle: 'Verwalte den Speicherplatz der in diesem Browser gespeicherten Materialien.',
        deleteAll: 'Alle Ressourcen löschen',
        deleteAllHelp: 'Löscht alle in diesem Browser gespeicherten Ressourcen.',
        stats: {
          used: 'Belegter Speicher',
          total: 'Gesamtspeicher',
          count: 'Gespeicherte Ressourcen'
        },
        sort: {
          label: 'Sortieren nach',
          title: 'Titel',
          date: 'Datum',
          size: 'Größe',
          dirAsc: 'Aufsteigend',
          dirDesc: 'Absteigend',
          dirHelp: 'Sortierreihenfolge wechseln.'
        },
        settings: {
          usage: {
            label: 'Nutzungsgrenze vor Bereinigung',
            help: 'Wenn dieser Prozentsatz der Quote überschritten wird, werden die ältesten Ressourcen gelöscht.'
          },
          days: {
            label: 'Tage bis zum Löschen alter Ressourcen',
            help: 'Wenn eine Ressource in diesem Zeitraum nicht geöffnet wird, wird sie automatisch gelöscht.',
            suffix: 'Tage'
          },
          reset: 'Standardwerte wiederherstellen',
          resetHelp: 'Zurück zu 70% und 30 Tagen und Bereinigung anwenden.'
        },
        actions: {
          view: 'Ansehen',
          share: 'Teilen',
          edit: 'Bearbeiten',
          download: 'ZIP herunterladen'
        },
        editPrompt: 'Titel der Ressource',
        empty: 'Keine gespeicherten Ressourcen in diesem Browser.',
        siteNoUrl: 'Website ohne URL',
        noDate: 'ohne Datum'
      },
      zipper: {
        title: 'ZIP für den Viewer erstellen',
        subtitle: {
          lead: 'Um deine Ressource zu teilen, komprimiere die Dateien (oder den Ordner, der sie enthält) in eine ZIP-Datei.',
          exeSentenceHtml: 'Wenn du <strong>eXeLearning</strong> nutzt, kannst du das ZIP direkt im Programm erstellen und sofort zur nächsten Registerkarte wechseln.'
        },
        exe: {
          tooltip: 'So exportierst du aus eXeLearning. Version 2.x: Datei > Exportieren > Website > Komprimierte ZIP-Datei. Version 3.x: Datei > Herunterladen als > Website.',
          tooltipHtml: '<strong>So exportierst du aus eXeLearning:</strong><br>• Version 2.x: Datei &gt; Exportieren &gt; Website &gt; Komprimierte ZIP-Datei.<br>• Version 3.x: Datei &gt; Herunterladen als &gt; Website.'
        },
        step1: {
          title: '1. Dateien hinzufügen',
          note: 'Schritt 1: Ziehe den Ordner hierher oder wähle Dateien per Button.',
          detail: 'Du kannst einen Ordner oder Dateien ziehen. Du kannst auch einen gesamten Ordner über den Button wählen.'
        },
        dropzone: {
          title: 'Ordner oder Dateien hier ablegen',
          hint: 'Interne Ordner bleiben erhalten.',
          folder: 'Ordner wählen',
          files: 'Dateien wählen'
        },
        status: {
          empty: 'Keine Dateien ausgewählt.',
          filesReady: 'Dateien bereit: {count}.',
          ready: 'Bereit zum Erstellen des ZIP.',
          readyHint: 'Bereite das ZIP vor, um deine Datei zu erhalten.',
          selectFirst: 'Wähle zuerst Dateien oder einen Ordner aus.',
          engineMissing: 'ZIP-Engine konnte nicht geladen werden.',
          creating: 'ZIP wird erstellt...',
          downloaded: 'ZIP heruntergeladen.',
          failed: 'ZIP konnte nicht erstellt werden. Prüfe die Dateien.'
        },
        step2: {
          title: '2. ZIP herunterladen',
          note: 'Schritt 2: Erstelle das ZIP, es wird automatisch heruntergeladen.',
          detail: 'Beim Erstellen des ZIP wird eine Datei heruntergeladen, die du bei Drive, Dropbox, Nextcloud usw. hochladen kannst.'
        },
        zipName: {
          label: 'ZIP-Name',
          placeholder: 'materialien',
          default: 'materialien'
        },
        build: 'ZIP erstellen und herunterladen',
        help: {
          title: 'Was tun mit dem ZIP?',
          step1: 'Lade das ZIP zu einem Dienst mit öffentlichem Link hoch (Drive, Dropbox, GitHub…).',
          step2: 'Kopiere den öffentlichen Link und füge ihn im Tab „2. Ressource teilen“ ein.',
          step3: 'Teile den vom Viewer erzeugten Link mit deinen Lernenden.'
        }
      },
      html: {
        title: 'Start-HTML auswählen',
        subtitle: 'index.html wurde nicht gefunden. Wähle die HTML-Datei, die zuerst geöffnet werden soll.',
        confirm: 'Dieses HTML verwenden'
      },
      about: {
        title: 'Was macht dieser Viewer?',
        intro: 'Dieser Viewer öffnet ein ZIP mit einer einfachen Website mit HTML, CSS, Bildern, Videos, Audio und internen Links, damit du sie ohne Installation mit Lernenden teilen kannst.',
        can: {
          title: 'Was du hochladen kannst',
          item1: 'ZIPs mit statischen Webseiten und ihren Dateien (HTML-Dateien, Bilder, Audio, Video, PDF usw.).',
          item2: 'Materialien aus eXeLearning oder anderen Tools, die nach Web exportieren.',
          item3: 'Alle mit KI erstellten Materialien (Dokumente, Infografiken usw.), die du als Webseite (HTML) herunterladen kannst.',
          item4: 'Ordner mit einer Haupt-HTML-Datei (meist <code>index.html</code>).'
        },
        cant: {
          title: 'Was nicht funktioniert oder scheitern kann',
          item1: 'Webseiten, die einen Server benötigen (Formulare, die Daten speichern, Datenbanken, PHP usw.).',
          item2: 'Externe Links, die Anmeldung oder besondere Berechtigungen erfordern.',
          item3: 'ZIPs ohne HTML-Datei.'
        },
        how: {
          title: 'So funktioniert es',
          step1: 'Bereite deine Ressource als Ordner mit Webseiten (HTML) vor und komprimiere sie als ZIP. Das geht im Tab „1. ZIP erstellen“.',
          step2: 'Lade das ZIP zu einem Dienst mit öffentlichem Link hoch (Google Drive, Dropbox, Nextcloud, GitHub…).',
          step3: 'Teile die Datei, damit jeder mit dem Link sie sehen kann.',
          step4: 'Kopiere die URL und füge sie in das Feld „Füge hier den öffentlichen Link ein“ ein.',
          step5: 'Der Link ist dauerhaft, sodass du ihn an Lernende verteilen kannst.'
        },
        drive: {
          title: 'Wichtig zu Google Drive',
          note: 'Google Drive begrenzt direkte Downloads großer Dateien (ca. 25 MB). Wenn dein ZIP größer ist, kann es fehlschlagen. Dropbox, Nextcloud und andere Dienste erlauben meist größere Dateien ohne dieses Limit.'
        },
        body: '<p>Visor Web_ZIP genera enlaces permanentes a recursos educativos en formato web almacenados en servicios de almacenamiento en la nube como Google Drive o Dropbox, facilitando su publicación y acceso por parte del alumnado.</p>'
          + '<div class="about-section"><h3>Guía rápida</h3><ol><li>En "1. Crear ZIP" comprime tu carpeta con HTML en un .zip.</li><li>Sube el archivo ZIP a un servicio de almacenamiento en la nube (Google Drive, Dropbox, etc.) y compártelo para que cualquier persona con el enlace pueda verlo.</li><li>En "2. Compartir recurso" pega el enlace público al ZIP y pulsa "Crear enlace".</li><li>Comparte el enlace generado con tu alumnado.</li></ol></div>'
          + '<div class="about-section"><h3>1. Crear ZIP</h3><ul><li>Incluye un <code>index.html</code> si es posible.</li><li>Si no hay <code>index.html</code>, el visor te pedirá qué HTML abrir primero.</li></ul></div>'
          + '<div class="about-section"><h3>2. Compartir recurso</h3><ol><li>Pega el enlace público del ZIP.</li><li>El visor detecta automáticamente el tipo de enlace.</li><li>Pulsa "Crear enlace" y copia el resultado.</li></ol></div>'
          + '<div class="about-section"><h3>3. Recursos guardados</h3><ul><li>En esta pestaña puedes ver y gestionar los recursos que has abierto desde este navegador.</li><li><strong>Ver</strong> abre el recurso guardado.</li><li><strong>Compartir</strong> copia el enlace público del visor (pantalla completa).</li><li><strong>Editar</strong> cambia el título.</li><li><strong>Eliminar</strong> borra ese recurso del navegador.</li></ul></div>'
          + '<div class="about-section"><h3>Qué funciona y qué puede fallar</h3><ul><li>Funciona con webs estáticas (HTML, CSS, imágenes, audio, vídeo, PDF...).</li><li>No funciona con webs que requieren servidor (formularios con BD, PHP, etc.).</li><li>Google Drive limita descargas directas de archivos grandes (~25 MB).</li></ul></div>'
      },
      error: {
        driveTooLarge: 'Die Datei ist zu groß und Google Drive begrenzt Downloads.',
        loadZip: 'ZIP konnte nicht geladen werden.',
        noHtmlSelected: 'Kein HTML ausgewählt.',
        htmlPickerOpen: 'HTML-Auswahl konnte nicht geöffnet werden.',
        serviceWorkerUnavailable: 'Service Worker nicht verfügbar.',
        sha1Unavailable: 'SHA-1 ist in diesem Browser nicht verfügbar.',
        configMissing: 'Setze GAS_WEBAPP_URL in config.js.',
        needHtmlFile: 'Das ZIP benötigt mindestens eine .html-Datei.',
        offlineNotAllowed: 'Dieser Browser erlaubt den Offline-Viewer nicht.',
        fflateMissing: 'ZIP-Engine konnte nicht geladen werden (fflate).',
        zipNoWebFiles: 'Das ZIP enthält keine Webdateien.',
        noSpace: 'Nicht genügend Speicher im Browser.'
      },
      status: {
        preparing: 'Vorbereiten...',
        preparingZip: 'ZIP wird vorbereitet...',
        downloadingZip: 'ZIP wird heruntergeladen...',
        unpacking: 'Entpacken...',
        saving: 'Im Browser speichern...',
        copySuccess: 'Link kopiert.'
      },
      common: {
        close: 'Schließen',
        cancel: 'Abbrechen',
        delete: 'Löschen'
      },
      units: ['B', 'KB', 'MB', 'GB']
    }
  };

  var LANG_KEY = 'visor-lang';
  var currentLang = 'es';
  var CLEANUP_THRESHOLD_KEY = 'visor-cleanup-threshold';
  var CLEANUP_DAYS_KEY = 'visor-cleanup-days';
  var CLEANUP_THRESHOLD_DEFAULT = 70;
  var CLEANUP_DAYS_DEFAULT = 30;
  var MANAGER_SORT_KEY = 'visor-manager-sort';
  var MANAGER_SORT_DIR_KEY = 'visor-manager-sort-dir';
  var MANAGER_SORT_DEFAULT = 'date';
  var MANAGER_SORT_DIR_DEFAULT = 'desc';

  var SERVICE_INFO = {
    default: {
      placeholderKey: 'service.otherPlaceholder'
    }
  };

  function normalizeLang(lang) {
    if (!lang) return 'es';
    var value = String(lang).toLowerCase();
    if (value.indexOf('-') !== -1) {
      value = value.split('-')[0];
    }
    if (value.indexOf('_') !== -1) {
      value = value.split('_')[0];
    }
    if (I18N[value]) return value;
    return 'es';
  }

  function getSavedLang() {
    try {
      return normalizeLang(localStorage.getItem(LANG_KEY));
    } catch (err) {
      return null;
    }
  }

  function getStoredNumber(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (raw === null || raw === '') return fallback;
      var value = Number(raw);
      if (value === 0) return fallback;
      if (typeof value !== 'number' || isNaN(value)) return fallback;
      return value;
    } catch (err) {
      return fallback;
    }
  }

  function getManagerSort() {
    try {
      return localStorage.getItem(MANAGER_SORT_KEY) || MANAGER_SORT_DEFAULT;
    } catch (err) {
      return MANAGER_SORT_DEFAULT;
    }
  }

  function setManagerSort(value) {
    var sortValue = value || MANAGER_SORT_DEFAULT;
    try {
      localStorage.setItem(MANAGER_SORT_KEY, sortValue);
    } catch (err) {}
    if (managerSortSelect) {
      managerSortSelect.value = sortValue;
    }
  }

  function getManagerSortDir() {
    try {
      return localStorage.getItem(MANAGER_SORT_DIR_KEY) || MANAGER_SORT_DIR_DEFAULT;
    } catch (err) {
      return MANAGER_SORT_DIR_DEFAULT;
    }
  }

  function setManagerSortDir(value) {
    var dirValue = value === 'desc' ? 'desc' : 'asc';
    try {
      localStorage.setItem(MANAGER_SORT_DIR_KEY, dirValue);
    } catch (err) {}
    updateSortDirButton(dirValue);
  }

  function updateSortDirButton(dirValue) {
    var button = document.querySelector('[data-manager-sort-dir]');
    if (!button) return;
    var isDesc = dirValue === 'desc';
    button.setAttribute('data-i18n-tooltip', 'manager.sort.dirHelp');
    button.textContent = isDesc ? '↓' : '↑';
    button.setAttribute('aria-label', t(isDesc ? 'manager.sort.dirDesc' : 'manager.sort.dirAsc'));
    button.setAttribute('data-sort-dir', isDesc ? 'desc' : 'asc');
  }

  function getCleanupThreshold() {
    var value = getStoredNumber(CLEANUP_THRESHOLD_KEY, CLEANUP_THRESHOLD_DEFAULT);
    return Math.min(95, Math.max(40, value));
  }

  function getCleanupDays() {
    var value = getStoredNumber(CLEANUP_DAYS_KEY, CLEANUP_DAYS_DEFAULT);
    return Math.min(365, Math.max(7, value));
  }

  function setCleanupThreshold(value) {
    var normalized = Math.min(95, Math.max(40, Number(value) || CLEANUP_THRESHOLD_DEFAULT));
    try {
      localStorage.setItem(CLEANUP_THRESHOLD_KEY, String(normalized));
    } catch (err) {}
    if (cleanupThresholdInput) {
      cleanupThresholdInput.value = String(normalized);
    }
    if (cleanupThresholdValue) {
      cleanupThresholdValue.textContent = String(normalized);
    }
  }

  function setCleanupDays(value) {
    var normalized = Math.min(365, Math.max(7, Number(value) || CLEANUP_DAYS_DEFAULT));
    try {
      localStorage.setItem(CLEANUP_DAYS_KEY, String(normalized));
    } catch (err) {}
    if (cleanupDaysInput) {
      cleanupDaysInput.value = String(normalized);
    }
  }

  function getInitialLang() {
    return getSavedLang() || normalizeLang(navigator.language || navigator.userLanguage || 'es');
  }

  function t(key, vars) {
    var table = I18N[currentLang] || I18N.es;
    var fallback = I18N.es;
    var parts = (key || '').split('.');
    var value = table;
    var fallbackValue = fallback;
    for (var i = 0; i < parts.length; i += 1) {
      if (value && typeof value === 'object' && parts[i] in value) {
        value = value[parts[i]];
      } else {
        value = null;
      }
      if (fallbackValue && typeof fallbackValue === 'object' && parts[i] in fallbackValue) {
        fallbackValue = fallbackValue[parts[i]];
      } else {
        fallbackValue = null;
      }
    }
    var resolved = value != null ? value : fallbackValue;
    if (typeof resolved !== 'string') {
      return resolved || '';
    }
    if (!vars) return resolved;
    return resolved.replace(/\{(\w+)\}/g, function (match, keyName) {
      if (vars && Object.prototype.hasOwnProperty.call(vars, keyName)) {
        return String(vars[keyName]);
      }
      return '';
    });
  }

  function applyTranslations() {
    var textNodes = document.querySelectorAll('[data-i18n]');
    textNodes.forEach(function (node) {
      if (node.hasAttribute('data-i18n-dynamic')) return;
      var key = node.getAttribute('data-i18n');
      var value = t(key);
      if (value) {
        node.textContent = value;
      }
    });
    var htmlNodes = document.querySelectorAll('[data-i18n-html]');
    htmlNodes.forEach(function (node) {
      if (node.hasAttribute('data-i18n-dynamic')) return;
      var key = node.getAttribute('data-i18n-html');
      var value = t(key);
      if (value) {
        node.innerHTML = value;
      }
    });
    var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(function (node) {
      var key = node.getAttribute('data-i18n-placeholder');
      var value = t(key);
      if (value) {
        node.setAttribute('placeholder', value);
      }
    });
    var ariaLabels = document.querySelectorAll('[data-i18n-aria-label]');
    ariaLabels.forEach(function (node) {
      var key = node.getAttribute('data-i18n-aria-label');
      var value = t(key);
      if (value) {
        node.setAttribute('aria-label', value);
      }
    });
    var tooltips = document.querySelectorAll('[data-i18n-tooltip]');
    tooltips.forEach(function (node) {
      var key = node.getAttribute('data-i18n-tooltip');
      var value = t(key);
      if (value) {
        node.setAttribute('data-tooltip', value);
      }
    });
  }

  function getZipDefaultName() {
    return t('zipper.zipName.default') || 'materiales';
  }

  function syncZipNameDefault() {
    if (zipNameInput && !zipNameDirty) {
      zipNameInput.value = getZipDefaultName();
    }
  }

  function setLanguage(lang) {
    currentLang = normalizeLang(lang);
    if (langSelect) {
      langSelect.value = currentLang;
    }
    try {
      localStorage.setItem(LANG_KEY, currentLang);
    } catch (err) {
      // ignore persistence errors
    }
    document.documentElement.setAttribute('lang', currentLang);
    applyTranslations();
    updateServiceInfo();
    syncZipNameDefault();
    setCleanupThreshold(getCleanupThreshold());
    setCleanupDays(getCleanupDays());
    updateSortDirButton(getManagerSortDir());
    if (output && !currentShareLink) {
      output.textContent = t('main.output.placeholder');
    }
    if (!selectedFiles.length) {
      setUploadStatus(t('zipper.status.empty'));
      setZipStatus(t('zipper.status.readyHint'));
    } else {
      setUploadStatus(t('zipper.status.filesReady', { count: selectedFiles.length }));
      setZipStatus(t('zipper.status.ready'));
    }
    if (!loadingActive && loadingMessage) {
      loadingMessage.textContent = t('loading.message');
    }
    if (managerList) {
      refreshManager();
    }
  }

  function updateServiceInfo() {
    var info = SERVICE_INFO.default;
    if (input) {
      input.placeholder = t(info.placeholderKey);
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
    if (link && stepThree) {
      stepThree.scrollIntoView({ behavior: 'smooth', block: 'center' });
      stepThree.setAttribute('tabindex', '-1');
      stepThree.focus({ preventScroll: true });
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

  function showInlineToast(button, message) {
    if (!button) return;
    var existing = button.querySelector('.inline-toast');
    var bubble = existing || document.createElement('span');
    bubble.className = 'inline-toast';
    bubble.textContent = message;
    if (!existing) {
      button.appendChild(bubble);
    }
    button.classList.add('show-toast');
    if (inlineToastTimer) {
      clearTimeout(inlineToastTimer);
    }
    inlineToastTimer = setTimeout(function () {
      button.classList.remove('show-toast');
    }, 1300);
  }

  function formatUserError(err) {
    var message = (err && err.message) ? err.message : '';
    if (/no devolvio un ZIP|recibio HTML|devolvio HTML/i.test(message)) {
      return t('error.driveTooLarge');
    }
    return message || t('error.loadZip');
  }

  function closeHtmlPicker(message) {
    if (!htmlModal) return;
    htmlModal.setAttribute('hidden', '');
    if (htmlList) {
      htmlList.innerHTML = '';
    }
    if (htmlPickerReject) {
      var reject = htmlPickerReject;
      htmlPickerResolve = null;
      htmlPickerReject = null;
      reject(new Error(message || t('error.noHtmlSelected')));
    }
  }

  function confirmHtmlPicker() {
    if (!htmlList || !htmlPickerResolve) return;
    var choice = htmlList.querySelector('input[name="html-choice"]:checked');
    if (!choice) {
      return;
    }
    var resolve = htmlPickerResolve;
    htmlPickerResolve = null;
    htmlPickerReject = null;
    htmlModal.setAttribute('hidden', '');
    htmlList.innerHTML = '';
    resolve(choice.value);
  }

  function openHtmlPicker(htmlPaths, preferred) {
    if (!htmlModal || !htmlList || !htmlConfirm) {
      return Promise.reject(new Error(t('error.htmlPickerOpen')));
    }
    return new Promise(function (resolve, reject) {
      htmlPickerResolve = resolve;
      htmlPickerReject = reject;
      if (loadingActive) {
        htmlPickerWasLoading = true;
        setLoading(false);
      }
      htmlList.innerHTML = '';
      htmlPaths.forEach(function (path, index) {
        var id = 'html-choice-' + index;
        var label = document.createElement('label');
        label.className = 'html-option';
        var input = document.createElement('input');
        input.type = 'radio';
        input.name = 'html-choice';
        input.value = path;
        input.id = id;
        if ((preferred && preferred === path) || (!preferred && index === 0)) {
          input.checked = true;
        }
        var text = document.createElement('span');
        text.textContent = path;
        label.appendChild(input);
        label.appendChild(text);
        htmlList.appendChild(label);
      });
      htmlModal.removeAttribute('hidden');
    });
  }

  function setUploadStatus(message) {
    if (uploadStatus) {
      uploadStatus.textContent = message;
    }
  }

  function setZipStatus(message) {
    if (zipStatus) {
      zipStatus.textContent = message;
    }
  }

  function resetZipDownload() {
    // No-op: downloads are triggered immediately after ZIP creation.
  }

  function updateSelectedFiles(files) {
    selectedFiles = files || [];
    resetZipDownload();
    if (!selectedFiles.length) {
      setUploadStatus(t('zipper.status.empty'));
      setZipStatus(t('zipper.status.readyHint'));
      if (zipNameInput && !zipNameDirty) {
        zipNameInput.value = getZipDefaultName();
      }
      return;
    }
    if (zipNameInput && !zipNameDirty) {
      zipNameInput.value = deriveZipBaseName(selectedFiles);
    }
    setUploadStatus(t('zipper.status.filesReady', { count: selectedFiles.length }));
    setZipStatus(t('zipper.status.ready'));
  }

  function normalizeZipName(name) {
    var value = (name || '').trim() || getZipDefaultName();
    if (!/\.zip$/i.test(value)) {
      value += '.zip';
    }
    return value;
  }

  function deriveZipBaseName(files) {
    if (!files || !files.length) return getZipDefaultName();
    var firstPath = files[0].path || '';
    if (!firstPath) return getZipDefaultName();
    var parts = firstPath.split('/');
    if (parts.length > 1) {
      var root = parts[0];
      var sameRoot = files.every(function (item) {
        return item.path && item.path.indexOf(root + '/') === 0;
      });
      if (sameRoot) {
        return root;
      }
    }
    var filename = parts[parts.length - 1] || getZipDefaultName();
    return filename.replace(/\.[^/.]+$/, '') || getZipDefaultName();
  }

  function deriveTitleFromPath(path) {
    if (!path) return '';
    var trimmed = path.replace(/[#?].*$/, '');
    var parts = trimmed.split('/');
    var filename = parts[parts.length - 1] || '';
    return filename.replace(/\.[^/.]+$/, '').replace(/[_-]+/g, ' ').trim();
  }

  function deriveTitleFromUrl(url) {
    if (!url) return '';
    var cleaned = url.replace(/[#?].*$/, '');
    var parts = cleaned.split('/');
    var filename = parts[parts.length - 1] || '';
    return filename.replace(/\.[^/.]+$/, '').replace(/[_-]+/g, ' ').trim();
  }

  function readBlobText(blob) {
    if (!blob) return Promise.resolve('');
    if (blob.text) {
      return blob.text().catch(function () { return ''; });
    }
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.onload = function () {
        resolve(reader.result || '');
      };
      reader.onerror = function () {
        resolve('');
      };
      reader.readAsText(blob);
    });
  }

  function extractTitleFromFiles(files, indexPath) {
    if (!files || !files.length || !indexPath) return Promise.resolve('');
    var target = null;
    for (var i = 0; i < files.length; i += 1) {
      if (files[i].path === indexPath) {
        target = files[i];
        break;
      }
    }
    if (!target || !target.blob) return Promise.resolve('');
    return readBlobText(target.blob).then(function (text) {
      var title = '';
      if (typeof DOMParser !== 'undefined') {
        try {
          var doc = new DOMParser().parseFromString(text, 'text/html');
          title = doc && doc.title ? doc.title : '';
        } catch (err) {
          title = '';
        }
      }
      if (!title) {
        var match = text.match(/<title[^>]*>([^<]*)<\/title>/i);
        title = match ? match[1] : '';
      }
      title = (title || '').replace(/\s+/g, ' ').trim();
      return title;
    });
  }

  function collectFilesFromInput(fileList) {
    var files = [];
    Array.prototype.forEach.call(fileList || [], function (file) {
      var path = file.webkitRelativePath || file.name || '';
      if (!path) return;
      path = path.replace(/^\//, '');
      files.push({ path: path, file: file });
    });
    updateSelectedFiles(files);
  }

  function readFileEntry(entry, basePath) {
    return new Promise(function (resolve, reject) {
      entry.file(function (file) {
        var path = (basePath || '') + (file.name || '');
        resolve([{ path: path, file: file }]);
      }, reject);
    });
  }

  function readAllEntries(reader) {
    return new Promise(function (resolve, reject) {
      var entries = [];
      var readBatch = function () {
        reader.readEntries(function (batch) {
          if (!batch.length) {
            resolve(entries);
            return;
          }
          entries = entries.concat(batch);
          readBatch();
        }, reject);
      };
      readBatch();
    });
  }

  function readDirectoryEntry(entry, basePath) {
    var reader = entry.createReader();
    return readAllEntries(reader).then(function (entries) {
      var prefix = (basePath || '') + entry.name + '/';
      var promises = entries.map(function (child) {
        return readEntry(child, prefix);
      });
      return Promise.all(promises).then(function (nested) {
        return nested.reduce(function (acc, group) {
          return acc.concat(group);
        }, []);
      });
    });
  }

  function readEntry(entry, basePath) {
    if (entry.isFile) {
      return readFileEntry(entry, basePath);
    }
    if (entry.isDirectory) {
      return readDirectoryEntry(entry, basePath);
    }
    return Promise.resolve([]);
  }

  function collectFilesFromDrop(event) {
    var items = event.dataTransfer && event.dataTransfer.items;
    if (items && items.length) {
      var entries = [];
      Array.prototype.forEach.call(items, function (item) {
        if (!item.webkitGetAsEntry) return;
        var entry = item.webkitGetAsEntry();
        if (entry) {
          entries.push(entry);
        }
      });
      if (entries.length) {
        return Promise.all(entries.map(function (entry) {
          return readEntry(entry, '');
        })).then(function (nested) {
          var files = nested.reduce(function (acc, group) {
            return acc.concat(group);
          }, []);
          updateSelectedFiles(files);
        });
      }
    }
    collectFilesFromInput(event.dataTransfer.files || []);
    return Promise.resolve();
  }

  function buildZipFromSelection() {
    if (!selectedFiles.length) {
      setZipStatus(t('zipper.status.selectFirst'));
      return;
    }
    if (!window.fflate || !window.fflate.zipSync) {
      setZipStatus(t('zipper.status.engineMissing'));
      return;
    }
    var zipName = normalizeZipName(zipNameInput ? zipNameInput.value : '');
    setZipStatus(t('zipper.status.creating'));
    var tasks = selectedFiles.map(function (item) {
      return item.file.arrayBuffer().then(function (buffer) {
        return {
          path: item.path,
          data: new Uint8Array(buffer)
        };
      });
    });
    Promise.all(tasks).then(function (entries) {
      var files = {};
      entries.forEach(function (entry) {
        if (entry.path) {
          files[entry.path] = entry.data;
        }
      });
      var zipped = window.fflate.zipSync(files);
      var blob = new Blob([zipped], { type: 'application/zip' });
      var url = URL.createObjectURL(blob);
      var anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = zipName;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      setTimeout(function () {
        URL.revokeObjectURL(url);
      }, 1000);
      setZipStatus(t('zipper.status.downloaded'));
    }).catch(function () {
      setZipStatus(t('zipper.status.failed'));
    });
  }

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) {
      return Promise.reject(new Error(t('error.serviceWorkerUnavailable')));
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

  function getAllSites() {
    return withStore(STORE_SITES, 'readonly', function (store) {
      return store.getAll();
    }).then(function (sites) {
      return sites || [];
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
    var isNextcloud = false;
    var host = '';
    var path = '';
    try {
      var parsed = new URL(url);
      host = parsed.hostname || '';
      path = parsed.pathname || '';
    } catch (e) {
      // Ignore invalid URLs; fall back to simple checks.
      path = url;
    }
    var looksLikeNextcloud = path.indexOf('/s/') !== -1 && host.indexOf('drive.google.com') === -1;
    if (isNextcloud || looksLikeNextcloud) {
      if (url.indexOf('/download') === -1 && url.indexOf('download=1') === -1) {
        var parts = url.split('#');
        var baseAndQuery = parts[0];
        var hash = parts.length > 1 ? '#' + parts.slice(1).join('#') : '';
        var queryIndex = baseAndQuery.indexOf('?');
        var base = queryIndex === -1 ? baseAndQuery : baseAndQuery.slice(0, queryIndex);
        var query = queryIndex === -1 ? '' : baseAndQuery.slice(queryIndex);
        base = base.replace(/\/$/, '') + '/download';
        return base + query + hash;
      }
    }
    return url;
  }

  function sha1Hex(value) {
    if (!window.crypto || !window.crypto.subtle || !window.TextEncoder) {
      return Promise.reject(new Error(t('error.sha1Unavailable')));
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

  function formatBytes(bytes) {
    if (!bytes) return '0 B';
    var units = (I18N[currentLang] && I18N[currentLang].units) ? I18N[currentLang].units : I18N.es.units;
    var idx = 0;
    var value = bytes;
    while (value >= 1024 && idx < units.length - 1) {
      value /= 1024;
      idx += 1;
    }
    return value.toFixed(value >= 10 || idx === 0 ? 0 : 1) + ' ' + units[idx];
  }

  function sumSiteBytes(sites) {
    return sites.reduce(function (sum, site) {
      return sum + (site.totalBytes || 0);
    }, 0);
  }

  function estimateStorage() {
    if (navigator.storage && navigator.storage.estimate) {
      return navigator.storage.estimate().catch(function () {
        return null;
      });
    }
    return Promise.resolve(null);
  }

  function deleteSitesSequential(siteIds) {
    return siteIds.reduce(function (promise, siteId) {
      return promise.then(function () {
        return deleteSite(siteId);
      });
    }, Promise.resolve());
  }

  function chooseOldestSites(sites, targetBytes) {
    var sorted = sites.slice().sort(function (a, b) {
      return (a.updatedAt || 0) - (b.updatedAt || 0);
    });
    var total = sumSiteBytes(sorted);
    var toDelete = [];
    for (var i = 0; i < sorted.length && total > targetBytes; i += 1) {
      var site = sorted[i];
      total -= site.totalBytes || 0;
      toDelete.push(site.id);
    }
    return toDelete;
  }

  function ensureStorageCapacity(extraBytes) {
    return Promise.all([getAllSites(), estimateStorage()]).then(function (result) {
      var sites = result[0];
      var estimate = result[1];
      var quota = estimate && estimate.quota ? estimate.quota : 0;
      var usage = estimate && estimate.usage ? estimate.usage : sumSiteBytes(sites);
      if (!quota) {
        return true;
      }
      var projected = usage + (extraBytes || 0);
      var limit = quota * (getCleanupThreshold() / 100);
      if (projected < limit) {
        return true;
      }
      var target = Math.max(0, limit - (extraBytes || 0));
      var toDelete = chooseOldestSites(sites, target);
      if (!toDelete.length) return false;
      return deleteSitesSequential(toDelete).then(function () {
        return ensureStorageCapacity(extraBytes);
      });
    });
  }

  function cleanupOldSites() {
    var cutoff = Date.now() - getCleanupDays() * 24 * 60 * 60 * 1000;
    return getAllSites().then(function (sites) {
      var oldIds = sites.filter(function (site) {
        return site.updatedAt && site.updatedAt < cutoff;
      }).map(function (site) { return site.id; });
      if (!oldIds.length) return;
      return deleteSitesSequential(oldIds);
    });
  }

  function renderManagerList(sites) {
    if (!managerList) return;
    managerList.innerHTML = '';
    if (!sites.length) {
      var managerToolbar = document.querySelector('.manager-toolbar');
      if (managerToolbar) {
        managerToolbar.setAttribute('hidden', '');
      }
      var empty = document.createElement('p');
      empty.textContent = t('manager.empty');
      managerList.appendChild(empty);
      return;
    }
    var managerToolbar = document.querySelector('.manager-toolbar');
    if (managerToolbar) {
      managerToolbar.removeAttribute('hidden');
    }
    var sortedSites = sortManagerSites(sites);
    sortedSites.forEach(function (site) {
      var item = document.createElement('div');
      item.className = 'manager-item';
      var info = document.createElement('div');
      var title = document.createElement('div');
      title.className = 'manager-item__title';
      title.setAttribute('data-title', 'true');
      var displayTitle = site.title || deriveTitleFromPath(site.indexPath) || site.url || t('manager.siteNoUrl');
      title.textContent = displayTitle;
      var meta = document.createElement('div');
      meta.className = 'manager-item__meta';
      var date = site.updatedAt ? new Date(site.updatedAt).toLocaleString(currentLang) : t('manager.noDate');
      meta.textContent = formatBytes(site.totalBytes || 0) + ' · ' + date;
      info.appendChild(title);
      if (site.url && displayTitle !== site.url) {
        var urlLine = document.createElement('div');
        urlLine.className = 'manager-item__url';
        urlLine.textContent = site.url;
        info.appendChild(urlLine);
      }
      info.appendChild(meta);
      var actions = document.createElement('div');
      actions.className = 'manager-item__actions';
      var viewButton = document.createElement('button');
      viewButton.type = 'button';
      viewButton.className = 'icon-button';
      viewButton.setAttribute('data-action', 'view');
      viewButton.setAttribute('data-site-id', site.id);
      viewButton.setAttribute('data-index-path', site.indexPath || '');
      viewButton.setAttribute('aria-label', t('manager.actions.view'));
      viewButton.setAttribute('data-tooltip', t('manager.actions.view'));
      viewButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M1.5 12s3.5-7 10.5-7 10.5 7 10.5 7-3.5 7-10.5 7-10.5-7-10.5-7z"></path><circle cx="12" cy="12" r="3.5"></circle></svg>';
      actions.appendChild(viewButton);
      var shareButton = document.createElement('button');
      shareButton.type = 'button';
      shareButton.className = 'icon-button';
      shareButton.setAttribute('data-action', 'share');
      shareButton.setAttribute('data-zip-url', site.url || '');
      shareButton.setAttribute('aria-label', t('manager.actions.share'));
      shareButton.setAttribute('data-tooltip', t('manager.actions.share'));
      shareButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.6 10.7l6.8-3.4"></path><path d="M8.6 13.3l6.8 3.4"></path></svg>';
      actions.appendChild(shareButton);
      var editButton = document.createElement('button');
      editButton.type = 'button';
      editButton.className = 'icon-button';
      editButton.setAttribute('data-action', 'edit');
      editButton.setAttribute('data-site-id', site.id);
      editButton.setAttribute('aria-label', t('manager.actions.edit'));
      editButton.setAttribute('data-tooltip', t('manager.actions.edit'));
      editButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"></path></svg>';
      actions.appendChild(editButton);
      var downloadButton = document.createElement('button');
      downloadButton.type = 'button';
      downloadButton.className = 'icon-button';
      downloadButton.setAttribute('data-action', 'download');
      downloadButton.setAttribute('data-zip-url', site.url || '');
      downloadButton.setAttribute('aria-label', t('manager.actions.download'));
      downloadButton.setAttribute('data-tooltip', t('manager.actions.download'));
      downloadButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 3v10"></path><path d="M7 9l5 5 5-5"></path><path d="M5 21h14"></path></svg>';
      actions.appendChild(downloadButton);
      var delButton = document.createElement('button');
      delButton.type = 'button';
      delButton.className = 'icon-button';
      delButton.setAttribute('data-action', 'delete');
      delButton.setAttribute('data-site-id', site.id);
      delButton.setAttribute('aria-label', t('common.delete'));
      delButton.setAttribute('data-tooltip', t('common.delete'));
      delButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><path d="M19 6l-1 14H6L5 6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path></svg>';
      actions.appendChild(delButton);
      item.appendChild(info);
      item.appendChild(actions);
      managerList.appendChild(item);
    });
  }

  function refreshManager() {
    return Promise.all([getAllSites(), estimateStorage()]).then(function (result) {
      var sites = result[0];
      var estimate = result[1];
      var totalBytes = sumSiteBytes(sites);
      if (storageUsed) {
        storageUsed.textContent = formatBytes(totalBytes);
      }
      if (storageUsedPercent) {
        var quota = estimate && estimate.quota ? estimate.quota : 0;
        if (quota) {
          var percent = Math.min(100, Math.round((totalBytes / quota) * 100));
          storageUsedPercent.textContent = percent + '%';
        } else {
          storageUsedPercent.textContent = '--';
        }
      }
      if (storageTotal) {
        storageTotal.textContent = estimate && estimate.quota ? formatBytes(estimate.quota) : '--';
      }
      if (storageCount) {
        storageCount.textContent = String(sites.length);
      }
      renderManagerList(sites);
    });
  }

  function sortManagerSites(sites) {
    var key = getManagerSort();
    var direction = getManagerSortDir();
    var factor = direction === 'desc' ? -1 : 1;
    var collator = new Intl.Collator(currentLang, { sensitivity: 'base', numeric: true });
    return sites.slice().sort(function (a, b) {
      if (key === 'date') {
        var aDate = a.updatedAt || 0;
        var bDate = b.updatedAt || 0;
        return (aDate - bDate) * factor;
      }
      if (key === 'size') {
        var aSize = a.totalBytes || 0;
        var bSize = b.totalBytes || 0;
        return (aSize - bSize) * factor;
      }
      var aTitle = a.title || deriveTitleFromPath(a.indexPath) || a.url || '';
      var bTitle = b.title || deriveTitleFromPath(b.indexPath) || b.url || '';
      return collator.compare(aTitle, bTitle) * factor;
    });
  }

  function closeActiveTitleEdit() {
    if (!activeTitleEdit) return;
    var input = activeTitleEdit.input;
    var titleEl = activeTitleEdit.titleEl;
    if (input && input.parentNode) {
      input.parentNode.replaceChild(titleEl, input);
    }
    activeTitleEdit = null;
  }

  function startTitleEdit(siteId, titleEl) {
    if (!siteId || !titleEl) return;
    if (activeTitleEdit && activeTitleEdit.siteId === siteId) return;
    closeActiveTitleEdit();
    var currentText = titleEl.textContent || '';
    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'manager-item__title-edit';
    input.value = currentText;
    titleEl.parentNode.replaceChild(input, titleEl);
    input.focus();
    input.select();
    activeTitleEdit = { siteId: siteId, input: input, titleEl: titleEl };

    var save = function () {
      var value = input.value.trim().replace(/\s+/g, ' ');
      getSite(siteId).then(function (site) {
        if (!site) return;
        site.title = value;
        return saveSite(site).then(function () {
          refreshManager();
        });
      }).finally(function () {
        closeActiveTitleEdit();
      });
    };

    input.addEventListener('blur', function () {
      save();
    });
    input.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        save();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        closeActiveTitleEdit();
      }
    });
  }

  function setActiveTab(name) {
    document.body.setAttribute('data-active-tab', name);
    tabButtons.forEach(function (button) {
      var isActive = button.getAttribute('data-tab') === name;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    tabPanels.forEach(function (panel) {
      var isActive = panel.getAttribute('data-tab-panel') === name;
      panel.classList.toggle('is-active', isActive);
    });
    if (name === 'manager') {
      refreshManager();
    }
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
      return Promise.reject(new Error(t('error.configMissing')));
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
    var idx = lower.findIndex(function (p) {
      return p === 'index.html' || p.endsWith('/index.html');
    });
    if (idx !== -1) return paths[idx];
    idx = lower.findIndex(function (p) {
      return p === 'index.htm' || p.endsWith('/index.htm');
    });
    if (idx !== -1) return paths[idx];
    var htmlIndex = lower.findIndex(function (p) { return p.endsWith('.html') || p.endsWith('.htm'); });
    if (htmlIndex !== -1) return paths[htmlIndex];
    return paths[0] || '';
  }

  function pickIndexPath(paths) {
    var htmlPaths = paths.filter(function (path) {
      var lower = path.toLowerCase();
      return lower.endsWith('.html') || lower.endsWith('.htm');
    });
    if (!htmlPaths.length) {
      return Promise.reject(new Error(t('error.needHtmlFile')));
    }
    var preferred = findIndexPath(paths);
    if (preferred && /index\.html?$/.test(preferred.toLowerCase())) {
      return Promise.resolve(preferred);
    }
    if (htmlPaths.length === 1) {
      return Promise.resolve(htmlPaths[0]);
    }
    return openHtmlPicker(htmlPaths, preferred || htmlPaths[0]);
  }

  function loadZip(zipUrl, options) {
    var opts = options || {};
    var autoOpen = !!opts.autoOpen;
    var showProgress = opts.showProgress !== false;
    var normalizedZipUrl = normalizeZipUrl(zipUrl);
    var shouldUseNormalized = false;
    if (normalizedZipUrl.indexOf('/s/') !== -1 || normalizedZipUrl.indexOf('nextcloud') !== -1) {
      shouldUseNormalized = true;
    }
    if (zipUrl.indexOf('dropbox.com') !== -1) {
      shouldUseNormalized = true;
    }
    var effectiveZipUrl = shouldUseNormalized ? normalizedZipUrl : zipUrl;
    if (shouldUseNormalized && input && input.value && input.value.trim() === zipUrl && normalizedZipUrl !== zipUrl) {
      input.value = normalizedZipUrl;
    }
    if (autoOpen) {
      setLoading(true);
      setProgress(5);
      setLoadingMessage(t('status.preparing'));
    }
    if (!GAS_WEBAPP_URL) {
      setStatus(t('error.configMissing'));
      if (showProgress && !autoOpen) {
        setLoading(false);
      }
      return Promise.resolve();
    }
    setStatus(t('status.preparingZip'));
    if (autoOpen) {
      startProgress(8);
    }

    var workerPromise = registerServiceWorker().catch(function () {
      throw new Error(t('error.offlineNotAllowed'));
    });
    var controlPromise = workerPromise.then(function () {
      return waitForServiceWorkerControl();
    });

    return computeSiteId(effectiveZipUrl)
      .then(function (siteId) {
        return getSite(siteId).then(function (site) {
          return { siteId: siteId, cached: !!site, site: site };
        });
      })
      .then(function (result) {
        var shareLink = buildShareLink(effectiveZipUrl, true);
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

        setStatus(t('status.downloadingZip'));
        if (showProgress && !autoOpen) {
          setLoading(true);
          setLoadingMessage(t('status.downloadingZip'));
        }
        if (autoOpen) {
          startProgress(20);
        } else if (showProgress) {
          startProgress(20);
        }
        return fetchZipBundle(effectiveZipUrl).then(function (bundle) {
          setStatus(t('status.unpacking'));
          if (autoOpen) {
            stopProgress();
            setProgress(70);
          } else if (showProgress) {
            stopProgress();
            setProgress(70);
          }
          if (!window.fflate || !window.fflate.unzipSync) {
            throw new Error(t('error.fflateMissing'));
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
            throw new Error(t('error.zipNoWebFiles'));
          }

          var paths = files.map(function (file) { return file.path; });
          return pickIndexPath(paths).then(function (indexPath) {
            if (htmlPickerWasLoading) {
              htmlPickerWasLoading = false;
              setLoading(true);
              setLoadingMessage(t('status.saving'));
            }
            setStatus(t('status.saving'));
            if (autoOpen) {
              stopProgress();
              setProgress(85);
            } else if (showProgress) {
              stopProgress();
              setProgress(85);
            }

            var totalBytes = files.reduce(function (sum, item) { return sum + item.size; }, 0);
            return ensureStorageCapacity(totalBytes).then(function (canProceed) {
              if (!canProceed) {
                throw new Error(t('error.noSpace'));
              }
              return deleteSite(result.siteId).catch(function () {
                // Ignore delete errors.
              });
            }).then(function () {
              return extractTitleFromFiles(files, indexPath).then(function (foundTitle) {
                var siteTitle = foundTitle || deriveTitleFromPath(indexPath) || deriveTitleFromUrl(effectiveZipUrl);
                var site = {
                  id: result.siteId,
                  url: effectiveZipUrl,
                  indexPath: indexPath,
                  updatedAt: Date.now(),
                  fileCount: files.length,
                  totalBytes: totalBytes,
                  title: siteTitle
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
                      refreshManager();
                      return { siteId: result.siteId, siteUrl: siteUrl };
                    });
                  });
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
        setStatus(formatUserError(err));
        if (autoOpen) {
          setLoading(false);
        }
        if (showProgress && !autoOpen) {
          stopProgress();
          setLoading(false);
        }
      });
  }

  function copyText(value, sourceButton) {
    if (!value) return;
    var done = function () {
      if (sourceButton) {
        showInlineToast(sourceButton, t('status.copySuccess'));
      } else {
        flashMessage(t('status.copySuccess'));
      }
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(done, done);
      return;
    }
    var textarea = document.createElement('textarea');
    textarea.value = value;
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
  }

  if (copyButton) {
    copyButton.addEventListener('click', function () {
      if (!currentShareLink) {
        return;
      }
      copyText(currentShareLink);
    });
  }

  if (dropzone) {
    var stopEvent = function (event) {
      event.preventDefault();
      event.stopPropagation();
    };
    dropzone.addEventListener('dragenter', function (event) {
      stopEvent(event);
      dropzone.classList.add('is-dragover');
    });
    dropzone.addEventListener('dragover', function (event) {
      stopEvent(event);
      dropzone.classList.add('is-dragover');
    });
    dropzone.addEventListener('dragleave', function (event) {
      stopEvent(event);
      dropzone.classList.remove('is-dragover');
    });
    dropzone.addEventListener('drop', function (event) {
      stopEvent(event);
      dropzone.classList.remove('is-dragover');
      collectFilesFromDrop(event);
    });
  }

  if (folderInput) {
    folderInput.addEventListener('change', function (event) {
      collectFilesFromInput(event.target.files || []);
    });
  }

  if (folderButton && folderInput) {
    folderButton.addEventListener('click', function () {
      folderInput.click();
    });
  }

  if (fileInput) {
    fileInput.addEventListener('change', function (event) {
      collectFilesFromInput(event.target.files || []);
    });
  }

  if (fileButton && fileInput) {
    fileButton.addEventListener('click', function () {
      fileInput.click();
    });
  }

  if (buildZipButton) {
    buildZipButton.addEventListener('click', function () {
      buildZipFromSelection();
    });
  }

  if (zipNameInput) {
    zipNameInput.addEventListener('input', function () {
      zipNameDirty = true;
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
  if (langSelect) {
    langSelect.addEventListener('change', function () {
      setLanguage(langSelect.value);
    });
  }
  setLanguage(getInitialLang());
  updateServiceInfo();
  if (tabButtons.length && tabPanels.length) {
    tabButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        setActiveTab(button.getAttribute('data-tab'));
      });
    });
    setActiveTab('zipper');
  }
  if (managerList) {
    managerList.addEventListener('click', function (event) {
      var target = event.target;
      if (!(target instanceof Element)) return;
      var button = target.closest('button');
      if (!button) return;
      var action = button.getAttribute('data-action');
      var siteId = button.getAttribute('data-site-id');
      var indexPath = button.getAttribute('data-index-path') || '';
      var zipUrl = button.getAttribute('data-zip-url') || '';
      if (action === 'delete' && siteId) {
        button.classList.add('is-active');
        deleteSite(siteId).then(function () {
          refreshManager();
        }).finally(function () {
          button.classList.remove('is-active');
        });
        return;
      }
      if (action === 'view' && siteId) {
        var siteUrl = buildSiteUrl(siteId, indexPath || '');
        window.open(siteUrl, '_blank');
        return;
      }
      if (action === 'share' && zipUrl) {
        copyText(buildShareLink(zipUrl, true), button);
        return;
      }
      if (action === 'download' && zipUrl) {
        var downloadUrl = normalizeZipUrl(zipUrl);
        window.open(downloadUrl, '_blank');
        return;
      }
      if (action === 'edit' && siteId) {
        var item = button.closest('.manager-item');
        if (!item) return;
        var titleEl = item.querySelector('[data-title]');
        startTitleEdit(siteId, titleEl);
      }
    });
  }
  var sortDirButton = document.querySelector('[data-manager-sort-dir]');
  if (managerSortSelect) {
    setManagerSort(getManagerSort());
    managerSortSelect.addEventListener('change', function () {
      setManagerSort(managerSortSelect.value);
      refreshManager();
    });
  }
  if (sortDirButton) {
    setManagerSortDir(getManagerSortDir());
    sortDirButton.addEventListener('click', function () {
      var nextDir = getManagerSortDir() === 'asc' ? 'desc' : 'asc';
      setManagerSortDir(nextDir);
      refreshManager();
    });
  }
  if (cleanupThresholdInput) {
    cleanupThresholdInput.addEventListener('input', function () {
      setCleanupThreshold(cleanupThresholdInput.value);
    });
  }
  if (cleanupDaysInput) {
    cleanupDaysInput.addEventListener('change', function () {
      setCleanupDays(cleanupDaysInput.value);
      cleanupOldSites();
      refreshManager();
    });
  }
  if (resetCleanupButton) {
    resetCleanupButton.addEventListener('click', function () {
      setCleanupThreshold(CLEANUP_THRESHOLD_DEFAULT);
      setCleanupDays(CLEANUP_DAYS_DEFAULT);
      cleanupOldSites();
      refreshManager();
    });
  }
  if (deleteAllButton) {
    deleteAllButton.addEventListener('click', function () {
      getAllSites().then(function (sites) {
        var ids = sites.map(function (site) { return site.id; });
        return deleteSitesSequential(ids);
      }).then(function () {
        refreshManager();
      });
    });
  }
  if (aboutOpen && aboutModal) {
    aboutOpen.addEventListener('click', function () {
      aboutModal.removeAttribute('hidden');
    });
    aboutCloseButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        aboutModal.setAttribute('hidden', '');
      });
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        aboutModal.setAttribute('hidden', '');
      }
    });
  }
  if (htmlModal) {
    htmlCloseButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        closeHtmlPicker();
      });
    });
    if (htmlConfirm) {
      htmlConfirm.addEventListener('click', function () {
        confirmHtmlPicker();
      });
    }
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeHtmlPicker();
      }
    });
  }
  cleanupOldSites();
  refreshManager();
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
