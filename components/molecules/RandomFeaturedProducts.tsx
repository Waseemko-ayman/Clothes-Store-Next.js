import { ProductCardProps } from '@/interfaces';
import React from 'react';
import Layer from '../atoms/Layer';
import MainTitle from '../atoms/MainTitle';
import Loading from '../atoms/Loading';
import ProdcutsContainer from '../atoms/ProdcutsContainer';
import AnimatedWrapper from './FramerMotion/AnimatedWrapper';
import ProductCard from './ProductCard';
import { PATHS } from '@/data/paths';
import { useRouter } from 'next/navigation';

const RandomFeaturedProducts = ({
  randomFour,
  isLoading,
}: {
  randomFour: ProductCardProps[];
  isLoading: boolean;
}) => {
  const router = useRouter();

  return (
    <Layer otherClassName="!mt-10">
      <MainTitle
        title="Featured Product"
        description="Summer Collection New Modern Design"
      />
      {isLoading ? (
        <Loading />
      ) : (
        <ProdcutsContainer>
          {randomFour.map((item, index) => (
            <AnimatedWrapper key={item?.id} custom={index}>
              <ProductCard
                key={item?.id}
                image={item?.image}
                title={item.title}
                price={item?.price}
                productData={item}
                handleClick={() =>
                  item?.slug && router.push(PATHS.SHOP.ITEM(item?.slug))
                }
              />
            </AnimatedWrapper>
          ))}
        </ProdcutsContainer>
      )}
    </Layer>
  );
};

export default RandomFeaturedProducts;
