# Repository guide (contributors & automation)

Human-facing introduction: **[README.md](README.md)**. This file is for **people and tools** changing the repo: layout, hosting, and follow-up tasks.

## Layout

| Path | Role |
|------|------|
| `site/` | **Public website source** — HTML + CSS (edit here); live under **`/site/`** on the host |
| `site/public/` | **Generated asset gallery** — `index.html` plus `generated/` from `npm run assets:build` (URL **`/site/public/`**) |
| `index.html`, `404.html`, `.nojekyll` (repo root) | **Pages apex** — copied into the deploy artifact; apex `index.html` redirects to **`/site/`** so the README is not the homepage |
| `CNAME` | Custom domain `iconoclastaud.io` (copied into the Pages artifact root) |
| `README.md` | GitHub org/repo landing (not the canonical marketing URL; use **`/site/`** on the domain) |
| `docs/` | Markdown sources; not served as the public site |
| `docs/executive-summary.md` | Longer narrative and product alignment defaults |
| `docs/agent-prompt-typescript-github-pages.md` | Prompt for a future TypeScript GitHub Pages slice (replace `OWNER/REPO`) |
| `docs/agent-prompt-site-ux.md` | Prompt for site layout/UX refactors (no default section cards; aligned responsive grid) |
| `docs/agent-prompt-normalize-site-structure.md` | Prompt to dedupe layout (folder `index.html` → templates/build) |
| `.github/workflows/pages.yml` | `npm run assets:build`, then assembles `_pages/` and deploys |

## GitHub Pages (canonical URL)

**Public site home:** **`https://iconoclastaud.io/site/`** — static pages and generated assets. The repo **README** only appears on github.com, not as the apex of the domain (apex **`/`** redirects to **`/site/`**).

1. **Settings → Pages → Build and deployment** → **Source: GitHub Actions**
2. **Custom domain:** `iconoclastaud.io` (DNS per GitHub Pages docs)
3. Workflow runs **`npm ci`** and **`npm run assets:build`**, then builds **`_pages/`** = `site/` → **`site/`** + **`CNAME`** + repo-root **`index.html`**, **`404.html`**, **`.nojekyll`**

**GitHub project URL:** `https://<user>.github.io/<repo>/site/` — same content.

**First-time setup:** After the workflow exists on `main`, GitHub may prompt once to approve the `github-pages` environment.

**Editing:** change **`site/`** (and asset scripts if needed); push to `main`.

## Next implementation slice

To scaffold a **TypeScript** GitHub Pages build, use **[docs/agent-prompt-typescript-github-pages.md](docs/agent-prompt-typescript-github-pages.md)** and set the repo path in that prompt.

To refactor **layout, responsiveness, or visual structure** of the public site (e.g. iconoclastaud.io), use **[docs/agent-prompt-site-ux.md](docs/agent-prompt-site-ux.md)**.

To **dedupe HTML** across routes (shared templates / build output), use **[docs/agent-prompt-normalize-site-structure.md](docs/agent-prompt-normalize-site-structure.md)**.

## Conventions

- Public-safe content only; no secrets in commits.
- Prefer matching tone with [docs/executive-summary.md](docs/executive-summary.md) (direct, technical, WIP-friendly).
- **Site CSS:** `site/style.css` — flat layout, Bauhaus palette tokens (`--bg`, `--rose-gold`, `--baby-blue`, etc.). Avoid glass/backdrop-filter, card stacks, and heavy shadows on user-facing pages; use borders and section spacing instead.
