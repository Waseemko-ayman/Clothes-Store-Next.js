'use client';
import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import { FETURES } from '@/data';
import React from 'react';
import { FocusCards } from '../ui/focus-cards';

const FeatursSec = () => {
  return (
    <Layer>
      <Container>
        <FocusCards cards={FETURES} />
      </Container>
    </Layer>
  );
};

export default FeatursSec;
