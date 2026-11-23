import Link from "next/link";
import { FoldingBox } from "@/components/FoldingBox";
import { Finishes, Reviews, ShopTabs, Stories, TrustBar, WhySnug } from "@/components/proof";
import { Faq, Marquee, Process, QuoteSection, RegionsBand, MockupBand } from "@/components/sections";
import { generalFaqs, site } from "@/lib/site";

export default function Home() {
  return (
    <div className="home">
      <section className="hero band">
        <div className="wrap">
          <div>
            {/* The small line is the page's H1 so Google reads the keywords; the big slogan stays as the visual headline. */}
            <h1 className="eyebrow" style={{ color: "var(--apricot)" }}>
              Custom boxes &amp; packaging with your logo · USA · UK · Australia · Europe
            </h1>
            <p className="display">
              <span className="hl"><em>Snug</em> Packaging</span> <span className="hl">that makes people</span> <span className="hl"><em>keep the box.</em></span>
            </p>
            <p className="lede">
              Custom boxes printed with your logo, from just {site.moq} units. Mailer boxes, rigid gift boxes, retail boxes, bags and labels,
              with free design help, a digital proof before we print, and delivery to your door.
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
    </div>
  );
}
