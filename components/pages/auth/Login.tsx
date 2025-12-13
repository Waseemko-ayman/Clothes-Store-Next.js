'use client';
import { useState } from 'react';
import Link from 'next/link';
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
import { loginInputs } from '@/mock';
import { InputTypes } from '@/utils/types';
import AuthHeader from '@/components/molecules/AuthHeader';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading] = useState(false);
  const [error] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleShowPass = () => {
    setShowPassword(!showPassword);
  };

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     const { data, error } = await supabase.auth.signInWithPassword({
  //       email,
  //       password,
  //     });

  //     if (error) throw error;

  //     router.push('/');
  //     router.refresh();
  //   } catch (error: any) {
  //     setError(error.message || 'Failed to login');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-[var(--first-color)]">
      <BackgroundGradient />

      <div className="w-full max-w-md relative z-10 shadow-2xl border-0 overflow-hidden">
        <div className="p-8 bg-white">
          <AuthHeader
            title="Welcome Back"
            description="Sign in to your account to continue"
          />
          <FormErrorAlert error={error} />

          <form className="space-y-6">
            {loginInputs.map((input) => {
              const { id, label, type, name, placeholder } = input;
              const isPasswordField = name === 'password';
              const showPasswordIcon = isPasswordField
                ? showPassword
                  ? EyeOff
                  : Eye
                : undefined;
              return (
                <div key={id} className="space-y-2 flex flex-col">
                  <label htmlFor={name} className="text-[var(--fifth-color)]">
                    {label}
                  </label>
                  <Input
                    type={
                      isPasswordField
                        ? showPassword
                          ? 'text'
                          : 'password'
                        : (input.type as InputTypes)
                    }
                    placeholder={placeholder}
                    inputName={name}
                    value={type === 'email' ? email : password}
                    onChange={
                      type === 'email'
                        ? handleEmailChange
                        : handlePasswordChange
                    }
                    otherClassName="w-full !rounded-md"
                    Icon={showPasswordIcon}
                    iconClassName="text-[var(--forth-color)]"
                    onIconClick={handleShowPass}
                  />
                </div>
              );
            })}

            <div className="flex items-center justify-end">
              <Link
                href={PATHS.AUTH.FORGOT_PASSWORD}
                className="text-sm hover:underline transition-colors text-[var(--forth-color)]"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={loading}
              otherClassName="w-full hover:shadow-lg disabled:opacity-50"
            >
              {loading ? <ButtonLoading text="Signing in..." /> : 'Sign In'}
            </Button>
          </form>

          {/* Sign Up Link */}
          <AuthRedirect
            text="Don’t have an account?"
            linkText="Create account"
            href={PATHS.AUTH.SIGNUP}
          />
        </div>

        <div className="h-2 bg-gradient-to-r from-[var(--forth-color)] to-[var(--second-color)]"></div>
      </div>
    </div>
  );
};

export default LoginPage;
