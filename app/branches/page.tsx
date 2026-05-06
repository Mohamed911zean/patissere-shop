'use client';

import React, { useState } from 'react';
import { Footer } from '@/components/layout/Footer';
import { MapPin, Phone, Clock, Search, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const BRANCHES = [
  {
    cityEn: 'Cairo',
    cityAr: 'القاهرة',
    areaEn: 'Moqattam',
    areaAr: 'المقطم',
    nameEn: 'Moqattam Branch',
    nameAr: 'فرع المقطم',
    addressEn: 'Street 9, in front of Total gas station, after Awlad Ragab descent, in front of Hosni Butchery',
    addressAr: 'شارع 9، أمام بنزينة توتال، بعد نزلة أولاد رجب، أمام جزارة حسني',
    phones: ['0228434457', '01153589563'],
    hoursEn: '8:00 AM – 12:00 AM',
    hoursAr: '٨ ص – ١٢ م',
  },
  {
    cityEn: 'Mansoura',
    cityAr: 'المنصورة',
    areaEn: 'Suez Canal St.',
    areaAr: 'شارع قناة السويس',
    nameEn: 'Suez Canal Branch',
    nameAr: 'فرع قناة السويس',
    addressEn: 'Suez Canal Street, next to Safwat Center and Al-Baraka Bank',
    addressAr: 'شارع قناة السويس، بجوار صفوت سنتر وبنك البركة',
    phones: ['0502300380', '01024245344'],
    hoursEn: '8:00 AM – 12:00 AM',
    hoursAr: '٨ ص – ١٢ م',
  },
  {
    cityEn: 'Mansoura',
    cityAr: 'المنصورة',
    areaEn: 'Abdel Salam Aref St.',
    areaAr: 'شارع عبد السلام عارف',
    nameEn: 'Stadium Branch',
    nameAr: 'فرع الستاد',
    addressEn: 'Abdel Salam Aref Street, next to Mansoura Stadium',
    addressAr: 'شارع عبد السلام عارف، بجوار ستاد المنصورة',
    phones: ['0502604164', '01099089950'],
    hoursEn: '8:00 AM – 12:00 AM',
    hoursAr: '٨ ص – ١٢ م',
  },
  {
    cityEn: 'Mansoura',
    cityAr: 'المنصورة',
    areaEn: 'University District',
    areaAr: 'حي الجامعة',
    nameEn: 'University Branch',
    nameAr: 'فرع الجامعة',
    addressEn: 'University District, Jihan Street Extension',
    addressAr: 'حي الجامعة، امتداد شارع جيهان',
    phones: ['0502394972', '0502363660', '01120156060'],
    hoursEn: '8:00 AM – 12:00 AM',
    hoursAr: '٨ ص – ١٢ م',
  },
  {
    cityEn: 'Mansoura',
    cityAr: 'المنصورة',
    areaEn: 'Al-Gomhoreya St.',
    areaAr: 'شارع الجمهورية',
    nameEn: 'Al-Gomhoreya Branch',
    nameAr: 'فرع الجمهورية',
    addressEn: 'Al-Gomhoreya Street, in front of Ibn Luqman Preparatory School',
    addressAr: 'شارع الجمهورية، أمام مدرسة ابن لقمان الإعدادية',
    phones: ['0502244418', '01050515253'],
    hoursEn: '8:00 AM – 12:00 AM',
    hoursAr: '٨ ص – ١٢ م',
  },
];

const CITIES = [
  { en: 'All', ar: 'الكل' },
  { en: 'Cairo', ar: 'القاهرة' },
  { en: 'Mansoura', ar: 'المنصورة' },
];

export default function BranchesPage() {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const [selectedCity, setSelectedCity] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBranches = BRANCHES.filter(b => {
    const cityMatch = selectedCity === 'All' || b.cityEn === selectedCity;
    const q = searchQuery.toLowerCase();
    const searchMatch = !q ||
      b.nameEn.toLowerCase().includes(q) ||
      b.nameAr.includes(searchQuery) ||
      b.addressEn.toLowerCase().includes(q) ||
      b.addressAr.includes(searchQuery);
    return cityMatch && searchMatch;
  });

  return (
    <>
      <div className={`bg-bg-base pt-24 pb-32 relative overflow-hidden ${isAr ? 'text-right' : ''}`}>
        {/* Background Decorative Element */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gold/5 to-transparent pointer-events-none" />

        <div className="container relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold mb-4 block">
                {isAr ? 'ابحث عن أقرب فرع' : 'Find Your Nearest Store'}
              </span>
              <h1 className="text-h1 text-text-primary uppercase tracking-widest leading-tight">
                {isAr ? 'فروعنا' : 'Our Branches'}
              </h1>
              <p className="text-text-secondary mt-4 text-sm">
                {isAr ? '٥ فروع في القاهرة والمنصورة' : '5 Branches across Cairo & Mansoura'}
              </p>
            </motion.div>
          </div>

          {/* Filters Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col lg:flex-row gap-10 mb-16 p-8 lg:p-12 rounded-[32px] bg-bg-card border border-gold-border/10 shadow-premium relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

            <div className="flex-1 space-y-4 relative z-10">
              <label className="text-[10px] uppercase tracking-[0.3em] text-text-fade font-bold ml-2">
                {isAr ? 'اختر المدينة' : 'Select City'}
              </label>
              <div className="flex flex-wrap gap-3">
                {CITIES.map(city => (
                  <button
                    key={city.en}
                    onClick={() => setSelectedCity(city.en)}
                    className={cn(
                      'px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-500',
                      selectedCity === city.en
                        ? 'bg-gold text-text-on-gold shadow-gold'
                        : 'bg-bg-elevated/50 text-text-muted hover:text-gold hover:border-gold-border/40 border border-transparent'
                    )}
                  >
                    {isAr ? city.ar : city.en}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 space-y-4 relative z-10">
              <label className="text-[10px] uppercase tracking-[0.3em] text-text-fade font-bold ml-2">
                {isAr ? 'ابحث بالمنطقة أو الاسم' : 'Search Area'}
              </label>
              <div className="relative group/search">
                <input
                  type="text"
                  placeholder={isAr ? 'ابحث عن فرع...' : 'Search by area or branch name...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  dir={isAr ? 'rtl' : 'ltr'}
                  className={`w-full bg-bg-elevated/50 border border-gold-border/10 rounded-full px-8 py-4 text-sm text-text-primary focus:outline-none focus:border-gold transition-all duration-300 group-hover/search:border-gold-border/30 ${isAr ? 'text-right pr-8 pl-14' : 'pr-14'}`}
                />
                <Search className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-text-fade group-hover/search:text-gold transition-colors duration-300 ${isAr ? 'left-6' : 'right-6'}`} />
              </div>
            </div>
          </motion.div>

          {/* Branch Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredBranches.map((branch, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-bg-card border border-gold-border/10 rounded-[32px] p-10 hover:border-gold-border/40 hover:shadow-hover hover:-translate-y-2 transition-all duration-500 flex flex-col group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-2xl rounded-full -translate-x-[-50%] -translate-y-1/2 group-hover:bg-gold/10 transition-colors duration-700" />

                {/* City Badge */}
                <div className="mb-4">
                  <span className="bg-bg-base/60 backdrop-blur-md text-gold text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] border border-gold-border/20">
                    {isAr ? branch.cityAr : branch.cityEn}
                  </span>
                </div>

                <h4 className="text-2xl font-display text-text-primary mb-8 group-hover:text-gold transition-colors duration-300 relative z-10">
                  {isAr ? branch.nameAr : branch.nameEn}
                </h4>

                <div className="space-y-6 flex-1 relative z-10">
                  <div className={`flex gap-5 text-sm text-text-secondary leading-relaxed font-light ${isAr ? 'flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 rounded-full bg-bg-elevated border border-gold-border/10 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-text-on-gold transition-all duration-500">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="pt-2">{isAr ? branch.addressAr : branch.addressEn}</span>
                  </div>
                  <div className={`flex gap-5 text-sm text-text-secondary font-light ${isAr ? 'flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 rounded-full bg-bg-elevated border border-gold-border/10 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-text-on-gold transition-all duration-500">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col pt-2 gap-1">
                      {branch.phones.map(p => (
                        <a key={p} href={`tel:${p}`} className="hover:text-gold transition-colors duration-300" dir="ltr">
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className={`flex gap-5 text-sm text-text-secondary font-light ${isAr ? 'flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 rounded-full bg-bg-elevated border border-gold-border/10 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-text-on-gold transition-all duration-500">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span className="pt-2">{isAr ? branch.hoursAr : branch.hoursEn}</span>
                  </div>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(isAr ? branch.addressAr : branch.addressEn + ' ' + branch.cityEn + ' Egypt')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 relative z-10"
                >
                  <Button variant="outline" className="w-full h-14 group-hover:bg-gold group-hover:text-text-on-gold transition-all duration-500">
                    {isAr ? 'احصل على الاتجاهات' : 'Get Directions'} <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>

          {filteredBranches.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-12 h-12 text-gold/20 mx-auto mb-6" />
              <p className="text-text-muted text-lg font-display">
                {isAr ? 'لا توجد فروع مطابقة' : 'No branches found'}
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
