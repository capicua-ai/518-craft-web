import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0D0A07",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px 72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Atmospheric glow — mirrors the hero background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 70% at 80% 40%, rgba(196,83,26,0.28) 0%, transparent 55%), radial-gradient(ellipse 40% 50% at 60% 70%, rgba(140,60,10,0.18) 0%, transparent 50%)",
          }}
        />

        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: 14,
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            color: "#C4531A",
            marginBottom: 16,
            position: "relative",
          }}
        >
          Troy · New York · 518
        </p>

        {/* Headline */}
        <p
          style={{
            fontFamily: "sans-serif",
            fontWeight: 900,
            fontSize: 96,
            lineHeight: 0.88,
            letterSpacing: "-0.01em",
            color: "#EDE5D0",
            marginBottom: 32,
            position: "relative",
          }}
        >
          CRAFTED FOR{" "}
          <span style={{ color: "#C4531A" }}>TROY</span>{" "}
          NIGHTS.
        </p>

        {/* Bottom rule */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            position: "relative",
          }}
        >
          <div style={{ height: 1, flex: 1, background: "rgba(46,36,25,1)" }} />
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: 12,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#7A6E62",
            }}
          >
            518 Craft Brewery
          </p>
          <div style={{ height: 1, flex: 1, background: "rgba(46,36,25,1)" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
