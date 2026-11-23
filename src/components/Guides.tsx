import Link from "next/link";
import type { Post } from "@/data/posts";

/** A short row of buying guides, so product pages link into the blog and the blog gets found. */
export function Guides({ posts, title, eyebrow = "Before you order" }: { posts: Post[]; title: string; eyebrow?: string }) {
  if (!posts.length) return null;
  return (
    <section className="block band" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
          </div>
          <Link href="/blog">All packaging guides →</Link>
        </div>
        <ul className="posts" data-reveal-group>
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`}>
                <p className="post-meta">
                  {p.tag} · {p.readMins} min read
                </p>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span>Read the guide →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
