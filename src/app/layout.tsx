import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SNOWCLAD — Hybrid Nonstick Stainless Steel Cookware",
    template: "%s · SNOWCLAD",
  },
  description:
    "SNOWCLAD hybrid nonstick stainless steel cookware. PFOA-free, non-toxic, induction compatible, oven & dishwasher safe.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="bg-snow text-ink font-sans antialiased">{children}</body>
    </html>
  );
}
