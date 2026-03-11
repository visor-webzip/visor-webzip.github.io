(function () {
  window.I18N = {
    es: {
      page: { title: 'Visor Web-ZIP' },
      loading: {
        title: 'Cargando material',
        message: 'Preparando...',
        eta: 'Tiempo estimado de descarga: --',
        etaPrefix: 'Tiempo estimado de descarga: ',
        downloadedPrefix: 'Descargado: ',
        note: 'Las siguientes veces la visualización será instantánea.'
      },
      header: {
        eyebrow: 'Materiales en ZIP',
        title: 'Visor Web-ZIP',
        help: 'Ayuda',
        settings: 'Ajustes',
        settingsHint: 'Configura la disponibilidad del recurso',
        language: 'Idioma',
        languageHint: 'Cambiar idioma',
        theme: 'Tema',
        themeHint: 'Cambiar tema',
        themeAuto: 'Automático',
        themeLight: 'Claro',
        themeDark: 'Oscuro',
        subtitle: 'Genera un enlace web para compartir tu recurso digital educativo. Comparte el enlace y tu recurso podrá ser abierto directamente en cualquier navegador.'
      },
      settings: {
        title: 'Ajustes de visibilidad',
        languageTitle: 'Idioma',
        restrictTitle: 'Acceso por fechas',
        restrictHint: 'Aquí puedes definir cuándo estará visible el recurso y qué acciones estarán disponibles en el gestor de recursos.',
        restrictToggle: 'Limitar el acceso',
        startLabel: 'Inicio',
        endLabel: 'Fin',
        hasStart: 'Activar fecha de inicio de visibilidad del recurso',
        neverExpires: 'Activar fecha de fin de visibilidad del recurso',
        enforceEndDuringView: 'Desactivar la visualización del recurso al llegar a la fecha de fin mientras está abierto',
        warningMinutesLabel: 'Aviso previo en minutos (0 para no avisar)',
        warningMessageLabel: 'Mensaje de aviso',
        warningMessagePlaceholder: 'El tiempo de acceso se agota en {minutes} minutos.',
        warningMessageDefault: 'El tiempo de acceso se agota en {minutes} minutos.',
        periodHint: 'El recurso solo será visible dentro de este intervalo.',
        periodHintLiveEndOn: 'La visualización se desactivará al llegar a la fecha de fin.',
        periodHintLiveEndOff: 'La visualización no se desactivará automáticamente al llegar a la fecha de fin.',
        periodHintWarningOn: 'Habrá aviso {minutes} minutos antes.',
        periodHintWarningOff: 'No habrá aviso previo.',
        summaryLiveEndOn: 'Desactiva al llegar al fin',
        summaryLiveEndOff: 'Sin desactivación automática',
        summaryWarningOn: 'Aviso: {minutes} min antes',
        summaryWarningOff: 'Sin aviso previo',
        summaryNoRestrictions: 'Recurso sin restricciones de visibilidad.',
        summaryAllowedActions: 'Acciones permitidas en el gestor de recursos: {actions}',
        summaryNoActions: 'ninguna',
        summaryBlockedActions: 'No se podrá: {actions}',
        summaryNoBlockedActions: 'ninguna',
        datesTitle: 'Periodo de visibilidad',
        actionsTitle: 'Acciones disponibles mientras el recurso sea visible',
        allowShare: 'Compartir',
        allowEmbed: 'Insertar en web',
        allowDownload: 'Descargar'
      },
      restrictionModal: {
        title: 'Acceso restringido',
        body: 'Este recurso no está disponible en este momento.',
        rangeStart: 'Disponible desde: {date}',
        rangeEnd: 'Hasta: {date}',
        rangeNoStart: 'Sin fecha de inicio',
        rangeNoEnd: 'Sin fecha de fin',
        countdown: 'Disponible en: {time}'
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
      footer: {
        issues: 'Problemas y sugerencias',
        analytics: {
          visits: 'Visitas',
          today: 'Hoy',
          details: 'Estadísticas'
        }
      },
      tab: {
        home: 'Inicio',
        downloadZip: 'Opciones y descargas',
        manager: 'Gestor de recursos',
        help: 'Ayuda'
      },
      publish: {
        title: 'Publicar un recurso',
        subtitle: 'Elige cómo quieres empezar.',
        back: 'Volver al inicio',
        choice: {
          zipper: {
            title: 'Crea un ZIP con tus recursos educativos',
            note: 'Crea un ZIP desde archivos web, PDF, DOCX y otros tipos, o desde código HTML.',
            restrictHint: 'Se crearán tres tipos de visor según el contenido: 1) visor de páginas web (como recursos generados con IA o proyectos de eXeLearning), 2) visor de documentos (PDF y DOCX) y 3) visor de carpetas (para visualizar cualquier tipo de archivos).'
          },
          main: {
            title: 'Crear enlace',
            subtitle: 'Ya tengo el {type} en la nube',
            subtitleAny: 'Ya tengo un ZIP, ELPX o H5P en la nube',
            types: {
              any: 'ZIP, ELPX o H5P',
              zip: 'ZIP',
              elpx: 'ELPX',
              h5p: 'H5P'
            },
            note: 'Pega el enlace público y crea el enlace del visor.',
            secondaryHtml: 'Si usas .elpx de eXeLearning, también puedes abrirlo aquí <span class="info-dot" data-i18n-aria-label="publish.choice.main.elpxTooltip" aria-label="¿Qué es ELPX?">?<span class="info-dot__tooltip" role="tooltip" data-i18n-html="publish.choice.main.elpxTooltipHtml">Un archivo .elpx es un proyecto de eXeLearning que internamente utiliza el formato ZIP, lo que permite que el visor acceda a su contenido y lo muestre correctamente.</span></span>',
            elpxTooltip: '¿Qué es ELPX?',
            elpxTooltipHtml: 'Un archivo .elpx es un proyecto de eXeLearning que internamente utiliza el formato ZIP, lo que permite que el visor acceda a su contenido y lo muestre correctamente.'
          }
        },
        flow: {
          uploadTitle: 'Cargar recurso'
        },
        quick: {
          optionALabel: 'Opción A',
          optionAText: 'Si tu recurso está en tu ordenador (archivos y carpetas), lo has copiado de una IA (código HTML), o si necesitas aplicar fechas u otras restricciones, súbelo o pégalo aquí.',
          optionBLabel: 'Opción B',
          optionBText: 'Si ya tienes un ZIP, ELPX o H5P compartido en la nube (Drive, Dropbox, Nextcloud, etc.) con enlace público, pega la dirección directamente aquí.',
          intro: 'Elige una de estas dos opciones:<br><br><strong>Opción A:</strong> Si tu recurso educativo digital está en carpetas, archivos o código HTML, o si necesitas establecer fechas de accesibilidad u otras restricciones, cárgalo primero en la zona superior.<br><br><strong>Opción B:</strong> Si ya tienes un ZIP, ELPX o H5P con enlace público en tu servicio de almacenamiento en la nube (Drive, Dropbox, Nextcloud, etc.) y no necesitas modificarlo, pega esa dirección en «Opción B».',
          newResource: 'Reiniciar',
          newResourceTooltip: 'Reinicia la aplicación para añadir nuevos recursos o cambiar de opción.',
          files: {
            title: 'Cargar archivos o carpetas',
            dropTitle: 'Arrastra aquí la carpeta o los archivos',
            loadedTitle: 'Carga completada',
            loadedHint: 'Puedes volver a arrastrar o elegir otros archivos, o continuar abajo para configurar el recurso.',
            dropHint: 'Se abrirá directamente la opción para crear el ZIP.',
            folder: 'Elegir carpeta',
            files: 'Elegir archivos'
          },
          html: {
            title: '¿Tienes código HTML? Pégalo aquí',
            placeholder: '<!doctype html>...',
            apply: 'Usar este HTML'
          },
          fastDownload: 'Descarga rápida',
          fastDownloadDetail: 'omite las opciones y descarga el recurso con las siguientes restricciones:',
          fastDownloadTooltip: 'Genera el archivo y lo descarga directamente, sin pasar por la pantalla de opciones ni por la previsualización. Las restricciones de visibilidad configuradas en los ajustes se aplican automáticamente al archivo descargado.',
          changeRestrictions: 'Cambiar restricciones'
        }
      },
      tabs: {
        label: 'Secciones'
      },
      main: {
        subtitle: 'Si ya tienes tu recurso en formato ZIP, ELPX, H5P o SCORM 1.2 (en ZIP) en un servicio con <strong>enlace público</strong> (Drive, Dropbox, etc.), pega aquí el enlace para generar el enlace que usarás para compartir el recurso.',
        form: {
          title: 'Ya tengo un ZIP, ELPX o H5P en la nube con enlace',
          step: 'Pega el enlace público al ZIP (o .elpx/.h5p) en la Opción B y pulsa “Crear enlace”.',
          placeholder: 'Pega aquí el enlace público del ZIP o del .elpx/.h5p (también válido si incluye PDF o DOCX)',
          submit: 'Crear enlace'
        },
        output: {
          title: 'Enlace para compartir',
          step: 'Comparte este enlace para que otros puedan ver tu recurso.',
          placeholder: 'Aquí se mostrará el enlace',
          copy: 'Copiar enlace',
          qr: 'QR',
          copyTooltip: 'Copiar enlace',
          qrTooltip: 'QR (ideal para proyectar o imprimir)',
          embedTooltip: 'Insertar en una web (genera un iframe listo para pegar)',
          openTooltip: 'Abrir vista previa',
          embed: 'Insertar en una web',
          open: 'Abrir vista previa'
        }
      },
      service: {
        drive: 'Google Drive',
        dropbox: 'Dropbox',
        box: 'Box.com',
        nextcloud: 'Nextcloud',
        github: 'GitHub',
        other: 'Otros servicios',
        drivePlaceholder: 'https://drive.google.com/...',
        dropboxPlaceholder: 'https://www.dropbox.com/...',
        boxPlaceholder: 'https://app.box.com/s/...',
        nextcloudPlaceholder: 'https://tu-servidor/s/...',
        githubPlaceholder: 'https://github.com/usuario/repo/archive/refs/heads/main.zip',
        otherPlaceholder: 'https://servidor.com/archivo.zip'
      },
      manager: {
        title: 'Recursos guardados',
        subtitle: 'Gestiona el espacio que ocupan los materiales guardados en este navegador.',
        deleteAll: 'Eliminar todos los recursos',
        deleteAllConfirm: '¿Seguro que quieres eliminar todos los recursos guardados en este navegador? Esta acción no se puede deshacer.',
        savedAt: 'Guardado:',
        checkUpdates: 'Comprobar actualizaciones',
        checkUpdatesHelp: 'Verifica si los ZIP han cambiado en la nube.',
        checkUpdatesModalTitle: 'Comprobar actualizaciones',
        checkingUpdates: 'Comprobando actualizaciones...',
        checkUpdatesNote: 'Puedes cerrar esta ventana. La comprobación seguirá en segundo plano.',
        checkUpdatesProgress: '{done} de {total}',
        checkUpdatesDoneSummary: 'Actualizaciones: {changed} de {total}.',
        checkUpdatesNone: 'No hay recursos guardados.',
        checkUpdatesDone: 'Comprobación finalizada.',
        checkUpdatesUnavailable: 'No se puede comprobar sin el backend configurado.',
        stats: {
          used: 'Espacio usado',
          total: 'Espacio total',
          count: 'Recursos guardados'
        },
        sort: {
          label: 'Ordenar por',
          title: 'Título',
          date: 'Fecha',
          start: 'Inicio',
          size: 'Tamaño',
          dirAsc: 'Ascendente',
          dirDesc: 'Descendente',
          dirHelp: 'Cambiar sentido de orden.'
        },
        deleteAllHelp: 'Borra todos los recursos guardados en este navegador.',
        settings: {
          open: 'Ajustes de limpieza',
          modalTitle: 'Ajustes de limpieza',
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
          qr: 'QR',
          embed: 'Insertar en una web',
          edit: 'Editar el título',
          download: 'Descargar archivo',
          update: 'Actualizar',
          updating: 'Actualizando...',
          updated: 'Actualizado'
        },
        editPrompt: 'Título del recurso',
        empty: 'No hay recursos guardados en este navegador.',
        siteNoUrl: 'Sitio sin URL',
        noDate: 'sin fecha'
      },
      badges: {
        scheduled: 'Programado',
        opening: 'Inicio: {date}',
        closing: 'Fin: {date}',
        updateAvailable: 'Actualización disponible',
        updatedAt: 'Actualizado: {date}'
      },
      updates: {
        title: 'Nueva versión disponible',
        body: 'El recurso ha cambiado en la nube. Puedes actualizarlo ahora.',
        action: 'Actualizar',
        dismiss: 'Ahora no'
      },
      zipper: {
        title: 'Crear ZIP para el visor',
        summary: {
          title: 'Resumen del contenido cargado'
        },
        options: {
          title: 'Opciones',
          availabilityLabel: 'Configurar la disponibilidad del recurso',
          availabilityEdit: 'Cambiar configuración',
          availabilityInfo: 'Definir cuándo estará visible el recurso y qué acciones estarán disponibles en el gestor de recursos.'
        },
        panel: {
          configTitle: 'Configuración del recurso',
          stateTitle: 'Estado del recurso',
          actionsTitle: 'Acciones',
          startLabel: 'Inicio',
          endLabel: 'Fin',
          permissionsLabel: 'Permisos',
          startImmediate: 'Inmediato',
          noEnd: 'Sin fecha de fin',
          stateAvailable: 'Recurso disponible',
          stateAvailableHelp: 'El recurso puede abrirse en este momento.',
          stateAvailableUntil: 'Disponible hasta el {date}.',
          stateScheduled: 'Pendiente de apertura',
          stateScheduledHelp: 'Se abrirá el {date}.',
          stateClosed: 'Recurso no disponible',
          stateClosedHelp: 'La disponibilidad terminó el {date}.'
        },
        restrict: {
          summaryTitle: 'Acceso limitado por fechas'
        },
        accordion: {
          filesTitle: '¿Tu recurso tiene archivos o ya tienes un ZIP/ELPX/H5P? Cárgalo aquí'
        },
        subtitle: {
          item1: 'Para publicar tu recurso, guarda todos los archivos en una carpeta y comprímela en un archivo <strong>.zip</strong>. Puede contener páginas web y/o uno o varios <strong>PDF</strong>.',
          item2: 'Si el recurso está hecho con <strong>eXeLearning 3 o superior</strong>, puedes usar directamente el archivo <strong>.elpx</strong>.',
          item3: 'Si usas <strong>eXeLearning 2.x</strong>, exporta el proyecto a <strong>ZIP</strong> desde el programa y continúa con la opción “Ya tengo un ZIP”.'
        },
        exe: {
          tooltip: 'eXeLearning: en la versión 3+ puedes usar directamente un .elpx (ya es un ZIP). Versión 2.x: Archivo > Exportar > Sitio Web > Archivo comprimido ZIP.',
          tooltipHtml: '<strong>eXeLearning:</strong><br>• Versión 3+: puedes usar directamente el archivo <code>.elpx</code> (ya es un ZIP).<br>• Versión 2.x: Archivo &gt; Exportar &gt; Sitio Web &gt; Archivo comprimido ZIP.'
        },
        step1: {
          title: 'Añade tus archivos',
          note: 'Arrastra la carpeta o selecciona los archivos desde el botón.'
        },
        dropzone: {
          title: 'Arrastra aquí la carpeta o los archivos',
          hint: 'Se respetan las carpetas internas.',
          folder: 'Elegir carpeta',
          files: 'Elegir archivos'
        },
        status: {
          empty: 'No hay archivos seleccionados.',
          filesReady: 'Archivos encontrados: {count}.',
          ready: 'Listo para crear el ZIP.',
          readyHint: 'Prepara el ZIP para obtener tu archivo.',
          selectFirst: 'Selecciona archivos o una carpeta primero.',
          previewSelectFirst: 'Para previsualizar, selecciona archivos o pega HTML.',
          previewPreparing: 'Preparando previsualización local...',
          previewOpened: 'Previsualización abierta en una pestaña nueva.',
          previewFailed: 'No se pudo abrir la previsualización.',
          engineMissing: 'No se pudo cargar el motor ZIP.',
          creating: 'Creando ZIP...',
          downloaded: 'ZIP descargado. Sube el ZIP a tu nube, compártelo para que todos lo puedan ver y pega el enlace en la Opción B.',
          failed: 'No se pudo crear el ZIP. Revisa los archivos.',
          created: {
            html: 'ZIP creado: visor web HTML listo. Sube el ZIP a tu nube, compártelo para que todos lo puedan ver y pega el enlace en la Opción B.',
            documents: 'ZIP creado: visor de documentos listo. Sube el ZIP a tu nube, compártelo para que todos lo puedan ver y pega el enlace en la Opción B.',
            files: 'ZIP creado: visor de archivos listo. Sube el ZIP a tu nube, compártelo para que todos lo puedan ver y pega el enlace en la Opción B.'
          }
        },
        step2: {
          title: 'Descarga el ZIP',
          titleDynamic: 'Descarga el {type}',
          detail: 'Se descargará un archivo que puedes subir a Drive, Dropbox, Nextcloud, etc.',
          forceFolderLabel: 'Forzar visor de carpetas',
          forceFolderNote: 'El recurso se abirá en modo explorador de archivos con el contenido como archivos organizados en carpetas',
          forceFolderTooltip: 'Más información',
          forceFolderTooltipHtml: 'Si activas esta opción, el ZIP se abrirá en modo explorador de archivos: verás el contenido como archivos organizados en carpetas, incluso cuando incluya HTML o documentos.<br><br>Si no lo marcas, el programa detectará automáticamente el tipo de visor que utilizará.<br><br>Si no estás seguro, no lo marques.'
        },
        zipName: {
          label: 'Nombre del ZIP',
          placeholder: 'mi_recurso',
          default: 'mi_recurso'
        },
        resourceTitle: {
          label: 'Título del recurso',
          placeholder: 'Si lo dejas vacío, se usa el título del recurso',
          toggleLabel: 'Poner un título al recurso (título actual: {title})',
          currentEmpty: 'sin título'
        },
        build: 'Crear y descargar ZIP',
        buildDynamic: 'Crear y descargar {type}',
        html: {
          title: '¿No tienes archivos pero tienes el código HTML? Pégalo aquí',
          note: 'Pega el HTML completo y el visor creará un ZIP con un <code>index.html</code> listo para descargar.',
          placeholder: '<!doctype html>...',
          build: 'Crear ZIP desde HTML',
          status: {
            ready: 'Listo para crear el ZIP desde tu HTML.',
            reactDetected: 'Este contenido parece React/JSX (no HTML). Copia el prompt y pégalo en el chat de tu IA para convertirlo a HTML.',
            empty: '',
            creating: 'Creando ZIP...',
            downloaded: 'ZIP descargado. Sube el ZIP a tu nube, compártelo para que todos lo puedan ver y pega el enlace en la Opción B.',
            failed: 'No se pudo crear el ZIP. Revisa el HTML.'
          }
        },
        restrict: {
          title: '¿Tienes un ZIP, ELPX o H5P ya creado y quieres añadirle restricciones de visibilidad? Cárgalo aquí',
          note: 'Carga tu ZIP, ELPX o H5P y el visor añadirá las restricciones. Después tendrás que subirlo a Drive, Dropbox, etc.',
          lockedText: 'Para usar esta opción, configura la disponibilidad el recurso en “Opciones” (debajo de este bloque).',
          lockedAction: 'Activar limitación',
          lockedStatus: '',
          pick: 'Seleccionar ZIP',
          apply: 'Aplicar restricciones y descargar',
          status: {
            ready: '',
            working: 'Aplicando restricciones...',
            done: '{type} listo con restricciones. Súbelo a tu nube, compártelo para que todos lo puedan ver y pega el enlace en la Opción B.',
            saved: '{type} guardado. Súbelo a tu nube, compártelo para que todos lo puedan ver y pega el enlace en la Opción B.',
            failed: 'No se pudo modificar el ZIP. Revisa el archivo.'
          }
        },
        help: {
          inline: 'Si ya has creado un archivo ZIP, ELPX o H5P y lo has compartido en un servicio con enlace público, pasa a la Opción B.',
          previewTitle: 'Previsualiza el recurso antes de descargarlo (opcional)',
          nextStepText: 'El siguiente paso es subir tu archivo a la nube con enlace público. Después, en la Opción B, pega ese enlace y crea el enlace para compartir.',
          previewAction: 'Previsualizar',
          previewApplyRestrictions: 'Aplicar restricciones en la previsualización',
          previewApplyRestrictionsNote: 'Actívalo para comprobar cómo se abre y se cierra el recurso según las fechas configuradas.',
          previewHideResource: 'Previsualizar como recurso oculto',
          previewOpeningBlocked: 'Este recurso no está visible ahora mismo en la previsualización. Desactiva esta opción si quieres ver cómo quedará cuando esté abierto. Déjala activada si quieres ver cómo se ve cuando no está visible.',
          previewApplyRestrictionsInfo: 'Más información',
          previewApplyRestrictionsInfoHtml: 'Úsalo para comprobar cómo se abre y se cierra el recurso según las fechas configuradas.',
          goTab: 'Ir a la Opción B para pegar el enlace público'
        }
      },
      html: {
        title: 'Elige el HTML inicial',
        subtitle: 'No se encontró un index.html. Selecciona el archivo HTML que quieres abrir primero.',
        confirm: 'Usar este HTML'
      },
      embed: {
        title: 'Insertar en una web',
        subtitle: 'Copia y pega este código HTML en tu web para insertar tu recurso.',
        copy: 'Copiar código',
        fallback: {
          title: 'No se puede abrir incrustado',
          subtitle: 'Tu navegador o la página donde se inserta está bloqueando el almacenamiento necesario. Abre el recurso en una pestaña nueva.',
          open: 'Abrir en pestaña nueva'
        }
      },
      reactPrompt: {
        title: 'Esto parece React',
        subtitle: 'Este contenido parece React/JSX (no HTML). Copia este prompt y pégalo en el chat de tu IA para que lo convierta a HTML.',
        prompt: 'Convierte este código hecho en React/JSX en un único `index.html` que funcione al abrirlo directamente en el navegador (solo HTML, CSS y JavaScript). Devuélveme únicamente el contenido completo del archivo HTML.',
        copy: 'Copiar prompt'
      },
      about: {
        title: 'Ayuda',
        intro: 'Aquí tienes una explicación clara de las dos opciones de trabajo, del botón Reiniciar y de cómo compartir y actualizar tus recursos.',
        can: {
          title: 'Qué puedes subir',
          item1: 'ZIPs con páginas web estáticas y sus recursos (archivos HTML, imágenes, audio, vídeo, PDF, etc.).',
          item2: 'Materiales creados con eXeLearning u otras herramientas que exportan a web.',
          item3: 'Cualquier material creado con IA (documentos, infografías, etc.) que puedas descargar como página web (HTML).',
          item4: 'Carpetas con un HTML principal (normalmente <code>index.html</code>).',
          item5: 'ZIPs con uno o varios <strong>PDF</strong> (aunque no tengan archivos HTML).'
        },
        cant: {
          title: 'Qué no funciona o puede fallar',
          item1: 'Webs que necesitan servidor (formularios que guardan datos, bases de datos, PHP o similar).',
          item2: 'Enlaces externos que requieren iniciar sesión o permisos especiales.',
          item3: 'ZIPs vacíos, dañados o incompletos que no se pueden abrir correctamente.'
        },
        how: {
          title: 'Cómo funciona',
          step1: 'Prepara tu recurso como una carpeta con páginas web (HTML) y comprímelo en ZIP. Puedes hacerlo con la opción “Crear un ZIP”.',
          step2: 'Sube el ZIP a un servicio con enlace público (Google Drive, Dropbox, Nextcloud, GitHub…).',
          step3: 'Comparte el archivo para que cualquiera con el enlace pueda verlo.',
          step4: 'Copia la URL y pégala en el campo “Pega aquí el enlace público”.',
          step5: 'El enlace para compartir es permanente, así que puedes distribuirlo al alumnado.'
        },
        drive: {
          title: 'Importante sobre Google Drive',
          note: 'Google Drive limita la descarga directa de archivos grandes (aprox. 25 MB). Si tu ZIP supera ese tamaño, puede fallar. Dropbox, Nextcloud y otros servicios suelen permitir archivos más grandes sin ese límite.'
        },
        body: '<nav class="about-index" data-help-nav aria-label="Índice de ayuda"><p class="about-index__title">Índice</p><ul><li><a href="#help-que-es">Qué hace esta aplicación</a></li><li><a href="#help-opcion-a">Cuándo usar la opción A</a></li><li><a href="#help-opcion-b">Cuándo usar la opción B</a></li><li><a href="#help-visores">Qué visor se crea automáticamente</a></li><li><a href="#help-panel-final">Qué revisar antes de terminar</a></li><li><a href="#help-fechas">Fechas, previsualización y Reiniciar</a></li><li><a href="#help-gestor">Gestor de recursos</a></li><li><a href="#help-faq">Preguntas frecuentes</a></li></ul></nav><section aria-labelledby="help-que-es"><h3 class="about-section-title" id="help-que-es" tabindex="-1">Qué hace esta aplicación</h3><p>Esta aplicación te ayuda a preparar un recurso digital para compartirlo con tu alumnado mediante un enlace web. Tú eliges una de las dos formas de trabajo del panel principal. La aplicación prepara el material, detecta el visor más adecuado y te guía hasta el enlace final.</p><p>La idea clave es sencilla: si el material todavía está en tu ordenador, normalmente empezarás por la opción A; si ya lo tienes publicado en la nube con enlace público, normalmente usarás la opción B.</p></section><section aria-labelledby="help-opcion-a"><h3 class="about-section-title" id="help-opcion-a" tabindex="-1">Cuándo usar la opción A</h3><p>Usa la <strong>opción A</strong> cuando el recurso todavía está en tu ordenador, cuando quieres pegar un HTML generado por una IA o cuando necesitas configurar fechas de apertura, cierre u otras restricciones.</p><p>En esta opción puedes subir archivos y carpetas, pegar código HTML y completar la configuración final del recurso. Si en algún momento eliges esta vía, la aplicación se centra en ella para que la otra opción no distraiga.</p></section><section aria-labelledby="help-opcion-b"><h3 class="about-section-title" id="help-opcion-b" tabindex="-1">Cuándo usar la opción B</h3><p>Usa la <strong>opción B</strong> cuando ya tienes un ZIP, ELPX o H5P compartido en la nube con enlace público, por ejemplo en Drive, Dropbox o Nextcloud. Muchas veces ese archivo lo habrás preparado antes con la opción A, pero no siempre: también puede venir de eXeLearning, de otra herramienta o de un material que ya tenías hecho.</p><p>Por tanto, la opción B no sirve solo para continuar lo que has hecho aquí, sino también para trabajar con archivos que ya estaban preparados de antemano. El enlace que se genera en esta opción es el que compartirás con tu alumnado para que pueda abrir el recurso en su navegador. Si has configurado fechas de apertura o cierre, el recurso solo estará disponible dentro de ese intervalo.</p></section><section aria-labelledby="help-visores"><h3 class="about-section-title" id="help-visores" tabindex="-1">Qué visor se crea automáticamente</h3><p>La aplicación detecta el contenido y elige el visor más adecuado para cada caso.</p><ul><li><strong>Visor de carpetas</strong>: para navegar por carpetas y archivos de distinto tipo.</li><li><strong>Visor web</strong>: para recursos con páginas HTML y materiales tipo SCORM 1.2.</li><li><strong>Visor de documentos</strong>: para PDF, DOCX, TXT, MD y CSV.</li><li><strong>Visor H5P</strong>: para contenidos <code>.h5p</code>, tanto sueltos como dentro de ZIP, ELPX o H5P.</li></ul><p>Si quieres ver ejemplos reales, puedes abrir estos enlaces:</p><ul><li><a href="https://visor-webzip.github.io/?key=NO9-KQ_Vkmi6&view=full&entry=__vwz_folder_index.html" target="_blank" rel="noopener">Ejemplo de visor de carpetas</a></li><li><a href="https://visor-webzip.github.io/?key=crBAg-o4BARB&view=full&entry=tetris%2Findex.html" target="_blank" rel="noopener">Ejemplo de visor web</a></li><li><a href="https://visor-webzip.github.io/?key=z3loPNMOj1pW&view=full&entry=__vwz_docs_index.html" target="_blank" rel="noopener">Ejemplo de visor de documentos</a></li><li><a href="https://visor-webzip.github.io/?key=sFUKNJkh0Joq&view=full&entry=__vwz_h5p_index.html" target="_blank" rel="noopener">Ejemplo de visor H5P</a></li></ul></section><section aria-labelledby="help-panel-final"><h3 class="about-section-title" id="help-panel-final" tabindex="-1">Qué revisar antes de terminar</h3><p>Si trabajas con la opción A, al cargar el material aparecerá un panel de configuración. Ahí puedes poner un título más claro, forzar el visor de carpetas si te interesa y, si lo necesitas, activar la disponibilidad del recurso.</p><p>También puedes previsualizar el resultado antes de generar el ZIP definitivo. Esa previsualización sirve para comprobar que todo se ve como esperas antes de subir el archivo a tu servicio en la nube.</p></section><section aria-labelledby="help-fechas"><h3 class="about-section-title" id="help-fechas" tabindex="-1">Fechas, previsualización y Reiniciar</h3><p>La opción <strong>Configurar la disponibilidad del recurso</strong> permite indicar desde cuándo estará visible y, si lo deseas, hasta cuándo. Cuando esa opción está activada, el panel te muestra el estado del recurso y los permisos disponibles.</p><p>Si necesitas empezar de nuevo o cambiar de una opción a la otra, utiliza <strong>Reiniciar</strong>. Ese botón limpia la sesión actual y devuelve la pantalla al estado inicial.</p></section><section aria-labelledby="help-gestor"><h3 class="about-section-title" id="help-gestor" tabindex="-1">Gestor de recursos</h3><p>El <strong>Gestor de recursos</strong> guarda en este navegador los materiales que ya has abierto o generado. Desde ahí puedes volver a abrirlos, copiarlos, insertarlos en una web, descargarlos, eliminarlos o actualizar su contenido si el archivo de la nube ha cambiado.</p><p>Es útil para no tener que repetir el proceso cada vez desde cero, sobre todo cuando trabajas con los mismos materiales varias veces.</p></section><section aria-labelledby="help-faq"><h3 class="about-section-title" id="help-faq" tabindex="-1">Preguntas frecuentes</h3><ul><li><strong>¿Dónde se guardan los recursos?</strong> En el almacenamiento local del navegador de cada dispositivo.</li><li><strong>¿Se suben mis recursos a GitHub o al programa?</strong> No. Tú alojas el ZIP, el ELPX o el H5P en tu nube. El visor solo lo descarga y lo abre en el navegador.</li><li><strong>¿Se envían datos a terceros?</strong> No. Solo se realiza la descarga del archivo desde el enlace público que tú has indicado.</li><li><strong>¿Qué pasa si borro datos del navegador o cambio de dispositivo?</strong> Los recursos locales desaparecen en ese navegador o en ese dispositivo.</li><li><strong>¿Quién puede ver el recurso?</strong> Quien tenga el enlace del visor y, además, acceso al enlace público del archivo.</li><li><strong>¿Cómo actualizo un recurso?</strong> Sustituye el archivo en la nube sin borrar el anterior. Cuando alguien vuelva a abrir el enlace compartido, el gestor puede avisar de que hay una versión nueva.</li><li><strong>¿Cuándo conviene usar Reiniciar?</strong> Cuando quieres empezar otra publicación distinta o cambiar de la opción A a la opción B sin arrastrar lo que estabas haciendo.</li><li><strong>¿Necesito hacer algo más después de crear el ZIP?</strong> Sí. Después debes subirlo a tu servicio en la nube con enlace público y, a continuación, pegar esa dirección en la opción B para generar el enlace final del visor.</li></ul></section>'
      },
      error: {
        driveTooLarge: 'El archivo es demasiado grande y Google Drive limita las descargas. Intenta usando Nextcloud, Dropbox u otro servicio.',
        loadZip: 'No se pudo cargar el ZIP.',
        corruptZip: 'El archivo ZIP/ELPX/H5P está dañado o incompleto.',
        restricted: 'Este recurso ya no está disponible por las restricciones de fecha.',
        embedNotAllowed: 'La inserción en web no está permitida para este recurso.',
        popupBlocked: 'El navegador bloqueó la ventana de previsualización. Permite ventanas emergentes para este sitio e inténtalo de nuevo.',
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
        connecting: 'Conectando',
        downloadingZip: 'Descargando ZIP...',
        restrictedReady: 'El recurso está restringido por fecha. El enlace ya está listo.',
        unpacking: 'Descomprimiendo...',
        saving: 'Guardando en el navegador...',
        copySuccess: 'Enlace copiado.'
      },
      documentViewer: {
        documentsTitle: 'Documentos',
        hideList: 'Ocultar lista',
        showList: 'Mostrar lista',
        loadingPdf: 'Cargando PDF...',
        failedPdf: 'No se pudo mostrar este PDF.',
        downloadPdf: 'Descargar PDF',
        prevPage: 'Anterior',
        nextPage: 'Siguiente',
        zoomIn: 'Acercar',
        zoomOut: 'Alejar',
        fitWidth: 'Ajustar al ancho',
        pageLabel: 'Página {current} / {total}',
        missingPdfEngine: 'No se pudo cargar el visor PDF.',
        loadingDocx: 'Cargando DOCX...',
        failedDocx: 'No se pudo mostrar este DOCX.',
        downloadDocx: 'Descargar DOCX',
        missingDocxEngine: 'No se pudo cargar el visor DOCX.'
      },
      folderViewer: {
        title: 'Modo carpeta',
        subtitle: 'Explora carpetas y subcarpetas con iconos por tipo de archivo.',
        searchPlaceholder: 'Buscar archivos...',
        searchResults: 'Resultados de búsqueda',
        selectAll: 'Seleccionar visibles (lista actual)',
        clearSelection: 'Quitar selección',
        openSelected: 'Abrir selección',
        downloadAll: 'Descargar todo',
        downloadSelected: 'Descargar selección',
        downloadVisible: 'Descargar visibles (lista actual)',
        noResults: 'No hay archivos para mostrar.',
        selectedCount: '{count} seleccionados',
        openFile: 'Abrir',
        downloadFile: 'Descargar',
        preparingFolder: 'Preparando carpeta...',
        folderReady: 'Carpeta exportada.',
        folderFailed: 'No se pudo exportar la carpeta.',
        preparingZip: 'Preparando ZIP...',
        zipReady: 'ZIP preparado.',
        zipFailed: 'No se pudo crear el ZIP.',
        contextOpen: 'Abrir',
        contextDownload: 'Descargar',
        contextDownloadVisible: 'Descargar visibles (lista actual)',
        folder: 'Carpeta',
        filesWord: 'archivos'
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
        eta: 'Temps estimat de descàrrega: --',
        etaPrefix: 'Temps estimat de descàrrega: ',
        downloadedPrefix: 'Descarregat: ',
        note: 'Les següents vegades la visualització serà instantània.'
      },
      header: {
        eyebrow: 'Materials en ZIP',
        title: 'Visor Web-ZIP',
        help: 'Ajuda',
        settings: 'Ajustos',
        settingsHint: 'Configura la disponibilitat del recurs',
        language: 'Idioma',
        languageHint: 'Canviar idioma',
        theme: 'Tema',
        themeHint: 'Canviar tema',
        themeAuto: 'Automàtic',
        themeLight: 'Clar',
        themeDark: 'Fosc',
        subtitle: 'Crea, previsualitza i comparteix recursos educatius digitals. Comparteix l\'enllaç i el teu recurs podrà ser obert directament en qualsevol navegador.'
      },
      settings: {
        title: 'Ajustos de visibilitat',
        languageTitle: 'Idioma',
        restrictTitle: 'Accés per dates',
        restrictHint: 'Aquí pots definir quan estarà visible el recurs i quines accions estaran disponibles al gestor de recursos.',
        restrictToggle: 'Limitar l’accés',
        startLabel: 'Inici',
        endLabel: 'Fi',
        hasStart: 'Activar data d\'inici de visibilitat del recurs',
        neverExpires: 'Activar data de fi de visibilitat del recurs',
        enforceEndDuringView: 'Desactiva la visualització del recurs en arribar a la data de fi mentre està obert',
        warningMinutesLabel: 'Avís previ en minuts (0 per no avisar)',
        warningMessageLabel: "Missatge d'avís",
        warningMessagePlaceholder: "El temps d'accés s'esgota en {minutes} minuts.",
        warningMessageDefault: "El temps d'accés s'esgota en {minutes} minuts.",
        periodHint: 'El recurs només serà visible dins d’aquest interval.',
        periodHintLiveEndOn: 'La visualització es desactivarà en arribar a la data de fi.',
        periodHintLiveEndOff: 'La visualització no es desactivarà automàticament en arribar a la data de fi.',
        periodHintWarningOn: 'Hi haurà avís {minutes} minuts abans.',
        periodHintWarningOff: 'No hi haurà avís previ.',
        summaryLiveEndOn: 'Es desactiva en arribar al final',
        summaryLiveEndOff: 'Sense desactivació automàtica',
        summaryWarningOn: 'Avís: {minutes} min abans',
        summaryWarningOff: 'Sense avís previ',
        summaryNoRestrictions: 'Recurs sense restriccions de visibilitat.',
        summaryAllowedActions: 'Accions permeses al gestor de recursos: {actions}',
        summaryNoActions: 'cap',
        summaryBlockedActions: 'No es podrà: {actions}',
        summaryNoBlockedActions: 'cap',
        datesTitle: 'Període de visibilitat',
        actionsTitle: 'Accions disponibles mentre el recurs sigui visible',
        allowShare: 'Compartir',
        allowEmbed: 'Inserir en web',
        allowDownload: 'Descarregar'
      },
      restrictionModal: {
        title: 'Accés restringit',
        body: 'Aquest recurs no està disponible en aquest moment.',
        rangeStart: 'Disponible des de: {date}',
        rangeEnd: 'Fins a: {date}',
        rangeNoStart: 'Sense data d\'inici',
        rangeNoEnd: 'Sense data de fi',
        countdown: 'Disponible en: {time}'
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
      footer: {
        issues: 'Problemes i suggeriments',
        analytics: {
          visits: 'Visites',
          today: 'Avui',
          details: 'Estadístiques'
        }
      },
      tab: {
        home: 'Inici',
        downloadZip: 'Opcions i descàrregues',
        manager: 'Gestor de recursos',
        help: 'Ajuda'
      },
      publish: {
        title: 'Publicar un recurs',
        subtitle: 'Tria com vols començar.',
        back: "Tornar a l'inici",
        choice: {
          zipper: {
            title: 'Crear un ZIP (web, PDF o DOCX)',
            note: 'Crea un ZIP des de fitxers locals o des d’HTML. També pot incloure PDF i DOCX.',
            restrictHint: 'També pots aplicar una limitació d’accés per dates.'
          },
          main: {
            title: 'Crear enllaç',
            subtitle: 'Ja tinc el {type} al núvol',
            subtitleAny: 'Ja tinc un ZIP, ELPX o H5P al núvol amb enllaç',
            types: {
              any: 'ZIP, ELPX o H5P',
              zip: 'ZIP',
              elpx: 'ELPX',
              h5p: 'H5P'
            },
            note: 'Enganxa l’enllaç públic i crea l’enllaç del visor.',
            secondaryHtml: 'Si uses .elpx d’eXeLearning, també el pots obrir aquí <span class="info-dot" data-i18n-aria-label="publish.choice.main.elpxTooltip" aria-label="Què és ELPX?">?<span class="info-dot__tooltip" role="tooltip" data-i18n-html="publish.choice.main.elpxTooltipHtml">Un fitxer .elpx és un projecte d’eXeLearning que internament utilitza el format ZIP, cosa que permet al visor accedir al contingut i mostrar-lo correctament.</span></span>',
            elpxTooltip: 'Què és ELPX?',
            elpxTooltipHtml: 'Un fitxer .elpx és un projecte d’eXeLearning que internament utilitza el format ZIP, cosa que permet al visor accedir al contingut i mostrar-lo correctament.'
          }
        },
        flow: {
          uploadTitle: 'Carregar recurs'
        },
        quick: {
          optionALabel: 'Opció A',
          optionAText: 'Si el teu recurs és al teu ordinador (fitxers i carpetes), l’has copiat d’una IA (codi HTML), o si necessites aplicar dates o altres restriccions, puja’l o enganxa’l aquí.',
          optionBLabel: 'Opció B',
          optionBText: 'Si ja tens un ZIP, ELPX o H5P compartit al núvol (Drive, Dropbox, Nextcloud, etc.) amb enllaç públic, enganxa l’adreça directament aquí.',
          intro: 'Tria una d’aquestes dues opcions:<br><br><strong>Opció A:</strong> Si el teu recurs educatiu digital és en carpetes, fitxers o codi HTML, o si necessites establir dates d’accessibilitat o altres restriccions, carrega’l primer a la zona superior.<br><br><strong>Opció B:</strong> Si ja tens un ZIP, ELPX o H5P amb enllaç públic al teu servei d’emmagatzematge al núvol (Drive, Dropbox, Nextcloud, etc.) i no cal modificar-lo, enganxa aquesta adreça a «Opció B».',
          newResource: 'Reiniciar',
          newResourceTooltip: 'Reinicia l’aplicació per afegir recursos nous o canviar d’opció.',
          files: {
            title: 'Carregar fitxers o carpetes',
            dropTitle: 'Arrossega aquí la carpeta o els fitxers',
            loadedTitle: 'Càrrega completada',
            loadedHint: 'Pots tornar a arrossegar o triar altres fitxers, o continuar avall per configurar el recurs.',
            dropHint: "S\u2019obrirà directament l\u2019opció per crear el ZIP.",
            folder: 'Escollir carpeta',
            files: 'Escollir fitxers'
          },
          html: {
            title: "Tens codi HTML? Enganxa\u2019l aquí",
            placeholder: '<!doctype html>...',
            apply: 'Fer servir aquest HTML'
          },
          fastDownload: 'Descàrrega ràpida',
          fastDownloadDetail: 'omet les opcions i descarrega el recurs amb les restriccions següents:',
          fastDownloadTooltip: 'Genera el fitxer i el descarrega directament, sense passar per la pantalla d\'opcions ni per la previsualització. Les restriccions de visibilitat configurades als ajustos s\'apliquen automàticament al fitxer descarregat.',
          changeRestrictions: 'Canviar restriccions'
        }
      },
      tabs: {
        label: 'Seccions'
      },
      main: {
        subtitle: "Si ja tens el teu recurs en format ZIP, ELPX, H5P o SCORM 1.2 (en ZIP) en un servei amb <strong>enllaç públic</strong> (Drive, Dropbox, etc.), enganxa aquí l'enllaç per generar l’enllaç del visor.",
        form: {
          title: 'Ja tinc un ZIP, ELPX o H5P al núvol amb enllaç',
          step: 'Enganxa l’enllaç públic al ZIP (o .elpx/.h5p) a l’Opció B i prem “Crear enllaç”.',
          placeholder: "Enganxa aquí l'enllaç públic del ZIP o del .elpx/.h5p (també vàlid si inclou PDF o DOCX)",
          submit: 'Crear enllaç'
        },
        output: {
          title: 'Enllaç per compartir',
          step: 'Comparteix aquest enllaç perquè altres puguin veure el teu recurs.',
          placeholder: 'Enllaç per compartir',
          copy: 'Copiar enllaç',
          qr: 'QR',
          copyTooltip: 'Copiar enllaç',
          qrTooltip: 'QR (ideal per projectar o imprimir)',
          embedTooltip: 'Inserir en una web (genera un iframe llest per enganxar)',
          openTooltip: 'Obrir vista prèvia',
          embed: 'Inserir en una web',
          open: 'Obrir vista prèvia'
        }
      },
      service: {
        drive: 'Google Drive',
        dropbox: 'Dropbox',
        box: 'Box.com',
        nextcloud: 'Nextcloud',
        github: 'GitHub',
        other: 'Altres serveis',
        drivePlaceholder: 'https://drive.google.com/...',
        dropboxPlaceholder: 'https://www.dropbox.com/...',
        boxPlaceholder: 'https://app.box.com/s/...',
        nextcloudPlaceholder: 'https://el-teu-servidor/s/...',
        githubPlaceholder: 'https://github.com/usuari/repositori/archive/refs/heads/main.zip',
        otherPlaceholder: 'https://servidor.com/arxiu.zip'
      },
      manager: {
        title: 'Recursos desats',
        subtitle: 'Gestiona l’espai que ocupen els materials desats en aquest navegador.',
        deleteAll: 'Eliminar tots els recursos',
        deleteAllConfirm: 'Segur que vols eliminar tots els recursos desats en aquest navegador? Aquesta acció no es pot desfer.',
        deleteAllHelp: 'Esborra tots els recursos desats en aquest navegador.',
        savedAt: 'Desat:',
        checkUpdates: 'Comprovar actualitzacions',
        checkUpdatesHelp: 'Comprova si els ZIP han canviat al núvol.',
        checkUpdatesModalTitle: 'Comprovar actualitzacions',
        checkingUpdates: 'Comprovant actualitzacions...',
        checkUpdatesNote: 'Pots tancar aquesta finestra. La comprovació continuarà en segon pla.',
        checkUpdatesProgress: '{done} de {total}',
        checkUpdatesDoneSummary: 'Actualitzacions: {changed} de {total}.',
        checkUpdatesNone: 'No hi ha recursos desats.',
        checkUpdatesDone: 'Comprovació finalitzada.',
        checkUpdatesUnavailable: 'No es pot comprovar sense el backend configurat.',
        stats: {
          used: 'Espai usat',
          total: 'Espai total',
          count: 'Recursos desats'
        },
        sort: {
          label: 'Ordenar per',
          title: 'Títol',
          date: 'Data',
          start: 'Inici',
          size: 'Mida',
          dirAsc: 'Ascendent',
          dirDesc: 'Descendent',
          dirHelp: 'Canviar el sentit d’ordenació.'
        },
        settings: {
          open: 'Ajustos de neteja',
          modalTitle: 'Ajustos de neteja',
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
          qr: 'QR',
          embed: 'Inserir en una web',
          edit: 'Editar el títol',
          download: 'Descarregar fitxer',
          update: 'Actualitzar',
          updating: 'Actualitzant...',
          updated: 'Actualitzat'
        },
        editPrompt: 'Títol del recurs',
        empty: 'No hi ha recursos desats en aquest navegador.',
        siteNoUrl: 'Lloc sense URL',
        noDate: 'sense data'
      },
      badges: {
        scheduled: 'Programat',
        opening: 'Inici: {date}',
        closing: 'Fi: {date}',
        updateAvailable: 'Actualització disponible',
        updatedAt: 'Actualitzat: {date}'
      },
      updates: {
        title: 'Nova versió disponible',
        body: 'El recurs ha canviat al núvol. Pots actualitzar-lo ara.',
        action: 'Actualitzar',
        dismiss: 'Ara no'
      },
      zipper: {
        title: 'Crear ZIP per al visor',
        summary: {
          title: 'Resum del contingut carregat'
        },
        options: {
          title: 'Opcions',
          availabilityLabel: 'Configurar la disponibilitat del recurs',
          availabilityEdit: 'Canviar configuració',
          availabilityInfo: 'Definir quan el recurs serà visible i quines accions estaran disponibles al gestor de recursos.'
        },
        panel: {
          configTitle: 'Configuració del recurs',
          stateTitle: 'Estat del recurs',
          actionsTitle: 'Accions',
          startLabel: 'Inici',
          endLabel: 'Fi',
          permissionsLabel: 'Permisos',
          startImmediate: 'Immediat',
          noEnd: 'Sense data de fi',
          stateAvailable: 'Recurs disponible',
          stateAvailableHelp: 'El recurs es pot obrir en aquest moment.',
          stateAvailableUntil: 'Disponible fins al {date}.',
          stateScheduled: 'Pendent d’obertura',
          stateScheduledHelp: 'S’obrirà el {date}.',
          stateClosed: 'Recurs no disponible',
          stateClosedHelp: 'La disponibilitat va acabar el {date}.'
        },
        accordion: {
          filesTitle: 'El teu recurs té fitxers o ja tens un ZIP/ELPX/H5P? Carrega\'l aquí'
        },
        subtitle: {
          item1: 'Per publicar el teu recurs, guarda tots els fitxers en una carpeta i comprimeix-la en un fitxer <strong>.zip</strong>. Pot contenir pàgines web i/o un o diversos <strong>PDF</strong>.',
          item2: 'Si el teu recurs està fet amb <strong>eXeLearning 3 o superior</strong>, pots usar directament el fitxer <strong>.elpx</strong>.',
          item3: 'Si uses <strong>eXeLearning 2.x</strong>, exporta el projecte a <strong>ZIP</strong> des del programa i continua amb l’opció <strong>“Ja tinc un ZIP”</strong>.'
        },
        exe: {
          tooltip: "eXeLearning: a la versió 3+ pots usar directament un .elpx (ja és un ZIP). Versió 2.x: Fitxer > Exportar > Lloc web > Arxiu comprimit ZIP. Versió 3.x: Fitxer > Descarregar com > Lloc web.",
          tooltipHtml: "<strong>eXeLearning:</strong><br>• Versió 3+: pots usar directament el fitxer <code>.elpx</code> (ja és un ZIP).<br>• Versió 2.x: Fitxer &gt; Exportar &gt; Lloc web &gt; Arxiu comprimit ZIP.<br>• Versió 3.x: Fitxer &gt; Descarregar com &gt; Lloc web."
        },
        step1: {
          title: 'Afegeix els teus fitxers',
          note: 'Arrossega la carpeta o selecciona els fitxers des del botó.'
        },
        dropzone: {
          title: 'Arrossega aquí la carpeta o els fitxers',
          hint: 'Es respecten les carpetes internes.',
          folder: 'Escollir carpeta',
          files: 'Escollir fitxers'
        },
        status: {
          empty: 'No hi ha fitxers seleccionats.',
          filesReady: 'Fitxers trobats: {count}.',
          ready: 'A punt per crear el ZIP.',
          readyHint: 'Prepara el ZIP per obtenir el teu fitxer.',
          selectFirst: 'Selecciona fitxers o una carpeta primer.',
          previewSelectFirst: 'Per previsualitzar, selecciona fitxers o enganxa HTML.',
          previewPreparing: 'Preparant previsualització local...',
          previewOpened: 'Previsualització oberta en una pestanya nova.',
          previewFailed: 'No s’ha pogut obrir la previsualització.',
          engineMissing: 'No s’ha pogut carregar el motor ZIP.',
          creating: 'Creant ZIP...',
          downloaded: 'ZIP descarregat. Puja el ZIP al teu núvol, comparteix-lo perquè tothom el pugui veure i enganxa l’enllaç a l’Opció B.',
          failed: 'No s’ha pogut crear el ZIP. Revisa els fitxers.',
          created: {
            html: 'ZIP creat: visor web HTML llest. Puja el ZIP al teu núvol, comparteix-lo perquè tothom el pugui veure i enganxa l’enllaç a l’Opció B.',
            documents: 'ZIP creat: visor de documents llest. Puja el ZIP al teu núvol, comparteix-lo perquè tothom el pugui veure i enganxa l’enllaç a l’Opció B.',
            files: 'ZIP creat: visor de fitxers llest. Puja el ZIP al teu núvol, comparteix-lo perquè tothom el pugui veure i enganxa l’enllaç a l’Opció B.'
          }
        },
        step2: {
          title: 'Descarrega el ZIP',
          titleDynamic: 'Descarrega el {type}',
          detail: 'Es descarregarà un fitxer que pots pujar a Drive, Dropbox, Nextcloud, etc.',
          forceFolderLabel: 'Forçar visor de carpetes',
          forceFolderNote: 'Si actives aquesta opció, el ZIP s’obrirà en mode explorador de fitxers: veuràs el contingut com a fitxers organitzats en carpetes, fins i tot si inclou HTML o documents.',
          forceFolderTooltip: 'Més informació',
          forceFolderTooltipHtml: 'Si actives aquesta opció, el ZIP s’obrirà en mode explorador de fitxers: veuràs el contingut com a fitxers organitzats en carpetes, fins i tot si inclou HTML o documents.<br><br>Si no ho marques, el programa detectarà automàticament quin tipus de visor ha d’utilitzar.<br><br>Si no n’estàs segur, no ho marquis.'
        },
        zipName: {
          label: 'Nom del ZIP',
          placeholder: 'el_meu_recurs',
          default: 'el_meu_recurs'
        },
        resourceTitle: {
          label: 'Títol del recurs',
          placeholder: 'Si el deixes buit, s’utilitzarà el títol del recurs',
          toggleLabel: 'Posar un títol al recurs (títol actual: {title})',
          currentEmpty: 'sense títol'
        },
        build: 'Crear i descarregar ZIP',
        buildDynamic: 'Crear i descarregar {type}',
        html: {
          title: 'No tens fitxers però tens el codi HTML? Enganxa’l aquí',
          note: 'Enganxa l’HTML complet i el visor crearà un ZIP amb un <code>index.html</code> llest per descarregar.',
          placeholder: '<!doctype html>...',
          build: 'Crear ZIP des d’HTML',
          status: {
            ready: 'A punt per crear el ZIP des del teu HTML.',
            reactDetected: 'Aquest contingut sembla React/JSX (no HTML). Copia el prompt i enganxa’l al xat de la teva IA per convertir-lo a HTML.',
            empty: '',
            creating: 'Creant ZIP...',
            downloaded: 'ZIP descarregat. Puja el ZIP al teu núvol, comparteix-lo perquè tothom el pugui veure i enganxa l’enllaç a l’Opció B.',
            failed: 'No s’ha pogut crear el ZIP. Revisa l’HTML.'
          }
        },
        restrict: {
          title: 'Tens un ZIP, ELPX o H5P ja creat i vols afegir-hi restriccions de visibilitat? Carrega’l aquí',
          note: 'Carrega el teu ZIP, ELPX o H5P i el visor afegirà les restriccions. Després l’hauràs de pujar a Drive, Dropbox, etc.',
          lockedText: 'Per fer servir aquesta opció, primer activa la limitació de visibilitat del recurs.',
          lockedAction: 'Activar limitació',
          lockedStatus: '',
          pick: 'Seleccionar ZIP',
          apply: 'Aplicar restriccions i descarregar',
          status: {
            ready: '',
            working: 'Aplicant restriccions...',
            done: '{type} llest amb restriccions. Puja’l al teu núvol, comparteix-lo perquè tothom el pugui veure i enganxa l’enllaç a l’Opció B.',
            saved: '{type} desat. Puja’l al teu núvol, comparteix-lo perquè tothom el pugui veure i enganxa l’enllaç a l’Opció B.',
            failed: 'No s’ha pogut modificar el ZIP. Revisa el fitxer.'
          },
          summaryTitle: 'Accés limitat per dates'
        },
        help: {
          inline: 'Si ja has creat un fitxer ZIP, ELPX o H5P i l’has compartit en un servei amb enllaç públic, ves a l’Opció B.',
          previewTitle: 'Previsualitza el recurs abans de descarregar-lo (opcional)',
          nextStepText: 'El següent pas és pujar el fitxer al núvol amb enllaç públic. Després, a l’Opció B, enganxa aquest enllaç i crea l’enllaç per compartir.',
          previewAction: 'Previsualitzar',
          previewApplyRestrictions: 'Aplicar restriccions en la previsualització',
          previewApplyRestrictionsNote: 'Activa-ho per comprovar com s’obre i es tanca el recurs segons les dates configurades.',
          previewHideResource: 'Previsualitzar com a recurs ocult',
          previewOpeningBlocked: 'Aquest recurs no és visible ara mateix a la previsualització. Desactiva aquesta opció si vols veure com quedarà quan estigui obert. Deixa-la activada si vols veure com es veu quan no és visible.',
          previewApplyRestrictionsInfo: 'Més informació',
          previewApplyRestrictionsInfoHtml: 'Fes-lo servir per comprovar com s’obre i es tanca el recurs segons les dates configurades.',
          goTab: 'Anar a l’Opció B per enganxar l’enllaç públic'
        }
      },
      html: {
        title: 'Tria l’HTML inicial',
        subtitle: 'No s’ha trobat un index.html. Selecciona el fitxer HTML que vols obrir primer.',
        confirm: 'Fes servir aquest HTML'
      },
      embed: {
        title: 'Inserir en una web',
        subtitle: 'Copia i enganxa aquest codi HTML a la teva web per inserir el recurs.',
        copy: 'Copiar codi',
        fallback: {
          title: 'No es pot obrir incrustat',
          subtitle: 'El teu navegador o la pàgina on s’insereix està bloquejant l’emmagatzematge necessari. Obre el recurs en una pestanya nova.',
          open: 'Obrir en una pestanya nova'
        }
      },
      reactPrompt: {
        title: 'Això sembla React',
        subtitle: 'Aquest contingut sembla React/JSX (no HTML). Copia aquest prompt i enganxa’l al xat de la teva IA perquè el converteixi a HTML.',
        prompt: 'Converteix aquest codi fet en React/JSX en un únic `index.html` que funcioni en obrir-lo directament al navegador (només HTML, CSS i JavaScript). Retorna només el contingut complet del fitxer HTML.',
        copy: 'Copiar prompt'
      },
      about: {
        title: 'Ajuda',
        intro: 'Guia ràpida per publicar, compartir i gestionar recursos al visor.',
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
          item3: 'ZIPs buits, danyats o incomplets que no es poden obrir correctament.'
        },
        how: {
          title: 'Com funciona',
          step1: 'Prepara el teu recurs com una carpeta amb pàgines web (HTML) i comprimeix-lo en ZIP. Ho pots fer amb l’opció “Crear un ZIP”.',
          step2: 'Puja el ZIP a un servei amb enllaç públic (Google Drive, Dropbox, Nextcloud, GitHub…).',
          step3: 'Comparteix l’arxiu perquè qualsevol amb l’enllaç el pugui veure.',
          step4: 'Copia l’URL i enganxa-la al camp “Enganxa aquí l’enllaç públic”.',
          step5: 'L’enllaç per compartir és permanent, així que el pots distribuir a l’alumnat.'
        },
        drive: {
          title: 'Important sobre Google Drive',
          note: 'Google Drive limita la descàrrega directa d’arxius grans (aprox. 25 MB). Si el teu ZIP supera aquesta mida, pot fallar. Dropbox, Nextcloud i altres serveis solen permetre fitxers més grans sense aquest límit.'
        },
        body: '<nav class="about-index" data-help-nav aria-label="Índex d’ajuda"><p class="about-index__title">Índex</p><ul><li><a href="#help-objetiu">Objectiu</a></li><li><a href="#help-ruta">Ruta ràpida per compartir</a></li><li><a href="#help-pestanyes">Pestanyes de treball</a></li><li><a href="#help-visor">Quin visor es crea automàticament</a></li><li><a href="#help-opcions">Opcions abans de descarregar</a></li><li><a href="#help-disponibilitat">Disponibilitat i accions</a></li><li><a href="#help-gestor">Gestor de recursos</a></li><li><a href="#help-faq">FAQ: privadesa i dades</a></li></ul></nav><section aria-labelledby="help-objetiu"><h3 class="about-section-title" id="help-objetiu" tabindex="-1">Objectiu</h3><p>Compartir recursos amb l’alumnat de manera senzilla: prepares el material, generes l’enllaç i el distribueixes.</p></section><section aria-labelledby="help-ruta"><h3 class="about-section-title" id="help-ruta" tabindex="-1">Ruta ràpida per compartir</h3><ol class="about-steps"><li>A <strong>Opció A</strong>, carrega el teu recurs (carpetes, fitxers o ZIP/ELPX/H5P) o enganxa el codi HTML.</li><li>Revisa el resum i, si cal, ajusta <strong>Opcions</strong> (títol, disponibilitat i forçar visor de carpetes).</li><li>A <strong>Opcions</strong>, crea el fitxer final. Després puja’l al núvol amb enllaç públic i, a <strong>Opció B</strong>, enganxa aquesta adreça.</li></ol><p>Si ja tens el ZIP, ELPX o H5P al núvol amb enllaç públic, ves a <strong>Opció B</strong> i enganxa l’adreça.</p></section><section aria-labelledby="help-pestanyes"><h3 class="about-section-title" id="help-pestanyes" tabindex="-1">Pestanyes de treball</h3><ul><li><strong>Inici</strong>: conté les dues parts del flux: <strong>Opció A</strong> i <strong>Opció B</strong>.</li><li><strong>Gestor de recursos</strong>: obres, copies, insereixes, actualitzes i elimines recursos desats al navegador.</li></ul></section><section aria-labelledby="help-visor"><h3 class="about-section-title" id="help-visor" tabindex="-1">Quin visor es crea automàticament</h3><p>El programa detecta el contingut i tria el visor més adequat:</p><ul><li><strong>Visor web</strong>: per a recursos amb pàgines HTML i paquets SCORM 1.2.</li><li><strong>Visor H5P</strong>: per a continguts <code>.h5p</code>, tant sols com dins de ZIP/ELPX/H5P.</li><li><strong>Visor de documents</strong>: per a PDF, DOCX, TXT, MD i CSV (inclou renderització de fórmules a Markdown).</li><li><strong>Visor de carpetes</strong>: per navegar per carpetes i fitxers de qualsevol tipus.</li></ul><p>Pots veure el programa en funcionament amb aquests exemples:</p><ul><li><a href="https://visor-webzip.github.io/?key=NO9-KQ_Vkmi6&view=full&entry=__vwz_folder_index.html" target="_blank" rel="noopener">Visor de carpetes</a></li><li><a href="https://visor-webzip.github.io/?key=crBAg-o4BARB&view=full&entry=tetris%2Findex.html" target="_blank" rel="noopener">Visor web</a></li><li><a href="https://visor-webzip.github.io/?key=z3loPNMOj1pW&view=full&entry=__vwz_docs_index.html" target="_blank" rel="noopener">Visor de documents</a></li><li><a href="https://visor-webzip.github.io/?key=sFUKNJkh0Joq&view=full&entry=__vwz_h5p_index.html" target="_blank" rel="noopener">Visor H5P</a></li></ul><p>Et recomanem obrir també el <strong>Gestor de recursos</strong> per revisar quines accions pots fer amb cada exemple (compartir, inserir en web, descarregar o actualitzar).</p></section><section aria-labelledby="help-opcions"><h3 class="about-section-title" id="help-opcions" tabindex="-1">Opcions abans de descarregar</h3><ul><li><strong>Posar un títol al recurs</strong>: opcional, per personalitzar com es mostrarà.</li><li><strong>Configurar la disponibilitat del recurs</strong>: opcional, per decidir quan es pot obrir i quines accions estaran permeses.</li><li><strong>Forçar visor de carpetes</strong>: útil si vols que sempre es mostri com a explorador de fitxers.</li><li><strong>Previsualitzar</strong>: obre una vista temporal local per comprovar el resultat abans de pujar-lo.</li></ul></section><section aria-labelledby="help-disponibilitat"><h3 class="about-section-title" id="help-disponibilitat" tabindex="-1">Disponibilitat i accions</h3><p>A <strong>Opcions</strong> pots activar la disponibilitat per dates i definir inici, fi opcional i accions del gestor (compartir, inserir en web, descarregar) mentre el recurs sigui accessible.</p><p>Si puges un ZIP, ELPX o H5P ja creat, també pots afegir o canviar aquestes restriccions i previsualitzar el resultat abans de generar l’enllaç final.</p></section><section aria-labelledby="help-gestor"><h3 class="about-section-title" id="help-gestor" tabindex="-1">Gestor de recursos</h3><p>El gestor guarda els recursos en aquest navegador. Des d’aquí els pots obrir, compartir, inserir en web, actualitzar si canvia el fitxer al núvol i eliminar quan ja no et calguin.</p></section><section aria-labelledby="help-faq"><h3 class="about-section-title" id="help-faq" tabindex="-1">FAQ: privadesa i dades</h3><ul><li><strong>On es guarden els recursos?</strong> A l’emmagatzematge local del navegador de cada dispositiu.</li><li><strong>Es pugen els meus recursos a GitHub o al programa?</strong> No. Tu allotges el ZIP/ELPX/H5P al núvol. El visor només el descarrega i l’obre al navegador.</li><li><strong>S’envien dades a tercers?</strong> No. Només es fa la descàrrega del ZIP/ELPX/H5P des de l’enllaç públic que has indicat.</li><li><strong>Què passa si esborro dades del navegador o canvio de dispositiu?</strong> Els recursos locals desapareixen en aquell navegador/dispositiu.</li><li><strong>Qui pot veure el recurs?</strong> Qui tingui l’enllaç del visor i, a més, accés a l’enllaç públic del fitxer.</li><li><strong>Com actualitzo un recurs?</strong> Substitueix el fitxer al núvol sense esborrar l’anterior; qualsevol usuari que obri l’enllaç compartit rebrà una notificació per actualitzar el recurs.</li></ul></section>'
      },
      error: {
        driveTooLarge: 'El fitxer és massa gran i Google Drive limita les descàrregues. Prova amb Nextcloud, Dropbox o un altre servei.',
        loadZip: 'No s’ha pogut carregar el ZIP.',
        corruptZip: 'El fitxer ZIP/ELPX/H5P està malmès o incomplet.',
        restricted: 'Aquest recurs ja no està disponible per les restriccions de data.',
        embedNotAllowed: 'La inserció en web no està permesa per a aquest recurs.',
        popupBlocked: 'El navegador ha bloquejat la finestra de previsualització. Permet finestres emergents per a aquest lloc i torna-ho a provar.',
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
        connecting: 'Connectant',
        downloadingZip: 'Descarregant ZIP...',
        restrictedReady: 'El recurs està restringit per data. L’enllaç ja està llest.',
        unpacking: 'Descomprimint...',
        saving: 'Desant al navegador...',
        copySuccess: 'Enllaç copiat.'
      },
      documentViewer: {
        documentsTitle: 'Documents',
        hideList: 'Amagar llista',
        showList: 'Mostrar llista',
        loadingPdf: 'Carregant PDF...',
        failedPdf: 'No s\'ha pogut mostrar aquest PDF.',
        downloadPdf: 'Descarregar PDF',
        prevPage: 'Anterior',
        nextPage: 'Següent',
        zoomIn: 'Ampliar',
        zoomOut: 'Reduir',
        fitWidth: 'Ajustar a l\'amplada',
        pageLabel: 'Pàgina {current} / {total}',
        missingPdfEngine: 'No s\'ha pogut carregar el visor PDF.',
        loadingDocx: 'Carregant DOCX...',
        failedDocx: 'No s\'ha pogut mostrar aquest DOCX.',
        downloadDocx: 'Descarregar DOCX',
        missingDocxEngine: 'No s\'ha pogut carregar el visor DOCX.'
      },
      folderViewer: {
        title: 'Mode carpeta',
        subtitle: 'Explora carpetes i subcarpetes amb icones per tipus de fitxer.',
        searchPlaceholder: 'Cerca fitxers...',
        searchResults: 'Resultats de la cerca',
        selectAll: 'Seleccionar visibles',
        clearSelection: 'Netejar selecció',
        openSelected: 'Obrir seleccionats',
        downloadAll: 'Descarregar-ho tot',
        downloadSelected: 'Descarregar selecció',
        downloadVisible: 'Descarregar llista visible',
        noResults: 'No hi ha fitxers per mostrar.',
        selectedCount: '{count} seleccionats',
        openFile: 'Obrir',
        downloadFile: 'Descarregar',
        contextOpen: 'Obrir',
        contextDownload: 'Descarregar',
        contextDownloadVisible: 'Descarregar llista visible',
        folder: 'Carpeta',
        filesWord: 'fitxers'
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
        eta: 'Tempo estimado de descarga: --',
        etaPrefix: 'Tempo estimado de descarga: ',
        downloadedPrefix: 'Descargado: ',
        note: 'As seguintes veces a visualización será instantánea.'
      },
      header: {
        eyebrow: 'Materiais en ZIP',
        title: 'Visor Web-ZIP',
        help: 'Axuda',
        settings: 'Axustes',
        settingsHint: 'Configura a dispoñibilidade do recurso',
        language: 'Idioma',
        languageHint: 'Cambiar idioma',
        theme: 'Tema',
        themeHint: 'Cambiar tema',
        themeAuto: 'Automático',
        themeLight: 'Claro',
        themeDark: 'Escuro',
        subtitle: 'Crea, previsualiza e comparte recursos educativos dixitais. Comparte o enlace e o teu recurso poderá ser aberto directamente en calquera navegador.'
      },
      settings: {
        title: 'Axustes de visibilidade',
        languageTitle: 'Idioma',
        restrictTitle: 'Acceso por datas',
        restrictHint: 'Aquí podes definir cando estará visible o recurso e que accións estarán dispoñibles no xestor de recursos.',
        restrictToggle: 'Limitar o acceso',
        startLabel: 'Inicio',
        endLabel: 'Fin',
        hasStart: 'Activar data de inicio de visibilidade do recurso',
        neverExpires: 'Activar data de fin de visibilidade do recurso',
        enforceEndDuringView: 'Desactivar a visualización do recurso ao chegar á data de fin mentres está aberto',
        warningMinutesLabel: 'Aviso previo en minutos (0 para non avisar)',
        warningMessageLabel: 'Mensaxe de aviso',
        warningMessagePlaceholder: 'O tempo de acceso esgótase en {minutes} minutos.',
        warningMessageDefault: 'O tempo de acceso esgótase en {minutes} minutos.',
        periodHint: 'O recurso só será visible dentro deste intervalo.',
        periodHintLiveEndOn: 'A visualización desactivarase ao chegar á data de fin.',
        periodHintLiveEndOff: 'A visualización non se desactivará automaticamente ao chegar á data de fin.',
        periodHintWarningOn: 'Haberá aviso {minutes} minutos antes.',
        periodHintWarningOff: 'Non haberá aviso previo.',
        summaryLiveEndOn: 'Desactívase ao chegar ao fin',
        summaryLiveEndOff: 'Sen desactivación automática',
        summaryWarningOn: 'Aviso: {minutes} min antes',
        summaryWarningOff: 'Sen aviso previo',
        summaryNoRestrictions: 'Recurso sen restricións de visibilidade.',
        summaryAllowedActions: 'Accións permitidas no xestor de recursos: {actions}',
        summaryNoActions: 'ningunha',
        summaryBlockedActions: 'Non se poderá: {actions}',
        summaryNoBlockedActions: 'ningunha',
        datesTitle: 'Período de visibilidade',
        actionsTitle: 'Accións dispoñibles mentres o recurso sexa visible',
        allowShare: 'Compartir',
        allowEmbed: 'Inserir nunha web',
        allowDownload: 'Descargar'
      },
      restrictionModal: {
        title: 'Acceso restrinxido',
        body: 'Este recurso non está dispoñible neste momento.',
        rangeStart: 'Disponible desde: {date}',
        rangeEnd: 'Ata: {date}',
        rangeNoStart: 'Sen data de inicio',
        rangeNoEnd: 'Sen data de fin',
        countdown: 'Disponible en: {time}'
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
      footer: {
        issues: 'Problemas e suxestións',
        analytics: {
          visits: 'Visitas',
          today: 'Hoxe',
          details: 'Estatísticas'
        }
      },
      tab: {
        home: 'Inicio',
        downloadZip: 'Opcións e descargas',
        manager: 'Xestor de recursos',
        help: 'Axuda'
      },
      publish: {
        title: 'Publicar un recurso',
        subtitle: 'Escolle como queres comezar.',
        back: 'Volver ao inicio',
        choice: {
          zipper: {
            title: 'Crear un ZIP (web, PDF ou DOCX)',
            note: 'Crea un ZIP desde ficheiros locais ou desde HTML. Tamén pode incluír PDF e DOCX.',
            restrictHint: 'Tamén podes aplicar limitación de acceso por datas.'
          },
          main: {
            title: 'Crear ligazón',
            subtitle: 'Xa teño o {type} na nube',
            subtitleAny: 'Xa teño un ZIP, ELPX ou H5P na nube con ligazón',
            types: {
              any: 'ZIP, ELPX ou H5P',
              zip: 'ZIP',
              elpx: 'ELPX',
              h5p: 'H5P'
            },
            note: 'Pega a ligazón pública e crea a ligazón do visor.',
            secondaryHtml: 'Se usas .elpx de eXeLearning, tamén o podes abrir aquí <span class="info-dot" data-i18n-aria-label="publish.choice.main.elpxTooltip" aria-label="Que é ELPX?">?<span class="info-dot__tooltip" role="tooltip" data-i18n-html="publish.choice.main.elpxTooltipHtml">Un ficheiro .elpx é un proxecto de eXeLearning que internamente utiliza o formato ZIP, o que permite que o visor acceda ao seu contido e o mostre correctamente.</span></span>',
            elpxTooltip: 'Que é ELPX?',
            elpxTooltipHtml: 'Un ficheiro .elpx é un proxecto de eXeLearning que internamente utiliza o formato ZIP, o que permite que o visor acceda ao seu contido e o mostre correctamente.'
          }
        },
        flow: {
          uploadTitle: 'Cargar recurso'
        },
        quick: {
          optionALabel: 'Opción A',
          optionAText: 'Se o teu recurso está no teu ordenador (ficheiros e cartafoles), copiáchelo dunha IA (código HTML), ou se precisas aplicar datas ou outras restricións, súbeo ou pégao aquí.',
          optionBLabel: 'Opción B',
          optionBText: 'Se xa tes un ZIP, ELPX ou H5P compartido na nube (Drive, Dropbox, Nextcloud, etc.) cunha ligazón pública, pega o enderezo directamente aquí.',
          intro: 'Escolle unha destas dúas opcións:<br><br><strong>Opción A:</strong> Se o teu recurso educativo dixital está en cartafoles, ficheiros ou código HTML, ou se necesitas establecer datas de accesibilidade ou outras restricións, cárgao primeiro na zona superior.<br><br><strong>Opción B:</strong> Se xa tes un ZIP, ELPX ou H5P con ligazón pública no teu servizo de almacenamento na nube (Drive, Dropbox, Nextcloud, etc.) e non precisas modificalo, pega ese enderezo en «Opción B».',
          newResource: 'Reiniciar',
          newResourceTooltip: 'Reinicia a aplicación para engadir novos recursos ou cambiar de opción.',
          files: {
            title: 'Cargar ficheiros ou cartafoles',
            dropTitle: 'Arrastra aquí o cartafol ou os ficheiros',
            loadedTitle: 'Carga completada',
            loadedHint: 'Podes volver arrastrar ou escoller outros ficheiros, ou continuar abaixo para configurar o recurso.',
            dropHint: 'Abrirase directamente a opción para crear o ZIP.',
            folder: 'Escoller cartafol',
            files: 'Escoller ficheiros'
          },
          html: {
            title: 'Tes código HTML? Pégao aquí',
            placeholder: '<!doctype html>...',
            apply: 'Usar este HTML'
          },
          fastDownload: 'Descarga rápida',
          fastDownloadDetail: 'omite as opcións e descarga o recurso coas seguintes restricións:',
          fastDownloadTooltip: 'Xera o arquivo e descárgao directamente, sen pasar pola pantalla de opcións nin pola previsualización. As restricións de visibilidade configuradas nos axustes aplícanse automaticamente ao arquivo descargado.',
          changeRestrictions: 'Cambiar restricións'
        }
      },
      tabs: {
        label: 'Seccións'
      },
      main: {
        subtitle: 'Se xa tes o teu recurso en formato ZIP, ELPX, H5P ou SCORM 1.2 (en ZIP) nun servizo con <strong>ligazón pública</strong> (Drive, Dropbox, etc.), pega aquí a ligazón para xerar a ligazón do visor.',
        form: {
          title: 'Xa teño un ZIP, ELPX ou H5P na nube con ligazón',
          step: 'Pega a ligazón pública ao ZIP (ou .elpx/.h5p) na Opción B e preme “Crear ligazón”.',
          placeholder: 'Pega aquí a ligazón pública do ZIP ou do .elpx/.h5p (tamén válida se inclúe PDF ou DOCX)',
          submit: 'Crear ligazón'
        },
        output: {
          title: 'Ligazón para compartir',
          step: 'Comparte esta ligazón para que outras persoas poidan ver o teu recurso.',
          placeholder: 'Ligazón para compartir',
          copy: 'Copiar ligazón',
          qr: 'QR',
          copyTooltip: 'Copiar ligazón',
          qrTooltip: 'QR (ideal para proxectar ou imprimir)',
          embedTooltip: 'Inserir nunha web (xera un iframe listo para pegar)',
          openTooltip: 'Abrir vista previa',
          embed: 'Inserir nunha web',
          open: 'Abrir vista previa'
        }
      },
      service: {
        drive: 'Google Drive',
        dropbox: 'Dropbox',
        box: 'Box.com',
        nextcloud: 'Nextcloud',
        github: 'GitHub',
        other: 'Outros servizos',
        drivePlaceholder: 'https://drive.google.com/...',
        dropboxPlaceholder: 'https://www.dropbox.com/...',
        boxPlaceholder: 'https://app.box.com/s/...',
        nextcloudPlaceholder: 'https://o-teu-servidor/s/...',
        githubPlaceholder: 'https://github.com/usuario/repositorio/archive/refs/heads/main.zip',
        otherPlaceholder: 'https://servidor.com/ficheiro.zip'
      },
      manager: {
        title: 'Recursos gardados',
        subtitle: 'Xestiona o espazo que ocupan os materiais gardados neste navegador.',
        deleteAll: 'Eliminar todos os recursos',
        deleteAllConfirm: 'Seguro que queres eliminar todos os recursos gardados neste navegador? Esta acción non se pode desfacer.',
        deleteAllHelp: 'Borra todos os recursos gardados neste navegador.',
        savedAt: 'Gardado:',
        checkUpdates: 'Comprobar actualizacións',
        checkUpdatesHelp: 'Comproba se os ZIP cambiaron na nube.',
        checkUpdatesModalTitle: 'Comprobar actualizacións',
        checkingUpdates: 'Comprobando actualizacións...',
        checkUpdatesNote: 'Podes pechar esta xanela. A comprobación seguirá en segundo plano.',
        checkUpdatesProgress: '{done} de {total}',
        checkUpdatesDoneSummary: 'Actualizacións: {changed} de {total}.',
        checkUpdatesNone: 'Non hai recursos gardados.',
        checkUpdatesDone: 'Comprobación finalizada.',
        checkUpdatesUnavailable: 'Non se pode comprobar sen o backend configurado.',
        stats: {
          used: 'Espazo usado',
          total: 'Espazo total',
          count: 'Recursos gardados'
        },
        sort: {
          label: 'Ordenar por',
          title: 'Título',
          date: 'Data',
          start: 'Inicio',
          size: 'Tamaño',
          dirAsc: 'Ascendente',
          dirDesc: 'Descendente',
          dirHelp: 'Cambiar o sentido de orde.'
        },
        settings: {
          open: 'Axustes de limpeza',
          modalTitle: 'Axustes de limpeza',
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
          qr: 'QR',
          embed: 'Inserir nunha web',
          edit: 'Editar o título',
          download: 'Descargar ficheiro',
          update: 'Actualizar',
          updating: 'Actualizando...',
          updated: 'Actualizado'
        },
        editPrompt: 'Título do recurso',
        empty: 'Non hai recursos gardados neste navegador.',
        siteNoUrl: 'Sitio sen URL',
        noDate: 'sen data'
      },
      badges: {
        scheduled: 'Programado',
        opening: 'Inicio: {date}',
        closing: 'Fin: {date}',
        updateAvailable: 'Actualización dispoñible',
        updatedAt: 'Actualizado: {date}'
      },
      updates: {
        title: 'Nova versión dispoñible',
        body: 'O recurso cambiou na nube. Podes actualizalo agora.',
        action: 'Actualizar',
        dismiss: 'Agora non'
      },
      zipper: {
        title: 'Crear ZIP para o visor',
        summary: {
          title: 'Resumo do contido cargado'
        },
        options: {
          title: 'Opcións',
          availabilityLabel: 'Configurar a dispoñibilidade do recurso',
          availabilityEdit: 'Cambiar configuración',
          availabilityInfo: 'Definir cando estará visible o recurso e que accións estarán dispoñibles no xestor de recursos.'
        },
        panel: {
          configTitle: 'Configuración do recurso',
          stateTitle: 'Estado do recurso',
          actionsTitle: 'Accións',
          startLabel: 'Inicio',
          endLabel: 'Fin',
          permissionsLabel: 'Permisos',
          startImmediate: 'Inmediato',
          noEnd: 'Sen data de fin',
          stateAvailable: 'Recurso dispoñible',
          stateAvailableHelp: 'O recurso pode abrirse neste momento.',
          stateAvailableUntil: 'Dispoñible ata o {date}.',
          stateScheduled: 'Pendente de apertura',
          stateScheduledHelp: 'Abrirase o {date}.',
          stateClosed: 'Recurso non dispoñible',
          stateClosedHelp: 'A dispoñibilidade rematou o {date}.'
        },
        accordion: {
          filesTitle: 'O teu recurso ten ficheiros ou xa tes un ZIP/ELPX/H5P? Cárgao aquí'
        },
        subtitle: {
          item1: 'Para publicar o teu recurso, garda todos os ficheiros nun cartafol e comprímeo nun ficheiro <strong>.zip</strong>. Pode conter páxinas web e/ou un ou varios <strong>PDF</strong>.',
          item2: 'Se o teu recurso está feito con <strong>eXeLearning 3 ou superior</strong>, podes usar directamente o ficheiro <strong>.elpx</strong>.',
          item3: 'Se usas <strong>eXeLearning 2.x</strong>, exporta o proxecto a <strong>ZIP</strong> desde o programa e continúa coa opción <strong>“Xa teño un ZIP”</strong>.'
        },
        exe: {
          tooltip: 'eXeLearning: na versión 3+ podes usar directamente un .elpx (xa é un ZIP). Versión 2.x: Arquivo > Exportar > Sitio web > Arquivo comprimido ZIP. Versión 3.x: Arquivo > Descargar como > Sitio web.',
          tooltipHtml: '<strong>eXeLearning:</strong><br>• Versión 3+: podes usar directamente o ficheiro <code>.elpx</code> (xa é un ZIP).<br>• Versión 2.x: Arquivo &gt; Exportar &gt; Sitio web &gt; Arquivo comprimido ZIP.<br>• Versión 3.x: Arquivo &gt; Descargar como &gt; Sitio web.'
        },
        step1: {
          title: 'Engade os teus ficheiros',
          note: 'Arrastra o cartafol ou selecciona os ficheiros desde o botón.'
        },
        dropzone: {
          title: 'Arrastra aquí o cartafol ou os ficheiros',
          hint: 'Respéctanse os cartafoles internos.',
          folder: 'Escoller cartafol',
          files: 'Escoller ficheiros'
        },
        status: {
          empty: 'Non hai ficheiros seleccionados.',
          filesReady: 'Ficheiros atopados: {count}.',
          ready: 'Listo para crear o ZIP.',
          readyHint: 'Prepara o ZIP para obter o teu ficheiro.',
          selectFirst: 'Selecciona ficheiros ou un cartafol primeiro.',
          previewSelectFirst: 'Para previsualizar, selecciona ficheiros ou pega HTML.',
          previewPreparing: 'Preparando previsualización local...',
          previewOpened: 'Previsualización aberta nunha nova lapela.',
          previewFailed: 'Non se puido abrir a previsualización.',
          engineMissing: 'Non se puido cargar o motor ZIP.',
          creating: 'Creando ZIP...',
          downloaded: 'ZIP descargado. Sube o ZIP á túa nube, compárteo para que todo o mundo o poida ver e pega a ligazón na Opción B.',
          failed: 'Non se puido crear o ZIP. Revisa os ficheiros.',
          created: {
            html: 'ZIP creado: visor web HTML listo. Sube o ZIP á túa nube, compárteo para que todo o mundo o poida ver e pega a ligazón na Opción B.',
            documents: 'ZIP creado: visor de documentos listo. Sube o ZIP á túa nube, compárteo para que todo o mundo o poida ver e pega a ligazón na Opción B.',
            files: 'ZIP creado: visor de ficheiros listo. Sube o ZIP á túa nube, compárteo para que todo o mundo o poida ver e pega a ligazón na Opción B.'
          }
        },
        step2: {
          title: 'Descarga o ZIP',
          titleDynamic: 'Descarga o {type}',
          detail: 'Descargarase un ficheiro que podes subir a Drive, Dropbox, Nextcloud, etc.',
          forceFolderLabel: 'Forzar visor de cartafoles',
          forceFolderNote: 'Se activas esta opción, o ZIP abrirase en modo explorador de ficheiros: verás o contido como ficheiros organizados en cartafoles, mesmo cando inclúa HTML ou documentos.',
          forceFolderTooltip: 'Máis información',
          forceFolderTooltipHtml: 'Se activas esta opción, o ZIP abrirase en modo explorador de ficheiros: verás o contido como ficheiros organizados en cartafoles, mesmo cando inclúa HTML ou documentos.<br><br>Se non o marcas, o programa detectará automaticamente o tipo de visor que empregará.<br><br>Se non estás seguro, non o marques.'
        },
        zipName: {
          label: 'Nome do ZIP',
          placeholder: 'meu_recurso',
          default: 'meu_recurso'
        },
        resourceTitle: {
          label: 'Título do recurso',
          placeholder: 'Se o deixas baleiro, usarase o título do recurso',
          toggleLabel: 'Poñer un título ao recurso (título actual: {title})',
          currentEmpty: 'sen título'
        },
        build: 'Crear e descargar ZIP',
        buildDynamic: 'Crear e descargar {type}',
        html: {
          title: 'Non tes ficheiros pero tes o código HTML? Pégao aquí',
          note: 'Pega o HTML completo e o visor creará un ZIP cun <code>index.html</code> listo para descargar.',
          placeholder: '<!doctype html>...',
          build: 'Crear ZIP desde HTML',
          status: {
            ready: 'Listo para crear el ZIP desde tu HTML.',
            reactDetected: 'Este contido parece React/JSX (non HTML). Copia o prompt e pégao no chat da túa IA para convertelo a HTML.',
            empty: '',
            creating: 'Creando ZIP...',
            downloaded: 'ZIP descargado. Sube o ZIP á túa nube, compárteo para que todo o mundo o poida ver e pega a ligazón na Opción B.',
            failed: 'No se pudo crear el ZIP. Revisa el HTML.'
          }
        },
        restrict: {
          title: 'Tes un ZIP, ELPX ou H5P xa creado e queres engadirlle restricións de visibilidade? Cárgao aquí',
          note: 'Carga o teu ZIP, ELPX ou H5P e o visor engadirá as restricións. Despois terás que subilo a Drive, Dropbox, etc.',
          lockedText: 'Para usar esta opción, primeiro activa a limitación de visibilidade do recurso.',
          lockedAction: 'Activar limitación',
          lockedStatus: '',
          pick: 'Seleccionar ZIP',
          apply: 'Aplicar restricións e descargar',
          status: {
            ready: '',
            working: 'Aplicando restricións...',
            done: '{type} listo con restricións. Súbeo á túa nube, compárteo para que todo o mundo o poida ver e pega a ligazón na Opción B.',
            saved: '{type} gardado. Súbeo á túa nube, compárteo para que todo o mundo o poida ver e pega a ligazón na Opción B.',
            failed: 'Non se puido modificar o ZIP. Revisa o ficheiro.'
          },
          summaryTitle: 'Acceso limitado por datas'
        },
        help: {
          inline: 'Se xa creaches un arquivo ZIP, ELPX ou H5P e o compartiches nun servizo con ligazón pública, vai á Opción B.',
          previewTitle: 'Previsualiza o recurso antes de descargalo (opcional)',
          nextStepText: 'O seguinte paso é subir o arquivo á nube cunha ligazón pública. Despois, na Opción B, pega esa ligazón e crea a ligazón para compartir.',
          previewAction: 'Previsualizar',
          previewApplyRestrictions: 'Aplicar restricións na previsualización',
          previewApplyRestrictionsNote: 'Actívao para comprobar como se abre e se pecha o recurso segundo as datas configuradas.',
          previewHideResource: 'Previsualizar como recurso oculto',
          previewOpeningBlocked: 'Este recurso non está visible agora mesmo na previsualización. Desactiva esta opción se queres ver como quedará cando estea aberto. Déixaa activada se queres ver como se ve cando non está visible.',
          previewApplyRestrictionsInfo: 'Máis información',
          previewApplyRestrictionsInfoHtml: 'Úsao para comprobar como se abre e se pecha o recurso segundo as datas configuradas.',
          goTab: 'Ir á Opción B para pegar a ligazón pública'
        }
      },
      html: {
        title: 'Escolle o HTML inicial',
        subtitle: 'Non se atopou un index.html. Selecciona o ficheiro HTML que queres abrir primeiro.',
        confirm: 'Usar este HTML'
      },
      embed: {
        title: 'Inserir nunha web',
        subtitle: 'Copia e pega este código HTML na túa web para inserir o teu recurso.',
        copy: 'Copiar código',
        fallback: {
          title: 'Non se pode abrir incrustado',
          subtitle: 'O teu navegador ou a páxina onde se insire está bloqueando o almacenamento necesario. Abre o recurso nunha nova lapela.',
          open: 'Abrir nunha nova lapela'
        }
      },
      reactPrompt: {
        title: 'Isto parece React',
        subtitle: 'Este contido parece React/JSX (non HTML). Copia este prompt e pégao no chat da túa IA para que o converta a HTML.',
        prompt: 'Converte este código feito en React/JSX nun único `index.html` que funcione ao abrilo directamente no navegador (só HTML, CSS e JavaScript). Devólveme unicamente o contido completo do arquivo HTML.',
        copy: 'Copiar prompt'
      },
      about: {
        title: 'Axuda',
        intro: 'Guía rápida para publicar, compartir e xestionar recursos no visor.',
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
          item3: 'ZIPs baleiros, danados ou incompletos que non se poden abrir correctamente.'
        },
        how: {
          title: 'Como funciona',
          step1: 'Prepara o teu recurso como un cartafol con páxinas web (HTML) e comprímeo en ZIP. Podes facelo coa opción “Crear un ZIP”.',
          step2: 'Sube o ZIP a un servizo con ligazón pública (Google Drive, Dropbox, Nextcloud, GitHub…).',
          step3: 'Comparte o ficheiro para que calquera coa ligazón poida velo.',
          step4: 'Copia a URL e pégala no campo “Pega aquí a ligazón pública”.',
          step5: 'A ligazón para compartir é permanente, así que podes distribuíla ao alumnado.'
        },
        drive: {
          title: 'Importante sobre Google Drive',
          note: 'Google Drive limita a descarga directa de ficheiros grandes (aprox. 25 MB). Se o teu ZIP supera ese tamaño, pode fallar. Dropbox, Nextcloud e outros servizos adoitan permitir ficheiros máis grandes sen ese límite.'
        },
        body: '<nav class="about-index" data-help-nav aria-label="Índice de axuda"><p class="about-index__title">Índice</p><ul><li><a href="#help-obxectivo">Obxectivo</a></li><li><a href="#help-ruta">Ruta rápida para compartir</a></li><li><a href="#help-pestanas">Pestanas de traballo</a></li><li><a href="#help-visor">Que visor se crea automaticamente</a></li><li><a href="#help-opcions">Opcións antes de descargar</a></li><li><a href="#help-disponibilidade">Disponibilidade e accións</a></li><li><a href="#help-gestor">Xestor de recursos</a></li><li><a href="#help-faq">FAQ: privacidade e datos</a></li></ul></nav><section aria-labelledby="help-obxectivo"><h3 class="about-section-title" id="help-obxectivo" tabindex="-1">Obxectivo</h3><p>Compartir recursos co alumnado de maneira sinxela: preparas o material, xeras a ligazón e distribúela.</p></section><section aria-labelledby="help-ruta"><h3 class="about-section-title" id="help-ruta" tabindex="-1">Ruta rápida para compartir</h3><ol class="about-steps"><li>En <strong>Opción A</strong>, carga o teu recurso (cartafoles, ficheiros ou ZIP/ELPX/H5P) ou pega o código HTML.</li><li>Revisa o resumo e, se o precisas, axusta <strong>Opcións</strong> (título, dispoñibilidade e forzar visor de cartafoles).</li><li>En <strong>Opcións</strong>, crea o arquivo final. Despois súbeo á nube con ligazón pública e, en <strong>Opción B</strong>, pega ese enderezo.</li></ol><p>Se xa tes o ZIP, ELPX ou H5P na nube con ligazón pública, vai a <strong>Opción B</strong> e pega o enderezo.</p></section><section aria-labelledby="help-pestanas"><h3 class="about-section-title" id="help-pestanas" tabindex="-1">Pestanas de traballo</h3><ul><li><strong>Inicio</strong>: contén as dúas partes do fluxo: <strong>Opción A</strong> e <strong>Opción B</strong>.</li><li><strong>Xestor de recursos</strong>: abres, copias, inseres, actualizas e eliminas recursos gardados no navegador.</li></ul></section><section aria-labelledby="help-visor"><h3 class="about-section-title" id="help-visor" tabindex="-1">Que visor se crea automaticamente</h3><p>O programa detecta o contido e escolle o visor máis axeitado:</p><ul><li><strong>Visor web</strong>: para recursos con páxinas HTML e paquetes SCORM 1.2.</li><li><strong>Visor H5P</strong>: para contidos <code>.h5p</code>, tanto soltos como dentro de ZIP/ELPX/H5P.</li><li><strong>Visor de documentos</strong>: para PDF, DOCX, TXT, MD e CSV (inclúe renderizado de fórmulas en Markdown).</li><li><strong>Visor de cartafoles</strong>: para navegar por cartafoles e ficheiros de calquera tipo.</li></ul><p>Podes ver o programa en funcionamento con estes exemplos:</p><ul><li><a href="https://visor-webzip.github.io/?key=NO9-KQ_Vkmi6&view=full&entry=__vwz_folder_index.html" target="_blank" rel="noopener">Visor de cartafoles</a></li><li><a href="https://visor-webzip.github.io/?key=crBAg-o4BARB&view=full&entry=tetris%2Findex.html" target="_blank" rel="noopener">Visor web</a></li><li><a href="https://visor-webzip.github.io/?key=z3loPNMOj1pW&view=full&entry=__vwz_docs_index.html" target="_blank" rel="noopener">Visor de documentos</a></li><li><a href="https://visor-webzip.github.io/?key=sFUKNJkh0Joq&view=full&entry=__vwz_h5p_index.html" target="_blank" rel="noopener">Visor H5P</a></li></ul><p>Recomendámosche abrir tamén o <strong>Xestor de recursos</strong> para revisar que accións podes realizar con cada exemplo (compartir, inserir en web, descargar ou actualizar).</p></section><section aria-labelledby="help-opcions"><h3 class="about-section-title" id="help-opcions" tabindex="-1">Opcións antes de descargar</h3><ul><li><strong>Poñer un título ao recurso</strong>: opcional, para personalizar como se mostrará.</li><li><strong>Configurar a dispoñibilidade do recurso</strong>: opcional, para decidir cando se pode abrir e que accións estarán permitidas.</li><li><strong>Forzar visor de cartafoles</strong>: útil se queres que sempre se vexa como explorador de ficheiros.</li><li><strong>Previsualizar</strong>: abre unha vista temporal local para comprobar o resultado antes de subilo.</li></ul></section><section aria-labelledby="help-disponibilidade"><h3 class="about-section-title" id="help-disponibilidade" tabindex="-1">Disponibilidade e accións</h3><p>En <strong>Opcións</strong> podes activar a dispoñibilidade por datas e definir inicio, fin opcional e accións do xestor (compartir, inserir en web, descargar) mentres o recurso sexa accesible.</p><p>Se cargas un ZIP, ELPX ou H5P xa creado, tamén podes engadir ou cambiar estas restricións e previsualizar o resultado antes de xerar a ligazón final.</p></section><section aria-labelledby="help-gestor"><h3 class="about-section-title" id="help-gestor" tabindex="-1">Xestor de recursos</h3><p>O xestor garda os recursos neste navegador. Desde aí podes abrilos, compartilos, inserilos en web, actualizalos se cambia o arquivo na nube e eliminalos cando xa non os necesites.</p></section><section aria-labelledby="help-faq"><h3 class="about-section-title" id="help-faq" tabindex="-1">FAQ: privacidade e datos</h3><ul><li><strong>Onde se gardan os recursos?</strong> No almacenamento local do navegador de cada dispositivo.</li><li><strong>Suben os meus recursos a GitHub ou ao programa?</strong> Non. Ti aloxas o ZIP/ELPX/H5P na túa nube. O visor só o descarga e o abre no navegador.</li><li><strong>Envíanse datos a terceiros?</strong> Non. Só se realiza a descarga do ZIP/ELPX/H5P desde a ligazón pública que indicaches.</li><li><strong>Que pasa se borro datos do navegador ou cambio de dispositivo?</strong> Os recursos locais desaparecen nese navegador/dispositivo.</li><li><strong>Quen pode ver o recurso?</strong> Quen teña a ligazón do visor e, ademais, acceso á ligazón pública do arquivo.</li><li><strong>Como actualizo un recurso?</strong> Substitúe o arquivo na nube sen borrar o anterior; calquera usuario que abra a ligazón compartida recibirá unha notificación para actualizar o recurso.</li></ul></section>'
      },
      error: {
        driveTooLarge: 'O ficheiro é demasiado grande e Google Drive limita as descargas. Proba con Nextcloud, Dropbox ou outro servizo.',
        loadZip: 'Non se puido cargar o ZIP.',
        corruptZip: 'O ficheiro ZIP/ELPX/H5P está danado ou incompleto.',
        restricted: 'Este recurso xa non está dispoñible polas restricións de data.',
        embedNotAllowed: 'A inserción en web non está permitida para este recurso.',
        popupBlocked: 'O navegador bloqueou a xanela de previsualización. Permite as ventás emerxentes para este sitio e téntao de novo.',
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
        connecting: 'Conectando',
        downloadingZip: 'Descargando ZIP...',
        restrictedReady: 'O recurso está restrinxido por data. A ligazón xa está lista.',
        unpacking: 'Descomprimindo...',
        saving: 'Gardando no navegador...',
        copySuccess: 'Ligazón copiada.'
      },
      documentViewer: {
        documentsTitle: 'Documentos',
        hideList: 'Ocultar lista',
        showList: 'Amosar lista',
        loadingPdf: 'Cargando PDF...',
        failedPdf: 'Non se puido mostrar este PDF.',
        downloadPdf: 'Descargar PDF',
        prevPage: 'Anterior',
        nextPage: 'Seguinte',
        zoomIn: 'Achegar',
        zoomOut: 'Afastar',
        fitWidth: 'Axustar ao ancho',
        pageLabel: 'Páxina {current} / {total}',
        missingPdfEngine: 'Non se puido cargar o visor PDF.',
        loadingDocx: 'Cargando DOCX...',
        failedDocx: 'Non se puido mostrar este DOCX.',
        downloadDocx: 'Descargar DOCX',
        missingDocxEngine: 'Non se puido cargar o visor DOCX.'
      },
      folderViewer: {
        title: 'Modo cartafol',
        subtitle: 'Explora cartafoles e subcartafoles con iconas por tipo de ficheiro.',
        searchPlaceholder: 'Buscar ficheiros...',
        searchResults: 'Resultados da busca',
        selectAll: 'Seleccionar visibles',
        clearSelection: 'Limpar selección',
        openSelected: 'Abrir seleccionados',
        downloadAll: 'Descargar todo',
        downloadSelected: 'Descargar selección',
        downloadVisible: 'Descargar lista visible',
        noResults: 'Non hai ficheiros para amosar.',
        selectedCount: '{count} seleccionados',
        openFile: 'Abrir',
        downloadFile: 'Descargar',
        contextOpen: 'Abrir',
        contextDownload: 'Descargar',
        contextDownloadVisible: 'Descargar lista visible',
        folder: 'Cartafol',
        filesWord: 'ficheiros'
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
        eta: 'Deskargaren denbora estimatua: --',
        etaPrefix: 'Deskargaren denbora estimatua: ',
        downloadedPrefix: 'Deskargatuta: ',
        note: 'Hurrengo aldietan bistaratzea berehalakoa izango da.'
      },
      header: {
        eyebrow: 'ZIP materialen artean',
        title: 'Web-ZIP Bisorea',
        help: 'Laguntza',
        settings: 'Ezarpenak',
        settingsHint: 'Ezarri baliabidearen erabilgarritasuna',
        language: 'Hizkuntza',
        languageHint: 'Hizkuntza aldatu',
        theme: 'Gaia',
        themeHint: 'Gaia aldatu',
        themeAuto: 'Automatikoa',
        themeLight: 'Argia',
        themeDark: 'Iluna',
        subtitle: 'Sortu, aurrebistatu eta partekatu hezkuntza-baliabide digitalak. Partekatu esteka eta zure baliabidea edozein nabigatzailetan zuzenean ireki ahalko da.'
      },
      settings: {
        title: 'Ikusgarritasun ezarpenak',
        languageTitle: 'Hizkuntza',
        restrictTitle: 'Sarbidea daten bidez',
        restrictHint: 'Hemen zehaztu dezakezu baliabidea noiz egongo den ikusgai eta zein ekintza egongo diren eskuragarri baliabideen kudeatzailean.',
        restrictToggle: 'Sarbidea mugatu',
        startLabel: 'Hasiera',
        endLabel: 'Amaiera',
        hasStart: 'Aktibatu baliabidearen ikusgarritasunaren hasiera-data',
        neverExpires: 'Aktibatu baliabidearen ikusgarritasunaren amaiera-data',
        enforceEndDuringView: 'Baliabidearen bistaratzea desaktibatu amaiera-datara iristean irekita dagoen bitartean',
        warningMinutesLabel: 'Aurreko abisua minututan (0 abisurik ez)',
        warningMessageLabel: 'Abisu mezua',
        warningMessagePlaceholder: 'Sarbide-denbora {minutes} minututan amaituko da.',
        warningMessageDefault: 'Sarbide-denbora {minutes} minututan amaituko da.',
        periodHint: 'Baliabidea tarte honetan bakarrik egongo da ikusgai.',
        periodHintLiveEndOn: 'Bistaratzea amaiera-datara iristean desaktibatuko da.',
        periodHintLiveEndOff: 'Bistaratzea ez da automatikoki desaktibatuko amaiera-datara iristean.',
        periodHintWarningOn: 'Abisua {minutes} minutu lehenago emango da.',
        periodHintWarningOff: 'Ez da aurretiazko abisurik egongo.',
        summaryLiveEndOn: 'Amaierara iristean desaktibatzen da',
        summaryLiveEndOff: 'Ez dago desaktibazio automatikorik',
        summaryWarningOn: 'Abisua: {minutes} min lehenago',
        summaryWarningOff: 'Ez dago aurretiazko abisurik',
        summaryNoRestrictions: 'Baliabidea ikusgarritasun-murrizketarik gabe.',
        summaryAllowedActions: 'Baimendutako ekintzak baliabideen kudeatzailean: {actions}',
        summaryNoActions: 'bat ere ez',
        summaryBlockedActions: 'Ezin izango da: {actions}',
        summaryNoBlockedActions: 'bat ere ez',
        datesTitle: 'Ikusgarritasun-aldia',
        actionsTitle: 'Ekintzak baliabidea ikusgai dagoen bitartean',
        allowShare: 'Partekatu',
        allowEmbed: 'Web batean txertatu',
        allowDownload: 'Deskargatu'
      },
      restrictionModal: {
        title: 'Sarbide mugatua',
        body: 'Baliabidea ez dago eskuragarri une honetan.',
        rangeStart: 'Erabilgarri hemendik: {date}',
        rangeEnd: 'Hona arte: {date}',
        rangeNoStart: 'Hasiera-datarik gabe',
        rangeNoEnd: 'Amaiera-datarik gabe',
        countdown: 'Eskuragarri: {time}'
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
      footer: {
        issues: 'Arazoak eta iradokizunak',
        analytics: {
          visits: 'Bisitak',
          today: 'Gaur',
          details: 'Estatistikak'
        }
      },
      tab: {
        home: 'Hasiera',
        downloadZip: 'Aukerak eta deskargak',
        manager: 'Baliabide kudeatzailea',
        help: 'Laguntza'
      },
      publish: {
        title: 'Baliabide bat argitaratu',
        subtitle: 'Aukeratu nola hasi nahi duzun.',
        back: 'Hasierara itzuli',
        choice: {
          zipper: {
            title: 'Sortu ZIP bat (web, PDF edo DOCX)',
            note: 'Sortu ZIP bat fitxategi lokaletatik edo HTMLtik. PDF eta DOCX ere izan ditzake.',
            restrictHint: 'Sarbidea datekin mugatzeko aukera ere baduzu.'
          },
          main: {
            title: 'Esteka sortu',
            subtitle: '{type} hodeian daukat',
            subtitleAny: 'ZIP bat hodeian daukat estekarekin',
            types: {
              any: 'ZIP, ELPX edo H5P',
              zip: 'ZIP',
              elpx: 'ELPX',
              h5p: 'H5P'
            },
            note: 'Itsatsi esteka publikoa eta sortu bisorearen esteka.',
            secondaryHtml: 'eXeLearning-eko .elpx erabiltzen baduzu, hemen ere ireki dezakezu <span class="info-dot" data-i18n-aria-label="publish.choice.main.elpxTooltip" aria-label="Zer da ELPX?">?<span class="info-dot__tooltip" role="tooltip" data-i18n-html="publish.choice.main.elpxTooltipHtml">.elpx fitxategia eXeLearning-eko proiektu bat da, eta barnean ZIP formatua erabiltzen du; horri esker, bisoreak edukira sartu eta behar bezala bistaratu dezake.</span></span>',
            elpxTooltip: 'Zer da ELPX?',
            elpxTooltipHtml: '.elpx fitxategia eXeLearning-eko proiektu bat da, eta barnean ZIP formatua erabiltzen du; horri esker, bisoreak edukira sartu eta behar bezala bistaratu dezake.'
          }
        },
        flow: {
          uploadTitle: 'Kargatu baliabidea'
        },
        quick: {
          optionALabel: 'A aukera',
          optionAText: 'Zure baliabidea ordenagailuan badago (fitxategiak eta karpetak), IA batetik kopiatu baduzu (HTML kodea), edo datak nahiz bestelako murrizketak aplikatu behar badituzu, igo edo itsatsi hemen.',
          optionBLabel: 'B aukera',
          optionBText: 'Dagoeneko ZIP, ELPX edo H5P bat hodeian partekatuta baduzu (Drive, Dropbox, Nextcloud, etab.) esteka publikoarekin, itsatsi helbidea zuzenean hemen.',
          intro: 'Aukeratu bi aukera hauetako bat:<br><br><strong>A aukera:</strong> Zure baliabide digitala karpetetan, fitxategietan edo HTML kodean badago, edo eskuragarritasun datak edo beste murrizketa batzuk ezarri behar badituzu, kargatu lehenik goiko eremuan.<br><br><strong>B aukera:</strong> Dagoeneko ZIP, ELPX edo H5P bat esteka publikoarekin baduzu zure hodeiko biltegiratze-zerbitzuan (Drive, Dropbox, Nextcloud, etab.) eta ez baduzu aldatu behar, itsatsi helbide hori «B aukera» atalean.',
          newResource: 'Berrabiarazi',
          newResourceTooltip: 'Berrabiarazi aplikazioa baliabide berriak gehitzeko edo aukeraz aldatzeko.',
          files: {
            title: 'Kargatu fitxategiak edo karpetak',
            dropTitle: 'Arrastatu hona karpeta edo fitxategiak',
            loadedTitle: 'Karga osatu da',
            loadedHint: 'Berriro arrastatu edo beste fitxategi batzuk aukeratu ditzakezu, edo beherago jarraitu baliabidea konfiguratzeko.',
            dropHint: 'ZIP sortzeko aukera zuzenean irekiko da.',
            folder: 'Aukeratu karpeta',
            files: 'Aukeratu fitxategiak'
          },
          html: {
            title: 'HTML kodea duzu? Itsatsi hemen',
            placeholder: '<!doctype html>...',
            apply: 'Erabili HTML hau'
          },
          fastDownload: 'Deskarga azkarra',
          fastDownloadDetail: 'aukerak alde batera utzi eta baliabidea deskarga ezazu ondoko murrizketekin:',
          fastDownloadTooltip: 'Fitxategia sortzen du eta zuzenean deskargatzen du, aukeren pantailatik eta aurreikuspenaren pantailatik igaro gabe. Ezarpenetan konfiguratutako ikusgarritasun-murrizketak automatikoki aplikatzen zaizkio deskargatutako fitxategiari.',
          changeRestrictions: 'Murrizketak aldatu'
        }
      },
      tabs: {
        label: 'Atalak'
      },
      main: {
        subtitle: 'Zure baliabidea ZIP, ELPX, H5P edo SCORM 1.2 (ZIPean) formatuan baduzu eta <strong>esteka publikoa</strong> duen zerbitzu batean badago (Drive, Dropbox, etab.), itsatsi hemen esteka bisorearen esteka sortzeko.',
        form: {
          title: 'ZIP bat hodeian daukat estekarekin',
          step: 'Itsatsi ZIParen esteka publikoa (edo .elpx/.h5p) B aukeran eta sakatu “Esteka sortu”.',
          placeholder: 'Itsatsi hemen ZIParen edo .elpx/.h5p fitxategiaren esteka publikoa (PDF edo DOCX badu ere balio du)',
          submit: 'Esteka sortu'
        },
        output: {
          title: 'Partekatze esteka',
          step: 'Partekatu esteka hau, besteek zure baliabidea ikusi ahal izan dezaten.',
          placeholder: 'Partekatze esteka',
          copy: 'Esteka kopiatu',
          qr: 'QR',
          copyTooltip: 'Esteka kopiatu',
          qrTooltip: 'QR (proiektatzeko edo inprimatzeko egokia)',
          embedTooltip: 'Web batean txertatu (itsasteko prest dagoen iframe-a sortzen du)',
          openTooltip: 'Aurrebista ireki',
          embed: 'Web batean txertatu',
          open: 'Aurrebista ireki'
        }
      },
      service: {
        drive: 'Google Drive',
        dropbox: 'Dropbox',
        box: 'Box.com',
        nextcloud: 'Nextcloud',
        github: 'GitHub',
        other: 'Beste zerbitzuak',
        drivePlaceholder: 'https://drive.google.com/...',
        dropboxPlaceholder: 'https://www.dropbox.com/...',
        boxPlaceholder: 'https://app.box.com/s/...',
        nextcloudPlaceholder: 'https://zure-zerbitzaria/s/...',
        githubPlaceholder: 'https://github.com/erabiltzailea/errepositorioa/archive/refs/heads/main.zip',
        otherPlaceholder: 'https://zerbitzaria.com/fitxategia.zip'
      },
      manager: {
        title: 'Gordetako baliabideak',
        subtitle: 'Kudeatu nabigatzaile honetan gordetako materialen okupazioa.',
        deleteAll: 'Baliabide guztiak ezabatu',
        deleteAllConfirm: 'Ziur zaude nabigatzaile honetan gordetako baliabide guztiak ezabatu nahi dituzula? Ekintza hau ezin da desegin.',
        deleteAllHelp: 'Nabigatzaile honetan gordetako baliabide guztiak ezabatzen ditu.',
        savedAt: 'Gordeta:',
        checkUpdates: 'Eguneratzeak egiaztatu',
        checkUpdatesHelp: 'Egiaztatu ZIPak hodeian aldatu diren.',
        checkUpdatesModalTitle: 'Eguneratzeak egiaztatu',
        checkingUpdates: 'Eguneratzeak egiaztatzen...',
        checkUpdatesNote: 'Leiho hau itxi dezakezu. Egiaztapena atzeko planoan jarraituko du.',
        checkUpdatesProgress: '{done} / {total}',
        checkUpdatesDoneSummary: 'Eguneraketak: {changed} / {total}.',
        checkUpdatesNone: 'Ez dago gordetako baliabiderik.',
        checkUpdatesDone: 'Egiaztapena amaituta.',
        checkUpdatesUnavailable: 'Ezin da egiaztatu backend konfiguratu gabe.',
        stats: {
          used: 'Erabilitako espazioa',
          total: 'Guztizko espazioa',
          count: 'Gordetako baliabideak'
        },
        sort: {
          label: 'Ordenatu',
          title: 'Izenburua',
          date: 'Data',
          start: 'Hasiera',
          size: 'Tamaina',
          dirAsc: 'Gorantz',
          dirDesc: 'Beherantz',
          dirHelp: 'Ordena norabidea aldatu.'
        },
        settings: {
          open: 'Garbiketa-ezarpenak',
          modalTitle: 'Garbiketa-ezarpenak',
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
          qr: 'QR',
          embed: 'Web batean txertatu',
          edit: 'Izenburua editatu',
          download: 'Fitxategia deskargatu',
          update: 'Eguneratu',
          updating: 'Eguneratzen...',
          updated: 'Eguneratuta'
        },
        editPrompt: 'Baliabidearen izenburua',
        empty: 'Ez dago gordetako baliabiderik nabigatzaile honetan.',
        siteNoUrl: 'URLrik gabeko gunea',
        noDate: 'datarik gabe'
      },
      badges: {
        scheduled: 'Programatua',
        opening: 'Hasiera: {date}',
        closing: 'Amaiera: {date}',
        updateAvailable: 'Eguneraketa eskuragarri',
        updatedAt: 'Eguneratua: {date}'
      },
      updates: {
        title: 'Bertsio berria eskuragarri',
        body: 'Baliabidea hodeian aldatu da. Orain eguneratu dezakezu.',
        action: 'Eguneratu',
        dismiss: 'Orain ez'
      },
      zipper: {
        title: 'Sortu ZIPa bisorerako',
        summary: {
          title: 'Kargatutako edukiaren laburpena'
        },
        options: {
          title: 'Aukerak',
          availabilityLabel: 'Konfiguratu baliabidearen erabilgarritasuna',
          availabilityEdit: 'Aldatu konfigurazioa',
          availabilityInfo: 'Zehaztu noiz egongo den baliabidea ikusgai eta zein ekintza egongo diren erabilgarri baliabideen kudeatzailean.'
        },
        panel: {
          configTitle: 'Baliabidearen konfigurazioa',
          stateTitle: 'Baliabidearen egoera',
          actionsTitle: 'Ekintzak',
          startLabel: 'Hasiera',
          endLabel: 'Amaiera',
          permissionsLabel: 'Baimenak',
          startImmediate: 'Berehala',
          noEnd: 'Amaiera-datarik gabe',
          stateAvailable: 'Baliabidea erabilgarri',
          stateAvailableHelp: 'Baliabidea une honetan ireki daiteke.',
          stateAvailableUntil: '{date} arte erabilgarri.',
          stateScheduled: 'Irekitzeko zain',
          stateScheduledHelp: '{date} egunean irekiko da.',
          stateClosed: 'Baliabidea ez dago erabilgarri',
          stateClosedHelp: 'Erabilgarritasuna {date} egunean amaitu zen.'
        },
        accordion: {
          filesTitle: 'Zure baliabideak fitxategiak ditu edo ZIP/ELPX/H5P bat baduzu? Kargatu hemen'
        },
        subtitle: {
          item1: 'Zure baliabidea argitaratzeko, gorde fitxategi guztiak karpeta batean eta konprimitu <strong>.zip</strong> fitxategi batean. Web-orriak eta/edo <strong>PDF</strong> bat edo gehiago izan ditzake.',
          item2: 'Zure baliabidea <strong>eXeLearning 3 edo goragokoarekin</strong> egina badago, <strong>.elpx</strong> fitxategia zuzenean erabil dezakezu.',
          item3: '<strong>eXeLearning 2.x</strong> erabiltzen baduzu, esportatu proiektua <strong>ZIP</strong>era programatik eta jarraitu <strong>“ZIP bat badaukat”</strong> aukerarekin.'
        },
        exe: {
          tooltip: 'eXeLearning: 3+ bertsioan .elpx zuzenean erabil dezakezu (dagoeneko ZIP bat da). 2.x bertsioa: Fitxategia > Esportatu > Webgunea > ZIP fitxategi konprimatua. 3.x bertsioa: Fitxategia > Deskargatu honela > Webgunea.',
          tooltipHtml: '<strong>eXeLearning:</strong><br>• 3+ bertsioa: <code>.elpx</code> fitxategia zuzenean erabil dezakezu (dagoeneko ZIP bat da).<br>• 2.x bertsioa: Fitxategia &gt; Esportatu &gt; Webgunea &gt; ZIP fitxategi konprimatua.<br>• 3.x bertsioa: Fitxategia &gt; Deskargatu honela &gt; Webgunea.'
        },
        step1: {
          title: 'Gehitu zure fitxategiak',
          note: 'Arrastatu karpeta edo hautatu fitxategiak botoitik.'
        },
        dropzone: {
          title: 'Arrastatu hona karpeta edo fitxategiak',
          hint: 'Barneko karpetak errespetatzen dira.',
          folder: 'Karpeta aukeratu',
          files: 'Fitxategiak aukeratu'
        },
        status: {
          empty: 'Ez dago hautatutako fitxategirik.',
          filesReady: 'Aurkitutako fitxategiak: {count}.',
          ready: 'ZIPa sortzeko prest.',
          readyHint: 'Prestatu ZIPa zure fitxategia eskuratzeko.',
          selectFirst: 'Aukeratu fitxategiak edo karpeta bat lehenik.',
          previewSelectFirst: 'Aurrebista egiteko, hautatu fitxategiak edo itsatsi HTMLa.',
          previewPreparing: 'Tokiko aurrebista prestatzen...',
          previewOpened: 'Aurrebista fitxa berri batean ireki da.',
          previewFailed: 'Ezin izan da aurrebista ireki.',
          engineMissing: 'Ezin izan da ZIP motorra kargatu.',
          creating: 'ZIPa sortzen...',
          downloaded: 'ZIPa deskargatuta. Igo ZIPa zure hodeira, partekatu denek ikus dezaten eta itsatsi esteka B aukeran.',
          failed: 'Ezin izan da ZIPa sortu. Berrikusi fitxategiak.',
          created: {
            html: 'ZIPa sortuta: web bistaratzailea prest. Igo ZIPa zure hodeira, partekatu denek ikus dezaten eta itsatsi esteka B aukeran.',
            documents: 'ZIPa sortuta: dokumentuen bistaratzailea prest. Igo ZIPa zure hodeira, partekatu denek ikus dezaten eta itsatsi esteka B aukeran.',
            files: 'ZIPa sortuta: fitxategi-bistaratzailea prest. Igo ZIPa zure hodeira, partekatu denek ikus dezaten eta itsatsi esteka B aukeran.'
          }
        },
        step2: {
          title: 'Deskargatu ZIPa',
          titleDynamic: 'Deskargatu {type}',
          detail: 'Fitxategi bat deskargatuko da (Drive, Dropbox, Nextcloud, etab. igo dezakezu).',
          forceFolderLabel: 'Karpeten bisorea behartu',
          forceFolderNote: 'Aukera hau aktibatuz gero, ZIPa fitxategi-esploratzaile moduan irekiko da: edukia karpetetan antolatutako fitxategi gisa ikusiko duzu, HTML edo dokumentuak baditu ere.',
          forceFolderTooltip: 'Informazio gehiago',
          forceFolderTooltipHtml: 'Aukera hau aktibatuz gero, ZIPa fitxategi-esploratzaile moduan irekiko da: edukia karpetetan antolatutako fitxategi gisa ikusiko duzu, HTML edo dokumentuak baditu ere.<br><br>Ez baduzu markatzen, programak automatikoki hautemango du zein bisore mota erabili behar den.<br><br>Ziur ez bazaude, ez markatu.'
        },
        zipName: {
          label: 'ZIParen izena',
          placeholder: 'nire_baliabidea',
          default: 'nire_baliabidea'
        },
        resourceTitle: {
          label: 'Baliabidearen izenburua',
          placeholder: 'Hutsik uzten baduzu, baliabidearen izenburua erabiliko da',
          toggleLabel: 'Jarri izenburua baliabideari (egungo izenburua: {title})',
          currentEmpty: 'izenbururik gabe'
        },
        build: 'Sortu eta deskargatu ZIPa',
        buildDynamic: 'Sortu eta deskargatu {type}',
        html: {
          title: 'Ez duzu fitxategirik baina HTML kodea baduzu? Itsatsi hemen',
          note: 'Itsatsi HTML osoa eta bisoreak ZIP bat sortuko du, deskargatzeko prest dagoen <code>index.html</code> batekin.',
          placeholder: '<!doctype html>...',
          build: 'HTMLtik ZIPa sortu',
          status: {
            ready: 'Listo para crear el ZIP desde tu HTML.',
            reactDetected: 'Honek React/JSX dirudi (ez HTML). Kopiatu prompta eta itsatsi zure IAren txatean HTMLra bihurtzeko.',
            empty: '',
            creating: 'Creando ZIP...',
            downloaded: 'ZIPa deskargatuta. Igo ZIPa zure hodeira, partekatu denek ikus dezaten eta itsatsi esteka B aukeran.',
            failed: 'No se pudo crear el ZIP. Revisa el HTML.'
          }
        },
        restrict: {
          title: 'Jada sortutako ZIP, ELPX edo H5P bat duzu eta ikusgarritasun-murrizketak gehitu nahi dizkiozu? Kargatu hemen',
          note: 'Kargatu zure ZIP, ELPX edo H5P fitxategia eta bisoreak murrizketak gehituko ditu. Ondoren Drive, Dropbox, etab. zerbitzuetara igo beharko duzu.',
          lockedText: 'Aukera hau erabiltzeko, lehenik aktibatu baliabidearen ikusgarritasun-muga.',
          lockedAction: 'Aktibatu muga',
          lockedStatus: '',
          pick: 'ZIPa hautatu',
          apply: 'Murrizketak aplikatu eta deskargatu',
          status: {
            ready: '',
            working: 'Murrizketak aplikatzen...',
            done: '{type} prest murrizketekin. Igo ezazu zure hodeira, partekatu denek ikus dezaten eta itsatsi esteka B aukeran.',
            saved: '{type} gordeta. Igo ezazu zure hodeira, partekatu denek ikus dezaten eta itsatsi esteka B aukeran.',
            failed: 'Ezin izan da ZIPa aldatu. Berrikusi fitxategia.'
          },
          summaryTitle: 'Sarbide mugatua daten arabera'
        },
        help: {
          inline: 'ZIP fitxategi bat sortu eta esteka publikoarekin duen zerbitzu batean partekatu baduzu, joan B aukerara.',
          previewTitle: 'Aurreikusi baliabidea deskargatu aurretik (aukerakoa)',
          nextStepText: 'Hurrengo urratsa fitxategia hodeira esteka publikoarekin igotzea da. Ondoren, B aukeran, itsatsi esteka hori eta sortu partekatzeko esteka.',
          previewAction: 'Aurreikusi',
          previewApplyRestrictions: 'Murrizketak aplikatu aurrebistan',
          previewApplyRestrictionsNote: 'Aktibatu baliabidea nola irekitzen eta ixten den egiaztatzeko, konfiguratutako daten arabera.',
          previewHideResource: 'Aurreikusi baliabidea ezkutuan',
          previewOpeningBlocked: 'Baliabide hau ez dago ikusgai une honetan aurrebistan. Desaktibatu aukera hau irekita dagoenean nola geratuko den ikusi nahi baduzu. Utzi aktibatuta ikusgai ez dagoenean nola ikusten den ikusi nahi baduzu.',
          previewApplyRestrictionsInfo: 'Informazio gehiago',
          previewApplyRestrictionsInfoHtml: 'Erabili baliabidea nola irekitzen eta ixten den egiaztatzeko, konfiguratutako daten arabera.',
          goTab: 'Joan B aukerara esteka publikoa itsasteko'
        }
      },
      html: {
        title: 'Aukeratu hasierako HTMLa',
        subtitle: 'Ez da index.html aurkitu. Hautatu lehenik ireki nahi duzun HTML fitxategia.',
        confirm: 'Erabili HTML hau'
      },
      embed: {
        title: 'Web batean txertatu',
        subtitle: 'Kopiatu eta itsatsi HTML kode hau zure webgunean zure baliabidea txertatzeko.',
        copy: 'Kodea kopiatu',
        fallback: {
          title: 'Ezin da txertatuta ireki',
          subtitle: 'Zure nabigatzailea edo txertatzen den orria beharrezko biltegiratzea blokeatzen ari da. Ireki baliabidea fitxa berri batean.',
          open: 'Fitxa berri batean ireki'
        }
      },
      reactPrompt: {
        title: 'Honek React dirudi',
        subtitle: 'Eduki honek React/JSX dirudi (ez HTML). Kopiatu prompt hau eta itsatsi zure IAren txatean HTMLra bihur dezan.',
        prompt: 'Bihurtu React/JSX-en egindako kode hau `index.html` fitxategi bakarrean, nabigatzailean zuzenean irekitzean funtziona dezan (HTML, CSS eta JavaScript bakarrik). Itzul iezadazu HTML fitxategiaren eduki osoa bakarrik.',
        copy: 'Prompta kopiatu'
      },
      about: {
        title: 'Laguntza',
        intro: 'Bisorean baliabideak argitaratu, partekatu eta kudeatzeko gida azkarra.',
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
          item3: 'Behar bezala ireki ezin diren ZIP hutsak, hondatuak edo osatu gabeak.'
        },
        how: {
          title: 'Nola funtzionatzen du',
          step1: 'Prestatu zure baliabidea web-orriak (HTML) dituen karpeta gisa eta ZIPean konprimitu. “ZIP bat sortu” aukerarekin egin dezakezu.',
          step2: 'Igo ZIPa esteka publikoarekin duen zerbitzu batera (Google Drive, Dropbox, Nextcloud, GitHub…).',
          step3: 'Partekatu fitxategia esteka duen edonork ikus dezan.',
          step4: 'Kopiatu URLa eta itsatsi “Itsatsi hemen esteka publikoa” eremuan.',
          step5: 'Partekatze esteka iraunkorra da, beraz, ikasleekin bana dezakezu.'
        },
        drive: {
          title: 'Google Drive-ri buruzko oharra',
          note: 'Google Drivek fitxategi handien deskarga zuzena mugatzen du (gutxi gorabehera 25 MB). Zure ZIPak tamaina hori gainditzen badu, huts egin dezake. Dropbox, Nextcloud eta beste zerbitzu batzuek, normalean, handiagoak onartzen dituzte muga horik gabe.'
        },
        body: '<nav class="about-index" data-help-nav aria-label="Laguntzaren aurkibidea"><p class="about-index__title">Aurkibidea</p><ul><li><a href="#help-helburua">Helburua</a></li><li><a href="#help-ibilbidea">Partekatzeko ibilbide azkarra</a></li><li><a href="#help-fitxak">Laneko fitxak</a></li><li><a href="#help-ikuslea">Zein bisore sortzen den automatikoki</a></li><li><a href="#help-aukerak">Deskargatu aurreko aukerak</a></li><li><a href="#help-eskuragarritasuna">Eskuragarritasuna eta ekintzak</a></li><li><a href="#help-kudeatzailea">Baliabideen kudeatzailea</a></li><li><a href="#help-faq">FAQ: pribatutasuna eta datuak</a></li></ul></nav><section aria-labelledby="help-helburua"><h3 class="about-section-title" id="help-helburua" tabindex="-1">Helburua</h3><p>Ikasleekin baliabideak modu errazean partekatzea: materiala prestatu, esteka sortu eta zabaldu.</p></section><section aria-labelledby="help-ibilbidea"><h3 class="about-section-title" id="help-ibilbidea" tabindex="-1">Partekatzeko ibilbide azkarra</h3><ol class="about-steps"><li><strong>A aukera</strong> atalean, kargatu zure baliabidea (karpetak, fitxategiak edo ZIP/ELPX/H5P) edo itsatsi HTML kodea.</li><li>Laburpena berrikusi eta, behar baduzu, doitu <strong>Aukerak</strong> (izenburua, eskuragarritasuna eta karpeta-bisorea behartzea).</li><li><strong>Aukerak</strong> atalean, sortu azken fitxategia. Gero igo hodeira esteka publikoarekin eta, <strong>B aukera</strong> atalean, itsatsi helbidea.</li></ol><p>ZIP, ELPX edo H5P fitxategia jada hodeian baduzu esteka publikoarekin, joan <strong>B aukera</strong> atalera eta itsatsi helbidea.</p></section><section aria-labelledby="help-fitxak"><h3 class="about-section-title" id="help-fitxak" tabindex="-1">Laneko fitxak</h3><ul><li><strong>Hasiera</strong>: fluxuaren bi atalak ditu: <strong>A aukera</strong> eta <strong>B aukera</strong>.</li><li><strong>Baliabideen kudeatzailea</strong>: nabigatzailean gordetako baliabideak ireki, kopiatu, txertatu, eguneratu eta ezabatu.</li></ul></section><section aria-labelledby="help-ikuslea"><h3 class="about-section-title" id="help-ikuslea" tabindex="-1">Zein bisore sortzen den automatikoki</h3><p>Programak edukia detektatzen du eta bisore egokiena aukeratzen du:</p><ul><li><strong>Web bisorea</strong>: HTML orriak eta SCORM 1.2 paketeak dituzten baliabideentzat.</li><li><strong>H5P bisorea</strong>: <code>.h5p</code> edukientzat, bakarka zein ZIP/ELPX/H5P barruan.</li><li><strong>Dokumentu bisorea</strong>: PDF, DOCX, TXT, MD eta CSV fitxategientzat (Markdown-eko formulak ere errendatzen ditu).</li><li><strong>Karpeta bisorea</strong>: edozein motatako fitxategi eta karpetak arakatzeko.</li></ul><p>Programa martxan ikus dezakezu adibide hauekin:</p><ul><li><a href="https://visor-webzip.github.io/?key=NO9-KQ_Vkmi6&view=full&entry=__vwz_folder_index.html" target="_blank" rel="noopener">Karpeta bisorea</a></li><li><a href="https://visor-webzip.github.io/?key=crBAg-o4BARB&view=full&entry=tetris%2Findex.html" target="_blank" rel="noopener">Web bisorea</a></li><li><a href="https://visor-webzip.github.io/?key=z3loPNMOj1pW&view=full&entry=__vwz_docs_index.html" target="_blank" rel="noopener">Dokumentu bisorea</a></li><li><a href="https://visor-webzip.github.io/?key=sFUKNJkh0Joq&view=full&entry=__vwz_h5p_index.html" target="_blank" rel="noopener">H5P bisorea</a></li></ul><p>Gomendatzen dizugu <strong>Baliabideen kudeatzailea</strong> ere irekitzea, adibide bakoitzarekin zer ekintza egin ditzakezun ikusteko (partekatu, webean txertatu, deskargatu edo eguneratu).</p></section><section aria-labelledby="help-aukerak"><h3 class="about-section-title" id="help-aukerak" tabindex="-1">Deskargatu aurreko aukerak</h3><ul><li><strong>Izenburua jarri baliabideari</strong>: aukerazkoa, baliabidea nola agertuko den pertsonalizatzeko.</li><li><strong>Baliabidearen eskuragarritasuna konfiguratu</strong>: aukerazkoa, noiz ireki daitekeen eta zer ekintza baimenduko diren erabakitzeko.</li><li><strong>Karpeta-bisorea behartu</strong>: baliabidea beti fitxategi-esploratzaile moduan ikusi nahi baduzu.</li><li><strong>Aurrebista</strong>: tokiko aldi baterako ikuspegia irekitzen du, igo aurretik emaitza egiaztatzeko.</li></ul></section><section aria-labelledby="help-eskuragarritasuna"><h3 class="about-section-title" id="help-eskuragarritasuna" tabindex="-1">Eskuragarritasuna eta ekintzak</h3><p><strong>Aukerak</strong> atalean, dataren araberako eskuragarritasuna aktiba dezakezu: hasiera, aukerako amaiera eta baliabidea eskuragarri dagoen bitartean kudeatzaileko ekintzak (partekatu, webean txertatu, deskargatu).</p><p>Dagoeneko sortutako ZIP, ELPX edo H5P bat kargatzen baduzu, murrizketa horiek ere gehitu edo aldatu ditzakezu, eta emaitza aurrebistan ikusi azken esteka sortu aurretik.</p></section><section aria-labelledby="help-kudeatzailea"><h3 class="about-section-title" id="help-kudeatzailea" tabindex="-1">Baliabideen kudeatzailea</h3><p>Kudeatzaileak baliabideak nabigatzaile honetan gordetzen ditu. Hortik ireki, partekatu, webean txertatu, hodeiko fitxategia aldatzen denean eguneratu eta behar ez dituzunean ezabatu ditzakezu.</p></section><section aria-labelledby="help-faq"><h3 class="about-section-title" id="help-faq" tabindex="-1">FAQ: pribatutasuna eta datuak</h3><ul><li><strong>Non gordetzen dira baliabideak?</strong> Gailu bakoitzeko nabigatzailearen biltegiratze lokalean.</li><li><strong>Nire baliabideak GitHubera edo programara igotzen dira?</strong> Ez. Zuk ZIP/ELPX/H5P fitxategia zure hodeian ostatatzen duzu. Bisoreak deskargatu eta nabigatzailean irekitzen du soilik.</li><li><strong>Datuak hirugarrenei bidaltzen zaizkie?</strong> Ez. Zuk adierazitako esteka publikotik ZIP/ELPX/H5P fitxategia deskargatzea baino ez da egiten.</li><li><strong>Zer gertatzen da nabigatzaileko datuak ezabatzen baditut edo gailua aldatzen badut?</strong> Baliabide lokalak desagertu egiten dira nabigatzaile/gailu horretan.</li><li><strong>Nork ikus dezake baliabidea?</strong> Bisorearen esteka duenak eta fitxategiaren esteka publikorako sarbidea duenak.</li><li><strong>Nola eguneratzen da baliabide bat?</strong> Ordezkatu fitxategia hodeian aurrekoa ezabatu gabe; partekatutako esteka irekitzen duen edozein erabiltzailek jakinarazpena jasoko du baliabidea eguneratzeko.</li></ul></section>'
      },
      error: {
        driveTooLarge: 'Fitxategia handiegia da eta Google Drivek deskargak mugatzen ditu. Saiatu Nextcloud, Dropbox edo beste zerbitzu batekin.',
        loadZip: 'Ezin izan da ZIPa kargatu.',
        corruptZip: 'ZIP/ELPX/H5P fitxategia hondatuta edo osatu gabe dago.',
        restricted: 'Baliabide hau ez dago eskuragarri data-murrizketengatik.',
        embedNotAllowed: 'Web-ean txertatzea ez dago baimenduta baliabide honetarako.',
        popupBlocked: 'Nabigatzaileak aurrebistaren leihoa blokeatu du. Baimendu popup leihoak gune honetarako eta saiatu berriro.',
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
        connecting: 'Konektatzen',
        downloadingZip: 'ZIPa deskargatzen...',
        restrictedReady: 'Baliabidea dataren arabera mugatuta dago. Esteka prest dago.',
        unpacking: 'Deskonprimatzen...',
        saving: 'Nabigatzailean gordetzen...',
        copySuccess: 'Esteka kopiatuta.'
      },
      documentViewer: {
        documentsTitle: 'Dokumentuak',
        hideList: 'Zerrenda ezkutatu',
        showList: 'Zerrenda erakutsi',
        loadingPdf: 'PDFa kargatzen...',
        failedPdf: 'Ezin izan da PDF hau bistaratu.',
        downloadPdf: 'PDFa deskargatu',
        prevPage: 'Aurrekoa',
        nextPage: 'Hurrengoa',
        zoomIn: 'Handitu',
        zoomOut: 'Txikitu',
        fitWidth: 'Zabalera doitu',
        pageLabel: '{current} / {total} orria',
        missingPdfEngine: 'Ezin izan da PDF bisorea kargatu.',
        loadingDocx: 'DOCX kargatzen...',
        failedDocx: 'Ezin izan da DOCX hau bistaratu.',
        downloadDocx: 'DOCX deskargatu',
        missingDocxEngine: 'Ezin izan da DOCX bisorea kargatu.'
      },
      folderViewer: {
        title: 'Karpeta modua',
        subtitle: 'Arakatu karpetak eta azpikarpetak fitxategi motaren araberako ikonoekin.',
        searchPlaceholder: 'Bilatu fitxategiak...',
        searchResults: 'Bilaketaren emaitzak',
        selectAll: 'Ikusgai daudenak hautatu',
        clearSelection: 'Hautapena garbitu',
        openSelected: 'Hautatutakoak ireki',
        downloadAll: 'Deskargatu dena',
        downloadSelected: 'Hautapena deskargatu',
        downloadVisible: 'Ikusgai dagoen zerrenda deskargatu',
        noResults: 'Ez dago erakusteko fitxategirik.',
        selectedCount: '{count} hautatuta',
        openFile: 'Ireki',
        downloadFile: 'Deskargatu',
        contextOpen: 'Ireki',
        contextDownload: 'Deskargatu',
        contextDownloadVisible: 'Ikusgai dagoen zerrenda deskargatu',
        folder: 'Karpeta',
        filesWord: 'fitxategi'
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
        eta: 'Estimated download time: --',
        etaPrefix: 'Estimated download time: ',
        downloadedPrefix: 'Downloaded: ',
        note: 'Next times, viewing will be instant.'
      },
      header: {
        eyebrow: 'Materials in ZIP',
        title: 'Web-ZIP Viewer',
        help: 'Help',
        settings: 'Settings',
        settingsHint: 'Set the resource availability',
        language: 'Language',
        languageHint: 'Change language',
        theme: 'Theme',
        themeHint: 'Change theme',
        themeAuto: 'Auto',
        themeLight: 'Light',
        themeDark: 'Dark',
        subtitle: 'Create, preview, and share digital educational resources. Share the link and your resource can be opened directly in any browser.'
      },
      settings: {
        title: 'Visibility settings',
        languageTitle: 'Language',
        restrictTitle: 'Date access',
        restrictHint: 'Here you can define when the resource will be visible and which actions will be available in the resource manager.',
        restrictToggle: 'Limit access',
        startLabel: 'Start',
        endLabel: 'End',
        hasStart: 'Enable resource visibility start date',
        neverExpires: 'Enable resource visibility end date',
        enforceEndDuringView: 'Disable resource viewing when the end date is reached while it is open',
        warningMinutesLabel: 'Prior warning in minutes (0 for no warning)',
        warningMessageLabel: 'Warning message',
        warningMessagePlaceholder: 'Access time will end in {minutes} minutes.',
        warningMessageDefault: 'Access time will end in {minutes} minutes.',
        periodHint: 'The resource will only be visible within this time range.',
        periodHintLiveEndOn: 'Viewing will be disabled when the end date is reached.',
        periodHintLiveEndOff: 'Viewing will not be automatically disabled when the end date is reached.',
        periodHintWarningOn: 'A warning will appear {minutes} minutes earlier.',
        periodHintWarningOff: 'There will be no prior warning.',
        summaryLiveEndOn: 'Disables at end time',
        summaryLiveEndOff: 'No auto-disable',
        summaryWarningOn: 'Warning: {minutes} min before',
        summaryWarningOff: 'No prior warning',
        summaryNoRestrictions: 'Resource without visibility restrictions.',
        summaryAllowedActions: 'Allowed actions in the resource manager: {actions}',
        summaryNoActions: 'none',
        summaryBlockedActions: 'Will not be allowed: {actions}',
        summaryNoBlockedActions: 'none',
        datesTitle: 'Visibility period',
        actionsTitle: 'Actions available while the resource is visible',
        allowShare: 'Share',
        allowEmbed: 'Embed',
        allowDownload: 'Download'
      },
      restrictionModal: {
        title: 'Access restricted',
        body: 'This resource is not available right now.',
        rangeStart: 'Available from: {date}',
        rangeEnd: 'Until: {date}',
        rangeNoStart: 'No start date',
        rangeNoEnd: 'No end date',
        countdown: 'Available in: {time}'
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
      footer: {
        issues: 'Problems and suggestions',
        analytics: {
          visits: 'Visits',
          today: 'Today',
          details: 'Stats'
        }
      },
      tab: {
        home: 'Home',
        downloadZip: 'Options and downloads',
        manager: 'Resource manager',
        help: 'Help'
      },
      publish: {
        title: 'Publish a resource',
        subtitle: 'Choose how you want to start.',
        back: 'Back to start',
        choice: {
          zipper: {
            title: 'Create a ZIP (web, PDF, or DOCX)',
            note: 'Create a ZIP from local files or from HTML. It can also include PDF and DOCX files.',
            restrictHint: 'You can also apply date-based access limits.'
          },
          main: {
            title: 'Create link',
            subtitle: 'I already have the {type} in the cloud',
            subtitleAny: 'I already have a ZIP, ELPX, or H5P in the cloud with link',
            types: {
              any: 'ZIP, ELPX, or H5P',
              zip: 'ZIP',
              elpx: 'ELPX',
              h5p: 'H5P'
            },
            note: 'Paste the public link and create the viewer link.',
            secondaryHtml: 'If you use an eXeLearning .elpx, you can open it here too <span class="info-dot" data-i18n-aria-label="publish.choice.main.elpxTooltip" aria-label="What is ELPX?">?<span class="info-dot__tooltip" role="tooltip" data-i18n-html="publish.choice.main.elpxTooltipHtml">An .elpx file is an eXeLearning project that internally uses the ZIP format, which allows the viewer to access its content and display it correctly.</span></span>',
            elpxTooltip: 'What is ELPX?',
            elpxTooltipHtml: 'An .elpx file is an eXeLearning project that internally uses the ZIP format, which allows the viewer to access its content and display it correctly.'
          }
        },
        flow: {
          uploadTitle: 'Load resource'
        },
        quick: {
          optionALabel: 'Option A',
          optionAText: 'If your resource is on your computer (files and folders), copied from an AI tool (HTML code), or if you need to apply dates or other restrictions, upload it or paste it here.',
          optionBLabel: 'Option B',
          optionBText: 'If you already have a ZIP, ELPX, or H5P shared in the cloud (Drive, Dropbox, Nextcloud, etc.) with a public link, paste the address directly here.',
          intro: 'Choose one of these two options:<br><br><strong>Option A:</strong> If your digital educational resource is in folders, files, or HTML code, or if you need to set access dates or other restrictions, load it first in the top area.<br><br><strong>Option B:</strong> If you already have a ZIP, ELPX, or H5P with a public link in your cloud storage service (Drive, Dropbox, Nextcloud, etc.) and you don’t need to modify it, paste that address in «Option B».',
          newResource: 'Reset',
          newResourceTooltip: 'Reset the app to add new resources or switch to the other option.',
          files: {
            title: 'Load files or folders',
            dropTitle: 'Drag the folder or files here',
            loadedTitle: 'Upload complete',
            loadedHint: 'You can drag or choose other files again, or continue below to configure the resource.',
            dropHint: 'The ZIP creation option will open directly.',
            folder: 'Choose folder',
            files: 'Choose files'
          },
          html: {
            title: 'Have HTML code? Paste it here',
            placeholder: '<!doctype html>...',
            apply: 'Use this HTML'
          },
          fastDownload: 'Quick download',
          fastDownloadDetail: 'skip options and download the resource with the following restrictions:',
          fastDownloadTooltip: 'Generates the file and downloads it directly, skipping both the options screen and the preview. Any visibility restrictions configured in settings are automatically applied to the downloaded file.',
          changeRestrictions: 'Change restrictions'
        }
      },
      tabs: {
        label: 'Sections'
      },
      main: {
        subtitle: 'If your resource is already in ZIP, ELPX, H5P, or SCORM 1.2 (in ZIP) format and hosted on a service with a <strong>public link</strong> (Drive, Dropbox, etc.), paste the link here to generate the viewer link.',
        form: {
          title: 'I already have a ZIP, ELPX, or H5P in the cloud with link',
          step: 'Paste the public ZIP link (or .elpx/.h5p) in Option B and click “Create link”.',
          placeholder: 'Paste the public ZIP, .elpx, or .h5p link here (also valid if it includes PDF or DOCX)',
          submit: 'Create link'
        },
        output: {
          title: 'Shareable link',
          step: 'Share this link so others can view your resource.',
          placeholder: 'Shareable link',
          copy: 'Copy link',
          qr: 'QR',
          copyTooltip: 'Copy link',
          qrTooltip: 'QR (great for projecting or printing)',
          embedTooltip: 'Embed in a website (generates an iframe ready to paste)',
          openTooltip: 'Open preview',
          embed: 'Embed in a website',
          open: 'Open preview'
        }
      },
      service: {
        drive: 'Google Drive',
        dropbox: 'Dropbox',
        box: 'Box.com',
        nextcloud: 'Nextcloud',
        github: 'GitHub',
        other: 'Other services',
        drivePlaceholder: 'https://drive.google.com/...',
        dropboxPlaceholder: 'https://www.dropbox.com/...',
        boxPlaceholder: 'https://app.box.com/s/...',
        nextcloudPlaceholder: 'https://your-server/s/...',
        githubPlaceholder: 'https://github.com/user/repo/archive/refs/heads/main.zip',
        otherPlaceholder: 'https://server.com/file.zip'
      },
      manager: {
        title: 'Saved resources',
        subtitle: 'Manage the space used by materials stored in this browser.',
        deleteAll: 'Delete all resources',
        deleteAllConfirm: 'Are you sure you want to delete all resources saved in this browser? This action cannot be undone.',
        deleteAllHelp: 'Deletes all resources saved in this browser.',
        savedAt: 'Saved:',
        checkUpdates: 'Check updates',
        checkUpdatesHelp: 'Check whether ZIPs changed in the cloud.',
        checkUpdatesModalTitle: 'Check updates',
        checkingUpdates: 'Checking updates...',
        checkUpdatesNote: 'You can close this window. The check will continue in the background.',
        checkUpdatesProgress: '{done} of {total}',
        checkUpdatesDoneSummary: 'Updates: {changed} of {total}.',
        checkUpdatesNone: 'No saved resources.',
        checkUpdatesDone: 'Check complete.',
        checkUpdatesUnavailable: 'Cannot check without the backend configured.',
        stats: {
          used: 'Space used',
          total: 'Total space',
          count: 'Saved resources'
        },
        sort: {
          label: 'Sort by',
          title: 'Title',
          date: 'Date',
          start: 'Start',
          size: 'Size',
          dirAsc: 'Ascending',
          dirDesc: 'Descending',
          dirHelp: 'Change sort direction.'
        },
        settings: {
          open: 'Cleanup settings',
          modalTitle: 'Cleanup settings',
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
          qr: 'QR',
          embed: 'Embed in a website',
          edit: 'Edit title',
          download: 'Download file',
          update: 'Update',
          updating: 'Updating...',
          updated: 'Updated'
        },
        editPrompt: 'Resource title',
        empty: 'No saved resources in this browser.',
        siteNoUrl: 'Site without URL',
        noDate: 'no date'
      },
      badges: {
        scheduled: 'Scheduled',
        opening: 'Start: {date}',
        closing: 'End: {date}',
        updateAvailable: 'Update available',
        updatedAt: 'Updated: {date}'
      },
      updates: {
        title: 'New version available',
        body: 'This resource changed in the cloud. You can update it now.',
        action: 'Update',
        dismiss: 'Not now'
      },
      zipper: {
        title: 'Create ZIP for the viewer',
        summary: {
          title: 'Summary of loaded content'
        },
        options: {
          title: 'Options',
          availabilityLabel: 'Configure resource availability',
          availabilityEdit: 'Change settings',
          availabilityInfo: 'Define when the resource will be visible and which actions will be available in the resource manager.'
        },
        panel: {
          configTitle: 'Resource settings',
          stateTitle: 'Resource status',
          actionsTitle: 'Actions',
          startLabel: 'Start',
          endLabel: 'End',
          permissionsLabel: 'Permissions',
          startImmediate: 'Immediate',
          noEnd: 'No end date',
          stateAvailable: 'Resource available',
          stateAvailableHelp: 'The resource can be opened right now.',
          stateAvailableUntil: 'Available until {date}.',
          stateScheduled: 'Waiting to open',
          stateScheduledHelp: 'It will open on {date}.',
          stateClosed: 'Resource unavailable',
          stateClosedHelp: 'Availability ended on {date}.'
        },
        accordion: {
          filesTitle: 'Does your resource have files or a ready ZIP/ELPX/H5P? Load it here'
        },
        subtitle: {
          item1: 'To publish your resource, put all files in a folder and compress it into a <strong>.zip</strong> file. It can contain web pages and/or one or more <strong>PDF</strong> files.',
          item2: 'If your resource was made with <strong>eXeLearning 3 or later</strong>, you can use the <strong>.elpx</strong> file directly.',
          item3: 'If you use <strong>eXeLearning 2.x</strong>, export the project to <strong>ZIP</strong> from the program and continue with <strong>“I already have a ZIP”</strong>.'
        },
        exe: {
          tooltip: 'eXeLearning: in version 3+ you can use a .elpx directly (it’s already a ZIP). Version 2.x: File > Export > Website > Compressed ZIP file. Version 3.x: File > Download as > Website.',
          tooltipHtml: '<strong>eXeLearning:</strong><br>• Version 3+: you can use the <code>.elpx</code> file directly (it’s already a ZIP).<br>• Version 2.x: File &gt; Export &gt; Website &gt; Compressed ZIP file.<br>• Version 3.x: File &gt; Download as &gt; Website.'
        },
        step1: {
          title: 'Add your files',
          note: 'Drag the folder or select files using the buttons.'
        },
        dropzone: {
          title: 'Drop the folder or files here',
          hint: 'Internal folders are preserved.',
          folder: 'Choose folder',
          files: 'Choose files'
        },
        status: {
          empty: 'No files selected.',
          filesReady: 'Files found: {count}.',
          ready: 'Ready to create the ZIP.',
          readyHint: 'Prepare the ZIP to get your file.',
          selectFirst: 'Select files or a folder first.',
          previewSelectFirst: 'To preview, select files or paste HTML.',
          previewPreparing: 'Preparing local preview...',
          previewOpened: 'Preview opened in a new tab.',
          previewFailed: 'Could not open preview.',
          engineMissing: 'ZIP engine could not be loaded.',
          creating: 'Creating ZIP...',
          downloaded: 'ZIP downloaded. Upload the ZIP to your cloud, share it so everyone can view it, and paste the link in Option B.',
          failed: 'Could not create the ZIP. Check the files.',
          created: {
            html: 'ZIP created: web HTML viewer ready. Upload the ZIP to your cloud, share it so everyone can view it, and paste the link in Option B.',
            documents: 'ZIP created: document viewer ready. Upload the ZIP to your cloud, share it so everyone can view it, and paste the link in Option B.',
            files: 'ZIP created: file viewer ready. Upload the ZIP to your cloud, share it so everyone can view it, and paste the link in Option B.'
          }
        },
        step2: {
          title: 'Download the ZIP',
          titleDynamic: 'Download the {type}',
          detail: 'A file will download that you can upload to Drive, Dropbox, Nextcloud, etc.',
          forceFolderLabel: 'Force folder viewer',
          forceFolderNote: 'If you enable this option, the ZIP will open in file explorer mode: you will see content as files organized in folders, even when it includes HTML or documents.',
          forceFolderTooltip: 'More information',
          forceFolderTooltipHtml: 'If you enable this option, the ZIP will open in file explorer mode: you will see content as files organized in folders, even when it includes HTML or documents.<br><br>If you do not enable it, the app will automatically detect which viewer type to use.<br><br>If you are not sure, leave it unchecked.'
        },
        zipName: {
          label: 'ZIP name',
          placeholder: 'my_resource',
          default: 'my_resource'
        },
        resourceTitle: {
          label: 'Resource title',
          placeholder: 'Leave it empty to use the resource title',
          toggleLabel: 'Set a title for the resource (current title: {title})',
          currentEmpty: 'no title'
        },
        build: 'Create and download ZIP',
        buildDynamic: 'Create and download {type}',
        html: {
          title: 'No files but you have the HTML code? Paste it here',
          note: 'Paste the full HTML and the viewer will create a ZIP with an <code>index.html</code> ready to download.',
          placeholder: '<!doctype html>...',
          build: 'Create ZIP from HTML',
          status: {
            ready: 'Ready to create the ZIP from your HTML.',
            reactDetected: 'This content looks like React/JSX (not HTML). Copy the prompt and paste it into your AI chat to convert it to HTML.',
            empty: '',
            creating: 'Creating ZIP...',
            downloaded: 'ZIP downloaded. Upload the ZIP to your cloud, share it so everyone can view it, and paste the link in Option B.',
            failed: 'Could not create the ZIP. Check the HTML.'
          }
        },
        restrict: {
          title: 'Do you already have a ZIP, ELPX, or H5P and want to add visibility restrictions? Load it here',
          note: 'Load your ZIP, ELPX, or H5P and the viewer will add restrictions. Then upload it to Drive, Dropbox, etc.',
          lockedText: 'To use this option, first enable the resource visibility limit.',
          lockedAction: 'Enable limit',
          lockedStatus: '',
          pick: 'Select ZIP',
          apply: 'Apply restrictions and download',
          status: {
            ready: '',
            working: 'Applying restrictions...',
            done: '{type} ready with restrictions. Upload it to your cloud, share it so everyone can view it, and paste the link in Option B.',
            saved: '{type} saved. Upload it to your cloud, share it so everyone can view it, and paste the link in Option B.',
            failed: 'Could not modify the ZIP. Check the file.'
          },
          
          summaryTitle: 'Access limited by dates'
        },
        help: {
          inline: 'If you already created a ZIP, ELPX, or H5P file and shared it on a service with a public link, go to Option B.',
          previewTitle: 'Preview the resource before downloading it (optional)',
          nextStepText: 'The next step is to upload your file to the cloud with a public link. Then, in Option B, paste that link and create the share link.',
          previewAction: 'Preview',
          previewApplyRestrictions: 'Apply restrictions in preview',
          previewApplyRestrictionsNote: 'Enable it to check how the resource opens and closes based on the configured dates.',
          previewHideResource: 'Preview as hidden resource',
          previewOpeningBlocked: 'This resource is not visible right now in the preview. Disable this option if you want to see how it will look when it is open. Leave it enabled if you want to see how it looks when it is not visible.',
          previewApplyRestrictionsInfo: 'More information',
          previewApplyRestrictionsInfoHtml: 'Use it to check how the resource opens and closes based on the configured dates.',
          goTab: 'Go to Option B to paste the public link'
        }
      },
      html: {
        title: 'Choose the initial HTML',
        subtitle: 'index.html was not found. Select the HTML file you want to open first.',
        confirm: 'Use this HTML'
      },
      embed: {
        title: 'Embed in a website',
        subtitle: 'Copy and paste this HTML code into your website to embed your resource.',
        copy: 'Copy code',
        fallback: {
          title: 'Cannot open embedded',
          subtitle: 'Your browser or the host page is blocking the required storage. Open the resource in a new tab.',
          open: 'Open in a new tab'
        }
      },
      reactPrompt: {
        title: 'This looks like React',
        subtitle: 'This content looks like React/JSX (not HTML). Copy this prompt and paste it into your AI chat so it converts it to HTML.',
        prompt: 'Convert this React/JSX code into a single `index.html` that works when opened directly in the browser (only HTML, CSS and JavaScript). Return only the full contents of the HTML file.',
        copy: 'Copy prompt'
      },
      about: {
        title: 'Help',
        intro: 'Quick guide to publish, share, and manage resources in the viewer.',
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
          item3: 'Empty, damaged, or incomplete ZIPs that cannot be opened properly.'
        },
        how: {
          title: 'How it works',
          step1: 'Prepare your resource as a folder with web pages (HTML) and compress it into a ZIP. You can do this with the “Create a ZIP” option.',
          step2: 'Upload the ZIP to a service with a public link (Google Drive, Dropbox, Nextcloud, GitHub…).',
          step3: 'Share the file so anyone with the link can view it.',
          step4: 'Copy the URL and paste it into the “Paste the public link here” field.',
          step5: 'The share link is permanent, so you can distribute it to your students.'
        },
        drive: {
          title: 'Important about Google Drive',
          note: 'Google Drive limits direct downloads of large files (approx. 25 MB). If your ZIP exceeds that size, it may fail. Dropbox, Nextcloud and other services usually allow larger files without that limit.'
        },
        body: '<nav class="about-index" data-help-nav aria-label="Help index"><p class="about-index__title">Index</p><ul><li><a href="#help-goal">Goal</a></li><li><a href="#help-route">Quick sharing route</a></li><li><a href="#help-tabs">Work tabs</a></li><li><a href="#help-viewer">Which viewer is created automatically</a></li><li><a href="#help-options">Options before download</a></li><li><a href="#help-availability">Availability and actions</a></li><li><a href="#help-manager">Resource manager</a></li><li><a href="#help-faq">FAQ: privacy and data</a></li></ul></nav><section aria-labelledby="help-goal"><h3 class="about-section-title" id="help-goal" tabindex="-1">Goal</h3><p>Share resources with your students in a simple way: prepare the material, generate the link, and distribute it.</p></section><section aria-labelledby="help-route"><h3 class="about-section-title" id="help-route" tabindex="-1">Quick sharing route</h3><ol class="about-steps"><li>In <strong>Option A</strong>, load your resource (folders, files, or ZIP/ELPX/H5P) or paste the HTML code.</li><li>Review the summary and, if needed, adjust <strong>Options</strong> (title, availability, and force folder viewer).</li><li>In <strong>Options</strong>, create the final file. Then upload it to your cloud with a public link and, in <strong>Option B</strong>, paste that address.</li></ol><p>If you already have the ZIP, ELPX, or H5P in the cloud with a public link, go to <strong>Option B</strong> and paste the address.</p></section><section aria-labelledby="help-tabs"><h3 class="about-section-title" id="help-tabs" tabindex="-1">Work tabs</h3><ul><li><strong>Home</strong>: contains both parts of the flow: <strong>Option A</strong> and <strong>Option B</strong>.</li><li><strong>Resource manager</strong>: open, copy, embed, update, and delete resources saved in this browser.</li></ul></section><section aria-labelledby="help-viewer"><h3 class="about-section-title" id="help-viewer" tabindex="-1">Which viewer is created automatically</h3><p>The app detects the content and chooses the most suitable viewer:</p><ul><li><strong>Web viewer</strong>: for resources with HTML pages and SCORM 1.2 packages.</li><li><strong>H5P viewer</strong>: for <code>.h5p</code> content, both standalone and inside ZIP/ELPX/H5P.</li><li><strong>Document viewer</strong>: for PDF, DOCX, TXT, MD, and CSV files (including formula rendering in Markdown).</li><li><strong>Folder viewer</strong>: to browse folders and files of any type.</li></ul><p>You can see the app working with these examples:</p><ul><li><a href="https://visor-webzip.github.io/?key=NO9-KQ_Vkmi6&view=full&entry=__vwz_folder_index.html" target="_blank" rel="noopener">Folder viewer</a></li><li><a href="https://visor-webzip.github.io/?key=crBAg-o4BARB&view=full&entry=tetris%2Findex.html" target="_blank" rel="noopener">Web viewer</a></li><li><a href="https://visor-webzip.github.io/?key=z3loPNMOj1pW&view=full&entry=__vwz_docs_index.html" target="_blank" rel="noopener">Document viewer</a></li><li><a href="https://visor-webzip.github.io/?key=sFUKNJkh0Joq&view=full&entry=__vwz_h5p_index.html" target="_blank" rel="noopener">H5P viewer</a></li></ul><p>We also recommend opening the <strong>Resource manager</strong> to review which actions are available for each example (share, embed, download, or update).</p></section><section aria-labelledby="help-options"><h3 class="about-section-title" id="help-options" tabindex="-1">Options before download</h3><ul><li><strong>Set a title for the resource</strong>: optional, to customize how it appears.</li><li><strong>Configure resource availability</strong>: optional, to decide when it can be opened and which actions are allowed.</li><li><strong>Force folder viewer</strong>: useful if you want it always shown as a file explorer.</li><li><strong>Preview</strong>: opens a temporary local view to check the result before upload.</li></ul></section><section aria-labelledby="help-availability"><h3 class="about-section-title" id="help-availability" tabindex="-1">Availability and actions</h3><p>In <strong>Options</strong> you can enable date-based availability and set start, optional end, and manager actions (share, embed, download) while the resource is accessible.</p><p>If you load an existing ZIP, ELPX, or H5P, you can also add or change these restrictions and preview the result before generating the final link.</p></section><section aria-labelledby="help-manager"><h3 class="about-section-title" id="help-manager" tabindex="-1">Resource manager</h3><p>The manager stores resources in this browser. From there you can open them, share them, embed them, update them when the cloud file changes, and delete them when no longer needed.</p></section><section aria-labelledby="help-faq"><h3 class="about-section-title" id="help-faq" tabindex="-1">FAQ: privacy and data</h3><ul><li><strong>Where are resources stored?</strong> In each device browser local storage.</li><li><strong>Are my resources uploaded to GitHub or this app?</strong> No. You host the ZIP/ELPX/H5P in your cloud storage. The viewer only downloads and opens it in the browser.</li><li><strong>Is data sent to third parties?</strong> No. Only the ZIP/ELPX/H5P download from the public link you provided.</li><li><strong>What happens if I clear browser data or switch device?</strong> Local resources disappear in that browser/device.</li><li><strong>Who can view the resource?</strong> Anyone with the viewer link and access to the public file link.</li><li><strong>How do I update a resource?</strong> Replace the file in the cloud without deleting the previous one; any user who opens the shared link will receive a notification to update the resource.</li></ul></section>'
      },
      error: {
        driveTooLarge: 'The file is too large and Google Drive limits downloads. Try Nextcloud, Dropbox, or another service.',
        loadZip: 'Could not load the ZIP.',
        corruptZip: 'The ZIP/ELPX/H5P file is corrupted or incomplete.',
        restricted: 'This resource is no longer available due to date restrictions.',
        embedNotAllowed: 'Embedding is not allowed for this resource.',
        popupBlocked: 'The browser blocked the preview window. Allow pop-ups for this site and try again.',
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
        connecting: 'Connecting',
        downloadingZip: 'Downloading ZIP...',
        restrictedReady: 'This resource is date-restricted. The link is ready.',
        unpacking: 'Unpacking...',
        saving: 'Saving in the browser...',
        copySuccess: 'Link copied.'
      },
      documentViewer: {
        documentsTitle: 'Documents',
        hideList: 'Hide list',
        showList: 'Show list',
        loadingPdf: 'Loading PDF...',
        failedPdf: 'Could not display this PDF.',
        downloadPdf: 'Download PDF',
        prevPage: 'Previous',
        nextPage: 'Next',
        zoomIn: 'Zoom in',
        zoomOut: 'Zoom out',
        fitWidth: 'Fit to width',
        pageLabel: 'Page {current} / {total}',
        missingPdfEngine: 'Could not load the PDF viewer.',
        loadingDocx: 'Loading DOCX...',
        failedDocx: 'Could not display this DOCX.',
        downloadDocx: 'Download DOCX',
        missingDocxEngine: 'Could not load the DOCX viewer.'
      },
      folderViewer: {
        title: 'Folder mode',
        subtitle: 'Browse folders and subfolders with icons by file type.',
        searchPlaceholder: 'Search files...',
        searchResults: 'Search results',
        selectAll: 'Select visible',
        clearSelection: 'Clear selection',
        openSelected: 'Open selected',
        downloadAll: 'Download all',
        downloadSelected: 'Download selection',
        downloadVisible: 'Download visible list',
        noResults: 'No files to show.',
        selectedCount: '{count} selected',
        openFile: 'Open',
        downloadFile: 'Download',
        contextOpen: 'Open',
        contextDownload: 'Download',
        contextDownloadVisible: 'Download visible list',
        folder: 'Folder',
        filesWord: 'files'
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
        eta: 'Geschätzte Downloadzeit: --',
        etaPrefix: 'Geschätzte Downloadzeit: ',
        downloadedPrefix: 'Heruntergeladen: ',
        note: 'Danach ist die Anzeige beim nächsten Mal sofort.'
      },
      header: {
        eyebrow: 'Materialien im ZIP',
        title: 'Web-ZIP-Viewer',
        help: 'Hilfe',
        settings: 'Einstellungen',
        settingsHint: 'Verfügbarkeit des Materials einstellen',
        language: 'Sprache',
        languageHint: 'Sprache ändern',
        theme: 'Design',
        themeHint: 'Design ändern',
        themeAuto: 'Automatisch',
        themeLight: 'Hell',
        themeDark: 'Dunkel',
        subtitle: 'Erstelle, prüfe in der Vorschau und teile digitale Bildungsressourcen. Teile den Link und deine Ressource kann direkt in jedem Browser geöffnet werden.'
      },
      settings: {
        title: 'Sichtbarkeitseinstellungen',
        languageTitle: 'Sprache',
        restrictTitle: 'Zugriff nach Datum',
        restrictHint: 'Hier kannst du festlegen, wann die Ressource sichtbar ist und welche Aktionen im Ressourcenmanager verfügbar sind.',
        restrictToggle: 'Zugriff begrenzen',
        startLabel: 'Start',
        endLabel: 'Ende',
        hasStart: 'Startdatum der Sichtbarkeit der Ressource aktivieren',
        neverExpires: 'Enddatum der Sichtbarkeit der Ressource aktivieren',
        enforceEndDuringView: 'Die Anzeige der Ressource beim Erreichen des Enddatums deaktivieren, waehrend sie geoeffnet ist',
        warningMinutesLabel: 'Vorabwarnung in Minuten (0 fuer keine Warnung)',
        warningMessageLabel: 'Warnhinweis',
        warningMessagePlaceholder: 'Die Zugriffszeit endet in {minutes} Minuten.',
        warningMessageDefault: 'Die Zugriffszeit endet in {minutes} Minuten.',
        periodHint: 'Die Ressource ist nur innerhalb dieses Zeitraums sichtbar.',
        periodHintLiveEndOn: 'Die Anzeige wird beim Erreichen des Enddatums deaktiviert.',
        periodHintLiveEndOff: 'Die Anzeige wird beim Erreichen des Enddatums nicht automatisch deaktiviert.',
        periodHintWarningOn: 'Es gibt {minutes} Minuten vorher eine Warnung.',
        periodHintWarningOff: 'Es gibt keine vorherige Warnung.',
        summaryLiveEndOn: 'Deaktiviert bei Endzeit',
        summaryLiveEndOff: 'Keine automatische Deaktivierung',
        summaryWarningOn: 'Warnung: {minutes} Min vorher',
        summaryWarningOff: 'Keine Vorwarnung',
        summaryNoRestrictions: 'Ressource ohne Sichtbarkeitsbeschraenkungen.',
        summaryAllowedActions: 'Erlaubte Aktionen im Ressourcenmanager: {actions}',
        summaryNoActions: 'keine',
        summaryBlockedActions: 'Nicht erlaubt: {actions}',
        summaryNoBlockedActions: 'keine',
        datesTitle: 'Sichtbarkeitszeitraum',
        actionsTitle: 'Aktionen, solange die Ressource sichtbar ist',
        allowShare: 'Teilen',
        allowEmbed: 'Einbetten',
        allowDownload: 'Herunterladen'
      },
      restrictionModal: {
        title: 'Zugriff eingeschränkt',
        body: 'Diese Ressource ist im Moment nicht verfügbar.',
        rangeStart: 'Verfügbar ab: {date}',
        rangeEnd: 'Bis: {date}',
        rangeNoStart: 'Kein Startdatum',
        rangeNoEnd: 'Kein Enddatum',
        countdown: 'Verfügbar in: {time}'
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
      footer: {
        issues: 'Probleme und Vorschläge',
        analytics: {
          visits: 'Besuche',
          today: 'Heute',
          details: 'Statistiken'
        }
      },
      tab: {
        home: 'Start',
        downloadZip: 'Optionen und Downloads',
        manager: 'Ressourcenverwaltung',
        help: 'Hilfe'
      },
      publish: {
        title: 'Ressource veröffentlichen',
        subtitle: 'Wähle, wie du starten möchtest.',
        back: 'Zurück zum Start',
        choice: {
          zipper: {
            title: 'ZIP erstellen (Web, PDF oder DOCX)',
            note: 'Erstelle ein ZIP aus lokalen Dateien oder aus HTML. Es kann auch PDF und DOCX enthalten.',
            restrictHint: 'Du kannst den Zugriff auch zeitlich begrenzen.'
          },
          main: {
            title: 'Link erstellen',
            subtitle: 'Ich habe {type} bereits in der Cloud',
            subtitleAny: 'Ich habe bereits eine ZIP-, ELPX- oder H5P-Datei in der Cloud mit Link',
            types: {
              any: 'ZIP, ELPX oder H5P',
              zip: 'ZIP',
              elpx: 'ELPX',
              h5p: 'H5P'
            },
            note: 'Füge den öffentlichen Link ein und erstelle den Viewer-Link.',
            secondaryHtml: 'Wenn du eine eXeLearning-.elpx nutzt, kannst du sie hier ebenfalls öffnen <span class="info-dot" data-i18n-aria-label="publish.choice.main.elpxTooltip" aria-label="Was ist ELPX?">?<span class="info-dot__tooltip" role="tooltip" data-i18n-html="publish.choice.main.elpxTooltipHtml">Eine .elpx-Datei ist ein eXeLearning-Projekt, das intern das ZIP-Format verwendet. Dadurch kann der Viewer auf den Inhalt zugreifen und ihn korrekt anzeigen.</span></span>',
            elpxTooltip: 'Was ist ELPX?',
            elpxTooltipHtml: 'Eine .elpx-Datei ist ein eXeLearning-Projekt, das intern das ZIP-Format verwendet. Dadurch kann der Viewer auf den Inhalt zugreifen und ihn korrekt anzeigen.'
          }
        },
        flow: {
          uploadTitle: 'Ressource laden'
        },
        quick: {
          optionALabel: 'Option A',
          optionAText: 'Wenn sich deine Ressource auf deinem Computer befindet (Dateien und Ordner), du sie aus einer KI kopiert hast (HTML-Code) oder Daten bzw. andere Einschränkungen anwenden musst, lade sie hier hoch oder füge sie hier ein.',
          optionBLabel: 'Option B',
          optionBText: 'Wenn du bereits eine ZIP-, ELPX- oder H5P-Datei in der Cloud (Drive, Dropbox, Nextcloud usw.) mit öffentlichem Link freigegeben hast, füge die Adresse direkt hier ein.',
          intro: 'Wähle eine der beiden Optionen:<br><br><strong>Option A:</strong> Wenn deine digitale Bildungsressource in Ordnern, Dateien oder als HTML-Code vorliegt oder du Zugriffszeiten bzw. andere Einschränkungen festlegen musst, lade sie zuerst im oberen Bereich.<br><br><strong>Option B:</strong> Wenn du bereits eine ZIP-, ELPX- oder H5P-Datei mit öffentlichem Link in deinem Cloud-Speicher (Drive, Dropbox, Nextcloud usw.) hast und sie nicht ändern musst, füge diese Adresse in «Option B» ein.',
          newResource: 'Zurücksetzen',
          newResourceTooltip: 'Setzt die Anwendung zurück, um neue Ressourcen hinzuzufügen oder die Option zu wechseln.',
          files: {
            title: 'Dateien oder Ordner laden',
            dropTitle: 'Ordner oder Dateien hierher ziehen',
            loadedTitle: 'Upload abgeschlossen',
            loadedHint: 'Du kannst erneut ziehen oder andere Dateien auswählen oder unten mit der Konfiguration der Ressource fortfahren.',
            dropHint: 'Die ZIP-Erstellung wird direkt geöffnet.',
            folder: 'Ordner wählen',
            files: 'Dateien wählen'
          },
          html: {
            title: 'HTML-Code vorhanden? Hier einfügen',
            placeholder: '<!doctype html>...',
            apply: 'Dieses HTML verwenden'
          },
          fastDownload: 'Schnelldownload',
          fastDownloadDetail: 'Optionen überspringen und Ressource mit den folgenden Einschränkungen herunterladen:',
          fastDownloadTooltip: 'Erstellt die Datei und lädt sie direkt herunter, ohne den Optionsbildschirm oder die Vorschau zu öffnen. Konfigurierte Sichtbarkeitsbeschränkungen aus den Einstellungen werden automatisch auf die heruntergeladene Datei angewendet.',
          changeRestrictions: 'Einschränkungen ändern'
        }
      },
      tabs: {
        label: 'Abschnitte'
      },
      main: {
        subtitle: 'Wenn deine Ressource bereits im ZIP-, ELPX-, H5P- oder SCORM-1.2-Format (in ZIP) mit <strong>öffentlichem Link</strong> verfügbar ist (Drive, Dropbox usw.), füge den Link hier ein, um den Viewer-Link zu erzeugen.',
        form: {
          title: 'Ich habe bereits eine ZIP-, ELPX- oder H5P-Datei in der Cloud mit Link',
          step: 'Füge den öffentlichen Link zur ZIP-Datei (oder .elpx/.h5p) in Option B ein und klicke auf „Link erstellen“.',
          placeholder: 'Füge hier den öffentlichen ZIP-, .elpx- oder .h5p-Link ein (auch gültig, wenn PDF oder DOCX enthalten ist)',
          submit: 'Link erstellen'
        },
        output: {
          title: 'Link zum Teilen',
          step: 'Teile diesen Link, damit andere deine Ressource sehen können.',
          placeholder: 'Link zum Teilen',
          copy: 'Link kopieren',
          qr: 'QR',
          copyTooltip: 'Link kopieren',
          qrTooltip: 'QR (ideal zum Projizieren oder Drucken)',
          embedTooltip: 'In Website einbetten (erstellt ein fertiges iframe zum Einfügen)',
          openTooltip: 'Vorschau öffnen',
          embed: 'In Website einbetten',
          open: 'Vorschau öffnen'
        }
      },
      service: {
        drive: 'Google Drive',
        dropbox: 'Dropbox',
        box: 'Box.com',
        nextcloud: 'Nextcloud',
        github: 'GitHub',
        other: 'Andere Dienste',
        drivePlaceholder: 'https://drive.google.com/...',
        dropboxPlaceholder: 'https://www.dropbox.com/...',
        boxPlaceholder: 'https://app.box.com/s/...',
        nextcloudPlaceholder: 'https://dein-server/s/...',
        githubPlaceholder: 'https://github.com/benutzer/repo/archive/refs/heads/main.zip',
        otherPlaceholder: 'https://server.com/datei.zip'
      },
      manager: {
        title: 'Gespeicherte Ressourcen',
        subtitle: 'Verwalte den Speicherplatz der in diesem Browser gespeicherten Materialien.',
        deleteAll: 'Alle Ressourcen löschen',
        deleteAllConfirm: 'Möchtest du wirklich alle in diesem Browser gespeicherten Ressourcen löschen? Diese Aktion kann nicht rückgängig gemacht werden.',
        deleteAllHelp: 'Löscht alle in diesem Browser gespeicherten Ressourcen.',
        savedAt: 'Gespeichert:',
        checkUpdates: 'Updates prüfen',
        checkUpdatesHelp: 'Prüft, ob sich ZIPs in der Cloud geändert haben.',
        checkUpdatesModalTitle: 'Updates prüfen',
        checkingUpdates: 'Updates werden geprüft...',
        checkUpdatesNote: 'Du kannst dieses Fenster schließen. Die Prüfung läuft im Hintergrund weiter.',
        checkUpdatesProgress: '{done} von {total}',
        checkUpdatesDoneSummary: 'Updates: {changed} von {total}.',
        checkUpdatesNone: 'Keine gespeicherten Ressourcen.',
        checkUpdatesDone: 'Prüfung abgeschlossen.',
        checkUpdatesUnavailable: 'Prüfung ohne Backend nicht möglich.',
        stats: {
          used: 'Belegter Speicher',
          total: 'Gesamtspeicher',
          count: 'Gespeicherte Ressourcen'
        },
        sort: {
          label: 'Sortieren nach',
          title: 'Titel',
          date: 'Datum',
          start: 'Beginn',
          size: 'Größe',
          dirAsc: 'Aufsteigend',
          dirDesc: 'Absteigend',
          dirHelp: 'Sortierreihenfolge wechseln.'
        },
        settings: {
          open: 'Bereinigungseinstellungen',
          modalTitle: 'Bereinigungseinstellungen',
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
          qr: 'QR',
          embed: 'In eine Website einbetten',
          edit: 'Titel bearbeiten',
          download: 'Datei herunterladen',
          update: 'Aktualisieren',
          updating: 'Wird aktualisiert...',
          updated: 'Aktualisiert'
        },
        editPrompt: 'Titel der Ressource',
        empty: 'Keine gespeicherten Ressourcen in diesem Browser.',
        siteNoUrl: 'Website ohne URL',
        noDate: 'ohne Datum'
      },
      badges: {
        scheduled: 'Geplant',
        opening: 'Beginn: {date}',
        closing: 'Ende: {date}',
        updateAvailable: 'Update verfügbar',
        updatedAt: 'Aktualisiert: {date}'
      },
      updates: {
        title: 'Neue Version verfügbar',
        body: 'Diese Ressource hat sich in der Cloud geändert. Du kannst jetzt aktualisieren.',
        action: 'Aktualisieren',
        dismiss: 'Jetzt nicht'
      },
      zipper: {
        title: 'ZIP für den Viewer erstellen',
        summary: {
          title: 'Zusammenfassung des geladenen Inhalts'
        },
        options: {
          title: 'Optionen',
          availabilityLabel: 'Verfügbarkeit der Ressource konfigurieren',
          availabilityEdit: 'Konfiguration ändern',
          availabilityInfo: 'Lege fest, wann die Ressource sichtbar ist und welche Aktionen im Ressourcenmanager verfügbar sind.'
        },
        panel: {
          configTitle: 'Ressourcenkonfiguration',
          stateTitle: 'Status der Ressource',
          actionsTitle: 'Aktionen',
          startLabel: 'Beginn',
          endLabel: 'Ende',
          permissionsLabel: 'Berechtigungen',
          startImmediate: 'Sofort',
          noEnd: 'Kein Enddatum',
          stateAvailable: 'Ressource verfügbar',
          stateAvailableHelp: 'Die Ressource kann im Moment geöffnet werden.',
          stateAvailableUntil: 'Verfügbar bis {date}.',
          stateScheduled: 'Wartet auf Freigabe',
          stateScheduledHelp: 'Sie wird am {date} geöffnet.',
          stateClosed: 'Ressource nicht verfügbar',
          stateClosedHelp: 'Die Verfügbarkeit endete am {date}.'
        },
        accordion: {
          filesTitle: 'Hat deine Ressource Dateien oder bereits eine ZIP/ELPX/H5P? Lade sie hier'
        },
        subtitle: {
          item1: 'Um deine Ressource zu veröffentlichen, lege alle Dateien in einen Ordner und komprimiere ihn zu einer <strong>.zip</strong>-Datei. Sie kann Webseiten und/oder eine oder mehrere <strong>PDF</strong>-Dateien enthalten.',
          item2: 'Wenn deine Ressource mit <strong>eXeLearning 3 oder höher</strong> erstellt wurde, kannst du die <strong>.elpx</strong>-Datei direkt verwenden.',
          item3: 'Wenn du <strong>eXeLearning 2.x</strong> nutzt, exportiere das Projekt als <strong>ZIP</strong> aus dem Programm und fahre mit der Option <strong>„Ich habe bereits ein ZIP“</strong> fort.'
        },
        exe: {
          tooltip: 'eXeLearning: In Version 3+ kannst du eine .elpx direkt verwenden (sie ist bereits ein ZIP). Version 2.x: Datei > Exportieren > Website > Komprimierte ZIP-Datei. Version 3.x: Datei > Herunterladen als > Website.',
          tooltipHtml: '<strong>eXeLearning:</strong><br>• Version 3+: Du kannst die <code>.elpx</code>-Datei direkt verwenden (sie ist bereits ein ZIP).<br>• Version 2.x: Datei &gt; Exportieren &gt; Website &gt; Komprimierte ZIP-Datei.<br>• Version 3.x: Datei &gt; Herunterladen als &gt; Website.'
        },
        step1: {
          title: 'Dateien hinzufügen',
          note: 'Ziehe den Ordner hierher oder wähle Dateien per Button.'
        },
        dropzone: {
          title: 'Ordner oder Dateien hier ablegen',
          hint: 'Interne Ordner bleiben erhalten.',
          folder: 'Ordner wählen',
          files: 'Dateien wählen'
        },
        status: {
          empty: 'Keine Dateien ausgewählt.',
          filesReady: 'Dateien gefunden: {count}.',
          ready: 'Bereit zum Erstellen des ZIP.',
          readyHint: 'Bereite das ZIP vor, um deine Datei zu erhalten.',
          selectFirst: 'Wähle zuerst Dateien oder einen Ordner aus.',
          previewSelectFirst: 'Für die Vorschau wähle Dateien aus oder füge HTML ein.',
          previewPreparing: 'Lokale Vorschau wird vorbereitet...',
          previewOpened: 'Vorschau in einem neuen Tab geöffnet.',
          previewFailed: 'Vorschau konnte nicht geöffnet werden.',
          engineMissing: 'ZIP-Engine konnte nicht geladen werden.',
          creating: 'ZIP wird erstellt...',
          downloaded: 'ZIP heruntergeladen. Lade die ZIP in deine Cloud hoch, teile sie, damit alle sie sehen können, und füge den Link in Option B ein.',
          failed: 'ZIP konnte nicht erstellt werden. Prüfe die Dateien.',
          created: {
            html: 'ZIP erstellt: Web-Viewer bereit. Lade die ZIP in deine Cloud hoch, teile sie, damit alle sie sehen können, und füge den Link in Option B ein.',
            documents: 'ZIP erstellt: Dokumenten-Viewer bereit. Lade die ZIP in deine Cloud hoch, teile sie, damit alle sie sehen können, und füge den Link in Option B ein.',
            files: 'ZIP erstellt: Datei-Viewer bereit. Lade die ZIP in deine Cloud hoch, teile sie, damit alle sie sehen können, und füge den Link in Option B ein.'
          }
        },
        step2: {
          title: 'ZIP herunterladen',
          titleDynamic: '{type} herunterladen',
          detail: 'Es wird eine Datei heruntergeladen, die du bei Drive, Dropbox, Nextcloud usw. hochladen kannst.',
          forceFolderLabel: 'Ordneransicht erzwingen',
          forceFolderNote: 'Wenn du diese Option aktivierst, wird das ZIP im Datei-Explorer-Modus geöffnet: Der Inhalt wird als in Ordnern organisierte Dateien angezeigt, auch wenn HTML oder Dokumente enthalten sind.',
          forceFolderTooltip: 'Mehr Informationen',
          forceFolderTooltipHtml: 'Wenn du diese Option aktivierst, wird das ZIP im Datei-Explorer-Modus geöffnet: Der Inhalt wird als in Ordnern organisierte Dateien angezeigt, auch wenn HTML oder Dokumente enthalten sind.<br><br>Wenn du es nicht aktivierst, erkennt das Programm automatisch, welcher Viewertyp verwendet werden soll.<br><br>Wenn du dir nicht sicher bist, aktiviere es nicht.'
        },
        zipName: {
          label: 'ZIP-Name',
          placeholder: 'mein_ressource',
          default: 'mein_ressource'
        },
        resourceTitle: {
          label: 'Titel der Ressource',
          placeholder: 'Wenn leer, wird der Ressourcentitel verwendet',
          toggleLabel: 'Titel fuer die Ressource festlegen (aktueller Titel: {title})',
          currentEmpty: 'kein Titel'
        },
        build: 'ZIP erstellen und herunterladen',
        buildDynamic: '{type} erstellen und herunterladen',
        html: {
          title: 'Keine Dateien, aber HTML-Code? Hier einfügen',
          note: 'Füge das vollständige HTML ein und der Viewer erstellt ein ZIP mit einer <code>index.html</code>, das sofort heruntergeladen werden kann.',
          placeholder: '<!doctype html>...',
          build: 'ZIP aus HTML erstellen',
          status: {
            ready: 'Bereit, ein ZIP aus deinem HTML zu erstellen.',
            reactDetected: 'Dieser Inhalt sieht nach React/JSX aus (nicht HTML). Kopiere den Prompt und füge ihn in deinen KI-Chat ein, um ihn in HTML umzuwandeln.',
            empty: '',
            creating: 'ZIP wird erstellt...',
            downloaded: 'ZIP heruntergeladen. Lade die ZIP in deine Cloud hoch, teile sie, damit alle sie sehen können, und füge den Link in Option B ein.',
            failed: 'ZIP konnte nicht erstellt werden. Prüfe das HTML.'
          }
        },
        restrict: {
          title: 'Hast du bereits eine ZIP-, ELPX- oder H5P-Datei und möchtest Sichtbarkeitsbeschränkungen hinzufügen? Lade sie hier',
          note: 'Lade dein ZIP, ELPX oder H5P und der Viewer fügt die Einschränkungen hinzu. Danach musst du es zu Drive, Dropbox usw. hochladen.',
          lockedText: 'Um diese Option zu nutzen, aktiviere zuerst die Sichtbarkeitsbegrenzung der Ressource.',
          lockedAction: 'Begrenzung aktivieren',
          lockedStatus: '',
          pick: 'ZIP auswählen',
          apply: 'Einschränkungen anwenden und herunterladen',
          status: {
            ready: '',
            working: 'Einschränkungen werden angewendet...',
            done: '{type} ist mit Einschränkungen bereit. Lade sie in deine Cloud hoch, teile sie, damit alle sie sehen können, und füge den Link in Option B ein.',
            saved: '{type} gespeichert. Lade sie in deine Cloud hoch, teile sie, damit alle sie sehen können, und füge den Link in Option B ein.',
            failed: 'ZIP konnte nicht geändert werden. Prüfe die Datei.'
          },
          
          summaryTitle: 'Zugriff zeitlich begrenzt'
        },
        help: {
          inline: 'Wenn du bereits eine ZIP-, ELPX- oder H5P-Datei erstellt und sie über einen Dienst mit öffentlichem Link geteilt hast, gehe zu Option B.',
          previewTitle: 'Ressource vor dem Herunterladen vorab ansehen (optional)',
          nextStepText: 'Der nächste Schritt ist, deine Datei mit öffentlichem Link in die Cloud hochzuladen. Danach füge diesen Link in Option B ein und erstelle den Freigabelink.',
          previewAction: 'Vorschau',
          previewApplyRestrictions: 'Einschränkungen in der Vorschau anwenden',
          previewApplyRestrictionsNote: 'Aktiviere dies, um zu prüfen, wie sich die Ressource gemäß den eingestellten Daten öffnet und schließt.',
          previewHideResource: 'Als ausgeblendete Ressource in der Vorschau zeigen',
          previewOpeningBlocked: 'Diese Ressource ist in der Vorschau im Moment nicht sichtbar. Deaktiviere diese Option, wenn du sehen möchtest, wie sie aussieht, wenn sie geöffnet ist. Lass sie aktiviert, wenn du sehen möchtest, wie sie aussieht, wenn sie nicht sichtbar ist.',
          previewApplyRestrictionsInfo: 'Mehr Informationen',
          previewApplyRestrictionsInfoHtml: 'Damit kannst du prüfen, wie sich die Ressource gemäß den eingestellten Daten öffnet und schließt.',
          goTab: 'Zu Option B gehen und öffentlichen Link einfügen'
        }
      },
      html: {
        title: 'Start-HTML auswählen',
        subtitle: 'index.html wurde nicht gefunden. Wähle die HTML-Datei, die zuerst geöffnet werden soll.',
        confirm: 'Dieses HTML verwenden'
      },
      embed: {
        title: 'In Website einbetten',
        subtitle: 'Kopiere diesen HTML-Code und füge ihn in deine Website ein, um deine Ressource einzubetten.',
        copy: 'Code kopieren',
        fallback: {
          title: 'Eingebettet nicht möglich',
          subtitle: 'Dein Browser oder die Host-Seite blockiert den benötigten Speicher. Öffne die Ressource in einem neuen Tab.',
          open: 'In neuem Tab öffnen'
        }
      },
      reactPrompt: {
        title: 'Das sieht nach React aus',
        subtitle: 'Dieser Inhalt sieht nach React/JSX aus (nicht HTML). Kopiere diesen Prompt und füge ihn in deinen KI-Chat ein, damit es in HTML umgewandelt wird.',
        prompt: 'Wandle diesen in React/JSX geschriebenen Code in eine einzige `index.html` um, die direkt im Browser funktioniert (nur HTML, CSS und JavaScript). Gib ausschließlich den vollständigen Inhalt der HTML-Datei zurück.',
        copy: 'Prompt kopieren'
      },
      about: {
        title: 'Hilfe',
        intro: 'Kurzanleitung zum Veröffentlichen, Teilen und Verwalten von Ressourcen im Viewer.',
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
          item3: 'Leere, beschädigte oder unvollständige ZIPs, die nicht korrekt geöffnet werden können.'
        },
        how: {
          title: 'So funktioniert es',
          step1: 'Bereite deine Ressource als Ordner mit Webseiten (HTML) vor und komprimiere sie als ZIP. Das geht mit der Option „ZIP erstellen“.',
          step2: 'Lade das ZIP zu einem Dienst mit öffentlichem Link hoch (Google Drive, Dropbox, Nextcloud, GitHub…).',
          step3: 'Teile die Datei, damit jeder mit dem Link sie sehen kann.',
          step4: 'Kopiere die URL und füge sie in das Feld „Füge hier den öffentlichen Link ein“ ein.',
          step5: 'Der Link ist dauerhaft, sodass du ihn an Lernende verteilen kannst.'
        },
        drive: {
          title: 'Wichtig zu Google Drive',
          note: 'Google Drive begrenzt direkte Downloads großer Dateien (ca. 25 MB). Wenn dein ZIP größer ist, kann es fehlschlagen. Dropbox, Nextcloud und andere Dienste erlauben meist größere Dateien ohne dieses Limit.'
        },
        body: '<nav class="about-index" data-help-nav aria-label="Hilfe-Inhalt"><p class="about-index__title">Inhalt</p><ul><li><a href="#help-ziel">Ziel</a></li><li><a href="#help-ablauf">Schneller Ablauf zum Teilen</a></li><li><a href="#help-tabs">Arbeits-Tabs</a></li><li><a href="#help-viewer">Welcher Viewer automatisch erstellt wird</a></li><li><a href="#help-optionen">Optionen vor dem Download</a></li><li><a href="#help-verfuegbarkeit">Verfügbarkeit und Aktionen</a></li><li><a href="#help-manager">Ressourcenverwaltung</a></li><li><a href="#help-faq">FAQ: Datenschutz und Daten</a></li></ul></nav><section aria-labelledby="help-ziel"><h3 class="about-section-title" id="help-ziel" tabindex="-1">Ziel</h3><p>Ressourcen einfach mit Lernenden teilen: Material vorbereiten, Link erzeugen und verteilen.</p></section><section aria-labelledby="help-ablauf"><h3 class="about-section-title" id="help-ablauf" tabindex="-1">Schneller Ablauf zum Teilen</h3><ol class="about-steps"><li>In <strong>Option A</strong> lädst du deine Ressource (Ordner, Dateien oder ZIP/ELPX/H5P) oder fügst HTML-Code ein.</li><li>Prüfe die Zusammenfassung und passe bei Bedarf <strong>Optionen</strong> an (Titel, Verfügbarkeit, Ordner-Viewer erzwingen).</li><li>In <strong>Optionen</strong> erstellst du die finale Datei. Danach lädst du sie mit öffentlichem Link in deine Cloud hoch und fügst sie in <strong>Option B</strong> ein.</li></ol><p>Wenn dein ZIP, ELPX oder H5P bereits mit öffentlichem Link in der Cloud liegt, gehe zu <strong>Option B</strong> und füge die Adresse ein.</p></section><section aria-labelledby="help-tabs"><h3 class="about-section-title" id="help-tabs" tabindex="-1">Arbeits-Tabs</h3><ul><li><strong>Start</strong>: enthält die zwei Teile des Ablaufs: <strong>Option A</strong> und <strong>Option B</strong>.</li><li><strong>Ressourcenverwaltung</strong>: im Browser gespeicherte Ressourcen öffnen, kopieren, einbetten, aktualisieren und löschen.</li></ul></section><section aria-labelledby="help-viewer"><h3 class="about-section-title" id="help-viewer" tabindex="-1">Welcher Viewer automatisch erstellt wird</h3><p>Das Programm erkennt den Inhalt und wählt den passenden Viewer:</p><ul><li><strong>Web-Viewer</strong>: für Ressourcen mit HTML-Seiten und SCORM-1.2-Paketen.</li><li><strong>H5P-Viewer</strong>: für <code>.h5p</code>-Inhalte, einzeln oder innerhalb von ZIP/ELPX/H5P.</li><li><strong>Dokumenten-Viewer</strong>: für PDF, DOCX, TXT, MD und CSV (inklusive Formel-Darstellung in Markdown).</li><li><strong>Ordner-Viewer</strong>: zum Durchsuchen von Ordnern und Dateien aller Typen.</li></ul><p>Du kannst das Programm mit diesen Beispielen in Aktion sehen:</p><ul><li><a href="https://visor-webzip.github.io/?key=NO9-KQ_Vkmi6&view=full&entry=__vwz_folder_index.html" target="_blank" rel="noopener">Ordner-Viewer</a></li><li><a href="https://visor-webzip.github.io/?key=crBAg-o4BARB&view=full&entry=tetris%2Findex.html" target="_blank" rel="noopener">Web-Viewer</a></li><li><a href="https://visor-webzip.github.io/?key=z3loPNMOj1pW&view=full&entry=__vwz_docs_index.html" target="_blank" rel="noopener">Dokumenten-Viewer</a></li><li><a href="https://visor-webzip.github.io/?key=sFUKNJkh0Joq&view=full&entry=__vwz_h5p_index.html" target="_blank" rel="noopener">H5P-Viewer</a></li></ul><p>Wir empfehlen dir außerdem, die <strong>Ressourcenverwaltung</strong> zu öffnen, um zu prüfen, welche Aktionen bei jedem Beispiel verfügbar sind (teilen, einbetten, herunterladen oder aktualisieren).</p></section><section aria-labelledby="help-optionen"><h3 class="about-section-title" id="help-optionen" tabindex="-1">Optionen vor dem Download</h3><ul><li><strong>Titel für die Ressource setzen</strong>: optional, um die Anzeige anzupassen.</li><li><strong>Ressourcenverfügbarkeit konfigurieren</strong>: optional, um festzulegen, wann sie geöffnet werden kann und welche Aktionen erlaubt sind.</li><li><strong>Ordner-Viewer erzwingen</strong>: sinnvoll, wenn die Ressource immer als Datei-Explorer gezeigt werden soll.</li><li><strong>Vorschau</strong>: öffnet eine temporäre lokale Ansicht, um das Ergebnis vor dem Hochladen zu prüfen.</li></ul></section><section aria-labelledby="help-verfuegbarkeit"><h3 class="about-section-title" id="help-verfuegbarkeit" tabindex="-1">Verfügbarkeit und Aktionen</h3><p>Unter <strong>Optionen</strong> kannst du Datumsverfügbarkeit aktivieren und Start, optionales Ende sowie Manager-Aktionen (teilen, einbetten, herunterladen) festlegen, solange die Ressource zugänglich ist.</p><p>Wenn du ein bereits erstelltes ZIP, ELPX oder H5P lädst, kannst du diese Einschränkungen ebenfalls hinzufügen oder ändern und das Ergebnis vor dem finalen Link in der Vorschau prüfen.</p></section><section aria-labelledby="help-manager"><h3 class="about-section-title" id="help-manager" tabindex="-1">Ressourcenverwaltung</h3><p>Die Verwaltung speichert Ressourcen in diesem Browser. Von dort kannst du sie öffnen, teilen, einbetten, bei Änderungen in der Cloud aktualisieren und bei Bedarf löschen.</p></section><section aria-labelledby="help-faq"><h3 class="about-section-title" id="help-faq" tabindex="-1">FAQ: Datenschutz und Daten</h3><ul><li><strong>Wo werden Ressourcen gespeichert?</strong> Im lokalen Browser-Speicher jedes Geräts.</li><li><strong>Werden meine Ressourcen auf GitHub oder in dieses Programm hochgeladen?</strong> Nein. Du hostest die ZIP/ELPX/H5P-Datei in deiner Cloud. Der Viewer lädt sie nur herunter und öffnet sie im Browser.</li><li><strong>Werden Daten an Dritte gesendet?</strong> Nein. Es erfolgt nur der Download der ZIP/ELPX/H5P-Datei über den von dir angegebenen öffentlichen Link.</li><li><strong>Was passiert, wenn ich Browserdaten lösche oder das Gerät wechsle?</strong> Lokale Ressourcen verschwinden in diesem Browser/Gerät.</li><li><strong>Wer kann die Ressource sehen?</strong> Wer den Viewer-Link und Zugriff auf den öffentlichen Dateilink hat.</li><li><strong>Wie aktualisiere ich eine Ressource?</strong> Ersetze die Datei in der Cloud, ohne die vorherige zu löschen; jeder Nutzer, der den geteilten Link öffnet, erhält eine Benachrichtigung zur Aktualisierung der Ressource.</li></ul></section>'
      },
      error: {
        driveTooLarge: 'Die Datei ist zu groß und Google Drive begrenzt Downloads. Versuche es mit Nextcloud, Dropbox oder einem anderen Dienst.',
        loadZip: 'ZIP konnte nicht geladen werden.',
        corruptZip: 'Die ZIP-/ELPX-/H5P-Datei ist beschädigt oder unvollständig.',
        restricted: 'Diese Ressource ist aufgrund der Datumsbeschränkung nicht mehr verfügbar.',
        embedNotAllowed: 'Einbetten ist für diese Ressource nicht erlaubt.',
        popupBlocked: 'Der Browser hat das Vorschaufenster blockiert. Erlaube Pop-ups für diese Website und versuche es erneut.',
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
        connecting: 'Verbinden',
        downloadingZip: 'ZIP wird heruntergeladen...',
        restrictedReady: 'Diese Ressource ist zeitlich eingeschränkt. Der Link ist bereit.',
        unpacking: 'Entpacken...',
        saving: 'Im Browser speichern...',
        copySuccess: 'Link kopiert.'
      },
      documentViewer: {
        documentsTitle: 'Dokumente',
        hideList: 'Liste ausblenden',
        showList: 'Liste anzeigen',
        loadingPdf: 'PDF wird geladen...',
        failedPdf: 'Dieses PDF konnte nicht angezeigt werden.',
        downloadPdf: 'PDF herunterladen',
        prevPage: 'Zurück',
        nextPage: 'Weiter',
        zoomIn: 'Vergrößern',
        zoomOut: 'Verkleinern',
        fitWidth: 'Auf Breite anpassen',
        pageLabel: 'Seite {current} / {total}',
        missingPdfEngine: 'PDF-Viewer konnte nicht geladen werden.',
        loadingDocx: 'DOCX wird geladen...',
        failedDocx: 'Dieses DOCX konnte nicht angezeigt werden.',
        downloadDocx: 'DOCX herunterladen',
        missingDocxEngine: 'DOCX-Viewer konnte nicht geladen werden.'
      },
      folderViewer: {
        title: 'Ordnermodus',
        subtitle: 'Durchsuche Ordner und Unterordner mit Symbolen nach Dateityp.',
        searchPlaceholder: 'Dateien suchen...',
        searchResults: 'Suchergebnisse',
        selectAll: 'Sichtbare auswählen',
        clearSelection: 'Auswahl löschen',
        openSelected: 'Auswahl öffnen',
        downloadAll: 'Alles herunterladen',
        downloadSelected: 'Auswahl herunterladen',
        downloadVisible: 'Sichtbare Liste herunterladen',
        noResults: 'Keine Dateien zum Anzeigen.',
        selectedCount: '{count} ausgewählt',
        openFile: 'Öffnen',
        downloadFile: 'Herunterladen',
        contextOpen: 'Öffnen',
        contextDownload: 'Herunterladen',
        contextDownloadVisible: 'Sichtbare Liste herunterladen',
        folder: 'Ordner',
        filesWord: 'Dateien'
      },
      common: {
        close: 'Schließen',
        cancel: 'Abbrechen',
        delete: 'Löschen'
      },
      units: ['B', 'KB', 'MB', 'GB']
    }
  };

  function replaceI18nMentions_(value, replacements) {
    if (typeof value === 'string') {
      var next = value;
      replacements.forEach(function (pair) {
        next = next.split(pair[0]).join(pair[1]);
      });
      return next;
    }
    if (Array.isArray(value)) {
      return value.map(function (item) {
        return replaceI18nMentions_(item, replacements);
      });
    }
    if (value && typeof value === 'object') {
      Object.keys(value).forEach(function (key) {
        value[key] = replaceI18nMentions_(value[key], replacements);
      });
    }
    return value;
  }

  function applyBoxMentions_() {
    var replacementsByLang = {
      es: [
        ['(Drive, Dropbox, Nextcloud, etc.)', '(Drive, Dropbox, Box.com, Nextcloud, etc.)'],
        ['(Drive, Dropbox, etc.)', '(Drive, Dropbox, Box.com, etc.)'],
        ['Drive, Dropbox, Nextcloud, GitHub…', 'Drive, Dropbox, Box.com, Nextcloud, GitHub…'],
        ['Dropbox, Nextcloud y otros servicios', 'Dropbox, Box.com, Nextcloud y otros servicios'],
        ['Nextcloud, Dropbox u otro servicio', 'Nextcloud, Dropbox, Box.com u otro servicio'],
        ['Drive, Dropbox o Nextcloud', 'Drive, Dropbox, Box.com o Nextcloud']
      ],
      ca: [
        ['(Drive, Dropbox, Nextcloud, etc.)', '(Drive, Dropbox, Box.com, Nextcloud, etc.)'],
        ['(Drive, Dropbox, etc.)', '(Drive, Dropbox, Box.com, etc.)'],
        ['Drive, Dropbox, Nextcloud, GitHub…', 'Drive, Dropbox, Box.com, Nextcloud, GitHub…'],
        ['Dropbox, Nextcloud i altres serveis', 'Dropbox, Box.com, Nextcloud i altres serveis'],
        ['Nextcloud, Dropbox o un altre servei', 'Nextcloud, Dropbox, Box.com o un altre servei']
      ],
      gl: [
        ['(Drive, Dropbox, Nextcloud, etc.)', '(Drive, Dropbox, Box.com, Nextcloud, etc.)'],
        ['(Drive, Dropbox, etc.)', '(Drive, Dropbox, Box.com, etc.)'],
        ['Drive, Dropbox, Nextcloud, GitHub…', 'Drive, Dropbox, Box.com, Nextcloud, GitHub…'],
        ['Dropbox, Nextcloud e outros servizos', 'Dropbox, Box.com, Nextcloud e outros servizos'],
        ['Nextcloud, Dropbox ou outro servizo', 'Nextcloud, Dropbox, Box.com ou outro servizo']
      ],
      eu: [
        ['(Drive, Dropbox, Nextcloud, etab.)', '(Drive, Dropbox, Box.com, Nextcloud, etab.)'],
        ['(Drive, Dropbox, etab.)', '(Drive, Dropbox, Box.com, etab.)'],
        ['Drive, Dropbox, Nextcloud, GitHub…', 'Drive, Dropbox, Box.com, Nextcloud, GitHub…'],
        ['Dropbox, Nextcloud eta beste zerbitzu batzuek', 'Dropbox, Box.com, Nextcloud eta beste zerbitzu batzuek'],
        ['Nextcloud, Dropbox edo beste zerbitzu batekin', 'Nextcloud, Dropbox, Box.com edo beste zerbitzu batekin']
      ],
      en: [
        ['(Drive, Dropbox, Nextcloud, etc.)', '(Drive, Dropbox, Box.com, Nextcloud, etc.)'],
        ['(Drive, Dropbox, etc.)', '(Drive, Dropbox, Box.com, etc.)'],
        ['Drive, Dropbox, Nextcloud, GitHub…', 'Drive, Dropbox, Box.com, Nextcloud, GitHub…'],
        ['Dropbox, Nextcloud and other services', 'Dropbox, Box.com, Nextcloud and other services'],
        ['Nextcloud, Dropbox, or another service', 'Nextcloud, Dropbox, Box.com, or another service']
      ],
      de: [
        ['(Drive, Dropbox, Nextcloud usw.)', '(Drive, Dropbox, Box.com, Nextcloud usw.)'],
        ['(Drive, Dropbox usw.)', '(Drive, Dropbox, Box.com usw.)'],
        ['Drive, Dropbox, Nextcloud, GitHub…', 'Drive, Dropbox, Box.com, Nextcloud, GitHub…'],
        ['Dropbox, Nextcloud und andere Dienste', 'Dropbox, Box.com, Nextcloud und andere Dienste'],
        ['Nextcloud, Dropbox oder einem anderen Dienst', 'Nextcloud, Dropbox, Box.com oder einem anderen Dienst']
      ]
    };

    Object.keys(replacementsByLang).forEach(function (lang) {
      if (!window.I18N[lang]) return;
      replaceI18nMentions_(window.I18N[lang], replacementsByLang[lang]);
    });
  }

  applyBoxMentions_();
})();
