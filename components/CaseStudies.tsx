'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Globe, Activity, Rocket } from 'lucide-react'

const caseStudies = [
  {
    title: 'Global Finance Corp',
    challenge: 'Advanced DLP & incident response',
    result: '99.9% Detection',
    image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=600&h=400&fit=crop',
    industry: 'Finance',
    icon: Globe,
  },
  {
    title: 'Healthcare Ent.',
    challenge: 'Secured HIPAA infrastructure',
    result: '100% Compliance',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
    industry: 'Healthcare',
    icon: Activity,
  },
  {
    title: 'Startup Scale',
    challenge: 'Enterprise security day one',
    result: '40% Growth',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    industry: 'Tech',
    icon: Rocket,
  },
]

export default function CaseStudies() {
  return (
    <section className="py-24 px-6 bg-[#08090B] relative overflow-hidden">
      
      {/* --- ENHANCED SLIM FUSION BEAM (VISIBLE) --- */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        
        {/* 1. Main Volumetric Beam - Stronger Opacity */}
        <div 
          className="absolute -top-20 -right-20 w-75 h-200 bg-linear-to-b from-white/15 via-white/5 to-transparent blur-[80px] -rotate-45 origin-top-right transition-opacity duration-1000" 
        />
        
        {/* 2. Sharp High-Intensity Core */}
        <div 
          className="absolute top-0 right-10 w-15 h-150 bg-linear-to-b from-white/25 to-transparent blur-[30px] -rotate-45 origin-top-right" 
        />

        {/* 3. Subtle Cyan Tint (Fusion Effect) */}
        <div 
          className="absolute -top-40 right-0 w-100 h-100 bg-cyan-500/10 blur-[120px] rounded-full" 
        />

        {/* 4. Top Rim Edge Highlight */}
        <div className="absolute top-0 right-0 w-100 h-px bg-linear-to-l from-white/40 via-white/10 to-transparent" />
      </div>
      
      {/* --- GLOBAL SCANLINE PATTERN --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[100%_4px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-cyan-500" />
            <span className="text-[9px] font-black text-cyan-500 uppercase tracking-[0.4em]">Proven_Success</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.85] mb-8">
            SUCCESS <br />
            <span className="text-white/20 italic font-medium">STORIES.</span>
          </h2>
          
          <p className="text-[11px] text-slate-500 max-w-sm leading-relaxed font-medium uppercase tracking-widest border-l border-white/10 pl-4">
            Strengthening security posture and achieving <br /> compliance excellence for global leaders.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#080809]/80 backdrop-blur-md border border-white/4 rounded-xl overflow-hidden hover:border-white/8 transition-all duration-500 shadow-2xl"
            >
              {/* --- INTERNAL MICRO-MESH (6px focus) --- */}
              <div 
                className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #ffffff 1px, transparent 1px),
                    linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                  `,
                  backgroundSize: '6px 6px',                                                                                                                                                                                                                                                                                                                                                                                                                
                  maskImage: 'radial-gradient(circle at 50% 0%, black, transparent 90%)',
                  WebkitMaskImage: 'radial-gradient(circle at 50% 0%, black, transparent 90%)',
                }}
              />

              {/* Top Cyan Accent Beam */}
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Card Image Area */}
              <div className="relative h-36 overflow-hidden bg-black border-b border-white/3">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover opacity-20 grayscale group-hover:scale-105 group-hover:opacity-30 transition-all duration-700"
                />
                <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black border border-white/10 text-[7px] font-black text-white/50 uppercase tracking-widest">
                  {study.industry}
                </div>
              </div>

              {/* Technical Content */}
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-[11px] font-bold text-white/90 tracking-widest uppercase group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  <study.icon className="w-3.5 h-3.5 text-white/10 group-hover:text-cyan-500/40 transition-colors" />
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-[7px] font-black text-white/20 uppercase tracking-[0.3em] mb-2">Technical_Challenge</p>
                    <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                      {study.challenge}
                    </p>
                  </div>
                  
                  <div className="flex items-end justify-between pt-5 border-t border-white/3">
                    <div>
                      <p className="text-[7px] font-black text-cyan-500/30 uppercase tracking-[0.3em] mb-1.5">Result_Metrics</p>
                      <p className="text-xl font-bold text-white tracking-tighter tabular-nums leading-none">
                        {study.result}
                      </p>
                    </div>
                    <motion.div 
                      whileHover={{ x: 2 }}
                      className="w-8 h-8 rounded-lg border border-white/5 flex items-center justify-center group-hover:border-cyan-500/20 group-hover:bg-cyan-500/5 transition-all"
                    >
                       <ArrowRight className="w-3 h-3 text-white/20 group-hover:text-cyan-400" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}