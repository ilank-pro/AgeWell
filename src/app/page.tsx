import Link from "next/link";
import { essentialsProducts, advancedProducts, deviceProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import EvidenceBadge from "@/components/EvidenceBadge";
import { BarChart3, ChevronRight } from "lucide-react";

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
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <h2 className="text-center text-3xl font-black tracking-tight text-white sm:text-4xl">
          The Optimization <span className="text-emerald-400">Protocol</span>
        </h2>
        <div className="mt-16 grid gap-12 sm:grid-cols-3">
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
            <div key={item.step} className="text-center group">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-xl font-black text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all glass">
                {item.step}
              </div>
              <h3 className="mt-6 text-xl font-bold text-white uppercase tracking-tight">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400 max-w-xs mx-auto">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audience segments */}
      <section className="border-y border-white/5 bg-zinc-900/20">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <h2 className="text-center text-3xl font-black tracking-tight text-white sm:text-4xl">
            Biological <span className="text-emerald-400">Pathways</span>
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <Link
              href="/essentials"
              className="group rounded-2xl border border-white/10 bg-zinc-950/50 p-10 transition-all hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] glass"
            >
              <h3 className="text-2xl font-black uppercase tracking-tighter text-white group-hover:text-emerald-400 transition-colors">
                The Essentials
              </h3>
              <p className="mt-2 text-sm font-bold text-emerald-400 uppercase tracking-widest">Scientific Foundation</p>
              <p className="mt-6 text-base leading-relaxed text-zinc-400">
                Well-evidenced supplements and practices with strong or moderate research support.
                Vitamin D, omega-3s, creatine, collagen — the foundations of science-backed aging well.
              </p>
              <p className="mt-8 text-sm font-black text-emerald-400 uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                {essentialsProducts.length} Compounds Documented →
              </p>
            </Link>
            <Link
              href="/advanced"
              className="group rounded-2xl border border-white/10 bg-zinc-950/50 p-10 transition-all hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] glass"
            >
              <h3 className="text-2xl font-black uppercase tracking-tighter text-white group-hover:text-violet-400 transition-colors">
                The Advanced
              </h3>
              <p className="mt-2 text-sm font-bold text-violet-400 uppercase tracking-widest">Frontier Science</p>
              <p className="mt-6 text-base leading-relaxed text-zinc-400">
                Emerging science with compelling mechanisms but smaller human trials.
                Senolytics, mitophagy activators, bioelectric devices — frontier longevity science.
              </p>
              <p className="mt-8 text-sm font-black text-violet-400 uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                {advancedProducts.length} Frontier Protocols →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Theme 4: The Evidence Ledger Grid */}
      <section className="relative overflow-hidden bg-black py-24 sm:py-32">
        {/* Background Visualization Layer */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/images/evidence-ledger.png" 
            alt="Evidence Ledger Visualization" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center text-center mb-16">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-6 glass">
                <BarChart3 className="h-3 w-3" />
                Real-Time Research Aggregate
             </div>
             <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
               The Evidence <span className="text-emerald-400 text-shadow-glow">Ledger</span>
             </h2>
             <p className="mt-6 text-lg text-zinc-400 max-w-2xl">
               Our live database of bioactive molecules, sequenced against 14,000+ 
               peer-reviewed clinical outcomes.
             </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-20 flex justify-center">
             <Link 
               href="/essentials" 
               className="group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-black transition-all hover:bg-emerald-400 hover:scale-105"
             >
                Explore Full Database
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
             </Link>
          </div>
        </div>

        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-10" 
             style={{ backgroundImage: "linear-gradient(to right, #3f3f46 1px, transparent 1px), linear-gradient(to bottom, #3f3f46 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </section>

      {/* Evidence methodology (Simplified/Refined) */}
      <section className="bg-zinc-950 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
             {[
               { level: "Strong", desc: "Multiple RCTs or large meta-analyses in humans. Consistent, reproducible results across independent groups." },
               { level: "Moderate", desc: "At least one peer-reviewed human study (RCT). Mechanism understood. Awaiting larger trials." },
               { level: "Emerging", desc: "Compelling mechanism with preliminary trials. We include these with full research transparency." },
             ].map((item) => (
               <div key={item.level} className="relative">
                  <div className="mb-4">
                     <EvidenceBadge level={item.level as any} />
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {item.desc}
                  </p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
