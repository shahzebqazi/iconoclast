/**
 * Human-readable list of generator outputs for the asset gallery.
 * Paths are relative to `site/public/generated/`.
 */
export type AssetEntry = {
  category: string;
  relativePath: string;
  title: string;
  description: string;
};

export const assetCatalog: AssetEntry[] = [
  {
    category: "Favicon & app icons",
    relativePath: "favicon.svg",
    title: "Favicon (vector)",
    description:
      "Vector favicon with the Leviathan (Brimstone) cross. Use as the primary tab icon reference; raster sizes are exported below.",
  },
  {
    category: "Favicon & app icons",
    relativePath: "favicon-32.png",
    title: "Favicon 32×32",
    description: "PNG fallback for browsers that prefer raster favicons.",
  },
  {
    category: "Favicon & app icons",
    relativePath: "apple-touch-icon.png",
    title: "Apple touch icon",
    description: "180×180 PNG for iOS home screen and Safari pinned tabs.",
  },
  {
    category: "Favicon & app icons",
    relativePath: "pwa-192.png",
    title: "PWA icon 192×192",
    description: "Maskable app icon for installable PWA and Android shortcuts.",
  },
  {
    category: "Favicon & app icons",
    relativePath: "pwa-512.png",
    title: "PWA icon 512×512",
    description: "High-resolution PWA icon for splash screens and stores.",
  },
  {
    category: "Logo",
    relativePath: "logo/wordmark-light-bg.svg",
    title: "Wordmark (light background)",
    description:
      "Wordmark with Leviathan cross for light surfaces.",
  },
  {
    category: "Logo",
    relativePath: "logo/wordmark-dark-bg.svg",
    title: "Wordmark (dark background)",
    description: "Same wordmark tuned for dark UI backgrounds and headers (gold cross on deep field).",
  },
  {
    category: "Social",
    relativePath: "social/og-default.svg",
    title: "Open Graph image (SVG source)",
    description: "Vector source for the default link preview card (1200×630).",
  },
  {
    category: "Social",
    relativePath: "social/og-default.png",
    title: "Open Graph image (PNG)",
    description: "Raster OG/Twitter card at 1200×630 for social and messaging previews.",
  },
  {
    category: "Hero",
    relativePath: "hero/placeholder-wide.svg",
    title: "Hero placeholder (SVG)",
    description:
      "Wide abstract hero with service and lab cues; replace with photography when ready.",
  },
  {
    category: "Hero",
    relativePath: "hero/placeholder-wide.png",
    title: "Hero placeholder (PNG)",
    description: "1920×1080 raster export for static site hero slots.",
  },
  {
    category: "Hero — AI (metal logo concepts)",
    relativePath: "hero/ai-metal-hero-primary.png",
    title: "AI hero — primary (gold / default)",
    description:
      "1920×1080 AI-generated wide hero: death-metal logo style, Leviathan cross, inverted pentagrams, grim reaper / occult motifs. Gold-on-charcoal palette (brand accent). Same image as gold-accent variant; stable filename for layouts.",
  },
  {
    category: "Hero — AI (metal logo concepts)",
    relativePath: "hero/ai-metal-hero-gold-accent.png",
    title: "AI hero — gold accent",
    description: "Palette: charcoal #06080d, antique gold #d4b84a, cool blue edge glow #8ab4ff.",
  },
  {
    category: "Hero — AI (metal logo concepts)",
    relativePath: "hero/ai-metal-hero-digital-cool.png",
    title: "AI hero — digital (cool blue)",
    description: "Palette: dominant electric blue #8ab4ff / cyan with sparse gold #d4b84a.",
  },
  {
    category: "Hero — AI (metal logo concepts)",
    relativePath: "hero/ai-metal-hero-ember-analog.png",
    title: "AI hero — ember / analog",
    description: "Palette: ember/rust #b85c4a, dark charcoal, gold sparks #d4b84a.",
  },
  {
    category: "Hero — AI (metal logo concepts)",
    relativePath: "hero/ai-metal-hero-vinyl-lab.png",
    title: "AI hero — vinyl / lab",
    description: "Palette: purple/violet #9b8bc9, lab green #5cb89a accents, gold glints #d4b84a.",
  },
  {
    category: "Theme & config",
    relativePath: "theme.css",
    title: "Theme tokens (CSS)",
    description:
      "Generated custom properties: background, surfaces, accent, service colors, font stacks.",
  },
  {
    category: "Theme & config",
    relativePath: "site.webmanifest",
    title: "Web app manifest",
    description: "PWA metadata: name, colors, icons; paths are relative to this file for GitHub Pages.",
  },
];
