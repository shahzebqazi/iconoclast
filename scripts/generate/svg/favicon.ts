import type { Brand } from "../brand.js";
import { leviathanCrossFavicon } from "./leviathanCross.js";

/** Tab / PWA icon: Leviathan cross on brand background. */
export function faviconSvg(brand: Brand): string {
  return leviathanCrossFavicon(brand);
}
