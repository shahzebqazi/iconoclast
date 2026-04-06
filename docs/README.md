# GitHub Pages site

This folder is the **static site root** for GitHub Pages when you set **Source → `/docs`**.

- **`index.html`** — generated asset gallery (lists all generated files with descriptions).
- **`assets/generated/`** — copy of `assets/generated/` from `npm run assets:build`.
- **`.nojekyll`** — disables Jekyll so paths with underscores are served as-is.

Regenerate with `npm run assets:build` from the repository root.
