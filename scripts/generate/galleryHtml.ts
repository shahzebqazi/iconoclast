import { escapeXml } from "./lib/escape.js";
import type { AssetEntry } from "./assetCatalog.js";

function esc(s: string): string {
  return escapeXml(s);
}

function isPreviewable(path: string): boolean {
  return path.endsWith(".png") || path.endsWith(".svg");
}

export type GalleryOptions = {
  /** Prefix before `relativePath` in hrefs (e.g. `generated/`). */
  assetPrefix: string;
  /** Link to main site home (from `site/public/index.html`). */
  homeHref: string;
};

/**
 * Single-page gallery served at `site/public/index.html` (GitHub Actions deploys `site/`).
 */
export function buildGalleryHtml(
  entries: AssetEntry[],
  siteTitle: string,
  options: GalleryOptions,
): string {
  const { assetPrefix, homeHref } = options;
  const byCategory = new Map<string, AssetEntry[]>();
  for (const e of entries) {
    const list = byCategory.get(e.category) ?? [];
    list.push(e);
    byCategory.set(e.category, list);
  }

  const sections = [...byCategory.entries()]
    .map(([category, items]) => {
      const cards = items
        .map((a) => {
          const href = `${assetPrefix}${a.relativePath}`;
          const preview = isPreviewable(a.relativePath)
            ? `<div class="preview"><img src="${esc(href)}" alt="" loading="lazy" /></div>`
            : `<div class="preview preview--file"><span class="ext">${esc(
                a.relativePath.split(".").pop() ?? "file",
              )}</span></div>`;
          return `<article class="card">
  ${preview}
  <div class="meta">
    <h3>${esc(a.title)}</h3>
    <p class="path"><code>${esc(href)}</code></p>
    <p class="desc">${esc(a.description)}</p>
    <p><a href="${esc(href)}" download>Download</a> · <a href="${esc(href)}" target="_blank" rel="noopener">Open</a></p>
  </div>
</article>`;
        })
        .join("\n");
      return `<section class="block">
  <h2>${esc(category)}</h2>
  <div class="grid">${cards}</div>
</section>`;
    })
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(siteTitle)} — Generated assets</title>
  <link rel="stylesheet" href="${esc(`${assetPrefix}theme.css`)}" />
  <link rel="icon" href="${esc(`${assetPrefix}favicon.svg`)}" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="${esc(`${assetPrefix}apple-touch-icon.png`)}" />
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: var(--font-body);
      background: var(--color-bg);
      color: var(--color-fg);
      line-height: 1.5;
    }
    header {
      padding: 2.5rem 1.5rem 2rem;
      border-bottom: 1px solid color-mix(in srgb, var(--color-fg) 12%, transparent);
      background: linear-gradient(180deg, var(--color-surface) 0%, var(--color-bg) 100%);
    }
    header h1 {
      margin: 0 0 0.35rem;
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 1.75rem;
      letter-spacing: -0.02em;
    }
    header p { margin: 0; color: color-mix(in srgb, var(--color-fg) 72%, transparent); max-width: 42rem; }
    .crumb { margin: 0 0 1rem; font-size: 0.9rem; }
    .crumb a { color: var(--color-digital); text-decoration: none; }
    .crumb a:hover { text-decoration: underline; }
    main { padding: 2rem 1.5rem 4rem; max-width: 1200px; margin: 0 auto; }
    .block { margin-bottom: 2.75rem; }
    .block h2 {
      font-family: var(--font-display);
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--color-accent);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin: 0 0 1rem;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.25rem;
    }
    .card {
      border: 1px solid color-mix(in srgb, var(--color-fg) 14%, transparent);
      border-radius: 10px;
      overflow: hidden;
      background: var(--color-surface);
    }
    .preview {
      aspect-ratio: 16 / 10;
      background: repeating-conic-gradient(color-mix(in srgb, var(--color-fg) 6%, transparent) 0% 25%, transparent 0% 50%) 50% / 20px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .preview img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
    .preview--file {
      aspect-ratio: auto;
      min-height: 5rem;
      padding: 1rem;
    }
    .preview--file .ext {
      font-family: ui-monospace, monospace;
      font-size: 0.85rem;
      color: var(--color-accent);
    }
    .meta { padding: 1rem 1.1rem 1.15rem; }
    .meta h3 { margin: 0 0 0.35rem; font-size: 1rem; font-weight: 600; }
    .path { margin: 0 0 0.5rem; font-size: 0.8rem; word-break: break-all; }
    .path code { color: color-mix(in srgb, var(--color-fg) 78%, transparent); }
    .desc { margin: 0 0 0.75rem; font-size: 0.9rem; color: color-mix(in srgb, var(--color-fg) 88%, transparent); }
    .meta a { color: var(--color-digital); text-decoration: none; }
    .meta a:hover { text-decoration: underline; }
    footer {
      padding: 1.5rem;
      text-align: center;
      font-size: 0.85rem;
      color: color-mix(in srgb, var(--color-fg) 55%, transparent);
      border-top: 1px solid color-mix(in srgb, var(--color-fg) 10%, transparent);
    }
  </style>
</head>
<body>
  <header>
    <p class="crumb"><a href="${esc(homeHref)}">← Iconoclast Audio site</a></p>
    <h1>${esc(siteTitle)}</h1>
    <p>Generated MVP assets (favicons, wordmarks, social and hero images, theme tokens, web manifest). Rebuild with <code>npm run assets:build</code>.</p>
  </header>
  <main>
${sections}
  </main>
  <footer>Iconoclast Audio · asset gallery</footer>
</body>
</html>
`;
}
