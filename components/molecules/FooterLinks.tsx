'use client';
import React from 'react';
import { FOOTER_LINKS_DATA } from '@/data';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SecondaryHeading from '../atoms/SecondaryHeading';

interface FooterLinksProps {
  secTitle: string;
  listClassName?: string;
  listName: 'followUs' | 'About' | 'myAccount';
  otherClassName?: string;
}

const FooterLinks = ({
  secTitle,
  listClassName,
  listName,
  otherClassName,
}: FooterLinksProps) => {
  return (
    <>
      <SecondaryHeading title={secTitle} />
      <ul className={listClassName}>
        {FOOTER_LINKS_DATA[listName].map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`py-1 ${otherClassName ? otherClassName : ''}`}
          >
            <Link
              href={item.url}
              className="text-[var(--seconde-color)] hover:pl-1 transition-all duration-300"
            >
              {/* By type guard To check if an item is of a type that contains icon or text */}
              {'icon' in item ? (
                <item.icon className="text-[var(--forth-color)] text-lg" />
              ) : (
                item.text
              )}
            </Link>
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export default FooterLinks;
