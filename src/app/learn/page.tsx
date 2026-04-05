import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn — AgeWell",
  description: "Educational articles on the science of aging: NAD+ pathways, mitochondrial function, epigenetic clocks, and bioelectric signaling.",
};

const articles = [
  {
    title: "Why We Age: The Hallmarks of Aging",
    description:
      "An overview of the 12 hallmarks of aging — from genomic instability to stem cell exhaustion — and which ones are targetable with current interventions.",
    category: "Fundamentals",
    readTime: "12 min",
  },
  {
    title: "NAD+ and Sirtuins: The Sinclair Thesis",
    description:
      "David Sinclair's information theory of aging posits that aging is caused by loss of epigenetic information, and NAD+-dependent sirtuins are the repair mechanism. What does the evidence actually support?",
    category: "Deep Dive",
    readTime: "15 min",
  },
  {
    title: "Mitochondria, ATP, and the Energy Theory of Aging",
    description:
      "How mitochondrial dysfunction drives aging, the role of membrane potential in ATP production, and what you can actually do about it (spoiler: exercise is #1).",
    category: "Deep Dive",
    readTime: "14 min",
  },
  {
    title: "Epigenetic Clocks: Measuring Biological Age",
    description:
      "From Horvath to DunedinPACE — how DNA methylation clocks work, what they measure, their limitations, and how to interpret your results.",
    category: "Fundamentals",
    readTime: "10 min",
  },
  {
    title: "Bioelectric Medicine: Levin, Voltage, and Regeneration",
    description:
      "Michael Levin's groundbreaking research on bioelectric signaling, what it means for aging, and why consumer 'cell voltage' products aren't the same thing.",
    category: "Frontier Science",
    readTime: "16 min",
  },
  {
    title: "Senolytics: Clearing Zombie Cells",
    description:
      "Senescent cells accumulate with age and poison their neighbors. Senolytic drugs like dasatinib+quercetin and fisetin aim to clear them. Where does the evidence stand?",
    category: "Deep Dive",
    readTime: "13 min",
  },
  {
    title: "Photobiomodulation: How Red Light Affects Mitochondria",
    description:
      "The mechanism behind red/near-infrared light therapy — cytochrome c oxidase, nitric oxide dissociation, and downstream ATP effects. Plus: how to evaluate devices.",
    category: "Deep Dive",
    readTime: "11 min",
  },
  {
    title: "The Supplement Industry: Reading Labels and Spotting Hype",
    description:
      "Third-party testing, bioavailability, proprietary blends, and the difference between 'clinically studied ingredients' and actual clinical evidence for a product.",
    category: "Practical Guide",
    readTime: "8 min",
  },
];

export default function LearnPage() {
  return (
    <div>
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">Education</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Learn</h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-300">
              Understand the science behind anti-aging interventions. We explain the mechanisms,
              cite the studies, and flag where the evidence is strong, emerging, or overhyped.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.title}
              className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                  {article.category}
                </span>
                <span className="text-xs text-zinc-400">{article.readTime}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {article.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                {article.description}
              </p>
              <p className="mt-4 text-sm text-zinc-400">Coming soon</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
