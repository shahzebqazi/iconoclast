<p align="center">
  <img src="site/public/generated/logo/wordmark-dark-bg.svg" alt="Iconoclast Audio — wordmark" width="320" height="60" />
</p>

<p align="center">
  <strong>Public hub</strong> for our work on GitHub — sound, tools, and how we build them.<br />
  Live site: <a href="https://iconoclastaud.io/">iconoclastaud.io</a> (canonical; this README is GitHub-only).
</p>

<table align="center">
  <tr>
    <td align="center"><img src="assets/readme-logo-wordmark.png" alt="Iconoclast AUDIO — metal wordmark" height="64" /></td>
    <td align="center"><img src="assets/readme-logo-mastering.png" alt="Iconoclast MASTERING — blackletter" height="64" /></td>
  </tr>
</table>

<p align="center"><small>Metal and blackletter marks (PNGs; copies under <code>site/public/generated/logo/</code>).</small></p>

---

## About

**Iconoclast Audio** is where we share **audio engineering** in public: experiments, releases, and process—not only polished demos.

The repo’s static site lives in [`site/`](site/) and is published by **GitHub Pages** at the **domain root** (not under a `/site/` path).

| Resource | Detail |
| :--- | :--- |
| **Website (canonical)** | **[iconoclastaud.io](https://iconoclastaud.io/)** — deployed with **GitHub Actions** (see [AGENTS.md](AGENTS.md)). |
| **GitHub Pages (project URL)** | `https://shahzebqazi.github.io/iconoclast/` — same files as `site/`. |
| **This repo** | **[github.com/shahzebqazi/iconoclast](https://github.com/shahzebqazi/iconoclast)** — hub, `docs/` (Markdown), and [`site/`](site/) (published site). |
| **Organization** | **[github.com/shahzebqazi](https://github.com/shahzebqazi)** — our other public repositories and projects. |

**Site** (paths are under the domain root):

- Pages: `/`, `/ritual/`, `/rates/`, `/links/`, `/contact/`, `/legal/`, `/faq/`, `/404.html`
- Dev-only design refs may exist under `site/design/`, but they are removed from the Pages artifact.

**Styling:** one flat stylesheet, [`site/style.css`](site/style.css) — Bauhaus palette; no glass panels or card UI on public pages.

**Assets:** `site/public/generated/` is served as **`/public/generated/`** on the host (`npm run assets:build`). The browsable asset gallery is dev-only: use `npm run assets:gallery` locally.

**Local preview:** `cd site && python3 -m http.server` — paths match production.

## Documentation

| Doc | What you get |
| :--- | :--- |
| [**Executive summary**](docs/executive-summary.md) | Audience, direction, tone, and what we’re building toward. |
| [**AGENTS.md**](AGENTS.md) | For contributors and automation: layout, Pages, next steps. |

## Generated assets (MVP)

- **Build:** `npm install` then `npm run assets:build` — writes **`site/public/generated/`**. Use `npm run assets:gallery` for a local-only flat asset index from `scripts/generate/assetCatalog.ts`. The build runs vector templates, then **`postprocessAiIcons.ts`** (oni favicons from `scripts/generate/ai-cache/`, circular fireball logo).
- **CI:** the Pages workflow runs the same build before deploy so `site/public/` stays in sync.
- See `assets/MVP_ASSETS.md` for what ships from generators vs what you still supply (photography, final logo, copy).
- Brand questions: `docs/BRAND_CONSULTATION.md`.

---

<p align="center"><small>Work in progress — public by default.</small></p>
