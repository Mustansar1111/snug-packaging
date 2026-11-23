import type { Metadata } from "next";
import { og } from "@/lib/site";
import { LandingPage } from "@/components/LandingPage";
import { getLanding } from "@/data/landings";

const page = getLanding("wholesale-custom-boxes");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/wholesale-custom-boxes" },
  openGraph: og("/wholesale-custom-boxes"),
};

export default function Page() {
  return <LandingPage page={page} />;
}
