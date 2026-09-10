import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getAllProducts } from "@/lib/products";

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
  const navItems = getAllProducts().map((p) => ({ slug: p.slug, name: p.name }));

  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="bg-snow text-ink font-sans antialiased">
        <Header navItems={navItems} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
