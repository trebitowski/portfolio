import type { Metadata } from "next";
import { Inter, Roboto_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Serif({
  weight: "400",
  style: "normal",
  variable: "--font-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tyler Trebitowski",
  description:
    "Experienced Fullstack Developer offering strategic leadership and innovation, contributing to the success of both startups and established organizations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.variable} overscroll-none`}>
        <svg
          className="pointer-events-none fixed isolate opacity-30 mix-blend-soft-light"
          width="100%"
          height="100%"
        >
          <filter id="bg-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.83"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#bg-grain)"></rect>
        </svg>
        <div
          role="presentation"
          className="-z-10 absolute flex min-h-screen top-0 w-full bg-cover bg-[url('/background.jpg')]"
        >
          <div className="bg-linear-to-br from-gray-600/95 to-gray-900/95 absolute inset-0 backdrop-grayscale" />
          <div className="bg-linear-to-br from-emerald-600/30 to-emerald-900/30 absolute inset-0 backdrop-grayscale" />
          <div className="z-10 absolute right-0 left-0 bottom-0 bg-linear-to-t from-gray-900 h-3/4"></div>
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
