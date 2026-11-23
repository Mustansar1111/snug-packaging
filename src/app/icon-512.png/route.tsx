import { ImageResponse } from "next/og";

/** 512 px icon for the web app manifest (Android home screen and install prompts). */
export function GET() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#3b1536", color: "#fbeef5", fontSize: 160, fontWeight: 800, letterSpacing: -6 }}>
        snug
      </div>
    ),
    { width: 512, height: 512 },
  );
}
