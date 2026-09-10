import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug } from "@/lib/products";
import ProductDetailClient from "@/components/product-detail-client";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const family = getProductBySlug(slug);
  if (!family) return {};
  return {
    title: family.name,
    description: `${family.name} — ${family.tagline}. PFOA-free, non-toxic hybrid nonstick stainless steel cookware by SNOWCLAD.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const family = getProductBySlug(slug);

  if (!family) notFound();

  return <ProductDetailClient family={family} />;
}
