'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [animData, setAnimData] = useState<object | null>(null);

  useEffect(() => {
    /* Don't show splash on repeat visits in same session */
    if (sessionStorage.getItem('splash-shown')) {
      setVisible(false);
      return;
    }

    fetch('/splash-lottie.json')
      .then((r) => r.json())
      .then((data) => setAnimData(data))
      .catch(() => setAnimData(null));

    const fadeTimer = setTimeout(() => setFading(true), 3200);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('splash-shown', '1');
    }, 3800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: '#012847',
        transition: 'opacity 0.6s ease',
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      {animData ? (
        <Lottie
          animationData={animData}
          loop={false}
          style={{ width: 280, height: 280 }}
        />
      ) : (
        /* Fallback — logo if Lottie fails to load */
        <div className="flex flex-col items-center gap-6 animate-fade-in">
          <Image
            src="/logos/logo-square.svg"
            alt="نغم ستار العقارية"
            width={160}
            height={160}
            priority
          />
          <div className="w-12 h-0.5 bg-brand-gold" />
        </div>
      )}

      {/* Gold pulse bar at bottom */}
      <div className="absolute bottom-0 inset-x-0 h-0.5 overflow-hidden">
        <div
          className="h-full bg-brand-gold"
          style={{
            width: fading ? '100%' : '0%',
            transition: 'width 3.2s ease',
          }}
        />
      </div>
    </div>
  );
}
