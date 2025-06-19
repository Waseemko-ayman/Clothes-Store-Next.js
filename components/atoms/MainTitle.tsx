import React from 'react';
import { motion } from 'framer-motion';

interface MainTitleProps {
  title: string;
  description: string;
}

const MainTitle = ({ title, description }: MainTitleProps) => {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="sm:text-4xl md:text-5xl font-bold text-[#222]">{title}</h2>
      <p className="text-base text-[#465b52] mt-3.5 mb-5">{description}</p>
    </motion.div>
  );
};

export default MainTitle;
