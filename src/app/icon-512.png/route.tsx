import { ImageResponse } from "next/og";
import { MarkIcon } from "@/lib/logo";

/** 512 px icon for the web app manifest (Android home screen and install prompts). */
export function GET() {
  return new ImageResponse(<MarkIcon size={512} />, { width: 512, height: 512 });
}
