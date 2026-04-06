# Executive summary — Iconoclast Audio

**Status:** Work in progress. This document is safe to read in public; it describes intent, not secrets.

## What this is

**Iconoclast Audio** is a public-facing hub for audio engineering work: experiments, releases, and how the work is approached.

**Visual identity (at a glance):** The public site uses a **pen-style oni mask** as the tab/bookmark icon (transparent PNGs under `site/public/generated/icons/`). **Wordmarks** live in `site/public/generated/logo/`. These are generated assets, not a claim of cultural ownership—see the Ritual page on the live site for tone. Engineering-heavy source and CI may live elsewhere (for example GitLab); this GitHub presence is what ships to the open web—README, documentation, and a minimal static site via GitHub Pages.

## Audience

- People who care about sound quality, process, and tools.
- Collaborators and future contributors who want context before diving into repos or mirrors.

## Goals (near term)

- A clear public landing ([README](../README.md)) and a longer narrative in this document.
- A multi-page static site under [`site/`](../site/) deployed via GitHub Actions; canonical URL on the custom domain is **`https://iconoclastaud.io/`** (repo `site/` maps to the domain root; the old **`/site/`** URL prefix is deprecated).
- Later: a TypeScript-based GitHub Pages site (see [Agent prompt: TypeScript GitHub Pages site](agent-prompt-typescript-github-pages.md)).

**Repo mechanics** (layout, Pages, agent prompts): [AGENTS.md](../AGENTS.md).

## Product alignment (defaults for the next build)

These assumptions are in place unless you change them in a future revision:

- **Brand:** Iconoclast Audio — audio engineering, not a generic SaaS landing.
- **Tone:** Direct, technical, honest about WIP; no hype, no fake metrics.
- **Visual / UX:** Flat static HTML and CSS under `site/style.css` — Bauhaus-inspired palette (rose gold, gold, baby blue, seafoam on warm neutrals), typography-led layout, borders and spacing instead of glass panels or card stacks. No decorative gradients or faux-3D chrome on the live pages.
- **Scope v1:** Static content, accessible pages, no user accounts or API in the first TypeScript slice.
- **Hosting:** GitHub Pages from `main`; the workflow uploads the **`site/`** directory as the site root (see **`.github/workflows/pages.yml`** and **`site/.nojekyll`**).

## Out of scope (for now)

- Automated GitHub Actions beyond what Pages needs (add when there is a concrete workflow).
- “AI slop” UI patterns (generic card grids, glassmorphism stacks, oversized hero blobs) on the public site—keep the surface honest and readable.

---

*Last updated as part of the public documentation launch.*
