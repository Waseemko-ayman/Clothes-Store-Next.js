import React from 'react';

const Container = ({
  children,
  otherClassName,
}: {
  children: React.ReactNode;
  otherClassName?: string;
}) => {
  return (
    <div
      className={`px-4 mx-auto sm:max-w-[850px] md:max-w-[1050px] lg:max-w-[1300px] ${otherClassName}`}
    >
      {children}
    </div>
  );
};

export default Container;
