import BackgroundGradient from '@/components/molecules/BackgroundGradientWrapper';
import React, { ReactNode } from 'react';

const MainAuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative bg-[var(--first-color)] min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundGradient />
      <div className='flex items-center justify-center py-10 px-5 w-full'>
      {children}
      </div>
    </div>
  );
};

export default MainAuthLayout;
