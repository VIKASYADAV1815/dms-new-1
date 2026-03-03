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
    <section className="py-24 px-6 bg-[#020203] relative overflow-hidden">
      {/* Background Structural Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[grid:24px_24px] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Massive Header / Micro-Subhead Contrast */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-cyan-500" />
            <span className="text-[9px] font-black text-cyan-500 uppercase tracking-[0.4em]">Client_Feedback</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.85] mb-8">
            TRUSTED <br />
            <span className="text-white/20 italic font-medium">VOICES.</span>
          </h2>
          
          <p className="text-[11px] text-slate-500 max-w-sm leading-relaxed font-medium uppercase tracking-widest border-l border-white/10 pl-4">
            Hear from enterprise leaders who have <br /> 
            hardened their infrastructure with our systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }} 
              className="group relative h-full bg-[#080809] border border-white/[0.04] rounded-xl p-6 overflow-hidden transition-all duration-500 hover:bg-[#0C0C0E] hover:border-cyan-500/20 hover:shadow-[0_20px_50px_rgba(0,0,0,1)]"
            >
              
              {/* Perimeter Geometry Scan Animation */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="absolute inset-[-1px] w-[calc(100%+2px)] h-[calc(100%+2px)] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <motion.path 
                        d="M 0 10 L 10 0 L 100 0" 
                        fill="none" 
                        stroke="#22d3ee" 
                        strokeWidth="0.5" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileHover={{ pathLength: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                </svg>
                {/* Visual bloom in corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-2xl rounded-full" />
              </div>

              {/* Header: Stars & Quote */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-cyan-500 text-cyan-500 opacity-30 group-hover:opacity-100 transition-opacity" />
                  ))}
                </div>
                <Quote className="w-4 h-4 text-white/5 group-hover:text-cyan-500/20 transition-colors" />
              </div>

              {/* Content: Small Font Precision */}
              <p className="text-[12px] text-slate-400 font-medium leading-relaxed mb-10 group-hover:text-slate-200 transition-colors relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author Footer: Micro-spec */}
              <div className="flex items-center gap-3 pt-6 border-t border-white/[0.03] group-hover:border-cyan-500/10 transition-colors relative z-10">
                <div className="w-8 h-8 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all border border-white/10 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] font-bold text-white uppercase tracking-tight truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-[9px] font-medium text-slate-600 uppercase tracking-wider truncate">
                    {testimonial.title} <span className="text-white/10 mx-1">/</span> 
                    <span className="text-cyan-500/60 font-black">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}