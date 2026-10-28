import Link from "next/link";
import { CategoryGrid } from "@/components/CategoryCard";
import { FoldingBox } from "@/components/FoldingBox";
import { Faq, Marquee, Process, QuoteSection, RegionsBand, SamplesBand } from "@/components/sections";
import { categories } from "@/data/categories";
import { featuredCategories, generalFaqs, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="hero band">
        <div className="wrap">
          <div>
            <p className="eyebrow" style={{ color: "var(--apricot)" }}>
              Custom printed packaging · USA · UK · Australia · Europe
            </p>
            <h1>
              Packaging that makes people <em>keep the box.</em>
            </h1>
            <p className="lede">
              Custom mailer, rigid and retail boxes, bags and labels, printed with your artwork from just {site.moq} units. Free design help, a
              digital proof before we print, and delivery to your door.
            </p>
            <div className="ctas">
              <Link className="btn btn-apricot" href="/quote">
                Get a free quote <span aria-hidden="true">→</span>
              </Link>
              <Link className="btn btn-ghost" href="/samples">
                Order a sample kit
              </Link>
            </div>
            <div className="facts">
              <div><strong>{site.moq}</strong>minimum order</div>
              <div><strong>10–12</strong>business days to produce</div>
              <div><strong>{categories.length}+</strong>packaging styles</div>
            </div>
          </div>
          <FoldingBox />
        </div>
      </section>

      <Marquee />

      <section className="block band" id="products">
        <div className="wrap">
          <div className="head">
            <div>
              <p className="eyebrow">Shop by packaging style</p>
              <h2>Start with the box your product needs.</h2>
            </div>
            <p>
              Every style is made to your exact size, printed in full colour and finished the way you want it.{" "}
              <Link href="/packaging" style={{ color: "var(--plum)", fontWeight: 600 }}>
                See all {categories.length} styles →
              </Link>
            </p>
          </div>
          <CategoryGrid cats={featuredCategories()} />
        </div>
      </section>

      <Process />
      <QuoteSection />
      <RegionsBand />
      <SamplesBand />
      <Faq items={generalFaqs} />
    </>
  );
}
