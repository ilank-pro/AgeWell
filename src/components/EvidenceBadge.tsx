"use client";

import { motion } from "framer-motion";
import type { EvidenceLevel } from "@/data/products";

const config: Record<EvidenceLevel, { glow: string; text: string; label: string; bg: string }> = {
  Strong: {
    glow: "shadow-[0_0_15px_rgba(16,185,129,0.4)]",
    bg: "bg-emerald-500/20",
    text: "text-emerald-300",
    label: "Strong Evidence",
  },
  Moderate: {
    glow: "shadow-[0_0_15px_rgba(245,158,11,0.4)]",
    bg: "bg-amber-500/20",
    text: "text-amber-300",
    label: "Moderate Evidence",
  },
  Emerging: {
    glow: "shadow-[0_0_15px_rgba(139,92,246,0.4)]",
    bg: "bg-violet-500/20",
    text: "text-violet-300",
    label: "Emerging Evidence",
  },
};

export default function EvidenceBadge({ level }: { level: EvidenceLevel }) {
  const c = config[level];
  return (
    <motion.span 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`relative inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${c.bg} ${c.text} ${c.glow} glass`}
    >
      <motion.span 
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]" 
      />
      {c.label}
    </motion.span>
  );
}
