import Link from "next/link";
import ProductCard from "@/components/product-card";
import { BRAND } from "@/lib/site";
import { getAllProducts } from "@/lib/products";

export default function HomePage() {
  const products = getAllProducts();

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-frost-tint to-snow">
        <div className="container-page flex flex-col items-center py-20 text-center sm:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-ice">
            {BRAND.name} · Hybrid Nonstick
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-6xl">
            {BRAND.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-mist">{BRAND.taglineSub}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/#products" className="btn btn-accent">
              Shop Now
            </Link>
            <a
              href="https://www.amazon.com/s?k=SNOWCLAD"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Shop on Amazon
            </a>
          </div>
        </div>
      </section>

      {/* ── 分类入口 ── */}
      <section className="container-page py-16">
        <h2 className="mb-8 font-display text-2xl font-semibold text-primary sm:text-3xl">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((family) => (
            <Link
              key={family.slug}
              href={`/products/${family.slug}`}
              className="group flex flex-col gap-2 rounded-2xl border border-frost bg-white p-5 transition-shadow hover:shadow-md"
            >
              <span className="font-display text-lg font-semibold text-ink group-hover:text-arctic">
                {family.name}
              </span>
              <span className="text-sm text-mist">{family.tagline}</span>
              <span className="mt-auto pt-2 text-xs font-medium uppercase tracking-widest text-ice">
                {family.variants.length} {family.variants.length > 1 ? "Options" : "Option"}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 产品网格（按族分组） ── */}
      <section id="products" className="scroll-mt-20 pb-20">
        <div className="container-page">
          {products.map((family) => (
            <div key={family.slug} className="mb-16 last:mb-0">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {family.name}
                  </h2>
                  <p className="mt-1 text-mist">{family.tagline}</p>
                </div>
                <Link
                  href={`/products/${family.slug}`}
                  className="hidden shrink-0 text-sm font-semibold text-arctic hover:underline sm:block"
                >
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
                {family.variants.map((variant) => (
                  <ProductCard key={variant.asin} family={family} variant={variant} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
