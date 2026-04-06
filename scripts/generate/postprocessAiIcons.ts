/**
 * After `index.ts`: chroma-key fireball, white-key oni → favicons and PNGs.
 * CLI: npx tsx scripts/generate/postprocessAiIcons.ts [fireball.webp] [oni.webp]
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { keyChromaGreenTransparent } from "./lib/chromaGreen.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");
const gen = path.join(repoRoot, "site", "public", "generated");

function whiteTransparent(data: Buffer, channels: number, threshold: number): void {
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i]!;
    const g = data[i + 1]!;
    const b = data[i + 2]!;
    if (r >= threshold && g >= threshold && b >= threshold) {
      data[i + 3] = 0;
    }
  }
}

async function rawWithAlpha(buf: Buffer): Promise<{ data: Buffer; info: sharp.OutputInfo }> {
  return sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
}

export async function runPostprocessAiIcons(
  fireballSrc?: string,
  oniSrc?: string,
): Promise<void> {
  const fb = fireballSrc ?? path.join(__dirname, "ai-cache", "fireball-ring.webp");
  const oni = oniSrc ?? path.join(__dirname, "ai-cache", "oni-mask.webp");

  await mkdir(path.join(gen, "icons"), { recursive: true });
  await mkdir(path.join(__dirname, "ai-cache"), { recursive: true });

  const fbBuf = await readFile(fb);
  let { data: fbData, info: fbInfo } = await rawWithAlpha(fbBuf);
  keyChromaGreenTransparent(fbData, fbInfo.channels);
  const fireballPng = await sharp(fbData, {
    raw: { width: fbInfo.width, height: fbInfo.height, channels: 4 },
  })
    .png()
    .toBuffer();
  await sharp(fireballPng)
    .resize(1024, 1024, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(gen, "logo", "iconoclast-audio-blackmetal-fire.png"));

  const oniBuf = await readFile(oni);
  let { data: oniData, info: oniInfo } = await rawWithAlpha(oniBuf);
  whiteTransparent(oniData, oniInfo.channels, 235);

  const oniBase = await sharp(oniData, {
    raw: { width: oniInfo.width, height: oniInfo.height, channels: 4 },
  })
    .png()
    .toBuffer();

  const iconSizes: [string, number][] = [
    ["favicon-32.png", 32],
    ["apple-touch-icon.png", 180],
    ["pwa-192.png", 192],
    ["pwa-512.png", 512],
    ["icons/oni-mask-64.png", 64],
    ["icons/oni-mask-128.png", 128],
  ];
  for (const [name, w] of iconSizes) {
    await sharp(oniBase)
      .resize(w, w, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(gen, name));
  }

  const favicon64 = await sharp(oniBase)
    .resize(64, 64, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  const b64 = favicon64.toString("base64");
  const faviconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" width="64" height="64">
  <image width="64" height="64" href="data:image/png;base64,${b64}" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
  await writeFile(path.join(gen, "favicon.svg"), faviconSvg, "utf8");
}

export async function cliPostprocess(): Promise<void> {
  const args = process.argv.slice(2);
  await runPostprocessAiIcons(args[0], args[1]);
}

if (process.argv[1]?.includes("postprocessAiIcons")) {
  cliPostprocess().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
