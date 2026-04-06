# Agent prompt: Site UX (Iconoclast Audio — iconoclastaud.io / GitHub Pages)

Copy everything below the line into a task for a coding agent that is refactoring **layout and CSS** for the public site. Adjust paths if the built site lives under `site/` or another folder.

---

## Context

The live site at **https://iconoclastaud.io/** (redirects to `/site/`) should keep its **palette and background** (deep base, radial gradients, accent blues, gold highlights) but must **not** feel like a stack of floating dashboard cards. Prior work over-used **glass panels** on every block, which reads as misaligned “cards” and fights the content.

## UX review (findings to fix)

1. **Card fatigue:** `nav`, `header`, each main `section.panel.glass`, and `footer` all use the same glass + border + shadow treatment. That turns the whole page into separate boxes instead of one coherent reading column.
2. **Misaligned edges:** Horizontal padding is inconsistent (e.g. shell vs main vs header use different values). Max-width is shared, but **left/right gutters do not line up** on a single grid, so blocks feel “off.”
3. **Navigation jump:** Below ~640px the brand is forced to its own row (`nav-sep` + `flex-basis: 100%`) with links following; at wider breakpoints the bar centers. The **alignment mode changes** at a breakpoint instead of one stable rhythm.
4. **Responsiveness:** Layout should be refactored so **one set of rules** governs narrow → wide (fluid padding, consistent column, no surprise realignment). Test from ~320px width upward.

## Design direction (required)

- **Keep:** Background color tokens, radial-gradient atmosphere, accent/gold/ember semantics, readable body type, skip link, focus styles, semantic landmarks.
- **Remove:** Using **glass/card panels as the default container** for every section. Do **not** wrap each `<section>` in a bordered, shadowed, rounded box.
- **Replace with:** A **flat, editorial layout** — one primary content column, sections separated by **spacing and/or a single hairline rule** (e.g. `border-top` on `<section>` or a subtle `::before`), not boxed cards.
- **Optional chrome:** At most **one** subtle bar (e.g. sticky top nav with light glass **or** a thin top border on the first section) — not five stacked glass rectangles.

## Layout system (implementation checklist)

1. **Single alignment grid:** Define CSS variables, e.g. `--content-max` and `--page-gutter`, and apply the **same horizontal padding** to `nav`, `header`, `main`, and `footer` wrappers. Avoid mixing `1rem` and `1.5rem` gutters unless they are intentional nested offsets (if nested, document why).
2. **No section cards:** Main content sections should be plain `<section>` (or `<article>`) with padding/margins only — **no** `.glass` on every section by default.
3. **Responsive:** Use fluid gutters (`clamp()` or `min()`), a single `max-width` column, and avoid breakpoint-driven **changes in text alignment** unless there is a clear reason (e.g. footer fine print).
4. **Navigation:** Prefer a **stable alignment** across breakpoints: e.g. brand + links in one flex row with wrap and consistent gap, or a documented mobile pattern — avoid the “brand row then link row” hack unless it matches the same gutter as the rest of the page.
5. **Link lists / CTAs:** If you need prominent links (e.g. “link hub” pages), use **simple lists or buttons** aligned to the content column — **not** a second visual system of boxed tiles unless scoped to one page and documented. The existing `.link-stack` pattern is acceptable only if it **shares the same width and gutters** as body text (no narrow centered column that drifts from the main grid).

## Anti-patterns (do not reintroduce)

- Multiple stacked `.glass` / `.panel` wrappers for sequential sections on the same page.
- Different horizontal padding on siblings that should share one vertical edge.
- Centered nav on desktop and left-aligned nav on mobile **without** an explicit, accessible pattern (e.g. menu button).

## Deliverables

- Updated HTML structure (fewer decorative wrappers) and CSS that implements the layout system above.
- Short note in the repo (e.g. README or contributor doc) describing `--content-max` / `--page-gutter` and the “no default section cards” rule so future edits stay consistent.

---

End of prompt.
