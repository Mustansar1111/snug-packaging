import { ogCard, ogSize } from "@/lib/ogCard";

export const alt = "Custom packaging for small businesses";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ kicker: "Small business", title: "Custom packaging for small businesses", sub: "From 100 boxes · free design help" });
}
