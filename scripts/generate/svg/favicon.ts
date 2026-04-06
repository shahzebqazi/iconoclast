import type { Brand } from "../brand.js";

/** Minimal mark for small sizes: monogram "IA" in a square. */
export function faviconSvg(brand: Brand): string {
  const { background, primary, accent } = brand.colors;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="${background}"/>
  <text x="32" y="42" font-family="${brand.fonts.display}, system-ui, sans-serif" font-size="28" font-weight="700" fill="${primary}" text-anchor="middle">IA</text>
  <rect x="18" y="48" width="28" height="3" rx="1" fill="${accent}"/>
</svg>`;
}
