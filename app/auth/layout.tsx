import MainAuthLayout from '@/components/organism/Layouts/MainAuthLayout';
import React, { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <MainAuthLayout>{children}</MainAuthLayout>;
};

export default AuthLayout;
