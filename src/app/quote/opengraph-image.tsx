import { ogCard, ogSize } from "@/lib/ogCard";

export const alt = "Get a price for your custom boxes";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ kicker: "Free quote", title: "Get a price for your custom boxes", sub: "Three short steps · no account needed" });
}
