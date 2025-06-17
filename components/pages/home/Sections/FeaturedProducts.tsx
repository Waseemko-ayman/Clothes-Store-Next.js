import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import MainTitle from '@/components/atoms/MainTitle';
import ProdcutsContainer from '@/components/atoms/ProdcutsContainer';
import ProductCard from '@/components/molecules/ProductCard';
import { PRODUCTS } from '@/mock';
import React from 'react';

const FeaturedProducts = () => {
  return (
    <Layer>
      <Container>
        <MainTitle
          title="Featured Product"
          description="Summer Collection New Modern Design"
        />
        <ProdcutsContainer>
          {PRODUCTS.map(
            ({ id, src, imgText, tradeMark, productTitle, price }) => (
              <ProductCard
                key={id}
                imgSrc={src}
                imgText={imgText}
                tradeMark={tradeMark}
                productTitle={productTitle}
                price={price}
              />
            )
          )}
        </ProdcutsContainer>
      </Container>
    </Layer>
  );
};

export default FeaturedProducts;
