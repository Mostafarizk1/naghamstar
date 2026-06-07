'use client';

import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '966565562255';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center"
      style={{ backgroundColor: '#25D366' }}
    >
      {/* WhatsApp SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="w-7 h-7"
        fill="white"
      >
        <path d="M24 4C12.95 4 4 12.95 4 24c0 3.55.93 6.87 2.54 9.77L4 44l10.49-2.51A19.9 19.9 0 0 0 24 44c11.05 0 20-8.95 20-20S35.05 4 24 4zm0 36a16 16 0 0 1-8.17-2.25l-.58-.35-6.23 1.49 1.52-6.06-.38-.62A16 16 0 1 1 24 40zm8.77-11.89c-.48-.24-2.84-1.4-3.28-1.56-.44-.16-.76-.24-1.08.24-.32.48-1.24 1.56-1.52 1.88-.28.32-.56.36-1.04.12-.48-.24-2.03-.75-3.86-2.38-1.43-1.27-2.39-2.84-2.67-3.32-.28-.48-.03-.74.21-.98.22-.22.48-.56.72-.84.24-.28.32-.48.48-.8.16-.32.08-.6-.04-.84-.12-.24-1.08-2.6-1.48-3.56-.39-.93-.79-.81-1.08-.82-.28-.01-.6-.01-.92-.01-.32 0-.84.12-1.28.6s-1.68 1.64-1.68 4 1.72 4.64 1.96 4.96c.24.32 3.38 5.16 8.2 7.24 1.14.49 2.04.78 2.73.99 1.15.37 2.19.32 3.01.19.92-.14 2.84-1.16 3.24-2.28.4-1.12.4-2.08.28-2.28-.12-.2-.44-.32-.92-.56z" />
      </svg>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: '#25D366' }} />
    </motion.a>
  );
}
