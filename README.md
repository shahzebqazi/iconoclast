<div align="center">
  <img src="assets/readme-banner.svg" alt="Iconoclast Audio — audio engineering in the open" width="100%" />
  <p>
    <strong>Public hub</strong> for our work on GitHub — sound, tools, and how we build them.<br />
    <sub>GitHub READMEs can’t load custom styles; the glass look above is baked into the banner image.</sub>
  </p>
  <p>
    <img src="assets/readme-logo-wordmark.png" alt="Iconoclast — AUDIO (metal wordmark)" height="72" />
    &nbsp;&nbsp;
    <img src="assets/readme-logo-mastering.png" alt="Iconoclast MASTERING (blackletter)" height="72" />
  </p>
  <p><sub>Wordmark and blackletter logos (transparent PNGs; copies of <code>site/public/generated/logo/</code>).</sub></p>
  <p>
    <img src="assets/readme-oni-mask.png" alt="" width="40" height="40" />
    <br />
    <sub>Site favicon: pen-style oni mask (<code>site/public/generated/icons/</code>).</sub>
  </p>
</div>

---

## About

**Iconoclast Audio** is where we share **audio engineering** in public: experiments, releases, and process—not only polished demos.

**Canonical public site (not this README):** **[iconoclastaud.io](https://iconoclastaud.io/)** — static HTML from [`site/`](site/), which GitHub Pages publishes as the **site root** (not under a `/site/` URL path). This README only appears on GitHub.

| | |
| :--- | :--- |
| **Website (canonical)** | **[https://iconoclastaud.io/](https://iconoclastaud.io/)** — deployed with **GitHub Actions** (see [AGENTS.md](AGENTS.md)). |
| **GitHub Pages (project URL)** | `https://shahzebqazi.github.io/iconoclast/` — same files as `site/`. |
| **This repo** | **[github.com/shahzebqazi/iconoclast](https://github.com/shahzebqazi/iconoclast)** — hub, `docs/` (Markdown), and [`site/`](site/) (published site). |
| **Organization** | **[github.com/shahzebqazi](https://github.com/shahzebqazi)** — our other public repositories and projects. |

**Site map** (paths are under the domain root): `/`, `/ritual/`, `/rates/`, `/links/`, `/contact/`, `/legal/`, `/faq/`, `/404.html`. **Assets:** `site/public/` → **`/public/`** on the host (`npm run assets:build`). **Local preview:** `cd site && python3 -m http.server` → matches production paths.

## Documentation

| Doc | What you get |
| :--- | :--- |
| [**Executive summary**](docs/executive-summary.md) | Audience, direction, tone, and what we’re building toward. |
| [**AGENTS.md**](AGENTS.md) | For contributors and automation: layout, Pages, next steps. |

## Generated assets (MVP)

- **Build:** `npm install` then `npm run assets:build` — writes **`site/public/generated/`** and **`site/public/index.html`** (gallery with descriptions; catalog in `scripts/generate/assetCatalog.ts`). The build runs vector templates, then **`postprocessAiIcons.ts`** (oni favicons from `scripts/generate/ai-cache/`, circular fireball logo).
- **CI:** the Pages workflow runs the same build before deploy so `site/public/` stays in sync.
- See `assets/MVP_ASSETS.md` for what ships from generators vs what you still supply (photography, final logo, copy).
- Brand questions: `docs/BRAND_CONSULTATION.md`.

---

<p align="center">
  <sub>Early days — rough edges are part of the record.</sub>
</p>
