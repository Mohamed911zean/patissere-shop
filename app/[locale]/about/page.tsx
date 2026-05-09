'use client';
import { useTranslation } from 'react-i18next';

import React from 'react';
import Image from 'next/image';
import { Footer } from '@/components/layout/Footer';
import { GoldDivider } from '@/components/ui/Typography';
import { LegacyStats } from '@/components/sections/LegacyStats';
import { Newsletter } from '@/components/sections/Newsletter';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { language, t } = useLanguage();
  const isAr = language === 'ar';

  const commitmentItems = [
    {
      titleEn: 'Our Mission',
      titleAr: 'مهمتنا',
      img: '/cake/lotus.jpg',
      descEn: 'To blend tradition with innovation, bringing the timeless art of pastry-making to our local community. We are dedicated to crafting desserts from scratch using only the finest, freshest ingredients.',
      descAr: 'الجمع بين التراث والابتكار لتقديم فن صنع الحلوى الأصيل لمجتمعنا المحلي. نلتزم بتحضير حلوياتنا من الصفر باستخدام أجود المكونات وأطازجها.',
    },
    {
      titleEn: 'Our Vision',
      titleAr: 'رؤيتنا',
      img: '/cake/mango.jpg',
      descEn: "To be Egypt's most trusted name in premium sweets, where craftsmanship meets creativity. From our signature cakes to artisanal pastries, we strive for perfection in every creation.",
      descAr: 'أن نكون الاسم الأكثر موثوقية في مصر في مجال الحلويات الفاخرة، حيث تلتقي الحرفية بالإبداع. من كيكاتنا المميزة إلى المعجنات الأصيلة، نسعى نحو الكمال في كل إبداع.',
    },
  ];

  const artItems = [
    { titleEn: 'Finest Ingredients', titleAr: 'أجود المكونات', img: '/cake/nutella.jpg' },
    { titleEn: 'Time-honored Recipes', titleAr: 'وصفات أصيلة', img: '/cake/oreo-cake.jpg' },
    { titleEn: 'Attention To Details', titleAr: 'اهتمام بالتفاصيل', img: '/cake/strawberry-vadge.jpg' },
  ];

  return (
    <>
      <div className="bg-bg-base relative">
        {/* Page Hero */}
        <div className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <Image
            src="/hero-section.png"
            alt={t('sections.about_lenza_sweets')}
            fill
            className="object-cover transition-transform duration-[20s] scale-110 hover:scale-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-base/20 via-bg-base/60 to-bg-base" />
          <div className="container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav className="text-[10px] uppercase tracking-[0.4em] text-gold mb-8 font-bold">
                {t('sections.home_our_story')}
              </nav>
              <h1 className="text-hero text-text-primary mb-8 leading-[1.1]">
                {isAr ? (
                  <>إرث من<br />الحلاوة</>
                ) : (
                  <>A Legacy of<br />Sweetness</>
                )}
              </h1>
              <p className="text-script text-gold text-4xl lg:text-5xl drop-shadow-lg">
                {t('sections.bringing_joy_and_flavor_to_eve')}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Our Story */}
        <section className="section relative overflow-hidden">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="container">
            <div className={`flex flex-col lg:flex-row items-center gap-24 ${t('sections.')}`}>
              <motion.div
                initial={{ opacity: 0, x: isAr ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="flex-1 relative aspect-[4/5] w-full max-w-lg rounded-3xl overflow-hidden shadow-premium border border-gold-border/10 group"
              >
                <Image
                  src="/why-choose-us.jpg"
                  alt={t('sections.our_story')}
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base/60 via-transparent to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: isAr ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className={`flex-1 ${t('sections.')}`}
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold mb-6 block">
                  {t('sections.over_12_years_from_passion_to')}
                </span>
                <h2 className="text-h2 text-text-primary mb-8 leading-tight">
                  {t('sections.our_story')}
                </h2>
                <div className="space-y-6 text-body text-text-secondary font-light leading-relaxed">
                  <p>
                    {t('sections.lenza_sweets_is_an_authentic_e')}
                  </p>
                  <p>
                    {t('sections.our_journey_has_always_been_ab')}
                  </p>
                </div>
                <GoldDivider />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Commitment to Quality */}
        <section className="section bg-bg-deep relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 pointer-events-none" />
          <div className="container relative z-10">
            <div className="text-center mb-20">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold mb-4 block">
                {t('sections.where_every_ingredient_meets_p')}
              </span>
              <h2 className="text-h2 text-text-primary uppercase tracking-widest">
                {t('sections.our_commitment_to_quality')}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              {commitmentItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className={`bg-bg-card border border-gold-border/10 rounded-[32px] p-10 lg:p-14 hover:border-gold-border/30 transition-all duration-500 group shadow-premium ${t('sections.')}`}
                >
                  <div className="relative h-72 mb-10 rounded-2xl overflow-hidden border border-white/5">
                    <Image src={item.img} alt={isAr ? item.titleAr : item.titleEn} fill className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 to-transparent" />
                  </div>
                  <h3 className="text-h3 text-text-primary mb-6 font-display group-hover:text-gold transition-colors duration-300">
                    {isAr ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-text-secondary font-light leading-relaxed text-body">
                    {isAr ? item.descAr : item.descEn}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <LegacyStats />

        {/* Art of Dessert Making */}
        <section className="section relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gold/5 to-transparent pointer-events-none" />
          <div className="container relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-h2 text-text-primary uppercase tracking-widest leading-tight">
                {isAr ? (
                  <>فن<br />صناعة الحلوى</>
                ) : (
                  <>The Art of<br />Dessert Making</>
                )}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {artItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col h-full rounded-2xl overflow-hidden border border-gold-border/10 bg-bg-card group hover:border-gold-border/30 transition-all duration-500 shadow-premium"
                >
                  <div className="relative h-96">
                    <Image src={item.img} alt={isAr ? item.titleAr : item.titleEn} fill className="object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card/90 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-0 w-full text-center px-6">
                      <h4 className="text-sm font-bold text-text-primary uppercase tracking-[0.3em] group-hover:text-gold transition-colors duration-300">
                        {isAr ? item.titleAr : item.titleEn}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Newsletter />
      </div>
      <Footer />
    </>
  );
}
