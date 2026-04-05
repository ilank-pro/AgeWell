import { advancedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced — AgeWell",
  description: "Frontier anti-aging science for biohacker early adopters. Emerging research on senolytics, mitophagy, and bioelectric interventions.",
};

export default function AdvancedPage() {
  const supplements = advancedProducts.filter((p) => p.category === "supplements");
  const food = advancedProducts.filter((p) => p.category === "food");
  const devices = advancedProducts.filter((p) => p.category === "devices");

  return (
    <div>
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-violet-400">For Early Adopters</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Advanced</h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-300">
              Frontier longevity science with compelling mechanisms but smaller human trials.
              These products are for informed biohackers comfortable with emerging evidence.
              Read the Skeptic&apos;s Corner on each product page.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {supplements.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Supplements</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {supplements.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}

        {food.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Functional Foods</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {food.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}

        {devices.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Devices</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {devices.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
