import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryGrid } from "@/components/CategoryCard";
import { JsonLd, QuoteSection } from "@/components/sections";
import { getPost, posts } from "@/data/posts";
import type { Category } from "@/data/types";
import { getCategory, site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return { robots: { index: false } };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", publishedTime: post.date },
  };
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
            Musa Packaging · <time dateTime={post.date}>{new Date(`${post.date}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })}</time> · {post.readMins} min read
          </p>
        </div>
      </section>
      <article className="block band">
        <div className="wrap prose">
          {post.body.map((b, i) => (
            <div key={i} style={{ display: "grid", gap: 14 }}>
              {b.h && <h2>{b.h}</h2>}
              {b.p?.map((t) => <p key={t}>{t}</p>)}
              {b.list && (
                <ul>
                  {b.list.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </article>
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
      <QuoteSection defaultStyle={related[0]?.name} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          author: { "@type": "Organization", name: site.name },
          publisher: { "@type": "Organization", name: site.name },
          mainEntityOfPage: `${site.url}/blog/${post.slug}`,
        }}
      />
    </>
  );
}
