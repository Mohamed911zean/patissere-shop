'use client';
import { useTranslation } from 'react-i18next';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Trophy, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const FEATURES = [
  {
    icon: ShieldCheck,
    titleEn: 'Expert Craftsmanship',
    titleAr: 'حرفية عالية',
  },
  {
    icon: Leaf,
    titleEn: 'Premium Ingredients',
    titleAr: 'مكونات فاخرة',
  },
  {
    icon: Trophy,
    titleEn: 'Trusted for Over 12 Years',
    titleAr: 'موثوق لأكثر من ١٢ عاماً',
  },
  {
    icon: Users,
    titleEn: 'Personalized Experience',
    titleAr: 'تجربة شخصية مميزة',
  },
];

export function WhyChooseUs() {
  const { language, t } = useLanguage();
  const isAr = language === 'ar';

  return (
    <section className="section bg-bg-deep relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gold/5 to-transparent pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold mb-4 block">
              {t('sections.experience_the_art_of_dessert')}
            </span>
            <h2 className="text-h2 text-text-primary">
              {t('sections.why_choose_lenza')}
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-bg-card border border-gold-border/20 flex items-center justify-center mb-8 text-gold shadow-premium transition-all duration-500 group-hover:bg-gradient-gold group-hover:text-text-on-gold group-hover:shadow-gold group-hover:-translate-y-2 relative">
                {/* Subtle Inner Ring */}
                <div className="absolute inset-2 rounded-full border border-gold/10 group-hover:border-text-on-gold/20" />
                <feature.icon className="w-10 h-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="text-[11px] font-bold text-text-muted uppercase tracking-[0.2em] leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                {isAr ? feature.titleAr : feature.titleEn}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
