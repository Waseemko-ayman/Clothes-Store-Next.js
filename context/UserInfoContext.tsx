/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import supabase from '@/config/api';
import { useSession } from '@/Hooks/useSession';

const UserInfoContext = createContext<any>(null);

export const UserInfoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = useSession();
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = async () => {
    if (!session?.user?.id) return;

    setIsLoading(true);
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single();

    setUser(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, [session?.user?.id]);

  return (
    <UserInfoContext.Provider
      value={{
        user,
        isLoading,
        refresh: fetchUser,
        setUser, // 🔥 مهم للتحديث المباشر
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);
