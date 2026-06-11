'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { navLinks } from '@/data/siteContent';

export default function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome
          ? 'bg-brand-navy/96 backdrop-blur-md shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a href="/" className="flex items-center shrink-0 group">
            <Image
              src="/logos/logo-horizontal.svg"
              alt="نغم ستار العقارية"
              width={160}
              height={46}
              priority
              className="h-10 w-auto md:h-12 transition-opacity duration-200 group-hover:opacity-80"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="relative text-white/75 hover:text-brand-gold text-sm font-cairo font-medium transition-colors duration-200 group"
              >
                {t(link.label.ar, link.label.en)}
                <span className="absolute -bottom-0.5 inset-x-0 h-px bg-brand-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href="/#contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-brand-gold text-brand-navy text-sm font-cairo font-bold rounded-xl hover:bg-brand-gold-light active:scale-95 transition-all duration-200 shadow-md"
            >
              {t('تواصل معنا', 'Contact Us')}
            </a>
            <button
              className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-brand-navy/98 backdrop-blur-md border-t border-white/10"
          >
            <nav className="flex flex-col px-5 py-5 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-white/75 hover:text-brand-gold font-cairo font-medium text-base border-b border-white/8 last:border-none transition-colors duration-200"
                >
                  {t(link.label.ar, link.label.en)}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 flex justify-center px-5 py-3 bg-brand-gold text-brand-navy font-cairo font-bold rounded-xl text-sm"
              >
                {t('تواصل معنا', 'Contact Us')}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
