"use client";

import { useState } from "react";
import Link from "next/link";
import SnowcladLogo from "@/components/logo";
import { BRAND } from "@/lib/site";

export interface NavItem {
  slug: string;
  name: string;
}

export default function Header({ navItems }: { navItems: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-frost bg-snow/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" aria-label={`${BRAND.name} home`} onClick={() => setOpen(false)}>
          <SnowcladLogo className="h-7 w-auto text-primary sm:h-8" />
        </Link>

        {/* 桌面导航 */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Product categories">
          {navItems.map((item) => (
            <Link
              key={item.slug}
              href={`/products/${item.slug}`}
              className="text-sm font-medium text-ink transition-colors hover:text-arctic"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link href="/#products" className="btn btn-accent hidden sm:inline-flex">
            Shop Now
          </Link>

          {/* 移动端汉堡按钮 */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {open && (
        <nav
          className="border-t border-frost bg-snow lg:hidden"
          aria-label="Mobile menu"
        >
          <div className="container-page flex flex-col py-3">
            {navItems.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="border-b border-frost py-3 text-base font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/#products"
              className="btn btn-accent mt-4 w-full"
              onClick={() => setOpen(false)}
            >
              Shop Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
