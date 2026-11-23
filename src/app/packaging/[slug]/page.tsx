import type { Metadata } from "next";
import Link from "next/link";
import { Reviews } from "@/components/proof";
import { notFound } from "next/navigation";
import { CategoryGrid } from "@/components/CategoryCard";
import { PackIcon } from "@/components/PackIcon";
import { packPhoto } from "@/lib/images";
import { QuoteForm } from "@/components/QuoteForm";
import { Faq, JsonLd, Process } from "@/components/sections";
import { categories } from "@/data/categories";
import type { IconKey } from "@/data/types";
import { areaServed, categoryFaqs, getCategory, joinList, metaDescription, relatedCategories, site, lowerName, og } from "@/lib/site";
import { getRichContent, type StyleEntry } from "@/data/categoryContent";
import { CustomizeTabs, CategoryStats, WhyOrder } from "@/components/CategoryExtras";
import { Guides } from "@/components/Guides";
import { guidesFor } from "@/data/posts";

/** Turn a style entry into a card: a slug becomes a link to that Snug category with its photo. */
type ResolvedStyle = { name: string; blurb: string; img: string | null; href: string; icon?: IconKey };

function resolveStyles(styles: StyleEntry[]): ResolvedStyle[] {
  return styles.flatMap((st): ResolvedStyle[] => {
    if (typeof st !== "string") return [{ name: st.name, blurb: st.blurb, img: st.img, href: "#quote" }];
    const c = getCategory(st);
    if (!c) return [];
    return [{ name: c.name, blurb: c.intro, img: packPhoto(c.slug)?.srcSm ?? null, href: `/packaging/${c.slug}`, icon: c.icon }];
  });
}

/** Render [text](/path) inside guide copy as internal links. */
function withLinks(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    return m ? <Link key={i} href={m[2]}>{m[1]}</Link> : part;
  });
}

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/packaging/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) return {};
  return {
    title: `Custom ${cat.name} with Logo`,
    description: metaDescription(cat.intro, [
      `Made to your size from ${site.moq} units, with free design help and a 3D proof.`,
      `From ${site.moq} units, with a free 3D proof.`,
    ]),
    alternates: { canonical: `/packaging/${cat.slug}` },
    openGraph: og(`/packaging/${cat.slug}`),
  };
}

