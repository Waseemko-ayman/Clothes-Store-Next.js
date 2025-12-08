import { QuantityControllerProps } from '@/interfaces';
import React from 'react';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';

const QuantityController: React.FC<QuantityControllerProps> = ({
  otherClassName,
  item,
  updateQuantity,
}) => {
  const key = Number(item.id) ?? item.slug;
  const ArrowIconStyle =
    'text-[var(--seconde-color)] text-lg cursor-pointer transition-all hover:text-[var(--forth-color)]';

  return (
    <div className={`flex items-center justify-center gap-3 ${otherClassName}`}>
      <FaCircleChevronLeft
        className={ArrowIconStyle}
        onClick={() => {
          if (key !== undefined) {
            updateQuantity(key, (item.quantity ?? 1) - 1);
          }
        }}
      />
      <span className="text-[var(--seconde-color)] font-bold mx-2.5">
        {item.quantity}
      </span>
      <FaCircleChevronRight
        className={ArrowIconStyle}
        onClick={() => {
          if (key !== undefined) {
            updateQuantity(key, (item.quantity ?? 1) + 1);
          }
        }}
      />
    </div>
  );
};

export default QuantityController;
