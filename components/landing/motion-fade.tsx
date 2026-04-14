'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface MotionFadeProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  duration?: number;
  blur?: number;
  amount?: number | 'some' | 'all';
  once?: boolean;
  margin?: string;
}

export function MotionFade({
  children,
  delay = 0,
  className,
  y = 18,
  duration = 0.65,
  blur = 0,
  amount = 0.18,
  once = true,
  margin = '-90px 0px -90px 0px',
}: MotionFadeProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y, filter: blur ? `blur(${blur}px)` : 'none' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, amount, margin }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
