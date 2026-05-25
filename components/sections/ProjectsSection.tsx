'use client';

import { motion } from 'framer-motion';
import { Building, TrendingUp, Layers, Home } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import SectionHeader from '@/components/ui/SectionHeader';
import { projects } from '@/data/siteContent';

const categoryIcons: Record<string, React.ElementType> = {
  'وجهات تجارية': Building,
  'Commercial Destinations': Building,
  'مشاريع استثمارية': TrendingUp,
  'Investment Projects': TrendingUp,
  'إدارة الأصول': Layers,
  'Asset Management': Layers,
};

export default function ProjectsSection() {
  const { t } = useLanguage();

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

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const categoryLabel = t(project.category.ar, project.category.en);
            const Icon = categoryIcons[categoryLabel] ?? Home;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden border border-brand-beige/60 dark:border-white/10 bg-brand-ivory dark:bg-brand-navy-light shadow-sm card-hover"
              >
                {/* Placeholder visual */}
                <div className="h-48 bg-brand-navy dark:bg-brand-navy flex items-center justify-center relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)',
                      backgroundSize: '30px 30px',
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-brand-gold/15 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-brand-gold" />
                    </div>
                    <span className="text-brand-gold/60 text-xs font-bold tracking-widest uppercase">
                      {t('قريباً', 'Coming Soon')}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-brand-gold mb-2">
                    {categoryLabel}
                  </span>
                  <h3 className="text-brand-navy dark:text-white font-bold text-base leading-snug">
                    {t(project.title.ar, project.title.en)}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Notice */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-gray-400 dark:text-gray-500 text-sm mt-10"
        >
          {t(
            'يجري حالياً العمل على محفظة مشاريع متنوعة. تابعونا لمزيد من التفاصيل.',
            'A diverse project portfolio is currently in development. Stay tuned for more details.'
          )}
        </motion.p>
      </div>
    </section>
  );
}
