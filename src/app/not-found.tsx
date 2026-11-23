import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <PageHero crumb="Not found" title="We couldn't find that page." lede="It may have moved. Try our packaging styles or ask us for a quote.">
      <div className="ctas">
        <Link className="btn btn-apricot" href="/packaging">
          Browse packaging
        </Link>
        <Link className="btn btn-ghost" href="/quote">
          Get a quote
        </Link>
      </div>
    </PageHero>
  );
}
