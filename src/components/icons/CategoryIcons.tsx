const iconClass = "h-full w-full";

export function SupplementIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="4" width="16" height="40" rx="8" className="fill-emerald-100 dark:fill-emerald-900/40" />
      <rect x="16" y="4" width="16" height="40" rx="8" className="stroke-emerald-500 dark:stroke-emerald-400" strokeWidth="2" />
      <line x1="16" y1="24" x2="32" y2="24" className="stroke-emerald-500 dark:stroke-emerald-400" strokeWidth="2" />
      <circle cx="24" cy="14" r="2" className="fill-emerald-500 dark:fill-emerald-400" />
      <circle cx="24" cy="34" r="2" className="fill-emerald-400 dark:fill-emerald-500" />
    </svg>
  );
}

export function FoodIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="24" cy="30" rx="16" ry="10" className="fill-green-100 dark:fill-green-900/40" />
      <ellipse cx="24" cy="30" rx="16" ry="10" className="stroke-green-500 dark:stroke-green-400" strokeWidth="2" />
      <path d="M20 18C20 14 22 10 24 8C26 10 28 14 28 18" className="stroke-green-500 dark:stroke-green-400" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 22C14 20 14 16 16 14" className="stroke-green-400 dark:stroke-green-500" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M32 22C34 20 34 16 32 14" className="stroke-green-400 dark:stroke-green-500" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DeviceIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="32" height="24" rx="4" className="fill-blue-100 dark:fill-blue-900/40" />
      <rect x="8" y="12" width="32" height="24" rx="4" className="stroke-blue-500 dark:stroke-blue-400" strokeWidth="2" />
      <path d="M18 24L22 20L26 28L30 24" className="stroke-blue-500 dark:stroke-blue-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="36" cy="16" r="2" className="fill-red-400" />
    </svg>
  );
}

export function BioelectricIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="16" className="fill-violet-100 dark:fill-violet-900/40" />
      <circle cx="24" cy="24" r="16" className="stroke-violet-500 dark:stroke-violet-400" strokeWidth="2" />
      <path d="M24 12L20 24H28L24 36" className="stroke-violet-500 dark:stroke-violet-400" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DNAIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4C16 4 32 12 32 24C32 36 16 44 16 44" className="stroke-emerald-500 dark:stroke-emerald-400" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 4C32 4 16 12 16 24C16 36 32 44 32 44" className="stroke-emerald-400 dark:stroke-emerald-500" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="12" x2="30" y2="12" className="stroke-emerald-300 dark:stroke-emerald-600" strokeWidth="1.5" />
      <line x1="16" y1="20" x2="32" y2="20" className="stroke-emerald-300 dark:stroke-emerald-600" strokeWidth="1.5" />
      <line x1="16" y1="28" x2="32" y2="28" className="stroke-emerald-300 dark:stroke-emerald-600" strokeWidth="1.5" />
      <line x1="18" y1="36" x2="30" y2="36" className="stroke-emerald-300 dark:stroke-emerald-600" strokeWidth="1.5" />
    </svg>
  );
}

export function MitoIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="24" cy="24" rx="18" ry="12" className="fill-amber-100 dark:fill-amber-900/40" />
      <ellipse cx="24" cy="24" rx="18" ry="12" className="stroke-amber-500 dark:stroke-amber-400" strokeWidth="2" />
      <path d="M10 20C14 26 18 18 22 24C26 30 30 22 38 24" className="stroke-amber-500 dark:stroke-amber-400" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 28C16 22 20 30 24 24C28 18 34 26 36 22" className="stroke-amber-400 dark:stroke-amber-500" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function TestTubeIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 4V32C18 38 22 42 28 42C34 42 38 38 38 32V4" className="fill-cyan-100 dark:fill-cyan-900/40" />
      <path d="M18 4V32C18 38 22 42 28 42C34 42 38 38 38 32V4" className="stroke-cyan-500 dark:stroke-cyan-400" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="4" x2="42" y2="4" className="stroke-cyan-500 dark:stroke-cyan-400" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="16" x2="38" y2="16" className="stroke-cyan-300 dark:stroke-cyan-600" strokeWidth="1.5" />
      <circle cx="25" cy="30" r="3" className="fill-cyan-400 dark:fill-cyan-500" opacity="0.6" />
      <circle cx="32" cy="26" r="2" className="fill-cyan-300 dark:fill-cyan-600" opacity="0.6" />
    </svg>
  );
}
