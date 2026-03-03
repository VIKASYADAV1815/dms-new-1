'use client'

import { useEffect, useRef } from 'react'
import { AlertTriangle, CheckCircle, Activity } from 'lucide-react'

export default function Dashboard() {
  const sectionRef = useRef<HTMLDivElement>(null)

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Security Intelligence <span className="text-accent">Dashboard</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Real-time monitoring and threat intelligence in one unified platform
          </p>
        </div>

        {/* Dashboard Card */}
        <div ref={sectionRef} className="relative rounded-3xl overflow-hidden opacity-0">
          {/* Dark background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary/60 -z-10"></div>

          {/* Dashboard Container */}
          <div className="relative p-8 md:p-12 border border-white/10">
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Threat Detection & Response</h3>
                <p className="text-white/60">Enterprise security monitoring system</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-accent mb-1">98.7%</div>
                <div className="text-white/60 text-sm">Threat Blocked</div>
              </div>
            </div>

            {/* Grid Layout */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Risk Score */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/70 text-sm font-medium">Overall Risk Score</span>
                  <AlertTriangle className="w-5 h-5 text-accent" />
                </div>
                <div className="text-5xl font-bold text-white mb-3">24</div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-1/4 bg-gradient-to-r from-accent to-accent/60 rounded-full"></div>
                </div>
                <p className="text-white/50 text-xs mt-3">Low Risk - All Systems Secure</p>
              </div>

              {/* Active Threats */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/70 text-sm font-medium">Active Threats Detected</span>
                  <Activity className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="text-5xl font-bold text-white mb-3">7</div>
                <div className="space-y-2">
                  <div className="text-xs text-white/60">
                    <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    3 Under Investigation
                  </div>
                  <div className="text-xs text-white/60">
                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    4 Mitigated
                  </div>
                </div>
              </div>

              {/* System Health */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/70 text-sm font-medium">System Health Status</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-white/70 mb-1">
                      <span>Network</span>
                      <span>100%</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-white/70 mb-1">
                      <span>Endpoints</span>
                      <span>99%</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-11/12 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Network Graph Visualization */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h4 className="text-white font-semibold mb-6">Real-Time Network Activity</h4>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { label: 'Inbound Traffic', value: '2.4M/s', status: 'normal' },
                  { label: 'Outbound Traffic', value: '1.8M/s', status: 'normal' },
                  { label: 'Blocked Attempts', value: '147', status: 'warning' },
                  { label: 'Uptime', value: '99.98%', status: 'normal' },
                ].map((item) => (
                  <div key={item.label} className="border border-white/10 rounded-lg p-4">
                    <div className="text-white/60 text-xs font-medium mb-2">{item.label}</div>
                    <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                    <div
                      className={`text-xs font-medium ${
                        item.status === 'normal' ? 'text-green-400' : 'text-yellow-400'
                      }`}
                    >
                      ● {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between text-white/50 text-sm">
              <span>Last updated: 2 seconds ago</span>
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}
