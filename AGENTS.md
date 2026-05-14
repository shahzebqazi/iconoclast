# Repository guide (contributors & automation)

Visitor intro: **[README.md](README.md)**. This file orients people and agents working on hosting, routes, and the static site.

## Live URLs

- **Production:** `https://iconoclastaud.io/` — **`site/`** is the **domain root** (do not market `…/site/…` paths from older layouts).
- **`/about/`** is canonical (`site/about/index.html`). **`/ritual/`** was removed; add a redirect stub only if legacy bookmarks matter.
- **`https://<user>.github.io/<repo>/`** uses the same **`site/`**-as-root layout.

## GitHub Pages

- **Workflow:** `.github/workflows/pages.yml` — `npm ci`, `npm run assets:build`, copy **`CNAME`** into **`site/`**, keep **`site/.nojekyll`**, publish **`site/`**. **Source:** GitHub Actions; **custom domain:** `iconoclastaud.io`. First run on `main` may require approving the **`github-pages`** environment once.
- **Ship:** edit **`site/`**; push **`main`** to update the live site.

## Key paths

| Path | Notes |
|------|--------|
| `site/` | Public site source (artifact root). |
| `site/about/index.html` | About — `theme-invert`, service tags. |
| `site/mastering/index.html` | Mastering — `page-art` + `theme-invert`; explains process and role in a project. |
| `site/rates/index.html` | Rates — `page-art` + `rates-menu-page` (cream menu, serif, dot leaders); wide **EN \| FR**, narrow EN/FR toggle; **USD** + **CAD** footnote. Must satisfy **`npm run verify:public`**. |
| `site/style.css` | Reuse `about-service-tags`, `rates-menu-page`, `page-art`, `theme-invert`, `links-page` before inventing layout. |
| `site/public/generated/` | **`npm run assets:build`** → served as **`/public/generated/…`**. |
| `site/.nojekyll`, `CNAME` | Jekyll off; domain file (workflow copies `CNAME` into `site/`). |
| `assets/` | README-only (`readme-banner.svg`, `readme-oni-mask.png`). |
| `README.md` | GitHub repo landing, not the homepage. |
| `docs/` | Markdown; **`docs/executive-summary.md`** for tone. **`docs/agent-prompt-*.md`** are disposable specs — when work is merged, **delete the file** and **remove its links** from this doc. |

`site/session-bassist-vst/index.html` is a short offline stub (`noindex`); it mirrors the primary nav for consistency when the URL is opened directly.

## Verification

- Run **`npm run verify:public`** for public HTML/CSS/JS changes (rates substrings, page list, forbidden patterns). **`publicPages`** in **`scripts/verifyPublicSite.mjs`** must include **`site/about/index.html`** (not `ritual`).
- Most pages must not show **GitHub** or `github.com`; if an exception (e.g. Links) is needed, use per-file **`skipFiles`** on those checks (see git history ~2026-05-14).

## Next prompts

- [docs/agent-prompt-typescript-github-pages.md](docs/agent-prompt-typescript-github-pages.md) — TS / build slice (`OWNER/REPO` placeholders).
- [docs/agent-prompt-site-ux.md](docs/agent-prompt-site-ux.md) — layout / responsiveness.
- [docs/agent-prompt-normalize-site-structure.md](docs/agent-prompt-normalize-site-structure.md) — dedupe HTML / IA (read before large structural refactors).

## Backlog

Log rows as issues appear. **Do not implement** until this file or the user explicitly starts work.

| ID | Type | Description | Notes |
|----|------|-------------|-------|
| — | — | *No open items.* | Delete this placeholder row when adding real backlog entries. |

## Ship finished work (Git)

When a feature or fix **works**: **verify** (at least **`npm run verify:public`** for `site/`; **`npm test`** if touched) → **commit** (clear subject; one logical change when practical) → **push** **`origin`** (usually **`main`**). No **force-push** without an explicit request. If the user forbids push or there is no remote/credentials, say so. On push failure (auth, protection, conflicts), report the error and leave commits ready locally.

## Conventions

- Public-safe content only; no secrets in commits.
- Match tone with [docs/executive-summary.md](docs/executive-summary.md).
- **`npm run assets:gallery`** may create local-only `site/public/index.html`; do not link it from public pages; the workflow drops gallery/design artifacts before deploy.
- **CSS:** flat layout, Bauhaus palette tokens (`--bg`, `--rose-gold`, `--baby-blue`, …). Avoid glass/backdrop-filter, card stacks, and heavy shadows on user-facing pages; prefer borders and spacing.
