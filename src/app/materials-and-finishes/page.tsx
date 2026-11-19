import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Finishes } from "@/components/proof";
import { MockupBand, QuoteSection } from "@/components/sections";
import { materials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Packaging Materials and Finishes",
  description: "Compare SBS card, kraft, corrugated and rigid board, plus finishes like soft-touch, foil, spot UV and embossing, for custom printed packaging.",
  alternates: { canonical: "/materials-and-finishes" },
};

const boards = [
  { sw: "sbs", name: "SBS card", spec: "14–24pt (about 350–600 gsm)", good: "Retail, cosmetic and tuck boxes", note: "Smooth and white, so colours print sharp and bright.", key: "card" },
  { sw: "kraft", name: "Kraft board", spec: "16–24pt, brown or white", good: "Food, candles, soap and eco brands", note: "A natural paper look that customers read as eco-friendly.", key: "kraft" },
  { sw: "flute", name: "Corrugated", spec: "E, B or F flute, single or double wall", good: "Mailers and shipping boxes", note: "A fluted middle layer that protects products in the post.", key: "corrugated" },
  { sw: "rigid", name: "Rigid greyboard", spec: "1200–1500 gsm, wrapped in printed paper", good: "Luxury, gift and jewellery boxes", note: "Thick and sturdy. The box doesn't fold flat and feels premium in the hand.", key: "rigid" },
  { sw: "film", name: "Film & laminates", spec: "Metallised, clear or kraft-laminated", good: "Mylar pouches, coffee and snack bags", note: "Barrier layers keep out air, light and moisture.", key: "film" },
];

export default function MaterialsPage() {
  return (
    <>
      <PageHero
        crumb="Materials and finishes"
        title="Choose the board, then the finish."
        lede="The board decides how strong your box is and how it feels. The finish decides how it looks. Here's how to choose both."
      />
      <section className="block band">
        <div className="wrap">
          <div className="head">
            <div>
              <p className="eyebrow">Boards</p>
              <h2>Five materials cover almost every box.</h2>
            </div>
            <p>Not sure? Tell us what you&apos;re packing and how it ships, and we&apos;ll recommend one in your quote.</p>
          </div>
          <ul className="boards" data-reveal-group>
            {boards.map((b) => (
              <li key={b.name}>
                <span className={`sw sw-${b.sw}`} aria-hidden="true" />
                <div>
                  <h3>{b.name}</h3>
                  <p>{b.note}</p>
                  <dl>
                    <dt>Spec</dt><dd>{b.spec}</dd>
                    <dt>Best for</dt><dd>{b.good}</dd>
                  </dl>
                  {materials.some((m) => m.key === b.key) && <Link href={`/packaging#${b.key}`}>See all {b.name} packaging →</Link>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Finishes />
      <MockupBand />
      <QuoteSection />
    </>
  );
}
