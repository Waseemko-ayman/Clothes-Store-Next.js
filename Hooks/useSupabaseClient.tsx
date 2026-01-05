/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import supabase from '@/config/api';
import { useEffect, useState } from 'react';

export default function useSupabaseClient(
  tableName: string,
  filters?: Record<string, any>
) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        let supabaseRef = supabase.from(tableName).select();
        if (filters) {
          for (const [column, value] of Object.entries(filters)) {
            if (value !== undefined && value !== null) {
              supabaseRef = supabaseRef.eq(column, value);
            }
          }
        }

        const { data } = await supabaseRef;
        setData(data);
        setIsLoading(false);
      } catch (error: unknown) {
        setError(error instanceof Error ? error.message : String(error));
        setIsLoading(false);
      }
    })();
    
    // Use JSON.stringify to compare object values instead of references.
    // Prevents unnecessary reruns when the object is recreated with same data.
  }, [tableName, JSON.stringify(filters)]);

  return { data, error, isLoading };
}
