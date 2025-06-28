import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'outline' | 'cover' | 'circle';
  borderRadius?: string;
  otherClassName?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'submit' | 'button' | 'reset';
}

// const Button = ({ children, variant, brderRadius, ...props }: React.ComponentProps<'button'>) => {
const Button = ({
  children,
  variant,
  borderRadius = 'rounded-md',
  otherClassName = '',
  type = 'submit',
  handleClick,
}: ButtonProps) => {
  return (
    <button
      className={`${
        variant !== 'cover' ? 'py-3 px-8 hover:tracking-widest' : 'py-4 px-20'
      } cursor-pointer text-base outline-none font-semibold transition-all duration-200 ${borderRadius} ${
        variant === 'primary'
          ? 'bg-[var(--forth-color)] text-[var(--white-color)] hover:bg-[#054b46]'
          : variant === 'secondary'
          ? 'bg-[var(--white-color)] text-black hover:bg-[var(--forth-color)] hover:text-[var(--white-color)]'
          : variant === 'outline'
          ? 'bg-transparent border border-[var(--white-color)] text-[var(--white-color)] hover:bg-[var(--forth-color)] hover:text-[var(--white-color)] hover:border-[var(--forth-color)]'
          : variant === 'cover'
          ? 'bg-center bg-transparent bg-no-repeat text-[var(--forth-color)]'
          : variant === 'circle'
          ? 'w-10 h-10 !p-0 bg-[#e8f6ea] text-[var(--forth-color)] hover:bg-[var(--forth-color)] hover:text-[var(--white-color)] hover:border-[var(--white-color)] hover:rotate-[360deg] border border-[#cce7d0] !rounded-[50%] transition-all duration-200'
          : ''
      } ${otherClassName}`}
      style={{
        backgroundImage:
          variant === 'cover'
            ? 'url(/assets/landing/buttonLanding.png)'
            : 'none',
      }}
      onClick={handleClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
