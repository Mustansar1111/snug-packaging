import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reviews } from "@/components/proof";
import { Faq, QuoteSection } from "@/components/sections";
import { generalFaqs, site, og } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Custom Box Quote, No Account Needed",
  description: "Get a free quote for custom boxes in three short steps. Tell us the style, size and quantity. From 100 units, delivered to the USA, UK, AU and EU.",
  alternates: { canonical: "/quote" },
  openGraph: og("/quote"),
};

export default function QuotePage() {
  return (
    <>
      <PageHero crumb="Get a quote" title="Get a free quote for your custom boxes." lede={`Three short steps, no account and no payment. A packaging specialist replies by email with your price and options ${site.quoteReply}, ${site.quoteReplyDays}.`} />
      <QuoteSection title="Tell us what you need." />
      <Reviews />
      <Faq items={generalFaqs} />
    </>
  );
}
