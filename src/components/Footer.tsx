import Link from "next/link";
import { featuredCategories, site } from "@/lib/site";
import { industries } from "@/data/industries";
import { regions } from "@/data/regions";
import { CtaBand } from "./proof";

export function Footer() {
  return (
    <>
      <CtaBand />
      <footer className="site-foot band">
        <div className="wrap">
          <div>
            <Link className="logo" href="/">
              <b>snug</b>
              <span>packaging</span>
            </Link>
            <p style={{ marginTop: 14, maxWidth: "28em" }}>
              Custom printed boxes, bags and labels for brands in the USA, UK, Australia and Europe.
            </p>
            <p style={{ marginTop: 14 }}>{site.email}</p>
            {site.phone && <p>{site.phone}</p>}
          </div>
          <div>
            <h4>Packaging</h4>
            <ul>
              {featuredCategories()
                .slice(0, 4)
                .map((c) => (
                  <li key={c.slug}>
                    <Link href={`/packaging/${c.slug}`}>{c.name}</Link>
                  </li>
                ))}
              <li>
                <Link href="/packaging">All packaging</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Industries</h4>
            <ul>
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link href={`/industries/${i.slug}`}>{i.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><Link href="/how-it-works">How it works</Link></li>
              <li><Link href="/materials-and-finishes">Materials &amp; finishes</Link></li>
              <li><Link href="/artwork-guide">Artwork guide</Link></li>
              <li><Link href="/sustainability">Sustainability</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Snug</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/free-mockup">Free 3D mockup</Link></li>
              <li><Link href="/shipping">Shipping</Link></li>
              {regions.map((r) => (
                <li key={r.slug}>
                  <Link href={`/${r.slug}`}>Shipping to {r.code}</Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="legal">
            © Snug Packaging · <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link> · <Link href="/cookies">Cookies</Link>
          </p>
        </div>
      </footer>
      <div className="mbar">
        <Link className="btn btn-apricot" href="/quote">
          Get a free quote
        </Link>
      </div>
    </>
  );
}
