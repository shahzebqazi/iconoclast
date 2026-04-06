# Prompts — redo hero & logo assets (Iconoclast Audio)

Use these with your image model (e.g. Z-Image Turbo, SDXL, Flux). **Logos** should be generated on a **solid chroma green `#00FF00`** background so they can be keyed to transparency in `scripts/generate/chromaToAlpha.ts`. **Hero images** are full-bleed scenes — **no chroma key**; specify “no text, no logos.”

---

## A. Transparent logos (generate → chroma key → PNG with alpha)

**Global rules for all logo prompts**

- Background: **only** solid `#00FF00` (chroma green). No gradients on the background.
- **No** grim reaper, **no** Leviathan / sulphur cross, **no** random floating crosses, **no** random pentagrams (unless explicitly integrated **as a single letterform** in the prompt).
- **No** misspelled English; if the prompt includes words, they must be spelled exactly as given.
- Center the mark; leave margin so the key does not eat edges.

### A1 — Primary wordmark (ornate metal, no occult figures)

> Isolated single logo centered on solid flat chroma green `#00FF00` background only. Ornate extreme black/death metal band logo typography reading **ICONOCLAST** with smaller **AUDIO** beneath or integrated. Illegible spiky blackletter style, cohesive one-piece mark. **No crosses, no pentagrams, no reaper, no skull, no sulphur symbol, no random decorative sigils.** Metallic gold `#d4b84a` and charcoal `#06080d` highlights. High contrast, sharp edges. No drop shadow onto background; background stays pure green.

### A2 — Digital variant (correct “MASTERING”; letter O as pentagram shape)

> Isolated logo centered on solid flat chroma green `#00FF00` background only. Two readable lines in blackletter metal style: first line **ICONOCLAST**, second line **MASTERING** — spell **MASTERING** exactly M-A-S-T-E-R-I-N-G in English. The letter **O** in **MASTERING** may be drawn as a small **inverted pentagram shape** used **only** as that one letterform (not repeated elsewhere). Optional: one vertical bar of an **I** stylized as a thin stake. **No** extra pentagrams, **no** crosses, **no** floating symbols, **no** random ornaments. Colors: cool blue `#8ab4ff` and gold `#d4b84a` on dark letter fills.

### A3 — Ember / fire variant (black metal on fire only)

> Isolated black metal logo wordmark **ICONOCLAST AUDIO** centered on solid flat chroma green `#00FF00` background only. The letterforms are engulfed in **realistic orange and red flame** and ember glow; flames are the main effect. **No** pentagrams, **no** crosses, **no** reaper, **no** skulls, **no** scattered sparks as random shapes, **no** noise blobs. Clean silhouette of letters + fire only.

---

## B. Website hero images (full scene — **not** logos)

**Global rules**

- Aspect: **16:9** (export e.g. 1920×1080).
- **No text, no words, no logos, no watermarks.**
- Theme: **analog mastering** — tape, tubes, VU meters, consoles, vinyl/cutting lathe mood, warm tungsten or controlled studio light.

### B1 — Control room / hardware

> Wide cinematic photograph, professional analog mastering studio, vintage tube compressors and equalizers, reel-to-reel tape machine, warm tungsten light, shallow depth of field, subtle film grain, moody dark interior with orange and amber accents, **no text, no logos.**

### B2 — Abstract / macro analog

> Wide abstract cinematic art, extreme close-up of **vinyl groove** and **magnetic tape** texture, warm analog glow, bokeh, deep charcoal and gold `#d4b84a` rim light, science of sound, **no text, no logos, no symbols.**

### B3 — Session atmosphere

> Wide cinematic interior, mastering engineer silhouette optional (anonymous), console meters glowing, dim studio lamp, stacks of tape reels, analog warmth, photoreal or high-end 3D render, **no text, no logos.**

---

## Post-processing

1. **Logos:** save as PNG from model → run `npx tsx scripts/generate/chromaToAlpha.ts <input.png> <output.png>`.
2. **Heroes:** resize/crop to 1920×1080 with `sharp` if needed; no chroma key.

## Current repo outputs (regenerate to replace)

| Role | File under `site/public/generated/` |
|------|-------------------------------------|
| Logo (metal wordmark) | `logo/iconoclast-wordmark-metal.png` |
| Logo (MASTERING line) | `logo/iconoclast-mastering-blackletter.png` |
| Logo (fire) | `logo/iconoclast-audio-blackmetal-fire.png` |
| Hero (studio) | `hero/mastering-analog-01.png` |
| Hero (abstract) | `hero/mastering-analog-02.png` |
| Hero (atmosphere) | `hero/mastering-analog-03.png` |
