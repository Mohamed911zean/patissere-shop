'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Footer } from '@/components/layout/Footer';
import { BranchesCTA } from '@/components/sections/BranchesCTA';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactUsPage() {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  const quickInfo = [
    {
      icon: Phone,
      titleEn: 'Call Us',
      titleAr: 'اتصل بنا',
      valueEn: '0228434457 / 01153589563',
      valueAr: '0228434457 / 01153589563',
      href: 'tel:0228434457',
    },
    {
      icon: MapPin,
      titleEn: 'Our Locations',
      titleAr: 'مواقعنا',
      valueEn: 'Cairo (Moqattam) & Mansoura (4 Branches)',
      valueAr: 'القاهرة (المقطم) والمنصورة (٤ فروع)',
      href: '/branches',
    },
    {
      icon: Clock,
      titleEn: 'Working Hours',
      titleAr: 'ساعات العمل',
      valueEn: '8:00 AM – 12:00 AM Daily',
      valueAr: 'يومياً ٨ ص – ١٢ م',
      href: undefined,
    },
  ];

  return (
    <>
      <div className={`bg-bg-base pt-24 pb-32 relative overflow-hidden ${isAr ? 'text-right' : ''}`}>
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gold/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold mb-4">
                {isAr ? 'اتصل بنا' : 'Contact Us'}
              </h2>
              <h1 className="text-h1 text-text-primary mb-6 italic font-display">
                {isAr ? 'نسعد بتواصلك معنا' : "Let's Keep In Touch"}
              </h1>
              <p className="text-text-secondary max-w-xl mx-auto font-light leading-relaxed">
                {isAr
                  ? 'اترك استفسارك وسيتواصل معك فريقنا في أقرب وقت ممكن.'
                  : 'Leave your inquiries and our team will contact you shortly to assist with your request.'}
              </p>
            </motion.div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            {quickInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-bg-card border border-gold-border/10 rounded-2xl p-6 text-center hover:border-gold-border/30 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold-border/20 flex items-center justify-center text-gold mx-auto mb-4 group-hover:bg-gold group-hover:text-text-on-gold transition-all duration-500">
                  <item.icon className="w-5 h-5" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-text-fade font-bold mb-2">
                  {isAr ? item.titleAr : item.titleEn}
                </p>
                {item.href ? (
                  <a href={item.href} className="text-sm text-text-secondary hover:text-gold transition-colors font-medium" dir="ltr">
                    {isAr ? item.valueAr : item.valueEn}
                  </a>
                ) : (
                  <p className="text-sm text-text-secondary font-medium">
                    {isAr ? item.valueAr : item.valueEn}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto bg-bg-card border border-gold-border/10 rounded-[32px] p-10 md:p-16 shadow-premium relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center text-success mx-auto mb-8 border border-success/20 shadow-lg shadow-success/10">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-display text-text-primary mb-4">
                    {isAr ? 'تم إرسال رسالتك' : 'Message Sent'}
                  </h3>
                  <p className="text-text-secondary mb-10 font-light">
                    {isAr
                      ? 'استلمنا استفسارك وسنتواصل معك قريباً.'
                      : "We've received your inquiry and we'll be in touch soon."}
                  </p>
                  <Button variant="outline" className="px-12" onClick={() => setStatus('idle')}>
                    {isAr ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-8 relative z-10"
                  dir={isAr ? 'rtl' : 'ltr'}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-text-fade font-bold">
                        {isAr ? 'الاسم الأول' : 'First Name'}
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-bg-elevated/50 border border-gold-border/10 rounded-2xl px-6 py-4 text-text-primary focus:outline-none focus:border-gold transition-all duration-300 hover:border-gold-border/30"
                        placeholder={isAr ? 'محمد' : 'John'}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-text-fade font-bold">
                        {isAr ? 'اسم العائلة' : 'Last Name'}
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-bg-elevated/50 border border-gold-border/10 rounded-2xl px-6 py-4 text-text-primary focus:outline-none focus:border-gold transition-all duration-300 hover:border-gold-border/30"
                        placeholder={isAr ? 'أحمد' : 'Doe'}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-text-fade font-bold">
                      {isAr ? 'البريد الإلكتروني' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-bg-elevated/50 border border-gold-border/10 rounded-2xl px-6 py-4 text-text-primary focus:outline-none focus:border-gold transition-all duration-300 hover:border-gold-border/30"
                      placeholder={isAr ? 'example@email.com' : 'john@example.com'}
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-text-fade font-bold">
                      {isAr ? 'رقم الهاتف' : 'Mobile Number'}
                    </label>
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      className="w-full bg-bg-elevated/50 border border-gold-border/10 rounded-2xl px-6 py-4 text-text-primary focus:outline-none focus:border-gold transition-all duration-300 hover:border-gold-border/30"
                      placeholder="+20 1XX XXX XXXX"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-text-fade font-bold">
                        {isAr ? 'رسالتك' : 'Your Message'}
                      </label>
                      <span className="text-[9px] text-text-fade font-bold tracking-widest">{message.length}/150</span>
                    </div>
                    <textarea
                      required
                      maxLength={150}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-bg-elevated/50 border border-gold-border/10 rounded-2xl px-6 py-4 text-text-primary focus:outline-none focus:border-gold transition-all duration-300 hover:border-gold-border/30 min-h-[150px] resize-none"
                      placeholder={isAr ? 'كيف يمكننا مساعدتك؟' : 'How can we help you?'}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    className="w-full h-16 text-base shadow-gold mt-4"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-3" />
                        {isAr ? 'جارٍ الإرسال...' : 'Processing...'}
                      </>
                    ) : (
                      isAr ? 'إرسال الرسالة' : 'Send Message'
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <BranchesCTA />
      <Footer />
    </>
  );
}
