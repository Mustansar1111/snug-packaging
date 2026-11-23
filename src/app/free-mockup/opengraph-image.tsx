import { ogCard, ogSize } from "@/lib/ogCard";

export const alt = "See your box before you order";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ kicker: "Free 3D mockup", title: "See your box before you order", sub: "Send your logo · no payment needed" });
}
