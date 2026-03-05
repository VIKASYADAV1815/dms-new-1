'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Lock, Activity } from 'lucide-react';

export function DataBreachSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative bg-[#08090B] py-20 px-6 overflow-hidden border-y border-white/10">
      {/* Background Utility Grid */}
      <div className="absolute inset-0 opacity-[0.02] mask-[radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none bg-[grid:20px_20px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]" />
      
      <div className="mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Compact Aesthetic Visual (5 Columns) */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-0.5 bg-linear-to-br from-cyan-500/20 to-blue-500/0 rounded-2xl blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-120 rounded-2xl overflow-hidden border border-white/10 bg-[#0C0E12]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop"
                alt="Infrastructure"
                fill
                className="object-cover grayscale opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000"
              />
              
              {/* Internal UI Overlays */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <div className="px-2 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded text-[9px] font-mono text-cyan-500 tracking-tighter">
                  STATUS: MONITORING
                </div>
                <div className="px-2 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded text-[9px] font-mono text-white/40 tracking-tighter">
                  ENCRYPTION: AES-256
                </div>
              </div>
              
              <div className="absolute bottom-0 inset-x-0 p-6 bg-linear-to-t from-[#08090B] to-transparent">
                <Activity className="w-4 h-4 text-cyan-500 animate-pulse mb-2" />
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="h-full w-1/3 bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Content (7 Columns) */}
          <div className="lg:col-span-7 space-y-10 py-2">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Lock className="w-3 h-3 text-cyan-500" />
                <span className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase">Security Brief 014</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight">
                DO YOU KNOW THAT THE <br />
                <span className="text-white/20">AVERAGE COST OF</span> <br />
                <span className="relative inline-block">
                  DATA BREACH IS
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-cyan-500/20" />
                </span>{' '}
                <span className="text-cyan-500 font-black">$3.86 MILLION</span>
              </h2>
              
              <p className="text-[13px] text-slate-400 leading-relaxed max-w-lg font-medium">
                Most business owners feel that they don't need to install any type of internet security to protect data and end up paying large sums to hackers. Aside from financial cost we forget that there are other costs like loss of <span className="text-white border-b border-cyan-500/50">Reputation</span> which may be difficult to recover. A small investment in protecting your data is a worthy investment.
              </p>
            </div>

            {/* Micro-Stats Bento */}
            <div className="flex gap-4">
              <div className="flex-1 p-4 rounded-xl bg-white/2 border border-white/6 flex flex-col justify-between group hover:bg-white/4 transition-colors">
                <span className="text-2xl font-black text-white tracking-tighter">$3.86M</span>
                <span className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mt-1">Avg Breach Cost</span>
              </div>
              <div className="flex-1 p-4 rounded-xl bg-white/2 border border-white/6 flex flex-col justify-between group hover:bg-white/4 transition-colors">
                <span className="text-2xl font-black text-cyan-500 tracking-tighter">25+</span>
                <span className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mt-1">Years Experience</span>
              </div>
            </div>

            {/* The "Velocity" Button */}
            <button 
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="group relative flex items-center gap-6"
            >
              <div className="relative w-12 h-12 rounded-full border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-cyan-500 group-hover:w-40">
                <div className="absolute inset-0 bg-cyan-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <AnimatePresence mode="wait">
                  {!hovered ? (
                    <motion.div key="icon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </motion.div>
                  ) : (
                    <motion.span key="text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10 text-[10px] font-black uppercase tracking-widest text-white">
                      Read Report
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              {!hovered && <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">View Details</span>}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}