export default async function CategoryPage({ params }: PageProps<"/packaging/[slug]">) {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) notFound();
  const rich = getRichContent(cat.slug);
  const parent = cat.parent ? getCategory(cat.parent) : undefined;
  const children = categories.filter((c) => c.parent === cat.slug);
  const styleList: StyleEntry[] = [...children.map((c) => c.slug).filter((s) => !rich?.styles.includes(s)), ...(rich?.styles ?? [])];
  const faqs = [...(rich?.faqs ?? []), ...categoryFaqs(cat)];
  const photo = packPhoto(cat.slug);
  const lower = lowerName(cat.name);

  return (
    <>
      <section className="page-hero split-hero band on-dark">
        <div className="wrap">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link> <span>/</span> <Link href="/packaging">Packaging</Link> <span>/</span>{" "}
              {parent && (
                <>
                  <Link href={`/packaging/${parent.slug}`}>{parent.name}</Link> <span>/</span>{" "}
                </>
              )}
              <span>{cat.name}</span>
            </nav>
            <h1>Custom {cat.name}</h1>
            <p className="lede">{rich?.lede ?? cat.intro}</p>
            <div className="ctas">
              <a className="btn btn-apricot" href="#quote">
                Get a free quote <span aria-hidden="true">→</span>
              </a>
              {styleList.length > 0 ? (
                <a className="btn btn-ghost" href="#styles">
                  Browse {styleList.length} {cat.parent ? "related styles" : "styles"}
                </a>
              ) : (
                <Link className="btn btn-ghost" href="/free-mockup">
                  Get a free 3D mockup
                </Link>
              )}
            </div>
          </div>
          {photo ? (
            <div className="art-big photo" data-hero-photo>
              <span className="photo-badge">Free 3D mockup</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                srcSet={photo.srcSet}
                sizes="(max-width: 860px) 90vw, 360px"
                alt={`Custom printed ${lowerName(cat.name)}`}
                width={600}
                height={600}
                fetchPriority="high"
              />
            </div>
          ) : (
            <div className="art-big" aria-hidden="true">
              <PackIcon icon={cat.icon} />
            </div>
          )}
        </div>
      </section>

      <CategoryStats />

      <section className="block band" id="quote">
        <div className="wrap detail">
          <div>
            <p className="eyebrow">At a glance</p>
            <h2 className="h2" style={{ fontSize: "clamp(28px, 3.4vw, 40px)" }}>
              {cat.name} at a glance
            </h2>
            <p style={{ color: "var(--muted)", marginTop: 14, maxWidth: "62ch" }}>
              Every order is made to your size and printed with your artwork, from {site.moq} units. You choose the board, print and
              finish, we send a free 3D mockup to approve, and production takes {site.turnaround}.
            </p>
            <table className="specs" style={{ marginTop: 24 }} data-reveal-rows>
              <tbody>
                <tr><th scope="row">Popular style</th><td>{cat.style}</td></tr>
                <tr><th scope="row">Material</th><td>{cat.material}</td></tr>
                <tr><th scope="row">Finishes</th><td>{cat.finish}</td></tr>
                <tr><th scope="row">Minimum order</th><td>{site.moq} units</td></tr>
                <tr><th scope="row">Production</th><td>{site.turnaround} after proof approval</td></tr>
                <tr><th scope="row">Sizes</th><td>Made to your inside dimensions, in inches, centimeters or millimeters</td></tr>
              </tbody>
            </table>
            <h3 style={{ fontSize: 22, marginTop: 36 }}>Brands use them for</h3>
            <ul className="uses">
              {cat.uses.map((u) => (
                <li key={u}>{u}</li>
              ))}
            </ul>
            <p style={{ color: "var(--muted)", marginTop: 20, maxWidth: "62ch" }}>
              Whether you need {lowerName(cat.name)} for {joinList(cat.uses.slice(0, 2))}, we build each order around your product,
              print your artwork in full color and send a free proof before anything goes to press.
            </p>
            {cat.tip && (
              <div className="tip">
                <b>Packaging tip</b>
                {cat.tip}
              </div>
            )}
          </div>
          <div className="sticky">
            <QuoteForm styles={categories.map((c) => c.name)} defaultStyle={cat.name} />
          </div>
        </div>
      </section>

      {styleList.length > 0 && (
        <section className="block band" id="styles">
          <div className="wrap">
            <div className="head">
              <div>
                <p className="eyebrow">{cat.parent ? "Related styles" : "Styles"}</p>
                <h2>{cat.parent ? `Pair your ${lower} with these` : `Choose your ${lower} style`}</h2>
              </div>
              <p>Every style below is made to your size and printed with your artwork. Tap one to start your quote.</p>
            </div>
            <ul className="style-grid" data-reveal-group>
              {resolveStyles(styleList).map((st) => (
                <li key={st.name}>
                  <Link href={st.href} className="style-card">
                    <span className={st.img ? "img" : "img icon"}>
                      {st.img ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={st.img} alt={st.name} loading="lazy" decoding="async" width={480} height={480} />
                      ) : (
                        <PackIcon icon={st.icon ?? "carton"} />
                      )}
                    </span>
                    <b>{st.name}</b>
                    <span className="blurb">{st.blurb}</span>
                    <span className="go">{st.href === "#quote" ? "Get a quote →" : `See ${lowerName(st.name)} →`}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="style-more">
              <div>
                <b>Don&apos;t see your box?</b>
                <span>We make any size, shape and finish. Send us your idea and we&apos;ll design it for free.</span>
              </div>
              <Link className="btn btn-plum" href="/free-mockup">Request a free design</Link>
            </div>
          </div>
        </section>
      )}

      <CustomizeTabs name={lower} />

      {rich && (
        <section className="block band" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="head">
              <div>
                <p className="eyebrow">Why they work</p>
                <h2>What makes good {lower}</h2>
              </div>
            </div>
            <ul className="feature-grid" data-reveal-group>
              {rich.features.map((f, i) => (
                <li key={f.title}>
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <WhyOrder name={lower} />
      <Process />

      {rich && (
        <section className="block band guide" id="guide">
          <div className="wrap guide-grid">
            <div className="guide-side">
              <p className="eyebrow">Buyer&apos;s guide</p>
              <h2 className="h2">How to choose {lower}</h2>
              <nav aria-label="Guide sections">
                {rich.guide.map((g, i) => (
                  <a key={g.h} href={`#guide-${i}`}>{g.h}</a>
                ))}
              </nav>
            </div>
            <div className="guide-body">
              {rich.guide.map((g, i) => (
                <article key={g.h} id={`guide-${i}`} data-reveal>
                  <h3>{g.h}</h3>
                  {g.p.map((t) => (
                    <p key={t.slice(0, 24)}>{withLinks(t)}</p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      <Reviews />
      <Faq items={faqs.slice(0, 8)} title={`${cat.name} questions`} />
      <Guides posts={guidesFor(cat)} title={`Guides for buying ${lower}`} />

      <section className="block band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head">
            <div>
              <p className="eyebrow">You might also like</p>
              <h2>Related packaging</h2>
            </div>
          </div>
          <CategoryGrid cats={relatedCategories(cat, 8)} />
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Custom ${cat.name}`,
          serviceType: "Custom printed packaging",
          description: cat.intro,
          url: `${site.url}/packaging/${cat.slug}`,
          // Pages still waiting for a real photo point Google at their generated share image instead.
          image: photo ? `${site.url}${photo.src}` : `${site.url}/packaging/${cat.slug}/opengraph-image`,
          provider: { "@id": `${site.url}/#org` },
          areaServed,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: "Packaging", item: `${site.url}/packaging` },
            ...(parent ? [{ "@type": "ListItem", position: 3, name: parent.name, item: `${site.url}/packaging/${parent.slug}` }] : []),
            { "@type": "ListItem", position: parent ? 4 : 3, name: cat.name, item: `${site.url}/packaging/${cat.slug}` },
          ],
        }}
      />
    </>
  );
}
