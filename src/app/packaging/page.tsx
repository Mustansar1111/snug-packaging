import type { Metadata } from "next";
import Link from "next/link";
import { CategoryGrid } from "@/components/CategoryCard";
import { QuoteSection } from "@/components/sections";
import { categories } from "@/data/categories";
import { groups } from "@/lib/site";

export const metadata: Metadata = {
  title: "All Custom Packaging Styles",
  description: `Browse ${categories.length} custom packaging styles: mailer, rigid, cosmetic and food boxes, mylar bags, labels and more. Made to your size from 100 units.`,
  alternates: { canonical: "/packaging" },
};

export default function PackagingHub() {
  return (
    <>
      <section className="page-hero band on-dark">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <span>Packaging</span>
          </nav>
          <h1>Every kind of custom packaging, made to your size.</h1>
          <p className="lede">
            {categories.length} styles of printed boxes, bags and labels. Pick by box style or by what you sell, then get a free quote.
          </p>
        </div>
      </section>

      <section className="block band" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <nav className="tabs" aria-label="Packaging groups">
            {groups.map((g) => (
              <a key={g.key} className="chip" href={`#${g.key}`}>
                {g.label}
              </a>
            ))}
          </nav>
          {groups.map((g) => (
            <div key={g.key} id={g.key} style={{ scrollMarginTop: 96 }}>
              <h2 className="group-title">{g.label}</h2>
              <p className="group-blurb">{g.blurb}</p>
              <CategoryGrid cats={categories.filter((c) => c.group === g.key)} />
            </div>
          ))}
        </div>
      </section>

      <QuoteSection title="Can't see your style? Ask us." />
    </>
  );
}
