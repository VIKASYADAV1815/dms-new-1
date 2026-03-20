'use client'

import { useEffect, useRef } from 'react'

export default function TrustStats() {
  const statsRef = useRef<HTMLDivElement>(null)

  const stats = [
    { value: '25+', label: 'Years Experience' },
    { value: '200+', label: 'Enterprise Clients' },
    { value: '99.9%', label: 'Threat Detection' },
    { value: '24/7', label: 'Monitoring' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-100 bg-white relative overflow-hidden">
      
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Client logos strip */}
        <div className="mb-12 overflow-hidden text-center">
          <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full bg-white border border-slate-100 shadow-sm mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
            <span className="text-[10px] font-black text-green-800 uppercase tracking-[0.3em]">TRUSTED BY GLOBAL LEADERS</span>
          </div>
          <div className="flex items-center justify-center gap-12 flex-wrap opacity-70">
            {['Fortune 500', 'Global Tech', 'Finance Corp', 'Enterprise AI', 'Cloud Services'].map(
              (client) => (
                <div
                  key={client}
                  className="text-slate-900 font-black text-[10px] tracking-[0.2em] uppercase hover:text-green-600 transition-colors cursor-default"
                >
                  {client}
                </div>
              )
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-slate-100 bg-white hover:border-green-600/40 shadow-premium hover:shadow-green hover:-translate-y-1 transition-all duration-500 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Button-like dot pattern on hover */}
              <div className="absolute inset-0 btn-dot-pattern opacity-0 group-hover:opacity-10 transition-opacity" />
              
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter mb-3 group-hover:text-green-700 transition-colors">
                  {stat.value}
                </div>
                <div className="space-y-1.5">
                  <p className="text-green-700 font-black uppercase tracking-[0.1em] text-[9px]">{stat.label}</p>
                  <p className="text-[9px] text-slate-400 font-bold leading-tight group-hover:text-slate-500 transition-colors uppercase">
                    {index === 0 ? "Global deployment history" : 
                     index === 1 ? "Enterprise-level accounts" : 
                     index === 2 ? "Real-time accuracy" : "Continuous uptime"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
