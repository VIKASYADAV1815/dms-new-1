'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Lock, Activity } from 'lucide-react';

export function DataBreachSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden border-y border-slate-100">
      
      
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Compact Aesthetic Visual (5 Columns) */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-linear-to-br from-green-600/40 to-green-800/0 rounded-[2rem] blur-xl opacity-30 group-hover:opacity-60 transition-opacity" />
            <div className="relative h-[480px] rounded-[2rem] overflow-hidden border border-slate-200 bg-slate-50 shadow-premium hover:shadow-green transition-all duration-700">
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=1000&fit=crop"
                alt="Infrastructure"
                fill
                className="object-cover group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent opacity-60" />
              
              {/* Internal UI Overlays */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <div className="px-3 py-1.5 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg text-[9px] font-black text-green-400 tracking-[0.2em] uppercase shadow-lg">
                  STATUS: LIVE_MONITOR
                </div>
                <div className="px-3 py-1.5 bg-white/90 backdrop-blur-md border border-slate-100 rounded-lg text-[9px] font-black text-green-700 tracking-[0.2em] uppercase shadow-lg">
                  NODE: CP-772
                </div>
              </div>
              
              <div className="absolute bottom-0 inset-x-0 p-8 bg-linear-to-t from-white via-white/90 to-transparent">
                <div className="flex items-center gap-2.5 mb-3">
                  <Activity className="w-5 h-5 text-green-600 animate-pulse" />
                  <span className="text-[9px] font-black text-green-800 uppercase tracking-widest">Network_Throughput</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                    className="h-full w-1/2 bg-linear-to-r from-transparent via-green-600 to-transparent shadow-[0_0_10px_#15803D]" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Content (7 Columns) */}
          <div className="lg:col-span-7 space-y-10 py-2">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-green-600 text-white shadow-green">
                  <Lock className="w-4 h-4" />
                </div>
                <div className="h-px w-10 bg-slate-200" />
                <span className="text-[10px] font-black tracking-[0.4em] text-green-700 uppercase">Strategic_Intel_014</span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
                THE REAL <br />
                <span className="text-slate-300 italic font-medium">COST OF</span> <br />
                <span className="relative inline-block">
                  COMPROMISE
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-green-600/30" />
                </span>{' '}
                <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-green-800">$4.45 MILLION</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl font-bold">
                  In 2024, the financial impact of a security compromise has reached an all-time high. Beyond the immediate <span className="text-green-700 border-b-2 border-slate-100">Financial Hemorrhaging</span>, organizations face catastrophic <span className="text-slate-900 border-b-2 border-green-600/50">Reputational Devaluation</span> that often takes decades to recover.
                </p>
                <p className="text-sm text-slate-500 leading-relaxed max-w-lg font-medium border-l-4 border-slate-100 pl-6">
                  Our tactical engineering team focuses on the "First 15 Minutes" of an attack—the critical window where 90% of data exfiltration can be prevented through automated isolation protocols and kinetic response.
                </p>
              </div>
            </div>

            {/* Micro-Stats Bento */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-[1.5rem] bg-slate-50 border border-slate-100 flex flex-col justify-between group hover:bg-white hover:border-green-600/30 shadow-sm hover:shadow-green transition-all duration-500">
                <span className="text-3xl font-black text-slate-900 tracking-tighter group-hover:text-green-700 transition-colors">$4.45M</span>
                <span className="text-[10px] text-green-800 uppercase font-black tracking-widest mt-3">Global Avg Cost</span>
              </div>
              <div className="p-6 rounded-[1.5rem] bg-[#15803D] border border-[#166534] flex flex-col justify-between group hover:bg-[#166534] transition-all duration-500 shadow-premium">
                <span className="text-3xl font-black text-white tracking-tighter">25+</span>
                <span className="text-[10px] text-green-100 uppercase font-black tracking-widest mt-3">Years Tactical Exp</span>
              </div>
            </div>

            {/* The "Velocity" Button */}
            <button 
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="group relative flex items-center gap-8"
            >
              <div className="relative w-16 h-16 rounded-2xl bg-[#15803D] border border-[#166534] flex items-center justify-center overflow-hidden transition-all duration-700 hover:bg-[#166534] group-hover:w-56 shadow-premium hover:shadow-green">
                <div className="absolute inset-0 btn-dot-pattern opacity-20" />
                <AnimatePresence mode="wait">
                  {!hovered ? (
                    <motion.div key="icon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <ArrowRight className="w-6 h-6 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div key="text" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
                      <span className="text-[12px] font-black text-white uppercase tracking-[0.2em] whitespace-nowrap">Explore Strategy</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {!hovered && (
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] group-hover:text-green-700 transition-colors">View Deployment</span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Operational Protocol v4.0</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}