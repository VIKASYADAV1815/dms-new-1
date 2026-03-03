'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Lock } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-[#020203]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl bg-[#080809] border border-white/[0.04] p-10 md:p-16 overflow-hidden"
        >
          {/* Top Precision Light */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Minimal Icon */}
            <div className="relative w-10 h-10 rounded-xl bg-black border border-white/[0.08] flex items-center justify-center mb-8">
              <Shield className="w-4 h-4 text-cyan-500/80" />
            </div>

            {/* Compressed Massive Header */}
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[0.9] mb-6">
              SECURE <br />
              <span className="text-white/20 italic font-medium tracking-tight">THE INFRASTRUCTURE.</span>
            </h2>

            {/* Micro-Description */}
            <p className="text-[10px] text-slate-500 max-w-[280px] leading-relaxed font-medium uppercase tracking-widest mb-10">
              Enterprise-grade security assessments <br /> for modern digital architecture.
            </p>

            {/* Nano Action Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group/btn relative px-6 py-3 bg-white rounded-full transition-all duration-300"
            >
              <div className="relative z-10 flex items-center gap-2 text-black font-black text-[9px] uppercase tracking-[0.2em]">
                Book Audit
                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
              </div>
            </motion.button>

            {/* Status Indicators */}
            <div className="mt-12 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-cyan-500 shadow-[0_0_5px_#22d3ee]" />
                <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em]">v2.0_SECURE</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-2 h-2 text-white/10" />
                <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em]">ENCRYPTED_AUTH</span>
              </div>
            </div>
          </div>

          {/* Corner Metadata */}
          <div className="absolute top-4 right-6">
             <span className="text-[7px] font-bold text-white/5 uppercase tracking-[0.4em]">Node_772</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}