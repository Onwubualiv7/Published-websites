import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Projects from './components/Projects';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Statistics from './components/Statistics';
import Team from './components/Team';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Elite preloader simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#1F2937] flex flex-col items-center justify-center text-white"
          >
            {/* Elegant luxury loading experience */}
            <div className="relative flex flex-col items-center">
              {/* Spinning geometric thin lines */}
              <motion.div
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: 360, opacity: 0.2 }}
                transition={{ duration: 2.2, ease: 'linear', repeat: Infinity }}
                className="absolute w-28 h-28 rounded-full border border-dashed border-white"
              />
              
              <div className="flex flex-col items-center">
                <motion.span
                  initial={{ tracking: '0.1em', opacity: 0 }}
                  animate={{ tracking: '0.35em', opacity: 1 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="font-serif text-2xl sm:text-3xl tracking-[0.35em] font-light block"
                >
                  LUMIÈRE
                </motion.span>
                <motion.span
                  initial={{ tracking: '0.15em', opacity: 0 }}
                  animate={{ tracking: '0.5em', opacity: 0.5 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                  className="text-[9px] font-mono uppercase tracking-[0.5em] text-gold -mt-1"
                >
                  STUDIO
                </motion.span>
              </div>

              {/* Progress Bar */}
              <div className="w-16 h-[1.5px] bg-white/10 rounded-full mt-6 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.4, ease: 'easeInOut' }}
                  className="h-full bg-gold"
                />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="min-h-screen bg-luxury-bg selection:bg-gold selection:text-white relative">
        {/* Navigation */}
        <Navigation onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Master Landing Page Chapters */}
        <main>
          {/* Chapter 1: Hero Cover */}
          <Hero onOpenConsultation={() => setIsConsultationOpen(true)} />

          {/* Chapter 2: The Trust & Heritage */}
          <Trust />

          {/* Chapter 3: Selected Masterpieces Portfolio */}
          <Projects />

          {/* Chapter 4: Core Capabilities */}
          <Services />

          {/* Chapter 5: Methodology Timeline */}
          <WhyChooseUs />

          {/* Chapter 6: The Living Experience (Testimonials) */}
          <Testimonials />

          {/* Chapter 7: Legacy Stats */}
          <Statistics />

          {/* Chapter 8: Creative Guild Leads */}
          <Team />

          {/* Chapter 9: Curious Inquiries (FAQs) */}
          <FAQ />

          {/* Chapter 10: Inquire CTA */}
          <CTA onOpenConsultation={() => setIsConsultationOpen(true)} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Consultation Concierge Modal Drawer */}
        <ConsultationModal 
          isOpen={isConsultationOpen} 
          onClose={() => setIsConsultationOpen(false)} 
        />
      </div>
    </>
  );
}
