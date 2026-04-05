import type { Product } from "@/data/products";
import EvidenceBadge from "./EvidenceBadge";

export default function ProductPage({ product }: { product: Product }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <EvidenceBadge level={product.evidenceLevel} />
          <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            {product.tier}
          </span>
          <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            {product.category}
          </span>
          {product.sinclairAffiliated && (
            <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              Sinclair-Affiliated
            </span>
          )}
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          {product.name}
        </h1>
        <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">{product.tagline}</p>
      </div>

      {/* What it is */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">What It Is</h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-300">{product.description}</p>
      </section>

      {/* How it works */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">How It Works</h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-300">{product.mechanism}</p>
      </section>

      {/* The Science */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">The Science</h2>
        <div className="space-y-4">
          {product.studies.map((study, i) => (
            <div key={i} className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{study.title}</h3>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {study.journal} ({study.year})
                {study.pubmedId && (
                  <>
                    {" "}
                    &middot;{" "}
                    <a
                      href={`https://pubmed.ncbi.nlm.nih.gov/${study.pubmedId}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:underline dark:text-emerald-400"
                    >
                      PubMed
                    </a>
                  </>
                )}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{study.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dosage & Safety */}
      <section className="mb-8 grid gap-6 sm:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Dosage</h2>
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-300">{product.dosage}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Safety</h2>
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-300">{product.safety}</p>
        </div>
      </section>

      {/* Skeptic's Corner */}
      <section className="mb-8">
        <div className="rounded-lg border-l-4 border-amber-400 bg-amber-50 p-5 dark:border-amber-500 dark:bg-amber-950/20">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-amber-800 dark:text-amber-300">
            Skeptic&apos;s Corner
          </h2>
          <p className="mt-2 leading-relaxed text-amber-900/80 dark:text-amber-200/80">{product.skepticsCorner}</p>
        </div>
      </section>

      {/* Our Picks */}
      <section>
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Our Picks</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {product.affiliateLinks.map((link) => (
            <a
              key={link.brand}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white px-4 py-3 transition-colors hover:border-emerald-300 hover:bg-emerald-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-700 dark:hover:bg-emerald-950/20"
            >
              <span className="font-medium text-zinc-900 dark:text-zinc-100">{link.brand}</span>
              <span className="text-sm text-emerald-600 dark:text-emerald-400">View →</span>
            </a>
          ))}
        </div>
        <p className="mt-3 text-xs text-zinc-400">
          Affiliate disclosure: We earn a commission on qualifying purchases. This does not influence our evidence ratings or editorial content.
        </p>
      </section>
    </article>
  );
}
