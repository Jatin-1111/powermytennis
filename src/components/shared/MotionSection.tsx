'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion-variants';

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
}

export function MotionSection({ children, className = '', delay = 0, stagger = false }: MotionSectionProps) {
  return (
    <motion.section
      variants={stagger ? STAGGER_CONTAINER : FADE_UP}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.section>
  );
}

export function MotionDiv({ children, className = '', delay = 0, stagger = false }: MotionSectionProps) {
  return (
    <motion.div
      variants={stagger ? STAGGER_CONTAINER : FADE_UP}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <motion.div variants={FADE_UP} className={className}>
      {children}
    </motion.div>
  );
}
