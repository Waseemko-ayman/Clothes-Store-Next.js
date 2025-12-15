import MainLayout from '@/components/organism/MainLayout';
import React, { ReactNode } from 'react';

const MainAppLayout = ({ children }: { children: ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default MainAppLayout;
