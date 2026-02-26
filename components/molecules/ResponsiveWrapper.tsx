'use client';
import useIsMobile from '@/Hooks/useIsMobile';
import React from 'react';
import Layer from '../atoms/Layer';
import Container from '../atoms/Container';

const ResponsiveWrapper = ({
  children,
  otherClassName,
}: {
  children: React.ReactNode;
  otherClassName?: string;
}) => {
  const isMobile = useIsMobile();

  return (
    <Layer otherClassName={otherClassName}>
      {isMobile ? children : <Container>{children}</Container>}
    </Layer>
  );
};

export default ResponsiveWrapper;
