import { NextRequest, NextResponse } from 'next/server';
import { withRateLimit } from '@/lib/middleware';

async function handler(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    
    const geoData = {
      ip,
      country: 'Turkey',
      city: 'Istanbul',
      region: 'Istanbul',
      latitude: 41.0082,
      longitude: 28.9784,
      timezone: 'Europe/Istanbul',
    };

    return NextResponse.json(geoData);
  } catch (error) {
    console.error('Geo API error:', error);
    return NextResponse.json({ error: 'Failed to fetch geo data' }, { status: 500 });
  }
}

export const GET = withRateLimit(handler);
