# Agent prompt: normalize static site structure (Iconoclast Audio)

Copy everything below the line into a new task for a coding agent. Read **`README.md`**, **`AGENTS.md`**, and **`site/`** first. Replace `OWNER/REPO` with this repository’s GitHub path.

---

## Problem

The public site under **`site/`** uses the **“folder per route + `index.html`”** pattern so GitHub Pages serves clean URLs (e.g. `…/site/ritual/` instead of `…/site/ritual.html`). That is standard for static hosting, but it **duplicates boilerplate**: every route is its own directory with a full HTML file (repeated `<head>`, nav, footer). The tree feels heavy and is error-prone when changing global chrome.

## Goal

Replace ad-hoc copies with a **single source of truth** for layout and navigation, while keeping the **same public URLs** (or an explicit, documented redirect map). Prefer **minimal** tooling and dependencies.

## Constraints (do not break)

- **Hosting:** GitHub Pages; current deploy uses **GitHub Actions** (see **`.github/workflows/pages.yml`**) and publishes an artifact where the real pages live under **`/site/`** on the custom domain. The repo root **`index.html`** + **`.nojekyll`** handle apex redirect—do not remove without replacing.
- **Canonical site:** **`https://iconoclastaud.io/site/`** (and project URL `https://<user>.github.io/<repo>/site/`). Paths like **`/site/ritual/`**, **`/site/rates/`**, etc. must keep working.
- **Tone:** Direct, technical, WIP-friendly, metal-oriented mastering lab; **public-safe**—no secrets.
- **Accessibility:** Keep or improve semantic landmarks, one `<h1>` per page, skip link, focus styles.
- **Do not** remove **`docs/*.md`** unless you migrate content deliberately; linking to GitHub for long Markdown is fine.

## Acceptable directions (pick one and justify)

1. **Small build step** — e.g. **Vite**, **Eleventy**, or a **Node script** that reads templates + partials (or Markdown) and **writes** `site/<route>/index.html` (and assets) in the same shape Pages expects. Commit **generated output** or generate in CI—choose one and document.
2. **Single-page shell + JS routing** — Usually **bad for SEO** and GitHub Pages deep links unless you add a **server rewrite** (you do not have one). Only if you solve prerendering or accept tradeoffs—document clearly.
3. **Keep folder URLs** but **generate** them from one template set—this is the default recommendation.

## Deliverables

- **Refactored `site/`** (or `src/` + build → `site/`) so global nav/footer/head are not duplicated by hand.
- **Updated workflow** if the build command or output path changes (`npm run build` or similar).
- **Updated `README.md`** and **`AGENTS.md`** with: how to dev, how to build, **what file serves each URL** (path → file).
- **No** `/chain`, `/proof`, or `/room` routes unless explicitly added later.

## Verification checklist

- [ ] `https://iconoclastaud.io/site/` loads the home page.
- [ ] `/site/ritual/`, `/site/rates/`, `/site/links/`, `/site/contact/`, `/site/legal/`, `/site/faq/` all resolve.
- [ ] Apex redirect (`/` → `/site/`) still works if unchanged.
- [ ] Local preview: `npm run dev` or documented equivalent.

---

End of prompt.
