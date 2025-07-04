import React from 'react';
import ProductsTable from './Sections/ProductsTable';
import RepairServices from './Sections/RepairServices';
import ApplyCoupon from './Sections/ApplyCoupon';

const CartPage = () => {
  return (
    <>
      <RepairServices />
      <ProductsTable />
      <ApplyCoupon />
    </>
  );
};

export default CartPage;
