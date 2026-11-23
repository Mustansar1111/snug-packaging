import { ogCard, ogSize } from "@/lib/ogCard";

export const alt = "Snug Packaging: custom boxes and packaging with your logo";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    kicker: "USA · UK · Australia · Europe",
    title: "Custom boxes & packaging with your logo",
    sub: "From 100 units. Free design help and a free proof.",
  });
}
