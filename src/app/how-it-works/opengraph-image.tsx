import { ogCard, ogSize } from "@/lib/ogCard";

/** Built once at deploy time (the site is a static export). */
export const dynamic = "force-static";

export const alt = "From idea to doorstep in four steps";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ kicker: "How it works", title: "From idea to doorstep in four steps", sub: "Quote · free proof · print · delivery" });
}
