import { ogCard, ogSize } from "@/lib/ogCard";

export const alt = "Custom boxes for US brands";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ kicker: "United States", title: "Custom boxes for US brands", sub: "Quoted in dollars · delivered across the USA" });
}
