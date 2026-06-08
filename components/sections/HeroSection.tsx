'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection() {
  const { t, isRTL, language } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-screen bg-brand-navy flex items-center overflow-hidden">

      {/* Background image — desktop/mobile responsive */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-desktop.webp"
          alt="نغم ستار العقارية — مشاريع استثمارية"
          fill
          priority
          quality={90}
          className="object-cover object-center hidden sm:block"
          sizes="100vw"
        />
        <Image
          src="/images/hero-mobile.webp"
          alt="نغم ستار العقارية — مشاريع استثمارية"
          fill
          priority
          quality={90}
          className="object-cover object-center block sm:hidden"
          sizes="100vw"
        />
        {/* Overlay — gradient من يمين (النصوص) للشمال خفيف */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to left, rgba(14,27,43,0.72) 0%, rgba(14,27,43,0.45) 55%, rgba(14,27,43,0.12) 100%)',
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-brand-navy to-transparent" />
      </div>

      {/* Decorative circles — right side */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block animate-float">
        <svg width="560" height="560" viewBox="0 0 560 560" fill="none">
          <circle cx="280" cy="280" r="260" stroke="#c9a96e" strokeWidth="1" />
          <circle cx="280" cy="280" r="200" stroke="#c9a96e" strokeWidth="0.8" />
          <circle cx="280" cy="280" r="140" stroke="#c9a96e" strokeWidth="0.6" />
          <circle cx="280" cy="280" r="80" stroke="#c9a96e" strokeWidth="0.4" />
          <circle cx="280" cy="280" r="4" fill="#c9a96e" />
        </svg>
      </div>

      {/* Decorative circles — left side small */}
      <div className="absolute -left-20 bottom-20 opacity-[0.06] pointer-events-none hidden lg:block animate-float-delayed">
        <svg width="260" height="260" viewBox="0 0 260 260" fill="none">
          <circle cx="130" cy="130" r="120" stroke="#c9a96e" strokeWidth="1" />
          <circle cx="130" cy="130" r="80" stroke="#c9a96e" strokeWidth="0.7" />
        </svg>
      </div>

      {/* Gold top bar */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
        <div className="max-w-3xl">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-10 bg-brand-gold" />
            <span className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase">
              {t('نغم ستار العقارية', 'Nagham Star Real Estate')}
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[1.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6"
            style={{ lineHeight: '1.6', wordBreak: 'keep-all' }}
          >
            {language === 'ar' ? (
              <>
                وجهات استثمارية
                <br />
                <span className="text-brand-gold">تُبنى بالرؤية</span>
                <br />
                والرقيّ
              </>
            ) : (
              <>
                Investment Destinations
                <br />
                Built on{' '}
                <span className="text-brand-gold">Vision</span>
                <br />
                and Excellence
              </>
            )}
          </motion.h1>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="origin-start h-px w-24 bg-brand-gold mb-8"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/65 text-base md:text-lg leading-relaxed max-w-xl mb-10"
          >
            {t(
              'مؤسسة سعودية متخصصة في التطوير العقاري، وإدارة المجمعات التجارية، واستقطاب العلامات الكبرى — نحوّل المواقع إلى وجهات استثمارية نابضة بالحياة.',
              'A Saudi institution specializing in real estate development, commercial complex management, and attracting major brands — transforming locations into thriving investment destinations.'
            )}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="btn-primary text-base px-8 py-4">
              {t('ابدأ شراكتك معنا', 'Start Your Partnership')}
              <Arrow className="w-4 h-4" />
            </a>
            <a href="#services" className="btn-outline text-base px-8 py-4">
              {t('استعرض خدماتنا', 'Explore Services')}
            </a>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-brand-gold transition-colors duration-200"
      >
        <span className="text-[10px] tracking-widest uppercase">{t('اكتشف أكثر', 'Discover')}</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
