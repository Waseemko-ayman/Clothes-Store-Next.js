'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface MotionDivProps {
  children: React.ReactNode;
  index?: number;
  className?: string;
}

const MotionDiv = ({ children, index = 0, className = '' }: MotionDivProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
