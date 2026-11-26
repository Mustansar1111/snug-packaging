import { ImageResponse } from "next/og";
import { LogoSvg } from "./logo";

export const ogSize = { width: 1200, height: 630 };

/** The share card people see when a Snug link is posted on WhatsApp, LinkedIn, Facebook or X. */
export function ogCard({ kicker, title, sub }: { kicker: string; title: string; sub: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#3b1536",
          color: "#fbeef5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex" }}>
          <LogoSvg width={300} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span style={{ fontSize: 26, letterSpacing: 4, color: "#f2a65a", textTransform: "uppercase" }}>{kicker}</span>
          <span style={{ fontSize: title.length > 40 ? 64 : 80, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>{title}</span>
          <span style={{ fontSize: 30, opacity: 0.8 }}>{sub}</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
