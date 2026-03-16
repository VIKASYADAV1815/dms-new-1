'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Animation variables
    let animationId: number

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }> = []

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        radius: Math.random() * 1.5 + 0.5,
      })
    }

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'transparent'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid background
      ctx.strokeStyle = 'rgba(69, 140, 255, 0.1)'
      ctx.lineWidth = 0.5
      const gridSize = 60
      for (let i = 0; i < canvas.width; i += gridSize) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, canvas.height)
        ctx.stroke()
      }
      for (let i = 0; i < canvas.height; i += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(canvas.width, i)
        ctx.stroke()
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off walls
        if (particle.x - particle.radius < 0 || particle.x + particle.radius > canvas.width) {
          particle.vx *= -1
        }
        if (particle.y - particle.radius < 0 || particle.y + particle.radius > canvas.height) {
          particle.vy *= -1
        }

        // Keep in bounds
        particle.x = Math.max(particle.radius, Math.min(canvas.width - particle.radius, particle.x))
        particle.y = Math.max(particle.radius, Math.min(canvas.height - particle.radius, particle.y))

        // Draw particle
        ctx.fillStyle = 'rgba(69, 140, 255, 0.6)'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw connections between nearby particles
      ctx.strokeStyle = 'rgba(69, 140, 255, 0.2)'
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="fade-up z-10">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-balance">
              Fortifying Enterprise Infrastructure Since <span className="text-accent">1999</span>
            </h1>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-lg">
              Comprehensive cybersecurity and IT infrastructure solutions designed for enterprises. We protect your critical assets with 25+ years of industry expertise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 fade-up-delay-1">
              <Button className="bg-[#007B98] hover:bg-[#006a84] text-white px-6 h-12 text-base magnetic-button border-none">
                Request Security Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#007B98] text-[#007B98] hover:bg-[#007B98]/10 px-6 h-12 text-base"
              >
                Explore Solutions
              </Button>
            </div>

            {/* Trust line */}
            <div className="flex items-center gap-2 text-sm text-foreground/60 fade-up-delay-2">
              <Shield className="w-4 h-4 text-accent" />
              <span>Trusted by 200+ Enterprise Clients</span>
            </div>
          </div>

          {/* Right side - Animated Network Visualization */}
          <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden border border-border/50 bg-linear-to-br from-background to-muted/30 fade-up-delay-1">
            <canvas
              ref={canvasRef}
              className="w-full h-full"
            />
            {/* Glow overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}
