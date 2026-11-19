import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryGrid } from "@/components/CategoryCard";
import { Reviews } from "@/components/proof";
import { Faq, JsonLd, MockupBand, Process, QuoteSection } from "@/components/sections";
import { getIndustry, industries } from "@/data/industries";
import { getCategory, site } from "@/lib/site";
import type { Category } from "@/data/types";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const ind = getIndustry((await params).slug);
  if (!ind) return { robots: { index: false } };
  return {
    title: `Custom ${ind.name} Packaging`,
    description: `${ind.intro} Free design help and a free proof. Delivered to the USA, UK, Australia and Europe.`,
    alternates: { canonical: `/industries/${ind.slug}` },
  };
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const ind = getIndustry((await params).slug);
  if (!ind) notFound();
  const cats = ind.styles.map(getCategory).filter((c): c is Category => Boolean(c));
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
      <Process />
      <QuoteSection defaultStyle={ind.defaultStyle} title={`Get a price for your ${ind.name.toLowerCase()} packaging.`} />
      <Reviews />
      <MockupBand />
      <Faq items={[...ind.faqs, { q: "What is the minimum order?", a: `You can order from ${site.moq} units for most styles.` }]} title={`${ind.name} packaging questions`} />
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
