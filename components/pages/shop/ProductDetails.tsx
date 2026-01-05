/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useState } from 'react';
import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import AnimatedWrapper from '@/components/molecules/FramerMotion/AnimatedWrapper';
import PrdocutGallery from '@/components/molecules/PrdocutGallery';
import RandomFeaturedProducts from '@/components/molecules/RandomFeaturedProducts';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useCartContext } from '@/context/CartContext';
import { useProductsContext } from '@/context/ProductsContext';
import { ProductCardProps } from '@/interfaces';
import { useToast } from '@/lib/toast';
import { usePathname } from 'next/navigation';

const ProductDetailsPage = ({ productSlug }: { productSlug: string }) => {
  const [targetSrc, setTargetSrc] = useState('');
  const [size, setSize] = useState('');

  const pathname = usePathname();
  const pathParts = pathname.split('/').slice(1);

  // Notifications
  const { showToast } = useToast();

  // Cart Context
  const { addToCart } = useCartContext();

  // API Context
  const { clothes, product, isLoading, getSingle } = useProductsContext();

  // Filter featured products
  const featuredProducts = clothes.filter((p) => p.section === 'featured');

  // Shuffle the array randomly
  const shuffled = [...featuredProducts].sort(() => 0.5 - Math.random());
  const randomFour = shuffled.slice(0, 4);

  // Pathname Settings
  let accumulatedPath = '';

  const breadcrumbs: { label: string; href: string }[] = [
    { label: 'Home', href: '/' },
  ];

  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];
    accumulatedPath = `/${part}`;
    breadcrumbs.push({
      label: part.slice(0, 1).toUpperCase() + part.slice(1),
      href: accumulatedPath,
    });
  }

  const handleAddProduct = (product: ProductCardProps) => {
    addToCart(product);
    showToast(`Add ${product.title} to cart`);
  };

  // Set initial targetSrc when product changes
  useEffect(() => {
    if (product?.gallery?.length) {
      setTargetSrc(product.gallery[0]);
    }
  }, [product]);

  // Fetch single product on productSlug change
  useEffect(() => {
    getSingle(productSlug);
  }, [productSlug]);

  return (
    <Layer>
      <Container>
        <div className="flex gap-10 max-[992px]:flex-col">
          <div className="relative w-[500px] max-md:w-full mx-auto">
            <img
              src={`/assets/products/${targetSrc || product?.image}.jpg`}
              alt={product?.title}
              className="w-full rounded-sm max-md:max-w-full"
            />
            <PrdocutGallery
              productDetails={product}
              setTargetSrc={setTargetSrc}
            />
          </div>
          <div className="pt-[30px] w-1/2 max-[992px]:w-full">
            <Breadcrumb>
              <BreadcrumbList className="flex items-center">
                {breadcrumbs.map((crumb, index) => (
                  <AnimatedWrapper
                    key={index}
                    custom={index}
                    direction="x"
                    distance={40}
                  >
                    <BreadcrumbItem>
                      {index === breadcrumbs.length - 1 ? (
                        <span className="text-[var(--forth-color)] text-base">
                          {crumb.label
                            .split('-')
                            .map(
                              (item) =>
                                item.slice(0, 1).toUpperCase() +
                                item.slice(1).toLowerCase()
                            )
                            .join(' ')}
                        </span>
                      ) : (
                        <BreadcrumbLink
                          href={crumb.href}
                          className="hover:text-[var(--forth-color)] transtion-all duration-300"
                        >
                          {crumb.label}
                        </BreadcrumbLink>
                      )}
                      {index < breadcrumbs.length - 1 && (
                        <BreadcrumbSeparator />
                      )}
                    </BreadcrumbItem>
                  </AnimatedWrapper>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
            <h2 className="text-3xl font-bold my-[30px]">{product?.title}</h2>
            <div className="w-fit mb-2.5">
              <span className="block mb-2.5 text-[33px] font-bold">
                ${product?.price}.00
              </span>
              <div className="flex items-center flex-wrap gap-2.5 mb-5">
                <input
                  type="number"
                  min="1"
                  placeholder="Num"
                  required
                  className="w-24 h-11 rounded-md shadow-xs py-2 pl-3 border border-input focus:border-[var(--forth-color)] outline-none"
                />
                {/* <div className="flex items-center gap-2 flex-wrap">
                  {product?.size.map((size: string, index: number) => (
                    <span
                      key={index}
                      className={`${
                        size === sizeState
                          ? '!bg-[var(--forth-color)] text-white'
                          : ''
                      } w-24 h-11 flex items-center justify-center rounded-md bg-white textc border border-[var(--forth-color)] hover:bg-[var(--forth-color)] hover:text-white cursor-pointer transition-all duration-300`}
                      onClick={() => setSize(size)}
                    >
                      {size}
                    </span>
                  ))}
                </div> */}
                <Select
                  value={size}
                  onValueChange={setSize}
                  // disabled={!allNotifications}
                >
                  <SelectTrigger
                    id="size"
                    className="w-30 !h-11 bg-background focus:!border-[var(--forth-color)]"
                  >
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {product?.size?.map((size: string, index: number) => (
                      <SelectItem key={index} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-2.5 mb-10">
              <div className="flex items-center gap-2.5">
                <Button
                  variant="primary"
                  otherClassName="!py-2 !px-[15px]"
                  handleClick={() => product && handleAddProduct(product)}
                >
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
        <RandomFeaturedProducts randomFour={randomFour} isLoading={isLoading} />
      </Container>
    </Layer>
  );
};

export default ProductDetailsPage;
