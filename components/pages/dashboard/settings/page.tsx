'use client';

import { Tabs } from '@/components/ui/tabs';
import TabsNavigation from '@/components/ui/display/TabsNavigation';
import AccountSettings from './Sections/AccountSettings';
import PageTitle from '@/components/atoms/PageTitle';

const SettingsPage = () => {
  const tabsData = [{ value: 'account', label: 'Account Information' }];

  return (
    <div className="space-y-6">
      <PageTitle
        title="Settings"
        description="Manage your account settings and preferences"
      />
      <Tabs defaultValue="account" className="w-full">
        <TabsNavigation tabs={tabsData} useFlexOnMobile />
        <AccountSettings />
      </Tabs>
    </div>
  );
};

export default SettingsPage;
