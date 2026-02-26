import React from 'react';
import CardWrapper from '../Template/CardWrapper';
import Button from '../atoms/Button';
import { AccountSettingsCardProps } from '@/interfaces';

const AccountSettingsCard = ({
  setting,
  onManage,
}: {
  setting: AccountSettingsCardProps;
  onManage: (settingTitle: string) => void;
}) => {
  const { key, title, description, icon } = setting;
  const Icon = icon;
  return (
    <CardWrapper>
      <div className="flex items-center max-[426px]:flex-col gap-3">
        <Icon className="h-5 w-5 text-(--forth-color)" />
        <div>
          <h3 className="font-semibold text-(--fifth-color)">{title}</h3>
          <p className="text-sm text-(--six-color)">{description}</p>
        </div>
      </div>
      <Button
        variant="outline"
        otherClassName="!border-(--forth-color) !text-(--forth-color) hover:!text-white !py-2 !px-4"
        handleClick={() => onManage(key)}
      >
        Manage
      </Button>
    </CardWrapper>
  );
};

export default AccountSettingsCard;
