import React from 'react';
import RepairServices from './Sections/RepairServices';
import KnowUs from './Sections/KnowUs';
import FeatursSec from '@/components/organism/FeatursSec';

const AboutPage = () => {
  return (
    <>
      <RepairServices />
      <KnowUs />
      <FeatursSec />
    </>
  );
};

export default AboutPage;
