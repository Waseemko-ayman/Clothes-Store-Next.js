import BackgroundGradient from '@/components/molecules/BackgroundGradientWrapper';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

const MainAuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="relative bg-(--first-color) min-h-screen flex items-center justify-center overflow-hidden">
        <BackgroundGradient />
        <div className="flex items-center justify-center py-10 px-5 w-full">
          {children}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default MainAuthLayout;
