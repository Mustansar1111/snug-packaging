import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon for iPhone and iPad, in the brand colors. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#3b1536", color: "#fbeef5", fontSize: 58, fontWeight: 800, letterSpacing: -2 }}>
        snug
      </div>
    ),
    size,
  );
}
