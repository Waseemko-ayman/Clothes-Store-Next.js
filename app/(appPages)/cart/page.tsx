import CartPage from '@/components/pages/cart';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Cart - Clothes Shopping',
  description: 'View your shopping cart and proceed to checkout',
};

const Cart = () => <CartPage />;

export default Cart;
