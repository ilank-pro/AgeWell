import { products, essentialsProducts } from "@/data/products";
import ProductPage from "@/components/ProductPage";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return essentialsProducts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const product = products.find((p) => p.slug === slug && p.tier === "Essentials");
    if (!product) return { title: "Not Found" };
    return {
      title: `${product.name} — AgeWell`,
      description: product.tagline,
    };
  });
}

export default async function EssentialsProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug && p.tier === "Essentials");
  if (!product) notFound();
  return <ProductPage product={product} />;
}
