import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { QuoteSection } from "@/components/sections";
import { industries } from "@/data/industries";
import { industryPhotoFor } from "@/lib/images";

export const metadata: Metadata = {
  title: "Packaging by Industry",
  description: "Custom packaging for cosmetics, food and bakery, apparel, CBD and candles, subscription boxes and retail. From 100 units, with a free proof.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero crumb="Industries" title="Packaging made for what you sell." lede="Pick your industry to see the styles brands like yours order most, and what we do to make them work." />
      <section className="block band">
        <div className="wrap">
          <ul className="ind-grid" data-reveal-group>
            {industries.map((i) => (
              <li key={i.slug}>
                <Link href={`/industries/${i.slug}`}>
                  {industryPhotoFor(i.slug) && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="ind-photo" src={industryPhotoFor(i.slug)!.srcSm} alt="" loading="lazy" width={480} height={480} />
                  )}
                  <h2>{i.name}</h2>
                  <p>{i.intro}</p>
                  <span>See {i.name.toLowerCase()} packaging →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <QuoteSection />
    </>
  );
}
