"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Activity, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function VitalityFlowHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0.8, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950 text-white">
      {/* High-Fidelity Background Layer with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <img 
          src="/images/vitality-flow.png" 
          alt="Vitality Flow High Fidelity Mockup" 
          className="h-full w-full object-cover scale-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950 opacity-40" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:flex lg:items-center lg:gap-x-12">
        <div className="max-w-2xl lg:flex-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20 glass">
              <Activity className="h-4 w-4" />
              <span>Personalized Human Optimization</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 text-5xl font-extrabold tracking-tight sm:text-8xl"
          >
            Reclaim Your <br />
            <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">
              Vitality.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-xl leading-8 text-zinc-300 max-w-xl"
          >
            Unlock your cellular potential with science-backed biohacking. We combine 
            epigenetic testing with human-grade research to help you optimize your 
            healthspan, not just your lifespan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <Link
              href="/biological-age"
              className="group flex items-center gap-x-2 rounded-full bg-emerald-500 px-10 py-5 text-base font-semibold text-white shadow-2xl transition-all hover:bg-emerald-400 hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/learn"
              className="text-base font-semibold leading-6 text-white hover:text-zinc-300 flex items-center gap-1 group"
            >
              The Science <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 grid grid-cols-3 gap-8 border-t border-white/5 pt-10"
          >
            {[
              { icon: Zap, label: "Cellular Energy" },
              { icon: ShieldCheck, label: "Evidence-Based" },
              { icon: Activity, label: "Data-Driven" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-y-2 text-center sm:items-start sm:text-left">
                <item.icon className="h-6 w-6 text-emerald-400" />
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-[.25em] leading-none">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
