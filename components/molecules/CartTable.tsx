import { CartTableProps } from '@/interfaces';
import Image from 'next/image';
import React from 'react';
import { FaTrash } from 'react-icons/fa6';
import QuantityController from './QuantityController';

const CartTable: React.FC<CartTableProps> = ({
  tabeleData,
  updateQuantity,
  handleDelete,
}) => {
  const commonClassName = `p-[15px] border border-[#2d2d2d80]`;
  const fullWidth = 'max-w-full w-full';

  return (
    <div className="overflow-x-auto">
      <table
        className={`text-center border-spacing-0 whitespace-nowrap ${fullWidth}`}
      >
        <thead>
          <tr className={fullWidth}>
            {tabeleData.tableHeaders.map((header, index) => (
              <th
                key={index}
                className={`text-[var(--white-color)] bg-[var(--forth-color)] uppercase border-y-[var(--forth-color)] text-center ${commonClassName}`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tabeleData.tabelContent.map((item) => (
            <tr
              key={+item.id}
              className="text-[var(--seconde-color)] font-bold"
            >
              <td className={`${commonClassName}`}>
                <FaTrash
                  className="mx-auto text-[var(--seconde-color)] text-lg font-black cursor-pointer transition duration-300 hover:text-red-500"
                  onClick={() => handleDelete(item.id, item.productTitle)}
                />
              </td>
              <td className={`${commonClassName}`}>
                <Image
                  src={`/assets/products/${item.src}.jpg`}
                  alt={item.productTitle}
                  className="max-w-full w-[100px] mx-auto"
                  width={100}
                  height={100}
                />
              </td>
              <td className={`${commonClassName}`}>{item.productTitle}</td>
              <td className={`${commonClassName}`}>
                <p
                  id={`price${+item.id + 1}`}
                  className="relative w-fit px-2.5 my-0 mx-auto"
                >
                  ${item.price.toFixed(2)}
                </p>
              </td>
              <td className={`text-lg ${commonClassName}`}>
                <QuantityController
                  item={item}
                  updateQuantity={updateQuantity}
                />
              </td>
              <td className={`${commonClassName}`}>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
