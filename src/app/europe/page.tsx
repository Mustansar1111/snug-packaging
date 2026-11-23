import type { Metadata } from "next";
import { RegionPage } from "@/components/RegionPage";
import { regions } from "@/data/regions";

const region = regions.find((r) => r.slug === "europe")!;

export const metadata: Metadata = {
  title: region.seoTitle,
  description: region.description,
  alternates: { canonical: "/europe" },
};

export default function Page() {
  return <RegionPage region={region} />;
}
