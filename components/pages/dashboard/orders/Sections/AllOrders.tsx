/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import GenericAllTable from '@/components/organism/GenericAllTable';
import { MyOrderStatuses } from '@/mock';
import React from 'react';

const AllOrders = ({
  value,
  onTabChange,
}: {
  value: string;
  onTabChange: (val: string) => void;
}) => {
  const handleOrderFilter = (rows: any[], currentFilter: string) => {
    if (currentFilter === 'all') return rows;
    return rows.filter(
      (item: any) => item.status?.toLowerCase() === currentFilter.toLowerCase()
    );
  };

  return (
    <GenericAllTable
      value={value}
      title="All Orders"
      description="Manage all Orders in one place"
      apiEndpoint="order/admin/get-orders"
      placeholder="Search for order..."
      onTabChange={onTabChange}
      showEdit={false}
      showActionsColumn={false}
      customFilter={handleOrderFilter}
      filterOptions={MyOrderStatuses.map((item) => ({
        id: item.id,
        label: item.label,
      }))}
      deleteLocation="Orders"
    />
  );
};

export default AllOrders;
