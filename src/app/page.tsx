import Link from "next/link";
import { FoldingBox } from "@/components/FoldingBox";
import { Finishes, Reviews, ShopTabs, Stories, TrustBar, WhySnug } from "@/components/proof";
import { Faq, Marquee, Process, QuoteSection, RegionsBand, MockupBand } from "@/components/sections";
import { generalFaqs, site } from "@/lib/site";

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
              <Link className="btn btn-ghost" href="/free-mockup">
                Get a free 3D mockup
              </Link>
            </div>
            <div className="facts">
              <div><strong>{site.moq}</strong>minimum order</div>
              <div><strong>10–12</strong>business days to produce</div>
              <div><strong>{site.quoteReplyShort}</strong>quote reply, {site.quoteReplyDays}</div>
            </div>
          </div>
          <FoldingBox />
        </div>
      </section>

      <TrustBar />
      <Marquee />

      <ShopTabs />
      <WhySnug />
      <Process />
      <Stories />
      <Finishes />
      <QuoteSection />
      <RegionsBand />
      <MockupBand />
      <Reviews />
      <Faq items={generalFaqs} />
    </>
  );
}
