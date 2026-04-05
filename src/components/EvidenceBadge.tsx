import type { EvidenceLevel } from "@/data/products";

const config: Record<EvidenceLevel, { bg: string; text: string; label: string }> = {
  Strong: {
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    text: "text-emerald-700 dark:text-emerald-400",
    label: "Strong Evidence",
  },
  Moderate: {
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-700 dark:text-amber-400",
    label: "Moderate Evidence",
  },
  Emerging: {
    bg: "bg-violet-100 dark:bg-violet-900/30",
    text: "text-violet-700 dark:text-violet-400",
    label: "Emerging Evidence",
  },
};

export default function EvidenceBadge({ level }: { level: EvidenceLevel }) {
  const c = config[level];
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${c.bg} ${c.text}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {c.label}
    </span>
  );
}
