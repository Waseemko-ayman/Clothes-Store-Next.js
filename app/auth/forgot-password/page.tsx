import ForgotPasswordPage from '@/components/pages/auth/ForgotPassword';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Forget Password - MyApp',
};

const ForgotPassword = () => <ForgotPasswordPage />;

export default ForgotPassword;
