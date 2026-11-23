import Link from "next/link";
import { withLinks } from "@/lib/withLinks";
import { PageHero } from "@/components/PageHero";
import { CategoryGrid } from "@/components/CategoryCard";
import { Faq, JsonLd, Process, QuoteSection } from "@/components/sections";
import { getCategory, site } from "@/lib/site";
import type { Category } from "@/data/types";
import type { Landing } from "@/data/landings";


/** A keyword landing page: hero, a short written guide, popular styles, how it works, quote form and FAQs. */
export function LandingPage({ page }: { page: Landing }) {
  const cats = page.styles.map(getCategory).filter((c): c is Category => Boolean(c));
  return (
    <>
      <PageHero crumb={page.crumb} title={page.h1} lede={page.lede}>
        <div className="ctas">
          <a className="btn btn-apricot" href="#quote">
            Get a free quote <span aria-hidden="true">→</span>
          </a>
          <Link className="btn btn-ghost" href="/free-mockup">
            Get a free 3D mockup
          </Link>
        </div>
      </PageHero>
      <section className="block band">
        <div className="wrap prose">
          {page.sections.map((s) => (
            <div key={s.h} style={{ display: "grid", gap: 16 }}>
              <h2>{s.h}</h2>
              {s.p.map((p, i) => (
                <p key={i}>{withLinks(p)}</p>
              ))}
              {s.list && (
                <ul>
                  {s.list.map((li) => (
                    <li key={li}>{withLinks(li)}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
      {cats.length > 0 && (
        <section className="block band">
          <div className="wrap">
            <div className="head">
              <p className="eyebrow">Popular styles</p>
              <h2 className="h2">{page.stylesTitle}</h2>
            </div>
            <CategoryGrid cats={cats} />
          </div>
        </section>
      )}
      <Process />
      <QuoteSection title={page.quoteTitle} />
      <Faq items={page.faqs} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: page.crumb, item: `${site.url}/${page.slug}` },
          ],
        }}
      />
    </>
  );
}
