import { ogCard, ogSize } from "@/lib/ogCard";

export const alt = "Custom boxes with your logo";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ kicker: "Custom boxes with logo", title: "Custom boxes with your logo", sub: "Made to your size from 100 units · free 3D mockup" });
}
