/**
 * Iconoclast Audio — brand tokens used by asset generators.
 * Edit this file to tune colors, typography, and wordmark before `npm run assets:build`.
 */
export const brand = {
  name: "Iconoclast Audio",
  tagline: "Extreme Metal Mastering",

  /** Wordmark lines (generators use these; keep headline short for layouts). */
  wordmark: {
    headline: "Iconoclast",
    subline: "AUDIO",
  },

  /**
   * Align with `site/style.css` (dark theme): metal / glass, gold + cool accent.
   */
  colors: {
    background: "#06080d",
    surface: "#0e1118",
    primary: "#eef0f5",
    accent: "#d4121f",
    accentMuted: "#8d1018",
    digital: "#8ab4ff",
    analog: "#b85c4a",
    vinyl: "#9b8bc9",
    lab: "#5cb89a",
  },

  /** Web font stacks (marketing site). Generators embed fallbacks only in SVG text. */
  fonts: {
    display: "IBM Plex Sans",
    body: "IBM Plex Sans",
  },
} as const;

export type Brand = typeof brand;
