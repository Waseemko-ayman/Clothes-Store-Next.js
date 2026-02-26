'use client';
import GenericAllTable from '@/components/organism/GenericAllTable';

const AllUsers = ({ value }: { value: string }) => {
  return (
    <GenericAllTable
      value={value}
      title="All Users"
      description="View and manage all registered users on your platform"
      tableName="profiles"
      placeholder="Search for email..."
      deleteLocation="Users"
      showEdit={false}
    />
  );
};

export default AllUsers;
