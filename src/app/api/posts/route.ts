import { NextRequest, NextResponse } from 'next/server';
import { withRateLimit } from '@/lib/middleware';

async function handler(request: NextRequest) {
  try {
    const posts = [
      {
        id: '1',
        title: 'Getting Started with Geo-SEO',
        slug: 'getting-started-geo-seo',
        excerpt: 'Learn the basics of geographical SEO optimization',
        content: 'Geo-SEO is a powerful technique...',
        author: 'yucellkilic',
        category: 'SEO',
        tags: ['geo-seo', 'optimization', 'tutorial'],
        image: 'https://via.placeholder.com/600x400?text=Geo-SEO',
        publishedAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
      },
      {
        id: '2',
        title: 'AEO: Answer Engine Optimization',
        slug: 'aeo-answer-engine-optimization',
        excerpt: 'Optimize your content for AI search engines',
        content: 'Answer Engine Optimization is crucial...',
        author: 'yucellkilic',
        category: 'AI',
        tags: ['aeo', 'ai', 'search'],
        image: 'https://via.placeholder.com/600x400?text=AEO',
        publishedAt: new Date('2024-01-05'),
        updatedAt: new Date('2024-01-05'),
      },
      {
        id: '3',
        title: 'Next.js 14 Performance Tips',
        slug: 'nextjs-14-performance-tips',
        excerpt: 'Maximize your Next.js application performance',
        content: 'Here are the best practices...',
        author: 'yucellkilic',
        category: 'Performance',
        tags: ['nextjs', 'performance', 'optimization'],
        image: 'https://via.placeholder.com/600x400?text=NextJS',
        publishedAt: new Date('2024-01-10'),
        updatedAt: new Date('2024-01-10'),
      },
    ];

    return NextResponse.json({ data: posts, total: posts.length });
  } catch (error) {
    console.error('Blog API error:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export const GET = withRateLimit(handler);
