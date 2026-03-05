'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Globe, Activity, Rocket } from 'lucide-react'

const caseStudies = [
  {
    title: 'Global_Finance_Vault',
    challenge: 'Implementation of multi-layered AES-256 hardware-accelerated encryption across 40+ international data centers with sub-10ms latency requirements.',
    result: '99.99% THREAT_MITIGATION',
    metrics: ['40+ Nodes Secured', 'Zero Data Leaks', 'SOC2 Compliant'],
    image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=600&h=400&fit=crop',
    industry: 'FINANCIAL_INFRA',
    icon: Globe,
    layer: 'LAYER_01_CORE'
  },
  {
    title: 'BioShield_Healthcare',
    challenge: 'Securing distributed HIPAA-compliant patient data clusters against persistent ransomware vectors while maintaining real-time medical staff access.',
    result: '100% HIPAA_FIDELITY',
    metrics: ['2M+ Records Protected', 'AI-Anomaly Detection', 'Rapid-Restore Ready'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
    industry: 'MEDICAL_CRITICAL',
    icon: Activity,
    layer: 'LAYER_02_SENSITIVE'
  },
  {
    title: 'Quantum_Scale_Labs',
    challenge: 'Architecting an "Enterprise-Ready" zero-trust perimeter for a hyper-growth AI startup handling petabytes of proprietary neural network training data.',
    result: '450% SCALE_SECURITY',
    metrics: ['Petabyte-Scale Protection', 'Zero-Trust Mesh', 'Instant Deployment'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    industry: 'AI_QUANTUM_TECH',
    icon: Rocket,
    layer: 'LAYER_03_EDGE'
  },
]

export default function CaseStudies() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Darker Dot Grid with Fade Out */}
      <div className="absolute inset-0 dot-grid-zinc pointer-events-none [mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)]" />
      
      {/* --- ENHANCED SLIM FUSION BEAM (VISIBLE) --- */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        {/* 1. Main Volumetric Beam - Stronger Opacity */}
        <div 
          className="absolute -top-20 -right-20 w-75 h-200 bg-linear-to-b from-cyan-100/40 via-slate-100/20 to-transparent blur-[80px] -rotate-45 origin-top-right transition-opacity duration-1000" 
        />
        
        {/* 2. Sharp High-Intensity Core */}
        <div 
          className="absolute top-0 right-10 w-15 h-150 bg-linear-to-b from-cyan-600/20 to-transparent blur-[30px] -rotate-45 origin-top-right" 
        />

        {/* 3. Subtle Cyan Tint (Fusion Effect) */}
        <div 
          className="absolute -top-40 right-0 w-100 h-100 bg-cyan-600/10 blur-[120px] rounded-full" 
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-cyan-700" />
            <span className="text-[10px] font-black text-cyan-700 uppercase tracking-[0.4em]">Tactical_Operations_History</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 leading-[0.9] mb-8 uppercase">
            OPERATIONAL <br />
            <span className="text-cyan-600 italic font-medium">VICTORIES.</span>
          </h2>
          
          <div className="max-w-md space-y-4 border-l-4 border-cyan-600 pl-6">
            <p className="text-sm sm:text-base text-slate-700 font-bold leading-relaxed uppercase tracking-widest">
              Hardening digital frontlines for global market leaders through elite-tier infrastructure and relentless incident response.
            </p>
            <p className="text-[9px] text-cyan-700 font-black uppercase tracking-[0.3em] bg-cyan-50 py-1 px-3 inline-block rounded-full border border-cyan-100">
              [ VERIFIED BY THIRD-PARTY COMPLIANCE AUDITORS ]
            </p>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-cyan-600 transition-all duration-500 shadow-premium"
            >
              {/* --- PREMIUM DOT PATTERN ON CARD --- */}
              <div className="absolute inset-0 btn-dot-pattern opacity-0 group-hover:opacity-10 transition-opacity z-10" />

              {/* Card Image Area */}
              <div className="relative h-40 overflow-hidden bg-slate-100 border-b border-slate-200">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-cyan-600 text-[8px] font-black text-white uppercase tracking-widest shadow-premium z-20">
                  {study.layer}
                </div>
                <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-slate-900/90 backdrop-blur-md text-[8px] font-black text-white uppercase tracking-widest shadow-premium z-20">
                  {study.industry}
                </div>
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent opacity-40" />
              </div>

              {/* Technical Content */}
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xs font-black text-slate-900 tracking-widest uppercase group-hover:text-cyan-700 transition-colors">
                    {study.title}
                  </h3>
                  <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-cyan-700 group-hover:border-cyan-600/30 transition-all shadow-sm">
                    <study.icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-[7px] font-black text-slate-400 uppercase tracking-[0.4em] mb-2">MISSION_CRITICAL_CHALLENGE</p>
                    <p className="text-[11px] text-slate-700 leading-relaxed font-bold">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Dynamic Metrics List */}
                  <div className="grid grid-cols-1 gap-1.5">
                    {study.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-2 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        <div className="w-1 h-1 bg-cyan-600 rounded-full" />
                        {metric}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-end justify-between pt-4 border-t border-slate-100">
                    <div>
                      <p className="text-[7px] font-black text-cyan-700/60 uppercase tracking-[0.4em] mb-1.5">VERIFIED_OUTCOME</p>
                      <p className="text-xl font-black text-slate-900 tracking-tighter tabular-nums leading-none group-hover:text-cyan-700 transition-colors">
                        {study.result}
                      </p>
                    </div>
                    <motion.div 
                      whileHover={{ x: 3 }}
                      className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white shadow-premium group-hover:bg-cyan-600 transition-all"
                    >
                       <ArrowRight className="w-4 h-4" />
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