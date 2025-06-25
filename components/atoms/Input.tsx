import React from 'react';

const Input = ({
  type,
  variant = 'primary',
  placeholder,
  otherClassName,
  inputName,
  ...props
}: React.PropsWithChildren<
  {
    type: 'text' | 'email' | 'textarea';
    placeholder: string;
    variant?: 'primary' | 'secondary';
    otherClassName?: string;
    inputName: string;
  } & React.HTMLAttributes<HTMLElement>
>) => {
  const StyledInput = `w-[280px] h-12 p-2.5 bg-[var(--white-color)] outline-none placeholder:transition placeholder:duration-300 transition-all duration-300 focus:placeholder:opacity-0 ${
    variant === 'primary'
      ? 'border border-[#ccc] focus:border-[var(--forth-color)] rounded-none'
      : 'border-none rounded-l-md rounded-r-none'
  } ${otherClassName}`;

  return (
    <>
      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          className={StyledInput}
          name={inputName}
          id=""
        />
      ) : (
        <input
          type={type}
          name={inputName}
          data-slot="input"
          autoComplete="off"
          placeholder={placeholder}
          className={StyledInput}
          {...props}
        />
      )}
    </>
  );
};

export default Input;
