import { ogCard, ogSize } from "@/lib/ogCard";

/** Built once at deploy time (the site is a static export). */
export const dynamic = "force-static";

export const alt = "Wholesale custom boxes";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ kicker: "Wholesale", title: "Wholesale custom boxes", sub: "Bulk runs of 1,000+ · lower price per box" });
}
