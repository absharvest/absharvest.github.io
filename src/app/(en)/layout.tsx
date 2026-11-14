import type { ReactNode } from 'react';
import type { Viewport } from 'next';
import { Shell } from '@/components/Shell';
import '../globals.css';

export const viewport: Viewport = { themeColor: '#16120e', width: 'device-width', initialScale: 1 };

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <Shell lang="en">{children}</Shell>;
}
