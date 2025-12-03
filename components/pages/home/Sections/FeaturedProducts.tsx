'use client';

import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import MainTitle from '@/components/atoms/MainTitle';
import ProdcutsContainer from '@/components/atoms/ProdcutsContainer';
import AnimatedWrapper from '@/components/molecules/FramerMotion/AnimatedWrapper';
import ProductCard from '@/components/molecules/ProductCard';
import { CLOTHES } from '@/mock';
import { PATHS } from '@/mock/paths';
import { useRouter } from 'next/navigation';
import React from 'react';

const FeaturedProducts = () => {
  const router = useRouter();
  const featuredProducts = CLOTHES.filter((p) => p.section === 'featured');
  return (
    <Layer>
      <Container>
        <MainTitle
          title="Featured Product"
          description="Summer Collection New Modern Design"
        />
        <ProdcutsContainer>
          {featuredProducts.map(
            ({ id, src, imgText, tradeMark, productTitle, price }, index) => (
              <AnimatedWrapper key={id} custom={index}>
                <ProductCard
                  key={id}
                  imgSrc={src}
                  imgText={imgText}
                  tradeMark={tradeMark}
                  productTitle={productTitle}
                  price={price}
                  handleClick={() => router.push(PATHS.SHOP.ITEM(id))}
                />
              </AnimatedWrapper>
            )
          )}
        </ProdcutsContainer>
      </Container>
    </Layer>
  );
};

export default FeaturedProducts;
