'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ShoppingBag, MapPin, X, User, Phone } from 'lucide-react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { useLocation } from '@/context/LocationContext';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '/', label: 'nav.home', defaultText: 'Home' },
  { href: '/shop', label: 'nav.shop', defaultText: 'Shop' },
  { href: '/special-cakes', label: 'nav.specialCakes', defaultText: 'Special Cakes' },
  { href: '/about', label: 'nav.about', defaultText: 'Our Story' },
  { href: '/branches', label: 'nav.branches', defaultText: 'Locations' },
  { href: '/contact-us', label: 'nav.contactUs', defaultText: 'Contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { language, setLanguage, t } = useLanguage();
  const { items, totalItems, setIsCartOpen } = useCart();
  const { city, area, setIsModalOpen } = useLocation();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const cartCount = mounted ? totalItems : 0;
  const currentLang = mounted ? language : 'en';

  const textColor = isScrolled ? "text-black" : "text-white drop-shadow-md";
  const iconColor = isScrolled
    ? "text-black hover:text-yellow-600"
    : "text-white hover:text-yellow-400 drop-shadow-md";
  const burgerLineColor = isScrolled ? "bg-black" : "bg-white shadow-sm";

  return (
    <>
      {/* ── TOP HEADER ── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isScrolled
            ? "py-4 bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5"
            : "py-6 bg-gradient-to-b from-black/60 via-black/20 to-transparent"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* LEFT: Menu trigger */}
          <div className="flex-1">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="group flex items-center gap-3 hover:opacity-70 transition-opacity"
            >
              <div className="flex flex-col gap-[5px] items-start justify-center w-8 h-8">
                <span className={cn("block h-[2px] w-full transition-all group-hover:w-3/4", burgerLineColor)} />
                <span className={cn("block h-[2px] w-3/4 transition-all group-hover:w-full", burgerLineColor)} />
                <span className={cn("block h-[2px] w-1/2 transition-all group-hover:w-3/4", burgerLineColor)} />
              </div>
              <span className={cn("hidden sm:block text-xs font-bold uppercase tracking-[0.2em]", textColor)}>
                {mounted ? t('common.menu', { defaultValue: 'Menu' }) : 'Menu'}
              </span>
            </button>
          </div>

          {/* CENTER: Logo — fixed with a proper wrapper height so absolute positioning works */}
          <div className="flex-none flex justify-center">
            <div className={cn(
              "relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
              isScrolled ? "w-12 h-12 md:w-15 md:h-15" : "w-14 h-14 md:w-18 md:h-18"
            )}>
              <Link
                href="/"
                className={cn(
                  "absolute inset-0 rounded-full overflow-hidden flex items-center justify-center group transition-all duration-700",
                  isScrolled
                    ? "border border-black/10 shadow-md bg-white"
                    : "border border-white/30 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] bg-white/10 backdrop-blur-sm"
                )}
              >
                <Image
                  src="/logo.png"
                  alt="Patisserie Logo"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </Link>
            </div>
          </div>

          {/* RIGHT: Actions */}
          <div className="flex-1 flex justify-end items-center gap-4 sm:gap-6">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className={cn("text-xs font-black uppercase tracking-widest transition-colors", iconColor)}
            >
              {currentLang === 'en' ? 'AR' : 'EN'}
            </button>
            <button className={cn("hidden sm:block transition-colors", iconColor)}>
              <User strokeWidth={1.5} className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className={cn("relative flex items-center gap-2 transition-colors", iconColor)}
            >
              <ShoppingBag strokeWidth={1.5} className="w-5 h-5 sm:w-6 sm:h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-yellow-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-white/20">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── FULL SCREEN MENU (white bg, dark text) ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 0% 0%)" }}
            animate={{ clipPath: "circle(150% at 0% 0%)" }}
            exit={{ clipPath: "circle(0% at 0% 0%)", opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-white min-h-screen overflow-y-auto"
          >
            {/* Close button */}
            <div className="absolute top-6 right-6 md:top-8 md:right-12 z-10">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white hover:bg-yellow-600 hover:rotate-90 transition-all duration-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="container mx-auto px-6 py-24 md:py-0 min-h-screen flex flex-col md:flex-row items-center">

              {/* LEFT: Nav links */}
              <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-8 justify-center">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.07, duration: 0.5, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "group inline-flex items-center gap-6 transition-opacity duration-300",
                        pathname === link.href
                          ? "opacity-100"
                          : "opacity-25 hover:opacity-100"
                      )}
                    >
                      <span className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-black">
                        {mounted ? t(link.label, { defaultValue: link.defaultText }) : link.defaultText}
                      </span>
                      {pathname === link.href && (
                        <motion.span
                          layoutId="activeDot"
                          className="w-3 h-3 md:w-4 md:h-4 bg-yellow-600 rounded-full hidden md:block"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* RIGHT: Secondary info */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="w-full md:w-1/2 flex flex-col mt-16 md:mt-0 pl-0 md:pl-24 border-t md:border-t-0 md:border-l border-black/10 pt-10 md:pt-0"
              >
                {/* Location */}
                <div className="mb-10">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-black/40 mb-4">
                    {mounted ? t('common.deliveryTo', { defaultValue: 'Delivery To' }) : 'Delivery To'}
                  </h4>
                  <button
                    onClick={() => { setIsMenuOpen(false); setIsModalOpen(true); }}
                    className="flex items-center gap-3 text-lg font-medium text-black hover:text-yellow-600 transition-colors"
                  >
                    <MapPin className="w-5 h-5 text-yellow-600 shrink-0" />
                    {mounted && city ? `${city}, ${area}` : t('common.selectLocation', { defaultValue: 'Select Location' })}
                  </button>
                </div>

                {/* Contact */}
                <div className="mb-12 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-black/40 mb-4">
                    Get in Touch
                  </h4>
                  <p className="flex items-center gap-3 text-lg text-black">
                    <Phone className="w-5 h-5 text-black/30 shrink-0" />
                    +20 123 456 7890
                  </p>
                  <div className="flex gap-3 pt-2">
                    <button className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                      <FaInstagram className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                      <FaSquareFacebook className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Language switcher */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-black/40 mb-4">
                    Language
                  </h4>
                  <div className="flex gap-2">
                    {['en', 'ar'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setLanguage(lang as 'en' | 'ar')}
                        className={cn(
                          "px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300",
                          currentLang === lang
                            ? "bg-black text-white"
                            : "bg-transparent border border-black/20 text-black hover:bg-black/5"
                        )}
                      >
                        {lang === 'en' ? 'English' : 'العربية'}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}