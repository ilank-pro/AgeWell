import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NAD+ and Sirtuins: The Sinclair Thesis — AgeWell",
  description: "David Sinclair's information theory of aging, the NAD+/sirtuin axis, NMN vs NR, and an honest assessment of where the evidence stands.",
};

export default function NADSirtuinsArticle() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <Link href="/learn" className="text-sm text-emerald-600 hover:text-emerald-500 dark:text-emerald-400">
          ← Back to Learn
        </Link>
        <div className="mt-4 flex items-center gap-2">
          <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            Deep Dive
          </span>
          <span className="text-xs text-zinc-400">15 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          NAD+ and Sirtuins: The Sinclair Thesis
        </h1>
        <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
          David Sinclair&apos;s information theory of aging has made NAD+ the most talked-about molecule
          in longevity science. But how much of it is supported by evidence — and how much is marketing?
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">The Core Thesis</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            In his 2019 book <em>Lifespan</em>, Harvard geneticist David Sinclair proposes that aging
            is not an inevitable consequence of wear and tear, but rather a loss of <strong>epigenetic
            information</strong>. According to this theory, cells retain their DNA (the &quot;digital&quot; information)
            but gradually lose the epigenetic instructions (the &quot;analog&quot; information) that tell genes when
            to turn on and off.
          </p>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            Central to this thesis are <strong>sirtuins</strong> — a family of seven proteins (SIRT1-7)
            that act as epigenetic guardians. Sirtuins maintain chromatin structure, silence transposons,
            and repair DNA. But they need fuel to function: <strong>NAD+</strong> (nicotinamide adenine
            dinucleotide), a coenzyme present in every cell.
          </p>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            The problem: NAD+ levels decline approximately 50% between ages 40 and 60. As NAD+ drops,
            sirtuins can&apos;t do their job, epigenetic information erodes, and aging accelerates. The proposed
            solution: restore NAD+ levels with precursor supplements like NMN or NR.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">NAD+ Biochemistry: The Basics</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            NAD+ is involved in hundreds of metabolic reactions. Its key roles:
          </p>
          <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-300">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              <span><strong>Energy metabolism:</strong> NAD+ accepts electrons in glycolysis and the TCA cycle, becoming NADH, which feeds the mitochondrial electron transport chain to produce ATP.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              <span><strong>Sirtuin activation:</strong> Sirtuins are NAD+-dependent deacetylases. They remove acetyl groups from histones and other proteins, affecting gene expression and stress resistance.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              <span><strong>DNA repair:</strong> PARP enzymes (especially PARP1) consume NAD+ during DNA repair. With age, increased DNA damage means more NAD+ is consumed for repair, leaving less for sirtuins.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              <span><strong>Immune regulation:</strong> CD38, an NAD+-consuming enzyme, increases with age and is a major driver of NAD+ decline. Chronic inflammation drives CD38 expression.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">NMN vs NR: The Precursor Debate</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            There are two main NAD+ precursor supplements:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">NMN (Nicotinamide Mononucleotide)</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                One step closer to NAD+ in the biosynthetic pathway. Sinclair&apos;s preferred precursor.
                Converted to NAD+ by the enzyme NMNAT. Multiple human trials published. Was briefly
                threatened by FDA classification as a drug (2022) but remains available as a supplement.
              </p>
              <p className="mt-2 text-xs text-zinc-400">Typical dose: 250–1000mg/day</p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">NR (Nicotinamide Riboside)</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Two steps from NAD+. Championed by ChromaDex (Tru Niagen) and researched by Charles Brenner.
                Must first be converted to NMN, then to NAD+. Has its own body of human trial data. May
                have slightly different tissue distribution than NMN.
              </p>
              <p className="mt-2 text-xs text-zinc-400">Typical dose: 300–1000mg/day</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            <strong>The honest answer:</strong> There is no definitive evidence that NMN is superior to NR
            or vice versa in humans. Both reliably raise blood NAD+ levels. The Sinclair vs. Brenner debate
            is partly scientific, partly commercial rivalry. Choose based on quality, price, and third-party
            testing rather than claimed superiority.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What the Human Evidence Actually Shows</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/20">
              <h3 className="font-semibold text-emerald-800 dark:text-emerald-300">What IS well-supported:</h3>
              <ul className="mt-2 space-y-1 text-sm text-emerald-700 dark:text-emerald-400">
                <li>NAD+ levels do decline with age (well-documented)</li>
                <li>NMN and NR supplementation reliably increases blood NAD+ levels (multiple RCTs)</li>
                <li>Sirtuins are real enzymes with real NAD+ dependence (basic biochemistry)</li>
                <li>NAD+ is genuinely important for DNA repair and mitochondrial function</li>
              </ul>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/20">
              <h3 className="font-semibold text-amber-800 dark:text-amber-300">What is UNCERTAIN:</h3>
              <ul className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-400">
                <li>Whether raising NAD+ in already-healthy humans produces meaningful clinical benefits</li>
                <li>Whether the dramatic mouse results (rejuvenation, endurance) translate to humans</li>
                <li>The optimal dose, timing, and duration of supplementation</li>
                <li>Whether oral NMN/NR reaches tissues in sufficient concentrations</li>
                <li>Long-term safety beyond 1 year</li>
              </ul>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/20">
              <h3 className="font-semibold text-red-800 dark:text-red-300">What is NOT supported:</h3>
              <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-400">
                <li>&quot;Reverse your age by 20 years&quot; — no human trial has shown this</li>
                <li>That NAD+ supplementation is the primary driver of Sinclair&apos;s personal results (he also exercises, fasts, etc.)</li>
                <li>That resveratrol meaningfully activates sirtuins in humans (poor bioavailability, Sirtris failed)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">The Sinclair Conflict of Interest</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            We include this section because transparency is foundational to our approach. David Sinclair is:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              <span>Co-founder of <strong>Tally Health</strong> (sells NMN supplements and biological age tests)</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              <span>Co-founder of <strong>Metro Biotech</strong> (developing NMN-based therapeutics)</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              <span>Advisor to <strong>InsideTracker</strong> (blood biomarker testing)</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              <span>Previously co-founded <strong>Sirtris Pharmaceuticals</strong> (resveratrol-based drugs, sold to GSK for $720M, program later discontinued)</span>
            </li>
          </ul>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            This doesn&apos;t mean his science is wrong — his lab produces legitimate, peer-reviewed research.
            But when a researcher directly profits from the products he advocates, you should weight his
            public statements differently than his published papers. We do.
          </p>
        </section>

        <section className="rounded-lg border-l-4 border-amber-400 bg-amber-50 p-5 dark:border-amber-500 dark:bg-amber-950/20">
          <h2 className="text-lg font-semibold text-amber-800 dark:text-amber-300">Our Assessment</h2>
          <p className="mt-2 leading-relaxed text-amber-900/80 dark:text-amber-200/80">
            The NAD+/sirtuin axis is real biology, not pseudoscience. NAD+ decline with age is well-documented,
            and NMN/NR supplementation reliably raises NAD+ levels. However, the leap from &quot;raises a biomarker&quot;
            to &quot;slows aging in humans&quot; is not yet firmly established. We rate{" "}
            <Link href="/essentials/nmn" className="text-amber-700 underline hover:text-amber-600 dark:text-amber-300">NMN</Link>{" "}
            as Moderate Evidence — promising enough to include, honest enough to flag the gaps.
            The best approach: try it if you&apos;re interested, track your biological age before and after,
            and don&apos;t neglect the basics (exercise, sleep, diet) that have far stronger evidence.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Key Sources</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
            <li>Sinclair DA, LaPlante MD. <em>Lifespan: Why We Age — and Why We Don&apos;t Have To.</em> Atria Books, 2019.</li>
            <li>
              Yoshino J, et al. &quot;NAD+ intermediates: the biology and therapeutic potential.&quot; <em>Cell Metabolism</em>, 2018.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/29249689/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline dark:text-emerald-400">PubMed</a>
            </li>
            <li>
              Igarashi M, et al. &quot;Chronic NMN supplementation elevates blood NAD+ levels.&quot; <em>Nature Aging</em>, 2022.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/37118425/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline dark:text-emerald-400">PubMed</a>
            </li>
            <li>
              Martens CR, et al. &quot;Chronic NR supplementation is well-tolerated and elevates NAD+ in healthy middle-aged and older adults.&quot; <em>Nature Communications</em>, 2018.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/29599478/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline dark:text-emerald-400">PubMed</a>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
