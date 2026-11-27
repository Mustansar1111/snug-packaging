import { ogCard, ogSize } from "@/lib/ogCard";

/** Built once at deploy time (the site is a static export). */
export const dynamic = "force-static";

export const alt = "Custom boxes for brands that care how things arrive";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ kicker: "About us", title: "Custom boxes for brands that care how things arrive", sub: "Offices in Bradford, UK and Airmont, New York" });
}
