import Link from "next/link";
import { categories } from "@/data/categories";
import { regions } from "@/data/regions";
import { site } from "@/lib/site";
import { QuoteForm } from "./QuoteForm";
import { MockupForm } from "./MockupForm";

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function Faq({ items, title = "Good to know." }: { items: { q: string; a: string }[]; title?: string }) {
  return (
    <section className="block band" id="faq">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow">Questions</p>
            <h2>{title}</h2>
          </div>
        </div>
        <div className="faq">
          {items.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
    </section>
  );
}

export function Marquee() {
  const items = ["Cosmetics", "Coffee & tea", "Apparel", "Bakery", "Candles", "CBD & hemp", "Jewellery", "Subscription boxes", "Electronics", "Gifts"];
  return (
    <div className="marquee" aria-label="Industries we make packaging for">
      <div className="track">
        {[...items, ...items].map((t, i) => (
          <span key={i} aria-hidden={i >= items.length}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Process() {
  const steps = [
    { h: "Tell us the size", p: "Pick a style, add your dimensions and quantity. A specialist replies with a price." },
    { h: "Approve a free proof", p: "Our designers place your artwork on the dieline and send a 3D mockup to check." },
    { h: "We print and finish", p: `Production takes ${site.turnaround}, including foil, embossing or spot UV.` },
    { h: "Delivered to you", p: "Shipped flat-packed to your door in the USA, UK, Australia or Europe." },
  ];
  return (
    <section className="block band process" id="how">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow">How it works</p>
            <h2>From idea to doorstep in four steps.</h2>
          </div>
          <p>You never pay for anything you haven&apos;t seen. Every order starts with a free digital proof.</p>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div className="step" key={s.h}>
              <span className="bar" />
              <span className="n">Step {i + 1}</span>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QuoteSection({
  defaultStyle,
  defaultCountry,
  defaultUnits,
  title = "Get your price in three short steps.",
}: {
  defaultStyle?: string;
  defaultCountry?: string;
  defaultUnits?: "in" | "cm" | "mm";
  title?: string;
}) {
  return (
    <section className="block band" id="quote">
      <div className="wrap quote-grid">
        <div>
          <p className="eyebrow">Free quote</p>
          <h2 className="h2">{title}</h2>
          <p style={{ color: "var(--muted)", marginTop: 16, maxWidth: "30em" }}>
            No account and no payment. Tell us what you need and a packaging specialist will reply with a price and options.
          </p>
          <div className="why">
            <div><b>Reply</b><span>Your price by email {site.quoteReply}, {site.quoteReplyDays}</span></div>
            <div><b>MOQ</b><span>Start from {site.moq} units</span></div>
            <div><b>Proof</b><span>Free digital proof and 3D mockup</span></div>
            <div><b>Units</b><span>Inches, cm or mm, whichever you use</span></div>
            <div><b>Design</b><span>Free design help if you don&apos;t have artwork</span></div>
          </div>
        </div>
        <QuoteForm
          styles={categories.map((c) => c.name)}
          defaultStyle={defaultStyle}
          defaultCountry={defaultCountry}
          defaultUnits={defaultUnits}
        />
      </div>
    </section>
  );
}

export function RegionsBand() {
  return (
    <section className="block band regions on-dark" id="regions">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow">Worldwide delivery</p>
            <h2>Made for brands in four markets.</h2>
          </div>
          <p>Each region has its own page with local delivery details, currency and spelling.</p>
        </div>
        <div className="reg" data-reveal-group>
          {regions.map((r) => (
            <Link key={r.slug} href={`/${r.slug}`}>
              <span className="code">{r.code}</span>
              <h3>{r.name}</h3>
              <p>Quotes in {r.currency}, sizes in {r.units}.</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MockupBand() {
  return (
    <section className="block band samples" id="mockup">
      <div className="wrap">
        <div className="card">
          <div>
            <p className="eyebrow">Free 3D mockup</p>
            <h2 style={{ marginTop: 10 }}>See your box before you pay a thing.</h2>
            <p>Send us your logo and our designers will put it on the box you have in mind, as a 3D mockup you can share with your team.</p>
            <ul className="kit-mini">
              <li>No payment</li>
              <li>No account</li>
              <li>Your own logo</li>
            </ul>
          </div>
          <div>
            <MockupForm />
          </div>
        </div>
      </div>
    </section>
  );
}
