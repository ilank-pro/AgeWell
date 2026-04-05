import { essentialsProducts, advancedProducts, deviceProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import LongevityLabHero from "@/components/LongevityLabHero";

export default function HomeV2() {
  const featured = [
    essentialsProducts[0], // NMN
    essentialsProducts[1], // Omega-3
    essentialsProducts[3], // Creatine
    deviceProducts[0],     // Red light
  ];

  return (
    <div>
      <LongevityLabHero />

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          Protocol Methodology
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {[
            {
              step: "01",
              title: "Clinical Level Baselines",
              desc: "Start with an epigenetic clock to establish a molecular age baseline. Measure, don't guess.",
            },
            {
              step: "02",
              title: "Scientific Verification",
              desc: "Our protocol links to peer-reviewed studies. Every recommendation is verified against human outcomes.",
            },
            {
              step: "03",
              title: "Personalized Regimen",
              desc: "Optimized dosage and timing protocols tailored to your baseline markers.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center group">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10 text-lg font-bold text-teal-600 transition-colors group-hover:bg-teal-500 group-hover:text-white dark:bg-teal-900/30 dark:text-teal-400">
                {item.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            Research Tiers
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Link
              href="/essentials"
              className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-teal-500 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="text-xl font-bold text-zinc-900 group-hover:text-teal-600 dark:text-zinc-100 dark:group-hover:text-teal-400">
                Foundational
              </h3>
              <p className="mt-1 text-sm text-teal-600 dark:text-teal-400">High Confidence Evidence</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                Well-evidenced supplements with decades of safety and efficacy data.
              </p>
              <p className="mt-4 text-sm font-medium text-teal-600 group-hover:text-teal-500">
                {essentialsProducts.length} verified paths →
              </p>
            </Link>
            <Link
              href="/advanced"
              className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-sky-500 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="text-xl font-bold text-zinc-900 group-hover:text-sky-600 dark:text-zinc-100 dark:group-hover:text-sky-400">
                Frontier
              </h3>
              <p className="mt-1 text-sm text-sky-600 dark:text-sky-400">Emerging Human Research</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                Promising anti-aging interventions currently in Phase II/III clinical trials.
              </p>
              <p className="mt-4 text-sm font-medium text-sky-600 group-hover:text-sky-500">
                {advancedProducts.length} frontier molecules →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          Core Supplement Stack
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
