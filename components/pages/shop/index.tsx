import React from 'react';
import RepairServices from './Sections/RepairServices';
import Clothes from './Sections/Clothes';
import { ProductCardProps } from '@/interfaces';

const ShopPage = ({ products }: { products: ProductCardProps[] }) => {
  return (
    <>
      <RepairServices />
      <Clothes products={products} />
    </>
  );
};

export default ShopPage;
