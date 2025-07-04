import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import MotionDiv from '@/components/atoms/MotionDiv';
import Banner from '@/components/molecules/Banner';
import React from 'react';

export const BANNERS_DATA = [
  {
    id: 1,
    bgImage: '/assets/banner/b4.jpg',
    subTitle: 'crazy deals',
    title: 'buy 1 get 1 free',
    description: 'The best classic dress is on sale at cara',
    btnText: 'Learn More',
    type: 'big',
    overlay: false,
  },
  {
    id: 2,
    bgImage: '/assets/banner/b3.jpg',
    subTitle: 'spring/summer',
    title: 'upcomming season',
    description: 'The best classic dress is on sale at cara',
    btnText: 'Collection',
    type: 'big',
    overlay: false,
  },
  {
    id: 3,
    bgImage: '/assets/banner/b5.jpg',
    subTitle: 'Seasonal sale',
    title: 'Winter Collection -50% Off',
    type: 'small',
    overlay: true,
  },
  {
    id: 4,
    bgImage: '/assets/banner/b6.jpg',
    subTitle: 'New Footwear Collection',
    title: 'Spring/Summer 2023',
    type: 'small',
    overlay: true,
  },
  {
    id: 5,
    bgImage: '/assets/banner/b7.jpg',
    subTitle: 'T-Shirt',
    title: 'New Trandy Prinls',
    type: 'small',
    overlay: true,
  },
];

const Banners = () => {
  return (
    <Layer>
      <Container>
        <div className="grid md:grid-cols-2 gap-6">
          {BANNERS_DATA.filter((item) => item.type === 'big').map(
            (item, index) => (
              <MotionDiv key={item.id} index={index}>
                <Banner
                  key={item.id}
                  height="h-[50vh]"
                  otherClassNameContainer={
                    index === 0 ? 'bg-right' : 'bg-center'
                  }
                  {...item}
                />
              </MotionDiv>
            )
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {BANNERS_DATA.filter((item) => item.type === 'small').map(
            (item, index) => (
              <MotionDiv key={item.id} index={index}>
                <Banner key={item.id} height="h-[35vh]" {...item} />
              </MotionDiv>
            )
          )}
        </div>
      </Container>
    </Layer>
  );
};

export default Banners;
