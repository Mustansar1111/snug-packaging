import type { Metadata } from "next";
import Link from "next/link";
import { Reviews } from "@/components/proof";
import { notFound } from "next/navigation";
import { CategoryGrid } from "@/components/CategoryCard";
import { PackIcon } from "@/components/PackIcon";
import { QuoteForm } from "@/components/QuoteForm";
import { Faq, JsonLd, Process } from "@/components/sections";
import { categories } from "@/data/categories";
import { categoryFaqs, getCategory, joinList, relatedCategories, site } from "@/lib/site";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/packaging/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) return {};
  return {
    title: `Custom ${cat.name} with Your Logo`,
    description: `${cat.intro} Made to your size from ${site.moq} units, with free design help and a 3D proof.`.slice(0, 158),
    alternates: { canonical: `/packaging/${cat.slug}` },
  };
}

export default async function CategoryPage({ params }: PageProps<"/packaging/[slug]">) {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) notFound();
  const faqs = categoryFaqs(cat);

  return (
    <>
      <section className="page-hero split-hero band on-dark">
        <div className="wrap">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link> <span>/</span> <Link href="/packaging">Packaging</Link> <span>/</span> <span>{cat.name}</span>
            </nav>
            <h1>Custom {cat.name}</h1>
            <p className="lede">{cat.intro}</p>
            <div className="ctas">
              <a className="btn btn-apricot" href="#quote">
                Get a free quote <span aria-hidden="true">→</span>
              </a>
              <Link className="btn btn-ghost" href="/free-mockup">
                Get a free 3D mockup
              </Link>
            </div>
          </div>
          <div className="art-big" aria-hidden="true">
            <PackIcon icon={cat.icon} />
          </div>
        </div>
      </section>

      <section className="block band" id="quote">
        <div className="wrap detail">
          <div>
            <p className="eyebrow">At a glance</p>
            <h2 className="h2" style={{ fontSize: "clamp(28px, 3.4vw, 40px)" }}>
              What goes into our {cat.name.toLowerCase()}
            </h2>
            <table className="specs" style={{ marginTop: 24 }}>
              <tbody>
                <tr><th scope="row">Popular style</th><td>{cat.style}</td></tr>
                <tr><th scope="row">Material</th><td>{cat.material}</td></tr>
                <tr><th scope="row">Finishes</th><td>{cat.finish}</td></tr>
                <tr><th scope="row">Minimum order</th><td>{site.moq} units</td></tr>
                <tr><th scope="row">Production</th><td>{site.turnaround} after proof approval</td></tr>
                <tr><th scope="row">Sizes</th><td>Made to your inside dimensions, in inches, centimetres or millimetres</td></tr>
              </tbody>
            </table>
            <h3 style={{ fontSize: 22, marginTop: 36 }}>Brands use them for</h3>
            <ul className="uses">
              {cat.uses.map((u) => (
                <li key={u}>{u}</li>
              ))}
            </ul>
            <p style={{ color: "var(--muted)", marginTop: 20, maxWidth: "62ch" }}>
              Whether you need {cat.name.toLowerCase()} for {joinList(cat.uses.slice(0, 2))}, we build each order around your product,
              print your artwork in full colour and send a free proof before anything goes to press.
            </p>
            {cat.tip && (
              <div className="tip">
                <b>Packaging tip</b>
                {cat.tip}
              </div>
            )}
          </div>
          <div className="sticky">
            <QuoteForm styles={categories.map((c) => c.name)} defaultStyle={cat.name} />
          </div>
        </div>
      </section>

      <Process />
      <Reviews />
      <Faq items={faqs} title={`${cat.name} questions`} />

      <section className="block band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head">
            <div>
              <p className="eyebrow">You might also like</p>
              <h2>Related packaging</h2>
            </div>
          </div>
          <CategoryGrid cats={relatedCategories(cat)} />
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: "Packaging", item: `${site.url}/packaging` },
            { "@type": "ListItem", position: 3, name: cat.name, item: `${site.url}/packaging/${cat.slug}` },
          ],
        }}
      />
    </>
  );
}
