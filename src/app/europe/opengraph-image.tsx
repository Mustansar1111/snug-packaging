import { ogCard, ogSize } from "@/lib/ogCard";

/** Built once at deploy time (the site is a static export). */
export const dynamic = "force-static";

export const alt = "Custom boxes for European brands";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ kicker: "Europe", title: "Custom boxes for European brands", sub: "Quoted in euros · delivered across Europe" });
}
