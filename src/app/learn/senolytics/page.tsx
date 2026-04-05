import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senolytics: Clearing Zombie Cells — AgeWell",
  description: "Senescent cells accumulate with age and poison their neighbors. Senolytics aim to clear them. Here's where the evidence stands.",
};

export default function SenolyticsArticle() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <Link href="/learn" className="text-sm text-emerald-600 hover:text-emerald-500 dark:text-emerald-400">← Back to Learn</Link>
        <div className="mt-4 flex items-center gap-2">
          <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">Deep Dive</span>
          <span className="text-xs text-zinc-400">13 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Senolytics: Clearing Zombie Cells
        </h1>
        <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
          Senescent cells stop dividing but refuse to die, secreting a toxic cocktail that
          accelerates aging in surrounding tissue. Can we selectively clear them?
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What Are Senescent Cells?</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            When a cell accumulates enough damage — from telomere shortening, DNA mutations, oxidative
            stress, or oncogene activation — it faces a choice: repair itself, die (apoptosis), or enter
            <strong> senescence</strong>: a state where it permanently stops dividing but remains
            metabolically active. In youth, this is protective — it prevents damaged cells from becoming
            cancerous. But with age, senescent cells accumulate because the immune system becomes less
            efficient at clearing them.
          </p>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            The problem isn&apos;t just that they sit there. Senescent cells secrete a toxic mix of
            inflammatory cytokines, proteases, and growth factors called the <strong>SASP</strong>{" "}
            (Senescence-Associated Secretory Phenotype). This SASP damages neighboring cells, promotes
            chronic inflammation, degrades the extracellular matrix, and can even induce senescence
            in healthy cells — a &quot;bystander effect&quot; that spreads aging through tissue.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">The Senolytic Strategy</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            Senolytics are drugs or compounds that selectively kill senescent cells while sparing
            healthy ones. The concept was proven in 2015 when James Kirkland&apos;s lab at Mayo Clinic
            showed that clearing senescent cells in mice extended healthspan and improved multiple
            age-related conditions.
          </p>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            The key insight: senescent cells upregulate anti-apoptotic (pro-survival) pathways to
            resist death. Senolytics work by inhibiting these survival pathways, tipping senescent
            cells into apoptosis. Healthy cells don&apos;t depend on these same pathways, so they&apos;re
            spared.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">The Leading Senolytic Compounds</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Dasatinib + Quercetin (D+Q)</h3>
              <p className="mt-1 text-xs text-zinc-400">Prescription (dasatinib) + OTC supplement</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                The &quot;gold standard&quot; senolytic combination from Kirkland&apos;s lab. Dasatinib is an FDA-approved
                cancer drug (tyrosine kinase inhibitor); quercetin is a plant flavonoid. Together they
                clear senescent cells more effectively than either alone. The first human trial (2019)
                showed D+Q reduced senescent cell markers in patients with diabetic kidney disease.
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                <strong>Catch:</strong> Dasatinib is a prescription chemotherapy drug with real side effects
                (edema, bleeding risk, immune suppression). This is not a casual supplement — it requires
                medical supervision. We do not list it on our product pages for this reason.
              </p>
            </div>
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-800 dark:bg-emerald-950/20">
              <h3 className="font-semibold text-emerald-800 dark:text-emerald-300">Fisetin</h3>
              <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">OTC supplement | Emerging evidence</p>
              <p className="mt-2 text-sm leading-relaxed text-emerald-700 dark:text-emerald-300">
                Identified by Mayo Clinic researchers as the most potent <em>natural</em> senolytic in
                a screen of 10 flavonoids. In mice, fisetin reduced senescent cell burden and extended
                lifespan even when started in old age — a remarkable result. It&apos;s found naturally in
                strawberries (though at ~160x lower concentrations than supplement doses).
              </p>
              <p className="mt-2 text-sm leading-relaxed text-emerald-700 dark:text-emerald-300">
                The Mayo Clinic is running the AFFIRM-LITE trial testing fisetin in humans. Results are
                pending. See our full{" "}
                <Link href="/advanced/fisetin" className="text-emerald-800 underline hover:text-emerald-600 dark:text-emerald-200">
                  fisetin product page
                </Link>.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Quercetin (alone)</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                A widely available flavonoid with some senolytic activity. Less potent than D+Q or
                fisetin in cell culture studies. Has general anti-inflammatory properties. Some people
                take it as a milder senolytic option, but the evidence for standalone senolytic
                efficacy in humans is essentially nonexistent.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">The Dosing Question: &quot;Hit and Run&quot;</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            Unlike most supplements that are taken daily, senolytics are theorized to work best in
            intermittent pulses — what researchers call &quot;hit and run&quot; dosing. The idea: blast
            senescent cells for 1–3 days, then stop for weeks or months while the body clears the debris
            and healthy cells remain unaffected.
          </p>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            The mouse studies typically used 2 consecutive days of high-dose treatment per month.
            Whether this protocol translates to humans is <strong>completely unknown</strong>. Some
            people in the biohacker community take high-dose fisetin (~20mg/kg) for 2 days monthly.
            This is self-experimentation, not evidence-based medicine.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">How Would You Know If It&apos;s Working?</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            This is one of the biggest challenges. Currently, there&apos;s no convenient consumer test
            for senescent cell burden. Potential markers include:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              <span><strong>p16INK4a expression:</strong> A key senescence marker, but requires tissue biopsy — not practical for consumers.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              <span><strong>SASP factors in blood:</strong> IL-6, MCP-1, PAI-1 can be measured via blood tests. A reduction after senolytic treatment would be suggestive but not specific.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              <span><strong>Epigenetic clocks:</strong> Theoretically, clearing senescent cells should improve GrimAge score, but this hasn&apos;t been demonstrated in published trials.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              <span><strong>Subjective energy and function:</strong> Anecdotal, but some self-experimenters report improved energy after senolytic pulses. Take with heavy skepticism.</span>
            </li>
          </ul>
        </section>

        <section className="rounded-lg border-l-4 border-amber-400 bg-amber-50 p-5 dark:border-amber-500 dark:bg-amber-950/20">
          <h2 className="text-lg font-semibold text-amber-800 dark:text-amber-300">Our Assessment</h2>
          <p className="mt-2 leading-relaxed text-amber-900/80 dark:text-amber-200/80">
            Senolytics may be the most promising single strategy in longevity science. The animal data
            is compelling, the mechanism is logical, and the first human trials are encouraging. But
            we are still in the early innings. The only natural senolytic that meets our listing criteria
            is{" "}
            <Link href="/advanced/fisetin" className="text-amber-700 underline hover:text-amber-600 dark:text-amber-300">fisetin</Link>,
            and we rate it as Emerging Evidence because the human trial data isn&apos;t published yet.
            If the AFFIRM trial results are positive, this category will move from frontier to mainstream
            quickly. Until then, treat senolytic self-experimentation as exactly what it is: an educated
            bet on promising but unproven science.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Key Sources</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
            <li>
              Zhu Y, et al. &quot;The Achilles&apos; heel of senescent cells: from transcriptome to senolytic drugs.&quot; <em>Aging Cell</em>, 2015.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/25754370/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline dark:text-emerald-400">PubMed</a>
            </li>
            <li>
              Yousefzadeh MJ, et al. &quot;Fisetin is a senotherapeutic that extends health and lifespan.&quot; <em>EBioMedicine</em>, 2018.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/30279143/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline dark:text-emerald-400">PubMed</a>
            </li>
            <li>
              Hickson LJ, et al. &quot;Senolytics decrease senescent cells in humans: Preliminary report from a clinical trial.&quot; <em>EBioMedicine</em>, 2019.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/31542391/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline dark:text-emerald-400">PubMed</a>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
