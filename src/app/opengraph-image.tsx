import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LOGO_B64 =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA3NS4yOSA1NSI+CiAgPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDMwLjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDIuMS4zIEJ1aWxkIDE4MikgIC0tPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuc3QwIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzAuOTQsMTQuMTFzLjA5LS4wOS4xNS0uMTFjLS44Mi0xLjQ5LTIuNy0xLjU2LTQuMTgtMS43OS0uOTUtLjE0LTEuOTItLjM1LTIuODktLjUtLjMxLS4wNS0uNjMtLjEyLS45NC0uMTUtLjM5LS4wNC0uNzcuMDctMS4xNy4wMS0uMzYtLjA1LS43LS4xNS0xLjA1LS4yMS0uODYtLjE2LTEuNzEtLjMyLTIuNTctLjQ1LTMuMDgtLjQ2LTYuMTctLjg5LTkuMjYtMS4zMy0xLjctLjI0LTMuNC0uNDgtNS4xLS43Mi01LjMyLS43Ni05LjA0LS40OC0xNC4zMy4zNS0xLjUzLjI0LTQuMzcuNDctNS45MS42Ny0xLjk1LjI2LTMuOS41LTUuODQuNzctMS40NS4yLTIuOTMuMzktNC40LjQzLS4zMywwLS44Mi0uMDYtMS4wNy4yLjAxLjAyLjAzLjA1LjA0LjA3LS40MS0uMTMtLjk5LjE4LTEuMzkuMjgtLjc0LjE5LTEuNS4yMS0yLjI2LjI3LS43LjA1LTEuNS4wMi0yLjE3LjE5LS43LjE4LTEuMzIuNjgtMS43NywxLjIzLS4xNC4xNy0uMjUuMzQtLjM0LjUxLS4wMi4wMy0uMDMuMDYtLjA0LjA5LDAsLjAxLDAsLjAyLS4wMi4wM2wtLjAzLjA2cy0uMDEuMDMtLjAyLjA0YzAsMCwwLC4wMiwwLC4wMi0uMTYuNDQtLjE2Ljk0LS4xNywxLjQsMCwuNDYuMTcuOC4xOCwxLjIzLS4wNC4wMi0uMDguMDItLjEyLjA0LS4xNC4wNS41MywzLjU4LjYyLDMuODcuMDguMjQuMjMuNDMuMzEuNjYuMDkuMjYsMCwuNTMsMCwuOC4wMi42NC4yMywxLjI3LjM0LDEuOS4xOSwxLjA5LjM2LDIuMTcuNTYsMy4yNS4wNy4zNi4xMy43NC4xOSwxLjEuMTcuOTYuMzUsMS45MS40NywyLjg4LjA4LjYzLjE1LDEuMjcuMywxLjg5LjA3LjMuMTguNTguMy44My4xMi4yNC4wNS4zNCwwLC42Ni0uMDMuMjIuMDMuNDcuMDcuNjguMTMuNjIuMywxLjIzLjM5LDEuODYuMTMuMDIuMTctLjA3LjE1LS4xOC4wMy4xNi4wNy4zMi4wNi40OC0uMDMsMC0uMDUuMDItLjA4LjAzLS4xMywxLjAzLjQ5LDEuOTYsMS4wOCwyLjc1LS4wMy0uMDctLjA1LS4xOC0uMS0uMjQuMDEuMDEuMDMuMDMuMDQuMDRsLjE1LjE1LjE1LjEzLjAyLjAyLjA4LjA2Yy4yNi4xOS41NC4zMy44My40MmwuMDQtLjExLjEuMDQuMDQuMDJzLjAxLDAsLjAyLDBjLjEyLjA1LjI1LjEuMzcuMTQuMDguNDUsMi4wMy45NCwyLjUxLDEuMTItLjAxLDAtLjA0LDAtLjA1LDAsLjk0LjM1LDEuODMuNjgsMi44MS44OCwxLjM1LjI3LDIuNTMsMS4wOSwzLjgxLDEuNTgsMS4zOC41MywyLjgyLjkxLDQuMTksMS40Ny0uMDYsMC0uMTIsMC0uMTgtLjAyLjUyLjEzLjkzLjQ5LDEuNDMuNjcuNy4yNiwxLjQuNTEsMi4xLjc3Ljc4LjMsMS41NS41OSwyLjMzLjg5LjMuMTIuNjEuMjIuOTIuMzEsMCwwLS4wMi4wMS0uMDEuMDIuNDguMzIsMS4wNS40NiwxLjYuNjMuOTkuMywyLjA3LjU3LDMuMDIuOTYuOTguNCwyLC43MywzLjA3LjQ4LjAzLDAsLjA3LS4wMi4xLS4wMi4wMSwwLC4wMywwLC4wNC0uMDEuMDQtLjAxLjA5LS4wMy4xMy0uMDRsLjI0LS4wOWMuMzMtLjEyLjUzLS4yMS42My0uMjguMTYtLjA2LjMzLS4xMi41LS4xNy41NS0uMTksMS4wOS0uMzQsMS42NS0uNS0uMDUuMDUtLjA4LjExLS4xMy4xNi40NC0uMTUuODktLjMsMS4zMy0uNDUuMzgtLjEzLjY1LS4zMiwxLjAyLS40NC4xMS0uMi43OC0uMjksMS4wNC0uMzcsMi4yOS0uNjksNC41LTEuNjMsNi43OS0yLjM0LjAxLjAyLjAzLjA1LjA1LjA4LDEuMDctLjMxLDIuMTMtLjYyLDMuMTgtLjk5LjU0LS4xOSwxLjA5LS4zNywxLjYtLjY1LjMyLS4xOC42NC0uNDQsMS4wMi0uNDYsMCwuMDIsMCwuMDUsMCwuMDcuMzctLjA1LDIuMzEtLjM2LDIuMzYtLjgxLDAtLjAzLS4wMS0uMDUsMC0uMDguMTUtLjA2LDIuMjItLjg0LDIuMjMtLjc5LDAsMCwuMDQuMS4wNC4xLjcyLS4yNSwxLjQ1LS40OSwyLjE4LS43NC0uMDItLjA0LS4wMi0uMDgtLjAzLS4xMiwxLjIyLS40MSwyLjI2LTEuMTEsMi43NC0yLjM3LjI3LS43Mi4zNi0xLjUzLjUyLTIuMjkuMTctLjg0LjM0LTEuNjcuNTEtMi41MS4wNC0uMi4wOC0uNDEuMTMtLjYxLjUyLTIuNTUuOTgtNS4xLDEuNjItNy42MmwtLjA2LjA4LjM2LTEuNzhjLjEtLjUxLjIxLTEuMDMuMzItMS41NC40MS0xLjk3LjkyLTMuOTUsMS4xNC01Ljk1LjAzLS4yNy4wNC0uNTQuMDMtLjgxLS4wMy0uNzctLjIyLTEuNTEtLjY2LTIuMTlaTTUuNTUsMjIuNzdoMHMuMTMuNzYuMTMuNzZ2LjA1Yy0uMDUtLjI3LS4xLS41NC0uMTQtLjgxWk02LjE3LDI2LjI4cy0uMDItLjA5LS4wMy0uMTNoLS4wMnMtLjAyLS4xMi0uMDItLjEybC4wNy4yM3MwLDAtLjAxLjAyWk02LjkyLDMwLjU1Yy0uMDEtLjA1LS4wMi0uMS0uMDQtLjE1LDAsMCwwLDAsMCwwbC4wNi4yM3MtLjAxLS4wNS0uMDItLjA4Wk02Ljk1LDMwLjd2LjAzczAsMCwwLDBjMC0uMDEsMC0uMDIsMC0uMDNaTTEzLjY1LDQxLjk4cy0uMDIsMC0uMDMsMGgtLjI0cy0uMy0uMjMtLjMtLjIzYy0uMDUtLjA0LS4xNy0uMS0uMzUtLjE4LjM5LjExLjU0LjE3Ljc0LjMuMDYuMDQuMTIuMDcuMjEuMTEsMCwwLS4wMSwwLS4wMiwwWk0xOS4wNywyNi44NWw1LjA0LjA1Yy4wOC42NS0uMDQuOTYtLjUyLDEuMzcuNTgsMS4yMiwzLjQxLDEuMjEsNC40My43MiwxLjI1LS41OSwxLjcyLTIuMjcuNjQtMy4yOC0xLjM5LTEuMy00Ljk2LS41LTYuNzYtLjhsLTEuODItMS44LDEuMDYtOC4yNSw4Ljk4LjA5Yy43Ny0uMzYuOTUtMS4yOSwyLjAyLTEuMDFsLS4wNSw0LjY1LTcuMzctLjA4LS40MiwyLjk3YzEuMDEuMDUsMi4wMy0uMDMsMy4wNC4wMywzLjM1LjIyLDYuMDEsMS44LDUuOTQsNS41NC0uMDksNC45LTQuNzksNi42NC05LjAyLDUuOTEtMi45OC0uNTEtNS4yNC0zLjA1LTUuMTgtNi4xMVpNMjYuMTYsNDEuMDhjLjc4LS4xOS4yNy0uNjIuODQtLjg0bDEuMjEsMS41NmMtMi4wMywxLjMzLTUuMjYsMS4wMS02LjAyLTEuNTgtMS4xMS0zLjgxLDMuMTgtNS43OCw2LjA4LTMuNzFsLTEuMjUsMS41M2MtLjM1LjA3LS4yNy0uNS0uMzgtLjY1LS4xMi0uMTctLjkxLS4yOC0xLjE2LS4yNy0yLjY1LjExLTIuMjUsNC42Ny42NywzLjk2Wk0zMC43NCw0OC41M2wtLjI1LS4yYy4xMi4wNC4yNC4wOS4zNy4xM2wtLjExLjA3Wk0zMi4wOCw0OC45MWMtLjM3LS4xNC0uNzYtLjI4LTEuMTQtLjQzLjIuMDcuMzkuMTQuNTkuMi4yNi4wOC44My4zLjkzLjM1LjAzLjAyLjA3LjAzLjEuMDUtLjE2LS4wNi0uMzItLjEyLS40OC0uMThaTTM0LjA1LDQxLjc4Yy4xNi4zLjU5LjQzLjQ5Ljg2bC0yLjA3LS4wMmMuMjMtLjc3LS4zNC0xLjg2LS42OS0yLjU4LS4xNC0uMjktLjU5LS40Mi0uNDMtLjkyLjg2LjEsMi4xMy4wMywxLjktMS4xNS0uMjItMS4xMS0xLjU1LS43Mi0yLjQtLjhsLS4wNSw0Ljcxcy41NS40MS4zOC43MWwtMi4zMy0uMDJjLS4xMS0uMzcuMy0uNS4zNy0uNzMuMS0uMzMuMTItNS4yLjAyLTUuNDYtLjA3LS4xOC0uNDMtLjMtLjMxLS42NWw0LjA3LjA0Yy4zMywwLDEuMDcuNjMsMS4yOS45Mi44MSwxLjA2LjcyLDIuMjYtLjE2LDMuMjQtLjE4LjItLjU4LjI4LS41OS41Ni4yLjQuMzIuOTEuNTIsMS4yOFpNMzQuNjQsMzMuMjJjLjAzLS4zMy0uMDctLjcxLjA4LTEuMDMuMS0uMjEuOTgtLjg2Ljk4LS45NmwuMTUtMTQuMjdoLTEuMDNjLS40NC0uNDkuOTYtMS45NCwxLjEyLTEuOTRsMy45NC4wNC0uMTcsMTYuMjFjMCwuMjMsMS44NywxLjMxLjk1LDIuMDFsLTYuMDEtLjA2Wk0zOS4zMiw0Mi42OWMuMjctLjY2LjM0LTEuMjMtLjE3LTEuODItLjIzLS4yNy0uOTQtLjQ2LS42My0uOTFoLjQ0cy0uNDMtMS45NC0uNDMtMS45NGwtLjQuOWMtLjE2LjUxLS45NCwyLjk0LS44NSwzLjI1LjA1LjE4LjMuMjUuMjMuNDlsLTIuMDctLjAyLDEuODMtNi4wNS0uMi0uNzgsMi43OC4wMy0uMTguOCwxLjczLDYuMDYtMi4wNy0uMDJaTTQyLjMsNDkuMjR2LS4wM3MuMDEsMCwuMDIsMGMwLDAsLjAyLDAsLjAyLDB2LjAycy0uMDUuMDItLjA1LjAyWk00Ny4yNiwzNy44N2MtLjMuMTYtLjY2LS4zOS0uNzEtLjM5bC0yLjUyLS4wM2MuMDQuNDMtLjE3Ljk4LjE4LDEuMjlsMi4xMy4wMi0uMDIsMS45NGMtLjQuMDktLjUtLjMyLS44NC0uMzktLjQzLS4wOS0xLjAzLjA0LTEuNDgtLjAyLjA1LjQ2LS4wOSwxLjA1LS4wMSwxLjQ4LjA3LjQxLjYxLjUuNS45OGwtMi40Ni0uMDNjLS4xMS0uMzcuMy0uNS4zNy0uNzMuMS0uMzMuMTItNS4yLjAyLTUuNDYtLjA3LS4xOC0uNDMtLjMtLjMxLS42NWw1LjE3LjA2LS4wMiwxLjk0Wk01My43MiwzNy45NGMtLjQuMDktLjUtLjMyLS44NC0uMzktLjM2LS4wNy0uODQuMDMtMS4yMy0uMDJsLS4wNSw0LjU4cy41NS40MS4zOC43MWwtMi4zMy0uMDJjLS4xNi0uMy4zOS0uNjYuNC0uNzFsLjA1LTQuNThjLS44OS0uMjEtMS4zMy4yNS0yLjA3LjM3bC4wMi0xLjk0LDUuNjkuMDYtLjAyLDEuOTRaTTUzLjgxLDMyLjQ4Yy0yLjI4LDEuMTEtNi43MSwxLjA1LTguOTctLjEtMy4zOS0xLjcyLTMuOTUtNy4xNi0uMzktOS4wMXYtLjI1Yy0xLjAzLS41Ny0xLjY4LTIuNC0xLjY0LTMuNTYuMjItNi4zNSwxMS41NC02Ljk3LDEzLjA5LTEuMDUuNDQsMS43LS4wMiwzLjY5LTEuNDksNC43MnYuMjVjMy41NCwxLjk5LDIuODYsNy4zMS0uNTksOVpNNzAuMzgsMjEuMjRzMC0uMDMsMC0uMDRjMC0uMDIsMC0uMDQuMDEtLjA2aDBzLS4wMi4xLS4wMi4xWiIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00OC41MywyNWMtLjc3LjExLTEuOTYuOTEtMi4yMSwxLjY2LTEuMjQsMy42Myw2LjIyLDQuMTYsNi4yNC43NC4wMS0yLTIuMzktMi42NC00LjAzLTIuNFoiLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTIuMjQsMjAuMDRjLjEyLTEuODUtMS45Ny0yLjUtMy41MS0yLjI3LS43MS4xMS0xLjcxLjctMS45NSwxLjQtMS4xMiwzLjI4LDUuMjgsMy42OSw1LjQ2Ljg3WiIvPgo8L3N2Zz4=";

