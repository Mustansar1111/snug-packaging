import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Faq, JsonLd, QuoteSection } from "@/components/sections";
import { Offices } from "@/components/Offices";
import { site, whatsappHref, og } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Snug Packaging for a Box Quote",
  description:
    "Email sales@snugpackaging.com, call or WhatsApp +1 (786) 885-8250 about custom boxes. Offices in Bradford, UK and Airmont, New York. Quotes are free.",
  alternates: { canonical: "/contact" },
  openGraph: og("/contact", { defaultImage: true }),
};

const checklist = [
  ["What the box is for", "The product, how many items go in each box, and whether it sells in shops, ships by post, or both."],
  ["Size", "Inside length, width and height in inches, centimeters or millimeters. Don't know? Send the product's size and we'll work it out."],
  ["Quantity", "How many boxes per design. You can ask for two or three quantities to compare the price per box."],
  ["Look and feel", "Board, color, finish and any extras like a window or insert. A photo of packaging you like helps a lot."],
  ["Artwork", "Your logo or finished design if you have one. If not, our designers can lay it out for free."],
  ["Delivery", "The country and city it ships to, and the date you need it by."],
];

const faqs = [
  { q: "What is the fastest way to get a price?", a: `Fill in the quote form on this page. It asks for everything we need, and a packaging specialist replies with a price ${site.quoteReply}, ${site.quoteReplyDays}.` },
  { q: "Can I talk to someone before I send a quote?", a: `Yes. Message us on WhatsApp or call ${site.phone} with any question, even if you're not sure what box you need yet.` },
  { q: "Do I need artwork ready before contacting you?", a: "No. Many customers start with just a logo. We help with the layout and send a 3D mockup before anything is printed." },
  { q: "Is a quote free?", a: "Yes. Quotes, design help and the 3D mockup are free, and you don't pay anything until you approve the proof." },
  { q: "Where do you deliver?", a: "To the USA, UK, Australia and across Europe. Your quote includes delivery to your address. See [shipping](/shipping) for more." },
];

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
      <section className="block band" style={{ paddingTop: 0 }}>
        <div className="wrap guide-grid">
          <div className="guide-side">
            <p className="eyebrow">Before you write</p>
            <h2 className="h2">What should I include in a packaging quote request?</h2>
            <p className="answer" style={{ color: "var(--muted)", marginTop: 14 }}>
              Tell us the product, the box size, the quantity, the look you want, your artwork and where it ships. With those six details
              we can price your order in one reply instead of a long email thread.
            </p>
          </div>
          <div className="guide-body">
            {checklist.map(([h, p], i) => (
              <article key={h}>
                <h3>
                  {i + 1}. {h}
                </h3>
                <p>{p}</p>
              </article>
            ))}
            <article>
              <h3>Not sure where to start?</h3>
              <p>
                Read <Link href="/blog/how-to-order-custom-packaging-first-product-run">how to order custom packaging for your first product run</Link>
                , or see <Link href="/how-it-works">how it works</Link> from quote to delivery. If you only need to see your design on a box
                first, ask for a <Link href="/free-mockup">free 3D mockup</Link>.
              </p>
            </article>
          </div>
        </div>
      </section>
      <QuoteSection />
      <Faq items={faqs} title="Contact questions" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Snug Packaging",
          url: `${site.url}/contact`,
          about: { "@id": `${site.url}/#org` },
          mainEntity: {
            "@type": "Organization",
            "@id": `${site.url}/#org`,
            name: site.name,
            email: site.email,
            telephone: site.phone,
            contactPoint: [{ "@type": "ContactPoint", contactType: "sales", email: site.email, telephone: site.phone, availableLanguage: "en" }],
            address: site.offices.map((o) => ({
              "@type": "PostalAddress",
              streetAddress: o.street,
              addressLocality: o.city,
              ...(o.region ? { addressRegion: o.region } : {}),
              postalCode: o.postcode,
              addressCountry: o.code,
            })),
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: "Contact", item: `${site.url}/contact` },
          ],
        }}
      />
    </>
  );
}
