import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const next = url.searchParams.get('next') || '/dashboard'
  const community = url.searchParams.get('community') || 'general'

  if (community === 'catalunya') {
    return NextResponse.redirect('https://selectivi.cat/login')
  }

  const response = NextResponse.redirect(new URL(next, url.origin))
  response.cookies.set('community', community, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  })

  return response
}
