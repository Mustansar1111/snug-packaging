import type { Metadata } from "next";
import { RegionPage } from "@/components/RegionPage";
import { regions } from "@/data/regions";

const region = regions.find((r) => r.slug === "australia")!;

export const metadata: Metadata = {
  title: region.headline,
  description: `${region.intro} From 100 units, with free design help and a 3D proof.`,
  alternates: { canonical: "/australia" },
};

export default function Page() {
  return <RegionPage region={region} />;
}
