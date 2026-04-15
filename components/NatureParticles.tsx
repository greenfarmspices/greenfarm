'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// SVG paths for different leaf / petal shapes
const LeafSVG = ({ color = '#4ade80', opacity = 0.7 }: { color?: string; opacity?: number }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path
      d="M12 2C12 2 4 7 4 14C4 18.418 7.582 22 12 22C16.418 22 20 18.418 20 14C20 7 12 2 12 2Z"
      fill={color}
    />
    <line x1="12" y1="22" x2="12" y2="10" stroke="#166534" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

const PetalSVG = ({ color = '#F4D160', opacity = 0.6 }: { color?: string; opacity?: number }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <ellipse cx="10" cy="10" rx="4" ry="9" fill={color} />
  </svg>
);

const HerbDropSVG = ({ opacity = 0.5 }: { opacity?: number }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <circle cx="6" cy="6" r="5" fill="#86efac" />
    <circle cx="6" cy="6" r="2" fill="#4ade80" />
  </svg>
);

interface Particle {
  id: number;
  type: 'leaf' | 'petal' | 'firefly' | 'herb';
  x: number; // percent from left (5–90)
  delay: number;
  duration: number;
  size: number;
  color: string;
  rotate: number;
  swayAmount: number;
}

const LEAF_COLORS = ['#4ade80', '#22c55e', '#16a34a', '#86efac', '#bbf7d0'];
const PETAL_COLORS = ['#F4D160', '#fde68a', '#fef08a', '#fed7aa'];
const FIREFLY_COLORS = ['#d9f99d', '#bbf7d0', '#F4D160', '#ecfccb'];

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => {
    const types: Particle['type'][] = ['leaf', 'petal', 'firefly', 'herb'];
    const typeWeights = [0.35, 0.25, 0.25, 0.15]; // more leaves
    const rand = Math.random();
    let type: Particle['type'] = 'leaf';
    let cumulative = 0;
    for (let t = 0; t < types.length; t++) {
      cumulative += typeWeights[t];
      if (rand < cumulative) { type = types[t]; break; }
    }

    const color =
      type === 'leaf' ? LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)] :
      type === 'petal' ? PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)] :
      type === 'firefly' ? FIREFLY_COLORS[Math.floor(Math.random() * FIREFLY_COLORS.length)] :
      '#86efac';

    return {
      id: i,
      type,
      x: randomBetween(4, 92), // keep within viewport
      delay: randomBetween(0, 10),
      duration: randomBetween(type === 'firefly' ? 4 : 8, type === 'firefly' ? 8 : 18),
      size: type === 'firefly' ? randomBetween(4, 8) : randomBetween(14, 26),
      color,
      rotate: randomBetween(-180, 180),
      swayAmount: randomBetween(8, 20),
    };
  });
}

// ----- Individual particle renderers -----

function FloatingLeaf({ p }: { p: Particle }) {
  return (
    <motion.div
      key={p.id}
      className="absolute pointer-events-none will-change-transform"
      style={{ left: `${p.x}%`, top: '-40px', width: p.size, height: p.size }}
      animate={{
        y: ['0vh', '110vh'],
        x: [0, p.swayAmount, -p.swayAmount, p.swayAmount / 2, 0],
        rotate: [0, p.rotate, p.rotate * 0.5, p.rotate * 1.5, p.rotate],
        opacity: [0, 0.8, 0.9, 0.7, 0],
      }}
      transition={{
        duration: p.duration,
        delay: p.delay,
        repeat: Infinity,
        ease: 'linear',
        times: [0, 0.2, 0.5, 0.8, 1],
      }}
    >
      <LeafSVG color={p.color} opacity={0.75} />
    </motion.div>
  );
}

function FloatingPetal({ p }: { p: Particle }) {
  return (
    <motion.div
      key={p.id}
      className="absolute pointer-events-none will-change-transform"
      style={{ left: `${p.x}%`, top: '-30px', width: p.size, height: p.size }}
      animate={{
        y: ['0vh', '110vh'],
        x: [0, p.swayAmount * 1.5, -p.swayAmount, p.swayAmount, 0],
        rotate: [0, 120, 240, 360],
        opacity: [0, 0.7, 0.8, 0.6, 0],
      }}
      transition={{
        duration: p.duration,
        delay: p.delay,
        repeat: Infinity,
        ease: 'easeInOut',
        times: [0, 0.3, 0.6, 0.9, 1],
      }}
    >
      <PetalSVG color={p.color} opacity={0.7} />
    </motion.div>
  );
}

function Firefly({ p }: { p: Particle }) {
  return (
    <motion.div
      key={p.id}
      className="absolute pointer-events-none rounded-full will-change-transform"
      style={{
        left: `${p.x}%`,
        top: `${randomBetween(20, 85)}%`,
        width: p.size,
        height: p.size,
        backgroundColor: p.color,
        boxShadow: `0 0 ${p.size * 2}px ${p.size}px ${p.color}55`,
      }}
      animate={{
        x: [0, p.swayAmount * 2, -p.swayAmount, p.swayAmount * 1.5, 0],
        y: [0, -p.swayAmount * 2, p.swayAmount, -p.swayAmount * 1.5, 0],
        opacity: [0, 0.9, 0.5, 1, 0.3, 0.9, 0],
        scale: [0.8, 1.2, 0.9, 1.3, 1],
      }}
      transition={{
        duration: p.duration,
        delay: p.delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

function HerbDrop({ p }: { p: Particle }) {
  return (
    <motion.div
      key={p.id}
      className="absolute pointer-events-none will-change-transform"
      style={{ left: `${p.x}%`, top: '-20px' }}
      animate={{
        y: ['0vh', '110vh'],
        opacity: [0, 0.6, 0.8, 0.5, 0],
        scale: [0.5, 1, 0.9, 1.1, 0.8],
      }}
      transition={{
        duration: p.duration,
        delay: p.delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <HerbDropSVG opacity={0.65} />
    </motion.div>
  );
}

// ----- Main Component -----

interface NatureParticlesProps {
  count?: number;
  className?: string;
}

export default function NatureParticles({ count = 18, className = '' }: NatureParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate on client only to avoid SSR mismatch
  useEffect(() => {
    setParticles(generateParticles(count));
  }, [count]);

  if (particles.length === 0) return null;

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {particles.map((p) => {
        if (p.type === 'leaf') return <FloatingLeaf key={p.id} p={p} />;
        if (p.type === 'petal') return <FloatingPetal key={p.id} p={p} />;
        if (p.type === 'firefly') return <Firefly key={p.id} p={p} />;
        return <HerbDrop key={p.id} p={p} />;
      })}
    </div>
  );
}
