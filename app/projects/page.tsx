'use client';

import { motion } from 'framer-motion';
import { Building, TrendingUp, Layers, Home, ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { projects } from '@/data/siteContent';
import Link from 'next/link';

const categoryIcons: Record<string, React.ElementType> = {
  'وجهات تجارية': Building,
  'Commercial Destinations': Building,
  'مشاريع استثمارية': TrendingUp,
  'Investment Projects': TrendingUp,
  'إدارة الأصول': Layers,
  'Asset Management': Layers,
};

export default function ProjectsPage() {
  const { t, language } = useLanguage();

  return (
    <main className="min-h-screen bg-brand-navy">

      {/* Header bar */}
      <div className="bg-brand-navy border-b border-white/10 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
              <Star className="w-4 h-4 text-brand-navy fill-brand-navy" />
            </div>
            <div className="leading-none">
              <div className="text-white font-bold text-[14px]">نغم ستار</div>
              <div className="text-brand-gold text-[10px] font-medium">العقارية</div>
            </div>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-white/60 hover:text-brand-gold text-sm font-medium transition-colors duration-200"
          >
            {language === 'ar' ? (
              <>
                <ArrowRight className="w-4 h-4" />
                العودة للرئيسية
              </>
            ) : (
              <>
                Back to Home
                <ArrowRight className="w-4 h-4 rotate-180" />
              </>
            )}
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold mb-4 block">
              {t('محفظتنا', 'Our Portfolio')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{ lineHeight: '1.3' }}>
              {t('مشاريعنا ووجهاتنا', 'Our Projects &')}
              <span className="block text-brand-gold mt-1">
                {t('الاستثمارية', 'Investment Destinations')}
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              {t(
                'نعمل على تطوير مشاريع عقارية واستثمارية متميزة في مختلف مناطق المملكة العربية السعودية.',
                'We are developing distinguished real estate and investment projects across various regions of Saudi Arabia.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {projects.length === 0 || projects.every((p) => p.isPlaceholder) ? (
            /* All placeholders — coming soon state */
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, i) => {
                const categoryLabel = t(project.category.ar, project.category.en);
                const Icon = categoryIcons[categoryLabel] ?? Home;
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: i * 0.12 }}
                    className="group rounded-2xl overflow-hidden border border-white/10 bg-brand-navy-light shadow-sm hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="h-52 bg-[#080f18] flex items-center justify-center relative overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-[0.05]"
                        style={{
                          backgroundImage:
                            'linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)',
                          backgroundSize: '30px 30px',
                        }}
                      />
                      <div className="relative z-10 flex flex-col items-center gap-3">
                        <div className="w-16 h-16 rounded-2xl bg-brand-gold/15 flex items-center justify-center group-hover:bg-brand-gold/25 transition-colors duration-300">
                          <Icon className="w-8 h-8 text-brand-gold" />
                        </div>
                        <span className="text-brand-gold/60 text-xs font-bold tracking-widest uppercase">
                          {t('قريباً', 'Coming Soon')}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-brand-gold mb-2">
                        {categoryLabel}
                      </span>
                      <h3 className="text-white font-bold text-lg leading-snug">
                        {t(project.title.ar, project.title.en)}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => {
                const categoryLabel = t(project.category.ar, project.category.en);
                const Icon = categoryIcons[categoryLabel] ?? Home;
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: i * 0.1 }}
                    className="group rounded-2xl overflow-hidden border border-white/10 bg-brand-navy-light shadow-sm hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="h-52 bg-[#080f18] flex items-center justify-center relative overflow-hidden">
                      <div className="relative z-10 flex flex-col items-center gap-3">
                        <div className="w-16 h-16 rounded-2xl bg-brand-gold/15 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-brand-gold" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-brand-gold mb-2">
                        {categoryLabel}
                      </span>
                      <h3 className="text-white font-bold text-lg leading-snug">
                        {t(project.title.ar, project.title.en)}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-gray-500 text-sm mt-14"
          >
            {t(
              'يجري حالياً العمل على محفظة مشاريع متنوعة. تابعونا لمزيد من التفاصيل.',
              'A diverse project portfolio is currently in development. Stay tuned for more details.'
            )}
          </motion.p>
        </div>
      </section>
    </main>
  );
}
