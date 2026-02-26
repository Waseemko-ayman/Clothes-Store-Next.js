import { NavItemProps } from '@/interfaces';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const NavItem: React.FC<NavItemProps> = ({
  icon,
  name,
  linkPath,
  otherClassName,
  otherClassNameIcon,
  showArrow = false,
  onClick,
  isMobile,
  disablePrefetch,
}) => {
  const showIcon = (icon: React.ElementType) => {
    const Icon = icon;
    return (
      <Icon
        className={`text-sm text-(--forth-color) ${
          isMobile ? 'max-md:text-primary' : 'max-md:text-white'
        } ${otherClassNameIcon}`}
      />
    );
  };

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
        max-md:!py-3
        max-md:!pl-0
        max-md:!pr-1
        max-md:rounded-lg
        ${otherClassName}
      `}
    >
      <div className={`flex items-center gap-2 ${isMobile ? 'flex-col' : ''}`}>
        <div
          className={
            isMobile
              ? 'flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[var(--enjoy-gray-300)]'
              : ''
          }
        >
          {icon && showIcon(icon)}
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
