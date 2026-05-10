'use client';
import { useTranslation } from 'react-i18next';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export function ProductSpotlight() {
  const { language, t } = useLanguage();
  const isAr = language === 'ar';

  return (
    <section className="py-12 px-4 md:px-8 lg:py-24 max-w-[1400px] mx-auto">
      {/* The Container Card 
        استخدمنا خلفية متدرجة فخمة مستوحاة من الصورة ولكن بأسلوب ليلي/فاخر 
      */}
      <div className="relative w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-gradient-to-br from-[#172E27] to-[#0A1411] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] border border-white/10">

        {/* تأثيرات إضاءة في الخلفية */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_2px_2px,rgba(212,169,79,1)_1px,transparent_0)] bg-[length:40px_40px]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/10 blur-[150px] pointer-events-none" />

        <div className={`flex flex-col lg:flex-row items-center h-full relative z-10 ${t('sections.')}`}>

          {/* Text Section (يظهر تحت الصورة في الموبايل، وبجانبها في الديسكتوب) */}
          <div className={`flex-1 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center text-center lg:text-start ${isAr ? 'lg:text-right' : 'lg:text-left'} order-2 lg:order-none`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* شارة (جديد) */}
              <div className={`inline-block px-4 py-1.5 mb-6 rounded-full bg-[#1A3A31] border border-gold/30 text-gold text-xs md:text-sm font-bold uppercase tracking-widest shadow-inner ${t('sections.mx_auto_lg_mx_0')}`}>
                {t('sections.new_from_lenza')}
              </div>

              {/* العنوان الرئيسي */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] drop-shadow-md">
                {t('sections.four_seasons')} <br />
                <span className="text-gold font-light italic font-serif tracking-normal">
                  {t('sections.signature_cake')}
                </span>
              </h2>

              {/* نص تسويقي جذاب */}
              <p className="text-white/80 text-sm sm:text-base md:text-lg font-light max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
                {t('sections.a_masterpiece_of_textures_and')}
              </p>

              {/* الزرار (Call to Action) */}
              <Link href="/products/four-season-cake" className="inline-flex group">
                <div className="flex items-center gap-4 bg-gold hover:bg-white text-black px-8 py-4 rounded-full font-bold transition-all duration-500 shadow-[0_10px_20px_-10px_rgba(212,169,79,0.8)] hover:shadow-[0_15px_30px_-10px_rgba(255,255,255,0.8)] hover:-translate-y-1">
                  <span className="text-sm md:text-base uppercase tracking-widest">{t('sections.try_it_now')}</span>
                  {isAr 
                    ? <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" /> 
                    : <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  }
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Image Section (يظهر أولاً في الموبايل ليخطف العين) */}
          <div className="flex-1 w-full relative min-h-[350px] md:min-h-[450px] lg:min-h-[600px] flex items-center justify-center order-1 lg:order-none p-10 lg:p-0">
            
            {/* الختم الدائري الدوار (The Circular Spinning Stamp) */}
           <div
  className={`absolute top-0 md:top-8 ${
    t('sections.left_4_md_left_8')
  } z-20 w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#2A1E14] border border-gold/20 text-gold flex items-center justify-center shadow-2xl animate-[spin_15s_linear_infinite]`}
>
  <svg
    viewBox="0 0 100 100"
    className="w-[85%] h-[85%] overflow-visible"
  >
    <defs>
      <path
        id="circlePath"
        d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
      />
    </defs>

    <text
      className={`fill-gold font-black ${
        isAr ? "text-[15px]" : "text-[14px] tracking-[2px]"
      }`}
      style={{
        fontFamily: t('sections.inherit'),
      }}
    >
      <textPath
        href="#circlePath"
        startOffset={t('sections.0')}
        textAnchor="middle"
        direction={isAr ? "rtl" : "ltr"}
      >
        {t('sections.simply_irresistible_simply')}
      </textPath>
    </text>
  </svg>
</div>

            {/* صورة الكيكة (يُفضل استخدام صورة شفافة PNG) */}
           {/* صورة الكيكة (يُفضل استخدام صورة شفافة PNG) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, type: "spring" }}
              viewport={{ once: true }}
              // التعديل هنا: شيلنا h-full وحطينا aspect-square
              className="relative w-full aspect-square max-w-[320px] sm:max-w-[400px] lg:max-w-[550px] lg:scale-125 lg:translate-y-8 z-10"
            >
              <Image
                src="/cake/four-season-enhanced.png" 
                alt="Four Season Cake"
                fill
                className="object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.6)] hover:scale-105 hover:-rotate-2 transition-transform duration-700"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}