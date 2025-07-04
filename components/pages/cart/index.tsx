import React from 'react';
import ProductsTable from './Sections/ProductsTable';
import RepairServices from './Sections/RepairServices';

const CartPage = () => {
  return (
    <>
      <RepairServices />
      <ProductsTable />
    </>
  );
};

export default CartPage;
