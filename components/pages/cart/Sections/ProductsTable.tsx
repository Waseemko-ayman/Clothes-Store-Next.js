'use client';
import React, { useEffect, useState } from 'react';
import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import { API_URL } from '@/config/api';
import { useCartContext } from '@/context/CartContext';
import useAPI from '@/Hooks/useAPI';
import { useToast } from '@/lib/toast';
import CartTable from '@/components/molecules/CartTable';
import { FaBorderAll, FaCartShopping, FaTable } from 'react-icons/fa6';
import CartCards from '@/components/molecules/CartCards';
import EmptyState from '@/components/molecules/EmptyState';

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
        {cartItems.length > 0 && (
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
        )}

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
          <EmptyState
            imageSrc="empty-cart.png"
            messageText="Your shopping basket is ready and calling you to shop!"
            buttonText="Shop now"
            Icon={FaCartShopping}
          />
        )}
      </Container>
    </Layer>
  );
};

export default ProductsTable;
