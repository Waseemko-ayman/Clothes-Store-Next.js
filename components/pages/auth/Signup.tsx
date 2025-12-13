'use client';
import React from 'react';
import { useState } from 'react';
// import { supabase } from '@/lib/supabase';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Card } from '@/components/ui/card';
import { Eye, EyeOff } from 'lucide-react';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import { PATHS } from '@/mock/paths';
import AuthRedirect from '@/components/molecules/AuthRedirect';
import FormErrorAlert from '@/components/molecules/FormErrorAlert';
import BackgroundGradient from '@/components/molecules/BackgroundGradientWrapper';
import ButtonLoading from '@/components/atoms/ButtonLoading';
import { signupInputs } from '@/mock';
import { InputTypes } from '@/utils/types';
import AuthHeader from '@/components/molecules/AuthHeader';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading] = useState(false);
  const [error] = useState('');

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

  return (
    <div className="min-h-screen flex items-center justify-center p-10 relative overflow-hidden bg-[var(--first-color)]">
      <BackgroundGradient />

      <div className="w-full max-w-md relative z-10 shadow-2xl border-0 overflow-hidden">
        <div className="p-8 bg-white">
          <AuthHeader
            title="Create Your Account"
            description="Sign up to get started and enjoy all features"
          />
          <FormErrorAlert error={error} />

          <form className="space-y-6">
            {signupInputs.map((input) => {
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
                    onIconClick={
                      isPasswordField(name) ? toggleShow(name) : undefined
                    }
                    otherClassName="w-full !rounded-md"
                    iconClassName="text-[var(--forth-color)]"
                  />
                </div>
              );
            })}

            <Button
              type="submit"
              disabled={loading}
              otherClassName="w-full hover:shadow-lg disabled:opacity-50"
            >
              {loading ? <ButtonLoading text="Signing up..." /> : 'Sign Up'}
            </Button>
          </form>

          {/* Sign Up Link */}
          <AuthRedirect
            text="Already have an account?"
            linkText="Sign in"
            href={PATHS.AUTH.LOGIN}
          />
        </div>

        <div className="h-2 bg-gradient-to-r from-[var(--forth-color)] to-[var(--second-color)]"></div>
      </div>
    </div>
  );
};

export default SignupPage;
