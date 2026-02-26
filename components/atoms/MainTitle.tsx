'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface MainTitleProps {
  title: string;
  description: string;
  Icon?: React.ElementType;
}

const MainTitle = ({ title, description, Icon }: MainTitleProps) => {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {Icon && (
        <div className="mb-4 w-fit mx-auto rounded-full bg-primary/10 p-3">
          <Icon className="h-8 w-8 text-primary" />
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-(--fifth-color)">
        {title}
      </h2>
      <p className="text-base text-(--seconde-color) mt-3.5 mb-5">
        {description}
      </p>
    </motion.div>
  );
};

export default MainTitle;
