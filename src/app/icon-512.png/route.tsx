import { ImageResponse } from "next/og";
import { MarkIcon } from "@/lib/logo";

/** Built once at deploy time (the site is a static export). */
export const dynamic = "force-static";

/** 512 px icon for the web app manifest (Android home screen and install prompts). */
export function GET() {
  return new ImageResponse(<MarkIcon size={512} />, { width: 512, height: 512 });
}
