'use client';
import { useTranslation } from 'react-i18next';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

import 'swiper/css';
import 'swiper/css/effect-fade';

const SLIDES = [
  {
    image: '/hero-section-2.png',
    labelEn: 'Lenza Collection',
    labelAr: 'تشكيلة لينزا',
    titleEn: 'A Moment of\nSweet Escape',
    titleAr: 'لحظة من\nالهروب الحلو',
    ctaEn: 'Discover Collection',
    ctaAr: 'اكتشف التشكيلة',
    href: '/shop',
    secondaryCtaEn: 'View All',
    secondaryCtaAr: 'عرض الكل',
    secondaryHref: '/shop',
  },
  {
    image: '/hero-section-3.png',
    labelEn: 'Crafted Perfection',
    labelAr: 'إتقان الصنع',
    titleEn: 'Where Every\nDetail Matters',
    titleAr: 'حيث كل\nتفصيلة مهمة',
    ctaEn: 'Order Your Occasion',
    ctaAr: 'اطلب مناسبتك',
    href: '/special-cakes',
    secondaryCtaEn: 'Explore',
    secondaryCtaAr: 'استكشف',
    secondaryHref: '/shop',
  },
  {
    image: '/cake/nutella.jpg',
    labelEn: 'Signature Cakes',
    labelAr: 'كيكات مميزة',
    titleEn: 'The Signature of\nTrue Indulgence',
    titleAr: 'توقيع\nالمتعة الحقيقية',
    ctaEn: 'Shop Signature',
    ctaAr: 'تسوق المميز',
    href: '/shop',
    secondaryCtaEn: 'Special Cakes',
    secondaryCtaAr: 'كيكات خاصة',
    secondaryHref: '/special-cakes',
  },
];

export function HeroSlider() {
  const { language, t } = useLanguage();
  const isAr = language === 'ar';
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const slide = SLIDES[activeIndex];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '560px' }}
    >
      {/* ── SWIPER ── */}
      <Swiper
        onSwiper={(s) => (swiperRef.current = s)}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1800}
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
        className="absolute inset-0 w-full h-full"
      >
        {SLIDES.map((s, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className="relative w-full h-full overflow-hidden">
                <div
                  className="absolute inset-0 will-change-transform"
                  style={{
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 7s cubic-bezier(0.22,1,0.36,1)',
                  }}
                >
                  <Image
                    src={s.image}
                    alt={isAr ? s.titleAr : s.titleEn}
                    fill
                    className="object-cover object-center"
                    style={{ objectPosition: 'center 30%' }}
                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    sizes="(max-width: 768px) 100vw, 100vw"
                    quality={90}
                  />
                </div>
                {/* Overlays live inside each slide — never unmounted on lang switch */}
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/25" />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── CONTENT ──
          Key is ONLY activeIndex — language changes don't retrigger the exit animation.
          Text inside updates instantly via isAr without any unmount/remount.
      ── */}
      <div
        className="absolute inset-0 z-10 flex flex-col justify-end pointer-events-none"
        style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 0px)' }}
        dir={isAr ? 'rtl' : 'ltr'}
      >
        <div className="w-full px-5 sm:px-8 md:px-12 pb-20 sm:pb-24 md:pb-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex} // ← only slide index, NOT language
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              {/* Label */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="flex items-center gap-3 mb-3 sm:mb-4"
              >
                <span className="block w-4 h-[1px] bg-yellow-400/70 shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.28em] text-yellow-400/90">
                  {isAr ? slide.labelAr : slide.labelEn}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="text-white font-extralight leading-[1.06] tracking-tight whitespace-pre-line mb-6 sm:mb-8"
                style={{ fontSize: 'clamp(2.2rem, 9vw, 5.5rem)' }}
              >
                {isAr ? slide.titleAr : slide.titleEn}
              </motion.h1>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.55 }}
                className="pointer-events-auto flex flex-col sm:flex-row gap-3 items-stretch sm:items-center"
              >
                <Link href={slide.href} className="w-full sm:w-auto">
                  <Button
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto min-h-[44px] text-sm sm:text-base"
                  >
                    {isAr ? slide.ctaAr : slide.ctaEn}
                  </Button>
                </Link>

                <Link href={slide.secondaryHref} className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto min-h-[38px] text-sm sm:text-base border-white/30 text-white hover:bg-white/10"
                  >
                    {isAr ? slide.secondaryCtaAr : slide.secondaryCtaEn}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between px-5 sm:px-8 md:px-12"
        style={{ paddingBottom: 'max(calc(env(safe-area-inset-bottom) + 14px), 14px)' }}
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Pill dots */}
        <div className="flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              aria-label={`Slide ${i + 1}`}
              className="py-3 flex items-center"
            >
              <span
                className="block rounded-full transition-all duration-500 ease-out"
                style={{
                  width: activeIndex === i ? '28px' : '5px',
                  height: '5px',
                  background: activeIndex === i
                    ? 'rgba(202,162,84,1)'
                    : 'rgba(255,255,255,0.35)',
                }}
              />
            </button>
          ))}
        </div>

        {/* Counter */}
        <div className="flex items-center gap-2 pb-3">
          <span className="text-white text-xs font-light tabular-nums">
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <span className="w-5 h-[1px] bg-white/30" />
          <span className="text-white/40 text-xs font-light tabular-nums">
            {String(SLIDES.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* ── SCROLL HINT — desktop only ── */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 opacity-40">
        <div className="w-[1px] h-12 bg-white/50 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-white"
            animate={{ y: ['0%', '100%'] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ height: '40%' }}
          />
        </div>
      </div>
    </section>
  );
}