/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputProps } from '@/interfaces';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import React from 'react';
import { Controller } from 'react-hook-form';

const animatedComponents = makeAnimated();

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
          {...(typeof register === 'function' ? register(inputName) : {})}
        />
      ) : isMulti && control ? (
        <Controller
          name={inputName}
          control={control}
          render={({ field }) => {
            const selectOptions = options.map((opt) => ({
              label: opt,
              value: opt,
            }));
            return (
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={selectOptions}
                value={selectOptions.filter((opt) =>
                  Array.isArray(field.value)
                    ? field.value.includes(opt.value)
                    : false
                )}
                onChange={(selected: any) =>
                  field.onChange(
                    selected ? selected.map((sel: any) => sel.value) : []
                  )
                }
                placeholder={SelectValuePlaceholder}
                isDisabled={disabled}
                getOptionValue={(option: any) => option.value}
                getOptionLabel={(option: any) => option.label}
                className="mt-2"
                classNamePrefix="custom"
                styles={{
                  control: (base: any) => ({ ...base, cursor: 'pointer' }),
                  option: (base: any) => ({ ...base, cursor: 'pointer' }),
                  multiValueRemove: (base: any) => ({
                    ...base,
                    cursor: 'pointer',
                  }),
                  menuPortal: (base: any) => ({ ...base, zIndex: 9999 }),
                  menu: (base: any) => ({ ...base, zIndex: 9999 }),
                }}
                menuPlacement="auto"
                maxMenuHeight={240}
              />
            );
          }}
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
      {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}{' '}
    </div>
  );
};

export default Input;
