# Repository guide (contributors & automation)

Human-facing introduction: **[README.md](README.md)**. This file is for **people and tools** changing the repo: layout, hosting, and follow-up tasks.

## Layout

| Path | Role |
|------|------|
| `site/` | **Public website** — HTML + CSS; routes like `ritual/index.html` → `/ritual/` on Pages |
| `site/public/` | **Generated asset gallery** — `index.html` plus `generated/` from `npm run assets:build` (URL `/public/`) |
| `site/404.html` | GitHub Pages custom not-found page |
| `assets/readme-banner.svg` | Glass-style banner image for README (GitHub Markdown has no custom CSS) |
| `README.md` | Public landing; organization and visitor copy |
| `docs/executive-summary.md` | Longer narrative and product alignment defaults (source; mirrored in `site/executive-summary.html`) |
| `AGENTS.md` | This file (source; summary in `site/agents.html`) |
| `docs/agent-prompt-typescript-github-pages.md` | Prompt for a future TypeScript GitHub Pages slice (replace `OWNER/REPO`) |
| `.github/workflows/pages.yml` | Deploys **`site/`** to GitHub Pages |

## GitHub Pages

The live site is built from the **`site/`** directory using **GitHub Actions**, not “Deploy from a branch” at repo root.

1. **Settings → Pages → Build and deployment**
2. Set **Source** to **GitHub Actions** (not “Deploy from a branch” for the HTML site).
3. The workflow **Deploy GitHub Pages** (`.github/workflows/pages.yml`) runs **`npm ci`** and **`npm run assets:build`**, then uploads `site/` as the Pages artifact on pushes to `main`.

**First-time setup:** After the workflow exists on `main`, GitHub may prompt once to approve the `github-pages` environment. The site URL is `https://<user>.github.io/<repo>/` (exact URL on the Pages settings page).

**Editing content:** Change Markdown under `docs/` for version control on GitHub; update the matching HTML under `site/` when you want the public site to change (or automate that in a later slice).

## Next implementation slice

To scaffold a **TypeScript** GitHub Pages build, use **[docs/agent-prompt-typescript-github-pages.md](docs/agent-prompt-typescript-github-pages.md)** and set the repo path in that prompt.

## Conventions

- Public-safe content only; no secrets in commits.
- Prefer matching tone with [docs/executive-summary.md](docs/executive-summary.md) (direct, technical, WIP-friendly).
