'use client'

import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  solutions: ['Network Perimeter', 'Endpoint Security', 'Email Security', 'Data Continuity', 'Security Audits'],
  company: ['About Us', 'Blog', 'Careers', 'Events', 'Press']
}

export default function Footer() {
  return (
    <footer className="bg-[#08090B] pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Top Precision Scan Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Module (4 Columns) */}
          <div className="md:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded bg-white flex items-center justify-center">
                <span className="text-black font-black text-[10px]">DM</span>
              </div>
              <span className="font-bold text-white text-sm tracking-tighter uppercase">DM_Systems</span>
            </div>
            
            <p className="text-[11px] text-slate-500 uppercase tracking-widest leading-relaxed max-w-60">
              Fortifying enterprise infrastructure since 1999. <br /> 
              <span className="text-white/20">Trusted by 200+ global organizations.</span>
            </p>

            <div className="flex gap-2">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg border border-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                  <Icon className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid (5 Columns) */}
          <div className="md:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em] mb-8">Solutions_List</h4>
              <ul className="space-y-4">
                {footerLinks.solutions.map((item) => (
                  <li key={item}>
                    <a href="#" className="group flex items-center text-[11px] text-slate-500 hover:text-white transition-colors uppercase tracking-tight">
                      {item}
                      <ArrowUpRight className="w-2 h-2 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-8">Directory</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[11px] text-slate-500 hover:text-white transition-colors uppercase tracking-tight">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Module (3 Columns) */}
          <div className="md:col-span-3 space-y-8">
            <h4 className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-8">Base_Operations</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-3 h-3 text-cyan-500 mt-1" />
                <div className="text-[10px] text-slate-500 uppercase tracking-wider leading-relaxed font-medium">
                  <span className="text-white block mb-1">New Delhi HQ</span>
                  Connaught Place, 110001 <br /> India
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-3 h-3 text-white/20" />
                <span className="text-[10px] text-slate-500 font-bold tabular-nums">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-3 h-3 text-white/20" />
                <span className="text-[10px] text-slate-500 font-bold lowercase tracking-tight">info@dmsystems.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Pure Micro-Data */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">
              &copy; 2024 DM_Systems_Intl. All_Systems_Operational.
            </p>
          </div>
          
          <div className="flex gap-8">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-[9px] font-black text-slate-600 hover:text-cyan-500 uppercase tracking-[0.3em] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}