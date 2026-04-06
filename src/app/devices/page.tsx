import { deviceProducts, bioelectricProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devices — AgeWell",
  description: "Anti-aging devices including red light therapy, PEMF, microcurrent, and cold exposure. Evidence-rated and honestly reviewed.",
};

export default function DevicesPage() {
  const nonBioelectric = deviceProducts.filter((p) => !p.subcategory);
  const bioelectric = bioelectricProducts;

  return (
    <div>
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">Devices & Technology</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Devices</h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-300">
              From photobiomodulation to cold exposure — devices that interact with your body&apos;s
              energy systems. We rate each by evidence quality and flag where marketing outpaces science.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {nonBioelectric.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white">Light & Temperature</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {nonBioelectric.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}

        {bioelectric.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white">Bioelectric</h2>
            <p className="mt-2 text-zinc-400">
              Devices that interact with the body&apos;s electrical systems. This is frontier territory —
              the science of bioelectricity (Michael Levin, Tufts) is real, but consumer devices are
              a significant step removed from lab research.
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bioelectric.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}

        {/* Bioelectric editorial note */}
        <section className="mt-4">
          <div className="rounded-lg border-l-4 border-amber-400 bg-amber-50 p-5 dark:border-amber-500 dark:bg-amber-950/20">
            <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-300">
              On Bioelectric Devices & &quot;Cell Voltage&quot;
            </h3>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-amber-900/80 dark:text-amber-200/80">
              <p>
                The science of bioelectricity is legitimate and fascinating. Michael Levin&apos;s lab at Tufts
                has shown that voltage gradients guide tissue patterning and regeneration. Mitochondrial
                membrane potential (~-180mV) drives ATP synthesis. These are real, measurable phenomena.
              </p>
              <p>
                However, most consumer &quot;cell voltage&quot; products dramatically oversimplify this science.
                Claims about &quot;charging your cells&quot; or &quot;increasing your voltage&quot; are marketing
                metaphors, not accurate biology. We include PEMF and microcurrent devices because they have
                some peer-reviewed support, but we urge skepticism toward any device claiming to directly
                manipulate cellular voltage for anti-aging.
              </p>
              <p>
                The most evidence-backed way to improve mitochondrial function remains exercise, particularly
                high-intensity interval training (HIIT), which has been shown to reverse age-related decline
                in mitochondrial capacity.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
