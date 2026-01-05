import ProductsPage from '@/components/pages/dashboard/products';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Products - Dashboard',
};

const Products = () => <ProductsPage />;

export default Products;
