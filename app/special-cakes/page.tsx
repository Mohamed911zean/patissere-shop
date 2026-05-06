'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Footer } from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, ChevronLeft, Calendar, User, MessageSquare, Palette } from 'lucide-react';
import { cn } from '@/lib/utils';

const OCCASIONS = [
  { name: 'Birthday Cakes', image: '/cake/heart-cake.jpg' },
  { name: 'Wedding Cakes', image: '/cake/royal-cake.png' },
  { name: 'Engagement Cakes', image: '/cake/vadge.jpg' },
  { name: 'Character Cakes', image: '/cake/oreo-cake.jpg' },
];

const FLAVORS = ['Vanilla', 'Chocolate', 'Red Velvet', 'Carrot', 'Lotus', 'Nutella', 'Strawberry'];
const SIZES = ['10 Persons', '20 Persons', '30 Persons', '50+ Persons'];

export default function SpecialCakesPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    occasion: '',
    size: '',
    flavor: '',
    message: '',
    colorTheme: '',
    character: '',
    deliveryDate: '',
  });

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <div className="bg-bg-base relative overflow-hidden pt-10 pb-32">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Hero Section */}
        <div className="relative h-[550px] flex items-center justify-center mb-32 overflow-hidden">
          <Image
            src="/hero-section.png"
            alt="Special Cakes"
            fill
            className="object-cover opacity-20 scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-base/40 via-bg-base/80 to-bg-base" />
          <div className="container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-script text-gold text-5xl mb-6 block drop-shadow-lg">Artisanal Customization</span>
              <h1 className="text-h1 text-text-primary uppercase tracking-[0.2em] font-display mb-8">
                Your <span className="text-gold">Dream</span> Cake
              </h1>
              <div className="w-24 h-[1px] bg-gold/30 mx-auto" />
            </motion.div>
          </div>
        </div>

        <div className="container relative z-10">
          {/* Occasion Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            {OCCASIONS.map((occ, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative h-[450px] group rounded-[2.5rem] overflow-hidden cursor-pointer border border-gold-border/10 shadow-card hover:border-gold-border/30 transition-all duration-700"
              >
                <Image
                  src={occ.image}
                  alt={occ.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/20 to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-display text-text-primary mb-4 group-hover:text-gold transition-colors">{occ.name}</h3>
                    <Button variant="gold" size="sm" className="shadow-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Explore Designs
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom Order Form */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-gold mb-4 block">Commission a Masterpiece</span>
                <h2 className="text-h2 text-text-primary uppercase tracking-[0.1em] font-display">Custom Order Inquiry</h2>
                
                <div className="flex items-center justify-center gap-6 mt-12">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center">
                      <div className={cn(
                        "w-14 h-14 rounded-full flex items-center justify-center font-display text-xl transition-all duration-700 border-2",
                        step >= s 
                          ? "bg-gold border-gold text-text-on-gold shadow-gold scale-110" 
                          : "bg-bg-card/50 text-text-fade border-gold-border/10 backdrop-blur-md"
                      )}>
                        {step > s ? <CheckCircle2 className="w-7 h-7" /> : `0${s}`}
                      </div>
                      {s < 3 && (
                        <div className="w-16 h-[1px] mx-2 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gold-border/20" />
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: step > s ? "100%" : "0%" }}
                            className="absolute inset-0 bg-gold transition-all duration-1000"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div 
              layout
              className="bg-bg-card/40 backdrop-blur-xl border border-gold-border/10 rounded-[3rem] p-10 md:p-16 shadow-card relative overflow-hidden"
            >
              {/* Form decorative element */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-10"
                  >
                    <div className="space-y-6">
                      <label className="text-[11px] uppercase tracking-[0.2em] text-gold font-black flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,169,79,0.6)]" />
                        Occasion Type
                      </label>
                      <select 
                        className="w-full bg-bg-card/50 backdrop-blur-md border border-gold-border/20 rounded-2xl px-8 py-5 text-sm text-text-primary focus:outline-none focus:border-gold/50 transition-all duration-500 appearance-none cursor-pointer hover:border-gold-border/40"
                        onChange={(e) => updateForm('occasion', e.target.value)}
                        value={formData.occasion}
                      >
                        <option value="" className="bg-bg-card">Select Occasion</option>
                        {OCCASIONS.map(o => <option key={o.name} value={o.name} className="bg-bg-card">{o.name}</option>)}
                      </select>
                    </div>

                    <div className="space-y-6">
                      <label className="text-[11px] uppercase tracking-[0.2em] text-gold font-black flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,169,79,0.6)]" />
                        Cake Size / Servings
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {SIZES.map(s => (
                          <button
                            key={s}
                            onClick={() => updateForm('size', s)}
                            className={cn(
                              "px-4 py-4 rounded-2xl border text-[10px] font-black uppercase tracking-widest transition-all duration-500",
                              formData.size === s 
                                ? "bg-gold border-gold text-text-on-gold shadow-gold scale-105" 
                                : "border-gold-border/10 text-text-secondary hover:border-gold/40 hover:bg-gold/5"
                            )}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <label className="text-[11px] uppercase tracking-[0.2em] text-gold font-black flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,169,79,0.6)]" />
                        Flavor Selection
                      </label>
                      <div className="flex flex-wrap gap-4">
                        {FLAVORS.map(f => (
                          <button
                            key={f}
                            onClick={() => updateForm('flavor', f)}
                            className={cn(
                              "px-6 py-4 rounded-2xl border text-[10px] font-black uppercase tracking-widest transition-all duration-500",
                              formData.flavor === f 
                                ? "bg-gold border-gold text-text-on-gold shadow-gold scale-105" 
                                : "border-gold-border/10 text-text-secondary hover:border-gold/40 hover:bg-gold/5"
                            )}
                          >
                            {f}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6">
                      <Button variant="gold" className="w-full h-16 text-[11px] uppercase tracking-[0.3em] font-black shadow-gold group" onClick={() => setStep(2)}>
                        Next Step <ChevronRight className="w-4 h-4 ml-3 transition-transform duration-500 group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-10"
                  >
                    <div className="space-y-6">
                      <label className="text-[11px] uppercase tracking-[0.2em] text-gold font-black flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,169,79,0.6)]" />
                        Visual Direction / Color Theme
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Royal Gold and Midnight White, Ombre Blush..."
                        className="w-full bg-bg-card/50 backdrop-blur-md border border-gold-border/20 rounded-2xl px-8 py-5 text-sm text-text-primary focus:outline-none focus:border-gold/50 transition-all duration-500 placeholder:text-text-fade hover:border-gold-border/40"
                        onChange={(e) => updateForm('colorTheme', e.target.value)}
                        value={formData.colorTheme}
                      />
                    </div>

                    <div className="space-y-6">
                      <label className="text-[11px] uppercase tracking-[0.2em] text-gold font-black flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,169,79,0.6)]" />
                        Calligraphy Message
                      </label>
                      <textarea
                        placeholder="What should our artists write on the masterpiece?"
                        className="w-full bg-bg-card/50 backdrop-blur-md border border-gold-border/20 rounded-2xl px-8 py-5 text-sm text-text-primary focus:outline-none focus:border-gold/50 transition-all duration-500 placeholder:text-text-fade hover:border-gold-border/40 min-h-[150px] resize-none"
                        onChange={(e) => updateForm('message', e.target.value)}
                        value={formData.message}
                      />
                    </div>

                    <div className="flex gap-6 pt-6">
                      <button 
                        onClick={() => setStep(1)}
                        className="flex-1 h-16 rounded-2xl border border-gold-border/10 text-[11px] uppercase tracking-[0.3em] font-black text-text-muted hover:text-gold hover:border-gold/40 transition-all duration-500 flex items-center justify-center group"
                      >
                        <ChevronLeft className="w-4 h-4 mr-3 transition-transform duration-500 group-hover:-translate-x-1" /> Back
                      </button>
                      <Button variant="gold" className="flex-[2] h-16 text-[11px] uppercase tracking-[0.3em] font-black shadow-gold group" onClick={() => setStep(3)}>
                        Final Step <ChevronRight className="w-4 h-4 ml-3 transition-transform duration-500 group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-10"
                  >
                    <div className="space-y-6">
                      <label className="text-[11px] uppercase tracking-[0.2em] text-gold font-black flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,169,79,0.6)]" />
                        Desired Celebration Date
                      </label>
                      <div className="relative group">
                        <input
                          type="date"
                          className="w-full bg-bg-card/50 backdrop-blur-md border border-gold-border/20 rounded-2xl px-8 py-5 text-sm text-text-primary focus:outline-none focus:border-gold/50 transition-all duration-500 cursor-pointer hover:border-gold-border/40 [color-scheme:dark]"
                          onChange={(e) => updateForm('deliveryDate', e.target.value)}
                          value={formData.deliveryDate}
                        />
                        <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-text-fade group-hover:text-gold transition-colors duration-500 pointer-events-none" />
                      </div>
                      <p className="text-[10px] text-text-fade tracking-wider">Note: Custom cakes require at least 48 hours notice for preparation.</p>
                    </div>

                    <div className="p-8 rounded-3xl bg-gold/5 border border-gold-border/20 space-y-4">
                      <h4 className="text-[11px] uppercase tracking-[0.2em] text-gold font-black">Summary of Request</h4>
                      <div className="grid grid-cols-2 gap-y-3 gap-x-8">
                        <div className="flex justify-between text-[11px] border-b border-gold-border/10 pb-2">
                          <span className="text-text-fade">Occasion</span>
                          <span className="text-text-primary font-bold">{formData.occasion || 'Not selected'}</span>
                        </div>
                        <div className="flex justify-between text-[11px] border-b border-gold-border/10 pb-2">
                          <span className="text-text-fade">Size</span>
                          <span className="text-text-primary font-bold">{formData.size || 'Not selected'}</span>
                        </div>
                        <div className="flex justify-between text-[11px] border-b border-gold-border/10 pb-2">
                          <span className="text-text-fade">Flavor</span>
                          <span className="text-text-primary font-bold">{formData.flavor || 'Not selected'}</span>
                        </div>
                        <div className="flex justify-between text-[11px] border-b border-gold-border/10 pb-2">
                          <span className="text-text-fade">Date</span>
                          <span className="text-text-primary font-bold">{formData.deliveryDate || 'Not selected'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-6 pt-6">
                      <button 
                        onClick={() => setStep(2)}
                        className="flex-1 h-16 rounded-2xl border border-gold-border/10 text-[11px] uppercase tracking-[0.3em] font-black text-text-muted hover:text-gold hover:border-gold/40 transition-all duration-500 flex items-center justify-center group"
                      >
                        <ChevronLeft className="w-4 h-4 mr-3 transition-transform duration-500 group-hover:-translate-x-1" /> Back
                      </button>
                      <Button variant="gold" className="flex-[2] h-16 text-[11px] uppercase tracking-[0.3em] font-black shadow-gold group">
                        Submit Inquiry <CheckCircle2 className="w-5 h-5 ml-3" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Support info */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-12 text-[10px] text-text-fade tracking-widest leading-relaxed max-w-2xl mx-auto"
            >
              Once submitted, our head pastry chef will review your request and contact you within 4 hours to finalize details and provide a formal quote.
            </motion.p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
