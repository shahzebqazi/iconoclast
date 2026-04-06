# MVP — required assets (Iconoclast Audio)

These are the minimum visual and metadata assets to ship a credible static marketing site. **Generated files** (see below) cover placeholders until you replace them with final photography and a custom logomark.

## Included via generators (`npm run assets:build`)

Outputs go to **`site/public/generated/`**. The gallery page is **`site/public/index.html`** (URL on GitHub Pages: **`/public/`**).

| Output | Purpose |
|--------|---------|
| `generated/favicon.svg`, `favicon-32.png` | Browser tab |
| `generated/apple-touch-icon.png` | iOS home screen |
| `generated/pwa-*.png`, `site.webmanifest` | Optional installable PWA |
| `generated/logo/wordmark-*.svg` | Header/footer until final logo |
| `generated/social/og-default.{svg,png}` | Open Graph / link previews |
| `generated/hero/placeholder-wide.{svg,png}` | Hero until studio photo |
| `generated/theme.css` | CSS variables for the site |

## Still needed from you (not auto-generated)

- **Final logo** — vector logomark or custom wordmark (replace generator SVGs).
- **One hero photograph** — studio, console, or abstract; high resolution for crop.
- **Copy** — headline, services blurbs (digital / analog / vinyl), lab one-liners (Tone3000, AI agents, plugins), contact CTA.
- **Audio** — optional short reel (rights-cleared); host separately (SoundCloud, etc.).
- **Legal** — privacy / terms if you collect emails or run analytics.

## Optional before launch

- Twitter/X card can reuse `og-default.png` or a second crop.
- Team photo, client logos (with permission).
