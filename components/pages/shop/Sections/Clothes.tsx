'use client';
import React, { useEffect, useState } from 'react';
import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import ProdcutsContainer from '@/components/atoms/ProdcutsContainer';
import ProductCard from '@/components/molecules/ProductCard';
import { PATHS } from '@/mock/paths';
import { useRouter } from 'next/navigation';
import { ProductCardProps } from '@/interfaces';
import AnimatedWrapper from '@/components/molecules/FramerMotion/AnimatedWrapper';
import ProductCardSkeleton from '@/components/Skeletons/ProductCardSkeleton';

const Clothes = ({ products }: { products: ProductCardProps[] }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products) {
      setLoading(false);
    }
  }, [products]);

  return (
    <Layer>
      <Container>
        <ProdcutsContainer>
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))
            : products.map((item: ProductCardProps, index) => (
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

export default Clothes;
