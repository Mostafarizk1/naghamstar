'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface Crumb {
  label: { ar: string; en: string };
  href?: string;
}

interface PageHeaderProps {
  crumbs: Crumb[];
}

export default function PageHeader({ crumbs }: PageHeaderProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-brand-navy/95 border-b border-white/10 sticky top-0 z-40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        <Link href="/" className="flex items-center shrink-0 group">
          <Image
            src="/logos/logo-horizontal.svg"
            alt="نغم ستار العقارية"
            width={150}
            height={44}
            priority
            className="h-9 w-auto transition-opacity duration-200 group-hover:opacity-80"
          />
        </Link>

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-white/40">
          {crumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronLeft className="w-3 h-3 rotate-180 opacity-40" />}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-brand-gold transition-colors">
                  {t(crumb.label.ar, crumb.label.en)}
                </Link>
              ) : (
                <span className="text-white/70">{t(crumb.label.ar, crumb.label.en)}</span>
              )}
            </span>
          ))}
        </nav>

      </div>
    </div>
  );
}
