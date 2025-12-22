import React, { forwardRef, Ref } from 'react';
import Link from 'next/link';
import { ButtonProps } from '@/interfaces';

const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps & { href?: string }
>(
  (
    {
      children,
      variant = 'primary',
      borderRadius = 'rounded-md',
      otherClassName = '',
      type = 'submit',
      handleClick,
      Icon,
      iconPosition = 'left',
      disabled = false,
      href,
      iconClassName,
      // bgColor,
      // hoverBgColor,
      ...props
    },
    ref
  ) => {
    const classes = `${
      // variant !== 'cover' ? 'py-3 px-8 hover:tracking-widest' : 'py-4 px-20'
      variant !== 'cover' ? 'py-3 px-8' : 'py-4 px-20'
    } cursor-pointer text-base outline-none font-semibold transition-all duration-200 ${borderRadius} ${
      variant === 'primary'
        ? 'bg-[var(--forth-color)] text-[var(--white-color)] hover:bg-[#054b46]'
        : variant === 'secondary'
        ? 'bg-[var(--white-color)] text-black hover:bg-[var(--forth-color)] hover:text-[var(--white-color)]'
        : variant === 'outline'
        ? 'bg-transparent border border-[var(--forth-color)] text-[var(--white-color)] hover:bg-[var(--forth-color)] hover:text-[var(--white-color)] hover:border-[var(--forth-color)]'
        : variant === 'cover'
        ? 'bg-center bg-transparent bg-no-repeat text-[var(--forth-color)]'
        : variant === 'circle'
        ? 'w-10 h-10 !p-0 bg-[#e8f6ea] text-[var(--forth-color)] hover:bg-[var(--forth-color)] hover:text-[var(--white-color)] hover:border-[var(--white-color)] hover:rotate-[360deg] border border-[#cce7d0] !rounded-[50%] transition-all duration-200'
        : variant === 'ghost'
        ? 'text-[var(--forth-color)] hover:bg-gray-200'
        : ''
    } ${Icon ? 'flex items-center gap-2' : ''} ${otherClassName}`;

    const content = (
      <>
        {iconPosition === 'left' && Icon && <Icon className={iconClassName} />}
        {children}
        {iconPosition === 'right' && Icon && <Icon className={iconClassName} />}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          ref={ref as Ref<HTMLAnchorElement>}
          className={classes}
          style={{
            backgroundImage:
              variant === 'cover'
                ? 'url(/assets/landing/buttonLanding.png)'
                : 'none',
          }}
          {...props}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        className={classes}
        onClick={handleClick}
        type={type}
        disabled={disabled}
        style={{
          backgroundImage:
            variant === 'cover'
              ? 'url(/assets/landing/buttonLanding.png)'
              : 'none',
        }}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
