import Link from "next/link";
import EvidenceBadge from "@/components/EvidenceBadge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protocols — AgeWell",
  description: "Curated supplement stacks and routines for longevity, from beginner essentials to advanced mitochondrial optimization.",
};

interface Protocol {
  name: string;
  tier: "Essentials" | "Advanced";
  description: string;
  rationale: string;
  products: { name: string; dosage: string; slug: string; section: string }[];
  monthlyEstimate: string;
  caveat: string;
}

const protocols: Protocol[] = [
  {
    name: "Beginner Longevity Stack",
    tier: "Essentials",
    description:
      "The foundational stack for anyone starting their longevity journey. These are the highest-evidence, lowest-risk supplements that address the most common deficiencies and aging pathways.",
    rationale:
      "Covers the basics: fill common nutrient gaps (D, Mg, omega-3), support mitochondrial energy (creatine, CoQ10), and reduce systemic inflammation. All have Strong or Moderate evidence ratings.",
    products: [
      { name: "Vitamin D3 + K2", dosage: "2,000–5,000 IU D3 + 100mcg K2 daily", slug: "vitamin-d3-k2", section: "essentials" },
      { name: "Omega-3 (EPA/DHA)", dosage: "2g combined EPA/DHA daily", slug: "omega-3", section: "essentials" },
      { name: "Magnesium Glycinate", dosage: "300mg elemental Mg before bed", slug: "magnesium", section: "essentials" },
      { name: "Creatine Monohydrate", dosage: "5g daily", slug: "creatine", section: "essentials" },
    ],
    monthlyEstimate: "$40–70/month",
    caveat:
      "This stack is intentionally conservative. Test your vitamin D blood levels before supplementing above 2,000 IU. If you eat fatty fish 3x/week, you may not need supplemental omega-3.",
  },
  {
    name: "Mitochondrial Optimization",
    tier: "Advanced",
    description:
      "Targeted at improving mitochondrial function — the cellular powerhouses whose decline is central to aging. Combines ATP production support, mitophagy (clearing damaged mitochondria), and biogenesis (growing new ones).",
    rationale:
      "Three-pronged approach: (1) support existing mitochondrial function (CoQ10, creatine), (2) clear damaged mitochondria (Urolithin A), (3) stimulate new mitochondrial growth (PQQ). Red light therapy adds a non-supplement modality targeting cytochrome c oxidase.",
    products: [
      { name: "CoQ10 / Ubiquinol", dosage: "200mg ubiquinol daily with fat", slug: "coq10", section: "essentials" },
      { name: "Creatine Monohydrate", dosage: "5g daily", slug: "creatine", section: "essentials" },
      { name: "Urolithin A (Mitopure)", dosage: "500mg daily", slug: "urolithin-a", section: "advanced" },
      { name: "PQQ", dosage: "20mg daily", slug: "pqq", section: "advanced" },
      { name: "Red Light Therapy", dosage: "10–15 min, 4x/week", slug: "red-light-therapy", section: "devices" },
    ],
    monthlyEstimate: "$120–200/month (plus one-time device cost ~$300–1000)",
    caveat:
      "This is a more speculative stack. CoQ10 and creatine have strong evidence; urolithin A has moderate evidence from industry-funded trials; PQQ's human data is limited. The combined effect of this stack has never been studied — we're extrapolating from individual product data.",
  },
  {
    name: "The Sinclair-Inspired Stack",
    tier: "Advanced",
    description:
      "Based on what David Sinclair has publicly stated he takes (from his book 'Lifespan' and various interviews). We present this for informational purposes with appropriate skepticism about conflicts of interest.",
    rationale:
      "Sinclair's protocol centers on the NAD+/sirtuin axis (NMN + resveratrol) combined with metabolic optimization (metformin, which we don't list as it's prescription-only). We include what's available OTC and meets our evidence threshold.",
    products: [
      { name: "NMN", dosage: "1g daily, morning", slug: "nmn", section: "essentials" },
      { name: "Vitamin D3", dosage: "4,000 IU daily", slug: "vitamin-d3-k2", section: "essentials" },
      { name: "Omega-3", dosage: "2g EPA/DHA daily", slug: "omega-3", section: "essentials" },
      { name: "Alpha-Lipoic Acid", dosage: "300mg daily", slug: "alpha-lipoic-acid", section: "advanced" },
      { name: "CoQ10", dosage: "200mg daily", slug: "coq10", section: "essentials" },
    ],
    monthlyEstimate: "$100–180/month",
    caveat:
      "Important context: Sinclair has financial interests in NMN through Tally Health and Metro Biotech. His resveratrol advocacy (from Sirtris Pharma, sold to GSK for $720M, then shuttered) is widely considered a cautionary tale. We've omitted resveratrol from this stack because human evidence for it is weak. Sinclair also takes metformin (prescription) and reports doing intermittent fasting — both of which may contribute more to his results than the supplements.",
  },
  {
    name: "Cellular Defense & Autophagy",
    tier: "Advanced",
    description:
      "Focused on activating the body's cellular cleanup mechanisms: autophagy (recycling damaged proteins and organelles) and senolytic clearance (removing zombie cells).",
    rationale:
      "Autophagy declines with age, allowing cellular debris to accumulate. This stack combines autophagy inducers (spermidine), senolytic agents (fisetin), and Nrf2 activators (sulforaphane) to support cellular quality control.",
    products: [
      { name: "Spermidine", dosage: "2mg daily", slug: "spermidine", section: "advanced" },
      { name: "Fisetin", dosage: "500mg for 2 days/month (senolytic pulse)", slug: "fisetin", section: "advanced" },
      { name: "Sulforaphane", dosage: "20mg daily (or broccoli sprouts)", slug: "sulforaphane", section: "advanced" },
      { name: "High-Polyphenol EVOO", dosage: "2 tbsp daily", slug: "olive-oil", section: "essentials" },
    ],
    monthlyEstimate: "$80–130/month",
    caveat:
      "This is the most speculative stack. Spermidine's human longevity evidence is observational. Fisetin's senolytic protocol is based on mouse studies — the human dose is extrapolated. Sulforaphane's anti-aging evidence is mostly mechanistic. None of these have been studied in combination. Consider this experimental.",
  },
];

