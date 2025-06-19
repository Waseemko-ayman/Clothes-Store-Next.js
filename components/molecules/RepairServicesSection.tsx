import Button from '@/components/atoms/Button';
import React from 'react';
import Layer from '../atoms/Layer';

interface RepairServicesProps {
  title: string;
  subTitle?: React.ReactNode;
  description?: string;
  bntText?: string;
  bgImage: string;
}

const RepairServicesComp = ({
  title,
  subTitle,
  description,
  bntText,
  bgImage,
}: RepairServicesProps) => {
  return (
    <Layer
      otherClassName="min-h-[40vh] bg-no-repeat bg-center bg-cover text-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='font-bold'>
        <h2 className="text-xl text-white">{title}</h2>
        {subTitle && <h4 className="text-3xl md:text-5xl text-white my-5">{subTitle}</h4>}
        {description && <p>{description}</p>}
        {bntText && <Button variant="secondary">{bntText}</Button>}
      </div>
    </Layer>
  );
};

export default RepairServicesComp;
