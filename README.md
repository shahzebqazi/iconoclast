<div align="center">
  <img src="assets/readme-banner.svg" alt="Iconoclast Audio — audio engineering in the open" width="100%" />
  <p>
    <strong>Public hub</strong> for our work on GitHub — sound, tools, and how we build them.<br />
    <sub>GitHub READMEs can’t load custom styles; the banner image is static art, not the live site theme.</sub>
  </p>
</div>

---

## About

**Iconoclast Audio** is where we share **audio engineering** in public: experiments, releases, and process—not only polished demos. This repository is the **face of our presence** on GitHub: narrative here, longer writing in **docs**, and a small **website** you can open anywhere.

| | |
| :--- | :--- |
| **Website** | **[Live site (GitHub Pages)](https://shahzebqazi.github.io/iconoclast/)** — static HTML under [`site/`](site/). Deployed with **GitHub Actions** (see [AGENTS.md](AGENTS.md)). If it 404s, set Pages **Source** to **GitHub Actions** and run the workflow on `main`. |
| **This repo** | **[github.com/shahzebqazi/iconoclast](https://github.com/shahzebqazi/iconoclast)** — hub, `docs/` (Markdown), and [`site/`](site/) (public pages). |
| **Organization** | **[github.com/shahzebqazi](https://github.com/shahzebqazi)** — our other public repositories and projects. |

**Site map** (folders use `index.html` so URLs stay clean): `/` home, `/ritual/`, `/rates/`, `/links/`, `/contact/` (same link list as `/links/`), `/legal/`, `/faq/`, `/design/palette.html` and `/design/typography.html` (token reference), plus `/404.html` for missing pages. **Styling:** one flat stylesheet, `site/style.css` — Bauhaus palette, no glass panels or card UI on the public pages. **Asset gallery** (generated): **`/public/`** lists favicons, OG images, and theme files from `npm run assets:build`. **Local preview:** open `site/index.html` in a browser, or run `python -m http.server` from inside `site/` and open `http://localhost:8000/`.

## Documentation

| Doc | What you get |
| :--- | :--- |
| [**Executive summary**](docs/executive-summary.md) | Audience, direction, tone, and what we’re building toward. |
| [**AGENTS.md**](AGENTS.md) | For contributors and automation: layout, Pages, next steps. |

## Generated assets (MVP)

- **Build:** `npm install` then `npm run assets:build` — writes **`site/public/generated/`** and **`site/public/index.html`** (gallery with descriptions; catalog in `scripts/generate/assetCatalog.ts`).
- **CI:** the Pages workflow runs the same build before deploy so `site/public/` stays in sync.
- See `assets/MVP_ASSETS.md` for what ships from generators vs what you still supply (photography, final logo, copy).
- Brand questions: `docs/BRAND_CONSULTATION.md`.

---

<p align="center">
  <sub>Early days — rough edges are part of the record.</sub>
</p>
