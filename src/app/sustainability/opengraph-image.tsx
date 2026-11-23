import { ogCard, ogSize } from "@/lib/ogCard";

export const alt = "Recyclable custom packaging";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ kicker: "Eco-friendly packaging", title: "Recyclable custom packaging", sub: "Kraft, corrugated and plastic-free finishes" });
}
