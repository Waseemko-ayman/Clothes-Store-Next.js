'use client';

import React from 'react';
import CustomDrawer from '../molecules/CustomDrawer';
import CustomDialog from '../molecules/CustomDialog';
import { ResponsiveDialogDrawerProps } from '@/interfaces';

const ResponsiveDialogDrawer: React.FC<ResponsiveDialogDrawerProps> = ({
  open,
  setOpen,
  trigger,
  children,
  contentClassName,
  isMobile,
}) => {
  const Component = isMobile ? CustomDrawer : CustomDialog;

  const title = 'Wénor Shop';
  const description = 'Wénor Shop – Your style, your way';

  return (
    <Component
      open={open}
      setOpen={setOpen}
      trigger={trigger}
      title={title}
      description={description}
      contentClassName={contentClassName}
      headerClassName="p-0"
    >
      {children}
    </Component>
  );
};

export default ResponsiveDialogDrawer;
