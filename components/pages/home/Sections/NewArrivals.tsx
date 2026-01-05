/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import MainTitle from '@/components/atoms/MainTitle';
import ProdcutsContainer from '@/components/atoms/ProdcutsContainer';
import AnimatedWrapper from '@/components/molecules/FramerMotion/AnimatedWrapper';
import ProductCard from '@/components/molecules/ProductCard';
import ProductCardSkeleton from '@/components/Skeletons/ProductCardSkeleton';
import supabase from '@/config/api';
import { ProductCardProps } from '@/interfaces';
import { PATHS } from '@/mock/paths';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const NewArrivals = () => {
  const [, setfetchError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [clothes, setClothesError] = useState<any>(null);
  const router = useRouter();

  // API Context
  // const { clothes, isLoading } = useProductsContext();

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from('products')
        .select()
        .eq('section', 'newArrivals');

      if (error) {
        setfetchError('Could error fetch the products');
        setClothesError(null);
        console.log(error);
      }
      if (data) {
        setIsLoading(true);
        setClothesError(data);
        setIsLoading(false);
        setfetchError('');
      }
    })();
  }, []);

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
            : clothes?.map((item: ProductCardProps, index: number) => (
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
              ))}
        </ProdcutsContainer>
      </Container>
    </Layer>
  );
};

export default NewArrivals;