async function loadBebasNeue(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Bebas+Neue",
      { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } }
    ).then((r) => r.text());
    const fontUrl = css.match(/url\((https:\/\/[^)]+)\)/)?.[1];
    if (!fontUrl) return null;
    return fetch(fontUrl).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OgImage() {
  const fontData = await loadBebasNeue();
  const fontFamily = fontData ? "Bebas Neue" : "serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0D0A07",
          display: "flex",
          flexDirection: "column",
          padding: "64px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Atmospheric glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: [
              "radial-gradient(ellipse 65% 80% at 88% 45%, rgba(196,83,26,0.22) 0%, transparent 55%)",
              "radial-gradient(ellipse 45% 55% at 20% 85%, rgba(140,60,10,0.1) 0%, transparent 50%)",
            ].join(", "),
          }}
        />

        {/* Logo — top left */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={LOGO_B64}
          width={118}
          height={86}
          alt="518 Craft Brewing"
          style={{ position: "relative", opacity: 0.92 }}
        />

        {/* Push content to bottom */}
        <div style={{ flex: 1, display: "flex" }} />

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 20,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 28,
              height: 1,
              background: "#C4531A",
              opacity: 0.55,
            }}
          />
          <span
            style={{
              fontFamily,
              fontSize: 15,
              letterSpacing: "0.42em",
              textTransform: "uppercase",
              color: "#C4531A",
            }}
          >
            TROY · NEW YORK · INDEPENDENT BREWERY
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontFamily,
            fontWeight: fontData ? 400 : 900,
            fontSize: 118,
            lineHeight: 0.88,
            letterSpacing: "0.02em",
            color: "#EDE5D0",
            marginBottom: 44,
            position: "relative",
            display: "flex",
            flexWrap: "wrap",
            gap: "0 18px",
          }}
        >
          <span>CRAFTED FOR</span>
          <span style={{ color: "#C4531A" }}>TROY</span>
          <span>NIGHTS.</span>
        </div>

        {/* Bottom rule */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            position: "relative",
          }}
        >
          <div
            style={{ height: 1, flex: 1, background: "rgba(237,229,208,0.08)" }}
          />
          <span
            style={{
              fontFamily,
              fontSize: 13,
              letterSpacing: "0.42em",
              textTransform: "uppercase",
              color: "#5A5048",
            }}
          >
            518 CRAFT BREWING · 200 BROADWAY · TROY, NY
          </span>
          <div
            style={{ height: 1, flex: 1, background: "rgba(237,229,208,0.08)" }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [{ name: "Bebas Neue", data: fontData, style: "normal", weight: 400 }]
        : [],
    }
  );
}
