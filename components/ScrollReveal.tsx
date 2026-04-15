'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    y?: number;
    x?: number;
    duration?: number;
}

export default function ScrollReveal({ children, delay = 0, className = "", y = 20, x = 0, duration = 0.5 }: ScrollRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y, x }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FadeIn({ children, delay = 0, className = "", duration = 0.5 }: ScrollRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function SlideInLeft({ children, delay = 0, className = "", duration = 0.8 }: ScrollRevealProps) {
    return (
        <ScrollReveal x={-30} y={0} delay={delay} className={className} duration={duration}>
            {children}
        </ScrollReveal>
    );
}

export function SlideInRight({ children, delay = 0, className = "", duration = 0.8 }: ScrollRevealProps) {
    return (
        <ScrollReveal x={30} y={0} delay={delay} className={className} duration={duration}>
            {children}
        </ScrollReveal>
    );
}
