import { NextResponse } from 'next/server';
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  afterAuth(auth, req) {
    if (!auth.userId) {
      // User agar signed-out hai, to unhe sign-in page par redirect karein
      const signInUrl = new URL('/sign-in', req.url);
      return NextResponse.redirect(signInUrl); // NextResponse.redirect is specific to Next.js
    }
    return NextResponse.next(); // Continue with the request if authenticated
  },
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

