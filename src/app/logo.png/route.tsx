import { ImageResponse } from "next/og";

/** Square logo for Google (Organization schema needs a PNG of at least 112 px). */
export function GET() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#3b1536", color: "#fbeef5", fontSize: 150, fontWeight: 800, letterSpacing: -6 }}>
        snug
      </div>
    ),
    { width: 512, height: 512 },
  );
}
