/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductDetailsPage from '@/components/pages/shop/ProductDetails';
import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<any>;
}): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Product Details - Item ${id}`,
    description: `Details of product with ID ${id}`,
  };
}

export default async function ProductPageWrapper({
  params,
}: {
  params: Promise<any>;
}) {
  const resolvedParams = await params;

  return <ProductDetailsPage productId={resolvedParams.id} />;
}
