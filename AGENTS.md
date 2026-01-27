# Repository Guidelines

## Project Structure & Module Organization
- `gas/`: Google Apps Script backend (proxy that fetches ZIPs and returns content). Main file: `gas/Code.js` and its manifest `gas/appsscript.json`.
- `docs/`: Frontend served by GitHub Pages. Includes `index.html`, `styles.css`, `app.js`, `sw.js`, and `config.js` (Apps Script Web App URL).
- Root files: `README.md` for deployment notes, `.clasp.json` for Apps Script CLI configuration.

## Build, Test, and Development Commands
This project has no build system or package manager. Use simple local serving and Apps Script tooling:
- `python3 -m http.server 8000 --directory docs`: Serve the frontend locally to test UI and service worker.
- `clasp push`: Upload `gas/` to Apps Script (only when you explicitly approve pushes to the script).
- `clasp pull`: Sync remote Apps Script into `gas/`.

## Coding Style & Naming Conventions
- JavaScript is plain ES5/ES6 without bundlers. Prefer `var` and function declarations to match `docs/app.js`.
- Indentation: 2 spaces in JS/CSS/HTML.
- Keep DOM hooks as `data-*` attributes (see `docs/index.html` and `docs/app.js`).
- Keep configuration values in `docs/config.js` only; avoid hard-coding URLs elsewhere.

## Testing Guidelines
- No automated tests are configured.
- Manual checks:
  - Open `docs/` via a local server, generate a share URL, and verify ZIP download + render.
  - Confirm service worker caching and IndexedDB persistence after reload.

## Commit & Pull Request Guidelines
- Commit messages follow short, imperative Spanish verbs (e.g., “Mejorar descarga…”, “Agregar gestor…”).
- Keep commits focused; include the what/why in the body when needed.
- PRs: include a brief summary, steps to test, and screenshots/GIFs for UI changes.

## Security & Configuration Notes
- Only use publicly shareable ZIP links (Drive/Dropbox/etc.).
- Do not commit private URLs or tokens; configure the Apps Script endpoint in `docs/config.js`.
- Do not push to GitHub without Juanjo’s explicit permission.
