/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { API_URL } from '@/config/api';
import useAPI from '@/Hooks/useAPI';
import { APIRequest, ProductCardProps } from '@/interfaces';
import { createContext, useContext, useEffect } from 'react';

interface ClothesProps extends APIRequest {
  clothes: ProductCardProps[];
}

export const ProductsContext = createContext<ClothesProps | undefined>(
  undefined
);

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data: clothes, isLoading, error, get } = useAPI(`${API_URL}/clothes`);

  useEffect(() => {
    get();
  }, []);

  const refresh = () => {
    get();
  };

  return (
    <ProductsContext.Provider value={{ clothes, isLoading, error, refresh }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProductsContext must be used within ProductsProvider');
  }
  return context;
};
