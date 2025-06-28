/* eslint-disable @next/next/no-img-element */
'use client';

import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import MainTitle from '@/components/atoms/MainTitle';
import MotionDiv from '@/components/atoms/MotionDiv';
import ProdcutsContainer from '@/components/atoms/ProdcutsContainer';
import ProductCard from '@/components/molecules/ProductCard';
import { CLOTHES } from '@/mock';
import { PATHS } from '@/mock/paths';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const ProductDetailsPage = () => {
  const router = useRouter();
  const featuredProducts = CLOTHES.filter((p) => p.section === 'featured');
  // Shuffle the array randomly
  const shuffled = [...featuredProducts].sort(() => 0.5 - Math.random());
  const randomFour = shuffled.slice(0, 4);
  return (
    <Layer>
      <Container>
        <div className="flex gap-10 max-[992px]:flex-col">
          <div className="w-[500px] max-[992px]:w-full mx-auto">
            <img
              id="img"
              src="/assets/products/prod1.jpg"
              alt=""
              className="w-full rounded-sm max-md:max-w-full"
            />
            <div className="flex justify-between flex-wrap gap-1 max-w-full w-full my-2.5 mx-auto max-md:justify-center">
              <img
                src="/assets/products/prod1.jpg"
                alt=""
                className="max-w-full w-[120px] cursor-pointer rounded-sm  max-md:w-full hover:scale-[1.1] transition duration-300"
              />
              <img
                src="/assets/products/prod1.jpg"
                alt=""
                className="max-w-full w-[120px] cursor-pointer rounded-sm  max-md:w-full hover:scale-[1.1] transition duration-300"
              />
              <img
                src="/assets/products/prod1.jpg"
                alt=""
                className="max-w-full w-[120px] cursor-pointer rounded-sm  max-md:w-full hover:scale-[1.1] transition duration-300"
              />
              <img
                src="/assets/products/prod1.jpg"
                alt=""
                className="max-w-full w-[120px] cursor-pointer rounded-sm  max-md:w-full hover:scale-[1.1] transition duration-300"
              />
            </div>
          </div>
          <div className="pt-[30px] w-1/2 max-[992px]:w-full">
            <div>
              <span>
                <Link href="index.html">Home</Link>
              </span>
              <span>/</span>
              <span>
                <Link href="shop.html">T-Shirt</Link>
              </span>
            </div>
            <h2 className="text-3xl font-bold my-[30px]">
              Men&apos;s Fashion T-Shirt
            </h2>
            <div className="w-fit mb-2.5">
              <span className="block mb-2.5 text-[33px] font-bold">$78.00</span>
              <select className="max-w-full w-full h-[30px] rounded-sm border border-[var(--fifth-color)] focus:border-[var(--forth-color)] outline-none">
                <option value="" selected>
                  Select Size
                </option>
                <option value="1">XL</option>
                <option value="1">XXL</option>
                <option value="1">Small</option>
                <option value="1">Large</option>
              </select>
            </div>
            <div className="flex items-center gap-2.5 mb-10">
              <input
                type="number"
                min="1"
                placeholder="Num"
                required
                className="w-14 h-10 border border-[var(--six-color)] pl-1 rounded-[3px] focus:border-[var(--forth-color)] outline-none"
              />
              <Button variant="primary" otherClassName="!py-2 !px-[15px]">
                Add To Cart
              </Button>
              <Button variant="primary" otherClassName="!py-2 !px-[15px]">
                Buy Now
              </Button>
            </div>
            <div className="text">
              <h3 className="font-bold text-[22px] mb-5">Product Details</h3>
              <p className="text-[var(--seconde-color)] text-[18px] leading-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus, tempore autem? Similique, praesentium? Quidem soluta
                incidunt accusantium voluptatem fuga. Cupiditate, odit labore!
                Alias, dicta animi? Reiciendis adipisci cupiditate eaque? Quae
                ipsam, perspiciatis voluptas, sed et aperiam earum quasi quas
                animi enim est adipisci tempore. Sunt dignissimos voluptatum
                modi ducimus quibusdam.
              </p>
            </div>
          </div>
        </div>
        <Layer>
          <MainTitle
            title="Featured Product"
            description="Summer Collection New Modern Design"
          />
          <ProdcutsContainer>
            {randomFour.map(
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
        </Layer>
      </Container>
    </Layer>
  );
};

export default ProductDetailsPage;
