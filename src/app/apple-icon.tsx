import { ImageResponse } from "next/og";
import { MarkIcon } from "@/lib/logo";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon for iPhone and iPad: the folded "S" mark on mulberry. */
export default function AppleIcon() {
  return new ImageResponse(<MarkIcon size={180} />, size);
}
