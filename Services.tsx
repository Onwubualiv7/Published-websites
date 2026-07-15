import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Compass, PhoneCall } from 'lucide-react';

interface NavigationProps {
  onOpenConsultation: () => void;
}

export default function Navigation({ onOpenConsultation }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of floating nav
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav
        id="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled 
            ? 'py-3.5 bg-white/70 backdrop-blur-md border-b border-white/10 shadow-sm' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          
          {/* Logo Branding */}
          <a 
            href="#hero" 
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex flex-col select-none group"
          >
            <span className={`font-serif text-xl sm:text-2xl font-light tracking-[0.25em] transition-colors duration-300 ${
              scrolled ? 'text-luxury-dark' : 'text-luxury-dark md:text-white'
            }`}>
              LUMIÈRE
            </span>
            <span className={`text-[8px] font-mono uppercase tracking-[0.4em] text-gold -mt-1 group-hover:tracking-[0.55em] transition-all duration-300`}>
              STUDIO
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[11px] font-sans font-medium uppercase tracking-[0.2em] relative py-1 transition-colors duration-300 group ${
                  scrolled 
                    ? 'text-luxury-dark/70 hover:text-luxury-dark' 
                    : 'text-white/85 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold group-hover:w-full transition-all duration-300`} />
              </a>
            ))}
          </div>

          {/* Consultation CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="nav-consultation-btn"
              onClick={onOpenConsultation}
              className={`font-sans text-[10px] font-medium uppercase tracking-[0.2em] py-2.5 px-5 rounded-full border transition-all duration-300 flex items-center gap-2 group cursor-pointer ${
                scrolled
                  ? 'border-luxury-dark bg-luxury-dark text-white hover:bg-gold hover:border-gold'
                  : 'border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-luxury-dark'
              }`}
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Burger Trigger */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer ${
              scrolled 
                ? 'text-luxury-dark hover:bg-black/5' 
                : 'text-luxury-dark md:text-white hover:bg-white/10'
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-30 bg-luxury-dark md:hidden flex flex-col justify-between pt-24 pb-12 px-8"
          >
            {/* Background design accents */}
            <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
              <Compass className="w-96 h-96 text-white" />
            </div>

            {/* Links Block */}
            <div className="flex flex-col space-y-6 mt-6">
              <span className="text-[10px] font-mono text-gold tracking-widest uppercase">Atelier Directory</span>
              <div className="space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.name}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="font-serif text-3xl font-light text-white hover:text-gold transition-colors block"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Contact & Action */}
            <div className="space-y-6">
              <div className="h-[1px] bg-white/10" />
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase">Direct Line</span>
                <a href="tel:+442079460192" className="text-white text-sm font-light hover:text-gold transition-colors flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-gold" />
                  +44 (0) 20 7946 0192
                </a>
              </div>

              <button
                id="mobile-nav-consultation-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-gold text-white font-sans text-xs uppercase tracking-widest py-3 px-6 rounded-xl hover:bg-gold-hover transition-colors flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
