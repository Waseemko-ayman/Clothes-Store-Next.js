import SignupPage from '@/components/pages/auth/Signup';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Signup - Wénor Shop',
};

const Signup = () => <SignupPage />;

export default Signup;
