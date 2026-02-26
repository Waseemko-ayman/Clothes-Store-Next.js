import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import Banner from '@/components/molecules/Banner';
import AnimatedWrapper from '@/components/molecules/FramerMotion/AnimatedWrapper';
import ResponsiveWrapper from '@/components/molecules/ResponsiveWrapper';
import GridWrapper from '@/components/organism/GridWrapper';
import { BANNERS_DATA } from '@/data';

const Banners = () => {
  return (
    <div>
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
        </Container>
      </Layer>
      <ResponsiveWrapper>
        <GridWrapper
          gridCols="lg:grid-cols-3! py-0"
          itemClassName="max-md:min-w-[300px]"
          isScrollable
        >
          {BANNERS_DATA.filter((item) => item.type === 'small').map(
            (item, index) => (
              <AnimatedWrapper key={item.id} custom={index}>
                <Banner
                  key={item.id}
                  height="h-[35vh]"
                  otherClassNameContainer={
                    item.id === 3 || item.id === 4
                      ? 'justify-end'
                      : item.id === 5
                        ? 'justify-start'
                        : undefined
                  }
                  {...item}
                />
              </AnimatedWrapper>
            ),
          )}
        </GridWrapper>
      </ResponsiveWrapper>
    </div>
  );
};

export default Banners;
