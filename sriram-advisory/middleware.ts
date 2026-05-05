import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ASSESSMENT_TOKEN = process.env.ASSESSMENT_TOKEN;
const COOKIE_NAME = 'assessment_access';
const COOKIE_MAX_AGE = 60 * 60 * 24; // 24 hours

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // ── Protect /assessment ──────────────────────────────────────────────────
  // Only accessible via a link you send with ?token=ASSESSMENT_TOKEN
  // Once the token is validated it's stored in a cookie for 24h (multi-step form)
  if (pathname.startsWith('/assessment')) {
    // If no token is configured (local dev), allow through
    if (!ASSESSMENT_TOKEN) return NextResponse.next();

    const urlToken = searchParams.get('token');
    const cookieToken = request.cookies.get(COOKIE_NAME)?.value;

    if (urlToken === ASSESSMENT_TOKEN) {
      // Valid token in URL → set cookie and continue
      const response = NextResponse.next();
      response.cookies.set(COOKIE_NAME, ASSESSMENT_TOKEN, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: COOKIE_MAX_AGE,
        path: '/',
      });
      return response;
    }

    if (cookieToken === ASSESSMENT_TOKEN) {
      // Already have valid cookie (continuing multi-step form)
      return NextResponse.next();
    }

    // No valid token → redirect home
    return NextResponse.redirect(new URL('/', request.url));
  }

  // ── Protect /admin ────────────────────────────────────────────────────────
  // Already protected by password cookie — add a secret path prefix as an
  // extra layer so the URL itself isn't guessable.
  // Admin URL becomes: /admin?key=ADMIN_KEY
  if (pathname.startsWith('/admin')) {
    const ADMIN_KEY = process.env.ADMIN_KEY;
    if (!ADMIN_KEY) return NextResponse.next(); // local dev: allow

    const urlKey  = searchParams.get('key');
    const cookieKey = request.cookies.get('admin_key')?.value;

    if (urlKey === ADMIN_KEY) {
      const response = NextResponse.next();
      response.cookies.set('admin_key', ADMIN_KEY, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 8, // 8 hours
        path: '/admin',
      });
      return response;
    }

    if (cookieKey === ADMIN_KEY) {
      return NextResponse.next();
    }

    // Unknown URL → 404-style redirect to home
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/assessment/:path*', '/admin/:path*'],
};
