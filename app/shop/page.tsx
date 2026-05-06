'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Filter, ChevronDown, Heart, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  'All', 'Cakes', 'Pastries', 'Ice Cream', 'Chocolates', 'Seasonal', 'Heat & Eat', 'Special Cakes'
];

const PRODUCTS = [
  { id: 1, name: 'Lotus Cake', category: 'Cakes', price: 450, image: '/cake/lotus.jpg', isNew: true },
  { id: 2, name: 'Mango Cake', category: 'Cakes', price: 480, image: '/cake/mango.jpg' },
  { id: 3, name: 'Nutella Cake', category: 'Cakes', price: 500, image: '/cake/nutella.jpg' },
  { id: 4, name: 'Strawberry Vadge', category: 'Pastries', price: 350, image: '/cake/strawberry-vadge.jpg' },
  { id: 5, name: 'Forest Berry Cake', category: 'Cakes', price: 460, image: '/cake/forest.jpg' },
  { id: 6, name: 'Royal Chocolate', category: 'Chocolates', price: 550, image: '/cake/royal-cake.png', isNew: true },
  { id: 7, name: 'Honey Soggy', category: 'Pastries', price: 280, image: '/soggy/honey-soggy.jpg' },
  { id: 8, name: 'Nutella Soggy', category: 'Pastries', price: 300, image: '/soggy/nutell-soggy.jpg' },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(1000);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(p => 
    (activeCategory === 'All' || p.category === activeCategory) &&
    p.price <= priceRange &&
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="bg-bg-base relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

        {/* Page Header */}
        <div className="relative h-[450px] flex items-center justify-center overflow-hidden">
          <Image
            src="/hero-section.png"
            alt="Shop Banner"
            fill
            className="object-cover opacity-20 scale-110"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-base/40 via-bg-base/80 to-bg-base" />
          <div className="container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <nav className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">
                Home <span className="mx-3 opacity-30 text-text-primary">/</span> Shop
              </nav>
              <h1 className="text-h1 text-text-primary uppercase tracking-[0.2em] font-display mb-4">
                The <span className="text-gold">Collection</span>
              </h1>
              <div className="w-24 h-[1px] bg-gold/30 mx-auto mt-8" />
            </motion.div>
          </div>
        </div>

        <div className="container pb-32 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-72 space-y-12">
              {/* Search */}
              <div className="space-y-6">
                <h4 className="text-[11px] uppercase tracking-[0.2em] text-gold font-black">Search</h4>
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Find your favorite..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-bg-card/50 backdrop-blur-md border border-gold-border/20 rounded-xl px-6 py-4 text-sm text-text-primary focus:outline-none focus:border-gold/50 transition-all duration-500 placeholder:text-text-fade group-hover:border-gold-border/40"
                  />
                  <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-hover:text-gold transition-colors duration-500" />
                </div>
              </div>

              {/* Categories */}
              <div className="space-y-6">
                <h4 className="text-[11px] uppercase tracking-[0.2em] text-gold font-black">Categories</h4>
                <ul className="space-y-4">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={cn(
                          "text-sm tracking-wide transition-all duration-500 flex items-center gap-3 group",
                          activeCategory === cat ? "text-gold translate-x-2" : "text-text-secondary hover:text-gold hover:translate-x-1"
                        )}
                      >
                        <span className={cn(
                          "w-1.5 h-1.5 rounded-full transition-all duration-500",
                          activeCategory === cat ? "bg-gold scale-100 shadow-[0_0_8px_rgba(212,169,79,0.6)]" : "bg-gold-border/20 scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100"
                        )} />
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h4 className="text-[11px] uppercase tracking-[0.2em] text-gold font-black">Price Range</h4>
                  <span className="text-sm font-display text-gold">{priceRange} EGP</span>
                </div>
                <div className="px-2">
                  <input
                    type="range"
                    min="100"
                    max="1000"
                    step="50"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="w-full accent-gold bg-gold-border/10 h-[2px] rounded-full appearance-none cursor-pointer"
                  />
                </div>
              </div>

              <button 
                onClick={() => {
                  setActiveCategory('All');
                  setPriceRange(1000);
                  setSearchQuery('');
                }}
                className="w-full py-4 text-[10px] uppercase tracking-[0.2em] text-text-muted border border-gold-border/10 rounded-xl hover:bg-gold/5 hover:border-gold-border/30 hover:text-gold transition-all duration-500"
              >
                Reset Selection
              </button>
            </aside>

            {/* Product Grid */}
            <main className="flex-1">
              <div className="flex justify-between items-center mb-12 pb-8 border-b border-gold-border/10">
                <p className="text-sm text-text-secondary tracking-wide">
                  Showing <span className="text-gold font-bold">{filteredProducts.length}</span> artisanal creations
                </p>
                <div className="flex items-center gap-4 cursor-pointer group px-4 py-2 rounded-lg hover:bg-gold/5 transition-all duration-500">
                  <span className="text-[11px] uppercase tracking-widest text-text-muted group-hover:text-gold transition-colors">Sort by: Newest</span>
                  <ChevronDown className="w-4 h-4 text-text-fade group-hover:text-gold transition-colors" />
                </div>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.6 }}
                      className="group"
                    >
                      <Link href={`/products/${product.id}`} className="block">
                        <div className="bg-bg-card border border-gold-border/10 rounded-2xl overflow-hidden transition-all duration-700 hover:border-gold-border/40 hover:shadow-hover hover:-translate-y-2">
                          <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover transition-transform duration-1000 group-hover:scale-110"
                              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                              quality={85}
                            />
                            
                            {/* Tags */}
                            <div className="absolute top-5 left-5 flex flex-col gap-2">
                              <span className="bg-bg-base/60 backdrop-blur-md text-gold text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] border border-gold-border/20">
                                {product.category}
                              </span>
                            </div>
                            
                            {product.isNew && (
                              <div className="absolute top-5 right-5">
                                <div className="bg-gold shadow-gold/20 text-text-on-gold text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] animate-pulse">
                                  New
                                </div>
                              </div>
                            )}

                            {/* Hover Actions */}
                            <div className="absolute inset-0 bg-gradient-to-t from-bg-base/90 via-bg-base/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="absolute bottom-6 left-0 w-full px-6 flex gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                              <Button variant="gold" size="sm" className="flex-1 shadow-gold">
                                Quick Add
                              </Button>
                              <button className="w-11 h-11 rounded-full bg-bg-card/80 backdrop-blur-md text-text-primary flex items-center justify-center hover:bg-gold hover:text-text-on-gold transition-all duration-500 border border-gold-border/20">
                                <Heart className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                          
                          <div className="p-7">
                            <h3 className="text-xl font-display text-text-primary mb-2 group-hover:text-gold transition-colors duration-300">
                              {product.name}
                            </h3>
                            <p className="text-xs text-text-muted mb-6 tracking-wide line-clamp-1">
                              Handcrafted excellence using premium ingredients.
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-display text-gold tracking-wider">{product.price} EGP</span>
                              <div className="w-10 h-10 rounded-full border border-gold-border/10 flex items-center justify-center text-text-muted group-hover:border-gold group-hover:text-gold transition-all duration-500">
                                <span className="text-lg font-light">+</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="py-32 text-center bg-bg-card/30 rounded-3xl border border-dashed border-gold-border/20">
                  <Search className="w-12 h-12 text-gold/20 mx-auto mb-6" />
                  <h3 className="text-xl font-display text-text-primary mb-2">No masterpieces found</h3>
                  <p className="text-sm text-text-muted tracking-wide">Try adjusting your filters or search terms.</p>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
