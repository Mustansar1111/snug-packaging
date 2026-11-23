import type { Metadata } from "next";
import { og } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { MockupBand, Process, QuoteSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Free 3D Packaging Mockup",
  description: "Send your logo and get a free 3D mockup of your custom box before you order. No payment and no account needed.",
  alternates: { canonical: "/free-mockup" },
  openGraph: og("/free-mockup"),
};

export default function FreeMockupPage() {
  return (
    <>
      <PageHero
        crumb="Free 3D mockup"
        title="Free 3D mockup of your custom box."
        lede="Send us your logo and tell us the style you like. Our designers put it on the box and send you a 3D mockup, free, so you can see it and share it before you spend anything."
      />
      <MockupBand />
      <Process />
      <QuoteSection title="Ready for a price too?" />
    </>
  );
}
