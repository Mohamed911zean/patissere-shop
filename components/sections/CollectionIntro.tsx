'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const CATEGORIES = [
  { en: 'All',        ar: 'الكل' },
  { en: 'Cakes',      ar: 'الكيكات' },
  { en: 'Pastries',   ar: 'المعجنات' },
  { en: 'Soggy',      ar: 'فطير' },
  { en: 'Chocolates', ar: 'الشوكولاتة' },
  { en: 'Seasonal',   ar: 'الموسمي' },
];

const PRODUCTS = [
  {
    id: 1,
    nameEn: 'Lotus Cake',      nameAr: 'كيكة اللوتس',
    category: 'Cakes',
    priceEn: '450 EGP',        priceAr: '٤٥٠ ج.م',
    image: '/cake/lotus.jpg',
    available: true,
  },
  {
    id: 2,
    nameEn: 'Mango Cake',      nameAr: 'كيكة المانجو',
    category: 'Cakes',
    priceEn: '480 EGP',        priceAr: '٤٨٠ ج.م',
    image: '/cake/mango.jpg',
    available: false,
  },
  {
    id: 3,
    nameEn: 'Nutella Cake',    nameAr: 'كيكة النوتيلا',
    category: 'Cakes',
    priceEn: '500 EGP',        priceAr: '٥٠٠ ج.م',
    image: '/cake/nutella.jpg',
    available: true,
  },
  {
    id: 4,
    nameEn: 'Strawberry Vadge', nameAr: 'فراولة فدج',
    category: 'Pastries',
    priceEn: '350 EGP',        priceAr: '٣٥٠ ج.م',
    image: '/cake/strawberry-vadge.jpg',
    available: true,
  },
  {
    id: 5,
    nameEn: 'Honey Soggy',     nameAr: 'سوجي بالعسل',
    category: 'Soggy',
    priceEn: '280 EGP',        priceAr: '٢٨٠ ج.م',
    image: '/soggy/honey-soggy.jpg',
    available: true,
  },
  {
    id: 6,
    nameEn: 'Forest Berry Cake', nameAr: 'كيكة الفورست',
    category: 'Cakes',
    priceEn: '460 EGP',        priceAr: '٤٦٠ ج.م',
    image: '/cake/forest.jpg',
    available: true,
  },
  {
    id: 7,
    nameEn: 'Four Season Cake', nameAr: 'كيكة الفور سيزون',
    category: 'Cakes',
    priceEn: '520 EGP',        priceAr: '٥٢٠ ج.م',
    image: '/cake/four-season.jpg',
    available: true,
  },
  {
    id: 8,
    nameEn: 'Nutella Soggy',   nameAr: 'سوجي بالنوتيلا',
    category: 'Soggy',
    priceEn: '300 EGP',        priceAr: '٣٠٠ ج.م',
    image: '/soggy/nutell-soggy.jpg',
    available: true,
  },
];

