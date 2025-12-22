import { InputProps } from '@/interfaces';
import React from 'react';

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
  label,
  labelClassName = '',
  isRequired = false,
  ...props
}: React.PropsWithChildren<InputProps>) => {
  const StyledInput = `w-[280px] px-2.5 bg-[var(--white-color)] outline-none transition-all duration-300 ${
    variant === 'primary'
      ? 'border border-[var(--seven-color)] focus-within:border-[var(--forth-color)] rounded-none'
      : 'border-none rounded-l-md rounded-r-none'
  } ${otherClassName}`;

  const inputClasses = `w-full h-12 bg-transparent outline-none transition-all duration-300`;

  return (
    <>
      {label && (
        <label
          className={`block text-sm font-semibold text-[var(--seconde-color)] mb-2 ${labelClassName}`}
        >
          {label}
          {isRequired && <span className="text-red-500"> *</span>}
        </label>
      )}
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
