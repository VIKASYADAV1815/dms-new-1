'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Monitor, BarChart3, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Perimeter Security',
    description: "Securing the boundary between private intranets and the public internet with AI detection.",
    icon: <Shield className="w-4 h-4" />,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
  },
  {
    id: 2,
    title: 'Email Security',
    description: 'Advanced measures to protect account access and organizational communication.',
    icon: <Mail className="w-4 h-4" />,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80',
  },
  {
    id: 3,
    title: 'Endpoint Solutions',
    description: 'Securing remote devices and mobile units with methodology-based defense.',
    icon: <Monitor className="w-4 h-4" />,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
  },
  {
    id: 4,
    title: 'Security Audits',
    description: 'Identifying regulatory deficiencies and internal control risks effectively.',
    icon: <BarChart3 className="w-4 h-4" />,
    image: 'https://images.unsplash.com/photo-1516557595335-eafcb6052005?w=600&q=80',
  }
];

// FIXED: Using "export function" to match your page.tsx import
export function ServicesEnhanced() {
  return (
    <section className="bg-[#020203] py-24 px-6 relative overflow-hidden border-t border-white/5">
      {/* Precision Top Scan Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Obsidian Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-cyan-500" />
            <span className="text-[9px] font-black text-cyan-500 uppercase tracking-[0.4em]">Operational_Matrix</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase leading-none mb-6">
            DEFENSE <br />
            <span className="text-white/20 italic font-medium">CAPACITY.</span>
          </h2>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any, index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative h-[360px] rounded-xl bg-[#080809] border border-white/[0.04] overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
    >
      {/* Image Reveal with Darker Contrast */}
      <div className="absolute inset-0 z-0 opacity-[0.05] group-hover:opacity-20 transition-all duration-1000">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover grayscale group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080809] via-[#080809]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-30 h-full p-6 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="w-10 h-10 rounded-lg bg-black border border-white/10 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500">
            {service.icon}
          </div>
          
          <div>
            <h3 className="text-sm font-black text-white mb-2 tracking-widest uppercase group-hover:text-cyan-400 transition-colors">
              {service.title}
            </h3>
            <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-wider font-medium opacity-80 group-hover:opacity-100">
              {service.description}
            </p>
          </div>
        </div>

        {/* Footer Track */}
        <div className="pt-4 mt-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[8px] font-black text-white/10 uppercase tracking-[0.3em] group-hover:text-cyan-500/40 transition-colors">
              SYS_ACTIVE
            </span>
            <motion.div animate={{ x: hovered ? 0 : 5, opacity: hovered ? 1 : 0 }}>
              <ArrowRight className="w-3 h-3 text-cyan-400" />
            </motion.div>
          </div>
          <div className="h-[1px] w-full bg-white/5 relative overflow-hidden">
            <motion.div 
              animate={{ width: hovered ? '100%' : '0%' }}
              className="absolute inset-y-0 left-0 bg-cyan-500 shadow-[0_0_8px_#22d3ee]" 
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}