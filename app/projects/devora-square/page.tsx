'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, ChevronLeft, Building2, CalendarClock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import PageHeader from '@/components/layout/PageHeader';

const VIDEO_URL = 'https://player.mediadelivery.net/play/581330/f0f9b8ae-b5f1-49e6-b542-2c0243c47562';
const MAPS_EMBED  = 'https://maps.google.com/maps?q=حي+الشرائع+مكة+المكرمة&z=15&output=embed&hl=ar';

const contacts = [
  {
    role:    { ar: 'الإدارة', en: 'Management' },
    number:  '+966 56 556 2255',
    href:    'tel:+966565562255',
    isWhatsApp: false,
    Icon: Phone,
  },
  {
    role:    { ar: 'التأجير', en: 'Leasing' },
    number:  '+966 56 690 0885',
    href:    'https://wa.me/966566900885',
    isWhatsApp: true,
    Icon: MessageCircle,
  },
];

const highlights = [
  { ar: 'وجهة تجارية متكاملة في قلب مكة المكرمة', en: 'Integrated commercial destination in the heart of Makkah' },
  { ar: 'موقع استراتيجي في حي الشرائع', en: 'Strategic location in Al Sharai District' },
  { ar: 'تصميم عصري يجمع بين الهوية والجودة', en: 'Modern design combining identity and quality' },
  { ar: 'مساحات تجارية متنوعة تناسب العلامات الكبرى', en: 'Diverse commercial spaces suited for major brands' },
  { ar: 'إدارة تشغيلية احترافية من نغم ستار', en: 'Professional operations management by Nagham Star' },
];

