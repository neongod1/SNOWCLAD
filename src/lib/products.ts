import productsData from "@/data/products.json";

export interface ProductVariant {
  name: string;
  asin: string;
  price: number;
  imagesDir: string;
}

export interface ProductFamily {
  slug: string;
  name: string;
  tagline: string;
  variants: ProductVariant[];
}

interface ProductsData {
  commonFeatures: string[];
  products: ProductFamily[];
}

const data = productsData as unknown as ProductsData;

export function getAllProducts(): ProductFamily[] {
  return data.products;
}

export function getProductBySlug(slug: string): ProductFamily | undefined {
  return data.products.find((p) => p.slug === slug);
}

export function getCommonFeatures(): string[] {
  return data.commonFeatures;
}

export function getAmazonUrl(asin: string): string {
  return `https://www.amazon.com/dp/${asin}?th=1`;
}

export function variantImageDir(family: ProductFamily, variant: ProductVariant): string {
  return `/images/products/${family.slug}/${variant.imagesDir}`;
}

export function variantMainImage(family: ProductFamily, variant: ProductVariant): string {
  return `${variantImageDir(family, variant)}/image_1.jpg`;
}

/** 画廊：主图 + 潜在 image_2~image_6；缺失的由前端 onError 自动隐藏 */
export function variantGallery(family: ProductFamily, variant: ProductVariant): string[] {
  const dir = variantImageDir(family, variant);
  return [1, 2, 3, 4, 5, 6].map((n) => `${dir}/image_${n}.jpg`);
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function familyMinPrice(family: ProductFamily): number {
  return Math.min(...family.variants.map((v) => v.price));
}
