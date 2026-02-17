/* eslint-disable @typescript-eslint/no-explicit-any */
import supabase from '@/config/api';
import { useEffect, useState } from 'react';

export const useSession = () => {
  const [session, setSession] = useState<any>(null);

  const fetchSession = async () => {
    const { data } = await supabase.auth.getSession();
    setSession(data?.session);
  };

  useEffect(() => {
    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return session;
};
