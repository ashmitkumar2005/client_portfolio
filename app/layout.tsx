import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const crysthel = localFont({
  src: "./fonts/Crysthel.otf",
  variable: "--font-crysthel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anshu | Data Analyst",
  description: "Portfolio of Anshu, a Data Analyst based in Bangalore.",
};

import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${crysthel.variable}`}>
      <body className="antialiased bg-black text-white" style={{ cursor: 'none' }}>
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
