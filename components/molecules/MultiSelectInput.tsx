/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Controller } from 'react-hook-form';
import { MultiSelectInputProps } from '@/interfaces';

const animatedComponents = makeAnimated();

const MultiSelectInput: React.FC<MultiSelectInputProps> = ({
  inputName,
  control,
  options,
  placeholder = 'Select...',
  disabled = false,
}) => {
  return (
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
                : false,
            )}
            onChange={(selected) =>
              field.onChange(
                selected ? selected.map((sel: any) => sel.value) : [],
              )
            }
            placeholder={placeholder}
            isDisabled={disabled}
            getOptionValue={(option: any) => option.value}
            getOptionLabel={(option: any) => option.label}
            className="mt-2"
            classNamePrefix="custom"
            styles={{
              control: (base) => ({ ...base, cursor: 'pointer', height: 48 }),
              option: (base) => ({ ...base, cursor: 'pointer' }),
              multiValueRemove: (base) => ({ ...base, cursor: 'pointer' }),
              menuPortal: (base) => ({ ...base, zIndex: 9999 }),
              menu: (base) => ({ ...base, zIndex: 9999 }),
            }}
            menuPlacement="auto"
            maxMenuHeight={240}
          />
        );
      }}
    />
  );
};

export default MultiSelectInput;
