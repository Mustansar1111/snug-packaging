import type { Metadata } from "next";
import Link from "next/link";
import { withLinks } from "@/lib/withLinks";
import { notFound } from "next/navigation";
import { CategoryGrid } from "@/components/CategoryCard";
import { Faq, JsonLd, QuoteSection } from "@/components/sections";
import { getPost, guidesFor, posts, type Block } from "@/data/posts";
import { Guides } from "@/components/Guides";
import type { Category } from "@/data/types";
import { getCategory, site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return { robots: { index: false } };
  return {
    // Long post titles drop the brand suffix so Google doesn't cut them off.
    title: post.title.length > 42 ? { absolute: post.title } : post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      siteName: site.name,
      locale: "en_US",
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      section: post.tag,
    },
  };
}

function Section({ b }: { b: Block }) {
  return (
    <div style={{ display: "grid", gap: 14 }}>
      {b.h && <h2>{b.h}</h2>}
      {b.p?.map((t) => <p key={t}>{withLinks(t)}</p>)}
      {b.list && (
        <ul>
          {b.list.map((t) => (
            <li key={t}>{withLinks(t)}</li>
          ))}
        </ul>
      )}
      {b.quote && <blockquote className="post-brief">{b.quote}</blockquote>}
    </div>
  );
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const related = post.related.map(getCategory).filter((c): c is Category => Boolean(c));
  return (
    <>
      <section className="page-hero band on-dark">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <Link href="/blog">Blog</Link> <span>/</span> <span>{post.tag}</span>
          </nav>
          <h1 style={{ maxWidth: "18em" }}>{post.title}</h1>
          <p className="lede">{post.description}</p>
          <p className="post-byline">
            {post.author ? `By ${post.author}` : site.author.name ? `By ${site.author.name}${site.author.role ? `, ${site.author.role}` : ""}` : "By the Snug Packaging team"} · <time dateTime={post.date}>{new Date(`${post.date}T00:00:00Z`).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })}</time> · {post.readMins} min read
          </p>
        </div>
      </section>
      <article className="block band">
        <div className="wrap prose">
          {post.image && (
            <figure className="post-hero-img">
              <picture>
                <source type="image/webp" srcSet={`${post.image.webpSm} 836w, ${post.image.webp} ${post.image.width}w`} sizes="(max-width: 760px) 100vw, 68ch" />
                <img src={post.image.src} alt={post.image.alt} title={post.image.title} width={post.image.width} height={post.image.height} fetchPriority="high" decoding="async" />
              </picture>
              <figcaption>{post.image.caption}</figcaption>
            </figure>
          )}
          {post.body.map((b, i) => (
            <Section key={i} b={b} />
          ))}
        </div>
      </article>
      {post.faq && <Faq items={post.faq} title="Frequently asked questions." />}
      {post.outro && (
        <section className="block band" style={post.faq ? { paddingTop: 0 } : undefined}>
          <div className="wrap prose">
            <Section b={post.outro} />
          </div>
        </section>
      )}
      <section className="block band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head">
            <div>
              <p className="eyebrow">Styles in this guide</p>
              <h2>Get a price for these.</h2>
            </div>
          </div>
          <CategoryGrid cats={related} />
        </div>
      </section>
      <Guides
        eyebrow="Keep reading"
        title="More packaging guides."
        posts={(related[0] ? guidesFor(related[0], 4) : posts).filter((p) => p.slug !== post.slug).slice(0, 3)}
      />
      <QuoteSection defaultStyle={related[0]?.name} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated ?? post.date,
          author: post.author
            ? { "@type": "Person", name: post.author, worksFor: { "@id": `${site.url}/#org` } }
            : site.author.name
            ? {
                "@type": "Person",
                name: site.author.name,
                ...(site.author.role ? { jobTitle: site.author.role } : {}),
                ...(site.author.url ? { url: site.author.url } : {}),
                worksFor: { "@id": `${site.url}/#org` },
              }
            : { "@type": "Organization", "@id": `${site.url}/#org`, name: site.name, url: `${site.url}/about` },
          image: post.image
            ? [
                {
                  "@type": "ImageObject",
                  url: `${site.url}${post.image.src}`,
                  width: post.image.width,
                  height: post.image.height,
                  name: post.image.title,
                  caption: post.image.caption,
                  description: post.image.description,
                },
                `${site.url}/blog/${post.slug}/opengraph-image`,
              ]
            : `${site.url}/blog/${post.slug}/opengraph-image`,
          publisher: { "@type": "Organization", "@id": `${site.url}/#org`, name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/logo.png` } },
          mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/blog/${post.slug}` },
          articleSection: post.tag,
          inLanguage: "en",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: "Guides", item: `${site.url}/blog` },
            { "@type": "ListItem", position: 3, name: post.title, item: `${site.url}/blog/${post.slug}` },
          ],
        }}
      />
    </>
  );
}
