/* eslint-disable @next/next/no-img-element */
import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import React from 'react';
import {
  FaCircleChevronLeft,
  FaCircleChevronRight,
  FaTrash,
} from 'react-icons/fa6';

const tabeleData = {
  tableHeaders: ['Remove', 'Image', 'Product', 'Price', 'Quantity', 'Subtotal'],
  tabelContent: [
    {
      srcImg: 'prod1',
      productName: 'Cartoon Astronaut T-Shirts-8',
      price: 78.0,
      quantity: 1,
      subtotal: 78.0,
    },
    {
      srcImg: 'prod2',
      productName: 'Cartoon Astronaut T-Shirts-9',
      price: 85.0,
      quantity: 2,
      subtotal: 170.0,
    },
    {
      srcImg: 'prod3',
      productName: 'Cartoon Astronaut T-Shirts-10',
      price: 90.0,
      quantity: 1,
      subtotal: 90.0,
    },
  ],
};

const ProductsTable = () => {
  const commonClassName = `p-[15px] border border-[#2d2d2d80]`;
  const fullWidth = 'max-w-full w-full';
  const ArrowIconStyle =
    'text-[var(--seconde-color)] text-lg cursor-pointer transition-all hover:text-[var(--forth-color)]';

  return (
    <Layer>
      <Container otherClassName="overflow-x-auto max-[991px]:pb-5">
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
            {tabeleData.tabelContent.map((item, index) => (
              <tr key={index} className="text-[var(--seconde-color)] font-bold">
                <td className={`${commonClassName}`}>
                  <FaTrash className="mx-auto text-[var(--seconde-color)] text-lg font-black cursor-pointer transition duration-300 hover:text-red-500" />
                </td>
                <td className={`${commonClassName}`}>
                  <img
                    src={`/assets/products/${item.srcImg}.jpg`}
                    alt={item.productName}
                    className="max-w-full w-[100px] mx-auto"
                  />
                </td>
                <td className={`${commonClassName}`}>{item.productName}</td>
                <td className={`${commonClassName}`}>
                  <p
                    id={`price${index + 1}`}
                    className="relative w-fit px-2.5 my-0 mx-auto"
                  >
                    ${item.price.toFixed(2)}
                  </p>
                </td>
                <td className={`text-lg ${commonClassName}`}>
                  <div className="flex items-center justify-center gap-3">
                    <FaCircleChevronLeft className={ArrowIconStyle} />
                    <span className="mx-2.5">{item.quantity}</span>
                    <FaCircleChevronRight className={ArrowIconStyle} />
                  </div>
                </td>
                <td className={`${commonClassName}`}>
                  <p>${item.subtotal.toFixed(2)}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Layer>
  );
};

export default ProductsTable;
