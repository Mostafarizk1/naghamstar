'use client';

import { Star, Phone, Mail, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { navLinks } from '@/data/siteContent';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-navy-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-full bg-brand-gold flex items-center justify-center">
                <Star className="w-4 h-4 text-brand-navy fill-brand-navy" />
              </div>
              <div className="leading-none">
                <div className="text-white font-bold text-[15px] leading-tight">نغم ستار</div>
                <div className="text-brand-gold text-[11px] font-medium tracking-wide">العقارية</div>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-sm">
              {t(
                'مؤسسة سعودية متخصصة في التطوير العقاري، وإدارة المجمعات التجارية، واستقطاب العلامات الكبرى، وصناعة وجهات استثمارية متميزة.',
                'A Saudi institution specializing in real estate development, commercial complex management, attracting major brands, and creating premium investment destinations.'
              )}
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter / X' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-white/50 hover:text-brand-gold hover:border-brand-gold/40 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">{t('روابط سريعة', 'Quick Links')}</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-brand-gold text-sm transition-colors duration-200"
                  >
                    {t(link.label.ar, link.label.en)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">{t('تواصل معنا', 'Contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                <span className="text-white/55 text-sm">{t('المملكة العربية السعودية', 'Saudi Arabia')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="tel:" className="text-white/55 text-sm hover:text-brand-gold transition-colors">
                  {t('+966 — — — — — —', '+966 — — — — — —')}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="mailto:info@naghamstar.com" className="text-white/55 text-sm hover:text-brand-gold transition-colors">
                  info@naghamstar.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            {t(
              `© ${new Date().getFullYear()} نغم ستار العقارية. جميع الحقوق محفوظة.`,
              `© ${new Date().getFullYear()} Nagham Star Real Estate. All rights reserved.`
            )}
          </p>
          <p className="text-white/25 text-xs">{t('المملكة العربية السعودية', 'Kingdom of Saudi Arabia')}</p>
        </div>
      </div>
    </footer>
  );
}
