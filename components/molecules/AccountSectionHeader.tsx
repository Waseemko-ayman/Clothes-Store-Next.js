import { AccountSectionHeaderProps } from '@/interfaces';
import React from 'react';

const AccountSectionHeader = ({
  title,
  description,
  action,
}: AccountSectionHeaderProps) => {
  return (
    <div
      className={`bg-[var(--forth-color)] text-[var(--white-color)] p-4 rounded-t-lg ${
        action ? 'flex items-center justify-between' : ''
      }`}
    >
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{description}</p>
      </div>
      {action}
    </div>
  );
};

export default AccountSectionHeader;
