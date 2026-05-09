'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, options?: any) => string;
}

import '../i18n';
import { useTranslation } from 'react-i18next';
import { useRouter, usePathname } from 'next/navigation';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const currentPathname = usePathname();
  const pathnameLocale = currentPathname?.split('/')[1];
  const activeLocale = (pathnameLocale === 'ar' || pathnameLocale === 'en') ? pathnameLocale : 'en';

  const [language, setLanguageState] = useState<Language>(activeLocale as Language);

  const { t: i18nT, i18n } = useTranslation();

  useEffect(() => {
    // Keep internal state synced if URL changes
    if (activeLocale !== language) {
      setLanguageState(activeLocale as Language);
    }
    if (i18n.language !== activeLocale) {
      i18n.changeLanguage(activeLocale);
    }
  }, [activeLocale, language, i18n]);

  const setLanguage = (newLocale: Language) => {
    if (newLocale === language) return;
    
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    if (activeLocale === 'en' && newLocale === 'ar') {
      router.push('/ar' + (currentPathname === '/en' ? '' : currentPathname.replace('/en', '')));
    } else if (activeLocale === 'ar' && newLocale === 'en') {
      router.push(currentPathname.replace('/ar', '') || '/');
    }
  };

  const t = (key: string, options?: any) => {
    return i18nT(key, options) as string;
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
