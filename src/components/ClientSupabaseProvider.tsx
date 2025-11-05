"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

interface SupabaseContextType {
  supabase: SupabaseClient | null;
  isLoading: boolean;
}

const SupabaseContext = createContext<SupabaseContextType>({
  supabase: null,
  isLoading: true,
});

export function useSupabase() {
  return useContext(SupabaseContext);
}

export default function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Инициализируем Supabase только на клиенте
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ecdzqqqxsknsuxlfaptp.supabase.co';
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjZHpxcXF4c2tuc3V4bGZhcHRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzMjM4MDcsImV4cCI6MjA3Nzg5OTgwN30.HJwTk6ll1MZmTFVhGhg0p4g00bcTvEYv7_r5Szo0uWg';
    
    const client = createClient(supabaseUrl, supabaseAnonKey);
    setSupabase(client);
    setIsLoading(false);
  }, []);

  return (
    <SupabaseContext.Provider value={{ supabase, isLoading }}>
      {children}
    </SupabaseContext.Provider>
  );
}