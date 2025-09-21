import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// Redirect target after Supabase OAuth completes. Usage:
// /madrid/auth/return?next=/madrid/seletest
export async function GET(req: Request) {
  const url = new URL(req.url)
  const next = url.searchParams.get('next') || '/madrid/dashboard'
  // We cannot read Supabase session server-side here without server client;
  // simply redirect to target; client Navbar/SeletestCTA will provision user row.
  // Also set an inference cookie for comunidad if we're under /madrid
  const res = NextResponse.redirect(new URL(next, url.origin))
  try {
    // hint cookie for community
    res.cookies.set('community', 'madrid', { path: '/', maxAge: 60 * 60 * 24 * 365 })
  } catch {}
  return res
}
