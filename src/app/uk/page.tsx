import type { Metadata } from "next";
import { og, regionLanguages } from "@/lib/site";
import { RegionPage } from "@/components/RegionPage";
import { regions } from "@/data/regions";

const region = regions.find((r) => r.slug === "uk")!;

export const metadata: Metadata = {
  title: region.seoTitle,
  description: region.description,
  alternates: { canonical: "/uk", languages: regionLanguages },
  openGraph: og("/uk", { locale: "en_GB" }),
};

export default function Page() {
  return <RegionPage region={region} />;
}
