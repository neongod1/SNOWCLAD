"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProductImage from "@/components/product-image";
import {
  getAmazonUrl,
  getCommonFeatures,
  formatPrice,
  variantGallery,
} from "@/lib/products";
import type { ProductFamily } from "@/lib/products";

export default function ProductDetailClient({
  family,
}: {
  family: ProductFamily;
}) {
  const [index, setIndex] = useState(0);
  const [activeImg, setActiveImg] = useState(0);

  // 支持 /products/[slug]#ASIN 直达对应变体（首页卡片跳转用）
  useEffect(() => {
    const asin = window.location.hash.replace("#", "");
    if (!asin) return;
    const i = family.variants.findIndex((v) => v.asin === asin);
    if (i >= 0) setIndex(i);
  }, [family]);

  const variant = family.variants[index];
  const gallery = variantGallery(family, variant);
  const features = getCommonFeatures();

  function selectVariant(i: number) {
    setIndex(i);
    setActiveImg(0);
  }

  return (
    <div className="container-page py-10">
      {/* 面包屑 */}
      <nav className="mb-6 text-sm text-mist" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-arctic">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{family.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* ── 画廊 ── */}
        <div>
          <div className="overflow-hidden rounded-2xl border border-frost bg-white">
            <ProductImage
              src={gallery[activeImg]}
              alt={`${family.name} — ${variant.name}`}
              className="aspect-square w-full object-cover"
              placeholderText={family.name}
            />
          </div>

          {/* 缩略图（缺失的自动隐藏） */}
          {gallery.length > 1 && (
            <div className="mt-3 flex flex-wrap gap-3">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={`overflow-hidden rounded-xl border bg-white transition ${
                    i === activeImg
                      ? "border-arctic ring-2 ring-arctic/30"
                      : "border-frost hover:border-arctic"
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <ProductImage
                    src={src}
                    alt=""
                    className="h-20 w-20 object-cover"
                    hideOnError
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── 信息列 ── */}
        <div className="flex flex-col">
          <h1 className="font-display text-3xl font-semibold text-primary sm:text-4xl">
            {family.name}
          </h1>
          {/* 完整标题（缺省时回退到简短 tagline） */}
          <p className="mt-2 leading-relaxed text-mist">
            {variant.title ?? family.tagline}
          </p>

          {/* 变体选择器 */}
          {family.variants.length > 1 && (
            <div className="mt-6">
              <p className="mb-2 text-sm font-medium text-ink">
                Option: <span className="text-mist">{variant.name}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {family.variants.map((v, i) => (
                  <button
                    key={v.asin}
                    type="button"
                    onClick={() => selectVariant(i)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      i === index
                        ? "border-primary bg-primary text-white"
                        : "border-frost bg-white text-ink hover:border-arctic"
                    }`}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 价格 */}
          <p className="mt-6 font-display text-3xl font-semibold text-arctic">
            {formatPrice(variant.price)}
          </p>

          {/* Features */}
          <ul className="mt-6 space-y-2">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-ink">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-arctic"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {f}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href={getAmazonUrl(variant.asin)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent mt-8 w-full sm:w-auto"
          >
            Shop on Amazon
          </a>
          <p className="mt-3 text-xs text-mist">
            Opens on Amazon · ASIN {variant.asin}
          </p>
        </div>
      </div>
    </div>
  );
}
