import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Motion } from "@/components/Motion";
import { JsonLd } from "@/components/sections";
import { areaServed, site } from "@/lib/site";

const display = Bricolage_Grotesque({ variable: "--font-display", subsets: ["latin"], weight: ["400", "600", "800"] });
const body = Instrument_Sans({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = IBM_Plex_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Custom Boxes & Packaging from 100 Units | Snug Packaging",
    template: "%s | Snug Packaging",
  },
  description: site.description,
  openGraph: { siteName: site.name, type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#3b1536",
};

const sameAs = [...new Set([site.social.instagram, site.social.facebook, ...site.profiles].filter(Boolean))];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header phone={site.phone} email={site.email} social={site.social} />
        <main id="main">{children}</main>
        <Footer />
        <Motion />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${site.url}/#org`,
            name: site.name,
            url: site.url,
            description: site.description,
            logo: { "@type": "ImageObject", url: `${site.url}/logo.png`, width: 512, height: 512 },
            email: site.email,
            ...(site.phone ? { telephone: site.phone } : {}),
            legalName: site.legalName,
            address: site.offices.map((o) => ({
              "@type": "PostalAddress",
              streetAddress: o.street,
              addressLocality: o.city,
              ...(o.region ? { addressRegion: o.region } : {}),
              postalCode: o.postcode,
              addressCountry: o.code,
            })),
            areaServed,
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "sales",
                email: site.email,
                ...(site.phone ? { telephone: site.phone } : {}),
                areaServed: ["US", "GB", "AU", "IE", "DE", "FR", "NL", "ES", "IT"],
                availableLanguage: ["English"],
              },
            ],
            ...(sameAs.length ? { sameAs } : {}),
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: site.name,
            url: site.url,
            "@id": `${site.url}/#website`,
            inLanguage: "en",
            publisher: { "@id": `${site.url}/#org` },
          }}
        />
      </body>
    </html>
  );
}
