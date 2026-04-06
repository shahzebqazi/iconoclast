# Iconoclast Audio

Public **website** and org-facing hub on GitHub: audio engineering presence, documentation, and a minimal static landing you can host on **GitHub Pages**.

- **Heavier engineering / CI** may live on **GitLab** (or elsewhere)—wire remotes when you are ready.
- **This repo** ships what belongs on the open web: the README, [executive summary](docs/executive-summary.md), and a tiny HTML/CSS fallback at the repo root.

## Executive summary

For narrative, goals, and default product assumptions for the next site iteration, see **[docs/executive-summary.md](docs/executive-summary.md)**.

## GitHub Pages (fallback site)

1. In the repo **Settings → Pages**, set **Source** to deploy from the **`main`** branch and **`/` (root)** so `index.html` is the site entry point.
2. After the first deploy, your project URL will look like `https://<user>.github.io/<repo>/` (exact URL is shown on the Pages settings page).

The static page duplicates the essentials and links into this repo’s docs.

## Next slice

To generate a **TypeScript** GitHub Pages site in a follow-up task, use the prompt in **[docs/agent-prompt-typescript-github-pages.md](docs/agent-prompt-typescript-github-pages.md)** (replace `OWNER/REPO` with this repository’s path).

## Repo layout

| Path | Role |
|------|------|
| `README.md` | Landing copy on GitHub; link hub for docs |
| `docs/executive-summary.md` | Longer public narrative |
| `index.html`, `style.css` | Minimal Pages-compatible fallback |

---

*Work in progress—safe for public reading.*
