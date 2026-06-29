import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Shop - Ultimate Boilerplate',
  description: 'Browse our amazing products and services',
};

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="bg-slate-800 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold">🛍️ Shop</h1>
          <p className="text-slate-300 mt-2">Discover amazing products</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-12">{children}</div>
    </div>
  );
}
