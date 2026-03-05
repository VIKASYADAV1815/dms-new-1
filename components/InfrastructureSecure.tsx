'use client';

import { CheckCircle2, Shield, Zap, Database, ArrowUpRight } from 'lucide-react';
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
    <section className="bg-[#08090B] py-24 px-6 font-sans relative overflow-hidden">
      {/* Background Grid - Kept very subtle at 0.03 */}
      <div className="absolute inset-0 opacity-[0.03] bg-[grid:24px_24px] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_center,black,transparent)]" />
      
      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_#2563eb]" />
            <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Audit_v2.0</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[0.95] mb-6">
            IS YOUR INFRASTRUCTURE <br />
            <span className="text-white/20">TRULY SECURE?</span>
          </h2>
          <p className="text-xs md:text-sm text-slate-500 max-w-lg font-medium leading-relaxed tracking-tight">
            Our comprehensive security assessment identifies vulnerabilities and implements solutions to protect your critical infrastructure.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.number}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              {/* TOP SIDE BEAM */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 z-20" />

              <div className="h-full bg-[#080809] border border-white/4 rounded-xl p-6 transition-all duration-500 group-hover:bg-[#0B0B0C] group-hover:border-white/10 relative overflow-hidden">
                
                {/* --- CENTERED 8PX MICRO-GRID --- */}
                <div 
                  className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none z-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, #ffffff 1px, transparent 1px),
                      linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                    `,
                    backgroundSize: '8px 8px',
                    // Centered mask: focus on center, fade to all sides
                    maskImage: 'radial-gradient(circle at 50% 50%, black 0%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 0%, transparent 70%)',
                  }}
                />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-14">
                    <div className="w-10 h-10 rounded-lg bg-black border border-white/6 flex items-center justify-center group-hover:border-blue-500/40 transition-colors">
                      <feature.icon className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <span className="text-[9px] font-black text-white/5 group-hover:text-white/20 transition-colors tracking-widest tabular-nums">
                      {feature.tag}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white tracking-tight uppercase">
                        {feature.title}
                      </h3>
                      <span className="text-[10px] font-bold text-white/10">{feature.number}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium tracking-tight group-hover:text-slate-400 transition-colors">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest">Execute_Module</span>
                    <ArrowUpRight className="w-3 h-3 text-blue-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pt-16 border-t border-white/3">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white tracking-tighter">
              Complete protection <br /> 
              <span className="text-slate-700">across all layers.</span>
            </h3>
            <div className="space-y-3">
              {[
                'Advanced threat detection and prevention',
                'Real-time monitoring and alerting systems',
                '24/7 Managed Security Operations Center',
                'Automated incident response protocols',
                'Compliance management and reporting'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group cursor-default">
                  <div className="w-1 h-1 rounded-full bg-blue-600/40 group-hover:bg-blue-500 transition-colors" />
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative bg-[#050505] rounded-2xl p-8 border border-white/5 overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
               <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
            </div>

            <div className="grid grid-cols-2 gap-8 relative z-10">
              <div>
                <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-2">Threats_Blocked</p>
                <p className="text-3xl font-black text-white tracking-tighter tabular-nums">14,289</p>
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-2">Network_Health</p>
                <p className="text-3xl font-black text-blue-500 tracking-tighter tabular-nums">99.9%</p>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/3 flex justify-between items-center">
              <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">Certification_Standard</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-white italic">ISO 27001</span>
                <CheckCircle2 className="w-3 h-3 text-white/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}