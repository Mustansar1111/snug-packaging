import Link from "next/link";
import { CategoryGrid } from "@/components/CategoryCard";
import { Tabs } from "@/components/Tabs";
import { categories } from "@/data/categories";
import { logos, reviews, stories } from "@/data/proof";
import { featuredCategories, industryCategories, materialCategories, materials, showPlaceholders, site, telHref, whatsappHref } from "@/lib/site";

const visible = <T extends { placeholder: boolean }>(items: T[]) => items.filter((i) => !i.placeholder || showPlaceholders);

function PlaceholderTag() {
  return <span className="ph-tag">Example, replace before launch</span>;
}

/** Client logos under the hero. Hidden until there is something real (or placeholders are switched on). */
export function TrustBar() {
  const items = visible(logos);
  if (!items.length) return null;
  return (
    <section className="trust band" aria-label="Brands we make packaging for">
      <div className="wrap">
        <p>Trusted by brands in the USA, UK, Australia and Europe</p>
        <ul>
          {items.map((l) => (
            <li key={l.name} className={l.placeholder ? "ph" : undefined}>
              {l.name}
            </li>
          ))}
        </ul>
        {items.some((l) => l.placeholder) && <PlaceholderTag />}
      </div>
    </section>
  );
}

export function ShopTabs() {
  const link = (href: string, text: string) => (
    <p className="tab-more">
      <Link href={href}>{text} →</Link>
    </p>
  );
  return (
    <section className="block band" id="products">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow">Shop packaging</p>
            <h2>Start with the box your product needs.</h2>
          </div>
          <p>Browse by box style, by what you sell or by the board it&apos;s made from. Every box is made to your exact size.</p>
        </div>
        <Tabs
          label="Shop packaging by"
          tabs={[
            { key: "style", label: "By style", panel: <><CategoryGrid plain cats={featuredCategories()} />{link("/packaging", `See all ${categories.length} styles`)}</> },
            { key: "industry", label: "By industry", panel: <><CategoryGrid plain cats={industryCategories()} />{link("/packaging#industries", "See every industry")}</> },
            ...materials.map((m) => ({
              key: m.key,
              label: m.label,
              panel: (
                <>
                  <p className="group-blurb">{m.blurb}</p>
                  <CategoryGrid plain cats={materialCategories(m.key).slice(0, 8)} />
                  {link(`/packaging#${m.key}`, `See all ${m.label.toLowerCase()} packaging`)}
                </>
              ),
            })),
          ]}
        />
      </div>
    </section>
  );
}

/** Four facts that answer "can I order small, and how fast?". */
export function FactTiles() {
  const tiles = [
    { big: String(site.moq), small: "units minimum, so small brands can start small" },
    { big: "10–12", small: "business days to produce after you approve the proof" },
    { big: site.quoteReplyShort, small: `quote reply, ${site.quoteReplyDays}` },
    { big: "4", small: "markets we deliver to: USA, UK, Australia, Europe" },
  ];
  return (
    <ul className="tiles" data-reveal-group>
      {tiles.map((t) => (
        <li key={t.small}>
          <strong>{t.big}</strong>
          <span>{t.small}</span>
        </li>
      ))}
    </ul>
  );
}

