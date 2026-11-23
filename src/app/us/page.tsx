import type { Metadata } from "next";
import { RegionPage } from "@/components/RegionPage";
import { regions } from "@/data/regions";

const region = regions.find((r) => r.slug === "us")!;

export const metadata: Metadata = {
  title: region.seoTitle,
  description: region.description,
  alternates: { canonical: "/us" },
};

export default function Page() {
  return <RegionPage region={region} />;
}
