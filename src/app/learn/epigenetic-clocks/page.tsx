import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Epigenetic Clocks: Measuring Biological Age — AgeWell",
  description: "How DNA methylation clocks work, from Horvath to DunedinPACE — what they measure, their limitations, and how to interpret your results.",
};

export default function EpigeneticClocksArticle() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <Link href="/learn" className="text-sm text-emerald-600 hover:text-emerald-500 dark:text-emerald-400">
          ← Back to Learn
        </Link>
        <div className="mt-4 flex items-center gap-2">
          <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">Fundamentals</span>
          <span className="text-xs text-zinc-400">10 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Epigenetic Clocks: Measuring Biological Age
        </h1>
        <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
          From Horvath to DunedinPACE — how DNA methylation patterns reveal your biological age,
          and what the numbers actually mean.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What Is DNA Methylation?</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            DNA methylation is a chemical modification where a methyl group (-CH3) is added to
            cytosine bases in your DNA, typically at CpG sites (where cytosine is followed by guanine).
            These modifications don&apos;t change your genetic code — they change which genes are active or
            silent. Think of methylation as sticky notes on a book: the words don&apos;t change, but the
            notes tell the reader which pages to pay attention to.
          </p>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            Critically, methylation patterns change predictably with age. Some sites gain methylation,
            others lose it, in a pattern so consistent that algorithms can estimate your age from a
            DNA sample with remarkable accuracy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">The Major Clocks</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Horvath Clock (2013)</h3>
              <p className="mt-1 text-xs text-zinc-400">353 CpG sites | Pan-tissue</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                The original. Steve Horvath&apos;s landmark clock works across almost all tissue types —
                blood, brain, liver, kidney. It was trained on ~8,000 samples and predicts chronological
                age with a median error of 3.6 years. &quot;Horvath age acceleration&quot; (biological age minus
                chronological age) predicts mortality independently of other risk factors.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Hannum Clock (2013)</h3>
              <p className="mt-1 text-xs text-zinc-400">71 CpG sites | Blood-specific</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Published the same year as Horvath&apos;s, Hannum&apos;s clock is optimized for blood samples.
                It uses fewer CpG sites but performs comparably for blood-based age estimation. Less
                versatile across tissues than Horvath&apos;s clock.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">PhenoAge / GrimAge (2018–2019)</h3>
              <p className="mt-1 text-xs text-zinc-400">513 / 1,030 CpG sites | Blood</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Second-generation clocks that go beyond chronological age. Instead of predicting birth
                date, they predict <em>mortality risk</em>. PhenoAge incorporates clinical biomarkers
                (albumin, creatinine, glucose, CRP, etc.). GrimAge adds smoking history and plasma protein
                surrogates. <strong>GrimAge is currently considered the best predictor of lifespan and
                healthspan outcomes.</strong>
              </p>
            </div>
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-800 dark:bg-emerald-950/20">
              <h3 className="font-semibold text-emerald-800 dark:text-emerald-300">DunedinPACE (2022)</h3>
              <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">173 CpG sites | Blood | Rate-of-aging</p>
              <p className="mt-2 text-sm leading-relaxed text-emerald-700 dark:text-emerald-300">
                The newest and arguably most useful clock for tracking interventions. Unlike other clocks
                that estimate cumulative biological age, DunedinPACE measures your <em>current rate of
                aging</em> — are you aging faster or slower than 1 year per calendar year right now?
                Developed from the Dunedin birth cohort study tracking ~1,000 people from birth. A score
                of 1.0 means you&apos;re aging at the normal rate; below 1.0 means slower; above means faster.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-emerald-700 dark:text-emerald-300">
                <strong>Why it matters:</strong> DunedinPACE is most responsive to lifestyle changes,
                making it the best clock for evaluating whether your supplement protocol or exercise
                routine is actually working.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Which Test Should You Get?</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            See our full{" "}
            <Link href="/biological-age" className="text-emerald-600 hover:underline dark:text-emerald-400">
              Biological Age Testing
            </Link>{" "}
            page for provider comparisons. In brief:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              <span><strong>For comprehensive analysis:</strong> TruDiagnostic TruAge COMPLETE — reports all major clocks including DunedinPACE, immune cell composition, and telomere length.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              <span><strong>For tracking interventions:</strong> Focus on DunedinPACE score — it&apos;s the most responsive to changes. Test every 6–12 months.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              <span><strong>For mortality risk:</strong> GrimAge is the strongest predictor, but it&apos;s a sobering number — make sure you&apos;re ready for that information.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Interpreting Your Results</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Age Acceleration</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Biological age minus chronological age. If you&apos;re 50 but your biological age reads 45,
                your acceleration is -5 years (good). If it reads 55, your acceleration is +5 years
                (concerning). A difference of 1–3 years may be within the test&apos;s margin of error.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Rate of Aging (DunedinPACE)</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Expressed as years of biological aging per calendar year. A score of 0.85 means you&apos;re
                aging at 85% of the normal rate. The mean in population studies is ~1.0, with a standard
                deviation of ~0.15. Scores below 0.85 or above 1.15 are meaningfully different from average.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What Moves the Clock?</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            Interventions with the strongest evidence for improving epigenetic age:
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Intervention</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Effect</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Evidence</th>
                </tr>
              </thead>
              <tbody className="text-zinc-600 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800/50">
                  <td className="py-2">Exercise (consistent)</td>
                  <td className="py-2">-3 to -7 years age acceleration</td>
                  <td className="py-2 text-emerald-600 dark:text-emerald-400">Strong</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800/50">
                  <td className="py-2">Mediterranean diet</td>
                  <td className="py-2">-1.5 to -3 years</td>
                  <td className="py-2 text-emerald-600 dark:text-emerald-400">Strong</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800/50">
                  <td className="py-2">Sleep quality (7-9 hrs)</td>
                  <td className="py-2">-1 to -3 years</td>
                  <td className="py-2 text-amber-600 dark:text-amber-400">Moderate</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800/50">
                  <td className="py-2">Smoking cessation</td>
                  <td className="py-2">-3 to -5 years (over time)</td>
                  <td className="py-2 text-emerald-600 dark:text-emerald-400">Strong</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800/50">
                  <td className="py-2">Weight loss (if overweight)</td>
                  <td className="py-2">-1 to -3 years</td>
                  <td className="py-2 text-amber-600 dark:text-amber-400">Moderate</td>
                </tr>
                <tr>
                  <td className="py-2">Supplements (NMN, etc.)</td>
                  <td className="py-2">Unclear</td>
                  <td className="py-2 text-violet-600 dark:text-violet-400">Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-lg border-l-4 border-amber-400 bg-amber-50 p-5 dark:border-amber-500 dark:bg-amber-950/20">
          <h2 className="text-lg font-semibold text-amber-800 dark:text-amber-300">Limitations to Keep in Mind</h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-amber-900/80 dark:text-amber-200/80">
            <li><strong>Test-retest variability:</strong> The same sample tested twice can differ by 1–3 years. Don&apos;t obsess over small changes between tests.</li>
            <li><strong>Different clocks, different answers:</strong> You might be &quot;younger&quot; on Horvath but &quot;older&quot; on GrimAge. Each measures something slightly different.</li>
            <li><strong>Acute confounders:</strong> Illness, recent vaccination, extreme stress, and sleep deprivation can temporarily affect results. Test when you&apos;re in your normal routine.</li>
            <li><strong>Correlation vs causation:</strong> We know epigenetic clocks predict mortality, but we don&apos;t yet know for certain that <em>lowering</em> your clock score <em>causes</em> longer life. It might just be a readout of underlying health.</li>
            <li><strong>Commercial incentive:</strong> Companies selling biological age tests have an incentive to make the results feel actionable and worth retesting. Keep a healthy skepticism about how much to invest in chasing the number.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Key Sources</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
            <li>
              Horvath S. &quot;DNA methylation age of human tissues and cell types.&quot; <em>Genome Biology</em>, 2013.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/24138928/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline dark:text-emerald-400">PubMed</a>
            </li>
            <li>
              Lu AT, et al. &quot;DNA methylation GrimAge strongly predicts lifespan and healthspan.&quot; <em>Aging</em>, 2019.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/30669119/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline dark:text-emerald-400">PubMed</a>
            </li>
            <li>
              Belsky DW, et al. &quot;DunedinPACE, a DNA methylation biomarker of the pace of aging.&quot; <em>eLife</em>, 2022.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/35029144/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline dark:text-emerald-400">PubMed</a>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
