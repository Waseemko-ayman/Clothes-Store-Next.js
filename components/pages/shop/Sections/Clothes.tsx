'use client';
import React from 'react';
import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import Loading from '@/components/atoms/Loading';
import ProdcutsContainer from '@/components/atoms/ProdcutsContainer';
import ProductCard from '@/components/molecules/ProductCard';
import { PATHS } from '@/mock/paths';
import { useRouter } from 'next/navigation';
import { ProductCardProps } from '@/interfaces';
import { useCartContext } from '@/context/CartContext';
import AnimatedWrapper from '@/components/molecules/FramerMotion/AnimatedWrapper';
import { useToast } from '@/lib/toast';
import { useProductsContext } from '@/context/ProductsContext';

const Clothes = () => {
  const router = useRouter();
  const { addToCart } = useCartContext();
  const { showToast } = useToast();

  // API Context
  const { clothes, isLoading } = useProductsContext();

  return (
    <Layer>
      <Container>
        {isLoading ? (
          <Loading />
        ) : (
          <ProdcutsContainer>
            {clothes.map((item: ProductCardProps, index) => (
              <AnimatedWrapper key={item?.id} custom={index}>
                <ProductCard
                  key={item?.id}
                  imgSrc={item?.src}
                  imgText={item?.imgText}
                  tradeMark={item?.tradeMark}
                  productTitle={item?.productTitle}
                  price={item?.price}
                  handleClick={() => router.push(PATHS.SHOP.ITEM(item?.id))}
                  onAddToCart={() => {
                    addToCart(item);
                    showToast('Added to cart');
                  }}
                />
              </AnimatedWrapper>
            ))}
          </ProdcutsContainer>
        )}
      </Container>
    </Layer>
  );
};

export default Clothes;
