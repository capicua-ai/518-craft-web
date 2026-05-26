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
          borderRadius: "50%",
          border: "1px solid rgba(196,83,26,0.5)",
        }}
      >
        <span
          style={{
            fontFamily: "sans-serif",
            fontWeight: 900,
            fontSize: 10,
            letterSpacing: "0.05em",
            color: "#C4531A",
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
