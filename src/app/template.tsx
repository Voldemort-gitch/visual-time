'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
