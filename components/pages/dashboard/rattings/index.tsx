import GenericPage from '@/components/organism/GenericPage';
import React from 'react';
import AllRatings from './Sections/AllRatings';

const RatingsPage = () => {
  const tabsData = [{ value: 'allRatings', label: 'allTitle' }];

  return (
    <GenericPage
      title="All Ratings"
      description="Manage all ratings in one place"
      tabs={tabsData}
      allComponent={AllRatings}
    />
  );
};

export default RatingsPage;
