import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { getLanding } from "@/data/landings";

const page = getLanding("wholesale-custom-boxes");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/wholesale-custom-boxes" },
};

export default function Page() {
  return <LandingPage page={page} />;
}
