'use client';
import GenericAllTable from '@/components/organism/GenericAllTable';
import { API_URL } from '@/config/api';
import React from 'react';

const AllRatings = ({
  value,
  onTabChange,
}: {
  value: string;
  onTabChange: (val: string) => void;
}) => {
  return (
    <GenericAllTable
      value={value}
      title="All Ratings"
      description="Manage all ratings in one place"
      apiEndpoint={`${API_URL}/ratings`}
      deleteEndpoint="rating/delete"
      placeholder="Search for rating..."
      onTabChange={onTabChange}
      showEdit={false}
      deleteLocation="Ratings"
    />
  );
};

export default AllRatings;
