import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "ThinkHome | Kompletní IT pod jednou střechou",
  description: "Zjednodušujeme IT tak, aby se firmy nenechaly nachytat a nemusely řešit několik dodavatelů zároveň.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${manrope.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