export function WhySnug() {
  const rows = [
    ["Minimum order", "Often 500 or more", `From ${site.moq} units`],
    ["3D mockup", "Paid, or only after you order", "Free, before you order"],
    ["Design help", "Extra cost", "Free"],
    ["Digital proof", "Sometimes after payment", "Free, before you pay"],
    ["Sizes", "Fixed stock sizes", "Your exact size, in inches, cm or mm"],
    ["Quote", "Days, after a sales call", `By email ${site.quoteReply}`],
    ["Delivery", "One country", "USA, UK, Australia and Europe"],
  ];
  return (
    <section className="block band why-snug" id="why">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow">Why Snug</p>
            <h2>Small runs, free proofs, fast answers.</h2>
          </div>
          <p>What you usually get from a packaging supplier, and what you get from us.</p>
        </div>
        <FactTiles />
        <div className="compare" role="table" aria-label="Typical supplier compared with Snug">
          <div role="row" className="compare-head">
            <span role="columnheader" />
            <span role="columnheader">Typical supplier</span>
            <span role="columnheader">Snug</span>
          </div>
          {rows.map(([k, them, us]) => (
            <div role="row" key={k}>
              <span role="rowheader">{k}</span>
              <span role="cell" className="them">{them}</span>
              <span role="cell" className="us">{us}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stories() {
  const items = visible(stories);
  if (!items.length) return null;
  return (
    <section className="block band" id="stories">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow">Customer stories</p>
            <h2>Brands that kept the box.</h2>
          </div>
          {items.some((s) => s.placeholder) && <PlaceholderTag />}
        </div>
        <div className="stories" data-reveal-group>
          {items.map((s) => (
            <article key={s.brand} className={s.placeholder ? "story ph" : "story"}>
              <div className="story-art" aria-hidden="true" />
              <p className="story-meta">{s.industry} · {s.country}</p>
              <h3>{s.brand}</h3>
              <dl>
                <dt>The need</dt><dd>{s.problem}</dd>
                <dt>The box</dt><dd>{s.box}</dd>
                <dt>The result</dt><dd>{s.result}</dd>
              </dl>
              <blockquote>“{s.quote}”</blockquote>
              <Link href={`/packaging/${s.slug}`}>See this style →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Reviews from real customers. Until there are some, this shows the checks a buyer can make before
 * paying anything instead, so the page never pretends to have proof it doesn't have.
 */
export function Reviews({ title = "What our customers say." }: { title?: string }) {
  const items = visible(reviews);
  if (!items.length) return <BeforeYouPay />;
  return (
    <section className="block band" id="reviews">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow">Reviews</p>
            <h2>{title}</h2>
          </div>
          {items.some((r) => r.placeholder) && <PlaceholderTag />}
        </div>
        <div className="reviews" data-reveal-group>
          {items.map((r, i) => (
            <figure key={i} className={r.placeholder ? "review ph" : "review"}>
              {r.rating ? (
                <span className="stars" aria-label={`${r.rating} out of 5 stars`}>
                  {"★".repeat(Math.round(r.rating))}
                </span>
              ) : null}
              <blockquote>“{r.quote}”</blockquote>
              <figcaption>
                <b>{r.name}</b> {r.company}, {r.country}
                {r.source &&
                  (r.sourceUrl ? (
                    <>
                      {" · "}
                      <a href={r.sourceUrl} target="_blank" rel="noopener">
                        on {r.source}
                      </a>
                    </>
                  ) : (
                    ` · on ${r.source}`
                  ))}
              </figcaption>
            </figure>
          ))}
        </div>
        {site.reviewUrl && (
          <p style={{ marginTop: 20 }}>
            <a href={site.reviewUrl} target="_blank" rel="noopener">
              Ordered from us? Leave a review →
            </a>
          </p>
        )}
      </div>
    </section>
  );
}

const checks = [
  {
    title: "See it before you pay",
    text: "You get a free 3D mockup and a flat proof of your box. Nothing is printed, and nothing is charged, until you say yes.",
  },
  {
    title: "Talk to a real person",
    text: `Call, email or WhatsApp us and a packaging specialist replies ${site.quoteReply}, ${site.quoteReplyDays}. Ask us anything before you commit.`,
  },
  {
    title: "Fair if something goes wrong",
    text: "If your boxes arrive damaged or don't match the proof you approved, tell us within 7 days of delivery and we reprint or refund. The policy is short and in plain English.",
  },
  {
    title: "Offices you can find",
    text: "We have offices in Bradford in the UK and Airmont, New York. Our address, phone and email are on every page, not hidden behind a form.",
  },
];

/** Shown where reviews will go, until real ones are added in src/data/proof.ts. */
function BeforeYouPay() {
  return (
    <section className="block band" id="trust">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow">Before you pay</p>
            <h2>New to us? Here&apos;s how you can check.</h2>
          </div>
          <p>
            We&apos;re a young brand, so we&apos;d rather show you how we work than ask you to take our word for it. Every one of these
            happens before you pay anything.
          </p>
        </div>
        <ul className="feature-grid" data-reveal-group>
          {checks.map((c, i) => (
            <li key={c.title}>
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </li>
          ))}
        </ul>
        <p className="trust-links" style={{ marginTop: 20, color: "var(--muted)" }}>
          Read the <Link href="/refund-policy">refund policy</Link>, see <Link href="/how-it-works">how ordering works</Link> or{" "}
          <Link href="/contact">talk to us</Link>.
        </p>
      </div>
    </section>
  );
}

const finishes = [
  { key: "matte", name: "Matte", note: "Soft, no-shine surface" },
  { key: "gloss", name: "Gloss", note: "Shiny, bright color" },
  { key: "soft", name: "Soft-touch", note: "A velvet feel in the hand" },
  { key: "foil", name: "Foil", note: "Gold, silver or holographic" },
  { key: "uv", name: "Spot UV", note: "Raised gloss on a matte base" },
  { key: "emboss", name: "Emboss & deboss", note: "Raised or pressed-in logo" },
  { key: "window", name: "Window", note: "A clear cut-out to show the product" },
  { key: "insert", name: "Inserts", note: "Card or foam to hold each item" },
];

/** Finishes strip. Swap each swatch for a close-up photo or 10-second video once they are shot. */
export function Finishes() {
  return (
    <section className="block band" id="finishes">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow">Finishes</p>
            <h2>The details people remember.</h2>
          </div>
          <p>Add any of these to your box. Not sure which? Ask for a free 3D mockup and we&apos;ll show you.</p>
        </div>
        <ul className="finishes" data-reveal-group>
          {finishes.map((f) => (
            <li key={f.key}>
              <span className={`sw sw-${f.key}`} aria-hidden="true" />
              <b>{f.name}</b>
              <span>{f.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Closing call to action, shown above the footer on every page. */
export function CtaBand() {
  return (
    <section className="cta-band band on-dark">
      <div className="wrap">
        <div>
          <h2>Ready to see your price?</h2>
          <p>Free quote by email {site.quoteReply}, {site.quoteReplyDays}. No account, no payment.</p>
        </div>
        <div className="ctas">
          <Link className="btn btn-apricot" href="/quote">
            Get a free quote <span aria-hidden="true">→</span>
          </Link>
          {site.whatsapp && (
            <a className="btn btn-ghost" href={whatsappHref()} rel="noopener">
              Chat on WhatsApp
            </a>
          )}
          {site.phone && (
            <a className="btn btn-ghost" href={telHref(site.phone)}>
              {site.phone}
            </a>
          )}
          <a className="btn btn-ghost" href={`mailto:${site.email}`}>
            Email us
          </a>
        </div>
      </div>
    </section>
  );
}
