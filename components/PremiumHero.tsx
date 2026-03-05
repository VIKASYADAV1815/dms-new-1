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
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white selection:bg-cyan-500/30"
    >
      {/* Darker Dot Grid with Fade Out */}
      <div className="absolute inset-0 dot-grid-zinc pointer-events-none [mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)] z-10" />

      {/* --- BACKGROUND ENGINE --- */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ scale: imageScale, opacity: imageOpacity }} 
          className="relative w-full h-full"
        >
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=900&fit=crop')] bg-cover bg-center origin-center"
          />
          {/* Layered vignette for depth */}
          <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-white opacity-20" />
          <div className="absolute inset-0 bg-cyan-900/5" /> {/* Added a very subtle cyan tint instead of heavy white */}
        </motion.div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="container relative z-20 px-6 mx-auto pt-20"
      >
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Compact Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 backdrop-blur-xl mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 animate-pulse" />
            <span className="text-[9px] font-black tracking-[0.3em] text-slate-900/60 uppercase">
              🔒 Enterprise Security Solutions
            </span>
          </motion.div>

          {/* Heading: Compact & High-Impact */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-[0.95] mb-6"
          >
            Tactical <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-slate-900 via-slate-800 to-cyan-700">
              Cyber Defense.
            </span>
          </motion.h1>

          {/* Subtext: Tighter width for better readability */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-700 font-bold leading-relaxed mb-10 px-4"
          >
            We engineer impenetrable digital perimeters for the global enterprise. 
            Leveraging AI-driven threat intelligence and zero-trust architecture 
            to protect your most critical infrastructure assets 24/7.
          </motion.p>

          {/* CTAs: Unified size */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group relative w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white text-[10px] font-black rounded-xl transition-all hover:scale-105 active:scale-95 shadow-premium overflow-hidden uppercase tracking-widest">
              <div className="absolute inset-0 btn-dot-pattern opacity-20 group-hover:opacity-30 transition-opacity" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Free Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="group relative w-full sm:w-auto px-8 py-3.5 bg-white border-2 border-slate-900 text-slate-900 text-[10px] font-black rounded-xl transition-all hover:bg-slate-50 active:scale-95 shadow-premium overflow-hidden uppercase tracking-widest">
              <div className="absolute inset-0 btn-dot-pattern opacity-10 group-hover:opacity-20 transition-opacity" />
              <span className="relative z-10">Explore Services</span>
            </button>
          </motion.div>

          {/* Compact Stats */}
          <div className="flex items-center justify-center gap-6 md:gap-12 mt-12 py-6 border-y border-slate-100">
            {[
              { label: "Clients", val: "200+" },
              { label: "Experience", val: "25y+" },
              { label: "Uptime", val: "99.9%" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-base md:text-lg font-bold text-slate-900 tracking-tighter">{stat.val}</div>
                <div className="text-[8px] uppercase tracking-widest text-slate-500 mt-1 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>



      {/* Subtle Scroll Hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 opacity-20">
        <div className="w-px h-10 bg-linear-to-b from-white to-transparent" />
       
      </div>
    </section>
  );
}