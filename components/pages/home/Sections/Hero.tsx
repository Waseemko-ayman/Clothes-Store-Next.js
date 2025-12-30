'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/Button';
import { PATHS } from '@/mock/paths';
import { BackgroundLines } from '@/components/ui/background-lines';
import { LayoutTextFlip } from '@/components/ui/layout-text-flip';

const Hero = () => {
  return (
    <BackgroundLines>
      <div className="min-h-[90vh] relative flex item-center justify-center w-full flex-col">
        <Container otherClassName="text-center z-10 max-sm:text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--forth-color)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <LayoutTextFlip
                text="Wénor "
                words={['Collection', 'Style', 'Fashion', 'Vibe']}
              />
            </motion.div>

            <motion.h1
              className="py-4 text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-[var(--fifth-color)] font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Define your look <br />
              <span className="text-[var(--forth-color)]">
                Wear confidence every day
              </span>
            </motion.h1>

            <motion.p
              className="text-base text-[var(--seconde-color)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Modern fashion designed for simplicity, comfort, and timeless
              style.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                href={PATHS.SHOP.ROOT}
                variant="cover"
                otherClassName="mt-4 inline-block"
              >
                Shop Now
              </Button>
            </motion.div>
          </motion.div>
          {/* <motion.img
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
          /> */}
        </Container>
      </div>
    </BackgroundLines>
  );
};

export default Hero;
