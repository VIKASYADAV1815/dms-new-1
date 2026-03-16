'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Lock } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-16 px-6 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Darker Dot Grid with Fade Out */}
      <div className="absolute inset-0 dot-grid-zinc pointer-events-none [mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2rem] bg-white border border-slate-200 p-8 md:p-12 overflow-hidden group shadow-premium"
        >
          {/* --- PREMIUM BACKGROUND ELEMENTS --- */}
          
          {/* 1. The Dot Pattern with Fade Mask */}
          <div className="absolute inset-0 btn-dot-pattern opacity-5 group-hover:opacity-10 transition-opacity" />

          {/* 2. Side Ambient Glows */}
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-cyan-700/5 blur-[100px] rounded-full" />
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-700/5 blur-[100px] rounded-full" />

          {/* 3. Top Precision Light (Animated) */}
          <motion.div 
            initial={{ width: "0%" }}
            whileInView={{ width: "60%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-0 left-1/5 h-1 bg-linear-to-r from-transparent via-cyan-700/40 to-transparent" 
          />
          
          {/* --- CONTENT --- */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Minimal Icon with pulse */}
            <div className="relative w-12 h-12 rounded-xl bg-[#007B98] flex items-center justify-center mb-8 shadow-premium">
              <Shield className="w-5 h-5 text-white" />
              <div className="absolute inset-0 rounded-xl bg-cyan-600/20 animate-pulse" />
            </div>

            {/* Compressed Massive Header */}
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 leading-[0.9] mb-6 uppercase">
              SECURE <br />
              <span className="text-slate-200 italic font-medium tracking-tight">THE INFRASTRUCTURE.</span>
            </h2>

            {/* Micro-Description */}
            <p className="text-[10px] md:text-xs text-slate-700 max-w-xs leading-relaxed font-black uppercase tracking-[0.2em] mb-10">
              Enterprise-grade security assessments <br /> 
              <span className="text-slate-400">for modern digital architecture.</span>
            </p>

            {/* Nano Action Button with premium hover */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group/btn relative px-10 py-4 bg-[#007B98] rounded-xl shadow-premium transition-all duration-500 overflow-hidden hover:bg-[#006a84]"
            >
              <div className="absolute inset-0 btn-dot-pattern opacity-10 group-hover/btn:opacity-20 transition-opacity" />
              <div className="relative z-10 flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-[0.25em]">
                Book Audit
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
              </div>
            </motion.button>

            {/* Status Indicators */}
            <div className="mt-12 flex items-center gap-8">
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-700 shadow-[0_0_12px_#0891b2]" />
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">v2.0_SECURE</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Lock className="w-2.5 h-2.5 text-slate-200" />
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">ENCRYPTED_AUTH</span>
              </div>
            </div>
          </div>

          {/* Corner Metadata */}
          <div className="absolute top-6 right-8 hidden sm:block">
             <span className="text-[8px] font-black text-slate-200 uppercase tracking-[0.4em] font-mono">
               Node_772 // {new Date().getFullYear()}
             </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}