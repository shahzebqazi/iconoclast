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
      "SVG wrapper with embedded transparent oni-mask PNG (pen-style, AI). Tabs/bookmarks; raster fallbacks below.",
  },
  {
    category: "Favicon & app icons",
    relativePath: "favicon-32.png",
    title: "Favicon 32×32",
    description: "Transparent PNG (oni mask) for raster favicon fallbacks.",
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
    category: "Logo (AI, transparent PNG)",
    relativePath: "logo/iconoclast-wordmark-metal.png",
    title: "Metal wordmark — ICONOCLAST / AUDIO",
    description:
      "AI-generated blackletter mark on chroma green, keyed to transparency. No crosses or reaper in the prompt set; review before production use.",
  },
  {
    category: "Logo (AI, transparent PNG)",
    relativePath: "logo/iconoclast-mastering-blackletter.png",
    title: "Blackletter — ICONOCLAST + MASTERING",
    description:
      "Second line must read MASTERING (regenerate if the model misspells). O may be a pentagram-shaped letterform only. Transparent PNG.",
  },
  {
    category: "Logo (AI, transparent PNG)",
    relativePath: "logo/iconoclast-audio-blackmetal-fire.png",
    title: "Circular black metal — fireball mark",
    description:
      "Circular ring text + stylized rose-gold/gold energy center (not photoreal fire). Chroma-keyed PNG for icons; regenerate from ai-cache if needed.",
  },
  {
    category: "Favicon & app icons",
    relativePath: "icons/oni-mask-64.png",
    title: "Mini icon — oni 64×64",
    description: "Transparent oni mask (pen art) for UI or social avatars.",
  },
  {
    category: "Favicon & app icons",
    relativePath: "icons/oni-mask-128.png",
    title: "Mini icon — oni 128×128",
    description: "Larger transparent oni for bookmarks or thumbnails.",
  },
  {
    category: "Logo (vector)",
    relativePath: "logo/wordmark-light-bg.svg",
    title: "Wordmark (light background)",
    description: "Wordmark with Leviathan cross for light surfaces.",
  },
  {
    category: "Logo (vector)",
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
    description: "Wide abstract hero with service and lab cues; replace with photography when ready.",
  },
  {
    category: "Hero",
    relativePath: "hero/placeholder-wide.png",
    title: "Hero placeholder (PNG)",
    description: "1920×1080 raster export for static site hero slots.",
  },
  {
    category: "Hero — analog mastering (AI)",
    relativePath: "hero/mastering-analog-01.png",
    title: "Analog studio — hardware",
    description: "1920×1080 scene: tubes, tape, warm light. No text/logos in prompt.",
  },
  {
    category: "Hero — analog mastering (AI)",
    relativePath: "hero/mastering-analog-02.png",
    title: "Abstract — vinyl / tape",
    description: "1920×1080 macro abstract: groove and tape texture mood.",
  },
  {
    category: "Hero — analog mastering (AI)",
    relativePath: "hero/mastering-analog-03.png",
    title: "Studio atmosphere — meters & reels",
    description: "1920×1080 dim studio, consoles and analog cues.",
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
