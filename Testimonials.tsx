import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ShieldCheck, Award, Calendar, Layers } from 'lucide-react';
import { clientLogos } from '../data';

// Custom reusable premium counter that animate elegantly
export function AnimatedCounter({ value, duration = 2000, suffix = '', prefix = '' }: { value: number; duration?: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function - easeOutQuad
      const easedProgress = progress * (2 - progress);
      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-serif">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Trust() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 sm:py-32 bg-luxury-bg overflow-hidden relative">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C8A97E_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.12] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Publication Logos Banner */}
        <div className="border-b border-zinc-200/60 pb-16 mb-20">
          <p className="text-center text-[10px] font-mono uppercase tracking-[0.3em] text-luxury-gray mb-10">
            Our Works Featured Internationally In
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 0.5, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ opacity: 0.9, scale: 1.05 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="cursor-pointer select-none"
              >
                <span className="font-serif text-lg sm:text-xl font-semibold tracking-[0.15em] uppercase text-luxury-dark text-center block">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Editorial Text + Small Metrics Block */}
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Philosophical Editorial */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] font-mono text-gold tracking-widest uppercase block">The Atelier Legacy</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-luxury-dark tracking-tight leading-tight">
              Honoring structural simplicity, natural materials, and the <span className="italic font-normal text-gold">integrity of craft.</span>
            </h2>
            <div className="w-16 h-[2px] bg-gold/50 my-6" />
            <p className="text-luxury-gray text-sm sm:text-base font-light leading-relaxed max-w-2xl">
              At Lumière Studio, we believe luxury is not loud. It is the silent dialogue between natural light, pure geometric scale, and authentic textures. Founded as a collective of fine artists, master stonemasons, and classicists, we transform architectural voids into highly sensory sanctuaries that enrich your daily life.
            </p>
            <p className="text-luxury-gray text-sm font-light leading-relaxed max-w-2xl">
              Whether building a modern water-front estate in Como, a limestone canyon suite in Utah, or restoring an 18th-century salon in Paris, we execute with absolute emotional reverence and uncompromising museum-grade craftsmanship.
            </p>
          </div>

          {/* Right Column: Key Trust Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6 mt-6 lg:mt-0">
            {/* Metric 1 */}
            <motion.div 
              style={{ y: isInView ? 0 : 30, opacity: isInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-3xl bg-[#F4F1EB] border border-zinc-200/50 flex flex-col justify-between h-48 group hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gold shadow-sm group-hover:bg-[#F4F1EB] transition-colors duration-300">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-light text-luxury-dark tracking-tight">
                  <AnimatedCounter value={15} suffix="+" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-luxury-gray mt-1">
                  Years Experience
                </div>
              </div>
            </motion.div>

            {/* Metric 2 */}
            <motion.div 
              style={{ y: isInView ? 0 : 45, opacity: isInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/50 flex flex-col justify-between h-48 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-full bg-[#F4F1EB] flex items-center justify-center text-gold group-hover:bg-zinc-100 transition-colors duration-300">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-light text-luxury-dark tracking-tight">
                  <AnimatedCounter value={40} suffix="+" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-luxury-gray mt-1">
                  Industry Awards
                </div>
              </div>
            </motion.div>

            {/* Metric 3 */}
            <motion.div 
              style={{ y: isInView ? 0 : 60, opacity: isInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/50 flex flex-col justify-between h-48 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-full bg-[#F4F1EB] flex items-center justify-center text-gold group-hover:bg-zinc-100 transition-colors duration-300">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-light text-luxury-dark tracking-tight">
                  <AnimatedCounter value={250} suffix="+" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-luxury-gray mt-1">
                  Completed Projects
                </div>
              </div>
            </motion.div>

            {/* Metric 4 */}
            <motion.div 
              style={{ y: isInView ? 0 : 75, opacity: isInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-3xl bg-[#F4F1EB] border border-zinc-200/50 flex flex-col justify-between h-48 group hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gold shadow-sm group-hover:bg-[#F4F1EB] transition-colors duration-300">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-light text-luxury-dark tracking-tight">
                  <AnimatedCounter value={98} suffix="%" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-luxury-gray mt-1">
                  Happy Clients
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
