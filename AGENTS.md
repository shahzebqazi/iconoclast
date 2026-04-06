# Repository guide (contributors & automation)

Human-facing introduction: **[README.md](README.md)**. This file is for **people and tools** changing the repo: layout, hosting, and follow-up tasks.

## Layout

| Path | Role |
|------|------|
| `site/` | **Public website** — source for what GitHub Pages publishes; **`site/index.html`** is **`https://iconoclastaud.io/`** |
| `site/.nojekyll` | Disables Jekyll when building from this folder |
| `site/public/` | **Generated asset gallery** — `npm run assets:build`; live at **`/public/`** on the host (e.g. `/public/generated/…`) |
| `CNAME` | Copied into the Pages artifact by the workflow (`cp CNAME site/CNAME`) — custom domain `iconoclastaud.io` |
| `assets/readme-banner.svg` | Glass-style banner for the GitHub README only |
| `README.md` | GitHub repo landing (not rendered as the live homepage) |
| `docs/` | Markdown sources; not the static site |
| `docs/executive-summary.md` | Longer narrative and product alignment |
| `docs/agent-prompt-typescript-github-pages.md` | Prompt for a future TypeScript slice (replace `OWNER/REPO`) |
| `docs/agent-prompt-site-ux.md` | Prompt for layout/CSS refactors on the public site |
| `docs/agent-prompt-normalize-site-structure.md` | **Spec + agent prompt:** dedupe HTML across routes (templates / small static build); read this before large IA changes |
| `.github/workflows/pages.yml` | Runs `npm run assets:build`, then deploys **`site/`** as the Pages artifact |

## GitHub Pages (canonical URL)

**Live homepage:** **`https://iconoclastaud.io/`** — contents of repo **`site/`** are published at the **domain root**. The **`/site/`** path prefix is **deprecated** (older misconfiguration); do not document marketing URLs as `…/site/…`.

**Project URL:** **`https://<user>.github.io/<repo>/`** — same: **`site/`** is the site root for the project Pages URL.

1. **Settings → Pages → Build and deployment** → **Source: GitHub Actions**
2. **Custom domain:** `iconoclastaud.io` (DNS per GitHub docs)
3. Workflow: **`npm ci`**, **`npm run assets:build`**, copy **`CNAME`** into **`site/`**, ensure **`site/.nojekyll`**, upload **`site/`** as the artifact

**Editing:** change files under **`site/`**; push to **`main`**.

## Next implementation slice

- **TypeScript / build:** [docs/agent-prompt-typescript-github-pages.md](docs/agent-prompt-typescript-github-pages.md)
- **Layout / responsiveness / visual structure:** [docs/agent-prompt-site-ux.md](docs/agent-prompt-site-ux.md)
- **Normalize structure (shared templates, less duplicated HTML):** read **[docs/agent-prompt-normalize-site-structure.md](docs/agent-prompt-normalize-site-structure.md)** — this is the current spec for how hosting and URLs work, plus the agent task for refactoring.

## Conventions

- Public-safe content only; no secrets in commits.
- Prefer matching tone with [docs/executive-summary.md](docs/executive-summary.md) (direct, technical, WIP-friendly).
