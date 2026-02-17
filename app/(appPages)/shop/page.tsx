import ShopPage from '@/components/pages/shop';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Shop - Clothes Shopping',
  description: 'Browse and purchase clothes from Clothes Shopping',
};

// async function getProducts() {
//   const res = await supabase.from('products').select();
//   return res;
// }

const Shop = async () => {
  // const { data: products } = await getProducts();

  // return <ShopPage products={products ?? []} />;
  return <ShopPage />;
};

export default Shop;
