'use client';

import { motion } from 'framer-motion';
import {
  MapPin, Phone, MessageCircle, Building2, Users, Zap,
  TrendingUp, Navigation, ChevronRight,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const VIDEO_URL  = 'https://player.mediadelivery.net/play/581330/f0f9b8ae-b5f1-49e6-b542-2c0243c47562';
const MAPS_EMBED = 'https://maps.google.com/maps?q=ديورا+سكوير+حي+الشرائع+مكة+المكرمة&z=16&output=embed&hl=ar';
const MAPS_LINK  = 'https://maps.app.goo.gl/SNS1C4mJ1EREVuoV7';

const stats = [
  { value: '18,000', unit: 'م²', label: { ar: 'المساحة الإجمالية', en: 'Total Area' } },
  { value: '4',      unit: '',   label: { ar: 'واجهات رئيسية',    en: 'Main Facades' } },
  { value: '64',     unit: 'م',  label: { ar: 'عرض الشارع الرئيسي', en: 'Main Street Width' } },
  { value: '21',     unit: '',   label: { ar: 'محلاً تجارياً',    en: 'Commercial Units' } },
  { value: '6',      unit: '',   label: { ar: 'أكشاك درايف ثرو',  en: 'Drive-Thru Kiosks' } },
  { value: 'B+P',    unit: '',   label: { ar: 'بدروم + مواقف علوية', en: 'Basement + Roof Parking' } },
];

const anchorFeatures = [
  { Icon: Users,      label: { ar: 'آلاف الزوار يومياً',        en: 'Thousands of Daily Visitors' } },
  { Icon: Zap,        label: { ar: 'ترافيك مضمون مسبقاً',       en: 'Pre-Guaranteed Traffic' } },
  { Icon: Building2,  label: { ar: 'أكبر سلسلة سوبر ماركت',     en: 'Largest Supermarket Chain' } },
  { Icon: TrendingUp, label: { ar: 'زبون جاهز للشراء',          en: 'Ready-to-Buy Customer' } },
];

const units = [
  {
    type:       { ar: 'محل تجاري',       en: 'Commercial Shop' },
    area:       '104 + 79 م²',
    areaNote:   { ar: 'أرضي + ميزانين',   en: 'Ground + Mezzanine' },
    location:   { ar: 'داخل المول',       en: 'Inside Mall' },
  },
  {
    type:       { ar: 'كشك درايف ثرو',   en: 'Drive-Thru Kiosk' },
    area:       '15 م²',
    areaNote:   { ar: 'على الشارع الرئيسي', en: 'Main Street Frontage' },
    location:   { ar: 'واجهة الشارع',     en: 'Street Frontage' },
  },
  {
    type:       { ar: 'المعرض الجنوبي',  en: 'South Showroom' },
    area:       '3,956 م²',
    areaNote:   { ar: 'واجهة رئيسية كاملة', en: 'Full Main Frontage' },
    location:   { ar: 'واجهة شارع رئيسي', en: 'Main Street Frontage' },
  },
  {
    type:       { ar: 'المبنى الإداري',  en: 'Admin Building' },
    area:       '547 م²',
    areaNote:   { ar: 'داخل المول',       en: 'Inside Mall' },
    location:   { ar: 'داخل المول',       en: 'Inside Mall' },
  },
];

const contacts = [
  { role: { ar: 'الإدارة',  en: 'Management' }, number: '+966 56 556 2255', href: 'tel:+966565562255',           isWhatsApp: false },
  { role: { ar: 'التأجير', en: 'Leasing' },     number: '+966 56 690 0885', href: 'https://wa.me/966566900885', isWhatsApp: true  },
];

const proximity = [
  { ar: 'دقيقة واحدة من طريق السيل الطائف',             en: '1 minute from Taif–Al Sail Road' },
  { ar: 'دقيقتان من مدينة الملك عبدالعزيز الرياضية',    en: '2 minutes from King Abdulaziz Sports City' },
  { ar: '15 دقيقة من الحرم المكي الشريف',               en: '15 minutes from Al-Masjid Al-Haram' },
  { ar: 'كثافة سكانية عالية ونمو عمراني متسارع',         en: 'High density area with rapid urban growth' },
];

export default function DevoraSqaurePage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-brand-navy">
      <Header />

      {/* ── Hero ── */}
      <section className="relative h-[72vh] min-h-[520px] flex items-end overflow-hidden">
        <Image src="/images/hero-desktop.webp" alt="مجمع ديورا سكوير" fill priority quality={90}
          className="object-cover object-center hidden sm:block" sizes="100vw" />
        <Image src="/images/hero-mobile.webp"  alt="مجمع ديورا سكوير" fill priority quality={90}
          className="object-cover object-center block sm:hidden" sizes="100vw" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(1,40,71,1) 0%, rgba(1,40,71,0.6) 55%, rgba(1,40,71,0.1) 100%)' }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>

            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-white/40 text-xs mb-6">
              <Link href="/" className="hover:text-brand-gold transition-colors">{t('الرئيسية', 'Home')}</Link>
              <ChevronRight className="w-3 h-3 rtl:rotate-180" />
              <Link href="/projects" className="hover:text-brand-gold transition-colors">{t('المشاريع', 'Projects')}</Link>
              <ChevronRight className="w-3 h-3 rtl:rotate-180" />
              <span className="text-white/60">ديورا سكوير</span>
            </nav>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="px-3 py-1 rounded-full bg-brand-gold text-brand-navy text-xs font-bold">
                {t('وجهة تجارية متكاملة', 'Integrated Commercial Destination')}
              </span>
              <span className="flex items-center gap-1.5 text-white/55 text-sm">
                <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                {t('حي الشرائع، مكة المكرمة', 'Al Sharai District, Makkah')}
              </span>
            </div>

            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl font-black text-white mb-3" style={{ lineHeight: '1.25' }}>
              {t('مجمع ديورا سكوير', 'Devora Square')}
            </h1>
            <p className="text-white/55 text-lg mb-8">
              {t('مجمع تجاري متكامل في قلب الشرائع — مكة المكرمة', 'Integrated commercial complex in the heart of Al Sharai — Makkah')}
            </p>

            {/* Urgency */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-brand-gold/15 border border-brand-gold/30">
              <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse shrink-0" />
              <span className="text-brand-gold font-bold text-sm">
                {t('آخر الوحدات التجارية المتاحة للإيجار', 'Last Available Commercial Units for Lease')}
              </span>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-12 bg-[#010f1c] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="text-center p-5 rounded-2xl bg-brand-navy border border-white/8"
              >
                <div className="text-brand-gold font-black text-2xl md:text-3xl leading-none" dir="ltr">
                  {s.value}<span className="text-sm">{s.unit}</span>
                </div>
                <div className="text-white/45 text-xs mt-2 leading-snug">{t(s.label.ar, s.label.en)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Anchor Tenant ── */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-brand-gold/20 bg-gradient-to-br from-brand-navy-light to-brand-navy"
          >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1.5 h-8 bg-brand-gold rounded-full" />
                    <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">
                      {t('المستأجر الرئيسي', 'Anchor Tenant')}
                    </span>
                  </div>
                  <h2 className="text-white text-3xl md:text-4xl font-black mb-5" style={{ lineHeight: '1.4' }}>
                    {t('بنده جارك', 'Panda is Your Neighbor')}
                  </h2>
                  <p className="text-white/60 text-base leading-relaxed">
                    {t(
                      'المعرض الشمالي محجوز لـ بنده — أكبر سلسلة سوبر ماركت في السعودية. يعني آلاف الزوار يومياً، ترافيك مضمون، وزبون جاهز للشراء قبل ما تفتح بابك.',
                      'The north showroom is reserved for Panda — Saudi Arabia\'s largest supermarket chain. Thousands of daily visitors, guaranteed traffic, and a ready-to-buy customer before you even open your doors.'
                    )}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {anchorFeatures.map(({ Icon, label }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-brand-navy/60 border border-white/5">
                      <div className="w-9 h-9 rounded-lg bg-brand-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-brand-gold" />
                      </div>
                      <span className="text-white/65 text-sm leading-snug">{t(label.ar, label.en)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Video + Description ── */}
      <section className="py-20 bg-[#010f1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            {/* Description */}
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
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4" style={{ lineHeight: '1.5' }}>
                {t('وجهة تجارية تُولد في قلب مكة المكرمة', 'A Commercial Destination Born in the Heart of Makkah')}
              </h2>
              <div className="w-14 h-0.5 bg-brand-gold mb-7" />
              <p className="text-white/60 text-base leading-loose mb-8">
                {t(
                  'مجمع ديورا سكوير وجهة تجارية متكاملة تتموضع في حي الشرائع بمكة المكرمة — المنطقة الأسرع نمواً على امتداد طريق الملك عبدالعزيز. يجمع المجمع بين الهوية المعمارية العصرية وروح المكان السعودي الأصيل، ليكون بيئة تجارية تستقطب أرقى العلامات.',
                  'Devora Square is a fully integrated commercial destination in Al Sharai District — one of the fastest-growing areas along King Abdulaziz Road, combining modern architectural identity with authentic Saudi spirit to attract the finest brands.'
                )}
              </p>

              {/* Proximity */}
              <div className="space-y-3">
                {proximity.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                    <span className="text-white/60 text-sm">{t(item.ar, item.en)}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Video 9:16 */}
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
              <div className="mx-auto max-w-[280px] lg:max-w-full">
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-black" style={{ aspectRatio: '9/16' }}>
                  <iframe
                    src={VIDEO_URL}
                    title="مجمع ديورا سكوير"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 'none' }}
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Available Units ── */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-10">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold block mb-3">
                {t('الوحدات المتاحة', 'Available Units')}
              </span>
              <h2 className="text-white text-2xl md:text-3xl font-black">
                {t('اختر وحدتك التجارية', 'Choose Your Commercial Unit')}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {units.map((unit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative rounded-2xl border border-white/10 hover:border-brand-gold/35 bg-[#010f1c] p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent rounded-t-2xl" />
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-brand-gold/60">
                      {t('متاح للإيجار', 'Available')}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-3 group-hover:text-brand-gold transition-colors duration-200 leading-snug">
                    {t(unit.type.ar, unit.type.en)}
                  </h3>
                  <div className="text-brand-gold font-black text-xl mb-0.5" dir="ltr">{unit.area}</div>
                  <div className="text-white/35 text-xs">{t(unit.areaNote.ar, unit.areaNote.en)}</div>
                  <div className="mt-5 pt-4 border-t border-white/8 flex items-center gap-1.5 text-white/35 text-xs">
                    <MapPin className="w-3 h-3 shrink-0" />
                    {t(unit.location.ar, unit.location.en)}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Urgency CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 p-6 rounded-2xl bg-brand-gold/8 border border-brand-gold/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div>
                <p className="text-brand-gold font-bold text-base mb-1">
                  {t('الحجوزات تسير — الفرصة محدودة', 'Reservations Are Moving — Limited Opportunity')}
                </p>
                <p className="text-white/45 text-sm">
                  {t('مع بنده كـ anchor tenant، الطلب على الوحدات المتبقية مرتفع', 'With Panda as anchor tenant, demand for remaining units is high')}
                </p>
              </div>
              <a
                href="https://wa.me/966566900885"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-6 py-3 bg-brand-gold text-brand-navy font-bold text-sm rounded-xl hover:bg-brand-gold-light transition-colors duration-200 whitespace-nowrap"
              >
                {t('احجز وحدتك الآن', 'Reserve Your Unit Now')}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Map + Location ── */}
      <section className="py-20 bg-[#010f1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/15 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">{t('موقع المشروع', 'Project Location')}</h3>
                <p className="text-white/40 text-sm mt-0.5">
                  {t('حي الشرائع، مكة المكرمة — المملكة العربية السعودية', 'Al Sharai District, Makkah — Saudi Arabia')}
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl" style={{ height: '400px' }}>
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

            <div className="mt-5">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-brand-gold text-brand-navy font-bold text-sm rounded-xl hover:bg-brand-gold-light transition-colors duration-200"
              >
                <Navigation className="w-4 h-4" />
                {t('افتح الموقع على الخريطة', 'Open Location on Map')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-white/10 bg-[#010f1c] p-8 md:p-10"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent rounded-t-2xl" />

            <div className="mb-8">
              <h3 className="text-white font-bold text-xl mb-1">{t('للاستفسار والتواصل', 'Contact & Inquiries')}</h3>
              <p className="text-white/40 text-sm">
                {t('فريقنا جاهز للإجابة على كل استفساراتك وجدولة جولة ميدانية', 'Our team is ready to answer inquiries and schedule a site tour')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {contacts.map(({ role, number, href, isWhatsApp }) => (
                <a
                  key={number}
                  href={href}
                  target={isWhatsApp ? '_blank' : undefined}
                  rel={isWhatsApp ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 p-5 rounded-xl border border-white/10 hover:border-brand-gold/30 bg-brand-navy hover:bg-brand-navy/80 transition-all duration-200"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
                    isWhatsApp ? 'bg-green-500/15 group-hover:bg-green-500/25' : 'bg-brand-gold/10 group-hover:bg-brand-gold/20'
                  }`}>
                    {isWhatsApp
                      ? <MessageCircle className="w-5 h-5 text-green-400" />
                      : <Phone className="w-5 h-5 text-brand-gold" />
                    }
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-semibold mb-1 uppercase tracking-wide flex items-center gap-2">
                      {t(role.ar, role.en)}
                      {isWhatsApp && (
                        <span className="px-1.5 py-0.5 rounded bg-green-500/15 text-green-400 text-[10px] normal-case">
                          WhatsApp
                        </span>
                      )}
                    </div>
                    <div className="text-white font-bold text-xl group-hover:text-brand-gold transition-colors duration-200" dir="ltr">
                      {number}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/8 text-center">
              <p className="text-brand-gold/70 text-sm font-bold">نغم ستار العقارية</p>
              <p className="text-white/30 text-xs mt-1">{t('نصنع الفرص ونبني الشراكات', 'We Create Opportunities and Build Partnerships')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
