/** Usage: npx tsx scripts/generate/chromaToAlpha.ts <input.png> <output.png> */
import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";
import { keyChromaGreenTransparent } from "./lib/chromaGreen.js";

async function main(): Promise<void> {
  const [inPath, outPath] = process.argv.slice(2);
  if (!inPath || !outPath) {
    console.error("Usage: npx tsx scripts/generate/chromaToAlpha.ts <input.png> <output.png>");
    process.exit(1);
  }

  const buf = await readFile(inPath);
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const ch = info.channels;
  keyChromaGreenTransparent(data, ch);

  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile(outPath);
  console.log(`Wrote ${outPath} (${info.width}×${info.height})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
