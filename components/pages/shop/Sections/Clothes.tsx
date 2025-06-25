'use client';
import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import MotionDiv from '@/components/atoms/MotionDiv';
import ProdcutsContainer from '@/components/atoms/ProdcutsContainer';
import ProductCard from '@/components/molecules/ProductCard';
import { CLOTHES } from '@/mock';
import { PATHS } from '@/mock/paths';
import { useRouter } from 'next/navigation';
import React from 'react';

const Clothes = () => {
  const router = useRouter();
  return (
    <Layer>
      <Container>
        <ProdcutsContainer>
          {CLOTHES.map(
            ({ id, src, imgText, tradeMark, productTitle, price }, index) => (
              <MotionDiv key={id} index={index}>
                <ProductCard
                  key={id}
                  imgSrc={src}
                  imgText={imgText}
                  tradeMark={tradeMark}
                  productTitle={productTitle}
                  price={price}
                  handleClick={() => router.push(PATHS.SHOP.ITEM(id))}
                />
              </MotionDiv>
            )
          )}
        </ProdcutsContainer>
      </Container>
    </Layer>
  );
};

export default Clothes;
