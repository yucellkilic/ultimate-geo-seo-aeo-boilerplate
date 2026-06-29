import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const product = {
      id: params.id,
      name: 'Product Details',
      price: 99.99,
      description: 'Detailed product description here',
      category: 'pro',
      stock: 50,
      image: 'https://via.placeholder.com/600x400?text=Product',
      details: {
        features: ['Feature 1', 'Feature 2', 'Feature 3'],
        specifications: {
          size: 'Medium',
          weight: '500g',
          color: 'Black',
        },
      },
    };

    return NextResponse.json(product);
  } catch (error) {
    console.error('Product detail API error:', error);
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
}
