import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryGrid } from "@/components/CategoryCard";
import { Reviews } from "@/components/proof";
import { Faq, JsonLd, MockupBand, Process, QuoteSection } from "@/components/sections";
import { getIndustry, industries } from "@/data/industries";
import { getCategory, metaDescription, site, lowerName, og } from "@/lib/site";
import type { Category } from "@/data/types";
import { Guides } from "@/components/Guides";
import { getPost, guidesFor, type Post } from "@/data/posts";
import { withLinks } from "@/lib/withLinks";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const ind = getIndustry((await params).slug);
  if (!ind) return { robots: { index: false } };
  return {
    title: ind.seo,
    description: ind.description ? metaDescription(ind.description) : metaDescription(ind.intro, ["Free design help and a 3D proof before you pay.", "Free design help and proof."]),
    alternates: { canonical: `/industries/${ind.slug}` },
    openGraph: og(`/industries/${ind.slug}`),
  };
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const ind = getIndustry((await params).slug);
  if (!ind) notFound();
  const cats = ind.styles.map(getCategory).filter((c): c is Category => Boolean(c));
  const featured = (ind.posts ?? []).map(getPost).filter((p): p is Post => Boolean(p));
  const posts = featured.length ? featured : cats[0] ? guidesFor(cats[0]) : [];
  return (
    <>
      <section className="page-hero band on-dark">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <Link href="/industries">Industries</Link> <span>/</span> <span>{ind.name}</span>
          </nav>
          <h1>{ind.title}</h1>
          <p className="lede">{ind.intro}</p>
          <div className="ctas">
            <a className="btn btn-apricot" href="#quote">
              Get a free quote <span aria-hidden="true">→</span>
            </a>
            <Link className="btn btn-ghost" href="/free-mockup">
              Get a free 3D mockup
            </Link>
          </div>
        </div>
      </section>
      <section className="block band">
        <div className="wrap">
          <div className="head">
            <div>
              <p className="eyebrow">{ind.name}</p>
              <h2>Popular styles for your products.</h2>
            </div>
            <p>Every style is made to your exact size and printed with your artwork, from {site.moq} units.</p>
          </div>
          <CategoryGrid cats={cats} />
        </div>
      </section>
      <section className="block band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head">
            <div>
              <p className="eyebrow">What we think about</p>
              <h2>Made for how you sell.</h2>
            </div>
          </div>
          <ul className="rules three" data-reveal-group>
            {ind.needs.map((n, i) => (
              <li key={n.h}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <h2>{n.h}</h2>
                <p>{n.p}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {ind.answer && (
        <section className="block band" id="guide" style={{ paddingTop: 0 }}>
          <div className="wrap guide-grid">
            <div className="guide-side">
              <p className="eyebrow">Buyer&apos;s guide</p>
              <h2 className="h2">{ind.answer.q}</h2>
              <p className="answer" style={{ color: "var(--muted)", marginTop: 14 }}>{ind.answer.a}</p>
            </div>
            <div className="guide-body">
              {(ind.guide ?? []).map((g) => (
                <article key={g.q}>
                  <h3>{g.q}</h3>
                  {g.a.map((t) => (
                    <p key={t.slice(0, 24)}>{withLinks(t)}</p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      <Process />
      <QuoteSection defaultStyle={ind.defaultStyle} title={`Get a price for your ${lowerName(ind.name)} packaging.`} />
      <Reviews />
      <MockupBand />
      <Faq items={[...ind.faqs, { q: "What is the minimum order?", a: `You can order from ${site.moq} units for most styles.` }]} title={`${ind.name} packaging questions`} />
      <Guides posts={posts} title={`Guides for ${lowerName(ind.name)} brands`} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: "Industries", item: `${site.url}/industries` },
            { "@type": "ListItem", position: 3, name: ind.name, item: `${site.url}/industries/${ind.slug}` },
          ],
        }}
      />
    </>
  );
}
