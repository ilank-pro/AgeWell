import Link from "next/link";
import type { Product } from "@/data/products";
import EvidenceBadge from "./EvidenceBadge";
import { SupplementIcon, FoodIcon, DeviceIcon, BioelectricIcon } from "./icons/CategoryIcons";

function getCategoryIcon(product: Product) {
  if (product.subcategory === "bioelectric") return <BioelectricIcon className="h-8 w-8" />;
  if (product.category === "devices") return <DeviceIcon className="h-8 w-8" />;
  if (product.category === "food") return <FoodIcon className="h-8 w-8" />;
  return <SupplementIcon className="h-8 w-8" />;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/${product.category === "devices" ? "devices" : product.tier === "Essentials" ? "essentials" : "advanced"}/${product.slug}`}
      className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="shrink-0">{getCategoryIcon(product)}</div>
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-emerald-600 dark:text-zinc-100 dark:group-hover:text-emerald-400">
              {product.name}
            </h3>
            <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">{product.tagline}</p>
          </div>
        </div>
        {product.sinclairAffiliated && (
          <span className="shrink-0 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
            Sinclair
          </span>
        )}
      </div>
      <div className="mt-4 flex items-center gap-2">
        <EvidenceBadge level={product.evidenceLevel} />
        <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
          {product.tier}
        </span>
      </div>
      <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
        {product.description}
      </p>
      <div className="mt-auto pt-4">
        <span className="text-sm font-medium text-emerald-600 group-hover:text-emerald-500 dark:text-emerald-400">
          View research & products →
        </span>
      </div>
    </Link>
  );
}
