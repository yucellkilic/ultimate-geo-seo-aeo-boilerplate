import { NextRequest, NextResponse } from 'next/server';

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 100; // requests per window

const requestCounts = new Map<string, { count: number; resetTime: number }>();

export function rateLimit(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
  const now = Date.now();
  const clientData = requestCounts.get(ip);

  if (!clientData || now > clientData.resetTime) {
    requestCounts.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return { success: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (clientData.count >= RATE_LIMIT_MAX) {
    return {
      success: false,
      remaining: 0,
      retryAfter: Math.ceil((clientData.resetTime - now) / 1000),
    };
  }

  clientData.count++;
  return { success: true, remaining: RATE_LIMIT_MAX - clientData.count };
}
