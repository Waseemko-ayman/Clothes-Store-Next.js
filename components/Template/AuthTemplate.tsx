'use client';
import React, { useState } from 'react';
import AuthHeader from '../molecules/AuthHeader';
import FormErrorAlert from '../molecules/FormErrorAlert';
import Button from '../atoms/Button';
import ButtonLoading from '../atoms/ButtonLoading';
import Input from '../atoms/Input';
import { Eye, EyeOff } from 'lucide-react';
import { InputTypes } from '@/utils/types';
import { AuthTemplateProps } from '@/interfaces';

const passwordFields = [
  'password',
  'password_confirmation',
  'currentPassword',
  'newPassword',
  'confirmNewPassword',
] as const;

// Type for password field names / Converts the array to a Union Type
type PasswordField = (typeof passwordFields)[number];

const AuthTemplate: React.FC<AuthTemplateProps> = ({
  error,
  handleFormSubmit,
  headerTitle,
  headerDescription,
  formChildren,
  children,
  loadingText,
  submitBtnText,
  loading,
  fieldsTypes,
  pageName,
  otherClassName,
}) => {
  const [showPassword, setShowPassword] = useState<
    Record<PasswordField, boolean>
  >({
    password: false,
    password_confirmation: false,
    currentPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });

  const isPasswordField = (name: string): name is PasswordField =>
    passwordFields.includes(name as PasswordField);

  const toggleShow = (name: PasswordField) => {
    setShowPassword((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const getIcon = (name: string) => {
    if (!isPasswordField(name)) return undefined;
    return showPassword[name] ? EyeOff : Eye;
  };

  const getInputType = (name: string, type: string) =>
    isPasswordField(name) && showPassword[name] ? 'text' : (type as InputTypes);

  const formContent = (
    <>
      {fieldsTypes?.map((input) => {
        const { id, label, type, name, placeholder } = input;
        return (
          <Input
            key={id}
            type={getInputType(name, type)}
            label={label}
            inputName={name}
            placeholder={placeholder}
            Icon={getIcon(name)}
            onIconClick={isPasswordField(name) ? () => toggleShow(name) : undefined}
            otherClassName="w-full !rounded-md"
            iconClassName="text-[var(--forth-color)]"
            isRequired
          />
        );
      })}
    </>
  );

  return (
    <div
      className={`w-full max-w-md relative z-10 shadow-2xl border-0 overflow-hidden ${otherClassName}`}
    >
      <div className="p-5 min-[425px]:p-5 bg-white">
        {headerTitle && headerDescription && (
          <AuthHeader title={headerTitle} description={headerDescription} />
        )}

        <FormErrorAlert error={error} />

        <form onSubmit={handleFormSubmit} className="space-y-5">
          {pageName === 'signup' ||
          pageName === 'reset-password' ||
          pageName === 'update-password'
            ? formContent
            : formChildren}
          <Button
            type="submit"
            disabled={loading}
            otherClassName="w-full hover:shadow-lg disabled:opacity-50"
            // Icon={Mail}
          >
            {loading ? <ButtonLoading text={loadingText} /> : submitBtnText}
          </Button>
        </form>

        {children}
      </div>

      <div className="h-2 bg-gradient-to-r from-[var(--forth-color)] to-[var(--second-color)]"></div>
    </div>
  );
};

export default AuthTemplate;
