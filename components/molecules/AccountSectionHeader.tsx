import { AccountSectionHeaderProps } from '@/interfaces';
import { ArrowLeft } from 'lucide-react';
import React from 'react';
import Button from '../atoms/Button';

const AccountSectionHeader = ({
  title,
  description,
  action,
  handleBack,
}: AccountSectionHeaderProps) => {
  return (
    <div
      className={`bg-(--forth-color) text-(--white-color) p-4 rounded-t-lg ${
        action ? 'flex items-center justify-between' : ''
      }`}
    >
      <div className={handleBack ? 'flex items-center gap-3' : ''}>
        {handleBack && (
          <Button
            variant="outline"
            Icon={ArrowLeft}
            aria-label="Go back"
            otherClassName="!rounded-full w-10 h-10 !p-2 border-white hover:bg-white hover:!text-(--forth-color) hover:border-white"
            handleClick={handleBack}
          />
        )}
        <div>
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      {action}
    </div>
  );
};

export default AccountSectionHeader;
