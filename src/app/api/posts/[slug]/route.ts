import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const post = {
      id: '1',
      title: 'Blog Post: ' + params.slug,
      slug: params.slug,
      content: 'Full article content here...',
      excerpt: 'Article excerpt',
      author: 'yucellkilic',
      category: 'Technology',
      tags: ['tutorial', 'nextjs', 'seo'],
      image: 'https://via.placeholder.com/800x400?text=' + params.slug,
      publishedAt: new Date(),
      updatedAt: new Date(),
    };

    return NextResponse.json(post);
  } catch (error) {
    console.error('Post detail API error:', error);
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }
}
