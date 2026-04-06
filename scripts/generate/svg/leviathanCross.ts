import type { Brand } from "../brand.js";

export type LeviathanStroke = {
  stroke: string;
  /** Width in the same units as the parent viewBox (before any scale transform). */
  strokeWidth: number;
};

/**
 * Closed lemniscate in 100×100 space, centered at (50, 50). Stroked outline of a figure-eight.
 * When placed inside a scaled `<g>`, set stroke-width to parentStroke / scale so the stroke
 * matches non-scaled lines (SVG scales stroke with transform by default).
 */
const INFINITY_D_100 =
  "M 15 50 C 15 32 35 32 50 50 C 65 32 85 32 85 50 C 85 68 65 68 50 50 C 35 68 15 68 15 50 Z";

/**
 * Leviathan / Brimstone cross: vertical staff + horizontal bar + sulphur (lemniscate) at the junction.
 */
export function leviathanCrossGroup(
  cx: number,
  cy: number,
  unit: number,
  s: LeviathanStroke,
): string {
  const u = unit;
  const sw = s.strokeWidth;
  const vHalf = 22 * u;
  const hHalf = 18 * u;
  /** Lemniscate template is 100×100; scale to ~36×18 user units (× unit). */
  const infScale = 0.36 * u;
  const infinityStroke = sw / infScale;

  return `<g fill="none" stroke="${s.stroke}" stroke-linecap="round" stroke-linejoin="round">
  <g transform="translate(${cx} ${cy}) scale(${infScale.toFixed(4)}) translate(-50 -50)">
    <path d="${INFINITY_D_100}" stroke-width="${infinityStroke.toFixed(4)}"/>
  </g>
  <line x1="${cx}" y1="${cy - vHalf}" x2="${cx}" y2="${cy + vHalf}" stroke-width="${sw}"/>
  <line x1="${cx - hHalf}" y1="${cy}" x2="${cx + hHalf}" y2="${cy}" stroke-width="${sw}"/>
</g>`;
}

/** Tab / PWA icon: Leviathan cross on brand background. */
export function leviathanCrossFavicon(brand: Brand): string {
  const { background } = brand.colors;
  const stroke = brand.colors.accent;
  const inner = leviathanCrossGroup(32, 32, 1, { stroke, strokeWidth: 2.5 });
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="${background}"/>
  ${inner}
</svg>`;
}
