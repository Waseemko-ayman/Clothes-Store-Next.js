import UsersPage from '@/components/pages/dashboard/users';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Users - Wénor Dashboard',
  description:
    'Manage registered users, view profiles, and control user access in the Wénor dashboard.',
};

const Users = () => <UsersPage />;

export default Users;
