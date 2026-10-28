import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteSection, SamplesBand } from "@/components/sections";

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
        lede="Our sample kit includes our most popular boards and finishes, from kraft and corrugated to soft-touch and foil, so you can choose with confidence."
      />
      <SamplesBand />
      <QuoteSection title="Already know what you need?" />
    </>
  );
}
