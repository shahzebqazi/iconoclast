# Agent prompt: normalize static site structure (Iconoclast Audio)

Copy everything below the line into a new task for a coding agent. Read **`README.md`**, **`AGENTS.md`**, and **`site/`** first. Replace `OWNER/REPO` with this repository’s GitHub path.

---

## Problem

The public site under **`site/`** uses the **folder-per-route + `index.html`** pattern so GitHub Pages serves clean URLs (e.g. `/ritual/` not `/ritual.html`). That is normal for static hosting, but it **duplicates boilerplate**: each route is a full HTML file with repeated `<head>`, nav, and footer. The tree feels heavy and is fragile when global chrome changes.

## Goal

Replace ad-hoc copies with a **single source of truth** for layout and navigation, while keeping the **same public URLs** (or an explicit, documented redirect map). Prefer **minimal** tooling and dependencies.

## Hosting (current spec — do not regress)

- **GitHub Pages** deploys from the **`site/`** folder in the repo: the **published site root** is the contents of **`site/`**, so **`https://iconoclastaud.io/`** is the homepage (not `https://iconoclastaud.io/site/`). The old **`/site/`** URL prefix is **deprecated**—do not reintroduce it in new docs or nav.
- **Workflow:** **`.github/workflows/pages.yml`** uploads the **`site/`** directory as the Pages artifact (plus **`CNAME`** copied into the artifact root). **`site/.nojekyll`** disables Jekyll so `README.md` is not turned into a homepage if paths ever overlap.
- **Repo root** `README.md` is **GitHub-only**; it is not the live site.

## Constraints

- **Canonical site:** **`https://iconoclastaud.io/`** (and **`https://<user>.github.io/<repo>/`** for the project URL). Paths like **`/ritual/`**, **`/rates/`**, etc. must keep working.
- **Tone:** Direct, technical, WIP-friendly, metal-oriented mastering lab; **public-safe**—no secrets.
- **Accessibility:** Keep or improve semantic landmarks, one `<h1>` per page, skip link, focus styles.
- **Do not** remove **`docs/*.md`** unless you migrate deliberately; linking to GitHub for long Markdown is fine.

## Acceptable directions (pick one and justify)

1. **Small build step** — e.g. **Vite**, **Eleventy**, or a **Node script** that reads templates + partials (or Markdown) and **writes** `site/<route>/index.html` (and assets) in the shape Pages expects. Commit **generated output** or generate in CI—choose one and document.
2. **Single-page shell + client routing** — Usually **bad for SEO** and deep links on static hosting unless you prerender. Only with clear tradeoffs documented.
3. **Keep folder URLs** but **generate** them from one template set — **default recommendation**.

## Deliverables

- **Refactored `site/`** (or `src/` + build → `site/`) so global nav/footer/head are not duplicated by hand.
- **Updated workflow** if the build command or artifact path changes (`npm run build` or similar).
- **Updated `README.md`** and **`AGENTS.md`**: dev, build, **path → file** map for each public URL.
- **No** `/chain`, `/proof`, or `/room` routes unless explicitly added later.

## Verification checklist

- [ ] `https://iconoclastaud.io/` loads the home page (repo `site/index.html` at domain root).
- [ ] `/ritual/`, `/rates/`, `/links/`, `/contact/`, `/legal/`, `/faq/` resolve (folder `index.html` or your generated equivalent).
- [ ] No reliance on a **`/site/`** path prefix for the marketing site.
- [ ] Local preview documented (`npm run dev` or `cd site && python3 -m http.server`).

---

End of prompt.
