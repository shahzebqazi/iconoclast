/**
 * Remove solid chroma green (#00FF00) from an image and write PNG with alpha.
 * Usage: npx tsx scripts/generate/chromaToAlpha.ts <input.png> <output.png>
 */
import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const GREEN = { r: 0, g: 255, b: 0 };

function distSq(
  r: number,
  g: number,
  b: number,
): number {
  const dr = r - GREEN.r;
  const dg = g - GREEN.g;
  const db = b - GREEN.b;
  return dr * dr + dg * dg + db * db;
}

async function main(): Promise<void> {
  const [inPath, outPath] = process.argv.slice(2);
  if (!inPath || !outPath) {
    console.error("Usage: npx tsx scripts/generate/chromaToAlpha.ts <input.png> <output.png>");
    process.exit(1);
  }

  const buf = await readFile(inPath);
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const ch = info.channels;
  const tolerance = 120 * 120 * 3; // squared distance threshold (tune if edges are harsh)

  for (let i = 0; i < data.length; i += ch) {
    const r = data[i]!;
    const g = data[i + 1]!;
    const b = data[i + 2]!;
    if (distSq(r, g, b) < tolerance && g > r + 40 && g > b + 40) {
      data[i + 3] = 0;
    }
  }

  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile(outPath);
  console.log(`Wrote ${outPath} (${info.width}×${info.height})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
