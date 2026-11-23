import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { industries } from "@/data/industries";
import { posts } from "@/data/posts";
import { regions } from "@/data/regions";
import { site } from "@/lib/site";

/**
 * Date the site's pages last changed in a meaningful way (copy, products, services).
 * Google uses lastmod to decide what to recrawl, so bump this when you edit page content, and only then.
 * Guides use their own `updated` (or `date`) from src/data/posts.ts.
 */
const CONTENT_UPDATED = "2026-11-23";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/packaging", "/quote", "/free-mockup", "/how-it-works", "/artwork-guide", "/shipping", "/about", "/contact", "/faq", "/industries", "/materials-and-finishes", "/sustainability", "/blog", "/refund-policy", "/custom-boxes-with-logo", "/small-business-packaging", "/wholesale-custom-boxes"];
  const entry = (path: string, lastModified = CONTENT_UPDATED) => ({ url: `${site.url}${path}`, lastModified });
  return [
    ...pages.map((p) => entry(p)),
    ...regions.map((r) => entry(`/${r.slug}`)),
    ...industries.map((i) => entry(`/industries/${i.slug}`)),
    ...posts.map((p) => entry(`/blog/${p.slug}`, p.updated ?? p.date)),
    ...categories.map((c) => entry(`/packaging/${c.slug}`)),
  ];
}
