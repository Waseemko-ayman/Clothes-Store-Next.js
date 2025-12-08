/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';

import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import Loading from '@/components/atoms/Loading';
import MainTitle from '@/components/atoms/MainTitle';
import ProdcutsContainer from '@/components/atoms/ProdcutsContainer';
import AnimatedWrapper from '@/components/molecules/FramerMotion/AnimatedWrapper';
import ProductCard from '@/components/molecules/ProductCard';
import { useProductsContext } from '@/context/ProductsContext';
import { PATHS } from '@/mock/paths';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ProductDetailsPage = ({ productId }: { productId: string }) => {
  const [targetSrc, setTargetSrc] = useState('');
  const router = useRouter();

  // API Context
  const { clothes, product, isLoading, getSingle } = useProductsContext();

  // Filter featured products
  const featuredProducts = clothes.filter((p) => p.section === 'featured');

  // Shuffle the array randomly
  const shuffled = [...featuredProducts].sort(() => 0.5 - Math.random());
  const randomFour = shuffled.slice(0, 4);

  // Set initial targetSrc when product changes
  useEffect(() => {
    if (product?.gallery?.length) {
      setTargetSrc(product.gallery[0]);
    }
  }, [product]);

  // Fetch single product on productId change
  useEffect(() => {
    getSingle(productId);
  }, [productId]);

  return (
    <Layer>
      <Container>
        <div className="flex gap-10 max-[992px]:flex-col">
          <div className="w-[500px] max-md:w-full mx-auto">
            <img
              id="img"
              src={`/assets/products/${targetSrc || product?.src}.jpg`}
              alt={product?.productTitle || ''}
              className="w-full rounded-sm max-md:max-w-full"
            />
            <div className="flex justify-between flex-wrap gap-1 max-w-full w-full my-2.5 mx-auto max-md:justify-center">
              {product?.gallery?.map((src: string, index: number) => (
                <img
                  key={index}
                  src={`/assets/products/${src}.jpg`}
                  alt={product.productTitle || 'Product image'}
                  className="max-w-full w-[120px] cursor-pointer rounded-sm max-md:w-[100px] hover:scale-[1.1] transition duration-300"
                  onClick={() => setTargetSrc(src)}
                />
              ))}
            </div>
          </div>
          <div className="pt-[30px] w-1/2 max-[992px]:w-full">
            <div className="flex gap-1">
              <Link
                href={PATHS.HOME}
                className="hover:text-[var(--forth-color)] transtion-all duration-300"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href={PATHS.SHOP.ROOT}
                className="hover:text-[var(--forth-color)] transtion-all duration-300"
              >
                T-Shirt
              </Link>
            </div>
            <h2 className="text-3xl font-bold my-[30px]">
              {product?.productTitle}
            </h2>
            <div className="w-fit mb-2.5">
              <span className="block mb-2.5 text-[33px] font-bold">
                ${product?.price}.00
              </span>
              <div className="flex items-center flex-wrap gap-2.5">
                <input
                  type="number"
                  min="1"
                  placeholder="Num"
                  required
                  className="w-24 h-10 border border-[var(--six-color)] pl-3 rounded-[3px] focus:border-[var(--forth-color)] outline-none"
                />
                <select className="h-10 rounded-sm border border-[var(--fifth-color)] focus:border-[var(--forth-color)] outline-none cursor-pointer">
                  <option value="" selected>
                    Select Size
                  </option>
                  {product?.size.map((size: string, index: number) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-2.5 mb-10">
              <div className="flex items-center gap-2.5">
                <Button variant="primary" otherClassName="!py-2 !px-[15px]">
                  Add To Cart
                </Button>
                <Button variant="primary" otherClassName="!py-2 !px-[15px]">
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="text">
              <h3 className="font-bold text-[22px] mb-3">Product Details</h3>
              <p className="text-[var(--seconde-color)] text-[18px] leading-normal">
                {product?.description}
              </p>
            </div>
          </div>
        </div>
        <Layer otherClassName="!mt-10">
          <MainTitle
            title="Featured Product"
            description="Summer Collection New Modern Design"
          />
          {isLoading ? (
            <Loading />
          ) : (
            <ProdcutsContainer>
              {randomFour.map((item, index) => (
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
          )}
        </Layer>
      </Container>
    </Layer>
  );
};

export default ProductDetailsPage;
