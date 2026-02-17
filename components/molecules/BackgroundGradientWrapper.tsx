import React from 'react';

type Props = {
  opacity?: number;
};

const BackgroundGradient = ({ opacity = 0.25 }: Props) => {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ backgroundColor: `rgba(8, 129, 120, ${opacity})` }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full translate-x-1/3 translate-y-1/3"
        style={{ backgroundColor: `rgba(8, 129, 120, ${opacity * 0.7})` }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full"
        style={{ backgroundColor: `rgba(8, 129, 120, ${opacity * 0.85})` }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full"
        style={{ backgroundColor: `rgba(8, 129, 120, ${opacity * 0.7})` }}
      />
    </div>
  );
};

export default BackgroundGradient;
