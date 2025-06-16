'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/Button';

const Hero = () => {
  return (
    <div className="min-h-[90vh] relative bg-cover bg-center content-center bg-[#d3d5da]">
      <Container otherClassName="flex flex-col sm:flex-row items-center justify-between gap-10 sm:gap-3 z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.p
            className="text-xl text-[#465b52]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Trade-in-offer
          </motion.p>

          <motion.h1
            className="py-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#222] font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Super value deals{' '}
            <span className="text-[#088178]">On all products</span>
          </motion.h1>

          <motion.p
            className="text-base text-[#465b52]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Save more with coupons & up to 70% off!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button variant="cover" otherClassName="mt-4">
              Shop Now
            </Button>
          </motion.div>
        </motion.div>
        <motion.img
          src="/assets/landing/landing.png"
          alt="person"
          title="person"
          width={900}
          height={900}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 60,
            damping: 12,
            delay: 0.1,
          }}
        />
      </Container>
    </div>
  );
};

export default Hero;
