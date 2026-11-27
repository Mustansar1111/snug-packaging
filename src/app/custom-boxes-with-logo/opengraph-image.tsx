import { ogCard, ogSize } from "@/lib/ogCard";

/** Built once at deploy time (the site is a static export). */
export const dynamic = "force-static";

export const alt = "Custom boxes with your logo";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ kicker: "Custom boxes with logo", title: "Custom boxes with your logo", sub: "Made to your size from 100 units · free 3D mockup" });
}
