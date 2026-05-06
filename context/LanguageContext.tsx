'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    shop: 'Shop',
    specialCakes: 'Special Cakes',
    about: 'About',
    branches: 'Branches',
    faqs: 'FAQs',
    contactUs: 'Contact Us',
    deliveryTo: 'Delivery to',
    selectLocation: 'Select Location',
    freeDelivery: 'Free delivery on orders above 500 EGP',
  },
  ar: {
    home: 'الرئيسية',
    shop: 'المتجر',
    specialCakes: 'كيكات خاصة',
    about: 'من نحن',
    branches: 'فروعنا',
    faqs: 'الأسئلة الشائعة',
    contactUs: 'اتصل بنا',
    deliveryTo: 'التوصيل إلى',
    selectLocation: 'اختر الموقع',
    freeDelivery: 'توصيل مجاني للطلبات فوق ٥٠٠ جنيه',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', language);
  }, [language]);

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
