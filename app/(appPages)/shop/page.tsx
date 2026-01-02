import ShopPage from '@/components/pages/shop';
import { API_URL } from '@/config/api';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Shop - Clothes Shopping',
  description: 'Browse and purchase clothes from Clothes Shopping',
};

async function getProducts() {
  const res = await fetch(`${API_URL}/clothes`, { cache: 'no-store' });
  return res.json();
}

const Shop = async () => {
  const products = await getProducts();

  return <ShopPage products={products} />;
};

export default Shop;
