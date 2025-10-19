import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const next = url.searchParams.get("next") || "/andalucia/dashboard";
  const res = NextResponse.redirect(new URL(next, url.origin));
  try {
    res.cookies.set("community", "andalucia", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
  } catch {}
  return res;
}
