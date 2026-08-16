import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, DynaPuff, Redressed } from "next/font/google";
import "./globals.css";
import { image } from "framer-motion/client";
import Profile from "@/public/Profileimage.png";

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

const redressed = Redressed({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-redressed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio-Ayush",
  description: "Aspiring Software Engineer | Portfolio Website",
  icons: {
    icon: Profile.src,
    shortcut: Profile.src,
    apple: Profile.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${dynaPuff.variable} ${redressed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
