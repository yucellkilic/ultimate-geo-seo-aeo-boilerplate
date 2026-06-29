import { NextRequest, NextResponse } from 'next/server';

const robots = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /api
Disallow: /*.json$

Sitemap: ${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/sitemap.xml

Crawl-delay: 1
`;

export async function GET(request: NextRequest) {
  return new NextResponse(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
