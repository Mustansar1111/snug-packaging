import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site, og } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How the Snug Packaging website uses cookies: no advertising or tracking cookies, and what will change if we ever add analytics.",
  alternates: { canonical: "/cookies" },
  openGraph: og("/cookies", { defaultImage: true }),
  robots: { index: false },
};

export default function CookiesPage() {
  return (
    <>
      <PageHero crumb="Cookies" title="Cookie policy" />
      <section className="block band">
        {/* TODO: update this page, and add a consent banner for UK and EU visitors, if analytics or ad pixels are added. */}
        <div className="wrap prose">
          <h2>What cookies are</h2>
          <p>Cookies are small files a website saves in your browser, to remember things like your settings or to measure visits.</p>
          <h2>What we use</h2>
          <p>This site does not use advertising or tracking cookies. The forms send your details to us directly and don&apos;t set cookies.</p>
          <h2>If this changes</h2>
          <p>If we add analytics or advertising tools, we will update this page first and, where the law requires it, ask for your consent before setting any non-essential cookie.</p>
          <h2>Questions</h2>
          <p>Email {site.email}.</p>
        </div>
      </section>
    </>
  );
}
