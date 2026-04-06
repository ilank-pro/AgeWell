"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Product } from "@/data/products";
import EvidenceBadge from "./EvidenceBadge";
import { SupplementIcon, FoodIcon, DeviceIcon, BioelectricIcon } from "./icons/CategoryIcons";

function getCategoryIcon(product: Product) {
  if (product.subcategory === "bioelectric") return <BioelectricIcon className="h-6 w-6" />;
  if (product.category === "devices") return <DeviceIcon className="h-6 w-6" />;
  if (product.category === "food") return <FoodIcon className="h-6 w-6" />;
  return <SupplementIcon className="h-6 w-6" />;
}

export default function ProductCard({ product }: { product: Product }) {
  const isDevices = product.category === "devices";
  const href = `/${isDevices ? "devices" : product.tier === "Essentials" ? "essentials" : "advanced"}/${product.slug}`;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={href}
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-2xl transition-all hover:border-emerald-500/50"
      >
        {/* Subtle background glow on hover */}
        <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 ring-1 ring-white/10 group-hover:ring-emerald-500/30 transition-all">
              {getCategoryIcon(product)}
            </div>
            <div>
               <h3 className="text-sm font-black uppercase tracking-[0.1em] text-white group-hover:text-emerald-400 transition-colors">
                {product.name}
              </h3>
              <div className="mt-1.5 flex items-center gap-2">
                 <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Status:</span>
                 <span className="text-[10px] font-black text-emerald-400 uppercase">Active</span>
              </div>
            </div>
          </div>
          {product.sinclairAffiliated && (
            <span className="shrink-0 rounded-md border border-sky-500/20 bg-sky-500/5 px-2 py-0.5 text-[9px] font-black uppercase tracking-tighter text-sky-400">
              L. Sinclair
            </span>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <EvidenceBadge level={product.evidenceLevel} />
          <span className="rounded-full border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-zinc-500 shadow-inner">
            {product.tier}
          </span>
        </div>

        <div className="mt-6 space-y-3">
          <p className="line-clamp-2 text-xs leading-relaxed text-zinc-300">
            {product.description}
          </p>
          
          {/* Mock data indicators for the Ledger look */}
          <div className="grid grid-cols-2 gap-2 pt-2">
             <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  className="h-full bg-emerald-500/40" 
                />
             </div>
             <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  className="h-full bg-sky-500/40" 
                />
             </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400/70 group-hover:text-emerald-400 transition-colors">
            Access Research
          </span>
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
        </div>
      </Link>
    </motion.div>
  );
}
