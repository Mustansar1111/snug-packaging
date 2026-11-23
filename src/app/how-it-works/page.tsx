import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Faq, Process, QuoteSection } from "@/components/sections";
import { generalFaqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "How Ordering Custom Boxes Works",
  description: "From quote to doorstep in four steps: tell us the size, approve a free proof, we print and finish, and deliver to the USA, UK, Australia or Europe.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorks() {
  return (
    <>
      <PageHero crumb="How it works" title="How ordering custom boxes works, in four steps." lede="You never pay for anything you haven't seen. Every order starts with a free digital proof and a 3D mockup." />
      <Process />
      <QuoteSection />
      <Faq items={generalFaqs} />
    </>
  );
}
