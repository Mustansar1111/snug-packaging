import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Faq, QuoteSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Sustainable Packaging Options",
  description: "Recyclable kraft and corrugated board, plastic-free finishes and right-sized boxes. How to make your custom packaging lower-impact.",
  alternates: { canonical: "/sustainability" },
};

// TODO before launch: add any certificates the factory holds (FSC, recycled content). Don't claim one we can't show.
const options = [
  { h: "Paper-based board", p: "Kraft, SBS card and corrugated board are made from paper and can go in paper recycling where it is collected." },
  { h: "Skip the plastic", p: "Choose an uncoated or aqueous-coated finish instead of plastic lamination, and a paper cut-out instead of a film window." },
  { h: "Right-sized boxes", p: "Every box is made to your product's size, so there's less empty space, less filler and lower shipping weight." },
  { h: "Ships flat", p: "Most boxes travel flat-packed, so more fit in each shipment." },
  { h: "Fewer parts", p: "A printed inside can replace tissue and inserts, and a printed box can replace a separate label." },
  { h: "Recycled content", p: "Ask us for board with recycled content and we'll tell you what's available for your style and size." },
];

const faqs = [
  { q: "Is kraft packaging recyclable?", a: "Plain kraft board is paper, so it can go in paper recycling where that is collected. Plastic lamination or film windows make it harder to recycle." },
  { q: "Do you offer certified board?", a: "Ask us in the quote form. We'll tell you which certified or recycled-content boards are available for your order before you approve the quote." },
  { q: "Are your inks eco-friendly?", a: "Tell us your requirements and we'll confirm the ink and coating options for your order." },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        crumb="Sustainability"
        title="Lower-impact packaging, without the greenwash."
        lede="Small choices add up: the board, the finish and the size of the box. Here's what you can choose, and we'll tell you honestly what each option does."
      />
      <section className="block band">
        <div className="wrap">
          <ul className="rules" data-reveal-group>
            {options.map((o, i) => (
              <li key={o.h}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <h2>{o.h}</h2>
                <p>{o.p}</p>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: 32, color: "var(--muted)" }}>
            Compare boards on{" "}
            <Link href="/materials-and-finishes" style={{ color: "var(--plum)", fontWeight: 600 }}>
              materials and finishes →
            </Link>
          </p>
        </div>
      </section>
      <QuoteSection title="Ask for an eco-friendly quote." />
      <Faq items={faqs} title="Sustainability questions" />
    </>
  );
}
