'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, Cpu, ShieldCheck } from 'lucide-react';

export function PremiumLockHero() {
  // Constant High-Intensity Glint system
  const glints = Array.from({ length: 20 });

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#020203] py-20 px-6 overflow-hidden">
      {/* 1. Deep Space Environment */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#0A0D14_0%,#020203_100%)]" />
        {/* Sub-pixel Grid for "Scale" */}
        <div className="absolute inset-0 opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] bg-[grid:30px_30px] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Freestanding Lock with High-Visibility Sparkles */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center">
              
              {/* HIGH VISIBILITY PARTICLE FIELD */}
              {glints.map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [0, 1, 0.5, 0], 
                    opacity: [0, 1, 0.8, 0],
                    x: Math.cos(i * 45) * (140 + Math.random() * 40), 
                    y: Math.sin(i * 45) * (140 + Math.random() * 40) 
                  }}
                  transition={{ 
                    duration: 4 + Math.random() * 3, 
                    repeat: Infinity, 
                    delay: i * 0.3,
                    ease: "easeInOut" 
                  }}
                  className="absolute pointer-events-none"
                >
                  {/* The Flare: Core + Glow */}
                  <div className="relative">
                    <div className="w-[3px] h-[3px] bg-white rounded-full shadow-[0_0_12px_4px_#22d3ee]" />
                    <div className="absolute inset-[-4px] bg-cyan-400/20 blur-sm rounded-full" />
                  </div>
                </motion.div>
              ))}

              {/* The Lock Object */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                {/* 3D Shackle (Hardened Steel look) */}
                <div className="absolute top-6 w-32 h-44 border-[12px] border-[#16181D] rounded-t-[3.5rem] shadow-[inset_-2px_4px_10px_rgba(255,255,255,0.05)]">
                  {/* Top Rim Light */}
                  <div className="absolute inset-0 border-t-2 border-white/10 rounded-t-[3.5rem]" />
                </div>

                {/* Main Chassis: Anisotropic Metal */}
                <div className="relative w-52 h-44 bg-gradient-to-br from-[#1E2229] via-[#0E1014] to-[#040506] rounded-[2rem] shadow-[0_60px_100px_-20px_rgba(0,0,0,1)] border border-white/5 flex items-center justify-center overflow-hidden">
                  
                  {/* Subtle Shimmer across the face */}
                  <motion.div 
                    animate={{ x: [-200, 400] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -skew-x-12"
                  />

                  {/* High-Precision Core */}
                  <div className="w-28 h-28 rounded-full bg-[#07080A] shadow-[inset_0_4px_30px_rgba(0,0,0,1)] border border-white/5 flex items-center justify-center relative group">
                    
                    {/* Pulsing Core Aura */}
                    <div className="absolute inset-0 bg-cyan-500/10 blur-xl animate-pulse" />
                    
                    {/* Kinetic Ring */}
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-1 border border-t-cyan-400/60 border-transparent rounded-full" 
                    />

                    <Lock className="w-9 h-9 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]" />

                    {/* Digital Scan line */}
                    <motion.div 
                      animate={{ y: [-30, 30] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-x-6 h-[1px] bg-cyan-400/40 shadow-[0_0_10px_#22d3ee]"
                    />
                  </div>

                  {/* Hardware Labels */}
                  <div className="absolute bottom-3 flex gap-4 opacity-40">
                     <span className="text-[6px] font-black text-white uppercase tracking-[0.3em]">Enc_Active</span>
                     <span className="text-[6px] font-black text-cyan-500 uppercase tracking-[0.3em]">Node_72</span>
                  </div>
                </div>

                {/* Ground Reflection Shadow */}
                <div className="absolute -bottom-10 w-44 h-8 bg-cyan-500/5 blur-3xl rounded-full" />
              </div>
            </div>
          </div>

          {/* RIGHT: High-Density Elite Content */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-[1px] bg-cyan-500/50" />
                <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em]">Secure Protocol v4.0</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tighter">
                WE ENGINEER <br />
                <span className="text-white/20 font-medium italic">ELITE GRADE</span> <br />
                <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">CYBER DEFENSE.</span>
              </h1>

              <p className="text-sm text-slate-500 leading-relaxed max-w-md font-medium">
                25+ Years of tactical engineering for 200+ global enterprises. We protect the digital infrastructure India's largest corporations rely on.
              </p>
            </div>

            {/* Industrial Data Bar */}
            <div className="flex gap-12 border-t border-white/[0.03] pt-8">
              {[
                { label: 'Enterprises', value: '200+', icon: <ShieldCheck className="w-3 h-3" /> },
                { label: 'Tactical Exp', value: '25+ Yrs', icon: null },
                { label: 'Uptime SLA', value: '99.9%', icon: null }
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-2xl font-black text-white tracking-tighter">{item.value}</p>
                  <p className="text-[9px] text-slate-600 uppercase font-black tracking-widest">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Action Set */}
            <div className="flex items-center gap-8 pt-4">
              <button className="px-10 py-4 bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-sm hover:bg-cyan-400 hover:text-white transition-all shadow-2xl">
                Initialize Audit
              </button>
              <div className="flex items-center gap-2 group cursor-pointer opacity-40 hover:opacity-100 transition-all">
                <span className="text-[9px] font-black uppercase tracking-widest text-white">Full Stack Specs</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}