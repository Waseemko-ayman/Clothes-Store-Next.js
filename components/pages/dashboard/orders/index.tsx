import GenericPage from '@/components/organism/GenericPage';
import React from 'react';
import AllOrders from './Sections/AllOrders';
// import SuspiciousTransactions from './Sections/SuspiciousTransactions';

const OrdersPage = () => {
  const tabsData = [
    { value: 'allOrders', label: 'All Orders' },
    // {
    //   value: 'suspiciousTransactions',
    //   label: t('suspiciousTransactions'),
    // },
  ];

  return (
    <GenericPage
      title="All Orders"
      description="Manage Orders for your store"
      tabs={tabsData}
      allComponent={AllOrders}
      // overviewComponent={SuspiciousTransactions}
      // overviewTabValue="suspiciousTransactions"
    />
  );
};

export default OrdersPage;
