import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const publicPages = [
  "site/index.html",
  "site/about/index.html",
  "site/rates/index.html",
  "site/links/index.html",
  "site/contact/index.html",
  "site/faq/index.html",
  "site/onboarding/index.html",
  "site/legal/index.html",
  "site/404.html",
];
const skinnedPages = publicPages.filter((file) => file !== "site/index.html");

const forbiddenPatterns = [
  { label: "asset gallery link", pattern: /href=["'][^"']*public\/index\.html["']/i },
  { label: "design docs link", pattern: /href=["'][^"']*design\/palette\.html["']/i },
  { label: "visible GitHub brand mention", pattern: />[^<]*GitHub[^<]*</i },
  { label: "GitHub outbound link", pattern: /https:\/\/github\.com\//i },
  { label: "room language", pattern: /\brooms?\b/i },
];

const errors = [];

for (const file of publicPages) {
  const fullPath = path.join(root, file);
  const html = readFileSync(fullPath, "utf8");
  const primaryNav = html.match(/<nav class="site-nav" aria-label="Primary">[\s\S]*?<\/nav>/)?.[0] ?? "";

  for (const { label, pattern } of forbiddenPatterns) {
    if (pattern.test(html)) {
      errors.push(`${file}: contains ${label}`);
    }
  }

  if (!primaryNav.includes("oni-mask-128.png")) {
    errors.push(`${file}: primary nav must use the oni logo`);
  }
  if (/href=["'][^"']*faq\/index\.html["']/i.test(primaryNav)) {
    errors.push(`${file}: FAQ must not be in primary nav`);
  }
  if (/href=["'][^"']*legal\/index\.html["']/i.test(primaryNav)) {
    errors.push(`${file}: Legal must not be in primary nav`);
  }
  if (/href=["'][^"']*links\/index\.html["']/i.test(primaryNav)) {
    errors.push(`${file}: Links must not be in primary nav`);
  }
  if (/href=["'][^"']*contact\/index\.html["']/i.test(primaryNav)) {
    errors.push(`${file}: Contact must not be in primary nav`);
  }

  const footerNav = html.match(/<nav aria-label="Footer">[\s\S]*?<\/nav>/)?.[0] ?? "";
  if (!/href=["'][^"']*links\/index\.html["'][^>]*>Links<\/a>/i.test(footerNav)) {
    errors.push(`${file}: footer must keep Links`);
  }
}

const home = readFileSync(path.join(root, "site/index.html"), "utf8");
if (!home.includes("public/generated/hero/mastering-analog-01.png")) {
  errors.push("site/index.html: homepage must use the rates hero image");
}
if (!/<div class="home-actions">[\s\S]*href="links\/index\.html"[\s\S]*href="contact\/index\.html"[\s\S]*<\/div>/.test(home)) {
  errors.push("site/index.html: homepage must include Links and Contact buttons");
}

const links = readFileSync(path.join(root, "site/links/index.html"), "utf8");
if (/One column, thumb-friendly|Same list as Contact/i.test(links)) {
  errors.push("site/links/index.html: remove old Links tagline");
}
if (!/<body class="page-art links-page">/.test(links)) {
  errors.push("site/links/index.html: Links page must use narrow-centering class");
}

for (const file of skinnedPages) {
  const html = readFileSync(path.join(root, file), "utf8");
  if (!/<body class="[^"]*\bpage-art\b[^"]*">/.test(html)) {
    errors.push(`${file}: public page must use the landing-page art skin`);
  }
}

const contact = readFileSync(path.join(root, "site/contact/index.html"), "utf8");
if (!/href=["'][^"']*faq\/index\.html["'][^>]*>FAQ<\/a>/i.test(contact)) {
  errors.push("site/contact/index.html: Contact page must link to FAQ");
}
if (!/href=["'][^"']*legal\/index\.html["'][^>]*>Legal<\/a>/i.test(contact)) {
  errors.push("site/contact/index.html: Contact page must link to Legal");
}
if (/Same stack as Links/i.test(contact)) {
  errors.push("site/contact/index.html: remove 'Same stack as Links' from tagline");
}
for (const removedPlatform of ["Reverb", "Tone3000", "YouTube"]) {
  if (new RegExp(`>${removedPlatform}<`, "i").test(contact)) {
    errors.push(`site/contact/index.html: remove ${removedPlatform} from contact links`);
  }
}
for (const platform of ["Email", "Matrix", "Mastodon", "Instagram"]) {
  const iconPattern = new RegExp(
    `<span class="platform-icon" aria-hidden="true">[\\s\\S]*?</span>[\\s\\S]*?${platform}`,
    "i",
  );
  if (!iconPattern.test(contact)) {
    errors.push(`site/contact/index.html: ${platform} link must include a platform icon`);
  }
}
if (!/<form class="coming-soon-form"/.test(contact)) {
  errors.push("site/contact/index.html: missing coming-soon form");
}
if (!/<input[^>]+type="email"[^>]+disabled/.test(contact)) {
  errors.push("site/contact/index.html: coming-soon form must include disabled email input");
}

const rates = readFileSync(path.join(root, "site/rates/index.html"), "utf8");
for (const requiredRate of [
  "240 USD",
  "240 CAD",
  "5 day turnaround",
  "2x",
  "72 hour",
  "3x",
  "48 hour",
  "250+ USD",
  "250+ CAD",
  "500 USD",
  "500 CAD",
  "multitrack mastering",
  "USD for USA/international",
  "CAD for Canadians",
]) {
  if (!rates.includes(requiredRate)) {
    errors.push(`site/rates/index.html: missing rate detail "${requiredRate}"`);
  }
}
for (const stalePhrase of ["numbers can flex", "Quoted after hearing", "deadline fantasy", "panic attacks"]) {
  if (rates.includes(stalePhrase)) {
    errors.push(`site/rates/index.html: remove vague rates phrase "${stalePhrase}"`);
  }
}

const css = readFileSync(path.join(root, "site/style.css"), "utf8");
if (!/\.page-art\b/.test(css)) {
  errors.push("site/style.css: missing shared art-page skin");
}
if (!/\.theme-invert\b/.test(css)) {
  errors.push("site/style.css: missing inverted page skin");
}
if (!/\.home-hero__image\s*\{[\s\S]*?max-width:\s*clamp\(/.test(css)) {
  errors.push("site/style.css: homepage hero image must be constrained with clamp()");
}
if (!/\.platform-icon\b/.test(css)) {
  errors.push("site/style.css: missing platform icon styles");
}
if (!/\.coming-soon-form\b/.test(css)) {
  errors.push("site/style.css: missing coming-soon form styles");
}
if (!/\.rate-card\b/.test(css)) {
  errors.push("site/style.css: missing rate card styles");
}
if (!/\.home-actions\b/.test(css)) {
  errors.push("site/style.css: missing landing page action button styles");
}
if (!/\.links-page\b/.test(css)) {
  errors.push("site/style.css: missing narrow Links page centering styles");
}

if (existsSync(path.join(root, "site/public/index.html"))) {
  errors.push("site/public/index.html: asset gallery must be dev-only, not part of public site");
}

const workflow = readFileSync(path.join(root, ".github/workflows/pages.yml"), "utf8");
if (!/rm -f site\/public\/index\.html/.test(workflow)) {
  errors.push(".github/workflows/pages.yml: deploy artifact must remove site/public/index.html");
}
if (!/rm -rf site\/design/.test(workflow)) {
  errors.push(".github/workflows/pages.yml: deploy artifact must remove site/design");
}

if (errors.length) {
  console.error("Public site verification failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Public site verification passed.");
