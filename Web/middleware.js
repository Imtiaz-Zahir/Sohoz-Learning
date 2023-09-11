import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRE,
  });
  if (request.nextUrl.pathname.startsWith("/admin")||request.nextUrl.pathname.startsWith("/api/admin")) {
    if(token.email!=='1@2.3'){
      return NextResponse.redirect(new URL("/", request.url))
    }
  }
  if (request.nextUrl.pathname.startsWith("/videos")) {
    if (!token){
      return NextResponse.redirect(new URL("/", request.url))
    }else{
      if(request.headers.get("sec-fetch-mode")!=="cors"){
        return NextResponse.redirect(new URL("/", request.url))
      }
    }
  }
  if (request.nextUrl.pathname.startsWith("/dashbord")) {
    if (!token) return NextResponse.redirect(new URL("/", request.url));
  }
  if (
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/api/auth/signin") ||
    request.nextUrl.pathname.startsWith("/register")
  ) {
    if (token) return NextResponse.redirect(new URL("/dashbord", request.url));
  }
  // return NextResponse.redirect(new URL('/', request.url))
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/dashbord/:path*',
// }
