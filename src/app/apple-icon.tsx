import { ImageResponse } from "next/og";
import { MarkIcon } from "@/lib/logo";

/** Built once at deploy time (the site is a static export). */
export const dynamic = "force-static";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon for iPhone and iPad: the folded "S" mark on mulberry. */
export default function AppleIcon() {
  return new ImageResponse(<MarkIcon size={180} />, size);
}
