import type { Brand } from "../brand.js";

export type LeviathanStroke = {
  stroke: string;
  /** Width in the same units as the local viewBox (before optional transform). */
  strokeWidth: number;
};

/**
 * Leviathan / Brimstone cross: vertical staff + horizontal bar + infinity (sulphur) at the junction.
 * Returns SVG fragment (group) positioned with translate; use inside a parent <svg>.
 */
/** Lemniscate (figure-eight / sulphur) in 100×100 space, centered at (50, 50). */
const INFINITY_D_100 =
  "M 15 50 C 15 32 35 32 50 50 C 65 32 85 32 85 50 C 85 68 65 68 50 50 C 35 68 15 68 15 50 Z";

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
  /** Scale lemniscate from 100×100 template to ~36×18 display units (× unit). */
  const infScale = (0.36 * u).toFixed(4);

  return `<g fill="none" stroke="${s.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">
  <g transform="translate(${cx} ${cy}) scale(${infScale}) translate(-50 -50)">
    <path d="${INFINITY_D_100}"/>
  </g>
  <line x1="${cx}" y1="${cy - vHalf}" x2="${cx}" y2="${cy + vHalf}"/>
  <line x1="${cx - hHalf}" y1="${cy}" x2="${cx + hHalf}" y2="${cy}"/>
</g>`;
}

/** Favicon-sized mark centered in a 64×64 viewBox. */
export function leviathanCrossFavicon(brand: Brand): string {
  const { background } = brand.colors;
  const stroke = brand.colors.accent;
  const inner = leviathanCrossGroup(32, 32, 1, { stroke, strokeWidth: 2.25 });
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="${background}"/>
  ${inner}
</svg>`;
}
