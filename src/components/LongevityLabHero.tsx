"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Beaker, Microscope, TestTube, Dna, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function LongevityLabHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0.6, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white">
      {/* High-Fidelity Background Layer with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 dark:opacity-60"
      >
        <img 
          src="/images/longevity-lab.png" 
          alt="Longevity Lab High Fidelity Mockup" 
          className="h-full w-full object-cover scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white dark:from-zinc-950 dark:to-zinc-950 opacity-40" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-16">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 rounded-full bg-teal-500/10 px-3 py-1 text-sm font-semibold text-teal-600 ring-1 ring-inset ring-teal-500/20 dark:text-teal-400 glass"
          >
            <Microscope className="h-4 w-4" />
            <span>Stanford & Harvard Research Based</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-5xl font-extrabold tracking-tight sm:text-7xl"
          >
            Data-Driven <br />
            <span className="text-teal-600 dark:text-teal-400">Aging Protocols</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-xl leading-8 text-zinc-600 dark:text-zinc-300"
          >
            We eliminate the guesswork from longevity. Every molecule we recommend is 
            vetted through peer-reviewed human trials and pharmaceutical-grade testing. 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center gap-x-6"
          >
            <Link
              href="/essentials"
              className="rounded-xl bg-zinc-900 px-8 py-4 text-base font-semibold text-white shadow-xl hover:bg-zinc-700 transition-all dark:bg-teal-500 dark:hover:bg-teal-400"
            >
              Explore the Evidence
            </Link>
          </motion.div>
        </div>

        {/* Visual Lab Element - Glassmorphism */}
        <div className="relative mt-16 lg:mt-0">
          <div className="relative mx-auto w-full max-w-md">
            {/* The "Evidence Card" */}
            <motion.div
              initial={{ rotateY: -20, rotateX: 10, y: 20, opacity: 0 }}
              animate={{ rotateY: 0, rotateX: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass p-8 rounded-3xl shadow-2xl relative z-20 overflow-hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="h-10 w-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
                <div className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-full uppercase tracking-tighter">
                  Verified Bioactive
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="h-4 w-1/2 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
                <div className="h-8 w-3/4 bg-zinc-100 dark:bg-zinc-700 rounded-lg" />
                <div className="grid grid-cols-3 gap-2 py-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-20 bg-teal-500/5 rounded-xl flex flex-col items-center justify-center gap-1 border border-teal-500/10">
                       <div className="h-2 w-8 bg-teal-500/20 rounded-full" />
                       <div className="h-3 w-12 bg-teal-500/40 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
