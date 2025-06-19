import RepairServicesComp from '@/components/molecules/RepairServicesSection';
import React from 'react';

const RepairServices = () => {
  return (
    <RepairServicesComp
      title="Repair Services"
      subTitle={
        <>
          Up to <span className="text-red-600">70% Off</span> - All t-Shirts &
          Accessories
        </>
      }
      bntText="Explore More"
      bgImage="/assets/banner/b2.jpg"
    />
  );
};

export default RepairServices;
