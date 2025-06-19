import React from 'react';

interface MainTitleProps {
  title: string;
  description: string;
}

const MainTitle = ({ title, description }: MainTitleProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="sm:text-4xl md:text-5xl font-bold text-[#222]">{title}</h2>
      <p className="text-base text-[#465b52] mt-3.5 mb-5">{description}</p>
    </div>
  );
};

export default MainTitle;
