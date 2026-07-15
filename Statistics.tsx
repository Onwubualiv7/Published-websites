import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Calendar, Check, ArrowDownCircle, ChevronDown, Sparkles } from 'lucide-react';
import { processSteps } from '../data';
import { ProcessStep } from '../types';

export default function WhyChooseUs() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="why-choose-us" className="py-24 sm:py-32 bg-white overflow-hidden relative">
      {/* Structural layout grid lines */}
      <div className="absolute right-24 inset-y-0 w-[1px] bg-zinc-100 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Title */}
        <div className="mb-20 space-y-4">
          <span className="text-[10px] font-mono text-gold tracking-[0.3em] uppercase block">Our Methodology</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-luxury-dark tracking-tight">
            How We Shape Your <span className="italic font-normal text-gold">Vision.</span>
          </h2>
          <p className="text-luxury-gray text-xs sm:text-sm font-light max-w-xl leading-relaxed">
            The transformation of an architectural space requires absolute procedural clarity. We operate a highly transparent, 5-stage creative timeline to bring masterpieces from paper to reality.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Premium Photography with Floating Accents */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-zinc-300/60 aspect-[3/4]">
              {/* Image with zoom on load */}
              <motion.img
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
                alt="Architects selecting stone and premium wood samples"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {/* Subtle vignette layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-white/20">
                <span className="text-[9px] font-mono text-gold uppercase tracking-widest block mb-1">Meticulous Detail</span>
                <p className="text-luxury-dark font-serif text-sm italic">
                  "Every grain of oak, every slab of vein-cut travertine is hand-inspected in our atelier prior to installation."
                </p>
              </div>
            </div>

            {/* floating decorative element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border border-gold/30 flex items-center justify-center p-2 bg-white/40 backdrop-blur-sm hidden sm:flex">
              <div className="w-full h-full rounded-full bg-[#F4F1EB] flex flex-col items-center justify-center text-center">
                <span className="font-serif text-[11px] text-gold font-medium">100%</span>
                <span className="text-[6px] font-mono uppercase tracking-widest text-luxury-dark -mt-1">Bespoke</span>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Vertical Timeline */}
          <div className="lg:col-span-7 space-y-4">
            {processSteps.map((step: ProcessStep, index: number) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={step.phase}
                  className={`border rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden ${
                    isActive 
                      ? 'bg-[#F4F1EB]/40 border-gold shadow-md' 
                      : 'bg-[#FAFAFA] border-zinc-200/50 hover:bg-[#F4F1EB]/20 hover:border-zinc-300'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Header */}
                  <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4 sm:gap-6">
                      {/* Step Number Badge */}
                      <span className={`font-serif text-lg sm:text-2xl font-light ${isActive ? 'text-gold' : 'text-luxury-gray/70'}`}>
                        {step.phase}
                      </span>
                      
                      {/* Title & Duration */}
                      <div>
                        <h3 className="font-serif text-base sm:text-lg font-medium text-luxury-dark tracking-wide">
                          {step.title}
                        </h3>
                        <span className="text-[10px] font-mono text-luxury-gray block uppercase tracking-widest mt-0.5">
                          {step.duration}
                        </span>
                      </div>
                    </div>

                    <div className={`p-1.5 rounded-full bg-white border border-zinc-200 text-luxury-gray transition-transform duration-300 ${isActive ? 'rotate-180 text-gold border-gold/30' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Step Details Drawer */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-zinc-200/40 space-y-4">
                          <p className="text-luxury-gray text-xs sm:text-sm font-light leading-relaxed">
                            {step.description}
                          </p>

                          {/* Bullet Checklist */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                            {step.details.map((detail, dIdx) => (
                              <div key={dIdx} className="flex items-center gap-2">
                                <div className="w-4.5 h-4.5 rounded-full bg-white border border-gold/20 flex items-center justify-center text-gold shrink-0">
                                  <Check className="w-2.5 h-2.5" />
                                </div>
                                <span className="text-xs text-luxury-dark/80 font-sans font-light">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
