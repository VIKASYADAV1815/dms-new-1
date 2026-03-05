'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Monitor, BarChart3, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Network Perimeter',
    description: 'Advanced firewall systems and multi-layered intrusion detection protocols designed to create an impenetrable digital fortress around your corporate assets.',
    icon: <Shield className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    features: ['Next-Gen AI Firewall', 'DDoS Kinetic Shield', 'SD-WAN Encrypted Tunneling']
  },
  {
    id: 2,
    title: 'Endpoint Defense',
    description: 'Securing every access vector. Our EDR solutions provide real-time behavioral monitoring and automated kill-switch response for all connected enterprise units.',
    icon: <Monitor className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    features: ['Behavioral Zero-Day Analysis', 'Automated Ransomware Isolation', 'Universal Device Control']
  },
  {
    id: 3,
    title: 'Data Continuity',
    description: 'Ensuring your operations never cease. Automated real-time replication and rapid disaster recovery protocols for total organizational resilience.',
    icon: <BarChart3 className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    features: ['Geographic Cloud Replication', 'Instantaneous VM Recovery', 'Immutable Data Archiving']
  },
  {
    id: 4,
    title: 'Identity Integrity',
    description: 'Military-grade IAM and biometric authentication layers. We ensure that only authorized personnel can access sensitive infrastructure nodes.',
    icon: <Mail className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    features: ['Biometric Multi-Factor Auth', 'Zero-Trust Identity Verification', 'Privileged Access Management']
  }
];

export function ServicesEnhanced() {
  return (
    <section className="bg-linear-to-b from-cyan-50/20 via-white to-white py-24 px-6 relative overflow-hidden border-t border-cyan-100">
      {/* Darker Dot Grid with Fade Out */}
      <div className="absolute inset-0 dot-grid-cyan pointer-events-none [mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8 text-center lg:text-left">
          <div className="flex-1">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="h-px w-10 bg-cyan-700" />
              <span className="text-[10px] font-black text-cyan-700 uppercase tracking-[0.4em]">Tactical_Service_Matrix_V4</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 uppercase leading-[0.9]">
              CORE <br />
              <span className="text-transparent bg-clip-text bg-linear-to-b from-cyan-500 via-cyan-600 to-cyan-800 italic font-medium">CAPABILITIES.</span>
            </h2>
          </div>
          <div className="max-w-md space-y-4 mx-auto lg:mx-0">
            <p className="text-sm sm:text-base text-slate-700 font-bold leading-relaxed border-l-4 border-cyan-600 pl-6 uppercase tracking-wider">
              Our modular security stack provides end-to-end protection across the entire digital attack surface, from the physical hardware layer to complex multi-cloud environments.
            </p>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] pl-7">
              Optimized for high-compliance industries including Finance, Healthcare, and Government sectors.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      className="group relative h-[520px] rounded-[2rem] bg-white border border-cyan-100 overflow-hidden hover:border-cyan-600 shadow-premium hover:shadow-cyan transition-all duration-500"
    >
      {/* --- PREMIUM DOT PATTERN --- */}
      <div className="absolute inset-0 btn-dot-pattern opacity-0 group-hover:opacity-10 transition-opacity z-10" />

      {/* Image Reveal with color */}
      <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-40 transition-all duration-1000">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/80 to-white" />
      </div>

      <div className="relative z-20 h-full p-8 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-8">
            <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-premium group-hover:bg-cyan-700 transition-colors">
              <div className="group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
            </div>
            <span className="text-[12px] font-black text-cyan-200 group-hover:text-cyan-700 transition-colors tracking-widest">LAYER_{index + 1}</span>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-cyan-700 transition-colors uppercase leading-none">
            {service.title}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed font-bold opacity-90 group-hover:text-slate-900 transition-colors mb-8">
            {service.description}
          </p>

          <ul className="space-y-3">
            {service.features.map((feature: string) => (
              <li key={feature} className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-700 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 shadow-[0_0_8px_#0891b2]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <motion.div 
            animate={hovered ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            className="pt-6 border-t-2 border-cyan-50 flex items-center justify-between text-[10px] font-black text-cyan-700 uppercase tracking-widest"
          >
            <span>Initialize Deployment</span>
            <div className="w-7 h-7 rounded-full bg-cyan-600 flex items-center justify-center text-white">
               <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}