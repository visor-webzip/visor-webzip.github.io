# Visor Web-ZIP

![Release](https://img.shields.io/github/v/release/visor-webzip/visor-webzip.github.io?label=version&sort=semver)

Versión actual: v1.3.1

Este proyecto permite mostrar contenidos web (eXeLearning, recursos IA, webs interactivas, etc.) empaquetados en un ZIP, sin tener que publicar en un hosting tradicional.

Este repositorio lo contiene todo:
- `gas/` contiene el backend de Google Apps Script.
- La web publica esta en la raiz del repositorio (GitHub Pages).

La solucion actual es:

- **Backend en Google Apps Script**: actua como proxy para descargar el ZIP y devolverlo al navegador.
- **Frontend en GitHub Pages**: descarga el ZIP, lo descomprime, guarda los archivos en el navegador (IndexedDB) y los sirve con Service Worker.

Enlaces:

- GitHub Pages: https://visor-webzip.github.io
- Repositorio: https://github.com/visor-webzip/visor-webzip.github.io
- Web App (Apps Script): (tu URL de despliegue)

## 1) Backend en Google Apps Script

### Pasos de despliegue

1. Entra en https://script.google.com y crea un nuevo proyecto.
2. Copia el contenido de `gas/Code.js` y pegalo en el editor.
3. Copia `gas/appsscript.json` en la vista de manifest.
4. Despliega como **Web app**:
   - Ejecutar como: **yo**
   - Quien tiene acceso: **Cualquiera**
5. Guarda la URL de despliegue (termina en `/exec`).

### Endpoints principales

- `?url=...&bundle=1`: devuelve el ZIP en base64 para que el navegador lo pueda descomprimir.
- `?url=...&json=1`: devuelve el `siteId` y el `indexPath` (legacy).

## 2) Frontend en GitHub Pages

1. Publica la raiz del repositorio en GitHub Pages.
2. Edita `config.js` y pega la URL de tu Web App.
3. Abre la pagina, pega el enlace al ZIP y se generara una URL fija con `?url=...`.
4. Al abrir esa URL, el navegador descarga el ZIP, lo guarda y muestra la web.

## Notas

- Para que el alumnado vea la web directamente en pantalla completa, comparte la URL con `&view=full`.

- Para **insertar el recurso en otra web (iframe)**, el visor incluye un modo `embed=1` que carga el material dentro de un iframe interno y envía la altura al contenedor mediante `postMessage` (autoajuste si la página permite scripts).

  - **Opción recomendada**: usar el botón **“Insertar en una web”** que aparece al generar el enlace (y también el icono equivalente en el gestor). Ese botón genera un código listo para copiar y pegar.
  - **Manual**: el modo embed se activa con:
    - `?url=...&embed=1`

  - **Ejemplo** (mínimo):

    ```html
    <iframe
      src="https://visor-webzip.github.io/?url=URL_DEL_ZIP_ENCODEADA&embed=1"
      style="width:100%;height:80vh;border:0"
      loading="lazy"
      allow="fullscreen"></iframe>
    ```

  - **Importante sobre iframes**:
    - En algunos navegadores/plataformas, un iframe de terceros puede limitar `IndexedDB`/service worker y la persistencia puede fallar (especialmente en entornos con privacidad estricta). En ese caso el visor mostrará un botón de **“Abrir en pestaña nueva”** como alternativa fiable.
    - Si la plataforma añade `sandbox` al iframe, puede romper scripts/navegación interna del recurso. Evítalo o configura permisos adecuados.

- El ZIP debe estar compartido publicamente (Drive con "Cualquiera con el enlace").
- El primer acceso descarga y descomprime el ZIP en el navegador.
- El limite del proxy es 100 MB (antes de base64). Si necesitas mas, hay que aumentar el limite en `gas/Code.js`.
- Si cambias el ZIP pero mantienes el mismo enlace, los alumnos deben volver a abrir la URL para actualizar el cache.
