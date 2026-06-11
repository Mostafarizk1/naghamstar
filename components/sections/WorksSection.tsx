'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface Video {
  id: string;
  uniqueId?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  title: string;
  aspectRatio?: string;
  isPortrait?: boolean;
}

interface WorksSectionProps {
  realestate: Video[];
  realestateads: Video[];
}

const TABS = [
  { key: 'realestate',    ar: 'المونتاج العقاري',            en: 'Real Estate'          },
  { key: 'realestateads', ar: 'الإعلانات العقارية السريعة',  en: 'Fast Real Estate Ads' },
] as const;

type TabKey = typeof TABS[number]['key'];

export default function WorksSection({ realestate, realestateads }: WorksSectionProps) {
  const { t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabKey>('realestate');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const videos = activeTab === 'realestate' ? realestate : realestateads;
  const activeVideo = activeIndex !== null ? videos[activeIndex] : null;

  const navigate = (dir: 'prev' | 'next') => {
    if (activeIndex === null) return;
    const next = dir === 'prev'
      ? (activeIndex - 1 + videos.length) % videos.length
      : (activeIndex + 1) % videos.length;
    setActiveIndex(next);
  };

  const closeModal = () => setActiveIndex(null);

  return (
    <section id="works" className="section-py bg-brand-navy-dark relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="relative z-10 container-max">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">
            {t('أعمالنا', 'Our Works')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
            {t('معرض الأعمال', 'Works Gallery')}
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setActiveIndex(null); }}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold font-cairo transition-all duration-200 ${
                activeTab === tab.key
                  ? 'bg-brand-gold text-brand-navy shadow-lg shadow-brand-gold/20'
                  : 'bg-white/8 text-white/60 hover:bg-white/12 hover:text-white border border-white/10'
              }`}
            >
              {t(tab.ar, tab.en)}
              <span className={`ms-2 text-xs font-normal ${activeTab === tab.key ? 'text-brand-navy/60' : 'text-white/30'}`}>
                {(activeTab === tab.key
                  ? videos
                  : tab.key === 'realestate' ? realestate : realestateads
                ).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          >
            {videos.map((video, index) => (
              <motion.button
                key={video.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03, duration: 0.2 }}
                onClick={() => setActiveIndex(index)}
                className="group relative aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-brand-gold/40 transition-all duration-300 text-start"
              >
                {/* Thumbnail */}
                {video.thumbnailUrl ? (
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-brand-navy to-brand-navy-dark" />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-gold/90 group-hover:bg-brand-gold flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300">
                    <Play className="w-4 h-4 md:w-5 md:h-5 text-brand-navy fill-brand-navy ms-0.5" />
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 inset-x-0 p-2.5 md:p-3">
                  <p className="text-white text-xs md:text-sm font-cairo font-medium leading-tight line-clamp-2">
                    {video.title}
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>

        {videos.length === 0 && (
          <div className="text-center py-20 text-white/30 text-sm">
            {t('لا توجد فيديوهات حالياً', 'No videos available')}
          </div>
        )}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute -top-10 end-0 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Player */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
                {activeVideo.videoUrl ? (
                  <iframe
                    src={activeVideo.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/40 text-sm">
                    {t('لا يوجد رابط فيديو', 'No video URL')}
                  </div>
                )}
              </div>

              {/* Title + nav */}
              <div className="flex items-center justify-between mt-4 gap-4">
                <button
                  onClick={() => navigate(isRTL ? 'next' : 'prev')}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="text-center flex-1">
                  <p className="text-white font-cairo font-semibold text-sm md:text-base">
                    {activeVideo.title}
                  </p>
                  <p className="text-white/30 text-xs mt-1">
                    {(activeIndex ?? 0) + 1} / {videos.length}
                  </p>
                </div>

                <button
                  onClick={() => navigate(isRTL ? 'prev' : 'next')}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
