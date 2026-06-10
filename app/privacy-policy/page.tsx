'use client';

import Link from 'next/link';
import { Shield, ChevronRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const LAST_UPDATED = '٩ يونيو ٢٠٢٦';
const COMPANY_AR   = 'نغم ستار العقارية';
const COMPANY_EN   = 'Nagham Star Real Estate';
const EMAIL        = 'naghamstarr@outlook.sa';
const PHONE        = '+966 56 556 2255';
const WEBSITE      = 'naghamstar.sa';
const CR           = '7052870172';

const sections = [
  {
    id: 'intro',
    title: 'مقدمة',
    body: `تلتزم ${COMPANY_AR} بحماية خصوصيتك وصون بياناتك الشخصية وفقاً لنظام حماية البيانات الشخصية الصادر في المملكة العربية السعودية (المرسوم الملكي رقم م/19 لعام 1443هـ) واللوائح التنفيذية الصادرة عنه.\n\nتوضح هذه السياسة كيفية جمع بياناتك واستخدامها وحمايتها عند تفاعلك مع إعلاناتنا على منصة تيك توك أو عند تصفّح موقعنا الإلكتروني ${WEBSITE}.`,
  },
  {
    id: 'collector',
    title: 'المتحكم في البيانات',
    body: `${COMPANY_AR}\nالسجل التجاري: ${CR}\nالبريد الإلكتروني: ${EMAIL}\nالهاتف: ${PHONE}`,
  },
  {
    id: 'data',
    title: 'البيانات التي نجمعها',
    bullets: [
      'الاسم الكامل',
      'رقم الجوال',
    ],
    note: 'لا نجمع أي بيانات أخرى. لا نطلب بيانات مالية أو بطاقات ائتمانية أو وثائق هوية عبر نماذج الإعلانات.',
  },
  {
    id: 'purpose',
    title: 'الغرض من جمع البيانات',
    bullets: [
      'التواصل معك بخصوص مشاريعنا العقارية والفرص الاستثمارية المتاحة',
      'الرد على استفساراتك وتزويدك بالمعلومات التفصيلية اللازمة',
      'إدارة قوائم العملاء المحتملين الداخلية لفريق المبيعات',
    ],
    note: 'لا تُستخدم بياناتك لأي غرض آخر خارج نطاق التواصل المباشر معك بشأن خدماتنا العقارية.',
  },
  {
    id: 'legal',
    title: 'الأساس القانوني للمعالجة',
    body: `تُعالَج بياناتك استناداً إلى المادة السادسة من نظام حماية البيانات الشخصية، وتحديداً على أساس:\n\n• **موافقتك الصريحة** التي تُقدّمها عند تعبئة نموذج الإعلان على منصة تيك توك.\n• **المصلحة المشروعة** في التواصل مع الأفراد المهتمين بخدماتنا العقارية بناءً على طلبهم.`,
  },
  {
    id: 'retention',
    title: 'مدة الاحتفاظ بالبيانات',
    body: `نحتفظ ببياناتك للمدة اللازمة لإتمام التواصل وإغلاق الفرصة التجارية، وبحد أقصى **٣٦ شهراً** من تاريخ الجمع، ما لم تطلب حذفها قبل ذلك أو يقتضِ القانون احتفاظنا بها لمدة أطول.`,
  },
  {
    id: 'sharing',
    title: 'مشاركة البيانات مع أطراف أخرى',
    body: `لا نبيع بياناتك ولا نؤجّرها ولا نشاركها مع أي طرف ثالث لأغراض تسويقية.\n\nقد نشارك بياناتك فقط في الحالات التالية:\n• **فريق المبيعات الداخلي** لنغم ستار العقارية للتواصل معك مباشرة.\n• **الجهات الحكومية** عند الطلب الرسمي وفقاً للأنظمة النافذة.\n• **منصة تيك توك** بوصفها وسيطاً تقنياً لجمع بيانات نماذج Lead Ads وفق سياستها الخاصة.`,
  },
  {
    id: 'security',
    title: 'أمن البيانات وحمايتها',
    bullets: [
      'تُخزَّن البيانات في أنظمة مؤمّنة ذات وصول محدود لموظفين مختارين',
      'لا يُسمح بأي وصول خارجي لقواعد البيانات إلا للضرورة القصوى',
      'نراجع إجراءات الأمن دورياً لضمان سلامة بياناتك',
    ],
  },
  {
    id: 'rights',
    title: 'حقوقك وفق نظام حماية البيانات الشخصية',
    bullets: [
      '**الاطلاع**: طلب نسخة من بياناتك الشخصية التي بحوزتنا',
      '**التصحيح**: تصحيح أي بيانات غير دقيقة أو مكتملة',
      '**الحذف**: طلب حذف بياناتك بشكل كامل من سجلاتنا',
      '**سحب الموافقة**: سحب موافقتك في أي وقت دون التأثير على مشروعية المعالجة السابقة',
      '**الاعتراض**: الاعتراض على معالجة بياناتك في حالات بعينها',
    ],
    note: 'لممارسة أي من هذه الحقوق، يُرجى التواصل معنا مباشرة عبر البريد الإلكتروني أدناه. سنرد خلال ١٥ يوم عمل.',
  },
  {
    id: 'tiktok',
    title: 'إعلانات تيك توك (Lead Ads)',
    body: `عند تقديم بياناتك عبر نموذج Lead Ad على منصة تيك توك، تخضع عملية الجمع الأولية لـ سياسة خصوصية تيك توك. بعد وصول البيانات إلينا، تسري هذه السياسة حصراً على معالجتها وحمايتها.`,
  },
  {
    id: 'contact',
    title: 'التواصل معنا',
    body: `${COMPANY_AR} — ${COMPANY_EN}\nالبريد الإلكتروني: ${EMAIL}\nالهاتف / واتساب: ${PHONE}\nالموقع الإلكتروني: ${WEBSITE}`,
  },
  {
    id: 'updates',
    title: 'تحديثات السياسة',
    body: `نحتفظ بحق تحديث هذه السياسة في أي وقت لمواكبة التغييرات التنظيمية أو التشغيلية. سيُشار إلى تاريخ آخر تحديث في أعلى الصفحة. نشجعك على مراجعة السياسة دورياً.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Header />

      {/* Hero bar */}
      <section className="relative pt-32 pb-14 bg-[#010f1c] border-b border-white/8">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/35 text-xs mb-8">
            <Link href="/" className="hover:text-brand-gold transition-colors">الرئيسية</Link>
            <ChevronRight className="w-3 h-3 rtl:rotate-180" />
            <span className="text-white/55">سياسة الخصوصية</span>
          </nav>

          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/15 border border-brand-gold/25 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-brand-gold" />
            </div>
            <div>
              <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase block mb-1">
                {COMPANY_AR}
              </span>
              <h1 className="text-white text-3xl md:text-4xl font-black">
                سياسة الخصوصية
              </h1>
            </div>
          </div>

          <p className="text-white/45 text-sm">
            آخر تحديث: {LAST_UPDATED} — تسري على موقع{' '}
            <span className="text-brand-gold/70 font-medium" dir="ltr">{WEBSITE}</span>
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-2">
        {sections.map((sec, idx) => (
          <section
            key={sec.id}
            className="rounded-2xl border border-white/8 bg-[#010f1c] p-7 md:p-9"
          >
            {/* Section number + title */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-7 h-7 rounded-lg bg-brand-gold/15 text-brand-gold text-xs font-black flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <h2 className="text-white font-bold text-lg">{sec.title}</h2>
            </div>

            <div className="text-white/60 text-sm leading-loose space-y-4">

              {/* Free body text */}
              {sec.body && sec.body.split('\n').map((line, i) => {
                if (!line.trim()) return null;
                // Render bold markers
                const parts = line.split(/\*\*(.*?)\*\*/g);
                return (
                  <p key={i}>
                    {parts.map((part, j) =>
                      j % 2 === 1
                        ? <strong key={j} className="text-white/85 font-semibold">{part}</strong>
                        : part
                    )}
                  </p>
                );
              })}

              {/* Bullet list */}
              {sec.bullets && (
                <ul className="space-y-2.5 mt-1">
                  {sec.bullets.map((b, i) => {
                    const parts = b.split(/\*\*(.*?)\*\*/g);
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                        <span>
                          {parts.map((part, j) =>
                            j % 2 === 1
                              ? <strong key={j} className="text-white/85 font-semibold">{part}</strong>
                              : part
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}

              {/* Note callout */}
              {sec.note && (
                <div className="mt-4 px-4 py-3 rounded-xl bg-brand-gold/8 border border-brand-gold/20 text-white/70 text-xs leading-relaxed">
                  {sec.note}
                </div>
              )}
            </div>
          </section>
        ))}

        {/* Bottom note */}
        <div className="text-center pt-8 pb-4">
          <p className="text-white/25 text-xs leading-relaxed">
            هذه السياسة صادرة عن {COMPANY_AR} — السجل التجاري {CR}
            <br />
            جميع الحقوق محفوظة © {new Date().getFullYear()}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
