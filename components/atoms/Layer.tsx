'use client';
import React from 'react';

const Layer = ({
  children,
  otherClassName,
  ...props
}: React.PropsWithChildren<
  {
    children: React.ReactNode;
    otherClassName?: string;
  } & React.HTMLAttributes<HTMLElement>
>) => {
  return (
    <div
      className={`relative py-12 ${otherClassName ? otherClassName : ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Layer;
