'use client';

import { motion } from 'framer-motion';
import { MapPin, ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { projects } from '@/data/siteContent';
import PageHeader from '@/components/layout/PageHeader';

export default function ProjectsPage() {
  const { t, language } = useLanguage();

  return (
    <main className="min-h-screen bg-brand-navy">

      <PageHeader crumbs={[
        { label: { ar: 'الرئيسية', en: 'Home' }, href: '/' },
        { label: { ar: 'المشاريع', en: 'Projects' } },
      ]} />

      {/* Page hero */}
      <section className="relative pt-20 pb-14 text-center overflow-hidden">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold tracking-[0.22em] uppercase text-brand-gold block mb-4">
            {t('محفظتنا', 'Our Portfolio')}
          </span>
          <h1 className="text-4xl md:text-5xl text-white mb-4">
            {t('مشاريعنا', 'Our Projects')}
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto" />
        </motion.div>
      </section>

      {/* Projects grid */}
      <section className="py-16 pb-28">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/30 text-brand-gold text-[11px] font-bold tracking-wide backdrop-blur-sm">
                        {t(project.category.ar, project.category.en)}
                      </span>
                    </div>
                  </div>
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
                      <ChevronLeft className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1 ${language === 'ar' ? '' : 'rotate-180'}`} />
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
