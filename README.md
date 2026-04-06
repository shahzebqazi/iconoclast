# Iconoclast Audio

Public **website** and org-facing hub on GitHub.

- **Audio engineering / project source** lives on **GitLab** (configure remotes and CI there when ready).
- This repo holds what you ship to **GitHub Pages** or your static site pipeline for the Iconoclast presence.

## Assets (MVP)

- **Build generated assets** (favicons, OG image, hero placeholder, wordmark SVGs, `theme.css`, `site.webmanifest`): `npm install` then `npm run assets:build`.
- See `assets/MVP_ASSETS.md` for what ships from generators vs what you still supply (photography, final logo, copy).
- Brand questions to resolve: `docs/BRAND_CONSULTATION.md`.

## Next steps

- Wire static site build and GitHub Pages (or your host).
- Wire GitLab ↔ GitHub only where you need mirrors or releases.
