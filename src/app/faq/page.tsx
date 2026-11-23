import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Faq, QuoteSection } from "@/components/sections";
import { generalFaqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom Packaging FAQs: MOQ, Proofs, Delivery",
  description: "Answers about minimum orders, quotes, artwork, proofs, materials, production times and delivery to the USA, UK, Australia and Europe.",
  alternates: { canonical: "/faq" },
};

const more = [
  { q: "How do I get a price?", a: `Fill in the three-step quote form with your style, size and quantity. A packaging specialist emails your price ${site.quoteReply}, ${site.quoteReplyDays}.` },
  { q: "Can I order different sizes or designs in one order?", a: "Yes. List each size, design and quantity in the quote form and we'll price them together." },
  { q: "What sizes can you make?", a: "Every box is made to your inside dimensions, in inches, centimeters or millimeters. If you're unsure, tell us what you're packing and we'll suggest a size." },
  { q: "What file types do you accept for artwork?", a: "AI, PDF and EPS files are best. Our artwork guide explains bleed, color and resolution." },
  { q: "Will I see my box before you print?", a: "Yes. You get a free digital proof, and a 3D mockup on request, before anything goes to press. Nothing is printed until you approve it." },
  { q: "Can you match my brand color?", a: "Yes. Give us your Pantone code for an exact match, or we print in CMYK for full-color designs." },
  { q: "Which materials do you use?", a: "SBS card, kraft board, corrugated board, rigid greyboard, and films for pouches and labels. See materials and finishes for the full list." },
  { q: "Do you offer eco-friendly packaging?", a: "Yes. Kraft and corrugated board are paper-based and widely recyclable, and we can leave off plastic lamination. See our sustainability page." },
  { q: "Can you print on the inside of the box?", a: "Yes. Send artwork for the inside and we'll print both sides." },
  { q: "Do you send boxes flat?", a: "Yes. Most boxes ship flat to save space and delivery cost, and fold together in seconds. Rigid boxes ship assembled." },
];

export default function FaqPage() {
  return (
    <>
      <PageHero crumb="FAQ" title="Custom packaging FAQs." lede="Everything buyers usually ask before ordering custom packaging. Can't find yours? Ask us in the quote form.">
        <div className="ctas">
          <Link className="btn btn-apricot" href="/quote">
            Get a free quote <span aria-hidden="true">→</span>
          </Link>
        </div>
      </PageHero>
      <Faq items={[...generalFaqs, ...more]} title="Ordering, artwork and delivery." />
      <QuoteSection title="Still have a question? Ask it here." />
    </>
  );
}
