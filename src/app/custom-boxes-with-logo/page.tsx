import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { getLanding } from "@/data/landings";

const page = getLanding("custom-boxes-with-logo");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/custom-boxes-with-logo" },
};

export default function Page() {
  return <LandingPage page={page} />;
}
