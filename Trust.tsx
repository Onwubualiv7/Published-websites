import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, Sparkles, Send, MapPin, Calendar, DollarSign } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    projectType: 'Residential Design',
    budget: '$100k - $250k',
    timeline: '3 - 6 Months',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate luxury concierge processing
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 1500);
  };

  const projectTypes = [
    'Residential Design',
    'Commercial Design',
    'Luxury Renovation',
    'Furniture Styling',
    'Space Planning',
  ];

  const budgets = [
    'Under $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    '$500,000 - $1,000,000',
    '$1,000,000+'
  ];

  const timelines = [
    'Immediate (Within 1 Month)',
    '1 - 3 Months',
    '3 - 6 Months',
    '6+ Months',
    'Flexible'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="consultation-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 shadow-2xl glass-panel-dark max-h-[90vh] flex flex-col md:flex-row"
          >
            {/* Sidebar Branding Panel (Hidden on mobile) */}
            <div className="relative hidden md:flex md:w-2/5 flex-col justify-between p-8 bg-cover bg-center text-white" style={{ backgroundImage: `linear-gradient(to bottom, rgba(31, 41, 55, 0.7), rgba(17, 17, 17, 0.95)), url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80')` }}>
              <div>
                <span className="font-serif italic text-gold text-lg block mb-2">Lumière Studio</span>
                <h3 className="font-serif text-3xl font-light tracking-wide leading-tight">Begin Your Creative Journey</h3>
                <div className="w-12 h-[1px] bg-gold/50 my-6" />
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  Connect with our principal architects and material specialists to compose a space that honors your lifestyle.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-white/60 font-mono">
                  <MapPin className="w-4 h-4 text-gold shrink-0" />
                  <span>London · Zurich · New York</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/60 font-mono">
                  <Calendar className="w-4 h-4 text-gold shrink-0" />
                  <span>Consultations Mon - Sat</span>
                </div>
                <div className="text-[10px] text-white/40 font-mono uppercase tracking-widest mt-4">
                  © 2026 LUMIÈRE STUDIO ARCHITECTS
                </div>
              </div>
            </div>

            {/* Main Form Area */}
            <div className="w-full md:w-3/5 p-6 sm:p-8 md:p-10 bg-[#FAFAFA]/95 text-luxury-text overflow-y-auto max-h-[85vh] md:max-h-none flex flex-col justify-center">
              <button
                id="close-modal-button"
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full text-luxury-text/60 hover:text-luxury-text hover:bg-black/5 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.div
                    key="form-container"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6">
                      <span className="text-[10px] text-gold font-mono uppercase tracking-widest block mb-1">Tailored Concierge</span>
                      <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-luxury-dark">Aesthetic Inquiry</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[11px] font-mono uppercase tracking-wider text-luxury-gray">Full Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Alistair Vance"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:border-gold focus:outline-none bg-white text-sm transition-colors"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-mono uppercase tracking-wider text-luxury-gray">Email Address</label>
                          <input
                            type="email"
                            required
                            placeholder="alistair@vance-art.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:border-gold focus:outline-none bg-white text-sm transition-colors"
                          />
                        </div>
                      </div>

                      {/* Phone & Location */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[11px] font-mono uppercase tracking-wider text-luxury-gray">Phone (Optional)</label>
                          <input
                            type="tel"
                            placeholder="+44 7911 123456"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:border-gold focus:outline-none bg-white text-sm transition-colors"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-mono uppercase tracking-wider text-luxury-gray">Project Location</label>
                          <input
                            type="text"
                            required
                            placeholder="Chelsea, London"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:border-gold focus:outline-none bg-white text-sm transition-colors"
                          />
                        </div>
                      </div>

                      {/* Dropdowns */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="space-y-1">
                          <label className="text-[11px] font-mono uppercase tracking-wider text-luxury-gray">Design Focus</label>
                          <select
                            value={formData.projectType}
                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            className="w-full px-3 py-2.5 rounded-xl border border-zinc-200 focus:border-gold focus:outline-none bg-white text-xs transition-colors"
                          >
                            {projectTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-mono uppercase tracking-wider text-luxury-gray">Est. Investment</label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full px-3 py-2.5 rounded-xl border border-zinc-200 focus:border-gold focus:outline-none bg-white text-xs transition-colors"
                          >
                            {budgets.map((b) => (
                              <option key={b} value={b}>{b}</option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-mono uppercase tracking-wider text-luxury-gray">Desired Timeline</label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="w-full px-3 py-2.5 rounded-xl border border-zinc-200 focus:border-gold focus:outline-none bg-white text-xs transition-colors"
                          >
                            {timelines.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-luxury-gray">Tell us about your spatial aspirations</label>
                        <textarea
                          rows={3}
                          placeholder="Briefly describe the atmosphere, materials, or structural elements you imagine..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:border-gold focus:outline-none bg-white text-sm transition-colors resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        id="submit-consultation-form"
                        type="submit"
                        disabled={loading}
                        className="w-full mt-4 bg-luxury-dark text-white font-sans text-xs uppercase tracking-widest py-3 px-6 rounded-xl hover:bg-gold transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-75 disabled:pointer-events-none"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Aesthetic Validation...</span>
                          </>
                        ) : (
                          <>
                            <span>Request Atelier Session</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', damping: 20 }}
                    className="flex flex-col items-center justify-center text-center py-10 px-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 border border-gold/20">
                      <Check className="w-8 h-8 text-gold animate-pulse" />
                    </div>

                    <span className="text-[10px] text-gold font-mono uppercase tracking-widest mb-2 block">Inquiry Authenticated</span>
                    <h2 className="font-serif text-3xl font-medium text-luxury-dark mb-4 tracking-tight">An Atelier Invitation Awaits</h2>
                    
                    <p className="text-luxury-gray text-sm max-w-md leading-relaxed mb-8">
                      Thank you, <span className="text-luxury-dark font-medium">{formData.name}</span>. Our Lead Concierge and Creative Director are reviewing your spatial inquiry. You will receive an architectural brief and calendar link within 24 hours.
                    </p>

                    <button
                      id="modal-success-close"
                      onClick={() => {
                        setFormSubmitted(false);
                        onClose();
                      }}
                      className="bg-luxury-dark text-white font-sans text-[11px] uppercase tracking-widest py-2.5 px-6 rounded-xl hover:bg-gold transition-colors duration-300 cursor-pointer"
                    >
                      Return to Gallery
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
