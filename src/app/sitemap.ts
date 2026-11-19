import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { industries } from "@/data/industries";
import { posts } from "@/data/posts";
import { regions } from "@/data/regions";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/packaging", "/quote", "/free-mockup", "/how-it-works", "/artwork-guide", "/shipping", "/about", "/contact", "/faq", "/industries", "/materials-and-finishes", "/sustainability", "/blog"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7 })),
    ...regions.map((r) => ({ url: `${site.url}/${r.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...industries.map((i) => ({ url: `${site.url}/industries/${i.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.date, changeFrequency: "yearly" as const, priority: 0.6 })),
    ...categories.map((c) => ({ url: `${site.url}/packaging/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
  ];
}
