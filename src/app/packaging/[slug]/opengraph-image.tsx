import { getCategory } from "@/lib/site";
import { categories } from "@/data/categories";
import { ogCard, ogSize } from "@/lib/ogCard";

/** Built once at deploy time (the site is a static export). */
export const dynamic = "force-static";

export const alt = "Custom packaging from Snug Packaging";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const cat = getCategory((await params).slug);
  return ogCard({
    kicker: "Made to your size · from 100 units",
    title: cat ? `Custom ${cat.name}` : "Custom packaging",
    sub: "Printed with your logo. Free 3D mockup before you order.",
  });
}
