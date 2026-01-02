'use client';
import React from 'react';
import { CardHeader, CardDescription, CardTitle } from '@/components/ui/card';

const CardHeaderContent = ({
  title,
  description,
  variant = 'default',
  children,
  contentOtherClassName,
}: {
  title: string;
  description: string;
  variant?: 'default' | 'segmented';
  children?: React.ReactNode;
  contentOtherClassName?: string;
}) => {
  const MainContent = (
    <>
      <CardTitle className="mb-2">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </>
  );
  return (
    <CardHeader>
      {variant === 'segmented' || children ? (
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-between sm:space-y-0 sm:flex-row">
          <div>{MainContent}</div>
          <div className={contentOtherClassName}>{children}</div>
        </div>
      ) : (
        MainContent
      )}
    </CardHeader>
  );
};

export default CardHeaderContent;
