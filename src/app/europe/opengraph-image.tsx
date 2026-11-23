import { ogCard, ogSize } from "@/lib/ogCard";

export const alt = "Custom boxes for European brands";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ kicker: "Europe", title: "Custom boxes for European brands", sub: "Quoted in euros · delivered across Europe" });
}
