import Hero from './Sections/Hero';
import FeatursSec from '../../organism/FeatursSec';
import FeaturedProducts from './Sections/FeaturedProducts';
import RepairServices from './Sections/RepairServices';
import NewArrivals from './Sections/NewArrivals';
import Banners from './Sections/Banners';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeatursSec />
      <FeaturedProducts />
      <RepairServices />
      <NewArrivals />
      <Banners />
    </>
  );
};

export default HomePage;
