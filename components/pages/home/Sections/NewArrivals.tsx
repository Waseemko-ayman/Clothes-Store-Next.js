'use client';
import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import MainTitle from '@/components/atoms/MainTitle';
import ProdcutsContainer from '@/components/atoms/ProdcutsContainer';
import AnimatedWrapper from '@/components/molecules/FramerMotion/AnimatedWrapper';
import ProductCard from '@/components/molecules/ProductCard';
import ProductCardSkeleton from '@/components/Skeletons/ProductCardSkeleton';
import { useProductsContext } from '@/context/ProductsContext';
import { PATHS } from '@/mock/paths';
import { useRouter } from 'next/navigation';
import React from 'react';

const NewArrivals = () => {
  const router = useRouter();

  // API Context
  const { clothes, isLoading } = useProductsContext();

  const newArrivals = clothes.filter((p) => p.section === 'newArrivals');
  return (
    <Layer>
      <Container>
        <MainTitle
          title="New Arrivals"
          description="Summer Collection New Modern Design"
        />
        <ProdcutsContainer>
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))
            : newArrivals.map((item, index) => (
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
              ))}
        </ProdcutsContainer>
      </Container>
    </Layer>
  );
};

export default NewArrivals;
