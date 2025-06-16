import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'outline' | 'cover';
  borderRadius?: string;
  otherClassName?: string;
}

// const Button = ({ children, variant, brderRadius, ...props }: React.ComponentProps<'button'>) => {
const Button = ({
  children,
  variant,
  borderRadius = 'rounded-md',
  otherClassName = '',
}: ButtonProps) => {
  return (
    <button
      className={`${
        variant !== 'cover' ? 'py-2 px-8 hover:tracking-widest' : 'py-4 px-20'
      } cursor-pointer text-base outline-none font-semibold transition-all duration-200 ${borderRadius} ${
        variant === 'primary'
          ? 'bg-[#088178] text-white hover:bg-white hover:text-[#088178]'
          : variant === 'secondary'
          ? 'bg-white text-black hover:bg-[#088178] hover:text-white'
          : variant === 'outline'
          ? 'bg-transparent border border-white text-white hover:bg-[#088178] hover:text-white'
          : variant === 'cover'
          ? 'bg-center bg-transparent bg-no-repeat text-[#088178]'
          : ''
      } ${otherClassName}`}
      style={{
        backgroundImage:
          variant === 'cover'
            ? 'url(/assets/landing/buttonLanding.png)'
            : 'none',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
