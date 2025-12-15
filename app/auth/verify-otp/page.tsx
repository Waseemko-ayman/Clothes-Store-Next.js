import VerifyOTPPage from '@/components/pages/auth/VerifyOTPPage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Verify OTP - Clothes Shopping',
  description: 'Verify your one-time password to access your account.',
  robots: 'noindex, nofollow', // Archiving and link tracking are prohibited
};

const OTP = () => <VerifyOTPPage />;

export default OTP;
