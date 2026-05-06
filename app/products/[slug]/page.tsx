'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Footer } from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, ShoppingBag, Heart, ChevronDown, Truck, ShieldCheck, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const PRODUCT = {
  name: "Millefeuille Ice Cream Cake",
  category: "Ice Cream Cakes",
  price: 550,
  description: "A masterpiece of textures and temperatures. Layers of caramelized flaky puff pastry meet our signature creamy vanilla bean ice cream, topped with fresh forest berries. A refreshing twist on a French classic.",
  images: [
    "/cake/four-season.jpg",
    "/cake/lotus.jpg",
    "/cake/mango.jpg",
    "/cake/nutella.jpg"
  ],
  variants: ["Small (4-6 persons)", "Medium (8-10 persons)", "Large (12-15 persons)"],
  details: [
    { title: "Product Description", content: "Our signature Millefeuille Ice Cream Cake is handcrafted daily using traditional French techniques. Each layer of puff pastry is meticulously caramelized to ensure a perfect crunch that contrasts beautifully with our smooth, artisanal ice cream." },
    { title: "Ingredients & Allergens", content: "Ingredients: Wheat Flour, Butter, Milk, Cream, Vanilla Bean, Sugar, Eggs, Seasonal Berries. Allergens: Contains Gluten, Dairy, Eggs. May contain traces of nuts." },
    { title: "Storage & Shelf Life", content: "Keep frozen at -18°C. For the best experience, remove from the freezer 10 minutes before serving. Consume within 7 days of purchase." }
  ]
};

function Accordion({ title, content }: { title: string; content: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gold-border/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-text-secondary group-hover:text-gold transition-all duration-300">{title}</span>
        <div className={cn(
          "w-8 h-8 rounded-full border border-gold-border/10 flex items-center justify-center transition-all duration-500 group-hover:border-gold/30",
          isOpen && "border-gold/30 bg-gold/5"
        )}>
          <ChevronDown className={cn("w-3.5 h-3.5 text-text-muted group-hover:text-gold transition-transform duration-500", isOpen && "rotate-180 text-gold")} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-text-muted leading-relaxed tracking-wide">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProductDetailPage() {
  const [activeImg, setActiveImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(PRODUCT.variants[0]);

  return (
    <>
      <div className="bg-bg-base relative overflow-hidden pt-12 pb-32">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container relative z-10">
          <motion.nav 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[10px] uppercase tracking-[0.3em] text-gold mb-12 flex items-center gap-3"
          >
            <span className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer">Home</span>
            <span className="opacity-20 text-text-primary">/</span>
            <span className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer">Shop</span>
            <span className="opacity-20 text-text-primary">/</span>
            <span className="text-text-primary font-bold">{PRODUCT.name}</span>
          </motion.nav>

          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left: Gallery */}
            <div className="flex-1 space-y-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square rounded-[2rem] overflow-hidden border border-gold-border/10 group shadow-card"
              >
                <Image
                  src={PRODUCT.images[activeImg]}
                  alt={PRODUCT.name}
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-105"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={95}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base/20 to-transparent opacity-60" />
                <button className="absolute top-8 right-8 w-14 h-14 rounded-full bg-bg-card/40 backdrop-blur-xl text-text-primary flex items-center justify-center hover:bg-gold hover:text-text-on-gold transition-all duration-500 shadow-gold/10 border border-gold-border/20 group/btn">
                  <Heart className="w-6 h-6 transition-transform duration-500 group-hover/btn:scale-110" />
                </button>
              </motion.div>
              
              <div className="grid grid-cols-4 gap-6">
                {PRODUCT.images.map((img, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.5 }}
                    onClick={() => setActiveImg(i)}
                    className={cn(
                      "relative aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-500 group",
                      activeImg === i 
                        ? "border-gold shadow-gold/30 scale-105" 
                        : "border-gold-border/10 opacity-40 hover:opacity-100 hover:border-gold/30"
                    )}
                  >
                    <Image src={img} alt={`${PRODUCT.name} ${i}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="150px" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right: Info */}
            <div className="flex-1 flex flex-col pt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-gold mb-4 block">
                  {PRODUCT.category}
                </span>
                <h1 className="text-h1 text-text-primary mb-6 font-display leading-tight tracking-tight">
                  {PRODUCT.name}
                </h1>
                <div className="flex items-center gap-6 mb-10">
                  <p className="text-3xl font-display text-gold tracking-wider">{PRODUCT.price} EGP</p>
                  <div className="h-4 w-[1px] bg-gold-border/30" />
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(s => (
                      <span key={s} className="text-gold text-xs">★</span>
                    ))}
                    <span className="text-[10px] text-text-fade uppercase tracking-widest ml-2">(12 Reviews)</span>
                  </div>
                </div>
                
                <p className="text-text-secondary leading-relaxed mb-12 text-sm tracking-wide max-w-xl">
                  {PRODUCT.description}
                </p>
              </motion.div>

              {/* Variant Selector */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6 mb-12"
              >
                <label className="text-[10px] uppercase tracking-[0.2em] text-gold font-black">Select Experience</label>
                <div className="flex flex-wrap gap-4">
                  {PRODUCT.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={cn(
                        "px-8 py-4 rounded-xl border text-[11px] font-bold uppercase tracking-widest transition-all duration-500",
                        selectedVariant === v 
                          ? "bg-gold border-gold text-text-on-gold shadow-gold scale-105" 
                          : "border-gold-border/20 text-text-secondary hover:border-gold/40 hover:bg-gold/5"
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Quantity and Add to Cart */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6 mb-16"
              >
                <div className="flex items-center h-16 bg-bg-card/50 backdrop-blur-md border border-gold-border/20 rounded-2xl px-2 min-w-[160px]">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-text-muted hover:text-gold transition-all duration-300"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="flex-1 text-center font-display text-xl text-text-primary">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center text-text-muted hover:text-gold transition-all duration-300"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <Button variant="gold" className="flex-1 h-16 text-[11px] uppercase tracking-[0.3em] font-black shadow-gold group">
                  <ShoppingBag className="w-5 h-5 mr-3 transition-transform duration-500 group-hover:scale-110" />
                  Reserve Now
                </Button>
              </motion.div>

              {/* Features List */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 p-8 rounded-[2rem] bg-bg-card/30 backdrop-blur-md border border-gold-border/10"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center">
                    <Truck className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-text-secondary font-bold">Premium Delivery</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-text-secondary font-bold">Artisanal Quality</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-text-secondary font-bold">Freshly Crafted</span>
                </div>
              </motion.div>

              {/* Accordions */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="border-t border-gold-border/10"
              >
                {PRODUCT.details.map((detail, i) => (
                  <Accordion key={i} title={detail.title} content={detail.content} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
