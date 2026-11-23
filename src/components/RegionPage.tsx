import Link from "next/link";
import { withLinks } from "@/lib/withLinks";
import { CategoryGrid } from "@/components/CategoryCard";
import { Faq, Process, QuoteSection, MockupBand } from "@/components/sections";
import type { Region } from "@/data/regions";
import { getCategory, site } from "@/lib/site";
import type { Category } from "@/data/types";


export function RegionPage({ region }: { region: Region }) {
  const mm = region.mm;
  const faqs = [...region.faqs, { q: "What is the minimum order?", a: `You can order from ${site.moq} units for most styles.` }].filter(
    (f, i, all) => all.findIndex((x) => x.q === f.q) === i,
  );
  const popular = region.popular.map(getCategory).filter((c): c is Category => Boolean(c));
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
          <CategoryGrid cats={popular} />
        </div>
      </section>
      <section className="block band">
        <div className="wrap prose">
          {region.sections.map((s) => (
            <div key={s.h} style={{ display: "grid", gap: 16 }}>
              <h2>{s.h}</h2>
              {s.p.map((p, i) => (
                <p key={i}>{withLinks(p)}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
      <Process />
      <QuoteSection defaultCountry={region.countries[0]} defaultUnits={mm ? "mm" : "in"} />
      <MockupBand />
      <Faq items={faqs} />
    </>
  );
}
