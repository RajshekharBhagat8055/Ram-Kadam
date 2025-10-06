"use client"

import { useEffect } from 'react';
import '@/lib/i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // Ensure i18n is initialized on client side
    import('@/lib/i18n');
  }, []);

  return <>{children}</>;
}
