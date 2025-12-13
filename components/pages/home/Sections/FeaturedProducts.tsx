'use client';

import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import Loading from '@/components/atoms/Loading';
import MainTitle from '@/components/atoms/MainTitle';
import ProdcutsContainer from '@/components/atoms/ProdcutsContainer';
import AnimatedWrapper from '@/components/molecules/FramerMotion/AnimatedWrapper';
import ProductCard from '@/components/molecules/ProductCard';
import { useProductsContext } from '@/context/ProductsContext';
import { PATHS } from '@/mock/paths';
import { useRouter } from 'next/navigation';
import React from 'react';

const FeaturedProducts = () => {
  const router = useRouter();

  // API Context
  const { clothes, isLoading } = useProductsContext();

  const featuredProducts = clothes.filter((p) => p.section === 'featured');
  return (
    <Layer>
      <Container>
        <MainTitle
          title="Featured Product"
          description="Summer Collection New Modern Design"
        />
        {isLoading ? (
          <Loading />
        ) : (
          <ProdcutsContainer>
            {featuredProducts.map(
              (item, index) => (
                <AnimatedWrapper key={item?.id} custom={index}>
                  <ProductCard
                    key={item?.id}
                    imgSrc={item?.src}
                    imgText={item?.imgText}
                    tradeMark={item?.tradeMark}
                    productTitle={item?.productTitle}
                    price={item?.price}
                    productData={item}
                    handleClick={() => router.push(PATHS.SHOP.ITEM(item?.id))}
                  />
                </AnimatedWrapper>
              )
            )}
          </ProdcutsContainer>
        )}
      </Container>
    </Layer>
  );
};

export default FeaturedProducts;