export default function DevoraSqaurePage() {
  const { t, language } = useLanguage();

  return (
    <main className="min-h-screen bg-brand-navy">

      {/* ── Top bar ── */}
      <PageHeader crumbs={[
        { label: { ar: 'الرئيسية', en: 'Home' }, href: '/' },
        { label: { ar: 'المشاريع', en: 'Projects' }, href: '/projects' },
        { label: { ar: 'ديورا سكوير', en: 'Devora Square' } },
      ]} />

      {/* ── Hero ── */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="مجمع ديورا سكوير"
          fill
          priority
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(14,27,43,1) 0%, rgba(14,27,43,0.6) 50%, rgba(14,27,43,0.15) 100%)' }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-bold tracking-wide">
                {t('وجهة تجارية', 'Commercial Destination')}
              </span>
              <span className="flex items-center gap-1.5 text-white/55 text-sm">
                <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                {t('حي الشرائع، مكة المكرمة', 'Al Sharai District, Makkah')}
              </span>
              <span className="flex items-center gap-1.5 text-brand-gold/70 text-sm">
                <CalendarClock className="w-3.5 h-3.5" />
                {t('قريباً', 'Coming Soon')}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white" style={{ lineHeight: '1.3' }}>
              {t('مجمع ديورا سكوير', 'Devora Square')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── Video + Description ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            {/* Description — 3 cols */}
            <motion.div
              initial={{ opacity: 0, x: language === 'ar' ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-3 order-2 lg:order-1"
            >
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold block mb-3">
                {t('نبذة عن المشروع', 'About the Project')}
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ lineHeight: '1.4' }}>
                {t('وجهة تجارية تُولد', 'A Commercial Destination')}
                <span className="block text-brand-gold">
                  {t('في قلب مكة المكرمة', 'Born in the Heart of Makkah')}
                </span>
              </h2>
              <div className="w-14 h-0.5 bg-brand-gold mb-7" />

              <p className="text-white/65 text-base leading-loose mb-8">
                {t(
                  'مجمع ديورا سكوير وجهة تجارية متكاملة تتموضع في حي الشرائع بمكة المكرمة — المنطقة الأسرع نمواً وأكثرها حيوية على امتداد طريق الملك عبدالعزيز. يجمع المجمع بين الهوية المعمارية العصرية وروح المكان السعودي الأصيل، ليكون بيئة تجارية تستقطب أرقى العلامات وأكثرها تأثيراً.',
                  'Devora Square is a fully integrated commercial destination located in Al Sharai District, Makkah — one of the fastest-growing and most vibrant areas along King Abdulaziz Road. The complex combines modern architectural identity with an authentic Saudi spirit, creating a commercial environment that attracts the finest and most influential brands.'
                )}
              </p>

              {/* Highlights */}
              <ul className="space-y-3.5">
                {highlights.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">{t(item.ar, item.en)}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Status pill */}
              <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/25">
                <Building2 className="w-4 h-4 text-brand-gold" />
                <span className="text-brand-gold text-sm font-semibold">
                  {t('قيد التطوير — تابعونا', 'Under Development — Stay Tuned')}
                </span>
              </div>
            </motion.div>

            {/* Video — 2 cols (portrait 9:16) */}
            <motion.div
              initial={{ opacity: 0, x: language === 'ar' ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="lg:col-span-2 order-1 lg:order-2"
            >
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold block mb-4 text-center">
                {t('شاهد المشروع', 'Watch the Project')}
              </span>

              {/* Phone frame */}
              <div className="mx-auto max-w-[300px] lg:max-w-full">
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-black"
                  style={{ aspectRatio: '9/16' }}>
                  <iframe
                    src={VIDEO_URL}
                    title="مجمع ديورا سكوير"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 'none' }}
                  />
                </div>
                <p className="text-center text-white/35 text-xs mt-3">
                  {t('المخطط الجوي للمشروع', 'Aerial project overview')}
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Google Maps ── */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-5 h-5 text-brand-gold" />
              <div>
                <h3 className="text-white font-bold text-xl">{t('موقع المشروع', 'Project Location')}</h3>
                <p className="text-white/45 text-sm mt-0.5">
                  {t('حي الشرائع، مكة المكرمة — المملكة العربية السعودية', 'Al Sharai District, Makkah Al-Mukarramah — Saudi Arabia')}
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl" style={{ height: '420px' }}>
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع مجمع ديورا سكوير"
              />
            </div>

            <a
              href="https://www.google.com/maps?q=حي+الشرائع+مكة+المكرمة"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-brand-gold/70 hover:text-brand-gold text-sm transition-colors duration-200"
            >
              <MapPin className="w-3.5 h-3.5" />
              {t('افتح في خرائط جوجل', 'Open in Google Maps')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Numbers ── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-brand-navy-light p-8 md:p-10"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

            <h3 className="text-white font-bold text-xl mb-2">{t('للاستفسار والتواصل', 'Contact & Inquiries')}</h3>
            <p className="text-white/45 text-sm mb-8">
              {t('فريقنا جاهز للإجابة على كل استفساراتك', 'Our team is ready to answer all your inquiries')}
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {contacts.map(({ role, number, href, isWhatsApp, Icon }) => (
                <a
                  key={number}
                  href={href}
                  target={isWhatsApp ? '_blank' : undefined}
                  rel={isWhatsApp ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 p-5 rounded-xl border border-white/10 hover:border-brand-gold/30 bg-brand-navy hover:bg-brand-navy/80 transition-all duration-200"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
                    isWhatsApp
                      ? 'bg-green-500/15 group-hover:bg-green-500/25'
                      : 'bg-brand-gold/10 group-hover:bg-brand-gold/20'
                  }`}>
                    <Icon className={`w-5 h-5 ${isWhatsApp ? 'text-green-400' : 'text-brand-gold'}`} />
                  </div>
                  <div>
                    <div className="text-white/45 text-xs font-semibold mb-1 uppercase tracking-wide">
                      {t(role.ar, role.en)}
                      {isWhatsApp && (
                        <span className="mr-2 px-1.5 py-0.5 rounded bg-green-500/15 text-green-400 text-[10px] normal-case">
                          WhatsApp
                        </span>
                      )}
                    </div>
                    <div className="text-white font-bold text-lg group-hover:text-brand-gold transition-colors duration-200" dir="ltr">
                      {number}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
