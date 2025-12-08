import React from 'react';
import { FaSpinner } from 'react-icons/fa6';

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-[var(--seconde-color)]">
      <div className="flex flex-col items-center gap-4 animate-pulse">
        <FaSpinner className="text-4xl animate-spin text-[var(--forth-color)]" />
        <p className="text-xl font-medium tracking-widest">
          Loading fashion...
        </p>
      </div>
    </div>
  );
};

export default Loading;
