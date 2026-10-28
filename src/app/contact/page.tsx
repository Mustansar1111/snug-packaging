import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteSection } from "@/components/sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Musa Packaging",
  description: "Contact Musa Packaging about custom boxes, bags and labels. Send a quote request or email our packaging specialists.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero crumb="Contact" title="Talk to a packaging specialist." lede="The quickest way to a price is the quote form below. For anything else, email us.">
        <div className="facts">
          <div>
            <strong>{site.email}</strong>email
          </div>
          {site.phone && (
            <div>
              <strong>{site.phone}</strong>phone
            </div>
          )}
        </div>
      </PageHero>
      <QuoteSection />
    </>
  );
}
