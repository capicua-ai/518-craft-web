import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://518-craft-web.vercel.app"),
  title: "518 Craft — Brewed in Troy, NY",
  description: "Small batch craft beer from Troy, New York. Think NY Drink NY.",
  openGraph: {
    title: "518 Craft — Brewed in Troy, NY",
    description: "Small batch craft beer from Troy, New York. Think NY Drink NY.",
    siteName: "518 Craft Brewing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "518 Craft — Brewed in Troy, NY",
    description: "Small batch craft beer from Troy, New York. Think NY Drink NY.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
