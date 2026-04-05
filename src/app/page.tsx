import Link from "next/link";
import { essentialsProducts, advancedProducts, deviceProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

import VitalityFlowHero from "@/components/VitalityFlowHero";

export default function Home() {
  const featured = [
    essentialsProducts[0], // NMN
    essentialsProducts[1], // Omega-3
    essentialsProducts[3], // Creatine
    deviceProducts[0],     // Red light
  ];

  return (
    <div>
      <VitalityFlowHero />

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          Our Approach
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {[
            {
              step: "1",
              title: "Measure",
              desc: "Start with a biological age test to know your baseline. Epigenetic clocks give you an objective number to optimize against.",
            },
            {
              step: "2",
              title: "Research",
              desc: "Every product links to peer-reviewed studies. Our evidence ratings — Strong, Moderate, Emerging — tell you exactly how solid the science is.",
            },
            {
              step: "3",
              title: "Optimize",
              desc: "Choose products that match your evidence comfort level. Essentials for proven basics. Advanced for those willing to be early adopters.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                {item.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audience segments */}
      <section className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            Choose Your Path
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Link
              href="/essentials"
              className="group rounded-xl border border-zinc-200 bg-white p-8 transition-all hover:border-emerald-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="text-xl font-bold text-zinc-900 group-hover:text-emerald-600 dark:text-zinc-100">
                Essentials
              </h3>
              <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400">For health-conscious adults</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                Well-evidenced supplements and practices with strong or moderate research support.
                Vitamin D, omega-3s, creatine, collagen — the foundations of science-backed aging well.
              </p>
              <p className="mt-4 text-sm font-medium text-emerald-600 group-hover:text-emerald-500">
                {essentialsProducts.length} products →
              </p>
            </Link>
            <Link
              href="/advanced"
              className="group rounded-xl border border-zinc-200 bg-white p-8 transition-all hover:border-violet-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="text-xl font-bold text-zinc-900 group-hover:text-violet-600 dark:text-zinc-100">
                Advanced
              </h3>
              <p className="mt-1 text-sm text-violet-600 dark:text-violet-400">For biohacker early adopters</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                Emerging science with compelling mechanisms but smaller human trials.
                Senolytics, mitophagy activators, bioelectric devices — frontier longevity science.
              </p>
              <p className="mt-4 text-sm font-medium text-violet-600 group-hover:text-violet-500">
                {advancedProducts.length} products →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          Featured Products
        </h2>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          Our top picks across categories — each backed by peer-reviewed research.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Evidence methodology */}
      <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            Our Evidence Ratings
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                Strong Evidence
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Multiple RCTs or large meta-analyses in humans. Consistent, reproducible results across independent research groups.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                Moderate Evidence
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                At least one peer-reviewed human study (RCT or well-designed observational). Mechanism is well-understood. Awaiting larger or longer trials.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                Emerging Evidence
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Compelling mechanism with peer-reviewed support, but human evidence is limited to small trials or preliminary data. We include these with full transparency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
