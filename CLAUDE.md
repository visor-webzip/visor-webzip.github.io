# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Visor Web-ZIP** (v3.2.3) lets teachers share web content (eXeLearning, H5P, SCORM, interactive webs, folders, PDFs…) packed in a ZIP, without a traditional hosting. A Google Apps Script backend acts as a proxy; the GitHub Pages frontend downloads the ZIP, stores files in IndexedDB, and serves them via Service Worker.

## Development Commands

No build system or package manager. Use:

- `python3 -m http.server 8000` — serve the frontend locally (root of repo).
- `clasp push` (or `npx clasp push`) — upload `gas/` to Apps Script.
- `clasp pull` (or `npx clasp pull`) — sync remote Apps Script into `gas/`.

No automated tests. Manual verification: open via local server, paste a ZIP URL, confirm download + render + IndexedDB persistence after reload.

## Architecture

### Backend (`gas/`)
- `gas/Code.js` — Google Apps Script web app acting as CORS proxy. Main endpoints:
  - `?url=...&bundle=1` — returns full ZIP as base64.
  - `?url=...&bundle=1&meta=1` — returns metadata (`size`, `acceptRanges`, `name`) for chunked download.
  - `?url=...&bundle=1&part=N&chunkSize=...` — returns a chunk of the ZIP via HTTP Range.
  - `?short=1&url=...` — creates (or reuses) a short-link token for a ZIP URL.
  - `?short=<token>` — resolves a token back to its URL.
- `gas/appsscript.json` — Apps Script manifest.
- The deployed web app URL goes in `config.js` → `GAS_WEBAPP_URL`.

**Short-link storage:** tokens (SHA-256 of the URL, first 12 chars) map to URLs in a `shortlinks.json` file inside the `ZipWebSites` Drive folder, with per-token caching on reads and `LockService` on writes. Tokens created before this change live in `ScriptProperties` (`short_<token>`) and are still read as a fallback, so previously shared links keep working. ⚠️ Do not delete, move or rename `shortlinks.json` — that breaks every short link. When redeploying, always update the existing web-app deployment ("New version") so `GAS_WEBAPP_URL` stays valid; never create a new deployment.

### Frontend (GitHub Pages, repo root)

Scripts are loaded in order via `<script>` tags at the bottom of `index.html`. Load order matters:

| File | Purpose |
|------|---------|
| `config.js` | `GAS_WEBAPP_URL` — only place for the backend URL |
| `i18n.js` | `window.I18N` — all UI strings for 6 languages (es, ca, gl, eu, en, de) |
| `restrictions.js` | Date/time access restriction logic; `window.Restrictions` |
| `ui.js` | Shared UI helpers |
| `downloads.js` | ZIP download logic (single + chunked with fallback) |
| `zipper.js` | Client-side ZIP creation from files/folders |
| `html-picker.js` | HTML file selection logic |
| `storage.js` | IndexedDB wrapper (`window.Storage`): stores sites + files |
| `manager.js` | Resource manager tab logic |
| `restriction-ui.js` | Restriction settings UI |
| `share.js` | Share link generation |
| `nav.js` | Navigation/routing |
| `app.js` | Main app — depends on all modules above |
| `sw.js` | Service Worker — intercepts requests and serves files from IndexedDB |

External dependency: `fflate@0.8.2` (CDN, loaded before all local scripts) for ZIP decompression.

### DOM Binding Pattern
All DOM references use `data-*` attributes (e.g. `data-url`, `data-loading`, `data-manager-list`). Never use IDs or class names to query elements from JS.

### Key URL Parameters
- `?url=<zip-url>` — load a specific ZIP.
- `&view=full` — fullscreen mode for students.
- `&embed=1` — iframe embed mode (sends height via `postMessage`).

### IndexedDB Schema
DB name: `visor-web-sites`. Two object stores:
- `sites` — metadata per resource (keyed by `id`).
- `files` — individual files (keyed by `siteId::path`, indexed by `siteId`).

## Coding Conventions

- Plain ES5/ES6 — no bundlers, no transpilers. Prefer `var` and function declarations to match the existing style in `app.js`.
- 2-space indentation in JS, CSS, and HTML.
- All modules are IIFEs exposing a single global (e.g. `window.Storage`, `window.I18N`, `window.Restrictions`).
- Keep all configuration in `config.js` only; never hard-code URLs elsewhere.
- All user-visible strings belong in `i18n.js` for all 6 languages.

## Versioning

When bumping the version, update all three places:
1. `version.json` → `"version"` field.
2. `README.md` → "Versión actual" line.
3. `index.html` → footer version text.

Cache-bust changed scripts by incrementing the `?v=N` query string on the `<script src="...">` tag in `index.html`.

## Commit Style

Short, imperative Spanish verbs (e.g. "Mejorar descarga…", "Agregar gestor…"). Do not push to GitHub without explicit user approval.
