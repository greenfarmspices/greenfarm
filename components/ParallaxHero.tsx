'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode } from 'react';

interface ParallaxHeroProps {
  children: ReactNode;
  imageSrc?: string;
}

export default function ParallaxHero({ children, imageSrc }: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Background moves at 40% of scroll speed (parallax)
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  // Foreground content fades and moves up slightly
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  // Scale for a subtle zoom-out effect
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[100svh] flex flex-col items-center justify-between overflow-hidden pt-52 md:pt-64 pb-6"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: bgY, scale: bgScale }}
      >
        {imageSrc && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
            style={{ backgroundImage: `url('${imageSrc}')` }}
          />
        )}
      </motion.div>

      {/* Gradient overlay — stays fixed */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1612] via-[#0A1612]/70 to-transparent" />

      {/* Content fades & lifts as you scroll */}
      <motion.div
        className="relative z-10 w-full flex-1 flex flex-col items-center justify-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {children}
      </motion.div>
    </section>
  );
}
