'use client';
import GenericAllTable from '@/components/organism/GenericAllTable';
import { API_URL } from '@/config/api';
import React from 'react';

const AllProducts = ({
  value,
  onTabChange,
  onEditIdChange,
}: {
  value: string;
  onTabChange: (val: string) => void;
  onEditIdChange: (id: string | number | null) => void;
}) => {
  return (
    <GenericAllTable
      value={value}
      title="All Products"
      description="Create and manage products for your store"
      apiEndpoint={`${API_URL}/clothes`}
      deleteEndpoint="product/delete"
      createTabValue="createProducts"
      placeholder="Search for product..."
      onEditIdChange={onEditIdChange}
      onTabChange={onTabChange}
      deleteLocation="Products"
    />
  );
};

export default AllProducts;
