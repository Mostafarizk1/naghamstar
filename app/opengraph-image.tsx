import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const alt = 'نغم ستار العقارية — Nagham Star Real Estate';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const fontData = await readFile(join(process.cwd(), 'app', 'fonts', 'cairo-bold.ttf'));

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0e1b2b',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'Cairo',
          overflow: 'hidden',
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(201,169,110,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.07) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Radial glow center */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '500px',
            background: 'radial-gradient(ellipse, rgba(201,169,110,0.12) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Top gold line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #c9a96e, transparent)',
          }}
        />

        {/* Bottom gold line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #c9a96e 50%, transparent)',
          }}
        />

        {/* Left accent bar */}
        <div
          style={{
            position: 'absolute',
            top: '80px',
            bottom: '80px',
            left: '60px',
            width: '2px',
            background: 'linear-gradient(180deg, transparent, #c9a96e 40%, #c9a96e 60%, transparent)',
            opacity: 0.4,
          }}
        />

        {/* Right accent bar */}
        <div
          style={{
            position: 'absolute',
            top: '80px',
            bottom: '80px',
            right: '60px',
            width: '2px',
            background: 'linear-gradient(180deg, transparent, #c9a96e 40%, #c9a96e 60%, transparent)',
            opacity: 0.4,
          }}
        />

        {/* Logo star */}
        <div
          style={{
            width: '88px',
            height: '88px',
            borderRadius: '50%',
            background: '#c9a96e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px',
            boxShadow: '0 0 60px rgba(201,169,110,0.35)',
          }}
        >
          <svg width="44" height="44" viewBox="0 0 24 24" fill="#0e1b2b">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        {/* Arabic brand name */}
        <div
          style={{
            color: '#ffffff',
            fontSize: '64px',
            fontWeight: 700,
            fontFamily: 'Cairo',
            lineHeight: 1.3,
            textAlign: 'center',
            marginBottom: '8px',
            direction: 'rtl',
          }}
        >
          نغم ستار العقارية
        </div>

        {/* Gold divider */}
        <div
          style={{
            width: '80px',
            height: '2px',
            background: '#c9a96e',
            margin: '16px 0',
          }}
        />

        {/* English name */}
        <div
          style={{
            color: '#c9a96e',
            fontSize: '28px',
            fontWeight: 700,
            fontFamily: 'Cairo',
            letterSpacing: '0.1em',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          NAGHAM STAR REAL ESTATE
        </div>

        {/* Tagline */}
        <div
          style={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: '22px',
            fontFamily: 'Cairo',
            textAlign: 'center',
            direction: 'rtl',
          }}
        >
          وجهات استثمارية تُبنى بالرؤية والرقيّ
        </div>

        {/* Domain watermark */}
        <div
          style={{
            position: 'absolute',
            bottom: '28px',
            right: '80px',
            color: 'rgba(201,169,110,0.4)',
            fontSize: '18px',
            fontFamily: 'Cairo',
            letterSpacing: '0.05em',
          }}
        >
          naghamstar.com
        </div>

        {/* KSA flag colors accent bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: '28px',
            left: '80px',
            color: 'rgba(255,255,255,0.2)',
            fontSize: '16px',
            fontFamily: 'Cairo',
            direction: 'rtl',
          }}
        >
          المملكة العربية السعودية
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Cairo',
          data: fontData,
          weight: 700,
          style: 'normal',
        },
      ],
    }
  );
}
