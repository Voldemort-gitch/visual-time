'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-[2px] bg-brand-secondary origin-left z-[1000] shadow-[0_0_15px_rgba(var(--stage-glow-color),0.4)] pointer-events-none"
      style={{ scaleX }}
    />
  );
}
