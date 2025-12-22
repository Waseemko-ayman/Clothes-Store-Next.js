'use client';
import AccountSectionHeader from '@/components/molecules/AccountSectionHeader';
import SettingsCards from '@/components/molecules/SettingsCards';
import React, { useState } from 'react';
import PasswordSettings from './PasswordSettings';
import { SettingsStateProps } from '@/interfaces';

const contentMap: { [key: string]: React.ReactNode } = {
  emailNotifications: <p>Email Notifications</p>,
  password: <PasswordSettings />,
  paymentMethods: <p>Payment Methods</p>,
};

const Settings = () => {
  const [currentSetting, setCurrentSetting] =
    useState<SettingsStateProps | null>(null);

  const handleManage = (data: SettingsStateProps) => {
    setCurrentSetting(data);
  };

  return (
    <div className="space-y-4">
      <div className="bg-[var(--white-color)] border-[var(--seven-color)]">
        <AccountSectionHeader
          title={currentSetting ? currentSetting.title : 'Account Settings'}
          description={
            currentSetting
              ? currentSetting.description
              : 'Manage your preferences and security'
          }
          handleBack={
            currentSetting ? () => setCurrentSetting(null) : undefined
          }
        />
        {currentSetting ? (
          contentMap[currentSetting.key]
        ) : (
          <SettingsCards handleManage={handleManage} />
        )}
      </div>
    </div>
  );
};

export default Settings;
