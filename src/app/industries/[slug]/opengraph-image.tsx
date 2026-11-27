import { getIndustry, industries } from "@/data/industries";
import { ogCard, ogSize } from "@/lib/ogCard";

/** Built once at deploy time (the site is a static export). */
export const dynamic = "force-static";

export const alt = "Custom packaging by industry from Snug Packaging";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const ind = getIndustry((await params).slug);
  return ogCard({ kicker: "Packaging by industry", title: ind?.title ?? "Custom packaging", sub: "Made to your size from 100 units · free 3D mockup" });
}
