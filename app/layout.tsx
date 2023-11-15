import type { Metadata } from "next";
import { Inter, Roboto_Serif } from "next/font/google";
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
        {children}
      </body>
    </html>
  );
}
