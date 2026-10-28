import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteSection, RegionsBand } from "@/components/sections";

export const metadata: Metadata = {
  title: "Packaging Delivery to the USA, UK, Australia and Europe",
  description: "Musa Packaging delivers custom printed boxes, bags and labels to the USA, UK, Australia and across Europe. Your quote includes delivery to your door.",
  alternates: { canonical: "/shipping" },
};

export default function ShippingPage() {
  return (
    <>
      <PageHero
        crumb="Shipping"
        title="We deliver to four markets."
        lede="Every quote includes delivery to your door. Choose your region for local details, currency and sizing."
      />
      <RegionsBand />
      <QuoteSection />
    </>
  );
}
