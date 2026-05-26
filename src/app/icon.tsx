import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0D0A07",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
          outline: "1.5px solid rgba(196,83,26,0.55)",
        }}
      >
        <span
          style={{
            fontFamily: "sans-serif",
            fontWeight: 900,
            fontSize: 13,
            letterSpacing: "0.04em",
            color: "#EDE5D0",
            lineHeight: 1,
          }}
        >
          518
        </span>
      </div>
    ),
    { ...size }
  );
}
