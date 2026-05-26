import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/lib/constants";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: `${BRAND.NAME} - Login`,
  description:
    "Secure login page for Bugslayer. Manage your team and operations efficiently.",
  generator: "Next.js",
  applicationName: BRAND.NAME,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-dm-sans: ${dmSans.variable};
}
        `}</style>
      </head>
      <body className={dmSans.variable}>{children}</body>
    </html>
  );
}
