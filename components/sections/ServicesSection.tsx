'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Building2, Star, HardHat, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import SectionHeader from '@/components/ui/SectionHeader';
import { services } from '@/data/siteContent';
import type { ServiceItem } from '@/types';

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Building2,
  Star,
  HardHat,
  BarChart3,
};

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const { t } = useLanguage();
  const Icon = iconMap[service.icon] ?? TrendingUp;

  const variantStyles: Record<string, string> = {
    navy: 'bg-brand-navy text-white border-brand-navy-light',
    gold: 'bg-brand-gold text-brand-navy border-brand-gold-dark',
    ivory: 'bg-white dark:bg-brand-navy-light text-brand-navy dark:text-white border-brand-beige/60 dark:border-white/10',
    'navy-light': 'bg-brand-navy-light text-white border-white/10',
    beige: 'bg-brand-beige dark:bg-brand-navy-light text-brand-navy dark:text-white border-brand-beige-dark dark:border-white/10',
  };

  const iconStyles: Record<string, string> = {
    navy: 'bg-brand-gold/20 text-brand-gold',
    gold: 'bg-brand-navy/15 text-brand-navy',
    ivory: 'bg-brand-navy/8 text-brand-navy dark:bg-brand-gold/15 dark:text-brand-gold',
    'navy-light': 'bg-brand-gold/20 text-brand-gold',
    beige: 'bg-brand-navy/10 text-brand-navy dark:bg-brand-gold/20 dark:text-brand-gold',
  };

  const textStyles: Record<string, string> = {
    navy: 'text-white/65',
    gold: 'text-brand-navy/70',
    ivory: 'text-gray-500 dark:text-gray-300',
    'navy-light': 'text-white/60',
    beige: 'text-gray-500 dark:text-gray-300',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className={`card-hover rounded-2xl border p-7 flex flex-col gap-5 ${variantStyles[service.variant]}`}
    >
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${iconStyles[service.variant]}`}>
        <Icon className="w-5 h-5" />
      </div>

      <div>
        <h3 className="font-bold text-lg leading-snug mb-2">
          {t(service.title.ar, service.title.en)}
        </h3>
        <p className={`text-sm leading-relaxed ${textStyles[service.variant]}`}>
          {t(service.description.ar, service.description.en)}
        </p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-py bg-white dark:bg-brand-navy">
      <div className="container-max">
        <SectionHeader
          label={t('خدماتنا', 'Our Services')}
          title={t('حلول عقارية شاملة ومتكاملة', 'Comprehensive Real Estate Solutions')}
          subtitle={t(
            'نقدم منظومة متكاملة من الخدمات العقارية والتشغيلية والاستثمارية، مصممة لبناء مشاريع ناجحة ومستدامة.',
            'We offer a complete suite of real estate, operational, and investment services designed to build successful and sustainable projects.'
          )}
          align="center"
        />

        {/* 3-2 asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 3).map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 max-w-2xl mx-auto lg:max-w-none lg:grid-cols-2 lg:mx-0 lg:w-2/3 lg:ms-auto lg:me-auto">
          {services.slice(3).map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
