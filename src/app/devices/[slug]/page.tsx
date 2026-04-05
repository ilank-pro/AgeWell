import { products, deviceProducts } from "@/data/products";
import ProductPage from "@/components/ProductPage";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return deviceProducts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const product = products.find((p) => p.slug === slug && p.category === "devices");
    if (!product) return { title: "Not Found" };
    return {
      title: `${product.name} — AgeWell`,
      description: product.tagline,
    };
  });
}

export default async function DeviceProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug && p.category === "devices");
  if (!product) notFound();
  return <ProductPage product={product} />;
}
