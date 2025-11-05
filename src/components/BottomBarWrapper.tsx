"use client";

import dynamic from 'next/dynamic';
import SupabaseProvider from './ClientSupabaseProvider';

// Динамически импортируем BottomBar без SSR
const BottomBar = dynamic(() => import('./BottomBar'), {
  ssr: false,
  loading: () => <div className="fixed bottom-0 left-0 right-0 h-20 bg-black/90 backdrop-blur-md border-t border-yellow-400/20 z-50" />
});

export default function BottomBarWrapper() {
  return (
    <SupabaseProvider>
      <BottomBar />
    </SupabaseProvider>
  );
}