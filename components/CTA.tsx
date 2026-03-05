'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Lock } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-[#08090B]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl bg-[#080809] border border-white/4 p-10 md:p-16 overflow-hidden group"
        >
          {/* --- PREMIUM BACKGROUND ELEMENTS --- */}
          
          {/* 1. The Dot Pattern with Fade Mask */}
          <div 
            className="absolute inset-0 opacity-[0.15] mix-blend-screen"
            style={{
              backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
              maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
            }}
          />

          {/* 2. Side Ambient Glows */}
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full" />
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />

          {/* 3. Top Precision Light (Animated) */}
          <motion.div 
            initial={{ width: "0%" }}
            whileInView={{ width: "50%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-0 left-1/4 h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" 
          />
          
          {/* --- CONTENT --- */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Minimal Icon with pulse */}
            <div className="relative w-12 h-12 rounded-xl bg-black border border-white/8 flex items-center justify-center mb-8 shadow-2xl">
              <Shield className="w-5 h-5 text-cyan-500/80" />
              <div className="absolute inset-0 rounded-xl bg-cyan-500/5 animate-pulse" />
            </div>

            {/* Compressed Massive Header */}
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.85] mb-6">
              SECURE <br />
              <span className="text-white/20 italic font-medium tracking-tight">THE INFRASTRUCTURE.</span>
            </h2>

            {/* Micro-Description */}
            <p className="text-[11px] text-slate-500 max-w-72 leading-relaxed font-medium uppercase tracking-[0.25em] mb-10">
              Enterprise-grade security assessments <br /> 
              <span className="text-slate-400/50">for modern digital architecture.</span>
            </p>

            {/* Nano Action Button with premium hover */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group/btn relative px-8 py-4 bg-white rounded-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <div className="relative z-10 flex items-center gap-3 text-black font-black text-[10px] uppercase tracking-[0.2em]">
                Book Audit
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.button>

            {/* Status Indicators */}
            <div className="mt-14 flex items-center gap-8">
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#22d3ee]" />
                <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.4em]">v2.0_SECURE</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Lock className="w-2.5 h-2.5 text-white/10" />
                <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.4em]">ENCRYPTED_AUTH</span>
              </div>
            </div>
          </div>

          {/* Corner Metadata */}
          <div className="absolute top-6 right-8">
             <span className="text-[8px] font-bold text-white/10 uppercase tracking-[0.5em] font-mono">
               Node_772 // {new Date().getFullYear()}
             </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}