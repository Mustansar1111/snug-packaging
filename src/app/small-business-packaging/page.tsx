import type { Metadata } from "next";
import { og } from "@/lib/site";
import { LandingPage } from "@/components/LandingPage";
import { getLanding } from "@/data/landings";

const page = getLanding("small-business-packaging");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/small-business-packaging" },
  openGraph: og("/small-business-packaging"),
};

export default function Page() {
  return <LandingPage page={page} />;
}
