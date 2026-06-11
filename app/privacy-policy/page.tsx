'use client';

import Link from 'next/link';
import { Shield, ChevronRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';

const LAST_UPDATED_AR = '٩ يونيو ٢٠٢٦';
const LAST_UPDATED_EN = 'June 9, 2026';
const COMPANY_AR      = 'نغم ستار العقارية';
const COMPANY_EN      = 'Nagham Star Real Estate';
const EMAIL           = 'naghamstarr@outlook.sa';
const PHONE           = '+966 56 556 2255';
const WEBSITE         = 'naghamstar.sa';
const CR              = '7052870172';

interface Section {
  id: string;
  title:   { ar: string; en: string };
  body?:   { ar: string; en: string };
  bullets?: { ar: string; en: string }[];
  note?:   { ar: string; en: string };
}

const sections: Section[] = [
  {
    id: 'intro',
    title: { ar: 'مقدمة', en: 'Introduction' },
    body: {
      ar: `تلتزم ${COMPANY_AR} بحماية خصوصيتك وصون بياناتك الشخصية وفقاً لنظام حماية البيانات الشخصية الصادر في المملكة العربية السعودية (المرسوم الملكي رقم م/19 لعام 1443هـ) واللوائح التنفيذية الصادرة عنه.\n\nتوضح هذه السياسة كيفية جمع بياناتك واستخدامها وحمايتها عند تفاعلك مع إعلاناتنا على منصة تيك توك أو عند تصفّح موقعنا الإلكتروني ${WEBSITE}.`,
      en: `${COMPANY_EN} is committed to protecting your privacy and safeguarding your personal data in accordance with the Personal Data Protection Law of the Kingdom of Saudi Arabia (Royal Decree No. M/19 of 1443H) and its implementing regulations.\n\nThis policy explains how we collect, use, and protect your data when you interact with our TikTok advertisements or browse our website ${WEBSITE}.`,
    },
  },
  {
    id: 'collector',
    title: { ar: 'المتحكم في البيانات', en: 'Data Controller' },
    body: {
      ar: `${COMPANY_AR}\nالسجل التجاري: ${CR}\nالبريد الإلكتروني: ${EMAIL}\nالهاتف: ${PHONE}`,
      en: `${COMPANY_EN}\nCommercial Registration: ${CR}\nEmail: ${EMAIL}\nPhone: ${PHONE}`,
    },
  },
  {
    id: 'data',
    title: { ar: 'البيانات التي نجمعها', en: 'Data We Collect' },
    bullets: [
      { ar: 'الاسم الكامل', en: 'Full name' },
      { ar: 'رقم الجوال', en: 'Mobile number' },
    ],
    note: {
      ar: 'لا نجمع أي بيانات أخرى. لا نطلب بيانات مالية أو بطاقات ائتمانية أو وثائق هوية عبر نماذج الإعلانات.',
      en: 'We collect no other data. We do not request financial details, credit card numbers, or identity documents through ad lead forms.',
    },
  },
  {
    id: 'purpose',
    title: { ar: 'الغرض من جمع البيانات', en: 'Purpose of Data Collection' },
    bullets: [
      { ar: 'التواصل معك بخصوص مشاريعنا العقارية والفرص الاستثمارية المتاحة', en: 'Contacting you regarding our real estate projects and available investment opportunities' },
      { ar: 'الرد على استفساراتك وتزويدك بالمعلومات التفصيلية اللازمة', en: 'Responding to your inquiries and providing you with detailed information' },
      { ar: 'إدارة قوائم العملاء المحتملين الداخلية لفريق المبيعات', en: 'Managing internal prospect lists for our sales team' },
    ],
    note: {
      ar: 'لا تُستخدم بياناتك لأي غرض آخر خارج نطاق التواصل المباشر معك بشأن خدماتنا العقارية.',
      en: 'Your data is not used for any purpose beyond direct communication with you regarding our real estate services.',
    },
  },
  {
    id: 'legal',
    title: { ar: 'الأساس القانوني للمعالجة', en: 'Legal Basis for Processing' },
    body: {
      ar: 'تُعالَج بياناتك استناداً إلى المادة السادسة من نظام حماية البيانات الشخصية، وتحديداً على أساس:\n\n• **موافقتك الصريحة** التي تُقدّمها عند تعبئة نموذج الإعلان على منصة تيك توك.\n• **المصلحة المشروعة** في التواصل مع الأفراد المهتمين بخدماتنا العقارية بناءً على طلبهم.',
      en: 'Your data is processed pursuant to Article 6 of the Personal Data Protection Law, specifically on the basis of:\n\n• **Your explicit consent** provided when completing the lead form on TikTok.\n• **Legitimate interest** in contacting individuals who have expressed interest in our real estate services.',
    },
  },
  {
    id: 'retention',
    title: { ar: 'مدة الاحتفاظ بالبيانات', en: 'Data Retention Period' },
    body: {
      ar: 'نحتفظ ببياناتك للمدة اللازمة لإتمام التواصل وإغلاق الفرصة التجارية، وبحد أقصى **٣٦ شهراً** من تاريخ الجمع، ما لم تطلب حذفها قبل ذلك أو يقتضِ القانون احتفاظنا بها لمدة أطول.',
      en: 'We retain your data for the period necessary to complete communication and close the business opportunity, with a maximum of **36 months** from the date of collection, unless you request deletion earlier or the law requires longer retention.',
    },
  },
  {
    id: 'sharing',
    title: { ar: 'مشاركة البيانات مع أطراف أخرى', en: 'Data Sharing with Third Parties' },
    body: {
      ar: 'لا نبيع بياناتك ولا نؤجّرها ولا نشاركها مع أي طرف ثالث لأغراض تسويقية.\n\nقد نشارك بياناتك فقط في الحالات التالية:\n• **فريق المبيعات الداخلي** لنغم ستار العقارية للتواصل معك مباشرة.\n• **الجهات الحكومية** عند الطلب الرسمي وفقاً للأنظمة النافذة.\n• **منصة تيك توك** بوصفها وسيطاً تقنياً لجمع بيانات نماذج Lead Ads وفق سياستها الخاصة.',
      en: 'We do not sell, rent, or share your data with any third party for marketing purposes.\n\nWe may share your data only in the following cases:\n• **Internal sales team** at Nagham Star Real Estate to contact you directly.\n• **Government authorities** upon official request in accordance with applicable regulations.\n• **TikTok platform** as a technical intermediary for collecting Lead Ads form data per its own privacy policy.',
    },
  },
  {
    id: 'security',
    title: { ar: 'أمن البيانات وحمايتها', en: 'Data Security' },
    bullets: [
      { ar: 'تُخزَّن البيانات في أنظمة مؤمّنة ذات وصول محدود لموظفين مختارين', en: 'Data is stored in secured systems with limited access restricted to selected staff' },
      { ar: 'لا يُسمح بأي وصول خارجي لقواعد البيانات إلا للضرورة القصوى', en: 'No external access to databases is permitted except when strictly necessary' },
      { ar: 'نراجع إجراءات الأمن دورياً لضمان سلامة بياناتك', en: 'We periodically review security procedures to ensure the integrity of your data' },
    ],
  },
  {
    id: 'rights',
    title: { ar: 'حقوقك وفق نظام حماية البيانات الشخصية', en: 'Your Rights under the PDPL' },
    bullets: [
      { ar: '**الاطلاع**: طلب نسخة من بياناتك الشخصية التي بحوزتنا', en: '**Access**: Request a copy of your personal data held by us' },
      { ar: '**التصحيح**: تصحيح أي بيانات غير دقيقة أو مكتملة', en: '**Rectification**: Correct any inaccurate or incomplete data' },
      { ar: '**الحذف**: طلب حذف بياناتك بشكل كامل من سجلاتنا', en: '**Erasure**: Request complete deletion of your data from our records' },
      { ar: '**سحب الموافقة**: سحب موافقتك في أي وقت دون التأثير على مشروعية المعالجة السابقة', en: '**Withdraw consent**: Withdraw your consent at any time without affecting the lawfulness of prior processing' },
      { ar: '**الاعتراض**: الاعتراض على معالجة بياناتك في حالات بعينها', en: '**Object**: Object to the processing of your data in specific cases' },
    ],
    note: {
      ar: 'لممارسة أي من هذه الحقوق، يُرجى التواصل معنا مباشرة عبر البريد الإلكتروني أدناه. سنرد خلال ١٥ يوم عمل.',
      en: 'To exercise any of these rights, please contact us directly via the email below. We will respond within 15 business days.',
    },
  },
  {
    id: 'tiktok',
    title: { ar: 'إعلانات تيك توك (Lead Ads)', en: 'TikTok Lead Ads' },
    body: {
      ar: 'عند تقديم بياناتك عبر نموذج Lead Ad على منصة تيك توك، تخضع عملية الجمع الأولية لسياسة خصوصية تيك توك. بعد وصول البيانات إلينا، تسري هذه السياسة حصراً على معالجتها وحمايتها.',
      en: 'When you submit your data through a Lead Ad form on TikTok, the initial collection process is governed by TikTok\'s own privacy policy. Once the data reaches us, this policy exclusively governs its processing and protection.',
    },
  },
  {
    id: 'contact',
    title: { ar: 'التواصل معنا', en: 'Contact Us' },
    body: {
      ar: `${COMPANY_AR}\nالبريد الإلكتروني: ${EMAIL}\nالهاتف / واتساب: ${PHONE}\nالموقع الإلكتروني: ${WEBSITE}`,
      en: `${COMPANY_EN}\nEmail: ${EMAIL}\nPhone / WhatsApp: ${PHONE}\nWebsite: ${WEBSITE}`,
    },
  },
  {
    id: 'updates',
    title: { ar: 'تحديثات السياسة', en: 'Policy Updates' },
    body: {
      ar: 'نحتفظ بحق تحديث هذه السياسة في أي وقت لمواكبة التغييرات التنظيمية أو التشغيلية. سيُشار إلى تاريخ آخر تحديث في أعلى الصفحة. نشجعك على مراجعة السياسة دورياً.',
      en: 'We reserve the right to update this policy at any time to keep pace with regulatory or operational changes. The last updated date will be indicated at the top of the page. We encourage you to review this policy periodically.',
    },
  },
];

function renderText(text: string) {
  return text.split('\n').map((line, i) => {
    if (!line.trim()) return null;
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
  });
}

function renderBullet(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, j) =>
    j % 2 === 1
      ? <strong key={j} className="text-white/85 font-semibold">{part}</strong>
      : part
  );
}

