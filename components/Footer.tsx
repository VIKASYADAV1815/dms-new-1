'use client'

import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  solutions: ['Network Perimeter', 'Endpoint Security', 'Email Security', 'Data Continuity', 'Security Audits'],
  company: ['About Us', 'Blog', 'Careers', 'Events', 'Press']
}

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 relative overflow-hidden border-t border-slate-200">
      
      
      {/* Top Precision Scan Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-green-700/40 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Module (4 Columns) */}
          <div className="md:col-span-4 space-y-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-premium border border-slate-100 overflow-hidden">
                <img 
                  src="https://dmsystems.in/wp-content/uploads/2020/01/DM-Logo-100-100-2014.jpg" 
                  alt="DM Systems Logo" 
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <span className="font-black text-slate-900 text-base tracking-tighter uppercase">DM_Systems</span>
            </div>
            
            <p className="text-[12px] text-slate-700 uppercase font-bold tracking-widest leading-relaxed max-w-64">
              Fortifying enterprise infrastructure since 1999. <br /> 
              <span className="text-slate-400">Trusted by 200+ global organizations.</span>
            </p>

            <div className="flex gap-3">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-[#15803D] hover:text-white transition-all duration-300 shadow-sm hover:shadow-premium">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid (5 Columns) */}
          <div className="md:col-span-5 grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-[11px] font-black text-green-700 uppercase tracking-[0.4em] mb-10">Solutions_List</h4>
              <ul className="space-y-6">
                {footerLinks.solutions.map((item) => (
                  <li key={item}>
                    <a href="#" className="group flex items-center text-[12px] text-slate-600 font-bold hover:text-slate-900 transition-colors uppercase tracking-tight">
                      {item}
                      <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-green-700" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-black text-slate-300 uppercase tracking-[0.4em] mb-10">Directory</h4>
              <ul className="space-y-6">
                {footerLinks.company.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[12px] text-slate-600 font-bold hover:text-slate-900 transition-colors uppercase tracking-tight">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Module (3 Columns) */}
          <div className="md:col-span-3 space-y-10">
            <h4 className="text-[11px] font-black text-slate-300 uppercase tracking-[0.4em] mb-10">Base_Operations</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-green-700 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-[11px] text-slate-700 uppercase tracking-widest leading-relaxed font-bold">
                  <span className="text-slate-900 block mb-1">New Delhi HQ</span>
                  Connaught Place, 110001 <br /> India
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-400 shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-[11px] text-slate-700 font-black tabular-nums tracking-widest">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-400 shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-[11px] text-slate-700 font-black lowercase tracking-widest">info@dmsystems.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Pure Micro-Data */}
        <div className="pt-12 border-t-2 border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-2.5 h-2.5 rounded-full bg-green-700 animate-pulse shadow-[0_0_8px_#15803D]" />
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
              &copy; 2024 DM_Systems_Intl. All_Systems_Operational.
            </p>
          </div>
          <div className="flex gap-12">
            <a href="#" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] hover:text-slate-900 transition-colors">Compliance_Protocols</a>
            <a href="#" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] hover:text-slate-900 transition-colors">Privacy_Layer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}