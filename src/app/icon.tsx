import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const font = await readFile(
    path.join(process.cwd(), "public/fonts/BebasNeue-Regular.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          background: "#0D0A07",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
        }}
      >
        <span
          style={{
            fontFamily: "Bebas Neue",
            fontSize: 40,
            color: "#F2E8D5",
            lineHeight: 1,
            letterSpacing: "0.02em",
          }}
        >
          518
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Bebas Neue",
          data: font,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
