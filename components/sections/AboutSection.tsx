'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import SectionHeader from '@/components/ui/SectionHeader';

const stats = [
  { labelAr: 'خبرة متخصصة', labelEn: 'Specialized Expertise', valueAr: 'عقارية', valueEn: 'Real Estate' },
  { labelAr: 'تشغيل احترافي', labelEn: 'Professional Operations', valueAr: 'ومُدار', valueEn: '& Managed' },
  { labelAr: 'شراكات طويلة المدى', labelEn: 'Long-term Partnerships', valueAr: 'دائمة', valueEn: 'Lasting' },
];

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-py bg-brand-ivory dark:bg-[#111f30]">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main card */}
            <div className="relative rounded-2xl overflow-hidden bg-brand-navy shadow-2xl p-10 md:p-14">
              {/* Background grid */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              {/* Gold top line */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-brand-gold/80 via-brand-gold to-brand-gold/80" />

              <blockquote className="relative z-10 text-white/85 text-lg md:text-xl leading-loose font-medium italic">
                {t(
                  '"في عالم العقار والاستثمار، لا تُصنع النجاحات بالمصادفة… بل تُبنى بالرؤية، والثقة، والقدرة على صناعة الفرص."',
                  '"In the world of real estate and investment, success is never accidental. It is built on vision, trust, and the ability to create opportunity."'
                )}
              </blockquote>

              {/* Decorative circle */}
              <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full border border-brand-gold/20 opacity-50" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border border-brand-gold/15 opacity-50" />
            </div>

            {/* Stats strip */}
            <div className="mt-4 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.labelAr}
                  className="rounded-xl bg-white dark:bg-brand-navy border border-brand-beige/60 dark:border-white/10 p-4 text-center shadow-sm"
                >
                  <div className="text-brand-gold font-black text-lg leading-tight">{t(s.valueAr, s.valueEn)}</div>
                  <div className="text-brand-navy/60 dark:text-white/50 text-xs mt-1 font-medium">{t(s.labelAr, s.labelEn)}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2">
            <SectionHeader
              label={t('من نحن', 'About Us')}
              title={t('كيان سعودي حديث بروح استثمارية طموحة', 'A Modern Saudi Entity with Ambitious Investment Vision')}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-5 text-gray-600 dark:text-gray-300 text-base leading-relaxed"
            >
              <p>
                {t(
                  'انطلقت نغم ستار العقارية لتكون كياناً سعودياً حديثاً يجمع بين الاحترافية العقارية، والفكر التشغيلي، والرؤية الاستثمارية الطموحة.',
                  'Nagham Star Real Estate was established as a modern Saudi entity that brings together real estate expertise, operational intelligence, and an ambitious investment vision.'
                )}
              </p>
              <p>
                {t(
                  'نحن لا نعمل فقط على تسويق المشاريع وتأجيرها، بل نصنع قيمة حقيقية للمشروع من خلال بناء هوية تجارية قوية، واستقطاب العلامات المؤثرة، وتحويل المواقع إلى وجهات استثمارية نابضة بالحياة.',
                  'We go beyond marketing and leasing — we create real value by building strong commercial identities, attracting influential brands, and transforming locations into thriving investment destinations.'
                )}
              </p>
              <p>
                {t(
                  'كل مشروع نتولاه يحمل بصمتنا: رؤية واضحة، تنفيذ محترف، وتشغيل يضمن الاستدامة والنمو.',
                  'Every project we handle carries our signature: a clear vision, professional execution, and operations that guarantee sustainability and growth.'
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-brand-navy/25 dark:border-white/25 text-brand-navy dark:text-white font-semibold text-sm rounded-xl hover:border-brand-gold hover:text-brand-gold dark:hover:text-brand-gold active:scale-95 transition-all duration-200"
              >
                {t('استعرض خدماتنا', 'View Our Services')}
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
