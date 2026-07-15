import React from 'react';
import { motion } from 'motion/react';
import { Home, Building, Compass, Palette, Layers, Monitor, Check } from 'lucide-react';
import { services } from '../data';
import { Service } from '../types';

// Map icon strings to actual Lucide Components for 100% type safety and performance
const iconMap: Record<string, React.ComponentType<any>> = {
  Home: Home,
  Building: Building,
  Compass: Compass,
  Palette: Palette,
  Layers: Layers,
  Monitor: Monitor,
};

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FAFAFA] relative overflow-hidden">
      {/* Decorative architectural background circle */}
      <div className="absolute right-[-10%] top-[20%] w-[600px] h-[600px] rounded-full border border-zinc-200/40 pointer-events-none" />
      <div className="absolute left-[-5%] bottom-[10%] w-[400px] h-[400px] rounded-full border border-zinc-200/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] font-mono text-gold tracking-[0.3em] uppercase block">Atelier Capabilities</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-luxury-dark tracking-tight leading-tight">
            Our Architectural & <br />
            <span className="italic font-normal text-gold">Interior Services.</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold/50 mx-auto my-4" />
          <p className="text-luxury-gray text-xs sm:text-sm font-light leading-relaxed">
            From spatial conception to the final hand-polished brass handle, Lumière Studio provides absolute turnkey design and project execution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service: Service, index: number) => {
            const IconComponent = iconMap[service.iconName] || Compass;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white p-8 rounded-3xl border border-zinc-200/50 shadow-sm hover:shadow-xl hover:shadow-zinc-200/40 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between min-h-[380px]"
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-3xl" />

                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-2xl bg-[#F4F1EB] text-gold flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-medium text-luxury-dark tracking-wide mb-3 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-luxury-gray text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bullets feature list */}
                <div className="pt-6 border-t border-zinc-100 space-y-2.5">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#F4F1EB] flex items-center justify-center text-gold shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-xs text-luxury-dark/80 font-sans font-light">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
