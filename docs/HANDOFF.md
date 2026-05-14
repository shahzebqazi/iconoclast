# Agent handoff — public site (homepage & continuity)

**Last aligned with `main`:** 2026-05-14 (homepage + language UI settled after concurrent edits).

## What “fixed” means now

- **`site/index.html`**
  - **Booking strip** (`home-strip`): concrete intake line + **`home-actions`** with Links, Contact, and the **EN/FR** control (`data-site-lang-switcher`). The language control lives **here**, not in `<nav class="site-nav">`.
  - **Hero**: Toronto kicker, single **dek** line (no service laundry list), **no** `<ul class="home-services">`; scope points to **About**.
  - **`site/js/site-lang.js`** at end of body (`defer`).

- **`site/about/index.html`**
  - **`about-newspaper-page`** layout; masthead edition line “Iconoclast Audio · Toronto”.
  - Language switcher is in **`<main>`** (`.about-body-lang`), **not** in primary nav.

- **Other public pages**
  - EN/FR remains in **primary nav** unless policy changes; **Rates** is special: switcher must **not** be in primary nav (bilingual content is in-page). See **`scripts/verifyPublicSite.mjs`**.

## Invariants enforced in CI

Run **`npm run verify:public`** before every push touching `site/`.

- Rejects legacy **`<ul class="home-services">`** on the homepage.
- Encodes **where** `data-site-lang-switcher` may appear (homepage + About vs nav on other pages vs Rates). If you move the switcher, **update the verifier** in the same commit.

## CSS coupling

- **About newspaper** styles are scoped under **`body.about-newspaper-page`** in **`site/style.css`**. Do not delete that block while the About HTML uses those classes.
- **`site/style.css`** is large and often dirty in working trees—**stage paths explicitly** (see **AGENTS.md** → Ship).

## Next agent checklist

1. **`git pull`** `main`.
2. Read **`AGENTS.md`** and this file.
3. Edit **`site/index.html`** only with intention—assume **high conflict** with other agents.
4. **`npm run verify:public`** after HTML/CSS/JS changes.
5. **`git diff --staged`** before commit.

## Tone reference

[executive-summary.md](executive-summary.md) for voice; avoid corny strip copy—prefer plain studio intake language.
