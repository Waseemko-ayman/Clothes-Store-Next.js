import ResetPasswordPage from '@/components/pages/auth/ResetPassword';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Reset Password - MyApp',
};

const ResetPassword = () => <ResetPasswordPage />;

export default ResetPassword;
