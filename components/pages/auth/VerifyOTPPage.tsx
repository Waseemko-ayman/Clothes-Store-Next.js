'use client';
import AuthTemplate from '@/components/Template/AuthTemplate';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import React, { useState } from 'react';

const OTPPage = () => {
  const [loading, setLoading] = useState(false);
  const [error] = useState('');

  const handleOTPPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Handle OTP password logic here
  };

  const formContent = (
    <div className="flex items-center justify-center mb-8">
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );

  return (
    <AuthTemplate
      headerTitle="Verify OTP"
      headerDescription="Enter the 6-digit code sent to your email"
      handleFormSubmit={handleOTPPassword}
      error={error}
      submitBtnText="Verify Code"
      loadingText="Verifying..."
      loading={loading}
      formChildren={formContent}
    />
  );
};

export default OTPPage;
