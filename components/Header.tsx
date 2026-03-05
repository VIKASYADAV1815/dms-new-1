'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ArrowUpRight } from 'lucide-react';
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
      className="fixed top-0 left-0 right-0 z-100 px-6 py-4 mx-auto max-w-7xl"
    >
      <div 
        className={`relative flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-700 border ${
          isScrolled || isOpen
            ? 'bg-white/2 backdrop-blur-2xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]' 
            : 'bg-transparent border-transparent'
        }`}
      >
        {/* Optical Glass Glow */}
        {(isScrolled || isOpen) && (
          <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-white/5 to-transparent pointer-events-none" />
        )}

        {/* --- LOGO --- */}
        <div className="flex items-center gap-3 group cursor-pointer relative z-110">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-cyan-400/20 rounded-lg blur-lg group-hover:bg-cyan-400/40 transition-all duration-500" />
            <div className="relative w-full h-full bg-white/5 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20 overflow-hidden">
                <Shield className="w-4 h-4 text-white" />
                <motion.div 
                    animate={{ x: [-40, 40] }} 
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent w-full"
                />
            </div>
          </div>
          <span className="font-bold text-white tracking-tighter text-base">
            DM <span className="text-white/40 font-light">SYSTEMS</span>
          </span>
        </div>

        {/* --- DESKTOP NAV --- */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 text-[12px] font-medium text-white/50 hover:text-white transition-all rounded-full hover:bg-white/5 relative group overflow-hidden"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* --- DESKTOP CTA --- */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            className="group bg-white text-black hover:bg-slate-100 px-6 h-9 rounded-xl text-[11px] font-bold tracking-wide transition-all active:scale-95 shadow-lg shadow-white/5"
          >
            <span className="flex items-center gap-2">
              Get Assessment <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </span>
          </Button>
        </div>

        {/* --- MOBILE HAMBURGER (CUSTOM MORPH) --- */}
        <button
          className="lg:hidden relative z-110 w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-white/5 border border-white/10"
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
            className="md:hidden absolute top-20 left-6 right-6 p-6 bg-[#020306]/90 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.5)] z-100"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <motion.a
                  variants={itemVariants}
                  key={link.label}
                  href={link.href}
                  className="text-2xl font-bold text-white/70 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div variants={itemVariants} className="pt-6 mt-2 border-t border-white/5">
                <Button className="w-full h-14 bg-white text-black font-extrabold rounded-2xl text-base shadow-xl active:scale-95">
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