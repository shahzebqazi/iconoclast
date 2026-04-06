/**
 * Iconoclast Audio — brand tokens used by asset generators.
 * Edit this file to tune colors, typography, and wordmark before `npm run assets:build`.
 */
export const brand = {
  name: "Iconoclast Audio",
  tagline: "Mastering & audio lab",

  /** Wordmark lines (generators use these; keep headline short for layouts). */
  wordmark: {
    headline: "Iconoclast",
    subline: "AUDIO",
  },

  /** Primary surfaces: deep charcoal / near-black (studio, precision). */
  colors: {
    background: "#0c0d10",
    surface: "#14151a",
    primary: "#e8e6e1",
    accent: "#c9a227",
    accentMuted: "#8a7a4a",
    digital: "#6eb5d9",
    analog: "#c97d6e",
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
