'use client';
import React, { useState } from 'react';
import BackgroundGradient from '../molecules/BackgroundGradientWrapper';
import AuthHeader from '../molecules/AuthHeader';
import FormErrorAlert from '../molecules/FormErrorAlert';
import Button from '../atoms/Button';
import ButtonLoading from '../atoms/ButtonLoading';
import Input from '../atoms/Input';
import { Eye, EyeOff } from 'lucide-react';
import { InputTypes } from '@/utils/types';
import { FieldType } from '@/interfaces';

export interface AuthTemplateProps {
  error: string;
  handleFormSubmit?: (e: React.FormEvent) => Promise<void>;
  paddingSize?: string;
  headerTitle: string;
  headerDescription: string;
  formChildren?: React.ReactNode;
  children?: React.ReactNode;
  loadingText: string;
  submitBtnText: string;
  loading: boolean;
  fieldsTypes?: FieldType[];
  pageName?: string;
}

const AuthTemplate: React.FC<AuthTemplateProps> = ({
  paddingSize = 'p-4',
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
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isPasswordField = (name: string) =>
    name === 'password' || name === 'password_confirmation';

  const getShowState = (name: string) =>
    name === 'password' ? showPassword : showConfirmPassword;

  const toggleShow = (name: string) =>
    name === 'password'
      ? () => setShowPassword((prev) => !prev)
      : () => setShowConfirmPassword((prev) => !prev);

  const getIcon = (name: string) => {
    if (!isPasswordField(name)) return undefined;
    return getShowState(name) ? EyeOff : Eye;
  };

  const getInputType = (name: string, type: string) =>
    isPasswordField(name) && getShowState(name) ? 'text' : (type as InputTypes);

  const formContent = (
    <>
      {fieldsTypes?.map((input) => {
        const { id, label, type, name, placeholder } = input;
        return (
          <div key={id} className="space-y-2 flex flex-col">
            <label htmlFor={name} className="text-[var(--fifth-color)]">
              {label}
            </label>
            <Input
              type={getInputType(name, type)}
              placeholder={placeholder}
              inputName={name}
              Icon={getIcon(name)}
              onIconClick={isPasswordField(name) ? toggleShow(name) : undefined}
              otherClassName="w-full !rounded-md"
              iconClassName="text-[var(--forth-color)]"
            />
          </div>
        );
      })}
    </>
  );

  return (
    <div
      className={`bg-[var(--first-color)] min-h-[87vh] flex items-center justify-center relative overflow-hidden ${paddingSize}`}
    >
      <BackgroundGradient />

      <div className="w-full max-w-md relative z-10 shadow-2xl border-0 overflow-hidden">
        <div className="p-8 bg-white">
          <AuthHeader title={headerTitle} description={headerDescription} />
          <FormErrorAlert error={error} />

          <form onSubmit={handleFormSubmit} className="space-y-5">
            {pageName === 'signup' || pageName === 'reset-password'
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
    </div>
  );
};

export default AuthTemplate;
