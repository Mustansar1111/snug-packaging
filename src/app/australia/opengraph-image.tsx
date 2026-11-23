import { ogCard, ogSize } from "@/lib/ogCard";

export const alt = "Custom boxes for Australian brands";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ kicker: "Australia", title: "Custom boxes for Australian brands", sub: "Quoted in Australian dollars · delivered to AU and NZ" });
}
