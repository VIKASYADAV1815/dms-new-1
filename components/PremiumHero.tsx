'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function PremiumHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Scroll Intelligence for Zoom
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Zoom-in effect: Subtle and weighted (1.0 to 1.15 is the sweet spot for premium)
  const springConfig = { stiffness: 45, damping: 20, mass: 1.2 };
  const imageScale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.15]), springConfig);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.7], [0.6, 0.2]);
  
  // Content lift parallax
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden bg-[#020306] selection:bg-cyan-500/30"
    >
      {/* --- BACKGROUND ENGINE --- */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ scale: imageScale, opacity: imageOpacity }} 
          className="relative w-full h-full"
        >
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=900&fit=crop')] bg-cover bg-center origin-center grayscale-[30%]"
          />
          {/* Layered vignette for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020306] via-transparent to-[#020306]" />
          <div className="absolute inset-0 bg-[#020306]/40" />
        </motion.div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="container relative z-20 px-6 mx-auto pt-24"
      >
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Compact Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-8"
          >
            <div className="w-1 h-1 rounded-full bg-cyan-400" />
            <span className="text-[9px] font-bold tracking-[0.3em] text-white/40 uppercase">
              🔒 Enterprise Security Solutions
            </span>
          </motion.div>

          {/* Heading: Compact & High-Impact */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-6"
          >
            Your Business <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              Security Matters
            </span>
          </motion.h1>

          {/* Subtext: Tighter width for better readability */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-xl mx-auto text-sm sm:text-base md:text-lg text-slate-400 font-light leading-relaxed mb-10"
          >
            Enterprise-grade cybersecurity solutions protecting your infrastructure 24/7. 
            Trusted by 200+ organizations worldwide for over 25 years.
          </motion.p>

          {/* CTAs: Unified size */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group relative w-full sm:w-auto px-8 py-3.5 bg-white text-black text-sm font-bold rounded-lg transition-all hover:scale-105 active:scale-95 shadow-xl">
              <span className="flex items-center justify-center gap-2">
                Get Free Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="w-full sm:w-auto px-8 py-3.5 bg-white/[0.03] border border-white/10 text-white text-sm font-bold rounded-lg backdrop-blur-md hover:bg-white/[0.08] transition-all">
              Learn Our Services
            </button>
          </motion.div>

          {/* Compact Stats */}
          <div className="flex items-center justify-center gap-8 md:gap-16 mt-16 py-6 border-y border-white/[0.05]">
            {[
              { label: "Clients", val: "200+" },
              { label: "Experience", val: "25y+" },
              { label: "Uptime", val: "99.9%" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-lg md:text-xl font-bold text-white tracking-tighter">{stat.val}</div>
                <div className="text-[9px] uppercase tracking-widest text-slate-500 mt-1 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>



      {/* Subtle Scroll Hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 opacity-20">
        <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent" />
       
      </div>
    </section>
  );
}