import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import Banner from '@/components/molecules/Banner';
import AnimatedWrapper from '@/components/molecules/FramerMotion/AnimatedWrapper';
import { BANNERS_DATA } from '@/data';
import React from 'react';

const Banners = () => {
  return (
    <Layer>
      <Container>
        <div className="grid md:grid-cols-2 gap-6">
          {BANNERS_DATA.filter((item) => item.type === 'big').map(
            (item, index) => (
              <AnimatedWrapper key={item.id} custom={index}>
                <Banner
                  key={item.id}
                  height="h-[50vh]"
                  otherClassNameContainer={
                    index === 0 ? 'bg-right' : 'bg-center'
                  }
                  {...item}
                />
              </AnimatedWrapper>
            ),
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {BANNERS_DATA.filter((item) => item.type === 'small').map(
            (item, index) => (
              <AnimatedWrapper key={item.id} custom={index}>
                <Banner key={item.id} height="h-[35vh]" {...item} />
              </AnimatedWrapper>
            ),
          )}
        </div>
      </Container>
    </Layer>
  );
};

export default Banners;
