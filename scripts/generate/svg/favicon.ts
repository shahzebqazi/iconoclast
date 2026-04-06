import type { Brand } from "../brand.js";
import { leviathanCrossFavicon } from "./leviathanCross.js";

export function faviconSvg(brand: Brand): string {
  return leviathanCrossFavicon(brand);
}
