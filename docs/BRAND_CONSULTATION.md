# Brand design — decisions for Iconoclast Audio

The generators use a **default direction** you can change in `scripts/generate/brand.ts`. Before locking the site, please weigh in on the items below. Reply with choices (or alternatives); we can then align SVG templates and CSS tokens.

## 1. Positioning line

- **Current:** “Mastering & audio lab”
- **Alternatives:** e.g. “Mastering · Lab · Tools”, “Precision mastering & research”, or a single line that leads with **digital mastering** and mentions analog/vinyl/lab second.

**Your preference:**

## 2. Logo form

- **Current:** Text-only wordmark (“Iconoclast” + “AUDIO”) + simple “IA” monogram in the favicon.
- **Alternatives:** Custom lettermark, abstract mark (waveform, break/glass motif for “iconoclast”), or commissioned mark from a designer.

**Your preference:**

## 3. Color story

- **Current:** Near-black background, warm off-white type, **gold accent** (`#c9a227`), service tints (digital blue, analog terracotta, vinyl lavender, lab teal).
- **Tradeoffs:** Gold reads “premium studio”; cooler silver/steel reads more “tech lab”; full monochrome reads more “underground.”

**Your preference:** (keep gold / shift to silver / reduce to monochrome / other)

## 4. Typography

- **Current (in SVG):** IBM Plex Sans as a neutral, legible tech/studio pairing (you’ll load the web font on the real site).
- **Alternatives:** More editorial (serif headline), more brutalist (grotesk only), or a custom license (e.g. commercial display font).

**Your preference:**

## 5. Imagery tone

- **Current placeholder:** Abstract gradient + service pills (no stock faces).
- **For photography:** Console close-ups, hands-on faders, vinyl/lathe, or abstract light — all affect perceived “mastering house” vs “R&D lab.”

**Your preference:**

## 6. Lab vs mastering balance

- **Question:** On the homepage, should **mastering** dominate visually with lab (Tone3000, AI, plugins) in a secondary band — or **equal** visual weight?

**Your preference:**

---

After you answer, we can update `brand.ts` and regenerate assets in one command (`npm run assets:build`).
