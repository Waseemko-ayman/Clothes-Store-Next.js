'use client';
import { navItems } from '@/mock';
import Link from 'next/link';
import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const NavLinks = ({
  isMobile,
  onLinkClick,
}: {
  isMobile?: boolean;
  onLinkClick?: () => void;
}) => {
  const StyledLinks =
    'relative py-1 text-base font-semibold cursor-pointer text-[#1a1a1a] hover:text-[#088178] transition duration-200';
  return (
    <nav className="">
      <ul
        className={`${
          !isMobile ? 'flex items-center justify-center gap-7' : ''
        }`}
      >
        {navItems.map((item, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 60,
              damping: 12,
              delay: idx * 0.08,
            }}
            className={`${StyledLinks} ${
              item.name !== 'Cart' &&
              'after:absolute after:left-0 after:bottom-0 after:bg-[#088178] after:w-0 after:h-0.5 hover:after:w-1/2 after:transition-all after:duration-300'
            } ${isMobile ? 'text-lg mb-4' : ''}`}
            onClick={onLinkClick}
          >
            <Link href={item.link}>
              {item.name === 'Cart' ? (
                <div className="flex items-center gap-1">
                  <FaCartShopping className={`${StyledLinks}`} size="25px" />
                  <span className="text-white bg-[#088178] w-fit py-0.5 px-2 rounded-sm text-sm text-center font-bold">
                    0
                  </span>
                </div>
              ) : (
                item.name
              )}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
