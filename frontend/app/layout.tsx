import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, DynaPuff, Momo_Signature, Redressed } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const dynaPuff = DynaPuff({
  subsets: ["latin"],
  variable: "--font-dyna-puff",
  display: "swap",
});

const momoSignature = Momo_Signature({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-momo-signature",
  display: "swap",
});
const redressed = Redressed({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-redressed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio-Ayush",
  description: "Aspiring Software Engineer | Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${dynaPuff.variable} ${momoSignature.variable} ${redressed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
