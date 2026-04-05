import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Supplement Industry: Reading Labels and Spotting Hype — AgeWell",
  description: "Third-party testing, bioavailability, proprietary blends, and the difference between 'clinically studied ingredients' and clinical evidence for a product.",
};

export default function SupplementIndustryArticle() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <Link href="/learn" className="text-sm text-emerald-600 hover:text-emerald-500 dark:text-emerald-400">← Back to Learn</Link>
        <div className="mt-4 flex items-center gap-2">
          <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">Practical Guide</span>
          <span className="text-xs text-zinc-400">8 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          The Supplement Industry: Reading Labels and Spotting Hype
        </h1>
        <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
          The supplement industry generates $60B+ annually in the US alone — with minimal FDA
          oversight. Here&apos;s how to protect yourself and evaluate products critically.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">The Regulatory Reality</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            Under the 1994 Dietary Supplement Health and Education Act (DSHEA), supplements are
            regulated as food, not drugs. This means:
          </p>
          <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-300">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span><strong>No pre-market approval:</strong> Supplements can be sold without proving efficacy or safety to the FDA.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span><strong>No standardized testing:</strong> Companies are responsible for their own quality control. Many don&apos;t do it well.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span><strong>Structure/function claims only:</strong> They can say &quot;supports immune health&quot; but not &quot;prevents disease.&quot; The line is often blurred in marketing.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span><strong>Burden of proof is reversed:</strong> The FDA must prove a supplement is unsafe to remove it — unlike drugs, where companies must prove safety first.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Third-Party Testing: The Gold Standard</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            Since the FDA doesn&apos;t verify supplement contents, third-party testing organizations fill
            the gap. Look for these certifications:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/20">
              <h3 className="font-semibold text-emerald-800 dark:text-emerald-300">USP Verified</h3>
              <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-300">
                The most rigorous. US Pharmacopeia tests for identity, potency, purity (no contaminants),
                and proper dissolution. The USP seal means the product contains what it claims, in the
                amounts claimed.
              </p>
            </div>
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/20">
              <h3 className="font-semibold text-emerald-800 dark:text-emerald-300">NSF International</h3>
              <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-300">
                Tests for contaminants, label accuracy, and GMP compliance. &quot;NSF Certified for Sport&quot;
                additionally screens for banned substances — relevant for athletes.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">ConsumerLab</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Independent testing service that publishes results (subscription required). They
                regularly find products that don&apos;t contain what they claim. A great resource for
                comparing brands.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Informed Sport / BSCG</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Focused on banned substance testing for athletes. Less relevant for general consumers
                but indicates a commitment to quality.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Red Flags on Labels</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/20">
              <h3 className="font-semibold text-red-800 dark:text-red-300">&quot;Proprietary Blend&quot;</h3>
              <p className="mt-2 text-sm text-red-700 dark:text-red-400">
                Lists ingredients but not individual amounts — only the total blend weight. This allows
                companies to include headline ingredients at token doses while bulking with cheap fillers.
                If a product uses a proprietary blend, assume the expensive ingredients are underdosed
                unless proven otherwise.
              </p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/20">
              <h3 className="font-semibold text-red-800 dark:text-red-300">&quot;Clinically Studied Ingredients&quot;</h3>
              <p className="mt-2 text-sm text-red-700 dark:text-red-400">
                This means the <em>ingredient</em> has been studied somewhere, not that <em>this product</em>
                was studied. A product containing 50mg of a compound studied at 500mg is technically
                using a &quot;clinically studied ingredient&quot; at 1/10th the effective dose. Always check
                the dose used in the cited study.
              </p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/20">
              <h3 className="font-semibold text-red-800 dark:text-red-300">&quot;Doctor Recommended&quot; / Celebrity Endorsement</h3>
              <p className="mt-2 text-sm text-red-700 dark:text-red-400">
                No regulatory meaning. Any doctor can recommend anything. Celebrity endorsements are
                paid marketing. Evaluate the science, not the spokesperson. This applies even when
                the spokesperson is a legitimate scientist — including David Sinclair.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Bioavailability: Does It Actually Get Absorbed?</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            A supplement is only useful if your body can absorb and use it. Key considerations:
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Form Matters</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Magnesium oxide has ~4% bioavailability; magnesium glycinate has ~80%. CoQ10 as
                ubiquinone absorbs poorly; ubiquinol is 2–3x better. Curcumin alone has &lt;1%
                bioavailability without piperine or liposomal delivery. Always check which form a
                product uses.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Fat-Soluble vs Water-Soluble</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Fat-soluble compounds (CoQ10, vitamin D, astaxanthin) absorb dramatically better when
                taken with a meal containing fat. Taking them on an empty stomach wastes much of the dose.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Blood Levels ≠ Tissue Levels</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                NMN raises blood NAD+ reliably, but whether it raises NAD+ in brain, liver, or muscle
                tissue at the same rate is less clear. A supplement raising a blood marker doesn&apos;t
                automatically mean it&apos;s reaching the tissues where you want it to work.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Our Checklist for Evaluating Any Supplement</h2>
          <div className="mt-4 space-y-2">
            {[
              "Is there at least one peer-reviewed human study for this specific compound? (Not just 'similar' compounds or animal studies.)",
              "Does the product contain the dose used in the study? (Not a lower 'maintenance dose' or undisclosed proprietary blend.)",
              "Is the form of the ingredient bioavailable? (Check: ubiquinol vs ubiquinone, R-ALA vs racemic, etc.)",
              "Does the company use third-party testing (USP, NSF, ConsumerLab)?",
              "Are the claims FDA-compliant? ('Supports' not 'treats/cures/prevents.')",
              "Is there a financial conflict of interest between the researcher and the product?",
              "What does the Skeptic's Corner say? (If we list the product, we've already done this analysis.)",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 rounded-lg border border-zinc-200 px-4 py-3 dark:border-zinc-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                  {i + 1}
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg border-l-4 border-amber-400 bg-amber-50 p-5 dark:border-amber-500 dark:bg-amber-950/20">
          <h2 className="text-lg font-semibold text-amber-800 dark:text-amber-300">The Bottom Line</h2>
          <p className="mt-2 leading-relaxed text-amber-900/80 dark:text-amber-200/80">
            The supplement industry is not inherently dishonest — there are excellent companies making
            high-quality products. But the low regulatory bar means you have to be your own quality
            control department. Use third-party tested products, verify doses match the studies,
            check bioavailability of the form used, and be skeptical of any marketing claim that
            sounds too good to be true. Our product pages do this analysis for you, but it&apos;s worth
            understanding the process so you can evaluate products we haven&apos;t covered.
          </p>
        </section>
      </div>
    </article>
  );
}
