'use client';

import React, { useState } from 'react';
import { Footer } from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

const FAQS = [
  {
    questionEn: 'What products does Lenza offer?',
    questionAr: 'ما المنتجات التي تقدمها لينزا؟',
    answerEn: 'Lenza Sweets offers specialty cakes, cheesecakes, tarts, pastries, chocolates, soggy (oriental sweets), and custom cakes for all occasions.',
    answerAr: 'تقدم لينزا سويتس كيكات متخصصة، تشيز كيك، تارت، معجنات، شوكولاتة، سوجي، وكيكات مخصصة لجميع المناسبات.',
  },
  {
    questionEn: 'Where are your branches located?',
    questionAr: 'أين توجد فروعكم؟',
    answerEn: 'We have 5 branches: one in Moqattam (Cairo) and four in Mansoura (Suez Canal St., Stadium, University District, and Al-Gomhoreya St.). Visit our Branches page for full addresses.',
    answerAr: 'لدينا ٥ فروع: واحد في المقطم (القاهرة) وأربعة في المنصورة (شارع قناة السويس، الستاد، حي الجامعة، وشارع الجمهورية). زر صفحة الفروع للاطلاع على العناوين كاملة.',
  },
  {
    questionEn: 'How can I place an order?',
    questionAr: 'كيف يمكنني تقديم طلب؟',
    answerEn: 'You can order online via our website, visit any branch directly, or call your nearest branch. Delivery is available during working hours.',
    answerAr: 'يمكنك الطلب عبر موقعنا، أو زيارة أي فرع مباشرة، أو الاتصال بأقرب فرع لك. التوصيل متاح خلال ساعات العمل.',
  },
  {
    questionEn: 'Do you offer custom cakes for special occasions?',
    questionAr: 'هل تقدمون كيكات مخصصة للمناسبات؟',
    answerEn: 'Yes! We specialize in custom cakes for birthdays, weddings, engagements, and themed events. A minimum 48-hour notice is required. Contact us to start your consultation.',
    answerAr: 'نعم! نتخصص في الكيكات المخصصة لأعياد الميلاد والأفراح والخطوبة والمناسبات الخاصة. نحتاج إشعاراً مسبقاً بـ٤٨ ساعة على الأقل. تواصل معنا لبدء الاستشارة.',
  },
  {
    questionEn: 'What are your opening hours?',
    questionAr: 'ما هي أوقات العمل؟',
    answerEn: 'All branches are open from 8:00 AM to 12:00 AM daily.',
    answerAr: 'جميع الفروع مفتوحة من ٨ صباحاً حتى ١٢ منتصف الليل يومياً.',
  },
  {
    questionEn: 'Do you offer delivery services?',
    questionAr: 'هل تقدمون خدمة التوصيل؟',
    answerEn: 'Yes, delivery is available. Please contact your nearest branch directly for delivery details and timing in your area.',
    answerAr: 'نعم، التوصيل متاح. يرجى التواصل مع أقرب فرع لك مباشرة للاستفسار عن تفاصيل التوصيل في منطقتك.',
  },
  {
    questionEn: 'How can I contact customer service?',
    questionAr: 'كيف أتواصل مع خدمة العملاء؟',
    answerEn: 'You can reach us by phone via your nearest branch number (available on the Branches page), through WhatsApp, or using our Contact Us form.',
    answerAr: 'يمكنك التواصل عبر أرقام الفروع (متوفرة في صفحة الفروع)، واتساب، أو من خلال نموذج التواصل في صفحة اتصل بنا.',
  },
  {
    questionEn: 'What is your refund policy?',
    questionAr: 'ما هي سياسة الاسترداد؟',
    answerEn: 'Any issues must be reported on the same day of purchase with supporting photos. Claims made after 24 hours are not eligible for a refund or replacement.',
    answerAr: 'يجب الإبلاغ عن أي مشكلة في نفس يوم الشراء مع صور توضيحية. لا تُقبل المطالبات بعد مرور ٢٤ ساعة.',
  },
];

function FAQItem({
  questionEn, questionAr, answerEn, answerAr, isOpen, onClick, isAr, textAlignClass,
}: {
  questionEn: string; questionAr: string;
  answerEn: string; answerAr: string;
  isOpen: boolean; onClick: () => void; isAr: boolean;
  textAlignClass: string;
}) {
  return (
    <div className="border-b border-gold-border/10 last:border-0">
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between py-8 group ${isAr ? 'flex-row-reverse text-right' : 'text-left'}`}
      >
        <h3 className={cn(
          'text-lg font-display tracking-wide transition-all duration-500',
          isOpen ? 'text-gold' : 'text-text-primary group-hover:text-gold'
        )}>
          {isAr ? questionAr : questionEn}
        </h3>
        <div className={cn(
          'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border shrink-0 ml-4',
          isOpen
            ? 'bg-gold border-gold text-text-on-gold shadow-gold rotate-45'
            : 'bg-bg-card/50 border-gold-border/10 text-gold group-hover:border-gold/30'
        )}>
          <Plus className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className={`pb-8 text-text-muted leading-relaxed tracking-wide text-sm max-w-2xl ${textAlignClass}`}>
              {isAr ? answerAr : answerEn}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQsPage() {
  const { language, t } = useLanguage();
  const isAr = language === 'ar';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Resolve the padding class here where t() is in scope
  const answerPaddingClass = t('sections.pl_2');

  return (
    <>
      <div className="bg-bg-base relative overflow-hidden pt-24 pb-32">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-gold mb-6 block">
                  {t('sections.assistance_center')}
                </span>
                <h1 className="text-h2 text-text-primary font-display uppercase tracking-widest">
                  {isAr
                    ? <>كيف يمكننا <span className="text-gold">مساعدتك</span>؟</>
                    : <>How can we <span className="text-gold">Help</span>?</>
                  }
                </h1>
                <div className="w-20 h-[1px] bg-gold/30 mx-auto mt-8" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-bg-card/40 backdrop-blur-xl border border-gold-border/10 rounded-[2.5rem] p-6 md:p-12 shadow-card"
            >
              {FAQS.map((faq, index) => (
                <FAQItem
                  key={index}
                  questionEn={faq.questionEn}
                  questionAr={faq.questionAr}
                  answerEn={faq.answerEn}
                  answerAr={faq.answerAr}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  isAr={isAr}
                  textAlignClass={answerPaddingClass}
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-20 text-center p-12 rounded-[2rem] bg-gold/5 border border-gold-border/10"
            >
              <h4 className="text-xl font-display text-text-primary mb-4">
                {t('sections.still_have_questions')}
              </h4>
              <p className="text-sm text-text-muted mb-8 tracking-wide">
                {t('sections.our_team_is_available_daily_to')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="/contact-us" className="text-[11px] font-black uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors">
                  {t('sections.contact_us')}
                </a>
                <div className="hidden sm:block w-[1px] h-4 bg-gold-border/20" />
                <a href="tel:0228434457" className="text-[11px] font-black uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors" dir="ltr">
                  0228434457
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}