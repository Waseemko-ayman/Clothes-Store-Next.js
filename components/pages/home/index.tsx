import React from 'react';
import Hero from './Sections/Hero';
import Featurs from './Sections/Featurs';
import FeaturedProducts from './Sections/FeaturedProducts';
import RepairServices from './Sections/RepairServices';
import NewArrivals from './Sections/NewArrivals';
import Banners from './Sections/Banners';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Featurs />
      <FeaturedProducts />
      <RepairServices />
      <NewArrivals />
      <Banners />
    </>
  );
};

export default HomePage;
