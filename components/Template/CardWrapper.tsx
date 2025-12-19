import React from 'react';

const CardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white border border-[var(--seven-color)] rounded-xl overflow-hidden hover:shadow-lg hover:border-[var(--forth-color)]/30 transition-all duration-300 group">
      <div className="flex items-start justify-between max-[426px]:flex-col max-[426px]:items-center max-[426px]:text-center gap-4 p-5">
        {children}
      </div>
      <div className="h-1 bg-gradient-to-r from-[var(--first-color)] via-[var(--forth-color)]/20 to-[var(--first-color)]"></div>
    </div>
  );
};

export default CardWrapper;
