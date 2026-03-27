import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next({ request });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
