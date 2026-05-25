'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/20 text-white/80 hover:text-brand-gold hover:border-brand-gold/40 text-xs font-semibold tracking-wide transition-all duration-200"
      aria-label="Switch language"
    >
      <span className={language === 'ar' ? 'text-brand-gold' : 'text-white/50'}>عربي</span>
      <span className="text-white/30">/</span>
      <span className={language === 'en' ? 'text-brand-gold' : 'text-white/50'}>EN</span>
    </button>
  );
}
