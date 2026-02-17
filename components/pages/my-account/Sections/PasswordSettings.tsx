'use client';
import NoticeCard from '@/components/molecules/NoticeCard';
import AuthTemplate from '@/components/Template/AuthTemplate';
import { passSettingsInputs } from '@/data';
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
      />
      <NoticeCard
        icon={<FaExclamationTriangle className="text-yellow-500" size={20} />}
      >
        <span className="text-black font-semibold">Security Tip:</span> Choose a
        strong password that you don&rsquo;t use elsewhere. Consider using a
        password manager to keep your accounts secure.
      </NoticeCard>
    </div>
  );
};

export default PasswordSettings;
