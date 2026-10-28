import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Faq, QuoteSection } from "@/components/sections";
import { generalFaqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Packaging Quote",
  description: "Tell us your packaging style, size and quantity in three short steps and get a free quote by email. From 100 units, delivered to the USA, UK, Australia and Europe.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <>
      <PageHero crumb="Get a quote" title="Get a free packaging quote." lede="Three short steps, no account and no payment. A packaging specialist replies by email with your price and options." />
      <QuoteSection title="Tell us what you need." />
      <Faq items={generalFaqs} />
    </>
  );
}
