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
</div>

---

## About

**Iconoclast Audio** is where we share **audio engineering** in public: experiments, releases, and process—not only polished demos.

**Canonical public site (not this README):** **[iconoclastaud.io/site/](https://iconoclastaud.io/site/)** — static HTML built from [`site/`](site/). The GitHub README is repo documentation only; the live homepage is under **`/site/`** on the custom domain.

| | |
| :--- | :--- |
| **Website (canonical)** | **[https://iconoclastaud.io/site/](https://iconoclastaud.io/site/)** — deployed with **GitHub Actions** (see [AGENTS.md](AGENTS.md)). Apex **`/`** uses repo-root [`index.html`](index.html) to redirect to **`/site/`** (stops Jekyll from using `README.md` as the homepage). |
| **GitHub Pages (project URL)** | `https://shahzebqazi.github.io/iconoclast/site/` — same content; **`/site/`** is the site root. |
| **This repo** | **[github.com/shahzebqazi/iconoclast](https://github.com/shahzebqazi/iconoclast)** — hub, `docs/` (Markdown), and [`site/`](site/) (published site source). |
| **Organization** | **[github.com/shahzebqazi](https://github.com/shahzebqazi)** — our other public repositories and projects. |

**Site map** (live URLs are under **`https://iconoclastaud.io/site/`**): home, `ritual/`, `rates/`, `links/`, `contact/`, `legal/`, `faq/`, `404.html`. **Generated asset gallery:** `site/public/` → **`/site/public/`** (`npm run assets:build`). **Local preview:** `cd site && python3 -m http.server` → paths match production without the `/site/` prefix.

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
