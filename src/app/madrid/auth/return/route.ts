import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const next = url.searchParams.get('next') || '/madrid/dashboard'
  const res = NextResponse.redirect(new URL(next, url.origin))
  try {
    res.cookies.set('community', 'madrid', { path: '/', maxAge: 60 * 60 * 24 * 365 })
  } catch {}
  return res
}
