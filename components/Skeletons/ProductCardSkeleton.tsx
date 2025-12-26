import React from 'react';
import { Skeleton } from '../ui/skeleton';

const ProductCardSkeleton = () => {
  return (
    <div className="relative max-w-full p-3.5 border border-gray-200 rounded-[20px] shadow-[20px_20px_34px_rgb(0, 0, 0, 0.03)]">
      <Skeleton className="max-w-full h-[259px] rounded-[20px] mb-2.5" />
      <div>
        <Skeleton className="w-[45px] h-[21px]" />
        <Skeleton className="w-[264px] h-[24px] mt-2" />
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="w-[18px] h-[18px] rounded-sm my-2" />
          ))}
        </div>

        <Skeleton className="w-[36px] h-[30px]" />
      </div>
      <Skeleton className="absolute bottom-2.5 right-2.5 w-[40px] h-[40px] rounded-full" />
    </div>
  );
};

export default ProductCardSkeleton;
