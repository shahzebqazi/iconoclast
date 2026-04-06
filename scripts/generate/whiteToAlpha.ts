/**
 * Make near-white pixels transparent (for pen art on white paper).
 * Usage: npx tsx scripts/generate/whiteToAlpha.ts <input.png|webp> <output.png> [threshold 0-255]
 */
import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

async function main(): Promise<void> {
  const [inPath, outPath, thStr] = process.argv.slice(2);
  if (!inPath || !outPath) {
    console.error(
      "Usage: npx tsx scripts/generate/whiteToAlpha.ts <input> <output.png> [threshold]",
    );
    process.exit(1);
  }
  const threshold = thStr ? Number(thStr) : 235;
  const buf = await readFile(inPath);
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const ch = info.channels;
  for (let i = 0; i < data.length; i += ch) {
    const r = data[i]!;
    const g = data[i + 1]!;
    const b = data[i + 2]!;
    if (r >= threshold && g >= threshold && b >= threshold) {
      data[i + 3] = 0;
    }
  }
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile(outPath);
  console.log(`Wrote ${outPath} (${info.width}×${info.height}) threshold=${threshold}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
