# Repository guide (contributors & automation)

Human-facing introduction: **[README.md](README.md)**. This file is for **people and tools** changing the repo: layout, hosting, and follow-up tasks.

## Layout

| Path | Role |
|------|------|
| `site/` | **Public website source** — HTML + CSS (edit here) |
| `site/public/` | **Generated asset gallery** — from `npm run assets:build` (live under **`/site/public/`** on the host) |
| `index.html`, `404.html`, `.nojekyll` | **Pages apex** — redirect to `/site/`; disable Jekyll so README is not the homepage |
| `CNAME` | Custom domain `iconoclastaud.io` (copied into the Pages artifact root) |
| `assets/readme-banner.svg` | Glass-style banner for GitHub README only |
| `README.md` | GitHub org/repo landing (not the canonical marketing home) |
| `docs/` | Markdown sources; not served as the public site |
| `docs/executive-summary.md` | Longer narrative and product alignment defaults |
| `docs/agent-prompt-typescript-github-pages.md` | Prompt for a future TypeScript GitHub Pages slice (replace `OWNER/REPO`) |
| `docs/agent-prompt-site-ux.md` | Prompt for site layout/UX refactors (no default section cards; aligned responsive grid) |
| `docs/agent-prompt-normalize-site-structure.md` | Prompt to dedupe layout (folder `index.html` → templates/build) |
| `.github/workflows/pages.yml` | `npm run assets:build`, then assembles `_pages/` and deploys |

## GitHub Pages (canonical URL)

**Public site home:** **`https://iconoclastaud.io/site/`** — static pages and generated assets live under **`/site/`** on the custom domain. The GitHub repo **README** only appears on github.com, not as the apex of the domain.

1. **Settings → Pages → Build and deployment** → **Source: GitHub Actions**
2. **Custom domain:** `iconoclastaud.io` (DNS per GitHub Pages docs)
3. Workflow runs **`npm ci`** and **`npm run assets:build`**, then builds **`_pages/`** = `site/` → **`site/`** + **`CNAME`** + repo-root **`index.html`**, **`404.html`**, **`.nojekyll`**

**Project URL:** `https://<user>.github.io/<repo>/site/` — same layout.

**Editing:** change **`site/`** (and asset scripts if needed); push to `main`.

## Next implementation slice

To scaffold a **TypeScript** GitHub Pages build, use **[docs/agent-prompt-typescript-github-pages.md](docs/agent-prompt-typescript-github-pages.md)** and set the repo path in that prompt.

To refactor **layout, responsiveness, or visual structure** of the public site (e.g. iconoclastaud.io), use **[docs/agent-prompt-site-ux.md](docs/agent-prompt-site-ux.md)**.

To **dedupe HTML** across routes (shared templates / build output), use **[docs/agent-prompt-normalize-site-structure.md](docs/agent-prompt-normalize-site-structure.md)**.

## Conventions

- Public-safe content only; no secrets in commits.
- Prefer matching tone with [docs/executive-summary.md](docs/executive-summary.md) (direct, technical, WIP-friendly).
