import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { QuoteSection } from "@/components/sections";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Packaging Guides and Tips",
  description: "Practical guides to ordering custom packaging: choosing a box, measuring, artwork, color and finishes.",
  alternates: { canonical: "/blog" },
};

const fmt = (d: string) => new Date(`${d}T00:00:00Z`).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

export default function BlogIndex() {
  return (
    <>
      <PageHero crumb="Blog" title="Packaging guides and tips." lede="Short, practical answers to the questions brands ask before they order custom packaging." />
      <section className="block band">
        <div className="wrap">
          <ul className="posts" data-reveal-group>
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`}>
                  <p className="post-meta">{p.tag} · <time dateTime={p.date}>{fmt(p.date)}</time> · {p.readMins} min read</p>
                  <h2>{p.title}</h2>
                  <p>{p.description}</p>
                  <span>Read the guide →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <QuoteSection title="Ready to order? Get a price." />
    </>
  );
}
