import { ogCard, ogSize } from "@/lib/ogCard";

/** Built once at deploy time (the site is a static export). */
export const dynamic = "force-static";

export const alt = "Recyclable custom packaging";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ kicker: "Eco-friendly packaging", title: "Recyclable custom packaging", sub: "Kraft, corrugated and plastic-free finishes" });
}
