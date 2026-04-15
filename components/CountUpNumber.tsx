'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface CountUpProps {
  target: string; // e.g. "256k+", "98%", "308+"
  label: string;
  delay?: number;
}

function parseTarget(raw: string): { num: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)/);
  if (!match) return { num: 0, suffix: raw };
  return { num: parseInt(match[1]), suffix: match[2] };
}

export default function CountUpNumber({ target, label, delay = 0 }: CountUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);
  const { num, suffix } = parseTarget(target);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = duration / num;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        start += Math.max(1, Math.floor(num / 60));
        if (start >= num) {
          setCount(num);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, step);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [isInView, num, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col items-center md:items-start"
    >
      <div className="relative">
        {/* Glow behind number */}
        <div className="absolute inset-0 blur-xl bg-[#F4D160]/20 rounded-full scale-150 pointer-events-none" />
        <div className="text-4xl lg:text-5xl font-bold text-[#F4D160] mb-2 tracking-tighter relative z-10 tabular-nums">
          {count}{suffix}
        </div>
      </div>
      <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">{label}</div>
    </motion.div>
  );
}
