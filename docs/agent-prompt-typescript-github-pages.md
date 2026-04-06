# Agent prompt: TypeScript GitHub Pages site (next slice)

Copy everything below the line into a new task for a coding agent. Replace `OWNER/REPO` with this repository’s GitHub path.

---

You are implementing a **TypeScript** static site for **Iconoclast Audio**, deployed to **GitHub Pages** from the same repo that already contains:

- `README.md` — org landing copy
- `docs/executive-summary.md` — narrative and alignment defaults (source markdown)
- `site/` — hand-written HTML + CSS (current public site; replace or generate into this folder or `dist/`)

**Goals**

1. Add a small TypeScript build (e.g. Vite, or esbuild) that outputs static HTML/CSS/JS into **`site/`** (or `dist/` with the existing Pages workflow updated to upload that folder). Keep **`docs/*.md`** as editorial source unless you explicitly migrate content.
2. Reuse or echo the **voice and facts** from `README.md` and `docs/executive-summary.md` (Iconoclast Audio, audio engineering, WIP, public-safe).
3. **Accessibility:** semantic HTML, readable contrast, focus styles, skip link if needed.
4. **No secrets** in repo; no API keys; no private data.
5. Document in `README.md` how to run `dev`, `build`, and where Pages should point.

**Constraints**

- Keep dependencies minimal and justified.
- Do not remove the existing markdown sources; the TS site can link to them on GitHub (`https://github.com/OWNER/REPO/blob/main/docs/executive-summary.md`) or duplicate short excerpts in generated pages—choose one clear approach and document it.
- If you add GitHub Actions for Pages, use the official `actions/upload-pages-artifact` / `actions/deploy-pages` pattern or equivalent, and test locally first.

**Deliverables**

- Source under something like `site/` or `web/` with TypeScript.
- Build script and lockfile updates as needed.
- Updated root `README.md` with build and deploy instructions.

---

End of prompt.
