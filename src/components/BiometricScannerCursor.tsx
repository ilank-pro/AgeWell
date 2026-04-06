"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { Dna } from "lucide-react";

export default function BiometricScannerCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const mouseX = useSpring(0, { damping: 20, stiffness: 200 });
  const mouseY = useSpring(0, { damping: 20, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === "pointer");
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* The main scanner ring */}
      <motion.div
        style={{
          left: mouseX,
          top: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed z-[9999] h-12 w-12 rounded-full border border-emerald-500/30 bg-emerald-500/5 mix-blend-overlay hidden lg:block"
        animate={{
          scale: isPointer ? 1.5 : 1,
          borderWidth: isPointer ? "2px" : "1px",
        }}
      >
        {/* The horizontal scanning line */}
        <motion.div 
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-[1px] bg-emerald-400/50"
        />
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.2)]" />
      </motion.div>

      {/* The DNA String trailing element */}
      <motion.div
        style={{
          left: mouseX,
          top: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed z-[9999] text-emerald-400 hidden lg:block"
        animate={{
          rotate: [0, 360],
          scale: isPointer ? 1.2 : 0.8,
        }}
        transition={{
          rotate: { duration: 4, repeat: Infinity, ease: "linear" },
          scale: { duration: 0.2 }
        }}
      >
        <Dna className="h-5 w-5 drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]" />
      </motion.div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          body, a, button {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
