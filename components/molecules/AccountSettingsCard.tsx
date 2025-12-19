import React from 'react';
import CardWrapper from '../Template/CardWrapper';
import Button from '../atoms/Button';
import { AccountSettingsCardProps } from '@/interfaces';

const AccountSettingsCard = ({
  setting,
}: {
  setting: AccountSettingsCardProps;
}) => {
  const { title, description, icon } = setting;
  const Icon = icon;
  return (
    <CardWrapper>
      <div className="flex items-center max-[426px]:flex-col gap-3">
        <Icon className="h-5 w-5 text-[var(--forth-color)]" />
        <div>
          <h3 className="font-semibold text-[var(--fifth-color)]">{title}</h3>
          <p className="text-sm text-[var(--six-color)]">{description}</p>
        </div>
      </div>
      <Button
        variant="outline"
        otherClassName="!text-[var(--forth-color)] hover:!text-white !py-2 !px-4"
      >
        Manage
      </Button>
    </CardWrapper>
  );
};

export default AccountSettingsCard;
