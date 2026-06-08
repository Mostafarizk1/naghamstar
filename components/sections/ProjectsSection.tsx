'use client';

import { motion } from 'framer-motion';
import { MapPin, ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import SectionHeader from '@/components/ui/SectionHeader';
import { projects } from '@/data/siteContent';

export default function ProjectsSection() {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="section-py bg-white dark:bg-brand-navy">
      <div className="container-max">
        <SectionHeader
          label={t('محفظتنا', 'Portfolio')}
          title={t('مشاريعنا ووجهاتنا الاستثمارية', 'Our Projects & Investment Destinations')}
          subtitle={t(
            'نعمل على تطوير مشاريع عقارية واستثمارية متميزة في مختلف مناطق المملكة العربية السعودية.',
            'We are developing distinguished real estate and investment projects across various regions of Saudi Arabia.'
          )}
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <Link
                href={project.isPlaceholder ? '#projects' : `/projects/${project.slug}`}
                className="group block rounded-2xl overflow-hidden border border-brand-beige/60 dark:border-white/10 bg-brand-ivory dark:bg-brand-navy-light shadow-sm card-hover"
              >
                {/* Image or placeholder */}
                <div className="relative h-56 overflow-hidden bg-brand-navy">
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={t(project.title.ar, project.title.en)}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width:768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent" />
                    </>
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <span className="text-brand-gold/40 text-xs font-bold tracking-widest uppercase">
                        {t('قريباً', 'Coming Soon')}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/30 text-brand-gold text-[11px] font-bold tracking-wide backdrop-blur-sm">
                      {t(project.category.ar, project.category.en)}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-brand-navy dark:text-white font-bold text-lg mb-2 group-hover:text-brand-gold transition-colors duration-200">
                    {t(project.title.ar, project.title.en)}
                  </h3>
                  {project.location && (
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-white/45 text-sm mb-4">
                      <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>{t(project.location.ar, project.location.en)}</span>
                    </div>
                  )}
                  {!project.isPlaceholder && (
                    <div className="flex items-center gap-1.5 text-brand-gold text-xs font-semibold">
                      {t('استعرض المشروع', 'View Project')}
                      <ChevronLeft className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1 ${language === 'ar' ? '' : 'rotate-180'}`} />
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
