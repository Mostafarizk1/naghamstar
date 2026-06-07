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

export const metadata: Metadata = {
  title: 'نغم ستار العقارية | Nagham Star Real Estate',
  description:
    'مؤسسة سعودية رائدة في التطوير العقاري، إدارة المجمعات التجارية، واستقطاب العلامات الكبرى — A leading Saudi real estate development and investment institution.',
  keywords: ['نغم ستار', 'Nagham Star', 'real estate', 'عقارات', 'استثمار', 'المملكة العربية السعودية'],
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
