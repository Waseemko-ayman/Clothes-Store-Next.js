/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormValues } from '@/interfaces';
import { InputTypes } from '@/utils/types';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

const Input = ({
  type,
  variant = 'primary',
  placeholder,
  otherClassName,
  inputName,
  register,
  value,
  onChange,
  Icon,
  iconClassName = 'ml-2',
  onIconClick,
  ...props
}: React.PropsWithChildren<
  {
    type: InputTypes | string;
    placeholder: string;
    variant?: 'primary' | 'secondary';
    otherClassName?: string;
    inputName: any;
    Icon?: React.ElementType;
    iconClassName?: string;
    onIconClick?: () => void;
    register?: UseFormRegister<FormValues>;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<any>) => void;
  } & React.HTMLAttributes<HTMLElement>
>) => {
  const StyledInput = `w-[280px] px-2.5 bg-[var(--white-color)] outline-none placeholder:transition placeholder:duration-300 transition-all duration-300 focus:placeholder:opacity-0 ${
    variant === 'primary'
      ? 'border border-[var(--seven-color)] focus-within:border-[var(--forth-color)] rounded-none'
      : 'border-none rounded-l-md rounded-r-none'
  } ${otherClassName}`;

  const inputClasses = `w-full h-12 bg-transparent outline-none placeholder:transition placeholder:duration-300 transition-all duration-300 focus:placeholder:opacity-0`;

  return (
    <>
      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          className={`${StyledInput} resize-none`}
          {...(typeof register === 'function' ? register(inputName) : {})}
        />
      ) : (
        <div className={`flex items-center px-3 ${StyledInput}`}>
          <input
            type={type}
            data-slot="input"
            autoComplete="off"
            placeholder={placeholder}
            className={inputClasses}
            {...(typeof register === 'function' ? register(inputName) : {})}
            onChange={onChange}
            value={value}
            {...props}
          />
          {Icon && (
            <Icon
              className={`${iconClassName} text-xl cursor-pointer`}
              onClick={onIconClick}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Input;
