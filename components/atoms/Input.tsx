import { InputProps } from '@/interfaces';
import React from 'react';
import { Controller } from 'react-hook-form';
import MultiSelectInput from '../molecules/MultiSelectInput';

const Input = ({
  type,
  variant = 'primary',
  placeholder,
  otherClassName,
  inputName,
  register,
  error,
  control,
  isMulti,
  value,
  onChange,
  Icon,
  options = [],
  iconClassName = 'ml-2',
  SelectValuePlaceholder = 'select...',
  disabled,
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

  const ariaLabel = label || placeholder || inputName;

  const handleKeyboardClick =
    (callback?: () => void) => (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        callback?.();
      }
    };

  return (
    <div>
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
          aria-label={ariaLabel}
          {...(typeof register === 'function' ? register(inputName) : {})}
        />
      ) : isMulti && control ? (
        <MultiSelectInput
          inputName={inputName}
          control={control}
          options={options}
          placeholder={SelectValuePlaceholder}
          disabled={disabled}
        />
      ) : (
        <div className={`flex items-center px-3 ${StyledInput}`}>
          {control ? (
            <Controller
              name={inputName}
              control={control}
              render={({ field }) => (
                <input
                  type={type}
                  data-slot="input"
                  autoComplete="off"
                  placeholder={placeholder}
                  aria-label={ariaLabel}
                  className={inputClasses}
                  {...props}
                  {...field}
                />
              )}
            />
          ) : (
            <input
              type={type}
              data-slot="input"
              autoComplete="off"
              placeholder={placeholder}
              className={inputClasses}
              aria-label={ariaLabel}
              {...(typeof register === 'function' ? register(inputName) : {})}
              onChange={onChange}
              value={value}
              {...props}
            />
          )}
          {Icon && (
            <Icon
              role="button"
              tabIndex={0}
              aria-label="Input action"
              className={`${iconClassName} text-xl cursor-pointer`}
              onClick={onIconClick}
              onKeyDown={handleKeyboardClick(onIconClick)}
            />
          )}
        </div>
      )}
      {error && error[inputName] && (
        <p className="text-sm text-red-500 mt-1">{error[inputName].message}</p>
      )}
    </div>
  );
};

export default Input;
