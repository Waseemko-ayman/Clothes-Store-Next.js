import { ButtonTrashProps } from '@/interfaces';
import React, { FC } from 'react';
import Button from '../atoms/Button';
import { FaTrash } from 'react-icons/fa6';

const ButtonTrash: FC<ButtonTrashProps> = ({
  handleClick,
  variant = 'circle',
  otherClassName = '',
  ariaLabel,
}) => {
  return (
    <Button
      variant={variant}
      handleClick={handleClick}
      otherClassName={`flex items-center justify-center ${otherClassName}`}
      aria-label={ariaLabel}
    >
      <FaTrash className="text-red-500 group-hover:text-white transition-colors duration-300" />
    </Button>
  );
};

export default ButtonTrash;
