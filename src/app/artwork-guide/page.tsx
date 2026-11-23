import type { Metadata } from "next";
import { og } from "@/lib/site";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Faq, QuoteSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Packaging Artwork Guide",
  description: "How to prepare artwork for custom printed boxes: file types, bleed, CMYK and Pantone color, resolution and fonts. Our designers check every file for free.",
  alternates: { canonical: "/artwork-guide" },
  openGraph: og("/artwork-guide", { defaultImage: true }),
};

const rules = [
  { h: "Start from our dieline", p: "A dieline is a flat drawing of your box with its cut and fold lines. Ask us for the one for your size, and place your artwork on it so logos land on the right panel." },
  { h: "Send vector files", p: "AI, PDF or EPS keep logos and text sharp at any size. Photos are fine as part of a PDF." },
  { h: "Images at 300 dpi", p: "Photos need 300 dpi at the size they print. A web image pulled from a site will look blurry on a box." },
  { h: "Add bleed", p: "Extend background color and images 1/8 in (3 mm) past every cut line, so no white edge shows after cutting." },
  { h: "Keep text inside the safe area", p: "Keep text and logos at least 1/8 in (3 mm) inside the cut and fold lines so nothing gets trimmed or lost in a fold." },
  { h: "CMYK or Pantone", p: "Set your file in CMYK for full-color print. For an exact brand color, give us the Pantone code and we'll match it." },
  { h: "Outline your fonts", p: "Convert text to outlines, or send the font files, so your words print in the font you chose." },
  { h: "Mark foil, spot UV and emboss", p: "Put each special finish on its own layer, in solid black, and name the layer after the finish." },
];

const faqs = [
  { q: "I don't have artwork. Can you design it?", a: "Yes. Send us your logo and a few words on the look you want. Our designers set up the artwork for free and send a 3D mockup." },
  { q: "Will you check my file before printing?", a: "Yes. Our designers check every file for bleed, resolution and color, and tell you about any problem before your proof." },
  { q: "Can I print on the inside of the box?", a: "Yes. Add the inside artwork on the inside dieline we send, and we'll print both sides." },
];

export default function ArtworkGuidePage() {
  return (
    <>
      <PageHero
        crumb="Artwork guide"
        title="Packaging artwork guide: get your files print-ready."
        lede="Eight simple rules for artwork that prints sharp and lines up on the box. Our designers check every file for free before your proof."
      />
      <section className="block band">
        <div className="wrap">
          <ol className="rules" data-reveal-group>
            {rules.map((r, i) => (
              <li key={r.h}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <h2>{r.h}</h2>
                <p>{r.p}</p>
              </li>
            ))}
          </ol>
          <p style={{ marginTop: 32, color: "var(--muted)" }}>
            No artwork yet?{" "}
            <Link href="/free-mockup" style={{ color: "var(--plum)", fontWeight: 600 }}>
              Ask for a free 3D mockup →
            </Link>
          </p>
        </div>
      </section>
      <QuoteSection title="Artwork ready? Get your price." />
      <Faq items={faqs} title="Artwork questions" />
    </>
  );
}
