import { FOOTER_LINKS_DATA } from '@/mock';
import Link from 'next/link';
import React from 'react';

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
  const StyledHeading = 'text-base font-bold mb-3.5';
  return (
    <>
      <h4 className={StyledHeading}>{secTitle}</h4>
      <ul className={listClassName}>
        {FOOTER_LINKS_DATA[listName].map((item) => (
          <li
            key={item.id}
            className={`py-1 ${otherClassName ? otherClassName : ''}`}
          >
            <Link
              href={item.url}
              target="_blank"
              className="text-[#465b52] hover:pl-1 transition-all duration-300"
            >
              {/* By type guard To check if an item is of a type that contains icon or text */}
              {'icon' in item ? (
                <item.icon className="text-[#088178] text-lg" />
              ) : (
                item.text
              )}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterLinks;
