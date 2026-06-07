import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://naghamstar.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'نغم ستار العقارية | Nagham Star Real Estate',
    template: '%s | نغم ستار العقارية',
  },
  description:
    'مؤسسة سعودية رائدة في التطوير العقاري، إدارة المجمعات التجارية، واستقطاب العلامات الكبرى — A leading Saudi real estate development and investment institution.',
  keywords: [
    'نغم ستار', 'Nagham Star', 'عقارات مكة', 'real estate Makkah',
    'استثمار عقاري', 'مجمعات تجارية', 'تطوير عقاري', 'Saudi real estate',
  ],

  /* ── Open Graph (WhatsApp / Facebook / LinkedIn) ── */
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    alternateLocale: 'en_US',
    url: SITE_URL,
    siteName: 'نغم ستار العقارية',
    title: 'نغم ستار العقارية | Nagham Star Real Estate',
    description:
      'وجهات استثمارية تُبنى بالرؤية والرقيّ — مؤسسة سعودية متخصصة في التطوير العقاري وإدارة المجمعات التجارية.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'نغم ستار العقارية — Nagham Star Real Estate',
        type: 'image/png',
      },
    ],
  },

  /* ── Twitter / X card ── */
  twitter: {
    card: 'summary_large_image',
    title: 'نغم ستار العقارية | Nagham Star Real Estate',
    description: 'وجهات استثمارية تُبنى بالرؤية والرقيّ — مؤسسة سعودية رائدة في التطوير العقاري.',
    images: ['/opengraph-image'],
  },

  /* ── Icons ── */
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },

  /* ── Misc ── */
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className={cairo.variable}>
      <body className="font-cairo" suppressHydrationWarning>
        <Providers>
          {children}
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
