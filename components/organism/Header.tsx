'use client';
import React, { useEffect, useState } from 'react';
import Container from '../atoms/Container';
import Link from 'next/link';
import Image from 'next/image';
import { PATHS } from '@/mock/paths';
import NavLinks from '../molecules/NavLinks';
import { motion } from 'framer-motion';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { FaAlignJustify } from 'react-icons/fa6';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    if (isMobile) {
      setOpen(false);
    }
  };

  // Track window size for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <header className="bg-[var(--first-color)] py-5 sticky top-0 z-50 shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
      {isMobile ? (
        <Sheet open={open} onOpenChange={setOpen}>
          <Container otherClassName="flex items-center justify-between h-10">
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
                  src="/assets/landing/logo.webp"
                  alt="Cata Logo"
                  title="Cata Logo"
                  width={50}
                  height={50}
                />
              </motion.div>
            </Link>
            <SheetTrigger>
              <FaAlignJustify
                fontSize="large"
                className="text-2xl text-[var(--fifth-color)] hover:text-[var(--forth-color)] transition duration-200 cursor-pointer"
              />
            </SheetTrigger>
          </Container>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="sr-only">sss</SheetTitle>
            </SheetHeader>
            <NavLinks isMobile={isMobile} onLinkClick={handleLinkClick} />
          </SheetContent>
        </Sheet>
      ) : (
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
                  src="/assets/landing/logo.webp"
                  alt="Cata Logo"
                  title="Cata Logo"
                  width={60}
                  height={60}
                />
              </motion.div>
            </Link>
            <NavLinks />
          </div>
        </Container>
      )}
    </header>
  );
};

export default Header;
