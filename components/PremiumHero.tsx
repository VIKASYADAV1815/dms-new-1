'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Shield, Zap, CheckCircle2 } from 'lucide-react';

export function PremiumHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 40, damping: 25 };
  const imageScale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.1]), springConfig);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#FAFAFA]"
    >
      {/* --- PREMIUM BACKGROUND ENGINE --- */}
      {/* The image is pushed to the background, highly colored, but masked so the center is perfectly clean */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ scale: imageScale, y: imageY }} 
          className="relative w-full h-full"
        >
          {/* Visible, colored image */}
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=900&fit=crop')] bg-cover bg-center saturate-[1.4] contrast-125 opacity-60"
          />
          {/* The "Spotlight" Mask: Pure white in the center, fading to transparent at the edges */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(250,250,250,1)_20%,_rgba(250,250,250,0.85)_50%,_rgba(250,250,250,0)_100%)]" />
        </motion.div>
      </div>

      {/* --- COMPACT, HIGH-CONVERTING UI --- */}
      <div className="container relative z-10 px-4 mx-auto flex flex-col items-center justify-center py-12 sm:py-0">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto flex flex-col items-center text-center w-full"
        >
          {/* High-End Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6 sm:mb-8">
            <Shield className="w-3.5 h-3.5 text-cyan-600" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-wide text-slate-700 uppercase">
              Enterprise Security V2.0
            </span>
          </div>

          {/* Compact, Powerful Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] sm:leading-[1.05] mb-6">
            Tactical defense for <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              critical infrastructure.
            </span>
          </h1>

          {/* Focused Subheadline */}
          <p className="max-w-xl text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-8 sm:mb-10 px-4 sm:px-0">
            Military-grade encryption and autonomous threat mitigation. Protect your global digital assets with zero-latency AI response.
          </p>

          {/* High-Conversion CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-slate-900 text-white text-xs sm:text-sm font-bold rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(8,145,178,0.3)] hover:bg-cyan-600 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group uppercase tracking-widest">
              Deploy Protection 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-slate-900 text-xs sm:text-sm font-bold rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 transition-all active:scale-[0.98] uppercase tracking-widest">
              Book a Demo
            </button>
          </div>

          {/* Compact Trust Metrics Strip */}
          <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-slate-200/60 w-full max-w-2xl flex flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-6">
            {[
              { icon: Zap, text: "< 10ms Latency" },
              { icon: CheckCircle2, text: "99.99% Uptime SLA" },
              { icon: Shield, text: "SOC2 Type II Certified" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className="w-3.5 h-3.5 sm:w-4 h-4 text-cyan-600" />
                <span className="text-[10px] sm:text-xs font-semibold text-slate-600">{item.text}</span>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}