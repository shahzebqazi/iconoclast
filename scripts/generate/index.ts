/**
 * Build raster assets from SVG templates + brand tokens.
 * Run: npm run assets:build
 *
 * Outputs under `site/public/generated/` and `site/public/index.html` (asset gallery).
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { assetCatalog } from "./assetCatalog.js";
import { brand } from "./brand.js";
import { buildGalleryHtml } from "./galleryHtml.js";
import { faviconSvg } from "./svg/favicon.js";
import { heroPlaceholderSvg } from "./svg/heroPlaceholder.js";
import { ogImageSvg } from "./svg/ogImage.js";
import { wordmarkSvg } from "./svg/wordmark.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");
const outDir = path.join(repoRoot, "site", "public", "generated");

async function svgToPng(svg: string, file: string, width: number): Promise<void> {
  const buf = await sharp(Buffer.from(svg, "utf8")).resize(width).png().toBuffer();
  await writeFile(file, buf);
}

async function svgToPngSize(svg: string, file: string, width: number, height: number): Promise<void> {
  const buf = await sharp(Buffer.from(svg, "utf8"))
    .resize(width, height, { fit: "fill" })
    .png()
    .toBuffer();
  await writeFile(file, buf);
}

async function main(): Promise<void> {
  await mkdir(outDir, { recursive: true });
  await mkdir(path.join(outDir, "logo"), { recursive: true });
  await mkdir(path.join(outDir, "social"), { recursive: true });
  await mkdir(path.join(outDir, "hero"), { recursive: true });

  const favicon = faviconSvg(brand);
  const wordmarkDefault = wordmarkSvg(brand, "default");
  const wordmarkDark = wordmarkSvg(brand, "darkBg");
  const og = ogImageSvg(brand);
  const hero = heroPlaceholderSvg(brand);

  await writeFile(path.join(outDir, "favicon.svg"), favicon, "utf8");
  await writeFile(path.join(outDir, "logo", "wordmark-light-bg.svg"), wordmarkDefault, "utf8");
  await writeFile(path.join(outDir, "logo", "wordmark-dark-bg.svg"), wordmarkDark, "utf8");
  await writeFile(path.join(outDir, "social", "og-default.svg"), og, "utf8");
  await writeFile(path.join(outDir, "hero", "placeholder-wide.svg"), hero, "utf8");

  await svgToPng(favicon, path.join(outDir, "favicon-32.png"), 32);
  await svgToPng(favicon, path.join(outDir, "apple-touch-icon.png"), 180);
  await svgToPng(favicon, path.join(outDir, "pwa-192.png"), 192);
  await svgToPng(favicon, path.join(outDir, "pwa-512.png"), 512);
  await svgToPngSize(og, path.join(outDir, "social", "og-default.png"), 1200, 630);
  await svgToPngSize(hero, path.join(outDir, "hero", "placeholder-wide.png"), 1920, 1080);

  const manifest = {
    name: brand.name,
    short_name: "Iconoclast",
    description: `${brand.tagline}. Digital mastering, analog & vinyl, lab: Tone3000, AI, plugins.`,
    /** Site root on custom domain (iconoclastaud.io). */
    start_url: "/",
    display: "standalone",
    background_color: brand.colors.background,
    theme_color: brand.colors.background,
    icons: [
      { src: "pwa-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "pwa-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };

  await writeFile(
    path.join(outDir, "site.webmanifest"),
    `${JSON.stringify(manifest, null, 2)}\n`,
    "utf8",
  );

  const themeCss = `/* Generated — run npm run assets:build */
:root {
  --color-bg: ${brand.colors.background};
  --color-surface: ${brand.colors.surface};
  --color-fg: ${brand.colors.primary};
  --color-accent: ${brand.colors.accent};
  --color-digital: ${brand.colors.digital};
  --color-analog: ${brand.colors.analog};
  --color-vinyl: ${brand.colors.vinyl};
  --color-lab: ${brand.colors.lab};
  --font-display: "${brand.fonts.display}", system-ui, sans-serif;
  --font-body: "${brand.fonts.body}", system-ui, sans-serif;
}
`;

  await writeFile(path.join(outDir, "theme.css"), themeCss, "utf8");

  const galleryHtml = buildGalleryHtml(assetCatalog, brand.name, {
    assetPrefix: "generated/",
    homeHref: "https://iconoclastaud.io/site/",
  });
  await mkdir(path.join(repoRoot, "site", "public"), { recursive: true });
  await writeFile(path.join(repoRoot, "site", "public", "index.html"), galleryHtml, "utf8");

  console.log(`Wrote MVP assets to ${path.relative(repoRoot, outDir)}/`);
  console.log(`Gallery: ${path.relative(repoRoot, path.join(repoRoot, "site", "public", "index.html"))}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
