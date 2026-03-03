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
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-border/50 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Client logos strip */}
        <div className="mb-20 overflow-hidden">
          <div className="flex items-center justify-center gap-8 mb-4">
            <span className="text-sm font-semibold text-foreground/50">TRUSTED BY LEADING ENTERPRISES</span>
          </div>
          <div className="flex items-center justify-center gap-12 flex-wrap opacity-50">
            {['Fortune 500', 'Global Tech', 'Finance Corp', 'Enterprise AI', 'Cloud Services'].map(
              (client) => (
                <div
                  key={client}
                  className="text-foreground/40 font-semibold text-sm tracking-wider"
                >
                  {client}
                </div>
              )
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-border/50 bg-card hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer fade-up-delay-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <p className="text-foreground/70 font-medium">{stat.label}</p>
              </div>

              {/* Border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
