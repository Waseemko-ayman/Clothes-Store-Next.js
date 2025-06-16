"use client";
import React from 'react';
import Container from '../atoms/Container';
import Link from 'next/link';
import Image from 'next/image';
import { PATHS } from '@/mock/paths';
import NavLinks from '../molecules/NavLinks';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-[#d3d5da] !py-5 sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
          <Link href={PATHS.HOME}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                type: 'spring',
                stiffness: 60,
                damping: 12,
                delay: 0.1,
              }}
            >
              <Image
                src="/assets/landing/logo.png"
                alt="Cata Logo"
                title="Cata Logo"
                width={140}
                height={140}
              />
            </motion.div>
          </Link>
          <NavLinks />
        </div>
      </Container>
    </header>
  );
};

export default Header;
