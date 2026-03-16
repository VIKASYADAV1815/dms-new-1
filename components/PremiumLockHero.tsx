'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, Cpu, ShieldCheck } from 'lucide-react';

export function PremiumLockHero() {
  // Constant High-Intensity Glint system
  const glints = Array.from({ length: 20 });

  return (
    <section className="relative min-h-[80vh] flex items-center bg-linear-to-b from-white via-cyan-50/10 to-white py-24 px-6 overflow-hidden border-t border-cyan-100">
      {/* Darker Dot Grid with Fade Out */}
      <div className="absolute inset-0 dot-grid-cyan pointer-events-none [mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)]" />

      <div className="mx-auto max-w-7xl relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Freestanding Lock with High-Visibility Sparkles */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-80 aspect-square flex items-center justify-center">
              
              {/* HIGH VISIBILITY PARTICLE FIELD */}
              {glints.map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [0, 1.2, 0.5, 0], 
                    opacity: [0, 1, 0.8, 0],
                    x: Math.cos(i * 45) * (140 + Math.random() * 50), 
                    y: Math.sin(i * 45) * (140 + Math.random() * 50) 
                  }}
                  transition={{ 
                    duration: 3 + Math.random() * 2, 
                    repeat: Infinity, 
                    delay: i * 0.2,
                    ease: "easeInOut" 
                  }}
                  className="absolute pointer-events-none"
                >
                  {/* The Flare: Core + Glow */}
                  <div className="relative">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_20px_8px_rgba(8,145,178,0.5)]" />
                    <div className="absolute -inset-2 bg-cyan-400/20 blur-md rounded-full" />
                  </div>
                </motion.div>
              ))}

              {/* The Lock Object */}
              <div className="relative z-10 w-full h-full flex items-center justify-center scale-90 sm:scale-100">
                {/* 3D Shackle (Hardened Steel look) */}
                <div className="absolute top-0 w-32 h-44 border-[16px] border-slate-300 rounded-t-[4rem] shadow-premium">
                  {/* Top Rim Light */}
                  <div className="absolute inset-0 border-t-4 border-white/80 rounded-t-[4rem]" />
                  <div className="absolute inset-0 border-l-2 border-cyan-100/30 rounded-t-[4rem]" />
                </div>

                {/* Main Chassis: Anisotropic Metal */}
                <div className="relative w-60 h-48 bg-linear-to-br from-slate-200 via-slate-100 to-white rounded-[3rem] shadow-premium border-2 border-cyan-50 flex items-center justify-center overflow-hidden">
                  
                  {/* Subtle Shimmer across the face */}
                  <motion.div 
                    animate={{ x: [-250, 400] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-y-0 w-24 bg-linear-to-r from-transparent via-cyan-100/20 to-transparent -skew-x-12"
                  />

                  {/* High-Precision Core */}
                  <div className="w-32 h-32 rounded-full bg-white shadow-premium border-2 border-cyan-100 flex items-center justify-center relative group">
                    
                    {/* Pulsing Core Aura */}
                    <div className="absolute inset-0 bg-cyan-600/10 blur-3xl animate-pulse" />
                    
                    {/* Kinetic Ring */}
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-2 border-2 border-t-cyan-600 border-transparent rounded-full" 
                    />
                    
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-4 border border-b-cyan-400/50 border-transparent rounded-full" 
                    />

                    <Lock className="w-12 h-12 text-slate-900 drop-shadow-[0_0_25px_rgba(8,145,178,0.6)]" />

                    {/* Digital Scan line */}
                    <motion.div 
                      animate={{ y: [-40, 40] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-x-8 h-1 bg-cyan-600/40 shadow-[0_0_20px_rgba(8,145,178,0.8)]"
                    />
                  </div>

                  {/* Hardware Labels */}
                  <div className="absolute bottom-4 flex gap-6 opacity-80">
                     <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.4em]">Enc_Active</span>
                     <span className="text-[8px] font-black text-cyan-700 uppercase tracking-[0.4em]">Sentinel_V4</span>
                  </div>
                </div>

                {/* Ground Reflection Shadow */}
                <div className="absolute -bottom-12 w-60 h-10 bg-cyan-600/10 blur-3xl rounded-full" />
              </div>
            </div>
          </div>

          {/* RIGHT: High-Density Elite Content */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-cyan-700" />
                <span className="text-[10px] font-black text-cyan-700 uppercase tracking-[0.5em]">Secure_Protocol_v4.0</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
                HARDENED <br />
                <span className="text-slate-300 font-medium italic">ELITE GRADE</span> <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-cyan-500 to-cyan-800 drop-shadow-sm">INFRASTRUCTURE.</span>
              </h1>

              <div className="space-y-6 max-w-xl">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-bold">
                  Our architecture doesn't just block threats; it eliminates them before they reach your network perimeter. Using hardware-level AES-256 encryption and AI-driven node monitoring.
                </p>
                <p className="text-sm text-slate-500 leading-relaxed font-medium border-l-4 border-cyan-100 pl-6">
                  We deploy proprietary <span className="text-cyan-700 font-black">Sentinel-V4</span> nodes that act as autonomous guardians, capable of making sub-millisecond defensive decisions without human intervention.
                </p>
              </div>
            </div>

            {/* Industrial Data Bar */}
            <div className="grid grid-cols-3 gap-8 border-t-2 border-cyan-50 pt-10">
              {[
                { label: 'Enterprises', value: '200+', icon: <ShieldCheck className="w-4 h-4" /> },
                { label: 'Tactical Exp', value: '25+ Yrs', icon: null },
                { label: 'Uptime SLA', value: '99.9%', icon: null }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <p className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">{item.value}</p>
                  <p className="text-[9px] text-cyan-700 uppercase font-black tracking-widest">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Action Set */}
            <div className="flex flex-col sm:flex-row items-center gap-8 pt-6">
              <button className="group relative w-full sm:w-auto px-10 py-4 bg-[#007B98] text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-xl hover:bg-[#006a84] transition-all shadow-premium hover:shadow-cyan overflow-hidden">
                <div className="absolute inset-0 btn-dot-pattern opacity-20" />
                <span className="relative z-10">Initialize Audit</span>
              </button>
              <div className="flex items-center gap-3 group cursor-pointer opacity-80 hover:opacity-100 transition-all">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">Full Stack Specs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform text-cyan-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}