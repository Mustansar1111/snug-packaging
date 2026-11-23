import { NextResponse, type NextRequest } from "next/server";
import { categories } from "@/data/categories";
import { industries } from "@/data/industries";
import { posts } from "@/data/posts";

/**
 * Unknown slugs under /packaging, /industries and /blog must answer with a real 404.
 * With Cache Components the page shell streams before the page can call notFound(), so the
 * status would be 200 (a "soft 404" in Search Console). Checking the slug here, before
 * rendering, lets Next.js serve its not-found page with a proper 404 status.
 */
const known: Record<string, Set<string>> = {
  packaging: new Set(categories.map((c) => c.slug)),
  industries: new Set(industries.map((i) => i.slug)),
  blog: new Set(posts.map((p) => p.slug)),
};

export function proxy(request: NextRequest) {
  const [, section, slug] = request.nextUrl.pathname.split("/");
  if (known[section] && slug && !known[section].has(slug)) {
    return NextResponse.rewrite(new URL("/page-not-found", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/packaging/:slug", "/industries/:slug", "/blog/:slug"],
};
