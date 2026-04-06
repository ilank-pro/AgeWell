import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Methodology — AgeWell",
  description: "Our editorial standards, evidence methodology, and transparency about the affiliate business model.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero with logo */}
      <section className="relative overflow-hidden bg-zinc-950 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/10 via-transparent to-transparent" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
          <Image
            src="/images/agewell_logo_var_luxury_1775435303123_1775472294691.png"
            alt="AgeWell"
            width={240}
            height={240}
            className="rounded-2xl"
            priority
          />
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            About & Methodology
          </h1>
          <p className="mt-3 text-sm font-semibold tracking-widest uppercase text-amber-400/80">
            Empowering AgeLife
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
            Science-first anti-aging. Every product we recommend is backed by peer-reviewed
            human research — no hype, no miracle claims, just evidence you can trust.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">

      <div className="mt-8 space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Why We Exist</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
            <p>
              The anti-aging market is flooded with products making extraordinary claims backed by
              thin evidence. On the other end, legitimate longevity science is advancing rapidly but
              is hard for non-scientists to navigate.
            </p>
            <p>
              We bridge that gap. Every product we recommend has peer-reviewed human research supporting
              it. We rate the evidence honestly, disclose our limitations, and include a Skeptic&apos;s Corner
              on every product page because we believe trust is built through transparency, not hype.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Our Evidence Standards</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
            <p>To be listed on our site, a product must meet these criteria:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>At least one peer-reviewed human study</strong> — published in a recognized
                journal, not just a preprint or press release.
              </li>
              <li>
                <strong>A plausible, well-described mechanism of action</strong> — we need to understand
                why it should work, not just that it correlated with something in a study.
              </li>
              <li>
                <strong>Acceptable safety profile</strong> — based on published data, not manufacturer
                claims. We note any gaps in long-term safety data.
              </li>
            </ol>
            <p>
              Products that only have animal studies or in vitro data are mentioned in our Learn section
              for educational purposes but are not recommended for purchase.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Evidence Rating System</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/20">
              <h3 className="font-semibold text-emerald-800 dark:text-emerald-300">Strong Evidence</h3>
              <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-400">
                Multiple RCTs or large meta-analyses. Consistent results across independent groups.
                Examples: Vitamin D, Omega-3, Creatine.
              </p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/20">
              <h3 className="font-semibold text-amber-800 dark:text-amber-300">Moderate Evidence</h3>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-400">
                At least one well-designed human study. Mechanism is well-understood.
                Awaiting larger or longer-term trials. Examples: NMN, CoQ10, Collagen, Red Light Therapy.
              </p>
            </div>
            <div className="rounded-lg border border-violet-200 bg-violet-50 p-4 dark:border-violet-800 dark:bg-violet-950/20">
              <h3 className="font-semibold text-violet-800 dark:text-violet-300">Emerging Evidence</h3>
              <p className="mt-1 text-sm text-violet-700 dark:text-violet-400">
                Compelling mechanism with peer-reviewed support. Human data exists but is limited to
                small or preliminary trials. We include with full transparency. Examples: Fisetin, PQQ, PEMF.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Conflicts of Interest & Transparency</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
            <p>
              <strong>We earn affiliate commissions</strong> when you purchase products through our links.
              This is how we fund the site. However:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Affiliate relationships never influence our evidence ratings.</li>
              <li>We will recommend not buying a product if the evidence doesn&apos;t support it, even if we&apos;d earn a commission.</li>
              <li>Products affiliated with David Sinclair or other prominent figures are labeled and their conflicts of interest are disclosed.</li>
              <li>We do not accept payment for product placement or favorable reviews.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Medical Disclaimer</h2>
          <div className="mt-4 rounded-lg border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              This website provides educational content and curated product recommendations based on
              published scientific research. We are not medical professionals, and nothing on this site
              constitutes medical advice. The products discussed are not intended to diagnose, treat,
              cure, or prevent any disease. Always consult a qualified healthcare provider before
              starting any new supplement, device, or health protocol — especially if you have existing
              medical conditions or take medications.
            </p>
          </div>
        </section>
      </div>
      </div>
    </div>
  );
}
