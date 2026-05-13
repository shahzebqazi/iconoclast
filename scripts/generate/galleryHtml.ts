import { escapeXml } from "./lib/escape.js";
import type { AssetEntry } from "./assetCatalog.js";

function esc(s: string): string {
  return escapeXml(s);
}

function isPreviewable(path: string): boolean {
  return path.endsWith(".png") || path.endsWith(".svg");
}

function slug(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "asset";
}

export type GalleryOptions = {
  assetPrefix: string;
  /** Canonical URL to main site home (e.g. https://iconoclastaud.io/) */
  homeHref: string;
};

/**
 * Dev-only asset index at `site/public/index.html` — flat list, same stylesheet as main site.
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

  let assetCounter = 0;

  const sections = [...byCategory.entries()]
    .map(([category, items]) => {
      const catId = slug(category);
      const rows = items
        .map((a) => {
          assetCounter += 1;
          const id = `a-${assetCounter}-${slug(a.relativePath)}`;
          const href = `${assetPrefix}${a.relativePath}`;
          const preview = isPreviewable(a.relativePath)
            ? `<div class="asset-preview"><img src="${esc(href)}" alt="" loading="lazy" /></div>`
            : `<div class="asset-preview asset-preview--file"><span class="asset-ext">${esc(
                a.relativePath.split(".").pop() ?? "file",
              )}</span></div>`;
          return `<article class="asset-row" aria-labelledby="${esc(id)}">
  ${preview}
  <div class="asset-body">
    <h3 id="${esc(id)}">${esc(a.title)}</h3>
    <p class="asset-path"><code>${esc(href)}</code></p>
    <p class="asset-desc">${esc(a.description)}</p>
    <p class="asset-actions"><a href="${esc(href)}" download>Download</a> · <a href="${esc(href)}" target="_blank" rel="noopener">Open</a></p>
  </div>
</article>`;
        })
        .join("\n");
      return `<section class="asset-section" aria-labelledby="cat-${esc(catId)}">
  <h2 id="cat-${esc(catId)}">${esc(category)}</h2>
  <div class="asset-list">
${rows}
  </div>
</section>`;
    })
    .join("\n");

  const hostLabel = homeHref.replace(/^https?:\/\//i, "").replace(/\/$/, "");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(siteTitle)} — Generated assets</title>
  <meta name="description" content="Favicons, wordmarks, and generated files for Iconoclast Audio. Rebuild with npm run assets:build." />
  <link rel="stylesheet" href="../style.css" />
  <link rel="icon" href="${esc(`${assetPrefix}favicon.svg`)}" type="image/svg+xml" />
  <link rel="icon" href="${esc(`${assetPrefix}favicon-32.png`)}" type="image/png" sizes="32x32" />
  <link rel="apple-touch-icon" href="${esc(`${assetPrefix}apple-touch-icon.png`)}" />
</head>
<body class="gallery">
  <a class="skip" href="#main">Skip to content</a>
  <div class="site-shell">
    <nav class="site-nav" aria-label="Primary">
      <a class="nav-brand" href="${esc(homeHref)}">
        <img src="${esc(`${assetPrefix}logo/iconoclast-mastering-blackletter.png`)}" alt="" class="nav-brand__logo" width="200" height="43" />
      </a>
      <span class="nav-sep" aria-hidden="true"></span>
      <a href="${esc(homeHref)}">Home</a>
      <a href="index.html" aria-current="page">Assets</a>
    </nav>
  </div>
  <header class="site-header gallery-header">
    <div class="gallery-header-brand">
      <img src="${esc(`${assetPrefix}icons/oni-mask-128.png`)}" width="40" height="40" alt="" />
      <div>
        <p class="gallery-back"><a href="${esc(homeHref)}">← ${esc(hostLabel)}</a></p>
        <h1>${esc(siteTitle)} — assets</h1>
        <p class="tagline">Generated files under <code>public/generated/</code>. Rebuild with <code>npm run assets:build</code>.</p>
      </div>
    </div>
  </header>
  <main id="main">
${sections}
  </main>
  <footer class="site-footer">
    <div class="site-footer-brand">
      <img src="${esc(`${assetPrefix}icons/oni-mask-64.png`)}" width="24" height="24" alt="" />
      <p><a href="${esc(homeHref)}">Home</a> · Iconoclast Audio</p>
    </div>
  </footer>
</body>
</html>
`;
}
