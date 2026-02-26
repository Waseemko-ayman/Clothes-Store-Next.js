import { AuthHeaderProps } from '@/interfaces';
import { ShoppingBag } from 'lucide-react';
import React from 'react';

const AuthHeader: React.FC<AuthHeaderProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center mb-8 text-center">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-(--forth-color)">
        <ShoppingBag className="w-8 h-8 text-white" />
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-(--fifth-color)">
        {title}
      </h1>
      <p className="text-xs md:text-sm mt-2 text-(--six-color)">
        {description}
      </p>
    </div>
  );
};

export default AuthHeader;
