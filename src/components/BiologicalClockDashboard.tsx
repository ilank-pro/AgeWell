"use client";

import { motion } from "framer-motion";
import { Dna, Activity, ArrowDownCircle, RefreshCw, BarChart3 } from "lucide-react";

export default function BiologicalClockDashboard() {
  const bioAge = 34.5;
  const actualAge = 42;

  return (
    <section className="bg-zinc-950 text-white overflow-hidden py-16 sm:py-24 relative min-h-screen flex items-center">
      {/* High-Fidelity Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60">
        <img 
          src="/images/biological-clock.png" 
          alt="Biological Clock High Fidelity Mockup" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950 opacity-80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          
          {/* Dashboard Left: Controls & Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-400 ring-1 ring-inset ring-emerald-500/20 glass"
            >
              <Activity className="h-4 w-4" />
              <span>Diagnostic Dashboard v1.4</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-5xl font-extrabold tracking-tight sm:text-7xl"
            >
              The <span className="text-emerald-400">Biological</span> <br />
              Precision Clock
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-xl leading-8 text-zinc-300"
            >
              Epigenetic clocks represent the golden standard of human aging measurement. 
              By analyzing 850,000+ methylation sites, we can determine your bodies 
              true cellular age with unrivaled accuracy.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 grid grid-cols-2 gap-4 max-w-lg"
            >
              {[
                { label: "DunedinPACE", value: "0.82/yr", color: "text-emerald-400" },
                { label: "GrimAge", value: "33.1 yrs", color: "text-emerald-400" },
                { label: "DNAm PhenoAge", value: "35.8 yrs", color: "text-emerald-400" },
                { label: "Telomere Length", value: "6.8 kb", color: "text-emerald-400" },
              ].map((stat) => (
                <div key={stat.label} className="glass p-5 rounded-2xl border border-white/5">
                  <span className="text-xs uppercase tracking-[0.25em] text-zinc-500 block mb-2 font-bold">{stat.label}</span>
                  <span className={`text-2xl font-black ${stat.color}`}>{stat.value}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dashboard Right: Radial Age Meter */}
          <div className="mt-16 lg:mt-0 relative flex justify-center">
            {/* Main Clock Component */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring" }}
              className="relative z-10 glass h-80 w-80 sm:h-[450px] sm:w-[450px] rounded-full flex flex-col items-center justify-center shadow-[0_0_80px_rgba(16,185,129,0.2)] ring-1 ring-white/10"
            >
              {/* Radial Progress SVG */}
              <svg className="absolute inset-0 h-full w-full rotate-[-90deg]">
                <circle
                  cx="50%"
                  cy="50%"
                  r="42%"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="12"
                  className="text-white/5"
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="42%"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="12"
                  strokeDasharray="264%"
                  initial={{ strokeDashoffset: "264%" }}
                  whileInView={{ strokeDashoffset: "110%" }} 
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
                  className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.6)]"
                />
              </svg>

              {/* Data Content */}
              <div className="text-center z-20">
                <span className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-500">Biological Age</span>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="text-8xl sm:text-[10rem] font-black text-emerald-400 leading-none mt-2"
                >
                  {bioAge}
                </motion.div>
                <div className="mt-6 flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-black border border-emerald-500/20 glass">
                  <ArrowDownCircle className="h-4 w-4" />
                  {actualAge - bioAge} YEARS YOUNGER
                </div>
              </div>

              {/* Chronological Label */}
              <div className="absolute bottom-12 text-center text-xs text-zinc-500 font-bold tracking-[0.2em] uppercase">
                CHRONO: {actualAge}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
