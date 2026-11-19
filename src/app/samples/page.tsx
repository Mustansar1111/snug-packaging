import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { KitContents, QuoteSection, SamplesBand } from "@/components/sections";

export const metadata: Metadata = {
  title: "Free Packaging Sample Kit",
  description: "Order a free sample kit of our most popular boards and finishes, so you can feel the quality before you order custom packaging.",
  alternates: { canonical: "/samples" },
};

export default function SamplesPage() {
  return (
    <>
      <PageHero
        crumb="Free samples"
        title="Feel the quality before you order."
        lede="Our free kit holds 15 pieces: our four main boards, six finishes, two mini boxes, a pouch, a label sheet and a colour card, so you can choose with confidence."
      />
      <KitContents />
      <SamplesBand />
      <QuoteSection title="Already know what you need?" />
    </>
  );
}
