'use client'

import { motion } from 'framer-motion'
import { Star, Quote, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah_Johnson_V4',
    title: 'CHIEF SECURITY OFFICER',
    company: 'Enterprise_Systems_Global',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    content: 'DM_Systems architected a multi-layered defense-in-depth strategy that successfully neutralized 12M+ intrusion attempts within the first quarter of deployment.',
    rating: 5,
    status: 'VERIFIED_PARTNER'
  },
  {
    name: 'Michael_Chen_Sentinel',
    title: 'IT INFRASTRUCTURE DIRECTOR',
    company: 'Financial_Core_Trust',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    content: 'The precision of their AI-driven anomaly detection is unparalleled. We achieved 100% compliance alignment across 12 international regulatory frameworks.',
    rating: 5,
    status: 'TACTICAL_ALIGNED'
  },
  {
    name: 'Emily_Rodriguez_Alpha',
    title: 'INFRASTRUCTURE MANAGER',
    company: 'BioShield_Healthcare',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    content: 'Deployment of their Sentinel-V4 nodes provided real-time visibility into our edge-computing clusters that we previously thought was technically impossible.',
    rating: 5,
    status: 'SYSTEMS_SECURED'
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Darker Dot Grid with Fade Out */}
      <div className="absolute inset-0 dot-grid-zinc pointer-events-none [mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)]" />
      
      {/* Ambient Fusion Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-120 h-60 bg-cyan-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-cyan-700" />
            <span className="text-[10px] font-black text-cyan-700 uppercase tracking-[0.4em]">Network_Authority_Feedback</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 leading-[0.9] mb-8 uppercase">
            ELITE <br />
            <span className="text-cyan-600 italic font-medium">ALLIANCES.</span>
          </h2>
          
          <div className="max-w-md space-y-4 border-l-4 border-cyan-600 pl-6">
            <p className="text-sm sm:text-base text-slate-700 font-bold leading-relaxed uppercase tracking-[0.2em]">
              Validated testimonials from Tier-1 security architects who have successfully implemented DM_Systems protocols.
            </p>
            <div className="flex gap-3">
               <div className="px-2 py-0.5 bg-cyan-50 border border-cyan-100 rounded text-[8px] font-black text-cyan-700 uppercase tracking-widest">
                 200+ Nodes Secured
               </div>
               <div className="px-2 py-0.5 bg-slate-50 border border-slate-200 rounded text-[8px] font-black text-slate-500 uppercase tracking-widest">
                 SOC2 Verified
               </div>
            </div>
          </div>
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
              className="group relative h-full bg-white border border-slate-200 rounded-[2rem] p-8 overflow-hidden transition-all duration-500 hover:border-cyan-600 shadow-premium"
            >
              {/* INTERNAL CARD DOTS */}
              <div className="absolute inset-0 btn-dot-pattern opacity-0 group-hover:opacity-10 transition-opacity z-10" />
              
              {/* Status Badge */}
              <div className="absolute top-5 right-5 px-1.5 py-0.5 bg-cyan-50 border border-cyan-100 rounded text-[6px] font-black text-cyan-700 uppercase tracking-[0.2em] z-20">
                {testimonial.status}
              </div>

              {/* Header: Stars & Quote */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-cyan-600 text-cyan-600 group-hover:scale-110 transition-transform duration-500" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-slate-100 group-hover:text-cyan-600/10 transition-colors duration-500" />
              </div>

              {/* Content */}
              <p className="text-xs sm:text-sm text-slate-700 font-bold leading-relaxed mb-8 group-hover:text-slate-900 transition-colors duration-500 relative z-10 uppercase tracking-wide">
                "{testimonial.content}"
              </p>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-8 border-t-2 border-slate-50 relative z-10">
                <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-slate-100 group-hover:border-cyan-600/30 transition-all duration-700 shadow-sm">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                        />
                    </div>
                    {/* Active Status Dot */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <div className="w-2 h-2 bg-cyan-600 rounded-full animate-pulse" />
                    </div>
                </div>
                
                <div className="min-w-0">
                  <h4 className="text-[9px] font-black text-slate-900 uppercase tracking-[0.15em] mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest truncate">
                    {testimonial.title}
                  </p>
                  <p className="text-[8px] font-black text-cyan-700 uppercase tracking-widest mt-0.5">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover Glow Bloom */}
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-cyan-600/0 group-hover:bg-cyan-600/5 blur-3xl rounded-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}