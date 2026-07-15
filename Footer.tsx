import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  // Auto scroll testimonials every 8s
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  // Sliding motion variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0
    })
  };

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-luxury-accent relative overflow-hidden">
      {/* Background large decorative Quotes */}
      <div className="absolute left-10 top-10 opacity-[0.03] text-[#1F2937] pointer-events-none select-none">
        <Quote className="w-80 h-80" />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-10 text-center">
        
        {/* Section Title */}
        <div className="space-y-4 mb-14">
          <span className="text-[10px] font-mono text-gold tracking-[0.3em] uppercase block">Client Chronicles</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-luxury-dark tracking-tight">
            The Living <span className="italic font-normal text-gold">Experience.</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[380px] sm:min-h-[320px] flex flex-col justify-between">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Testimonial Quote */}
              <blockquote className="font-serif text-lg sm:text-2xl md:text-3xl font-light italic text-luxury-dark leading-relaxed max-w-3xl mb-8">
                "{current.text}"
              </blockquote>

              {/* Author Info block */}
              <div className="flex items-center gap-4 mt-2">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-gold/30 p-0.5">
                  <img
                    src={current.image}
                    alt={current.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="text-left">
                  <span className="font-serif text-base sm:text-lg font-medium text-luxury-dark block leading-none">
                    {current.name}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-luxury-gray mt-1 block">
                    {current.role} · <span className="text-gold">{current.company}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              id="testimonial-prev-btn"
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white text-luxury-dark hover:text-white border border-zinc-200/60 hover:bg-gold hover:border-gold transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2.5">
              {testimonials.map((_, idx) => (
                <button
                  id={`testimonial-dot-${idx}`}
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? 'w-6 bg-gold' : 'bg-zinc-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              id="testimonial-next-btn"
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white text-luxury-dark hover:text-white border border-zinc-200/60 hover:bg-gold hover:border-gold transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
