import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Calendar, MoveUpRight, Grid } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Luxury Homes', 'Hotels', 'Corporate', 'Apartments'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#1F2937] text-white overflow-hidden relative">
      {/* Decorative dark architectural blueprint grid line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-white/5" />
      <div className="absolute left-10 inset-y-0 w-[1px] bg-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-[10px] font-mono text-gold tracking-[0.3em] uppercase block">Selected Masterpieces</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight leading-none">
              A Living <span className="italic font-normal text-gold">Portfolio.</span>
            </h2>
            <p className="text-white/60 font-sans text-xs sm:text-sm font-light max-w-md">
              A curated anthology of private residences and public monuments. Each commission is an individual response to landscape, scale, and soul.
            </p>
          </div>

          {/* Luxury Categories Filter Tab */}
          <div className="flex flex-wrap gap-2 border-b border-white/10 pb-2 overflow-x-auto scrollbar-none max-w-full">
            {categories.map((category) => (
              <button
                id={`category-btn-${category.replace(' ', '-').toLowerCase()}`}
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-[10px] font-mono uppercase tracking-widest relative transition-colors duration-300 cursor-pointer ${
                  activeCategory === category ? 'text-gold' : 'text-white/55 hover:text-white'
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    className="absolute bottom-[-2.5px] left-0 right-0 h-[2.5px] bg-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, index: number) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                key={project.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white/5 border border-white/10 h-[520px] shadow-lg hover:shadow-2xl hover:shadow-black/40 transition-all duration-500"
              >
                {/* Image Wrap */}
                <div className="relative w-full h-[360px] overflow-hidden">
                  {/* Subtle Gradient Hover Shroud */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/90 via-[#1F2937]/25 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Real-time zoom of premium image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover origin-center scale-100 group-hover:scale-108 transition-transform duration-700 ease-[0.16,1,0.3,1]"
                  />

                  {/* Top floating Tag */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-gold font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover floating action */}
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <div className="w-9 h-9 rounded-full bg-gold text-white flex items-center justify-center border border-white/10 shadow-lg">
                      <MoveUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-6 flex-grow flex flex-col justify-between bg-gradient-to-b from-white/5 to-white/[0.02]">
                  <div>
                    {/* Location & Year */}
                    <div className="flex items-center gap-4 text-[10px] font-mono text-white/50 uppercase tracking-wider mb-2">
                      <span className="flex items-center gap-1">
                        <Compass className="w-3.5 h-3.5 text-gold" />
                        {project.location}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gold" />
                        {project.year}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-white tracking-wide group-hover:text-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Spatial Metrics and Short Descriptive Detail */}
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                    <p className="text-xs text-white/70 font-sans font-light leading-relaxed max-w-[70%] line-clamp-1">
                      {project.description}
                    </p>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-gold block uppercase tracking-widest">AREA</span>
                      <span className="text-xs font-sans text-white/90 font-medium">{project.area}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Callout Footer */}
        <div className="mt-16 text-center">
          <p className="text-white/40 font-mono text-[10px] uppercase tracking-[0.2em]">
            More than 180 legacy projects archived offline in our London atelier · For inquiries, contact curation
          </p>
        </div>

      </div>
    </section>
  );
}