// Arrow SVG reused in cards
function ArrowIcon({ flip }: { flip?: boolean }) {
  return (
    <svg
      width="10" height="10" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2.5"
      style={{ transform: flip ? 'rotate(180deg)' : undefined }}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function CollectionIntro() {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const [activeCategory, setActiveCategory] = useState('All');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section className="section bg-bg-base relative overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Ambient bg */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold mb-4 block">
              {isAr ? 'تشكيلة لينزا' : 'Lenza Collection'}
            </span>
            <h2 className="text-h2 text-text-primary">
              {isAr ? 'انغمس في عالم من النكهات' : 'Indulge in a World of Flavors'}
            </h2>
          </motion.div>
        </div>

        {/* ── Category chips — scrollable row, no wrap ── */}
        <style>{`.cat-scroll::-webkit-scrollbar{display:none}`}</style>
        <div
          ref={scrollRef}
          className="cat-scroll flex items-center gap-5 mb-10 sm:mb-14 overflow-x-auto sm:justify-center sm:flex-wrap"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Edge padding so first/last chip isn't flush on mobile */}
          <span className="shrink-0 w-1 sm:hidden" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat.en}
              onClick={() => setActiveCategory(cat.en)}
              className={cn(
                'shrink-0 px-5 py-2.5 rounded-full border',
                'text-[11px] font-bold uppercase tracking-[0.15em]',
                'transition-all duration-300 whitespace-nowrap',
                'min-h-[38px]', // touch target
                activeCategory === cat.en
                  ? 'bg-gold border-gold text-text-on-gold'
                  : 'border-gold-border/25 text-text-muted hover:border-gold-border hover:text-gold'
              )}
            >
              {isAr ? cat.ar : cat.en}
            </button>
          ))}
          <span className="shrink-0 w-1 sm:hidden" />
        </div>

        {/* ── Product Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {filteredProducts.map((product, index) => {
              // Alternate tall / square — only visible on mobile (lg always uses same ratio)
              const isTall = index % 2 === 0;

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (index % 4) * 0.07 }}
                  className="group"
                >
                  <div className={cn(
                    'relative bg-bg-card rounded-2xl overflow-hidden flex flex-col h-full',
                    'border border-gold-border/10',
                    'transition-all duration-500',
                    'hover:border-gold-border/30 hover:shadow-hover hover:-translate-y-1',
                    isAr && 'text-right'
                  )}>

                    {/* ── Image ── */}
                    <div className={cn(
                      'relative w-full overflow-hidden',
                      isTall
                        ? 'aspect-[3/4] lg:aspect-[4/5]'
                        : 'aspect-square lg:aspect-[4/5]'
                    )}>
                      <Image
                        src={product.image}
                        alt={isAr ? product.nameAr : product.nameEn}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                        quality={85}
                      />

                      {/* Bottom fade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      {/* Status badge */}
                      <div className={cn(
                        'absolute top-2.5 flex',
                        isAr ? 'right-2.5' : 'left-2.5'
                      )}>
                        {product.available === false ? (
                          <span className="flex items-center gap-1 bg-red-500 text-white
                                           text-[9px] font-bold px-2 py-1 rounded-full
                                           uppercase tracking-wide leading-none">
                            <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                            {isAr ? 'نفذ' : 'Out of Stock'}
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 bg-emerald-500/90 text-white
                                           text-[9px] font-bold px-2 py-1 rounded-full
                                           uppercase tracking-wide leading-none backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                            {isAr ? 'متاح' : 'Available'}
                          </span>
                        )}
                      </div>

                      {/* Wishlist */}
                      <button
                        aria-label="Add to wishlist"
                        className={cn(
                          'absolute top-2.5 w-7 h-7 rounded-full',
                          'bg-black/25 backdrop-blur-sm border border-white/15',
                          'flex items-center justify-center',
                          'hover:bg-black/50 active:scale-95 transition-all duration-200',
                          isAr ? 'left-2.5' : 'right-2.5'
                        )}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                      </button>

                      {/* Desktop: hover quick-add */}
                      <div className={cn(
                        'absolute bottom-3 left-3 right-3',
                        'opacity-0 translate-y-2',
                        'group-hover:opacity-100 group-hover:translate-y-0',
                        'transition-all duration-300',
                        'hidden sm:block'
                      )}>
                        <Button
                          variant="gold"
                          size="sm"
                          className="w-full text-[10px] py-2 min-h-[36px]"
                          disabled={product.available === false}
                        >
                          {isAr ? 'أضف للسلة' : 'Quick Add'}
                        </Button>
                      </div>
                    </div>

                    {/* ── Info ── */}
                    <div className="p-3 sm:p-4 flex flex-col gap-1 flex-1">
                      <h4 className={cn(
                        'text-text-primary font-medium leading-snug line-clamp-1',
                        'text-[12px] sm:text-[13px]',
                        'group-hover:text-gold transition-colors duration-300'
                      )}>
                        {isAr ? product.nameAr : product.nameEn}
                      </h4>

                      <p className="text-text-muted text-[10px] sm:text-[11px] line-clamp-1">
                        {isAr
                          ? CATEGORIES.find(c => c.en === product.category)?.ar
                          : product.category}
                      </p>

                      <div className={cn(
                        'flex items-center justify-between mt-auto pt-2',
                        isAr && 'flex-row-reverse'
                      )}>
                        <p className={cn(
                          'text-gold font-bold text-[12px] sm:text-[13px] tracking-wide',
                          product.available === false && 'opacity-40'
                        )}>
                          {isAr ? product.priceAr : product.priceEn}
                        </p>

                        {/* Mobile: arrow navigates to product page */}
                        <Link
                          href={`/products/${product.id}`}
                          aria-label={isAr ? product.nameAr : product.nameEn}
                          className={cn(
                            'w-8 h-8 rounded-full shrink-0',
                            'border border-gold-border/20 bg-bg-base',
                            'flex items-center justify-center',
                            'text-gold hover:bg-gold hover:border-gold hover:text-text-on-gold',
                            'active:scale-95 transition-all duration-300',
                            'sm:hidden' // desktop uses hover quick-add
                          )}
                        >
                          <ArrowIcon flip={isAr} />
                        </Link>

                        {/* Desktop arrow */}
                        <Link
                          href={`/products/${product.id}`}
                          aria-label={isAr ? product.nameAr : product.nameEn}
                          className={cn(
                            'w-8 h-8 rounded-full shrink-0',
                            'border border-gold-border/20 bg-bg-base',
                            'hidden sm:flex items-center justify-center',
                            'text-gold hover:bg-gold hover:border-gold hover:text-text-on-gold',
                            'active:scale-95 transition-all duration-300'
                          )}
                        >
                          <ArrowIcon flip={isAr} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* ── Show More ── */}
        <div className="mt-8 sm:mt-10">
          <Link href="/shop" className="block sm:flex sm:justify-center">
            <Button
              variant="outline"
              size="lg"
              className={cn(
                'w-full sm:w-auto min-h-[44px] px-10',
                'border-gold-border/30 hover:border-gold',
                'flex items-center justify-center gap-2'
              )}
            >
              {isAr ? 'عرض المزيد' : 'Show More'}
              <ArrowIcon flip={isAr} />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}