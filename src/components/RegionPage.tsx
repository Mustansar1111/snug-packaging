import Link from "next/link";
import { CategoryGrid } from "@/components/CategoryCard";
import { Faq, Process, QuoteSection, SamplesBand } from "@/components/sections";
import type { Region } from "@/data/regions";
import { featuredCategories, site } from "@/lib/site";

export function RegionPage({ region }: { region: Region }) {
  const mm = region.units.startsWith("millimetres");
  const faqs = [
    { q: `Do you deliver to ${region.name}?`, a: `Yes. We deliver to addresses across ${region.name}, and your quote includes delivery to your door.` },
    { q: `Can I get my quote in ${region.currency}?`, a: `Yes. Choose your country in the quote form and we'll price your order in ${region.currency}.` },
    { q: `Can I give my sizes in ${mm ? "millimetres" : "inches"}?`, a: "Yes. The quote form takes inches, centimetres or millimetres, and your proof shows the size in the unit you use." },
    { q: "What is the minimum order?", a: `You can order from ${site.moq} units for most styles.` },
  ];
  return (
    <>
      <section className="page-hero band on-dark">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <Link href="/shipping">Shipping</Link> <span>/</span> <span>{region.name}</span>
          </nav>
          <h1>{region.headline}</h1>
          <p className="lede">{region.intro}</p>
          <div className="ctas">
            <a className="btn btn-apricot" href="#quote">
              Get a quote in {region.currency} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
      <section className="block band">
        <div className="wrap">
          <div className="head">
            <div>
              <p className="eyebrow">Popular in {region.name}</p>
              <h2>Start with a best seller.</h2>
            </div>
            <p>
              <Link href="/packaging" style={{ color: "var(--plum)", fontWeight: 600 }}>
                See every packaging style →
              </Link>
            </p>
          </div>
          <CategoryGrid cats={featuredCategories()} />
        </div>
      </section>
      <Process />
      <QuoteSection defaultCountry={region.countries[0]} defaultUnits={mm ? "mm" : "in"} />
      <SamplesBand />
      <Faq items={faqs} />
    </>
  );
}
