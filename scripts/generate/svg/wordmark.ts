import type { Brand } from "../brand.js";
import { escapeXml } from "../lib/escape.js";

export type WordmarkVariant = "default" | "darkBg";

/**
 * Simple vector wordmark: word "Iconoclast" + smaller "AUDIO".
 * Replace with a proper logo SVG path export when the mark is finalized.
 */
export function wordmarkSvg(brand: Brand, variant: WordmarkVariant): string {
  const bg =
    variant === "darkBg" ? brand.colors.background : "#ffffff";
  const fg =
    variant === "darkBg" ? brand.colors.primary : brand.colors.background;
  const accent = brand.colors.accent;

  const title = escapeXml(brand.wordmark.headline);
  const sub = escapeXml(brand.wordmark.subline);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="560" height="120" viewBox="0 0 560 120">
  <rect width="560" height="120" fill="${bg}"/>
  <text x="40" y="78" font-family="${brand.fonts.display}, system-ui, sans-serif" font-size="42" font-weight="600" fill="${fg}" letter-spacing="-0.02em">${title}</text>
  <text x="40" y="108" font-family="${brand.fonts.body}, system-ui, sans-serif" font-size="14" font-weight="500" fill="${accent}" letter-spacing="0.35em">${sub}</text>
</svg>`;
}
