'use client';

import { motion } from 'framer-motion';
import { MapPin, ArrowLeft, Star, ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { projects } from '@/data/siteContent';

export default function ProjectsPage() {
  const { t, language } = useLanguage();

  return (
    <main className="min-h-screen bg-brand-navy">

      {/* Top bar */}
      <div className="bg-brand-navy/95 border-b border-white/10 sticky top-0 z-40 backdrop-blur-md">
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
            className="flex items-center gap-1.5 text-white/55 hover:text-brand-gold text-sm font-medium transition-colors duration-200"
          >
            {language === 'ar' ? (
              <><ArrowLeft className="w-4 h-4" /> الرئيسية</>
            ) : (
              <>Home <ChevronLeft className="w-4 h-4" /></>
            )}
          </Link>
        </div>
      </div>

      {/* Page hero */}
      <section className="pt-20 pb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold tracking-[0.22em] uppercase text-brand-gold block mb-4">
            {t('محفظتنا', 'Our Portfolio')}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t('مشاريعنا', 'Our Projects')}
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto" />
        </motion.div>
      </section>

      {/* Projects grid */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-white/10 bg-brand-navy-light hover:border-brand-gold/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-gold/5"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={t(project.title.ar, project.title.en)}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width:768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="h-full bg-[#080f18] flex items-center justify-center">
                        <span className="text-brand-gold/30 text-xs tracking-widest uppercase">
                          {t('قريباً', 'Coming Soon')}
                        </span>
                      </div>
                    )}
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />
                    {/* Category badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/30 text-brand-gold text-[11px] font-bold tracking-wide backdrop-blur-sm">
                        {t(project.category.ar, project.category.en)}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-brand-gold transition-colors duration-200">
                      {t(project.title.ar, project.title.en)}
                    </h3>
                    {project.location && (
                      <div className="flex items-center gap-1.5 text-white/45 text-sm">
                        <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        <span>{t(project.location.ar, project.location.en)}</span>
                      </div>
                    )}
                    <div className="mt-4 flex items-center gap-1.5 text-brand-gold text-xs font-semibold">
                      {t('استعرض المشروع', 'View Project')}
                      <ChevronLeft className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-[-4px] ${language === 'ar' ? '' : 'rotate-180'}`} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
