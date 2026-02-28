import { NavItemProps } from '@/interfaces';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const NavItem: React.FC<NavItemProps> = ({
  Icon,
  name,
  linkPath,
  otherClassName,
  otherClassNameIcon,
  showArrow = false,
  onClick,
  isMobile,
  disablePrefetch,
}) => {
  const content = (
    <div
      onClick={onClick}
      className={`
        w-full
        flex
        items-center
        justify-between
        gap-2
        text-sm
        font-semibold
        rounded-md
        transition cursor-pointer
        hover:text-(--forth-color)
        hover:bg-[#08817912]
        px-2 py-3
        ${otherClassName}
      `}
    >
      <div className="flex items-center gap-2">
        <div
          className={
            isMobile
              ? 'flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[var(--enjoy-gray-300)]'
              : ''
          }
        >
          {Icon && (
            <Icon
              className={`text-sm text-(--forth-color) ${otherClassNameIcon}`}
            />
          )}
        </div>
        <span>{name}</span>
      </div>

      {showArrow ? <IoIosArrowForward className="text-base" /> : null}
    </div>
  );

  return linkPath ? (
    <Link href={linkPath} prefetch={!disablePrefetch}>
      {content}
    </Link>
  ) : (
    content
  );
};

export default NavItem;
