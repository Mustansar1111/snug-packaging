import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteSection } from "@/components/sections";
import { Offices } from "@/components/Offices";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Snug Packaging",
  description: "Contact Snug Packaging about custom boxes, bags and labels. Email sales@snugpackaging.com, call or WhatsApp +1 (786) 885-8250, or send a quote request. Offices in Bradford, UK and Airmont, New York.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title="Talk to a packaging specialist."
        lede="The quickest way to a price is the quote form below. For anything else, email, call or WhatsApp us."
      >
        <div className="ctas">
          {site.whatsapp && (
            <a className="btn btn-apricot" href={whatsappHref("Hi Snug Packaging, I'd like a quote for custom packaging.")} rel="noopener">
              Chat on WhatsApp
            </a>
          )}
          <a className="btn btn-ghost" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </PageHero>
      <section className="block band">
        <div className="wrap">
          <Offices variant="cards" />
        </div>
      </section>
      <QuoteSection />
    </>
  );
}
