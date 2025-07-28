// PageTransition.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function PageTransition({
  children,
  duration = 0.3,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}
