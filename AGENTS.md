# Repository guide (contributors & automation)

Visitor intro: **[README.md](README.md)**. This file orients people and agents working on hosting, routes, and the static site.

**Continuity:** after homepage or parallel-agent work, read **[docs/HANDOFF.md](docs/HANDOFF.md)** (session handoff: language switch placement, homepage shape, verify invariants).

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
| `site/index.html` | **Homepage** — `home-strip` (booking line + **`home-actions`**: Links, Contact, **EN/FR** switcher); **`home-hero`** without **`home-services`** chips; scope on About. **Language switcher is not in primary nav** (it sits in the strip). High-conflict file: pull `main` before edits. |
| `site/js/site-lang.js` | Site-wide EN/FR preference (`localStorage` **`iconoclastSiteLang`**); loaded from every public page. |
| `site/about/index.html` | About — `theme-invert`, **`about-newspaper-page`** layout; paired CSS in **`site/style.css`** (`body.about-newspaper-page`). **EN/FR** switcher lives in **`<main>`** (`.about-body-lang`), not in primary nav. |
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

- **`site/index.html` conflicts:** Parallel agents have reverted hero copy before. Treat the homepage as **single-owner**: pull **`main`**, one logical commit per change, **`npm run verify:public`** before push. Verifier rejects **`<ul class="home-services">`**. **Language UI:** **`verifyPublicSite.mjs`** encodes where **`data-site-lang-switcher`** may appear—**home + About** use switchers **outside** primary nav; **Rates** forbids the switcher in nav; **all other `publicPages`** require it **in** primary nav. Change HTML and verifier together if you move controls.
- Run **`npm run verify:public`** for public HTML/CSS/JS changes (rates substrings, page list, forbidden patterns). **`publicPages`** in **`scripts/verifyPublicSite.mjs`** must include **`site/about/index.html`** (not `ritual`).
- **Site language:** `site/js/site-lang.js` persists `localStorage` key **`iconoclastSiteLang`** (`en` \| `fr`). Optional override: query **`?lang=en`** or **`?lang=fr`**. On **Rates** below 900px width, `fr` shows the French column; at wider widths both columns stay visible; other pages stay English in copy but the nav toggle reflects saved preference.
- Most pages must not show **GitHub** or `github.com`; if an exception (e.g. Links) is needed, use per-file **`skipFiles`** on those checks (see git history ~2026-05-14).

## Next prompts

- [docs/HANDOFF.md](docs/HANDOFF.md) — session handoff after homepage or concurrent edits.
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

- Before **`git commit`**, use **`git diff --staged`** (and stage with explicit paths or **`git add -p`**) so unrelated local edits—especially in **`site/style.css`**—are not swept into the same commit as homepage or copy fixes.

## Conventions

- Public-safe content only; no secrets in commits.
- Match tone with [docs/executive-summary.md](docs/executive-summary.md).
- **`npm run assets:gallery`** may create local-only `site/public/index.html`; do not link it from public pages; the workflow drops gallery/design artifacts before deploy.
- **CSS:** flat layout, Bauhaus palette tokens (`--bg`, `--rose-gold`, `--baby-blue`, …). Avoid glass/backdrop-filter, card stacks, and heavy shadows on user-facing pages; prefer borders and spacing.
