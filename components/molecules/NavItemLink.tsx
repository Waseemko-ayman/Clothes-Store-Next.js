'use client';
import React, { useState } from 'react';
import UserPopover from './UserPopover';
import { useCartContext } from '@/context/CartContext';
import Link from 'next/link';
import { FaCartShopping } from 'react-icons/fa6';
import { FiUser } from 'react-icons/fi';
import { NavItemLinkProps } from '@/interfaces';

const NavItemLink = ({ item, linksStyleing }: NavItemLinkProps) => {
  const [loginStatus] = useState(true); // Mocked login status

  // API Context
  const { cartItems } = useCartContext();

  return (
    <>
      {item.name === 'Login' && loginStatus ? (
        <UserPopover />
      ) : item.name === 'Cart' ? (
        <Link href={item.link}>
          <div className="flex items-center gap-1">
            <FaCartShopping
              className={`${linksStyleing} text-[var(--fifth-color)] text-base`}
              size="25px"
            />
            <span className="text-[var(--white-color)] bg-[var(--forth-color)] w-fit py-0.5 px-2 rounded-sm text-sm text-center font-bold">
              {cartItems?.length}
            </span>
          </div>
        </Link>
      ) : (
        <Link href={item.link}>
          {item.name === 'Login' ? <FiUser size="25px" /> : item.name}
        </Link>
      )}
    </>
  );
};

export default NavItemLink;
