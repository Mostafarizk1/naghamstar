'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { navLinks } from '@/data/siteContent';

/* ── Custom brand SVG icons ── */
function SnapchatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.065 2c.396 0 1.758.04 2.993.747 1.033.585 1.56 1.423 1.75 1.877.143.341.285.945.316 1.664l.003.118c0 .043.002.087.002.131 0 .27-.018.543-.048.815l.003-.025c.16.08.35.126.55.126.28 0 .526-.088.727-.238l-.004.003c.14-.104.312-.166.498-.166.196 0 .376.063.522.17l-.003-.002c.18.127.297.334.297.566 0 .037-.003.073-.009.108l.001-.004c-.063.44-.456.844-1.15 1.194-.093.047-.19.09-.288.13-.24.096-.396.196-.484.28-.054.053-.087.127-.087.208 0 .04.008.079.022.115l-.001-.002c.108.3.34.822.77 1.36.465.58 1.22 1.224 2.35 1.556.054.015.09.065.085.12-.003.05-.04.09-.087.103l-.001.001c-.175.055-.358.103-.546.14-.307.059-.508.147-.64.255-.09.074-.143.185-.143.308 0 .03.003.059.01.087l-.001-.003c.06.23.27.394.518.394.082 0 .16-.019.23-.053l-.003.002c.11-.052.237-.082.37-.082.22 0 .418.084.567.22l-.001-.001c.115.103.187.252.187.418 0 .084-.019.164-.053.235l.001-.003c-.24.534-.963.872-2.222 1.031-.047.006-.088.032-.113.07l-.001.001c-.108.165-.236.857-.533 1.025-.12.068-.26.108-.41.108-.106 0-.208-.02-.302-.057l.005.002c-.239-.092-.456-.138-.68-.138-.186 0-.362.034-.524.095l.009-.003c-.347.13-.756.362-1.33.541-.55.172-1.184.271-1.84.271-.64 0-1.258-.094-1.84-.268l.044.013c-.582-.183-.993-.416-1.34-.546-.159-.06-.342-.095-.534-.095-.226 0-.443.047-.642.133l.011-.004c-.088.034-.19.053-.296.053-.148 0-.288-.04-.408-.11l.004.002c-.297-.168-.425-.86-.534-1.026-.025-.038-.066-.064-.113-.07-1.258-.16-1.98-.497-2.22-1.031-.035-.07-.054-.15-.054-.234 0-.165.071-.313.185-.416l.001-.001c.148-.136.346-.22.564-.22.135 0 .261.031.374.086l-.005-.002c.068.032.147.051.23.051.248 0 .457-.162.517-.39l.001-.004c.006-.026.01-.057.01-.088 0-.122-.054-.232-.14-.305l-.001-.001c-.13-.108-.332-.196-.638-.255-.189-.036-.373-.084-.551-.14l-.001-.001c-.046-.013-.083-.053-.086-.102-.005-.056.031-.106.085-.12 1.13-.332 1.885-.976 2.35-1.556.43-.538.662-1.06.77-1.36.014-.034.022-.073.022-.114 0-.08-.032-.154-.086-.208l.001.001c-.088-.084-.244-.184-.484-.28-.098-.04-.195-.083-.285-.129-.694-.35-1.087-.754-1.15-1.195-.006-.031-.009-.067-.009-.103 0-.234.117-.441.296-.566l.002-.001c.142-.105.322-.168.517-.168.187 0 .36.063.5.167l-.003-.002c.2.149.445.237.711.237.2 0 .39-.046.558-.128l-.008.004c-.03-.248-.048-.535-.048-.826 0-.044.001-.088.002-.132l-.001.007c.031-.718.173-1.323.322-1.672l-.009.021c.19-.454.717-1.292 1.75-1.877C10.307 2.04 11.67 2 12.065 2z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: 'Snapchat',
    href: 'https://snapchat.com/t/NZ38hxie',
    Icon: SnapchatIcon,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@naghamstarr',
    Icon: TikTokIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/naghamstarr',
    Icon: InstagramIcon,
  },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-navy-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/logos/logo-horizontal.svg"
                alt="نغم ستار العقارية"
                width={180}
                height={52}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-sm">
              {t(
                'مؤسسة سعودية متخصصة في التطوير العقاري، وإدارة المجمعات التجارية، واستقطاب العلامات الكبرى، وصناعة وجهات استثمارية متميزة.',
                'A Saudi institution specializing in real estate development, commercial complex management, attracting major brands, and creating premium investment destinations.'
              )}
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                <span className="text-white/55 text-sm leading-relaxed">
                  {t(
                    'شارع المهندس عمر قاضي، حي الكوثر — شارع القادسية، مكة المكرمة',
                    'Omar Qadi St., Al Kawthar District — Al Qadisiyah St., Makkah Al-Mukarramah'
                  )}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href="https://wa.me/966565562255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 text-sm hover:text-brand-gold transition-colors"
                  dir="ltr"
                >
                  +966 56 556 2255
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href="mailto:naghamstarr@outlook.sa"
                  className="text-white/55 text-sm hover:text-brand-gold transition-colors"
                >
                  naghamstarr@outlook.sa
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
          <p className="text-white/25 text-xs">
            {t('سجل تجاري:', 'CR:')} <span dir="ltr">7052870172</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
