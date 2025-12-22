'use client';
import AuthTemplate from '@/components/Template/AuthTemplate';
import CardWrapper from '@/components/Template/CardWrapper';
import { passSettingsInputs } from '@/mock';
import React, { useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const PasswordSettings = () => {
  const [loading] = useState(false);
  const [error] = useState('');

  return (
    <div>
      <AuthTemplate
        otherClassName="mt-6 !max-w-full rounded-xl"
        error={error}
        submitBtnText="Update Password"
        loadingText="Update Password..."
        loading={loading}
        fieldsTypes={passSettingsInputs}
        pageName="update-password"
      />
      <CardWrapper otherClassName="!bg-gray-100 mt-8">
        <div className="flex items-start gap-2">
          <FaExclamationTriangle className="text-yellow-500" size="20" />
          <p className="text-sm text-gray-500">
            <span className="text-black font-semibold">Security Tip:</span>{' '}
            Choose a strong password that you don&rsquo;t use elsewhere.
            Consider using a password manager to keep your accounts secure.
          </p>
        </div>
      </CardWrapper>
    </div>
  );
};

export default PasswordSettings;
