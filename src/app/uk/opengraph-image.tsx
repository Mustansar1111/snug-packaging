import { ogCard, ogSize } from "@/lib/ogCard";

export const alt = "Custom boxes for UK brands";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ kicker: "United Kingdom", title: "Custom boxes for UK brands", sub: "Quoted in pounds · delivered across the UK" });
}
