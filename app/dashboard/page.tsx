import DashboardPage from '@/components/pages/dashboard';

const Dashboard = () => {
  // const router = useRouter();
  // // Get User Information
  // const { user, isLoading } = useUserInfo();

  // useEffect(() => {
  //   if (isLoading || !user) return;

  //   const isAdmin = user?.is_admin || user?.roles?.includes('admin');

  //   // If Admin -> Logs in directly
  //   if (isAdmin) return;

  //   // If Manage Orders -> Logs in to the main dashboard page
  //   if (user?.permissions?.includes('manage orders')) return;

  //   // Otherwise -> Goes to the first page he has access to
  //   if (user?.permissions?.length) {
  //     const firstAllowed = Object.entries(linkPermissionMap).find(([, perm]) =>
  //       user?.permissions?.includes(perm)
  //     );

  //     if (firstAllowed) {
  //       router.replace(`/dashboard/${firstAllowed[0]}`);
  //     } else {
  //       router.replace('/');
  //     }
  //   } else {
  //     router.replace('/');
  //   }
  // }, [user, router, isLoading]);

  // if (isLoading || !user) {
  //   return <Loading />;
  // }

  // const isAdmin = user?.is_admin || user?.roles?.includes('admin');

  // if (isAdmin || user?.permissions?.includes('manage orders'))
  //   return <DashboardPage />;

  // // During the conversion, we do not display anything
  // return null;
  return <DashboardPage />;
};

export default Dashboard;
