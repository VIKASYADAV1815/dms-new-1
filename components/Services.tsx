'use client'

import { useEffect, useRef, useState } from 'react'
import { Shield, Lock, Mail, Database, Zap, Server, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Shield,
    title: 'Network Perimeter Security',
    description: 'Advanced firewall and intrusion prevention systems protecting your network boundaries with real-time threat detection and response.',
  },
  {
    icon: Lock,
    title: 'Endpoint Security',
    description: 'Comprehensive protection for all devices with behavioral analysis, ransomware defense, and automated threat remediation.',
  },
  {
    icon: Mail,
    title: 'Email Security',
    description: 'Advanced email filtering with AI-powered threat detection to prevent phishing, malware, and data exfiltration attacks.',
  },
  {
    icon: Database,
    title: 'Data Continuity',
    description: 'Robust backup and disaster recovery solutions ensuring business continuity and data protection across all platforms.',
  },
  {
    icon: Zap,
    title: 'Security Audits',
    description: 'Comprehensive vulnerability assessments and penetration testing to identify and remediate security gaps proactively.',
  },
  {
    icon: Server,
    title: 'Infrastructure Solutions',
    description: 'Enterprise-grade infrastructure design and management optimized for security, performance, and scalability.',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('[data-service-card]')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('fade-up')
              }, index * 100)
            })
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
    <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Enterprise-Grade <span className="text-accent">Security Solutions</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive cybersecurity services designed to protect your organization at every level
          </p>
        </div>

        {/* Services Grid */}
        <div ref={sectionRef} className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                data-service-card
                className="group relative p-8 rounded-2xl border border-border/50 bg-card hover:border-accent/50 transition-all duration-300 cursor-pointer opacity-0"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/60 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center text-accent font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Background accents */}
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}
