import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-luxury-dark flex items-center justify-center">
      
      {/* Cinematic Background Image with Ken Burns effect */}
      <motion.div 
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.02, opacity: 0.55 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      {/* Luxury radial vignette overlay for dramatic depth */}
      <div className="absolute inset-0 bg-radial-vignette bg-gradient-to-t from-[#1F2937] via-[#1F2937]/40 to-[#1F2937]/75" />

      {/* Decorative architectural grid lines */}
      <div className="absolute inset-y-0 left-12 sm:left-24 lg:left-32 w-[1px] bg-white/5 pointer-events-none" />
      <div className="absolute inset-y-0 right-12 sm:right-24 lg:right-32 w-[1px] bg-white/5 pointer-events-none" />

      {/* Giant subtle typographic mask */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
          className="font-serif text-[18vw] font-bold text-white tracking-[0.2em] uppercase leading-none translate-y-12"
        >
          ATELIER
        </motion.h2>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center">
        
        {/* Animated Gold Tag */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold font-semibold">
            Award-Winning Interior Architecture
          </span>
        </motion.div>

        {/* Master Headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-[1.1]"
          >
            Designing Spaces That <br />
            <span className="italic font-medium text-gold">Inspire Every Moment.</span>
          </motion.h1>
        </div>

        {/* Subtitle description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/70 font-sans text-sm sm:text-base md:text-lg font-light max-w-2xl leading-relaxed mb-10"
        >
          Lumière Studio orchestrates luxury residential and boutique commercial environments where architectural precision meets warm, quiet luxury.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full justify-center"
        >
          <button
            id="hero-book-btn"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto bg-gold hover:bg-gold-hover text-white font-sans text-xs uppercase tracking-[0.2em] font-medium py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer shadow-lg shadow-gold/15 hover:shadow-gold/25"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
          
          <button
            id="hero-projects-btn"
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 font-sans text-xs uppercase tracking-[0.2em] font-medium py-4 px-8 rounded-full transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>View Projects</span>
          </button>
        </motion.div>
      </div>

      {/* Floating Animated Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: [0.3, 1, 0.3], y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={(e) => {
          const target = document.querySelector('#about');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <span className="text-[9px] font-mono text-white/40 uppercase tracking-[0.3em] font-medium">Scroll to Discover</span>
        <ChevronDown className="w-4 h-4 text-gold" />
      </motion.div>
    </section>
  );
}
