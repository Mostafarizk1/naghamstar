'use client';

import { motion } from 'framer-motion';
import { Eye, Target, Award, ShieldCheck, Gem, Lightbulb, Rocket } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import SectionHeader from '@/components/ui/SectionHeader';
import { values } from '@/data/siteContent';

const iconMap: Record<string, React.ElementType> = {
  Award, ShieldCheck, Gem, Lightbulb, Rocket,
};

export default function VisionMissionSection() {
  const { t } = useLanguage();

  return (
    <section id="vision" className="section-py bg-brand-ivory dark:bg-[#111f30]">
      <div className="container-max">
        <SectionHeader
          label={t('رؤيتنا وقيمنا', 'Vision & Values')}
          title={t('ما يقودنا إلى الأمام', 'What Drives Us Forward')}
          align="center"
        />

        {/* Vision + Mission */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl bg-brand-navy dark:bg-brand-navy-light border border-brand-navy-light p-8 overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-brand-gold/0 via-brand-gold to-brand-gold/0" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/20 flex items-center justify-center">
                <Eye className="w-5 h-5 text-brand-gold" />
              </div>
              <h3 className="text-white font-bold text-lg">{t('رؤيتنا', 'Our Vision')}</h3>
            </div>
            <p className="text-white/70 text-base leading-relaxed">
              {t(
                'أن نكون من الجهات الرائدة في صناعة الوجهات التجارية والاستثمارية الحديثة في المملكة العربية السعودية.',
                'To become one of the leading institutions in creating modern commercial and investment destinations across the Kingdom of Saudi Arabia.'
              )}
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl bg-white dark:bg-brand-navy border border-brand-beige/80 dark:border-white/10 p-8 overflow-hidden shadow-sm"
          >
            <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-brand-gold/0 via-brand-gold/50 to-brand-gold/0" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-brand-navy/8 dark:bg-brand-gold/15 flex items-center justify-center">
                <Target className="w-5 h-5 text-brand-navy dark:text-brand-gold" />
              </div>
              <h3 className="text-brand-navy dark:text-white font-bold text-lg">{t('مهمتنا', 'Our Mission')}</h3>
            </div>
            <p className="text-gray-500 dark:text-white/70 text-base leading-relaxed">
              {t(
                'تقديم حلول عقارية وتشغيلية مبتكرة تبني الثقة، وترفع قيمة المشاريع، وتصنع شراكات طويلة المدى تُثمر على مدى السنين.',
                'Delivering innovative real estate and operational solutions that build trust, elevate project value, and forge long-term partnerships that yield results for years to come.'
              )}
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold">
            {t('قيمنا', 'Our Values')}
          </span>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {values.map((v, i) => {
            const Icon = iconMap[v.icon] ?? Award;
            return (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white dark:bg-brand-navy border border-brand-beige/60 dark:border-white/10 shadow-sm card-hover text-center"
              >
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand-gold" />
                </div>
                <span className="text-brand-navy dark:text-white font-semibold text-sm">
                  {t(v.title.ar, v.title.en)}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
