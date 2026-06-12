'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import SectionHeader from '@/components/ui/SectionHeader';

const contactItems = [
  {
    icon: MessageCircle,
    labelAr: 'واتساب / هاتف',
    labelEn: 'WhatsApp / Phone',
    valueAr: '+966 56 556 2255',
    valueEn: '+966 56 556 2255',
    href: 'https://wa.me/966565562255',
    isExternal: true,
  },
  {
    icon: Mail,
    labelAr: 'البريد الإلكتروني',
    labelEn: 'Email',
    valueAr: 'naghamstarr@outlook.sa',
    valueEn: 'naghamstarr@outlook.sa',
    href: 'mailto:naghamstarr@outlook.sa',
    isExternal: false,
  },
  {
    icon: MapPin,
    labelAr: 'الموقع',
    labelEn: 'Location',
    valueAr: 'شارع المهندس عمر قاضي، حي الكوثر، مكة المكرمة',
    valueEn: 'Omar Qadi St., Al Kawthar District, Makkah Al-Mukarramah',
    href: '#',
    isExternal: false,
  },
];

const WHATSAPP_NUMBER = '966565562255';

export default function ContactSection() {
  const { t } = useLanguage();
  const [name, setName]       = useState('');
  const [phone, setPhone]     = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `مرحباً نغم ستار 👋`,
      ``,
      `الاسم: ${name}`,
      phone  ? `الجوال: ${phone}`  : '',
      email  ? `البريد: ${email}`  : '',
      ``,
      `الرسالة:`,
      message,
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="section-py bg-brand-ivory dark:bg-[#111f30]">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <SectionHeader
              label={t('تواصل معنا', 'Get In Touch')}
              title={t('نسعد بالتواصل معك', "We'd Love to Hear From You")}
              subtitle={t(
                'سواء كنت تبحث عن شراكة استثمارية، تريد إدارة مشروعك، أو تحتاج إلى استشارة عقارية — نحن هنا.',
                "Whether you're looking for an investment partnership, project management, or real estate consulting — we are here for you."
              )}
            />

            <div className="space-y-5">
              {contactItems.map(({ icon: Icon, labelAr, labelEn, valueAr, valueEn, href, isExternal }) => (
                <motion.a
                  key={labelAr}
                  href={href}
                  {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-navy/8 dark:bg-brand-gold/15 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/20 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-brand-navy dark:text-brand-gold group-hover:text-brand-gold dark:group-hover:text-brand-gold-light transition-colors duration-200" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-0.5">{t(labelAr, labelEn)}</div>
                    <div className="text-brand-navy dark:text-white font-medium text-sm group-hover:text-brand-gold dark:group-hover:text-brand-gold transition-colors duration-200">
                      {t(valueAr, valueEn)}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white dark:bg-brand-navy border border-brand-beige/60 dark:border-white/10 p-8 shadow-sm"
          >
            <h3 className="text-brand-navy dark:text-white font-bold text-xl mb-6">
              {t('أرسل رسالتك', 'Send Your Message')}
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">
                    {t('الاسم الكامل', 'Full Name')}
                  </label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('اسمك الكريم', 'Your full name')}
                    className="w-full px-4 py-3 rounded-xl border border-brand-beige-dark dark:border-white/15 bg-brand-ivory dark:bg-[#0e1b2b] text-brand-navy dark:text-white placeholder:text-gray-400 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">
                    {t('رقم الجوال', 'Phone Number')}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+966"
                    className="w-full px-4 py-3 rounded-xl border border-brand-beige-dark dark:border-white/15 bg-brand-ivory dark:bg-[#0e1b2b] text-brand-navy dark:text-white placeholder:text-gray-400 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all duration-200"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5">
                  {t('البريد الإلكتروني', 'Email Address')}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('بريدك الإلكتروني', 'your@email.com')}
                  className="w-full px-4 py-3 rounded-xl border border-brand-beige-dark dark:border-white/15 bg-brand-ivory dark:bg-[#0e1b2b] text-brand-navy dark:text-white placeholder:text-gray-400 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all duration-200"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5">
                  {t('الرسالة', 'Message')}
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('كيف يمكننا مساعدتك؟', 'How can we help you?')}
                  className="w-full px-4 py-3 rounded-xl border border-brand-beige-dark dark:border-white/15 bg-brand-ivory dark:bg-brand-navy text-brand-navy dark:text-white placeholder:text-gray-400 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary justify-center py-3.5"
              >
                <Send className="w-4 h-4" />
                {t('إرسال عبر واتساب', 'Send via WhatsApp')}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