export default function PrivacyPolicyPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-brand-navy">
      <Header />

      {/* Hero bar */}
      <section className="relative pt-32 pb-14 bg-[#010f1c] border-b border-white/8">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/35 text-xs mb-8">
            <Link href="/" className="hover:text-brand-gold transition-colors">
              {t('الرئيسية', 'Home')}
            </Link>
            <ChevronRight className="w-3 h-3 rtl:rotate-180" />
            <span className="text-white/55">{t('سياسة الخصوصية', 'Privacy Policy')}</span>
          </nav>

          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/15 border border-brand-gold/25 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-brand-gold" />
            </div>
            <div>
              <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase block mb-1">
                {t(COMPANY_AR, COMPANY_EN)}
              </span>
              <h1 className="text-white text-3xl md:text-4xl font-black">
                {t('سياسة الخصوصية', 'Privacy Policy')}
              </h1>
            </div>
          </div>

          <p className="text-white/45 text-sm">
            {t('آخر تحديث:', 'Last updated:')}{' '}
            <span className="text-brand-gold/70 font-medium">
              {t(LAST_UPDATED_AR, LAST_UPDATED_EN)}
            </span>
            {' — '}
            {t('تسري على موقع', 'Applies to')}{' '}
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
            <div className="flex items-center gap-3 mb-5">
              <span className="w-7 h-7 rounded-lg bg-brand-gold/15 text-brand-gold text-xs font-black flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <h2 className="text-white font-bold text-lg">
                {t(sec.title.ar, sec.title.en)}
              </h2>
            </div>

            <div className="text-white/60 text-sm leading-loose space-y-4">
              {sec.body && renderText(language === 'ar' ? sec.body.ar : sec.body.en)}

              {sec.bullets && (
                <ul className="space-y-2.5 mt-1">
                  {sec.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                      <span>{renderBullet(language === 'ar' ? b.ar : b.en)}</span>
                    </li>
                  ))}
                </ul>
              )}

              {sec.note && (
                <div className="mt-4 px-4 py-3 rounded-xl bg-brand-gold/8 border border-brand-gold/20 text-white/70 text-xs leading-relaxed">
                  {t(sec.note.ar, sec.note.en)}
                </div>
              )}
            </div>
          </section>
        ))}

        <div className="text-center pt-8 pb-4">
          <p className="text-white/25 text-xs leading-relaxed">
            {t(
              `${COMPANY_AR} — السجل التجاري ${CR}`,
              `${COMPANY_EN} — CR ${CR}`
            )}
            <br />
            {t(
              `جميع الحقوق محفوظة © ${new Date().getFullYear()}`,
              `All rights reserved © ${new Date().getFullYear()}`
            )}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
