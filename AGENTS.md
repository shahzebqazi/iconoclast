# Repository guide (contributors & automation)

Human-facing introduction: **[README.md](README.md)**. This file is for **people and tools** changing the repo: layout, hosting, and follow-up tasks.

## Layout

| Path | Role |
|------|------|
| `site/` | **Public website** — source for what GitHub Pages publishes; **`site/index.html`** is **`https://iconoclastaud.io/`** |
| `site/.nojekyll` | Disables Jekyll when building from this folder |
| `site/public/` | **Generated asset gallery** — `npm run assets:build`; live at **`/public/`** on the host (e.g. `/public/generated/…`) |
| `CNAME` | Copied into **`site/`** by the workflow — custom domain `iconoclastaud.io` |
| `assets/readme-banner.svg` | Glass-style banner for the GitHub README only |
| `assets/readme-oni-mask.png` | Copy of `site/public/generated/icons/oni-mask-128.png` for README (favicon / brand glyph) |
| `README.md` | GitHub repo landing (not rendered as the live homepage) |
| `docs/` | Markdown sources; not the static site |
| `docs/executive-summary.md` | Longer narrative and product alignment |
| `docs/agent-prompt-typescript-github-pages.md` | Prompt for a future TypeScript slice (replace `OWNER/REPO`) |
| `docs/agent-prompt-site-ux.md` | Prompt for layout/CSS refactors on the public site |
| `docs/agent-prompt-normalize-site-structure.md` | **Spec + agent prompt:** dedupe HTML across routes (templates / small static build); read before large IA changes |
| `.github/workflows/pages.yml` | Runs `npm run assets:build`, copies `CNAME` into `site/`, then deploys **`site/`** as the Pages artifact |

## GitHub Pages (canonical URL)

**Live homepage:** **`https://iconoclastaud.io/`** — contents of repo **`site/`** are published at the **domain root**. Older **`/site/…`** URL paths from a previous deploy layout are **deprecated**; do not document marketing URLs as `…/site/…`.

**Project URL:** **`https://<user>.github.io/<repo>/`** — same: **`site/`** is the site root for the project Pages URL.

1. **Settings → Pages → Build and deployment** → **Source: GitHub Actions**
2. **Custom domain:** `iconoclastaud.io` (DNS per GitHub docs)
3. Workflow: **`npm ci`**, **`npm run assets:build`**, copy **`CNAME`** into **`site/`**, ensure **`site/.nojekyll`**, upload **`site/`** as the artifact

**First-time setup:** After the workflow exists on `main`, GitHub may prompt once to approve the `github-pages` environment.

**Editing:** change files under **`site/`**; push to **`main`**.

## Next implementation slice

- **TypeScript / build:** [docs/agent-prompt-typescript-github-pages.md](docs/agent-prompt-typescript-github-pages.md)
- **Layout / responsiveness / visual structure:** [docs/agent-prompt-site-ux.md](docs/agent-prompt-site-ux.md)
- **Normalize structure (shared templates, less duplicated HTML):** read **[docs/agent-prompt-normalize-site-structure.md](docs/agent-prompt-normalize-site-structure.md)** — spec for hosting/URLs plus the agent task for refactoring.

## Backlog — bugs and changes

**Workflow:** Log items here as they are identified. **Do not implement** fixes until this file is updated to say implementation is started (or a separate go-ahead is given).

**Repo scan (ad hoc):** No `TODO` / `FIXME` markers were found in tracked `*.md`, `*.html`, `*.css`, `*.js`, `*.ts`, `*.json`, `*.yml` files at the time this section was added.

| ID | Type | Description | Notes |
|----|------|-------------|-------|
| README-1 | change | README hero and structure | Addressed: single primary wordmark (`wordmark-dark-bg.svg` for GitHub), one logo row table, split About/sitemap, table headers, footer tone. |

---

## Conventions

- Public-safe content only; no secrets in commits.
- Prefer matching tone with [docs/executive-summary.md](docs/executive-summary.md) (direct, technical, WIP-friendly).
- **Site CSS:** `site/style.css` — flat layout, Bauhaus palette tokens (`--bg`, `--rose-gold`, `--baby-blue`, etc.). Avoid glass/backdrop-filter, card stacks, and heavy shadows on user-facing pages; use borders and section spacing instead.
- **Agent prompts** (`docs/agent-prompt-*.md`): each file is a **disposable task spec**. When the described work is done and merged, **delete that prompt file** and remove its row from the layout table and links in this file so the repo does not accumulate stale instructions.
