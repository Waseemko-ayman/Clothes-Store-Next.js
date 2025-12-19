import AccountSectionHeader from '@/components/molecules/AccountSectionHeader';
import AccountSettingsCard from '@/components/molecules/AccountSettingsCard';
import { Bell, CreditCard, Lock } from 'lucide-react';
import React from 'react';

const SettingsData = [
  {
    id: 1,
    title: 'Email Notifications',
    description: 'Receive updates about your orders',
    icon: Bell,
  },
  {
    id: 2,
    title: 'Password',
    description: 'Change your password',
    icon: Lock,
  },
  {
    id: 3,
    title: 'Payment Methods',
    description: 'Manage your saved payment options',
    icon: CreditCard,
  },
];

const Settings = () => {
  return (
    <div className="space-y-4">
      <div className="bg-[var(--white-color)] border-[var(--seven-color)]">
        <AccountSectionHeader
          title="Account Settings"
          description="Manage your preferences and security"
        />
        <div className="pt-6 space-y-6">
          <div className="space-y-4">
            {SettingsData.map((setting) => (
              <AccountSettingsCard key={setting.id} setting={setting} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
