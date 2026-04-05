import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why We Age: The 12 Hallmarks of Aging — AgeWell",
  description: "An overview of the 12 hallmarks of aging and which ones are targetable with current interventions — from genomic instability to stem cell exhaustion.",
};

export default function HallmarksArticle() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <Link href="/learn" className="text-sm text-emerald-600 hover:text-emerald-500 dark:text-emerald-400">
          ← Back to Learn
        </Link>
        <div className="mt-4 flex items-center gap-2">
          <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            Fundamentals
          </span>
          <span className="text-xs text-zinc-400">12 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Why We Age: The 12 Hallmarks of Aging
        </h1>
        <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
          In 2013, a landmark paper in <em>Cell</em> identified 9 hallmarks of aging. By 2023, the list
          expanded to 12. These hallmarks represent the biological processes that drive aging — and
          the targets that longevity science is trying to address.
        </p>
      </div>

      <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What Are the Hallmarks?</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            The hallmarks framework organizes the complex biology of aging into discrete, interconnected
            processes. Think of them as the &quot;categories of damage&quot; that accumulate over time. Some are
            causes (primary hallmarks), some are responses to damage (antagonistic hallmarks), and some
            are the downstream consequences (integrative hallmarks).
          </p>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            Understanding which hallmark a product targets helps you evaluate whether its mechanism is
            relevant to your goals — and whether the science supports the claim.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Primary Hallmarks (Causes of Damage)</h2>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">These are the root causes that initiate the aging process.</p>

          <div className="mt-4 space-y-6">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">1. Genomic Instability</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                DNA accumulates damage over time from radiation, oxidative stress, and replication errors.
                Repair mechanisms (like PARP enzymes, which require NAD+) become less efficient with age.
                This is one reason NAD+ precursors like{" "}
                <Link href="/essentials/nmn" className="text-emerald-600 hover:underline dark:text-emerald-400">NMN</Link>{" "}
                are of interest — they fuel the DNA repair machinery.
              </p>
              <p className="mt-2 text-xs text-zinc-400">Targetable with: NAD+ precursors, DNA repair support</p>
            </div>

            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">2. Telomere Attrition</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Telomeres — protective caps on chromosome ends — shorten with each cell division. When
                they get too short, cells enter senescence or die. Telomere length correlates with
                biological age, though whether it&apos;s a cause or marker of aging is debated.{" "}
                <Link href="/essentials/omega-3" className="text-emerald-600 hover:underline dark:text-emerald-400">Omega-3 fatty acids</Link>{" "}
                have been associated with slower telomere shortening in observational studies.
              </p>
              <p className="mt-2 text-xs text-zinc-400">Targetable with: Omega-3s (observational evidence), exercise, stress reduction</p>
            </div>

            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">3. Epigenetic Alterations</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                DNA methylation patterns, histone modifications, and chromatin structure change with age,
                altering gene expression in harmful ways. This is the basis for{" "}
                <Link href="/biological-age" className="text-emerald-600 hover:underline dark:text-emerald-400">epigenetic age testing</Link>{" "}
                — and the core of David Sinclair&apos;s &quot;information theory of aging,&quot; which posits
                that aging is fundamentally a loss of epigenetic information. Sirtuins (activated by NAD+)
                help maintain epigenetic stability.
              </p>
              <p className="mt-2 text-xs text-zinc-400">Targetable with: NAD+ precursors, lifestyle interventions (diet, exercise, sleep)</p>
            </div>

            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">4. Loss of Proteostasis</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                The cell&apos;s ability to maintain properly folded, functional proteins declines. Misfolded
                proteins accumulate (think: amyloid in Alzheimer&apos;s). Autophagy — the cell&apos;s recycling
                system — is a key proteostasis mechanism.{" "}
                <Link href="/advanced/spermidine" className="text-emerald-600 hover:underline dark:text-emerald-400">Spermidine</Link>{" "}
                is one of the few compounds that reliably induces autophagy.
              </p>
              <p className="mt-2 text-xs text-zinc-400">Targetable with: Spermidine, fasting, exercise</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Antagonistic Hallmarks (Responses to Damage)</h2>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Initially protective, these become harmful when chronic or excessive.</p>

          <div className="mt-4 space-y-6">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">5. Deregulated Nutrient Sensing</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Pathways like mTOR, AMPK, insulin/IGF-1, and sirtuins regulate how cells respond to
                nutrients. With age, these become dysregulated — cells behave as if nutrients are always
                abundant, promoting growth over repair. This is why caloric restriction and fasting extend
                lifespan in animal models: they shift the balance toward repair pathways.
              </p>
              <p className="mt-2 text-xs text-zinc-400">Targetable with: Intermittent fasting, exercise, sulforaphane (Nrf2), spermidine</p>
            </div>

            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">6. Mitochondrial Dysfunction</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Mitochondria — the cell&apos;s powerhouses — become less efficient at producing ATP and generate
                more damaging reactive oxygen species (ROS). This is one of the most directly targetable
                hallmarks. See our deep dive on{" "}
                <Link href="/learn/mitochondria-atp-aging" className="text-emerald-600 hover:underline dark:text-emerald-400">
                  Mitochondria, ATP, and Aging
                </Link>.
                Products targeting this hallmark include{" "}
                <Link href="/essentials/coq10" className="text-emerald-600 hover:underline dark:text-emerald-400">CoQ10</Link>,{" "}
                <Link href="/advanced/urolithin-a" className="text-emerald-600 hover:underline dark:text-emerald-400">Urolithin A</Link>,{" "}
                <Link href="/essentials/creatine" className="text-emerald-600 hover:underline dark:text-emerald-400">Creatine</Link>, and{" "}
                <Link href="/devices/red-light-therapy" className="text-emerald-600 hover:underline dark:text-emerald-400">Red Light Therapy</Link>.
              </p>
              <p className="mt-2 text-xs text-zinc-400">Targetable with: CoQ10, Urolithin A, PQQ, Creatine, Red Light Therapy, exercise (especially HIIT)</p>
            </div>

            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">7. Cellular Senescence</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Damaged cells that stop dividing but refuse to die become &quot;zombie cells&quot; — they secrete
                inflammatory factors (the SASP — senescence-associated secretory phenotype) that damage
                surrounding tissue. Clearing these cells with senolytics is one of the most exciting areas
                in aging research.{" "}
                <Link href="/advanced/fisetin" className="text-emerald-600 hover:underline dark:text-emerald-400">Fisetin</Link>{" "}
                is the most studied natural senolytic, though human evidence is still emerging.
              </p>
              <p className="mt-2 text-xs text-zinc-400">Targetable with: Fisetin (emerging), dasatinib+quercetin (prescription/research)</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Integrative Hallmarks (Consequences)</h2>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">The downstream effects when primary and antagonistic hallmarks aren&apos;t resolved.</p>

          <div className="mt-4 space-y-6">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">8. Stem Cell Exhaustion</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                The body&apos;s regenerative capacity declines as stem cell populations shrink and lose function.
                This limits tissue repair and immune system renewal. Currently, there are no well-validated
                consumer products that directly address stem cell exhaustion — this remains a frontier of
                clinical research.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">9. Altered Intercellular Communication</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Aging changes how cells communicate, leading to chronic low-grade inflammation
                (&quot;inflammaging&quot;). This drives virtually every age-related disease. Anti-inflammatory
                interventions like{" "}
                <Link href="/essentials/omega-3" className="text-emerald-600 hover:underline dark:text-emerald-400">omega-3s</Link> and{" "}
                <Link href="/essentials/olive-oil" className="text-emerald-600 hover:underline dark:text-emerald-400">high-polyphenol olive oil</Link>{" "}
                target this hallmark directly.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">The 2023 Additions</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            The 2023 update in <em>Cell</em> added three new hallmarks:
          </p>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">10. Disabled Macroautophagy</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Previously part of &quot;loss of proteostasis,&quot; autophagy got its own hallmark — recognizing its
                central importance. The decline in cellular recycling with age is now considered a primary
                driver, not just a symptom.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">11. Chronic Inflammation</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                &quot;Inflammaging&quot; was elevated from a sub-process to a full hallmark. Chronic, sterile
                inflammation underlies cardiovascular disease, neurodegeneration, cancer, and metabolic
                syndrome.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">12. Dysbiosis</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                The gut microbiome changes with age in ways that promote inflammation and reduce beneficial
                metabolite production (like the conversion of ellagitannins to{" "}
                <Link href="/advanced/urolithin-a" className="text-emerald-600 hover:underline dark:text-emerald-400">urolithin A</Link>).
                Microbiome health is increasingly recognized as central to healthy aging.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Which Hallmarks Can You Actually Target?</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            Not all hallmarks are equally targetable with current consumer products. Here&apos;s an honest
            assessment:
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Hallmark</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Consumer Targetability</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Best Intervention</th>
                </tr>
              </thead>
              <tbody className="text-zinc-600 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800/50">
                  <td className="py-2">Mitochondrial Dysfunction</td>
                  <td className="py-2 text-emerald-600 dark:text-emerald-400">High</td>
                  <td className="py-2">Exercise, CoQ10, Urolithin A, Red Light</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800/50">
                  <td className="py-2">Chronic Inflammation</td>
                  <td className="py-2 text-emerald-600 dark:text-emerald-400">High</td>
                  <td className="py-2">Omega-3, EVOO, exercise, sleep</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800/50">
                  <td className="py-2">Disabled Macroautophagy</td>
                  <td className="py-2 text-amber-600 dark:text-amber-400">Moderate</td>
                  <td className="py-2">Fasting, spermidine, exercise</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800/50">
                  <td className="py-2">Epigenetic Alterations</td>
                  <td className="py-2 text-amber-600 dark:text-amber-400">Moderate</td>
                  <td className="py-2">Lifestyle (diet, exercise, sleep), NAD+ precursors</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800/50">
                  <td className="py-2">Cellular Senescence</td>
                  <td className="py-2 text-amber-600 dark:text-amber-400">Moderate</td>
                  <td className="py-2">Fisetin (emerging), exercise</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800/50">
                  <td className="py-2">Nutrient Sensing</td>
                  <td className="py-2 text-amber-600 dark:text-amber-400">Moderate</td>
                  <td className="py-2">Fasting, exercise (free!)</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800/50">
                  <td className="py-2">Dysbiosis</td>
                  <td className="py-2 text-amber-600 dark:text-amber-400">Moderate</td>
                  <td className="py-2">Diet diversity, fermented foods, fiber</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800/50">
                  <td className="py-2">Genomic Instability</td>
                  <td className="py-2 text-violet-600 dark:text-violet-400">Low</td>
                  <td className="py-2">NAD+ precursors (indirect), avoid mutagens</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800/50">
                  <td className="py-2">Telomere Attrition</td>
                  <td className="py-2 text-violet-600 dark:text-violet-400">Low</td>
                  <td className="py-2">Exercise, stress management</td>
                </tr>
                <tr>
                  <td className="py-2">Stem Cell Exhaustion</td>
                  <td className="py-2 text-violet-600 dark:text-violet-400">Low</td>
                  <td className="py-2">No validated consumer interventions yet</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-lg border-l-4 border-amber-400 bg-amber-50 p-5 dark:border-amber-500 dark:bg-amber-950/20">
          <h2 className="text-lg font-semibold text-amber-800 dark:text-amber-300">The Honest Truth</h2>
          <p className="mt-2 leading-relaxed text-amber-900/80 dark:text-amber-200/80">
            Notice that &quot;exercise&quot; appears in almost every row. Regular physical activity — particularly
            a combination of resistance training and HIIT — remains the single most powerful anti-aging
            intervention known to science. It targets at least 8 of the 12 hallmarks simultaneously.
            No supplement comes close. Supplements are, at best, a complement to the basics: exercise,
            sleep, stress management, and a whole-food diet.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Sources</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
            <li>
              Lopez-Otin C, et al. &quot;The Hallmarks of Aging.&quot; <em>Cell</em>, 2013.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/23746838/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline dark:text-emerald-400">PubMed</a>
            </li>
            <li>
              Lopez-Otin C, et al. &quot;Hallmarks of aging: An expanding universe.&quot; <em>Cell</em>, 2023.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/36599349/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline dark:text-emerald-400">PubMed</a>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
