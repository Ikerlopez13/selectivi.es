import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const next = url.searchParams.get('next') || '/madrid/dashboard'
  return NextResponse.redirect(new URL(next, url.origin))
}
