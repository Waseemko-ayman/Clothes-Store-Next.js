'use client';
import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import MainTitle from '@/components/atoms/MainTitle';
import ProdcutsContainer from '@/components/atoms/ProdcutsContainer';
import ProductCard from '@/components/molecules/ProductCard';
import { PRODUCTS } from '@/mock';
import { PATHS } from '@/mock/paths';
import { useRouter } from 'next/navigation';
import React from 'react';

const NewArrivals = () => {
  const router = useRouter();
  return (
    <Layer>
      <Container>
        <MainTitle
          title="New Arrivals"
          description="Summer Collection New Modern Design"
        />
        <ProdcutsContainer>
          {PRODUCTS.slice(8, 18).map(
            ({ id, src, imgText, tradeMark, productTitle, price }) => (
              <ProductCard
                key={id}
                imgSrc={src}
                imgText={imgText}
                tradeMark={tradeMark}
                productTitle={productTitle}
                price={price}
                handleClick={() => router.push(PATHS.SHOP.ITEM(id))}
              />
            )
          )}
        </ProdcutsContainer>
      </Container>
    </Layer>
  );
};

export default NewArrivals;
