# Iconoclast Audio

Public **website** and org-facing hub on GitHub.

- **Audio engineering / project source** lives on **GitLab** (configure remotes and CI there when ready).
- This repo holds what you ship to **GitHub Pages** or your static site pipeline for the Iconoclast presence.

## Assets (MVP)

- **Build generated assets** (favicons, OG image, hero placeholder, wordmark SVGs, `theme.css`, `site.webmanifest`): `npm install` then `npm run assets:build`.
- The same build **copies** `assets/generated/` → `docs/assets/generated/` and writes **`docs/index.html`**, an asset gallery for GitHub Pages.
- See `assets/MVP_ASSETS.md` for what ships from generators vs what you still supply (photography, final logo, copy).
- Brand questions to resolve: `docs/BRAND_CONSULTATION.md`.

## GitHub Pages (asset gallery)

1. Repository **Settings → Pages**: **Build and deployment** → Source: **Deploy from a branch**.
2. Branch: **`main`** (or your default), folder: **`/docs`**.
3. After each change to generators or brand tokens, run `npm run assets:build`, commit `docs/` and `assets/generated/`, and push.

The gallery lists every generated file with a short description (from `scripts/generate/assetCatalog.ts`).

## Next steps

- Wire GitLab ↔ GitHub only where you need mirrors or releases.
