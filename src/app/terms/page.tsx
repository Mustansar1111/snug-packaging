import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Sale",
  description: "The terms that apply when you request a quote or order custom packaging from Musa Packaging.",
  alternates: { canonical: "/terms" },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <>
      <PageHero crumb="Terms" title="Terms of sale" />
      <section className="block band">
        {/* TODO: placeholder terms. Have them reviewed by a lawyer before launch, and add Musa's legal company name and address. */}
        <div className="wrap prose">
          <p>[Placeholder: legal company name and registered address]</p>
          <h2>Quotes</h2>
          <p>A quote is free and doesn&apos;t commit you to anything. Each quote shows how long its price is valid. Prices depend on the size, material, finish and quantity you give us; if any of these change, we send a new quote.</p>
          <h2>Proofs and approval</h2>
          <p>We send a digital proof before printing. Please check sizes, spelling, colours and barcodes carefully. Production starts only after you approve the proof, and we print what you approve.</p>
          <h2>Payment</h2>
          <p>Payment terms are shown on your quote and invoice. Production starts once the agreed payment is received.</p>
          <h2>Colour</h2>
          <p>Colours on screen and on a digital proof can look different from printed board. Pantone colours are matched as closely as the board allows, and small variations between print runs are normal.</p>
          <h2>Quantities</h2>
          <p>Print runs can produce slightly more or fewer units than ordered. Any difference within the tolerance shown on your quote is charged or credited at the unit price.</p>
          <h2>Production and delivery</h2>
          <p>Production takes {site.turnaround} after proof approval and payment. Delivery times are estimates.</p>
          <h2>Problems with your order</h2>
          <p>If your order arrives damaged or doesn&apos;t match the approved proof, email {site.email} with photos as soon as you can, and we&apos;ll work with you to put it right. [Placeholder: add Musa&apos;s reprint and refund policy.]</p>
          <h2>Your artwork</h2>
          <p>You confirm that you have the right to use the artwork, logos and text you send us. You keep all rights to your artwork.</p>
          <h2>Contact</h2>
          <p>Questions about these terms: {site.email}</p>
        </div>
      </section>
    </>
  );
}
