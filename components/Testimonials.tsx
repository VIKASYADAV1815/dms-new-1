'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CSO',
    company: 'Enterprise Solutions Inc',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    content: 'DM Systems transformed our security posture. Their expertise and 24/7 monitoring gave us the confidence we needed as we scaled.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    title: 'IT Director',
    company: 'Financial Services Group',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    content: 'Professional, responsive, and deeply knowledgeable. They understood our compliance requirements better than we did.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    title: 'Infra Manager',
    company: 'Healthcare Innovations',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    content: 'Outstanding service. The security dashboard they provided gives us visibility we never had before. Highly recommended.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#08090B] relative overflow-hidden">
      
      {/* --- SHARED PREMIUM BACKGROUND --- */}
      {/* 1. Dot Pattern with Top-Down Fade Mask (UNCHANGED) */}
      <div 
        className="absolute inset-0 opacity-[0.12] mix-blend-screen"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black, transparent)',
        }}
      />

      {/* 2. Top-Center Ambient Glow (UNCHANGED) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-cyan-500/5 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-24">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            className="h-px bg-cyan-500 mb-6" 
          />
          <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em] block mb-6">
            Client_Feedback
          </span>
          
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.85] mb-8">
            TRUSTED <br />
            <span className="text-white/20 italic font-medium">VOICES.</span>
          </h2>
          
          <p className="text-[11px] text-slate-500 max-w-sm leading-relaxed font-medium uppercase tracking-[0.2em] border-l border-white/10 pl-4">
            Hear from enterprise leaders who have <br /> 
            <span className="text-slate-400/40 font-bold tracking-tighter uppercase text-[9px]">
              hardened their infrastructure with our systems.
            </span>
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative h-full bg-[#080809]/50 backdrop-blur-sm border border-white/4 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:bg-[#0c0c0e] hover:border-white/8"
            >
              {/* INTERNAL CARD DOTS (ADDED WITHOUT CHANGING TOP PATTERN) */}
              <div 
                className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Subtle Noise Texture for card depth */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              
              {/* Card Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-px bg-linear-to-r from-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-px h-8 bg-linear-to-b from-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Header: Stars & Quote */}
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-cyan-500 text-cyan-500 opacity-20 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-white/5 group-hover:text-cyan-500/10 transition-colors duration-500" />
              </div>

              {/* Content */}
              <p className="text-[13px] text-slate-400 font-medium leading-[1.8] mb-12 group-hover:text-slate-200 transition-colors duration-500 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-8 border-t border-white/3 relative z-10">
                <div className="relative">
                    <div className="w-10 h-10 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/10 shrink-0">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Active Status Dot */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#020203] rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
                    </div>
                </div>
                
                <div className="min-w-0">
                  <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.15em] mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-[9px] font-medium text-slate-500 uppercase tracking-widest truncate">
                    {testimonial.title} <span className="text-white/10 mx-1">|</span> 
                    <span className="text-cyan-500/60 font-black group-hover:text-cyan-400 transition-colors">{testimonial.company}</span>
                  </p>
                </div>
              </div>

              {/* Hover Glow Bloom */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/0 group-hover:bg-cyan-500/3 blur-3xl rounded-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}