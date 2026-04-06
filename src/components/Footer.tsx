import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {/* Logo + tagline */}
        <div className="mb-10 flex flex-col items-center text-center">
          <Image
            src="/images/agewell_logo_var_luxury_1775435303123_1775472294691.png"
            alt="AgeWell"
            width={64}
            height={64}
            className="rounded-xl"
          />
          <p className="mt-3 text-sm font-semibold tracking-widest uppercase text-amber-400/80">
            Empowering AgeLife
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-zinc-100">Products</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/essentials" className="text-sm text-zinc-400 hover:text-zinc-200">Essentials</Link></li>
              <li><Link href="/advanced" className="text-sm text-zinc-400 hover:text-zinc-200">Advanced</Link></li>
              <li><Link href="/devices" className="text-sm text-zinc-400 hover:text-zinc-200">Devices</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-100">Science</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/biological-age" className="text-sm text-zinc-400 hover:text-zinc-200">Biological Age Testing</Link></li>
              <li><Link href="/learn" className="text-sm text-zinc-400 hover:text-zinc-200">Learn</Link></li>
              <li><Link href="/protocols" className="text-sm text-zinc-400 hover:text-zinc-200">Protocols</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-100">Company</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/about" className="text-sm text-zinc-400 hover:text-zinc-200">About & Methodology</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-100">Disclaimer</h3>
            <p className="mt-3 text-xs leading-5 text-zinc-500">
              This site provides educational content and curated product recommendations. We are not medical professionals.
              Products are not intended to diagnose, treat, cure, or prevent any disease. Always consult a healthcare provider
              before starting any supplement or device regimen. We earn affiliate commissions on qualifying purchases —
              this does not influence our evidence ratings.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-800 pt-6">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} AgeWell. All product recommendations are based on peer-reviewed research.
            Evidence ratings reflect published human studies as of our last review.
          </p>
        </div>
      </div>
    </footer>
  );
}
