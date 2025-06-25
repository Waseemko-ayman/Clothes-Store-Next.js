import Image from 'next/image';
import React from 'react';
import Button from '../atoms/Button';
import { FaStar } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

interface ProductCardProps {
  imgSrc: string;
  imgText: string;
  tradeMark: string;
  productTitle: string;
  price: number;
  handleClick?: () => void;
}

const ProductCard = ({
  imgSrc,
  imgText,
  tradeMark,
  productTitle,
  price,
  handleClick,
}: ProductCardProps) => {
  return (
    <div className="relative max-w-full p-3.5 border border-[#cce7d0] rounded-[20px] shadow-[20px_20px_34px_rgb(0, 0, 0, 0.03)] hover:shadow-[10px_10px_54px_#ddd] hover:scale-[1.02] cursor-pointer transition-all duration-300">
      <Image
        src={imgSrc}
        alt={imgText}
        title={imgText}
        width={500}
        height={500}
        className="max-w-full rounded-[20px] mb-2.5"
      />
      <div>
        <span className="text-base text-[var(--first-color)]">{tradeMark}</span>
        <h4 className="text-[var(--forth-color)] text-base mt-2 font-bold">
          {productTitle}
        </h4>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} size="18px" className="text-amber-300 my-2" />
          ))}
        </div>
        <h5 className="text-[var(--forth-color)] text-lg font-bold">
          ${price}
        </h5>
      </div>
      <Button
        variant="circle"
        otherClassName="absolute bottom-2.5 right-2.5 flex items-center justify-center"
        handleClick={handleClick}
      >
        <FaCartShopping size="20px" />
      </Button>
    </div>
  );
};

export default ProductCard;
