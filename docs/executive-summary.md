# Executive summary — Iconoclast Audio

**Status:** Work in progress. This document is safe to read in public; it describes intent, not secrets.

## What this is

**Iconoclast Audio** is a public-facing hub for audio engineering work: experiments, releases, and how the work is approached. Engineering-heavy source and CI may live elsewhere (for example GitLab); this GitHub presence is what ships to the open web—README, documentation, and a minimal static site via GitHub Pages.

## Audience

- People who care about sound quality, process, and tools.
- Collaborators and future contributors who want context before diving into repos or mirrors.

## Goals (near term)

- A clear public landing ([README](../README.md)) and a longer narrative in this document.
- A static site under [`site/`](../site/) (HTML pages, not raw Markdown on Pages) deployed via GitHub Actions.
- Later: a TypeScript-based GitHub Pages site (see [Agent prompt: TypeScript GitHub Pages site](agent-prompt-typescript-github-pages.md)).

**Repo mechanics** (layout, Pages, agent prompts): [AGENTS.md](../AGENTS.md).

## Product alignment (defaults for the next build)

These assumptions are in place unless you change them in a future revision:

- **Brand:** Iconoclast Audio — audio engineering, not a generic SaaS landing.
- **Tone:** Direct, technical, honest about WIP; no hype, no fake metrics.
- **Scope v1:** Static content, accessible pages, no user accounts or API in the first TypeScript slice.
- **Hosting:** GitHub Pages from this repo’s default branch; keep build output compatible with `gh-pages` or branch-root deploy.

## Out of scope (for now)

- Automated GitHub Actions beyond what Pages needs (add when there is a concrete workflow).
- Cursor or “glass UI” telemetry in CI—only document if you introduce it deliberately.

---

*Last updated as part of the public documentation launch.*
