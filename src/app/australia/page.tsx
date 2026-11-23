import type { Metadata } from "next";
import { og, regionLanguages } from "@/lib/site";
import { RegionPage } from "@/components/RegionPage";
import { regions } from "@/data/regions";

const region = regions.find((r) => r.slug === "australia")!;

export const metadata: Metadata = {
  title: region.seoTitle,
  description: region.description,
  alternates: { canonical: "/australia", languages: regionLanguages },
  openGraph: og("/australia", { locale: "en_AU" }),
};

export default function Page() {
  return <RegionPage region={region} />;
}
