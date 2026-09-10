import Link from "next/link";
import ProductImage from "@/components/product-image";
import { formatPrice, variantMainImage } from "@/lib/products";
import type { ProductFamily, ProductVariant } from "@/lib/products";

export default function ProductCard({
  family,
  variant,
}: {
  family: ProductFamily;
  variant: ProductVariant;
}) {
  return (
    <Link
      href={`/products/${family.slug}#${variant.asin}`}
      className="group overflow-hidden rounded-2xl border border-frost bg-white transition-shadow hover:shadow-lg"
    >
      <div className="overflow-hidden">
        <ProductImage
          src={variantMainImage(family, variant)}
          alt={`${family.name} — ${variant.name}`}
          className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
          placeholderText={family.name}
        />
      </div>
      <div className="p-4">
        <p className="text-[11px] font-medium uppercase tracking-widest text-mist">
          {family.name}
        </p>
        <h3 className="mt-1 font-display text-base font-semibold leading-snug text-ink">
          {variant.name}
        </h3>
        <p className="mt-2 font-display text-lg font-semibold text-arctic">
          {formatPrice(variant.price)}
        </p>
      </div>
    </Link>
  );
}
