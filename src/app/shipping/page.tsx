import type { Metadata } from "next";
import { og } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { QuoteSection, RegionsBand } from "@/components/sections";

export const metadata: Metadata = {
  title: "Custom Packaging Shipping: USA, UK, AU & EU",
  description: "Snug Packaging delivers custom printed boxes, bags and labels to the USA, UK, Australia and across Europe. Your quote includes delivery to your door.",
  alternates: { canonical: "/shipping" },
  openGraph: og("/shipping", { defaultImage: true }),
};

export default function ShippingPage() {
  return (
    <>
      <PageHero
        crumb="Shipping"
        title="Custom packaging, shipped to the USA, UK, Australia and Europe."
        lede="Every quote includes delivery to your door. Choose your region for local details, currency and sizing."
      />
      <RegionsBand />
      <QuoteSection />
    </>
  );
}
