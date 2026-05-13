import type { Brand } from "../brand.js";
import { escapeXml } from "../lib/escape.js";
import { leviathanCrossGroup } from "./leviathanCross.js";

const W = 1200;
const H = 630;

export function ogImageSvg(brand: Brand): string {
  const bg = brand.colors.background;
  const fg = brand.colors.primary;
  const accent = brand.colors.accent;
  const line2 = escapeXml(`${brand.tagline} · Production · Mixing · Session Bass/Guitar`);

  const mark = leviathanCrossGroup(980, 300, 4.5, { stroke: accent, strokeWidth: 6 });

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg}"/>
      <stop offset="100%" stop-color="${brand.colors.surface}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect x="0" y="0" width="${W}" height="6" fill="${accent}"/>
  ${mark}
  <text x="80" y="280" font-family="${brand.fonts.display}, system-ui, sans-serif" font-size="72" font-weight="600" fill="${fg}">${escapeXml(
    brand.name,
  )}</text>
  <text x="80" y="360" font-family="${brand.fonts.body}, system-ui, sans-serif" font-size="28" font-weight="400" fill="${accent}">${line2}</text>
  <text x="80" y="520" font-family="${brand.fonts.body}, system-ui, sans-serif" font-size="20" fill="#7a7d85">iconoclast.audio</text>
</svg>`;
}
