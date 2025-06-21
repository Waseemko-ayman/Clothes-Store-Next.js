'use client';
import React from 'react';
import Container from '../atoms/Container';
import { motion } from 'framer-motion';

const Copyrights = () => {
  const dateNow = new Date();
  return (
    <div className="text-center">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-base text-[#465b52] my-5"
        >
          &copy; {dateNow.getFullYear()}, Programmed by Waseem Abd Elhadi
          Developer
        </motion.p>
      </Container>
    </div>
  );
};

export default Copyrights;
