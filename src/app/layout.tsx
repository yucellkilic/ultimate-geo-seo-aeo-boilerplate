import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';
import { GeoInfo } from '@/components/geo-info';

export const metadata: Metadata = {
  title: 'Ultimate Geo-SEO & AEO Boilerplate',
  description: 'Next.js 14 Universal Boilerplate with Geo-SEO, AEO & Performance Max',
  keywords: ['Next.js', 'Geo-SEO', 'AEO', 'Performance', 'Boilerplate'],
  authors: [{ name: 'yucellkilic' }],
  creator: 'yucellkilic',
  openGraph: {
    title: 'Ultimate Geo-SEO & AEO Boilerplate',
    description: 'Next.js 14 Universal Boilerplate with Geo-SEO, AEO & Performance Max',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ultimate Geo-SEO & AEO Boilerplate',
    description: 'Next.js 14 Universal Boilerplate with Geo-SEO, AEO & Performance Max',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">{children}</body>
    </html>
  );
}
