'use client';
import React from 'react';
import { useState } from 'react';
// import { supabase } from '@/lib/supabase';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Card } from '@/components/ui/card';
import { PATHS } from '@/mock/paths';
import AuthRedirect from '@/components/molecules/AuthRedirect';
import AuthTemplate from '@/components/Template/AuthTemplate';
import { signupInputs } from '@/mock';

const SignupPage = () => {
  const [loading] = useState(false);
  const [error] = useState('');

  return (
    <AuthTemplate
      headerTitle="Create Your Account"
      headerDescription="Sign up to get started and enjoy all features"
      error={error}
      submitBtnText="Sign Up"
      loadingText="Signing up..."
      loading={loading}
      fieldsTypes={signupInputs}
      pageName="signup"
    >
      <AuthRedirect
        text="Already have an account?"
        linkText="Sign in"
        href={PATHS.AUTH.LOGIN}
      />
    </AuthTemplate>
  );
};

export default SignupPage;
