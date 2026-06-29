import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    // Placeholder categories
    const categories = ['starter', 'pro', 'enterprise', 'premium', 'basic'];

    const filtered = category && category !== 'all'
      ? categories.filter((c) => c === category)
      : categories;

    return NextResponse.json({
      categories: filtered,
      total: filtered.length,
    });
  } catch (error) {
    console.error('Categories API error:', error);
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
}
