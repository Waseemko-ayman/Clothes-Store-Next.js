import { ProductCardProps } from '@/interfaces';
import Image from 'next/image';
import React from 'react';

const PrdocutGallery = ({
  productDetails,
  setTargetSrc,
}: {
  productDetails: ProductCardProps | null;
  setTargetSrc: (src: string) => void;
}) => {
  return (
    <div className="flex justify-between flex-wrap gap-1 max-w-full w-full my-2.5 mx-auto max-md:justify-center">
      {productDetails?.gallery?.map((src: string, index: number) => (
        <Image
          key={index}
          src={`/assets/products/${src}.jpg`}
          alt={productDetails.title || 'Product image'}
          className="max-w-full shrink-0 w-[120px] cursor-pointer rounded-sm max-md:w-[100px] hover:scale-[1.1] transition duration-300"
          onClick={() => setTargetSrc(src)}
          width={120}
          height={120}
        />
      ))}
    </div>
  );
};

export default PrdocutGallery;
