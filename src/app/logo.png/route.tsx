import { ImageResponse } from "next/og";
import { LogoSvg, logoColors } from "@/lib/logo";

/** Square logo for Google (Organization schema needs a PNG of at least 112 px). */
export function GET() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: logoColors.bg }}>
        <LogoSvg width={440} />
      </div>
    ),
    { width: 512, height: 512 },
  );
}
