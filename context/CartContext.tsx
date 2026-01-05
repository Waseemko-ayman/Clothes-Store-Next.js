'use client';
import { API_URL } from '@/config/api';
import { CartContextType, ProductCardProps } from '@/interfaces';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useEffect, useState } from 'react';

const CART_STORAGE_KEY = 'cart_items';

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<any[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      localStorage.removeItem(CART_STORAGE_KEY);
      return [];
    }
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      try {
        setCartItems(JSON.parse(stored));
      } catch {
        localStorage.removeItem(CART_STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = async (item: ProductCardProps) => {
    const quantityToAdd = item.quantity ?? 1;

    setCartItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.slug === item.slug);

      if (existingIndex !== -1) {
        const updatedItems = [...prev];
        const existingItem = updatedItems[existingIndex];
        const newQuantity = (existingItem.quantity ?? 1) + quantityToAdd;
        updatedItems[existingIndex] = {
          ...existingItem,
          quantity: newQuantity,
        };
        return updatedItems;
      }
      return [...prev, { ...item, quantity: quantityToAdd }];
    });

    await fetch(`${API_URL}/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
  };

  const updateQuantity = (idOrSlug: number | string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        +item.id === +idOrSlug || item.slug === idOrSlug
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = async (idOrSlug: string | number) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== idOrSlug && item.slug !== idOrSlug)
    );
  };

  const clearCart = async () => {
    setCartItems([]);
    await fetch(`${API_URL}/cart`, {
      method: 'DELETE',
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within CartProvider');
  }
  return context;
};
