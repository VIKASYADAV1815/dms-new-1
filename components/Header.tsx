'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Industries', href: '#industries' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'About', href: '#about' },
  ];

  // Animation variants for the staggered mobile links
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2, ease: "easeOut" }
    },
    closed: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { ease: [0.16, 1, 0.3, 1] }
    }
  };

  const itemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -10 }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-100 px-4 py-3 mx-auto max-w-7xl"
    >
      <div 
        className={`relative flex items-center justify-between px-5 py-2.5 rounded-xl transition-all duration-700 border ${
          isScrolled || isOpen
            ? 'bg-white/80 backdrop-blur-2xl border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)]' 
            : 'bg-transparent border-transparent'
        }`}
      >
        {/* Optical Glass Glow */}
        {(isScrolled || isOpen) && (
          <div className="absolute inset-0 rounded-xl bg-linear-to-b from-slate-50/50 to-transparent pointer-events-none" />
        )}

        {/* --- LOGO --- */}
        <div className="flex items-center gap-2.5 group cursor-pointer relative z-110">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-cyan-600/10 rounded-lg blur-lg group-hover:bg-cyan-600/20 transition-all duration-500" />
            <div className="relative w-full h-full bg-white backdrop-blur-md rounded-lg flex items-center justify-center border border-slate-200 overflow-hidden shadow-sm">
                <img 
                  src="https://dmsystems.in/wp-content/uploads/2020/01/DM-Logo-100-100-2014.jpg" 
                  alt="DM Systems Logo" 
                  className="w-full h-full object-contain p-1"
                />
                <motion.div 
                    animate={{ x: [-35, 35] }} 
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent w-full"
                />
            </div>
          </div>
          <span className="font-bold text-slate-900 tracking-tighter text-sm uppercase">
            DM <span className="text-cyan-700 font-bold">SYSTEMS</span>
          </span>
        </div>

        {/* --- DESKTOP NAV --- */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-[10px] font-black text-slate-700 hover:text-cyan-700 transition-all rounded-full hover:bg-slate-100 relative group overflow-hidden uppercase tracking-[0.2em]"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cyan-600 transition-all group-hover:w-1/2" />
            </a>
          ))}
        </nav>

        {/* --- DESKTOP CTA --- */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            className="group relative bg-[#007B98] text-white hover:bg-[#006a84] px-5 h-9 rounded-lg text-[9px] font-black tracking-[0.2em] transition-all active:scale-95 shadow-premium overflow-hidden uppercase"
          >
            <div className="absolute inset-0 btn-dot-pattern opacity-20" />
            <span className="relative z-10 flex items-center gap-2">
              Book Audit <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </Button>
        </div>

        {/* --- MOBILE HAMBURGER (CUSTOM MORPH) --- */}
        <button
          className="lg:hidden relative z-110 w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-[#007B98] border border-[#006a84]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-white rounded-full transition-transform origin-center"
          />
          <motion.span 
            animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            className="w-5 h-0.5 bg-white/60 rounded-full transition-all"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-white rounded-full transition-transform origin-center"
          />
        </button>
      </div>

      {/* --- MOBILE OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden absolute top-20 left-6 right-6 p-6 bg-white/95 backdrop-blur-3xl border border-slate-200 rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.1)] z-100"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <motion.a
                  variants={itemVariants}
                  key={link.label}
                  href={link.href}
                  className="text-2xl font-bold text-slate-900/70 hover:text-slate-900 transition-colors uppercase tracking-widest"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div variants={itemVariants} className="pt-6 mt-2 border-t border-slate-100">
                <Button className="w-full h-14 bg-[#007B98] text-white font-extrabold rounded-2xl text-base shadow-xl active:scale-95 uppercase tracking-[0.2em] hover:bg-[#006a84]">
                  Contact Specialist
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}