'use client';
import GenericPage from '@/components/organism/GenericPage';
import React from 'react';
import AllOrderItems from './AllOrderItems';

const OrderItemsPage = () => {
  const tabsData = [
    {
      value: 'AllOrderItems',
      label: 'll Products',
    },
  ];

  return (
    <GenericPage
      title="Order Products"
      description="Browse all products included in this order"
      tabs={tabsData}
      allComponent={AllOrderItems}
    />
  );
};

export default OrderItemsPage;
