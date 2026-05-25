'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function CTASection() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative py-24 md:py-32 bg-brand-navy overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gold glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-brand-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Gold lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <div className="relative z-10 container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-6">
            {t('ابدأ رحلتك معنا', 'Start Your Journey With Us')}
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 max-w-3xl mx-auto text-balance">
            {t(
              'ابدأ شراكتك الاستثمارية مع نغم ستار العقارية',
              'Start Your Investment Partnership with Nagham Star Real Estate'
            )}
          </h2>

          <div className="h-px w-16 bg-brand-gold mx-auto mb-8" />

          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            {t(
              'نحن هنا لنحوّل رؤيتك الاستثمارية إلى واقع. تواصل معنا واكتشف كيف نستطيع بناء مشروعك معاً.',
              'We are here to turn your investment vision into reality. Reach out and discover how we can build your project together.'
            )}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="btn-primary text-base px-9 py-4">
              {t('تواصل معنا', 'Contact Us')}
              <Arrow className="w-4 h-4" />
            </a>
            <a href="#services" className="btn-outline text-base px-9 py-4">
              {t('استعرض خدماتنا', 'Our Services')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
