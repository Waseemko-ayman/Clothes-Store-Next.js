import React from 'react';
import Button from '../atoms/Button';

interface BannerProps {
  height: string;
  bgImage: string;
  subTitle: string;
  title: string;
  description?: string;
  btnText?: string;
  overlay?: boolean;
  type?: string;
}

const Banner = ({
  height,
  bgImage,
  subTitle,
  title,
  description,
  btnText,
  overlay,
  type = 'big',
}: BannerProps) => {
  const renderTitle = () =>
    type === 'big' ? (
      <>
        <h2 className="text-xl font-light">{subTitle}</h2>
        <h4 className="text-3xl font-extrabold">{title}</h4>
      </>
    ) : (
      <>
        <h2 className="text-xl font-extrabold uppercase">{subTitle}</h2>
        <h3 className="text-sm font-bold text-red-500">{title}</h3>
      </>
    );

  return (
    <div
      className={`relative text-white bg-cover bg-center max-w-full ${height} flex flex-col items-start justify-center p-8`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative flex flex-col items-start z-10">
        {renderTitle()}
        {description && type === 'big' && (
          <span className="text-sm font-medium py-3.5">{description}</span>
        )}
        {btnText && type === 'big' && (
          <Button variant="outline" borderRadius="rounded-none">
            {btnText}
          </Button>
        )}
      </div>
      {overlay && <div className="absolute inset-0 bg-black/20 z-0" />}
    </div>
  );
};

export default Banner;
