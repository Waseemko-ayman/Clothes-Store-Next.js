import { toast, ToastOptions } from 'react-toastify';
import useIsMobile from '@/Hooks/useIsMobile';
import { ToastType } from '@/utils/types';

export const useToast = () => {
  const isMobile = useIsMobile();
  const getBaseConfig = (): ToastOptions => ({
    position: isMobile ? 'top-center' : 'top-right',
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: true,
    className:
      '!max-w-[90vw] !w-auto !min-w-[250px] sm:!min-w-[300px] !z-[9999]',
    style: {
      top: isMobile ? '40px' : undefined,
    },
    // ...(isArabic && { rtl: true }),
  });

  const showToast = (message: string, type: ToastType = 'success') => {
    const config = getBaseConfig();
    toast[type](message, config);
  };

  return { showToast };
};
