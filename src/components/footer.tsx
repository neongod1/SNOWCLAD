import Link from "next/link";
import SnowcladLogo from "@/components/logo";
import { BRAND } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-deep text-white">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-3">
          <SnowcladLogo className="h-7 w-auto text-white" />
          <p className="max-w-sm text-sm text-white/70">{BRAND.taglineSub}</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Footer">
          <Link href="/#products" className="text-white/80 transition-colors hover:text-white">
            Shop All
          </Link>
          <a
            href="https://www.amazon.com/s?k=SNOWCLAD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 transition-colors hover:text-white"
          >
            Amazon Store
          </a>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-white/50">
          © {year} {BRAND.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
