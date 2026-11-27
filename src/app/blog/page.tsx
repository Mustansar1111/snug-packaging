import type { Metadata } from "next";
import { og, site } from "@/lib/site";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { JsonLd, QuoteSection } from "@/components/sections";
import { posts, type Post } from "@/data/posts";

export const metadata: Metadata = {
  title: "Custom Packaging Guides: Sizes, Cost & Finishes",
  description:
    "Plain-English guides to ordering custom boxes: how to measure, mailer box sizes, what boxes cost, dielines, CMYK vs Pantone, kraft vs white and finishes.",
  alternates: { canonical: "/blog" },
  openGraph: og("/blog", { defaultImage: true }),
};

const fmt = (d: string) => new Date(`${d}T00:00:00Z`).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

/** What each topic covers, and the product pages it helps with, so readers (and crawlers) can move on from a guide. */
const topics: { tag: string; blurb: string; links: [string, string][] }[] = [
  {
    tag: "Ordering",
    blurb: "What a first order looks like, what changes the price and how to measure your product so the box fits the first time.",
    links: [["Small business packaging", "/small-business-packaging"], ["Wholesale custom boxes", "/wholesale-custom-boxes"], ["How it works", "/how-it-works"]],
  },
  {
    tag: "Choosing a box",
    blurb: "Mailer or shipping box, and which mailer size suits a T-shirt, a candle or a subscription box.",
    links: [["Mailer boxes", "/packaging/mailer-boxes"], ["Shipping boxes", "/packaging/shipping-boxes"], ["Apparel boxes", "/packaging/apparel-boxes"]],
  },
  {
    tag: "Artwork",
    blurb: "Dielines, bleed and safe areas, and how to get your brand color right on board.",
    links: [["Artwork guide", "/artwork-guide"], ["Free 3D mockup", "/free-mockup"], ["Custom boxes with logo", "/custom-boxes-with-logo"]],
  },
  {
    tag: "Materials",
    blurb: "Kraft or white board, and what each says about your brand.",
    links: [["Kraft boxes", "/packaging/kraft-boxes"], ["White boxes", "/packaging/white-boxes"], ["Materials and finishes", "/materials-and-finishes"]],
  },
  {
    tag: "Finishes",
    blurb: "Soft-touch, foil, spot UV and embossing: what they feel like and when they're worth it.",
    links: [["Rigid boxes", "/packaging/rigid-boxes"], ["Cosmetic boxes", "/packaging/cosmetic-boxes"], ["Luxury boxes", "/packaging/luxury-boxes"]],
  },
];

export default function BlogIndex() {
  const byTag = new Map<string, Post[]>();
  for (const p of posts) byTag.set(p.tag, [...(byTag.get(p.tag) ?? []), p]);
  return (
    <>
      <PageHero crumb="Blog" title="Packaging guides and tips." lede="Short, practical answers to the questions brands ask before they order custom packaging." />
      <section className="block band">
        <div className="wrap">
          <ul className="posts" data-reveal-group>
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`}>
                  {p.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="post-thumb" src={p.image.webpSm} alt={p.image.alt} width={836} height={470} loading="lazy" decoding="async" />
                  )}
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
      <section className="block band" style={{ paddingTop: 0 }}>
        <div className="wrap guide-grid">
          <div className="guide-side">
            <p className="eyebrow">Browse by topic</p>
            <h2 className="h2">Who are these guides for?</h2>
            <p className="answer" style={{ color: "var(--muted)", marginTop: 14 }}>
              They are written for small brands and first-time buyers ordering printed boxes, bags or labels. Each guide answers one
              question in plain English, with no jargon you have to look up, and links to the packaging it applies to.
            </p>
          </div>
          <div className="guide-body">
            {topics
              .filter((t) => byTag.has(t.tag))
              .map((t) => (
                <article key={t.tag}>
                  <h3>{t.tag}</h3>
                  <p>{t.blurb}</p>
                  <p>
                    Guides:{" "}
                    {byTag.get(t.tag)!.map((p, i) => (
                      <span key={p.slug}>
                        {i > 0 && " · "}
                        <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                      </span>
                    ))}
                  </p>
                  <p>
                    Related:{" "}
                    {t.links.map(([label, href], i) => (
                      <span key={href}>
                        {i > 0 && " · "}
                        <Link href={href}>{label}</Link>
                      </span>
                    ))}
                  </p>
                </article>
              ))}
          </div>
        </div>
      </section>
      <QuoteSection title="Ready to order? Get a price." />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Snug Packaging guides",
          url: `${site.url}/blog`,
          publisher: { "@id": `${site.url}/#org` },
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${site.url}/blog/${p.slug}`,
            datePublished: p.date,
            description: p.description,
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
          ],
        }}
      />
    </>
  );
}
