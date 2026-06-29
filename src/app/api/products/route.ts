import { NextRequest, NextResponse } from 'next/server';
import { withRateLimit } from '@/lib/middleware';

async function handler(request: NextRequest) {
  try {
    const products = [
      {
        id: '1',
        name: 'Premium Starter',
        price: 29.99,
        description: 'Perfect for getting started',
        category: 'starter',
        stock: 100,
        image: 'https://via.placeholder.com/300x300?text=Product+1',
      },
      {
        id: '2',
        name: 'Professional',
        price: 79.99,
        description: 'Everything you need to scale',
        category: 'pro',
        stock: 50,
        image: 'https://via.placeholder.com/300x300?text=Product+2',
      },
      {
        id: '3',
        name: 'Enterprise',
        price: 199.99,
        description: 'Full power and control',
        category: 'enterprise',
        stock: 25,
        image: 'https://via.placeholder.com/300x300?text=Product+3',
      },
    ];

    return NextResponse.json({ data: products, total: products.length });
  } catch (error) {
    console.error('Products API error:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export const GET = withRateLimit(handler);
