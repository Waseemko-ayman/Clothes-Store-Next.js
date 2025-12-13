'use client';
import { navItems } from '@/mock';
import Link from 'next/link';
import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { FiUser } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useCartContext } from '@/context/CartContext';
import { usePathname } from 'next/navigation';

const NavLinks = ({
  isMobile,
  onLinkClick,
}: {
  isMobile?: boolean;
  onLinkClick?: () => void;
}) => {
  const pathname = usePathname();
  const { cartItems } = useCartContext();

  const StyledLinks = `relative py-1 text-base font-semibold cursor-pointer text-[var(${
    isMobile ? '--white-color' : '--fifth-color'
  })] hover:text-[var(--forth-color)] transition duration-200`;
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
              item.name !== 'Cart' && item.name !== 'Login' &&
              !isMobile &&
              'after:absolute after:left-0 after:bottom-0 after:bg-[var(--forth-color)] after:w-0 after:h-0.5 hover:after:w-1/2 after:transition-all after:duration-300'
            } ${isMobile ? 'text-lg mb-4' : ''} ${
              pathname === '/' && item.name.toLowerCase() === 'home'
                ? 'after:w-1/2 text-[var(--forth-color)]'
                : pathname.slice(1) === item.name.toLowerCase()
                ? 'after:w-1/2 text-[var(--forth-color)]'
                : ''
            }`}
            onClick={onLinkClick}
          >
            <Link href={item.link}>
              {item.name === 'Cart' ? (
                <div className="flex items-center gap-1">
                  <FaCartShopping className={`${StyledLinks}`} size="25px" />
                  <span className="text-[var(--white-color)] bg-[var(--forth-color)] w-fit py-0.5 px-2 rounded-sm text-sm text-center font-bold">
                    {cartItems?.length}
                  </span>
                </div>
              ) : item.name === 'Login' ? (
                <FiUser className="" size="25px" />
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
