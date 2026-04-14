'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface MotionFadeProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function MotionFade({ children, delay = 0, className }: MotionFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
