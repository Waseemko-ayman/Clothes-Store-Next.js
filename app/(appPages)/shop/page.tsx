import ShopPage from '@/components/pages/shop';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Shop - Clothes Shopping',
  description: 'Browse and purchase clothes from Clothes Shopping',
};

const Shop = () => <ShopPage />;

export default Shop;
