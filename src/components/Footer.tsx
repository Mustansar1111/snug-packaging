import Link from "next/link";
import { featuredCategories, site } from "@/lib/site";
import { regions } from "@/data/regions";

export function Footer() {
  return (
    <>
      <footer className="site-foot band">
        <div className="wrap">
          <div>
            <Link className="logo" href="/">
              <b>musa</b>
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
            <h4>Company</h4>
            <ul>
              <li><Link href="/how-it-works">How it works</Link></li>
              <li><Link href="/samples">Free samples</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <h4>Regions</h4>
            <ul>
              {regions.map((r) => (
                <li key={r.slug}>
                  <Link href={`/${r.slug}`}>{r.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="legal">© Musa Packaging</p>
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
