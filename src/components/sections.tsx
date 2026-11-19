import Link from "next/link";
import { categories } from "@/data/categories";
import { regions } from "@/data/regions";
import { site } from "@/lib/site";
import { QuoteForm } from "./QuoteForm";
import { SampleForm } from "./SampleForm";

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

/** What goes in the free sample kit (as proposed in the sample kit plan; update once confirmed). */
export const kitItems = [
  { swatch: "sbs", name: "White card (SBS)", note: "Smooth board for cosmetic, retail and tuck boxes" },
  { swatch: "kraft", name: "Natural kraft", note: "Brown, eco look for food, candles and soap" },
  { swatch: "flute", name: "Corrugated E-flute", note: "Strong shipping board for mailers" },
  { swatch: "rigid", name: "Rigid greyboard", note: "Thick, wrapped board for luxury boxes" },
  { swatch: "matte", name: "Matte", note: "Soft, no-shine surface" },
  { swatch: "gloss", name: "Gloss", note: "Shiny finish with bright colours" },
  { swatch: "soft", name: "Soft-touch", note: "A velvet feel in the hand" },
  { swatch: "foil", name: "Gold & silver foil", note: "Metallic logo stamping" },
  { swatch: "uv", name: "Spot UV", note: "Raised gloss on a matte base" },
  { swatch: "emboss", name: "Emboss & deboss", note: "Raised and pressed-in logos" },
  { swatch: "mailer", name: "Mini mailer box", note: "See how a printed mailer folds and closes" },
  { swatch: "tuck", name: "Mini tuck box", note: "Retail tuck style with inside print" },
  { swatch: "pouch", name: "Mylar pouch", note: "Stand-up zip pouch" },
  { swatch: "labels", name: "Label sheet", note: "Gloss, matte, clear and kraft stickers" },
  { swatch: "colour", name: "Colour card", note: "Standard CMYK print next to exact Pantone" },
] as const;

export function KitContents() {
  return (
    <section className="block band" id="kit">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow">What&apos;s in the kit</p>
            <h2>{kitItems.length} pieces you can hold.</h2>
          </div>
          <p>Four boards, six finishes, two mini boxes, a pouch, a label sheet and a colour card, posted in a printed Musa mailer.</p>
        </div>
        <ul className="kit" data-reveal-group>
          {kitItems.map((k) => (
            <li key={k.name}>
              <span className={`sw sw-${k.swatch}`} aria-hidden="true" />
              <b>{k.name}</b>
              <span>{k.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function SamplesBand() {
  return (
    <section className="block band samples" id="samples">
      <div className="wrap">
        <div className="card">
          <div>
            <p className="eyebrow">Free sample kit</p>
            <h2 style={{ marginTop: 10 }}>Feel the board before you order.</h2>
            <p>Get a kit of our most popular boards and finishes posted to you, so you can choose with confidence.</p>
            <ul className="kit-mini">
              <li>4 boards</li>
              <li>6 finishes</li>
              <li>2 mini boxes</li>
              <li>Pouch &amp; labels</li>
              <li>Colour card</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              <Link href="/samples#kit" style={{ color: "var(--plum)", fontWeight: 600 }}>
                See everything in the kit →
              </Link>
            </p>
          </div>
          <div>
            <SampleForm />
          </div>
        </div>
      </div>
    </section>
  );
}
