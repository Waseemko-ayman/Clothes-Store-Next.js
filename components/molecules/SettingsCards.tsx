import React from 'react';
import AccountSettingsCard from './AccountSettingsCard';
import { SettingsData } from '@/mock';
import { SettingsStateProps } from '@/interfaces';

const SettingsCards = ({
  handleManage,
}: {
  handleManage: (data: SettingsStateProps) => void;
}) => {
  return (
    <div className="pt-6 space-y-6">
      <div className="space-y-4">
        {SettingsData.map((setting) => (
          <AccountSettingsCard
            key={setting.id}
            setting={setting}
            onManage={() =>
              handleManage({
                key: setting.key,
                title: setting.title,
                description: setting.description,
              })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default SettingsCards;
