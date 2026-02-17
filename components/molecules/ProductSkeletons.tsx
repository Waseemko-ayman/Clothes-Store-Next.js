import React from 'react';
import ProductCardSkeleton from '../Skeletons/ProductCardSkeleton';
import { ProductSkeletonsProps } from '@/interfaces';

const ProductSkeletons: React.FC<ProductSkeletonsProps> = ({ count = 8 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </>
  );
};

export default ProductSkeletons;
