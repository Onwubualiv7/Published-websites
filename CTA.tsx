import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { AnimatedCounter } from './Trust';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function Statistics() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const stats = [
    { value: 250, suffix: '+', label: 'Projects Completed', description: 'Private estates, boutique hotels, and landmark commercial environments.' },
    { value: 98, suffix: '%', label: 'Client Satisfaction', description: 'Exquisite relationships fostered through absolute turnkey precision.' },
    { value: 15, suffix: '+', label: 'Years Experience', description: 'Forging deep connections between natural materials and physical scale.' },
    { value: 40, suffix: '+', label: 'Industry Awards', description: 'Museum recognition and global design architecture nominations.' }
  ];

  return (
    <section ref={sectionRef} id="statistics" className="py-24 sm:py-32 bg-[#111111] text-white relative overflow-hidden">
      
      {/* Structural visual elements */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold/45 to-transparent" />
      <div className="absolute right-[-15%] bottom-[-15%] w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Statistics Headings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] font-mono text-gold tracking-[0.3em] uppercase block">Aesthetic Dominance</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight">
              An Architectural Legacy <br />
              <span className="italic font-normal text-gold">Quantified.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-white/65 font-sans text-xs sm:text-sm font-light max-w-sm ml-auto leading-relaxed">
              Every commission is an opportunity to compose structural silence. Behind these numbers lies fifteen years of absolute artisanal dedication.
            </p>
          </div>
        </div>

        {/* Major Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 35 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-between h-64 hover:bg-white/[0.05] hover:border-gold/30 transition-all duration-500 group"
            >
              {/* Top Row Icon outline */}
              <div className="flex items-center justify-between">
                <Sparkles className="w-4 h-4 text-gold/60 group-hover:text-gold group-hover:rotate-12 transition-all duration-500" />
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/65 transition-colors duration-300" />
              </div>

              {/* Number + labels */}
              <div className="space-y-2">
                <div className="text-5xl sm:text-6xl font-serif font-light text-white tracking-tight leading-none">
                  {isInView ? (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                
                <h3 className="text-xs font-mono uppercase tracking-widest text-gold font-medium">
                  {stat.label}
                </h3>
                
                <p className="text-[11px] text-white/50 font-sans font-light leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
