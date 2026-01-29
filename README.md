# Visor Web-ZIP

![Release](https://img.shields.io/github/v/release/visor-webzip/visor-webzip.github.io?label=version&sort=semver)

Versión actual: v1.1.5

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

- El ZIP debe estar compartido publicamente (Drive con "Cualquiera con el enlace").
- El primer acceso descarga y descomprime el ZIP en el navegador.
- El limite del proxy es 100 MB (antes de base64). Si necesitas mas, hay que aumentar el limite en `gas/Code.js`.
- Si cambias el ZIP pero mantienes el mismo enlace, los alumnos deben volver a abrir la URL para actualizar el cache.
