import { ageTestProviders } from "@/data/biologicalAge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biological Age Testing — AgeWell",
  description: "Measure your biological age with epigenetic clocks, glycan analysis, and blood biomarker panels. The first step to science-based anti-aging.",
};

import BiologicalClockDashboard from "@/components/BiologicalClockDashboard";

export default function BiologicalAgePage() {
  return (
    <div>
      <BiologicalClockDashboard />

      {/* What is biological age */}
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">What Is Biological Age?</h2>
        <div className="mt-6 space-y-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <p>
            Biological age estimates how old your body is at the cellular and molecular level, independent of
            your birth date. Two 50-year-olds can have dramatically different biological ages based on genetics,
            lifestyle, diet, and environment.
          </p>
          <p>
            The most validated approach uses <strong>epigenetic clocks</strong> — algorithms that analyze DNA
            methylation patterns at specific sites across your genome. These patterns change predictably with
            age, and deviations from expected patterns indicate accelerated or decelerated aging.
          </p>
          <p>
            Key epigenetic clocks include <strong>Horvath</strong> (the original pan-tissue clock),{" "}
            <strong>GrimAge</strong> (best predictor of mortality), and <strong>DunedinPACE</strong> (measures
            your current rate of aging rather than cumulative age). A comprehensive test like TruDiagnostic
            reports all of these.
          </p>
        </div>
      </section>

      {/* Test providers */}
      <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Testing Providers</h2>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            We&apos;ve evaluated the leading consumer biological age tests for scientific rigor, comprehensiveness, and value.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {ageTestProviders.map((provider) => (
              <div
                key={provider.id}
                className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{provider.name}</h3>
                  {provider.sinclairAffiliated && (
                    <span className="shrink-0 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                      Sinclair
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400">{provider.type}</p>
                <p className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">{provider.price}</p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{provider.description}</p>
                <div className="mt-4 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Methodology</p>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{provider.methodology}</p>
                </div>
                <div className="mt-auto pt-4">
                  <a
                    href={provider.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:hover:bg-emerald-900/40"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skeptic's note */}
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="rounded-lg border-l-4 border-amber-400 bg-amber-50 p-5 dark:border-amber-500 dark:bg-amber-950/20">
          <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-300">
            A Note on Biological Age Testing
          </h3>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-amber-900/80 dark:text-amber-200/80">
            <p>
              Epigenetic clocks are powerful research tools, but consumer tests have limitations.
              Test-retest variability can be 1–3 years, meaning small changes between tests may be noise.
              Different clocks can give different results for the same person.
            </p>
            <p>
              Use biological age as a directional signal, not a precise measurement. Track trends over
              6–12 months rather than obsessing over a single number. And remember: the interventions
              with the largest effect on biological age are free — exercise, sleep, stress management,
              and diet quality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
