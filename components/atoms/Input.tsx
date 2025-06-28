import FormValues from '@/interfaces/FormValue';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

const Input = ({
  type,
  variant = 'primary',
  placeholder,
  otherClassName,
  inputName,
  register,
  ...props
}: React.PropsWithChildren<
  {
    type: 'text' | 'email' | 'textarea';
    placeholder: string;
    variant?: 'primary' | 'secondary';
    otherClassName?: string;
    inputName: keyof FormValues;
    register: UseFormRegister<FormValues>;
  } & React.HTMLAttributes<HTMLElement>
>) => {
  const StyledInput = `w-[280px] h-12 p-2.5 bg-[var(--white-color)] outline-none placeholder:transition placeholder:duration-300 transition-all duration-300 focus:placeholder:opacity-0 ${
    variant === 'primary'
      ? 'border border-[var(--seven-color)] focus:border-[var(--forth-color)] rounded-none'
      : 'border-none rounded-l-md rounded-r-none'
  } ${otherClassName}`;

  return (
    <>
      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          className={`${StyledInput} resize-none`}
          {...(typeof register === 'function' ? register(inputName) : {})}
        />
      ) : (
        <input
          type={type}
          data-slot="input"
          autoComplete="off"
          placeholder={placeholder}
          className={StyledInput}
          {...(typeof register === 'function' ? register(inputName) : {})}
          {...props}
        />
      )}
    </>
  );
};

export default Input;
