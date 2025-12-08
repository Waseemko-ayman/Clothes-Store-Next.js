/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { API_URL } from '@/config/api';
import useAPI from '@/Hooks/useAPI';
import { APIRequest, ProductCardProps } from '@/interfaces';
import { createContext, useContext, useEffect } from 'react';

interface ClothesProps extends APIRequest {
  clothes: ProductCardProps[];
  product: ProductCardProps | null;
  getSingle: (id: string | number, getConfig?: any) => Promise<any> | void;
}

export const ProductsContext = createContext<ClothesProps | undefined>({
  clothes: [],
  product: null,
  isLoading: true,
  error: false,
  refresh: () => {},
  getSingle: async () => {},
});

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    data: clothes,
    product,
    isLoading,
    error,
    get,
    getSingle,
  } = useAPI(`${API_URL}/clothes`);

  useEffect(() => {
    get();
  }, []);

  const refresh = () => {
    get();
  };

  return (
    <ProductsContext.Provider
      value={{ clothes, product, isLoading, error, refresh, getSingle }}
    >
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
