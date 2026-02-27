import GenericPage from '@/components/organism/GenericPage';
import AllUsers from './AllUsers';

const UsersPage = () => {
  const tabsData = [{ value: 'allUsers', label: 'All Users' }];

  return (
    <GenericPage
      title="Registered Users"
      description="View and manage all registered users on your platform"
      tabs={tabsData}
      allComponent={AllUsers}
    />
  );
};

export default UsersPage;
