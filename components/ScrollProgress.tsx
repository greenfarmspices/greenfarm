'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setScrollPct(total > 0 ? (scrolled / total) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px] bg-white/5 pointer-events-none">
      {/* Vine progress bar */}
      <motion.div
        className="h-full origin-left"
        style={{
          width: `${scrollPct}%`,
          background: 'linear-gradient(90deg, #22c55e, #4ade80, #F4D160, #22c55e)',
          backgroundSize: '200% 100%',
          boxShadow: '0 0 8px 2px rgba(74, 222, 128, 0.6)',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 0%'],
        }}
        transition={{
          backgroundPosition: { duration: 2, repeat: Infinity, ease: 'linear' },
        }}
      />
      {/* Glowing tip dot */}
      {scrollPct > 1 && scrollPct < 99 && (
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#4ade80] shadow-[0_0_10px_4px_rgba(74,222,128,0.8)]"
          style={{ left: `calc(${scrollPct}% - 6px)` }}
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      )}
    </div>
  );
}
