import type { Brand } from "../brand.js";
import { leviathanCrossGroup } from "./leviathanCross.js";

/** Abstract hero placeholder (no photo): gradient + Leviathan cross + service pills. */
export function heroPlaceholderSvg(brand: Brand, width = 1920, height = 1080): string {
  const { background, surface, digital, analog, vinyl, lab, primary, accent } =
    brand.colors;

  const pills = [
    { label: "Digital mastering", fill: digital },
    { label: "Analog", fill: analog },
    { label: "Vinyl", fill: vinyl },
    { label: "Lab · AI · Plugins", fill: lab },
  ];

  const pillEls = pills
    .map((p, i) => {
      const x = 120 + i * 220;
      return `<rect x="${x}" y="${height - 180}" width="200" height="44" rx="22" fill="${p.fill}" fill-opacity="0.35"/>
  <text x="${x + 100}" y="${height - 152}" font-family="${brand.fonts.body}, system-ui, sans-serif" font-size="16" font-weight="600" fill="${primary}" text-anchor="middle">${p.label}</text>`;
    })
    .join("\n  ");

  const mark = leviathanCrossGroup(width * 0.5, height * 0.42, 4.2, {
    stroke: accent,
    strokeWidth: 5,
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <radialGradient id="r" cx="30%" cy="20%" r="70%">
      <stop offset="0%" stop-color="${surface}"/>
      <stop offset="100%" stop-color="${background}"/>
    </radialGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#r)"/>
  <circle cx="${width * 0.75}" cy="${height * 0.35}" r="280" fill="${digital}" fill-opacity="0.08"/>
  <circle cx="${width * 0.25}" cy="${height * 0.55}" r="200" fill="${accent}" fill-opacity="0.06"/>
  <g opacity="0.22">
${mark}
  </g>
  ${pillEls}
</svg>`;
}
