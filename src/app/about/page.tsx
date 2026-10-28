import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteSection } from "@/components/sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Musa Packaging",
  description: "Musa Packaging makes custom printed boxes, bags and labels for growing brands in the USA, UK, Australia and Europe, from 100 units.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero crumb="About" title="Packaging for brands that care how things arrive." />
      <section className="block band">
        <div className="wrap prose">
          {/* TODO: replace with Musa's own story before launch. */}
          <p>
            Musa Packaging makes custom printed boxes, bags and labels for growing brands. We work with makers, online shops and established
            names in the USA, the UK, Australia and across Europe.
          </p>
          <p>
            You can start from just {site.moq} units, and every order begins with a free digital proof and 3D mockup, so you see your
            packaging before anything is printed. Production takes {site.turnaround} once you approve it.
          </p>
          <h2>What we believe</h2>
          <p>
            Good packaging protects the product, tells your story and gives people a reason to keep the box. We help you choose the right
            board, size and finish, and we keep you updated from quote to delivery.
          </p>
        </div>
      </section>
      <QuoteSection />
    </>
  );
}
