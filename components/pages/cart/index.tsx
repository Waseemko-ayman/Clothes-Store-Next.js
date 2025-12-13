'use client';
import React from 'react';
import ProductsTable from './Sections/ProductsTable';
import RepairServices from './Sections/RepairServices';
import ApplyCoupon from './Sections/ApplyCoupon';
import { useCartContext } from '@/context/CartContext';

const CartPage = () => {
  const { cartItems } = useCartContext();

  return (
    <>
      <RepairServices />
      <ProductsTable />
      {cartItems.length > 0 && <ApplyCoupon />}
    </>
  );
};

export default CartPage;
