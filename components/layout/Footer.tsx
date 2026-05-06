'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {  Phone, Mail, MapPin } from 'lucide-react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import { useLanguage } from '@/context/LanguageContext';

const NAV_LINKS = [
  { href: '/', en: 'Home', ar: 'الرئيسية' },
  { href: '/shop', en: 'Shop', ar: 'المتجر' },
  { href: '/special-cakes', en: 'Special Cakes', ar: 'كيكات خاصة' },
  { href: '/about', en: 'About Us', ar: 'من نحن' },
  { href: '/branches', en: 'Branches', ar: 'فروعنا' },
  { href: '/faqs', en: 'FAQs', ar: 'الأسئلة الشائعة' },
];

const SUPPORT_LINKS = [
  { href: '/contact-us', en: 'Contact Us', ar: 'اتصل بنا' },
  { href: '/privacy-policy', en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
  { href: '/terms', en: 'Terms & Conditions', ar: 'الشروط والأحكام' },
];

export function Footer() {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <footer className={`bg-bg-deep border-t border-white/5 pt-24 pb-12 relative overflow-hidden ${isAr ? 'text-right' : ''}`}>
      {/* Decorative Gradient Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20 ${isAr ? 'direction-rtl' : ''}`}>

          {/* Column 1: Brand */}
          <div className={`flex flex-col ${isAr ? 'items-end' : 'items-start'}`}>
            <div className="relative w-44 h-16 mb-8 transition-transform duration-500 hover:scale-105">
              <Image
                src="/logo.png"
                alt="Lenza Sweets"
                fill
                className="object-contain"
                sizes="176px"
              />
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-10 max-w-xs font-light">
              {isAr
                ? 'نصنع ذكريات حلوة بشغف وتميز منذ أكثر من ١٢ عاماً — تجربة أرقى المعجنات في كل قضمة.'
                : 'Crafting sweet memories with passion and excellence for over 12 years. Experience the finest pastries in every bite.'}
            </p>
            <div className="flex gap-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-gold-border/40 flex items-center justify-center text-gold hover:bg-gold hover:text-text-on-gold hover:shadow-gold transition-all duration-500 ease-premium group"
              >
                <FaSquareFacebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-gold-border/40 flex items-center justify-center text-gold hover:bg-gold hover:text-text-on-gold hover:shadow-gold transition-all duration-500 ease-premium group"
              >
                <FaInstagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://wa.me/201153589563"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-gold-border/40 flex items-center justify-center text-gold hover:bg-gold hover:text-text-on-gold hover:shadow-gold transition-all duration-500 ease-premium group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={isAr ? 'sm:pr-8 lg:pr-0' : 'sm:pl-8 lg:pl-0'}>
            <h4 className="text-text-primary font-bold mb-8 uppercase tracking-[0.2em] text-[11px]">
              {isAr ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide"
                  >
                    {isAr ? link.ar : link.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-text-primary font-bold mb-8 uppercase tracking-[0.2em] text-[11px]">
              {isAr ? 'الدعم' : 'Support'}
            </h4>
            <ul className="flex flex-col gap-5">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide"
                  >
                    {isAr ? link.ar : link.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-text-primary font-bold mb-8 uppercase tracking-[0.2em] text-[11px]">
              {isAr ? 'اتصل بنا' : 'Contact Us'}
            </h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4 text-text-secondary text-sm group">
                <div className="w-10 h-10 rounded-full bg-gold-subtle/30 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-text-on-gold transition-all duration-500">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-text-fade font-bold">
                    {isAr ? 'اتصل بنا' : 'Call Us'}
                  </span>
                  <a href="tel:0228434457" className="hover:text-gold transition-colors font-medium" dir="ltr">
                    0228434457
                  </a>
                  <a href="tel:01153589563" className="hover:text-gold transition-colors font-medium" dir="ltr">
                    01153589563
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 text-text-secondary text-sm group">
                <div className="w-10 h-10 rounded-full bg-gold-subtle/30 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-text-on-gold transition-all duration-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-text-fade font-bold">
                    {isAr ? 'مواقعنا' : 'Locations'}
                  </span>
                  <span className="font-medium">
                    {isAr ? 'القاهرة والمنصورة، مصر' : 'Cairo & Mansoura, Egypt'}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={`pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 ${isAr ? 'md:flex-row-reverse text-center md:text-right' : 'text-center md:text-left'}`}>
          <p className="text-text-fade text-[11px] font-medium tracking-wider uppercase">
            © 2026 Lenza Sweets · {isAr ? 'جميع الحقوق محفوظة' : 'El Ramlawy Food. All rights reserved.'}
          </p>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="text-text-fade hover:text-gold transition-colors text-[11px] font-bold uppercase tracking-widest">
              {isAr ? 'الخصوصية' : 'Privacy'}
            </Link>
            <Link href="/terms" className="text-text-fade hover:text-gold transition-colors text-[11px] font-bold uppercase tracking-widest">
              {isAr ? 'الشروط' : 'Terms'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
