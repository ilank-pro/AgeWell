import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mitochondria, ATP, and the Energy Theory of Aging — AgeWell",
  description: "How mitochondrial dysfunction drives aging, the role of membrane potential in ATP production, and what actually works to improve mitochondrial function.",
};

export default function MitochondriaArticle() {
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
          <span className="text-xs text-zinc-400">14 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Mitochondria, ATP, and the Energy Theory of Aging
        </h1>
        <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
          Your cells contain thousands of mitochondria, each generating ATP through an electrical
          process remarkably similar to a battery. When this system degrades, aging accelerates.
          Here&apos;s what actually works to protect it.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">The Mitochondria as Battery</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            Each mitochondrion maintains an electrical potential of approximately <strong>-180 millivolts</strong>{" "}
            across its inner membrane — a voltage gradient steeper, relative to its size, than a lightning bolt.
            This membrane potential is the driving force for ATP synthesis, the universal energy currency of life.
          </p>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            The process works like a hydroelectric dam: the electron transport chain (Complexes I-IV) pumps
            protons (H+) from the matrix to the intermembrane space, creating an electrochemical gradient.
            Protons then flow back through ATP synthase — a molecular turbine that literally rotates to
            assemble ATP from ADP + phosphate. A single cell can produce ~10 billion ATP molecules per second.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">The Electron Transport Chain: Where Your Products Work</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            Understanding which complex a product targets helps evaluate its mechanism:
          </p>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Complex I & II → Complex III</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                <Link href="/essentials/coq10" className="text-emerald-600 hover:underline dark:text-emerald-400">CoQ10 (Ubiquinol)</Link>{" "}
                shuttles electrons between these complexes. It&apos;s literally a component of the electron
                transport chain, making it one of the most mechanistically direct mitochondrial supplements.
                CoQ10 levels decline with age and with statin use.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Complex IV (Cytochrome c Oxidase)</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                This is where{" "}
                <Link href="/devices/red-light-therapy" className="text-emerald-600 hover:underline dark:text-emerald-400">red/near-infrared light therapy</Link>{" "}
                acts. Photons at 630-850nm are absorbed by cytochrome c oxidase, dissociating inhibitory
                nitric oxide (NO) and increasing electron flow. This is one of the best-understood
                device mechanisms in our catalog — it&apos;s not &quot;charging your cells&quot; in some vague way,
                it&apos;s specifically unblocking Complex IV.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">ATP Synthase → ATP → ADP Recycling</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                <Link href="/essentials/creatine" className="text-emerald-600 hover:underline dark:text-emerald-400">Creatine</Link>{" "}
                works downstream of the mitochondria: it donates a phosphate group to recycle ADP back
                to ATP without requiring mitochondrial oxidative phosphorylation. This is especially
                important in high-energy tissues (muscle, brain) and during bursts of energy demand.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Mitochondrial Quality Control: The Cleanup Crew</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            ATP production is only half the story. Equally important is mitochondrial quality control —
            the processes that remove damaged mitochondria and grow new ones:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Mitophagy</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Selective autophagy of damaged mitochondria. When a mitochondrion loses its membrane
                potential, PINK1 accumulates on its surface and recruits Parkin, tagging it for
                destruction.{" "}
                <Link href="/advanced/urolithin-a" className="text-emerald-600 hover:underline dark:text-emerald-400">Urolithin A</Link>{" "}
                activates this PINK1/Parkin pathway.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Biogenesis</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Growing new mitochondria, primarily controlled by PGC-1alpha (the &quot;master regulator&quot;).
                Exercise is the most powerful PGC-1alpha activator.{" "}
                <Link href="/advanced/pqq" className="text-emerald-600 hover:underline dark:text-emerald-400">PQQ</Link>{" "}
                activates it through CREB signaling, though the human evidence is limited.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">How Mitochondria Decline With Age</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            Multiple things go wrong simultaneously:
          </p>
          <ul className="mt-3 space-y-3 text-zinc-600 dark:text-zinc-300">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span><strong>Membrane potential drops:</strong> The -180mV gradient weakens, reducing the driving force for ATP synthesis. Cells produce less energy.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span><strong>ROS increase:</strong> Damaged electron transport chains &quot;leak&quot; electrons, generating reactive oxygen species that further damage mtDNA, membranes, and proteins.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span><strong>mtDNA mutations accumulate:</strong> Mitochondrial DNA lacks histones and has limited repair mechanisms, making it ~10x more susceptible to mutations than nuclear DNA.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span><strong>NAD+ declines:</strong> Less NAD+ means slower electron transport (less NADH to donate electrons at Complex I) and impaired sirtuin-mediated repair.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span><strong>Mitophagy slows:</strong> The cleanup crew becomes less efficient, allowing damaged mitochondria to persist and generate more ROS in a vicious cycle.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">The &quot;Cell Voltage&quot; Marketing Problem</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
            You&apos;ll see many products marketed as &quot;increasing your cell voltage&quot; or &quot;charging your
            cellular battery.&quot; Let&apos;s be precise about what this means — and doesn&apos;t mean:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/20">
              <h3 className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">Scientifically Accurate</h3>
              <ul className="mt-2 space-y-1 text-sm text-emerald-700 dark:text-emerald-400">
                <li>Mitochondrial membrane potential is a real voltage (-180mV)</li>
                <li>This voltage drives ATP production</li>
                <li>Declining membrane potential correlates with aging</li>
                <li>Some interventions can support mitochondrial function</li>
              </ul>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/20">
              <h3 className="text-sm font-semibold text-red-800 dark:text-red-300">Marketing Distortion</h3>
              <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-400">
                <li>External electrical devices &quot;charge your cells&quot; like a battery</li>
                <li>You can measure your &quot;body voltage&quot; with a multimeter</li>
                <li>Alkaline water raises cellular pH/voltage</li>
                <li>&quot;Frequency healing&quot; tunes your cells to optimal vibration</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            The distinction matters: mitochondrial membrane potential is generated <em>internally</em> by
            the electron transport chain, not by applying external electricity. You can support the chain
            (CoQ10, NAD+ precursors, red light) or improve cleanup (urolithin A, exercise), but you
            can&apos;t plug in and recharge like a phone.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What Actually Works: Ranked by Evidence</h2>
          <div className="mt-4 space-y-3">
            <div className="flex gap-4 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">1</div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Exercise (HIIT + Resistance)</h3>
                  <span className="rounded-full px-2 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">Very Strong</span>
                </div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">The single most powerful mitochondrial intervention. A 2017 Mayo Clinic study showed HIIT reversed age-related decline in mitochondrial capacity in older adults. Free.</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">2</div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">CoQ10 / Ubiquinol</h3>
                  <span className="rounded-full px-2 py-0.5 text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Moderate</span>
                </div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Direct ETC component. Most relevant for statin users and those over 50. Well-studied safety profile.</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">3</div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Creatine</h3>
                  <span className="rounded-full px-2 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">Strong</span>
                </div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">ATP recycling, not mitochondrial per se, but practically important for energy-demanding tissues. Decades of safety data.</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">4</div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Red/NIR Light Therapy</h3>
                  <span className="rounded-full px-2 py-0.5 text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Moderate</span>
                </div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Well-understood mechanism (Complex IV). Evidence strongest for skin and wound healing. Systemic anti-aging effects less established.</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">5</div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">NMN / NR</h3>
                  <span className="rounded-full px-2 py-0.5 text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Moderate</span>
                </div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Fuels the ETC via NADH production. Raises NAD+ reliably. Functional outcomes in humans still being established.</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">6</div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Urolithin A (Mitopure)</h3>
                  <span className="rounded-full px-2 py-0.5 text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Moderate</span>
                </div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Targets mitophagy (cleanup), not production directly. Published RCTs from the manufacturer.</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">7</div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">PQQ</h3>
                  <span className="rounded-full px-2 py-0.5 text-xs font-medium bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">Emerging</span>
                </div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Biogenesis activator (new mitochondria). Small human studies only. Mechanism is compelling but evidence is thin.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-lg border-l-4 border-amber-400 bg-amber-50 p-5 dark:border-amber-500 dark:bg-amber-950/20">
          <h2 className="text-lg font-semibold text-amber-800 dark:text-amber-300">The Bottom Line</h2>
          <p className="mt-2 leading-relaxed text-amber-900/80 dark:text-amber-200/80">
            Mitochondrial dysfunction is one of the most targetable hallmarks of aging — and one of
            the few where consumer products have plausible, well-described mechanisms. But the hierarchy
            is clear: exercise first (it targets biogenesis, mitophagy, and membrane potential
            simultaneously), then consider supplements that support specific parts of the system.
            Be skeptical of anything claiming to &quot;charge your cells&quot; from the outside — the electricity
            that matters is generated internally, by the remarkable molecular machinery you already have.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Key Sources</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
            <li>
              Nair KS, et al. &quot;Enhanced protein translation underlies improved metabolic and physical adaptations to different exercise training modes in young and old humans.&quot; <em>Cell Metabolism</em>, 2017.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/28273480/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline dark:text-emerald-400">PubMed</a>
            </li>
            <li>
              Nicholls DG, Ferguson SJ. <em>Bioenergetics 4.</em> Academic Press, 2013.
            </li>
            <li>
              Sun N, Bhagavat RJ, Bhatt AS. &quot;Aging and mitochondria.&quot; <em>Frontiers in Aging</em>, 2021.
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
