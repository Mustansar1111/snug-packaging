import type React from "react";
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
  const items = ["Cosmetics", "Coffee & tea", "Apparel", "Bakery", "Candles", "CBD & hemp", "Jewelry", "Subscription boxes", "Electronics", "Gifts"];
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
        <DeliveryRoad />
        <div className="steps">
          {steps.map((s, i) => (
            <div className="step" key={s.h}>
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

/**
 * The road above the four steps: a Snug van drives from step 1 to a house at the end and drops a box on
 * the doorstep. This markup is the finished scene (van parked, box delivered), which is what visitors see
 * without JavaScript or with reduced motion. Motion.tsx scrubs it with GSAP as the section scrolls by.
 */
function DeliveryRoad() {
  return (
    <div className="road" aria-hidden="true">
      <span className="road-base" />
      <span className="road-fill" />
      {[1, 2, 3, 4].map((n) => (
        <span className="stop" key={n} style={{ "--i": n - 1 } as React.CSSProperties}>
          <span className="stop-fill" />
          <span className="stop-n">{n}</span>
        </span>
      ))}
      <span className="rig">
        <span className="puffs">
          <i />
          <i />
          <i />
        </span>
        <svg className="van" viewBox="0 0 92 52">
          <g className="van-body">
            <rect x="2" y="4" width="58" height="34" rx="5" fill="var(--box)" />
            <rect x="2" y="30" width="58" height="4" fill="var(--apricot)" />
            <text x="31" y="24" textAnchor="middle" fill="var(--apricot)" fontSize="14" fontWeight="800" fontFamily="var(--display)" letterSpacing="-0.5">
              snug
            </text>
            <path d="M62 14h14.5c2 0 3.8 1.1 4.8 2.8l6.2 10.6c.6 1 .9 2.1.9 3.2V38H62z" fill="var(--apricot)" />
            <path d="M66 18h9.5c1 0 1.9.5 2.4 1.4l3.6 6.6H66z" fill="#fbf3f8" opacity=".85" />
            <rect x="84" y="31" width="4" height="3" rx="1.5" fill="#fff6c8" />
            <rect x="0" y="36" width="90" height="4" rx="2" fill="var(--box-shade)" />
          </g>
          <g className="wheel">
            <circle cx="20" cy="42" r="8" fill="#1d1422" />
            <circle cx="20" cy="42" r="3.5" fill="#e9e1ec" />
            <rect x="19" y="35" width="2" height="5" rx="1" fill="#e9e1ec" />
          </g>
          <g className="wheel">
            <circle cx="74" cy="42" r="8" fill="#1d1422" />
            <circle cx="74" cy="42" r="3.5" fill="#e9e1ec" />
            <rect x="73" y="35" width="2" height="5" rx="1" fill="#e9e1ec" />
          </g>
        </svg>
      </span>
      <svg className="parcel" viewBox="0 0 20 18">
        <path d="M1 5h18v12H1z" fill="var(--box-inside)" />
        <path d="M1 5l3-4h12l3 4z" fill="color-mix(in srgb, var(--box-inside) 75%, #000)" />
        <rect x="8.5" y="1" width="3" height="16" fill="var(--box)" opacity=".55" />
      </svg>
      <svg className="house" viewBox="0 0 64 64">
        <path d="M6 30L32 8l26 22" fill="none" stroke="var(--box)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 28v28h40V28L32 11z" fill="var(--plum-soft)" />
        <rect x="27" y="38" width="12" height="18" rx="2" fill="var(--box)" />
        <circle cx="36" cy="47.5" r="1.2" fill="var(--apricot)" />
        <rect className="house-window" x="42" y="33" width="7" height="7" rx="1.5" fill="var(--apricot)" />
        <rect x="23" y="56" width="20" height="3" rx="1" fill="var(--box-shade)" />
      </svg>
      <span className="delivered">
        <svg viewBox="0 0 16 16">
          <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
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

/** Keyword links from the home page into the pages we most want to rank. */
const popularLinks = [
  ["/custom-boxes-with-logo", "Custom boxes with logo"],
  ["/packaging/mailer-boxes", "Custom mailer boxes"],
  ["/packaging/shipping-boxes", "Custom shipping boxes"],
  ["/packaging/rigid-boxes", "Custom rigid boxes"],
  ["/packaging/magnetic-closure-boxes", "Magnetic closure boxes"],
  ["/packaging/folding-cartons", "Folding cartons"],
  ["/packaging/product-boxes", "Custom product boxes"],
  ["/packaging/cosmetic-boxes", "Custom cosmetic boxes"],
  ["/packaging/candle-boxes", "Custom candle boxes"],
  ["/packaging/stand-up-pouches", "Custom stand-up pouches"],
  ["/packaging/luxury-boxes", "Luxury packaging boxes"],
  ["/small-business-packaging", "Packaging for small business"],
  ["/wholesale-custom-boxes", "Wholesale custom boxes"],
  ["/sustainability", "Eco-friendly packaging"],
];

export function PopularLinks() {
  return (
    <section className="block band" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow">Popular searches</p>
            <h2>Custom packaging people ask us for most.</h2>
          </div>
        </div>
        <ul className="popular-links">
          {popularLinks.map(([href, label]) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
