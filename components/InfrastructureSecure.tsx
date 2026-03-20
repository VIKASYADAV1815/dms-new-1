'use client';

import { CheckCircle2, Shield, Zap, Database, ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    number: '01',
    title: 'CUSTOMIZED SOLUTIONS',
    description: 'Tailored security strategies designed specifically for your business needs and infrastructure requirements.',
    icon: Shield,
    tag: 'STRATEGY_CORE'
  },
  {
    number: '02',
    title: 'PROOF OF CONCEPT',
    description: 'Demonstration of our security measures and their effectiveness before full implementation.',
    icon: Zap,
    tag: 'POC_VALIDATE'
  },
  {
    number: '03',
    title: 'DATA CONTINUITY SOLUTIONS',
    description: 'Comprehensive disaster recovery and business continuity planning to ensure uninterrupted operations.',
    icon: Database,
    tag: 'RECOVERY_NODE'
  }
];

export function InfrastructureSecure() {
  return (
    <section className="bg-white py-24 px-6 font-sans relative overflow-hidden border-t border-slate-100">
      
      
      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-green-600 shadow-[0_0_15px_#15803D] animate-pulse" />
            <span className="text-[10px] font-black text-green-700 uppercase tracking-[0.4em]">Audit_Protocol_v2.0</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8 uppercase">
            IS YOUR ASSET <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-green-800 italic">TRULY SECURE?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-base sm:text-lg text-slate-700 font-bold leading-relaxed tracking-tight">
              Our comprehensive security assessment identifies critical vulnerabilities across your entire stack—from misconfigured cloud buckets to unpatched firmware in legacy hardware.
            </p>
            <p className="text-sm text-slate-500 font-medium leading-relaxed border-l-4 border-slate-100 pl-6">
              "We don't just audit; we harden. Every vulnerability found is a technical challenge we solve before the final deployment report is delivered to your stakeholders."
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.number}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* TOP SIDE BEAM */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 z-20" />

              <div className="h-full bg-white border border-slate-100 rounded-[2rem] p-8 transition-all duration-500 group-hover:border-green-600/40 relative overflow-hidden shadow-premium hover:shadow-green">
                
                {/* --- CENTERED DOT GRID ON CARD --- */}
                <div className="absolute inset-0 btn-dot-pattern opacity-0 group-hover:opacity-10 transition-opacity z-0" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-16">
                    <div className="w-12 h-12 rounded-xl bg-[#15803D] flex items-center justify-center hover:bg-[#166534] transition-all duration-500 shadow-premium">
                      <feature.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[12px] font-black text-green-100 group-hover:text-green-700 transition-colors tracking-widest tabular-nums uppercase">
                      {feature.tag}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase group-hover:text-green-700 transition-colors leading-none">
                        {feature.title}
                      </h3>
                      <span className="text-[12px] font-black text-slate-200 group-hover:text-green-700 transition-colors">0{idx + 1}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-bold tracking-tight group-hover:text-slate-900 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tactical Status Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 border-t-2 border-slate-50 pt-16">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="flex -space-x-4">
              {[
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80"
              ].map((url, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center overflow-hidden shadow-md">
                  <img src={url} alt={`Client ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-[#15803D] flex items-center justify-center text-[10px] font-black text-white shadow-premium">
                +200
              </div>
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-xs font-black text-slate-900 uppercase tracking-widest leading-none">Trusted By Global Industry Leaders</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Verified Enterprise-Grade Infrastructure Security</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 w-full lg:w-auto">
            <div className="text-center sm:text-right space-y-1 hidden sm:block">
              <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">Status: Operational</p>
              <p className="text-[10px] font-black text-green-700 uppercase tracking-widest flex items-center justify-end gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse shadow-[0_0_8px_#15803D]" /> All Systems Nominal
              </p>
            </div>
            <div className="h-12 w-0.5 bg-slate-50 hidden sm:block" />
            <button className="group relative w-full sm:w-auto flex items-center justify-center gap-4 px-8 py-4 bg-[#15803D] text-white rounded-xl shadow-premium hover:shadow-green overflow-hidden hover:bg-[#166534] transition-all duration-500">
              <div className="absolute inset-0 btn-dot-pattern opacity-20 group-hover:opacity-30 transition-opacity" />
              <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em]">Verify Security</span>
              <ArrowUpRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}