export default function ProtocolsPage() {
  return (
    <div>
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">Curated Stacks</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Protocols</h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-300">
              Pre-built supplement stacks organized by goal. Each protocol explains the rationale,
              lists exact products and dosages, and includes honest caveats about evidence limitations.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 space-y-12">
        {protocols.map((protocol) => (
          <section
            key={protocol.name}
            className="rounded-xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{protocol.name}</h2>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                protocol.tier === "Essentials"
                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                  : "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400"
              }`}>
                {protocol.tier}
              </span>
            </div>

            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{protocol.description}</p>

            <div className="mt-4 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">Rationale</p>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{protocol.rationale}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
                Products & Dosages
              </h3>
              <div className="space-y-2">
                {protocol.products.map((p) => (
                  <div key={p.slug} className="flex items-center justify-between rounded-lg border border-zinc-100 bg-zinc-50/50 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-800/50">
                    <Link
                      href={`/${p.section}/${p.slug}`}
                      className="font-medium text-zinc-900 hover:text-emerald-600 dark:text-zinc-100 dark:hover:text-emerald-400"
                    >
                      {p.name}
                    </Link>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">{p.dosage}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Estimated cost: {protocol.monthlyEstimate}
              </p>
            </div>

            <div className="mt-6 rounded-lg border-l-4 border-amber-400 bg-amber-50 p-4 dark:border-amber-500 dark:bg-amber-950/20">
              <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">Caveats</p>
              <p className="mt-1 text-sm leading-relaxed text-amber-900/80 dark:text-amber-200/80">{protocol.caveat}</p>
            </div>
          </section>
        ))}

        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Important Notes on Protocols</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
            <li>These stacks have NOT been studied as combinations — we&apos;re combining individually-studied products.</li>
            <li>Start with one product at a time so you can identify what works (or causes side effects) for you.</li>
            <li>The most impactful longevity interventions are free: exercise, sleep, stress management, and diet quality.</li>
            <li>Consult a healthcare provider, especially if you take medications.</li>
            <li>Test before and after — consider a biological age test to track whether your protocol is working.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
