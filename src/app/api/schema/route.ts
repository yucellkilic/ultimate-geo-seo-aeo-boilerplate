import { NextRequest, NextResponse } from 'next/server';
import { generateFAQSchema, generateArticleSchema, generateProductSchema } from '@/lib/aeo-schema';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') || 'faq';

  let schema;

  if (type === 'faq') {
    schema = generateFAQSchema([
      {
        question: 'What is Geo-SEO?',
        answer: 'Geo-SEO is the practice of optimizing your website for location-based search results.',
      },
      {
        question: 'What is AEO?',
        answer: 'AEO stands for Answer Engine Optimization, optimizing content for AI search engines.',
      },
    ]);
  } else if (type === 'article') {
    schema = generateArticleSchema({
      title: 'Ultimate Guide to Geo-SEO',
      description: 'Learn how to implement geo-SEO on your website',
      author: { name: 'yucellkilic' },
      datePublished: new Date().toISOString(),
    });
  } else if (type === 'product') {
    schema = generateProductSchema({
      name: 'Premium Product',
      description: 'High quality product',
      price: 99.99,
      currency: 'USD',
      availability: 'https://schema.org/InStock',
    });
  }

  return NextResponse.json(schema);
}
