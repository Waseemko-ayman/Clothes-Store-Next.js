'use client';
import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import MainTitle from '@/components/atoms/MainTitle';
import ProdcutsContainer from '@/components/atoms/ProdcutsContainer';
import ErrorFetching from '@/components/molecules/ErrorFetching';
import AnimatedWrapper from '@/components/molecules/FramerMotion/AnimatedWrapper';
import ProductCard from '@/components/molecules/ProductCard';
import ProductCardSkeleton from '@/components/Skeletons/ProductCardSkeleton';
import useSupabaseClient from '@/Hooks/useSupabaseClient';
import { ProductCardProps } from '@/interfaces';
import { PATHS } from '@/data/paths';
import { useRouter } from 'next/navigation';
import React from 'react';

const NewArrivals = () => {
  const router = useRouter();

  // Supabase Hook
  const {
    data: products,
    error,
    isLoading,
  } = useSupabaseClient('products', {
    section: 'newArrivals',
  });

  return (
    <Layer>
      <Container>
        <MainTitle
          title="New Arrivals"
          description="Summer Collection New Modern Design"
        />
        <ProdcutsContainer>
          {isLoading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          ) : error ? (
            <ErrorFetching error={error} />
          ) : (
            products?.map((item: ProductCardProps, index: number) => (
              <AnimatedWrapper key={item?.id} custom={index}>
                <ProductCard
                  key={item?.id}
                  image={item.image}
                  title={item.title}
                  productData={item}
                  handleClick={() =>
                    item?.slug && router.push(PATHS.SHOP.ITEM(item?.slug))
                  }
                />
              </AnimatedWrapper>
            ))
          )}
        </ProdcutsContainer>
      </Container>
    </Layer>
  );
};

export default NewArrivals;
