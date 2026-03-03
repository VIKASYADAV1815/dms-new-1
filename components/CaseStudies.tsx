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
    <section className="py-24 px-6 bg-[#020203]">
      <div className="max-w-6xl mx-auto">
        
        {/* MASSIVE HEADER / MICRO-BODY CONTRAST */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-cyan-500" />
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

        {/* Micro-Grid remains tight and technical */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#080809] border border-white/[0.04] rounded-xl overflow-hidden hover:border-white/[0.1] transition-all duration-500"
            >
              {/* VELOCITY BEAM */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity z-20" />

              {/* Compact Hardware-style Image */}
              <div className="relative h-36 overflow-hidden bg-black border-b border-white/[0.03]">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover opacity-30 grayscale group-hover:scale-110 group-hover:opacity-50 transition-all duration-700"
                />
                <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/80 border border-white/10 text-[8px] font-black text-white uppercase tracking-widest">
                  {study.industry}
                </div>
              </div>

              {/* Technical Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-[12px] font-bold text-white tracking-tight uppercase group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  <study.icon className="w-3 h-3 text-white/10 group-hover:text-cyan-500 transition-colors" />
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em] mb-1.5">Challenge</p>
                    <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                      {study.challenge}
                    </p>
                  </div>
                  
                  <div className="flex items-end justify-between pt-4 border-t border-white/[0.02]">
                    <div>
                      <p className="text-[8px] font-black text-cyan-500/40 uppercase tracking-[0.2em] mb-1">Result_Output</p>
                      <p className="text-lg font-black text-white tracking-tighter tabular-nums leading-none">
                        {study.result}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/5 transition-all">
                       <ArrowRight className="w-3 h-3 text-white/20 group-hover:text-cyan-400" />
                    </div>
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