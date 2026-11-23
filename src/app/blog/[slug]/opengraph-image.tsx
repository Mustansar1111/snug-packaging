import { getPost, posts } from "@/data/posts";
import { ogCard, ogSize } from "@/lib/ogCard";

export const alt = "Packaging guide from Snug Packaging";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  return ogCard({ kicker: "Packaging guide", title: post?.title ?? "Packaging guides", sub: "snugpackaging.com/blog" });
}
