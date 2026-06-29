import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Blog - Ultimate Boilerplate',
  description: 'Read our latest articles on web development and SEO',
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="bg-slate-800 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold">📝 Blog</h1>
          <p className="text-slate-300 mt-2">Latest articles and tutorials</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-12">{children}</div>
    </div>
  );
}
