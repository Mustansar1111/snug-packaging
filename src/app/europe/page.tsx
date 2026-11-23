import type { Metadata } from "next";
import { og, regionLanguages } from "@/lib/site";
import { RegionPage } from "@/components/RegionPage";
import { regions } from "@/data/regions";

const region = regions.find((r) => r.slug === "europe")!;

export const metadata: Metadata = {
  title: region.seoTitle,
  description: region.description,
  alternates: { canonical: "/europe", languages: regionLanguages },
  openGraph: og("/europe", { locale: "en_IE" }),
};

export default function Page() {
  return <RegionPage region={region} />;
}
