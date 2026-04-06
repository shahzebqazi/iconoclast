/** Shared chroma-key for #00FF00 → transparent (raw RGBA buffer). */
const GREEN = { r: 0, g: 255, b: 0 };
const TOLERANCE_SQ = 120 * 120 * 3;

export function keyChromaGreenTransparent(data: Buffer, channels: number): void {
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i]!;
    const g = data[i + 1]!;
    const b = data[i + 2]!;
    const dr = r - GREEN.r;
    const dg = g - GREEN.g;
    const db = b - GREEN.b;
    if (dr * dr + dg * dg + db * db < TOLERANCE_SQ && g > r + 40 && g > b + 40) {
      data[i + 3] = 0;
    }
  }
}
