# Repository guide (contributors & automation)

Human-facing introduction: **[README.md](README.md)**. This file is for **people and tools** changing the repo: layout, hosting, and follow-up tasks.

## Layout

| Path | Role |
|------|------|
| `README.md` | Public landing; organization and visitor copy |
| `docs/executive-summary.md` | Longer narrative and product alignment defaults |
| `docs/agent-prompt-typescript-github-pages.md` | Prompt for a future TypeScript GitHub Pages slice (replace `OWNER/REPO`) |
| `docs/agent-prompt-site-ux.md` | Prompt for site layout/UX refactors (no default section cards; aligned responsive grid) |
| `index.html`, `style.css` | Minimal static site for GitHub Pages |
| `.nojekyll` | Disables Jekyll so static assets behave as expected |

## GitHub Pages

1. **Settings → Pages** → deploy from **`main`**, folder **`/` (root)** so `index.html` is the entry.
2. Site URL pattern: `https://<user>.github.io/<repo>/` (exact URL is on the Pages settings page).

**Note:** On Pages, links to `.md` files are served as plain text. Rendered Markdown is on the GitHub repo UI.

## Next implementation slice

To scaffold a **TypeScript** GitHub Pages build, use **[docs/agent-prompt-typescript-github-pages.md](docs/agent-prompt-typescript-github-pages.md)** and set the repo path in that prompt.

To refactor **layout, responsiveness, or visual structure** of the public site (e.g. iconoclastaud.io), use **[docs/agent-prompt-site-ux.md](docs/agent-prompt-site-ux.md)**.

## Conventions

- Public-safe content only; no secrets in commits.
- Prefer matching tone with [docs/executive-summary.md](docs/executive-summary.md) (direct, technical, WIP-friendly).
