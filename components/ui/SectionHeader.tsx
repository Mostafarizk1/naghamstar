'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'start' | 'center';
  light?: boolean;
}

export default function SectionHeader({ label, title, subtitle, align = 'start', light = false }: SectionHeaderProps) {
  const isCenter = align === 'center';
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${isCenter ? 'text-center' : ''}`}
    >
      {label && (
        <span className={`inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 ${light ? 'text-brand-gold' : 'text-brand-gold'}`}>
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 ${light ? 'text-white' : 'text-brand-navy dark:text-brand-beige'}`}>
        {title}
      </h2>
      {label && (
        <div className={`h-0.5 w-14 bg-brand-gold ${isCenter ? 'mx-auto' : ''} mb-5`} />
      )}
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed max-w-2xl ${isCenter ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
