'use client';
import React, { useEffect, useState } from 'react';
import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import MotionSection from '@/components/molecules/FramerMotion/MotionSection';
import { API_URL } from '@/config/api';
import { useCartContext } from '@/context/CartContext';
import useAPI from '@/Hooks/useAPI';
import { useToast } from '@/lib/toast';
import { PATHS } from '@/mock/paths';
import Image from 'next/image';
import CartTable from '@/components/molecules/CartTable';
import { FaBorderAll, FaTable } from 'react-icons/fa6';
import CartCards from '@/components/molecules/CartCards';

const ProductsTable = () => {
  const [viewMode, setViewMode] = useState<'table' | 'cards'>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('cart_view_mode');
      return stored === 'table' || stored === 'cards' ? stored : 'table';
    }
    return 'table';
  });

  useEffect(() => {
    localStorage.setItem('cart_view_mode', viewMode);
  }, [viewMode]);

  const { del } = useAPI(`${API_URL}/cart`);
  const { cartItems, updateQuantity, removeFromCart } = useCartContext();
  const { showToast } = useToast();

  const tabeleData = {
    tableHeaders: [
      'Remove',
      'Image',
      'Product',
      'Price',
      'Quantity',
      'Subtotal',
    ],
    tabelContent: cartItems,
  };

  const handleDelete = async (id: number | string, itemTitle: string) => {
    removeFromCart(id);
    del(id);
    showToast(`${itemTitle} removed from cart`);
  };

  return (
    <Layer>
      <Container otherClassName="max-[991px]:pb-5">
        <div className="flex justify-center md:justify-end gap-2 mb-4">
          <Button
            otherClassName={`!px-4 !py-2 ${
              viewMode === 'table'
                ? 'bg-[var(--forth-color)] text-white'
                : 'bg-[var(--seven-color)] text-[var(--six-color)]'
            }`}
            handleClick={() => setViewMode('table')}
          >
            <FaTable size={20} />
          </Button>
          <Button
            otherClassName={`!px-4 !py-2 ${
              viewMode === 'cards'
                ? 'bg-[var(--forth-color)] text-white'
                : 'bg-[var(--seven-color)] text-[var(--six-color)]'
            }`}
            handleClick={() => setViewMode('cards')}
          >
            <FaBorderAll size={20} />
          </Button>
        </div>

        {tabeleData.tabelContent.length > 0 ? (
          viewMode === 'table' ? (
            <CartTable
              tabeleData={tabeleData}
              updateQuantity={updateQuantity}
              handleDelete={handleDelete}
            />
          ) : (
            <CartCards
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              handleDelete={handleDelete}
            />
          )
        ) : (
          <div className="py-5">
            <MotionSection index={0}>
              <Image
                src="/assets/empty-cart.png"
                alt="Empty Cart"
                width={150}
                height={150}
                className="mx-auto"
              />
            </MotionSection>
            <div className="text-center mt-5">
              <MotionSection index={1}>
                <h2 className="text-lg text-[var(--enjoy-gray-650)] font-normal mb-5">
                  Your shopping basket is ready and calling you to shop!
                </h2>
              </MotionSection>
              <MotionSection index={2}>
                <Button
                  href={PATHS.SHOP.ROOT}
                  variant="primary"
                  otherClassName="!py-2.5 !px-5"
                >
                  Proceed to checkout
                </Button>
              </MotionSection>
            </div>
          </div>
        )}
      </Container>
    </Layer>
  );
};

export default ProductsTable;
