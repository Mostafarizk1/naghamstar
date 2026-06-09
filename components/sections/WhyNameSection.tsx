'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function WhyNameSection() {
  const { t, language } = useLanguage();

  return (
    <section id="why" className="section-py bg-brand-navy dark:bg-brand-navy overflow-hidden relative">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="relative z-10 container-max">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">
            {t('لماذا نغم ستار', 'Why Nagham Star')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
            {t('هوية تصنع التميّز… ومشاريع تترك أثراً', 'An Identity That Creates Excellence… Projects That Leave a Mark')}
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mt-6" />
        </motion.div>

        {/* Two columns: نغم & ستار */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">

          {/* نغم */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65 }}
            className="relative rounded-2xl bg-brand-gold/10 border border-brand-gold/20 p-8 md:p-10 overflow-hidden"
          >
            {/* Large Arabic letter bg */}
            <div
              className="absolute -bottom-6 -end-4 text-[10rem] font-black text-brand-gold/8 leading-none select-none pointer-events-none"
              aria-hidden="true"
            >
              ن
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="text-5xl font-black text-brand-gold leading-none">نغم</span>
                {language === 'en' && <span className="text-2xl font-bold text-brand-gold/70">Nagham</span>}
              </div>

              <p className="text-white/75 text-base leading-relaxed mb-6">
                {t(
                  '"نغم" يرمز إلى الانسجام، الرقي، والدقة في التفاصيل. كل مشروع ناجح يحتاج إلى تناغم حقيقي بين الرؤية، التنفيذ، والتشغيل.',
                  '"Nagham" symbolizes harmony, refinement, and precision in every detail. Every successful project requires true harmony between vision, execution, and operations.'
                )}
              </p>

              <div className="flex flex-col gap-3">
                {[
                  { ar: 'الانسجام في التخطيط', en: 'Harmony in Planning' },
                  { ar: 'الرقي في التنفيذ', en: 'Refinement in Execution' },
                  { ar: 'الدقة في التشغيل', en: 'Precision in Operations' },
                ].map((item) => (
                  <div key={item.ar} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                    <span className="text-white/70 text-sm">{t(item.ar, item.en)}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ستار */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative rounded-2xl bg-brand-gold border-brand-gold-dark border p-8 md:p-10 overflow-hidden"
          >
            {/* Large Arabic letter bg */}
            <div
              className="absolute -bottom-6 -end-4 text-[10rem] font-black text-brand-navy/10 leading-none select-none pointer-events-none"
              aria-hidden="true"
            >
              س
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="text-5xl font-black text-brand-navy leading-none">ستار</span>
                {language === 'en' && <span className="text-2xl font-bold text-brand-navy/60">Star</span>}
              </div>

              <p className="text-brand-navy/75 text-base leading-relaxed mb-6">
                {t(
                  '"ستار" ترمز إلى النجومية، التميّز، والظهور القوي. لتعكس طموح المؤسسة بأن تكون اسماً لامعاً في قطاع العقار والاستثمار السعودي.',
                  '"Star" represents brilliance, distinction, and strong presence — reflecting our ambition to be a shining name in the Saudi real estate and investment sector.'
                )}
              </p>

              <div className="flex flex-col gap-3">
                {[
                  { ar: 'النجومية في الأداء', en: 'Star-level Performance' },
                  { ar: 'التميّز في الهوية', en: 'Distinction in Identity' },
                  { ar: 'الظهور القوي في السوق', en: 'Strong Market Presence' },
                ].map((item) => (
                  <div key={item.ar} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-navy shrink-0" />
                    <span className="text-brand-navy/70 text-sm">{t(item.ar, item.en)}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-14"
        >
          <p className="text-white/50 text-sm max-w-lg mx-auto leading-relaxed">
            {t(
              'معاً، يشكّل الاسم هوية متكاملة: انسجام في العمل، ونجومية في الأداء — لمشاريع تترك أثراً حقيقياً.',
              'Together, the name forms a complete identity: harmony in work and brilliance in performance — for projects that leave a real mark.'
            )}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
