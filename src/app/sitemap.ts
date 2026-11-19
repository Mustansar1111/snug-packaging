import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { regions } from "@/data/regions";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/packaging", "/quote", "/free-mockup", "/how-it-works", "/artwork-guide", "/shipping", "/about", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7 })),
    ...regions.map((r) => ({ url: `${site.url}/${r.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...categories.map((c) => ({ url: `${site.url}/packaging/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
  ];
}
