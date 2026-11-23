import type { Metadata } from "next";
import { og, regionLanguages } from "@/lib/site";
import { RegionPage } from "@/components/RegionPage";
import { regions } from "@/data/regions";

const region = regions.find((r) => r.slug === "us")!;

export const metadata: Metadata = {
  title: region.seoTitle,
  description: region.description,
  alternates: { canonical: "/us", languages: regionLanguages },
  openGraph: og("/us", { locale: "en_US" }),
};

export default function Page() {
  return <RegionPage region={region} />;
}
