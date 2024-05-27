import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";





// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

  // handle redirect for unauthorized user

  const path = request.nextUrl.pathname;

  const publicPath = [ "/callback","/homepage",];
  let isPublicPath = false;

  for (const publicPathItem of publicPath) {
    if (path.includes(publicPathItem)) {
      isPublicPath = true;
      break;
    }
  }

  // if user is in restricted pages , but no token , redirect user to auth/login
  if (!isPublicPath && !request.cookies.has("accesstoken")) {
    return NextResponse.redirect(new URL("/homepage", request.url));
  }

  // if user is in public pages, but have token, redirect user to / (app)
  if (isPublicPath && request.cookies.has("accesstoken")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const response = NextResponse.next();
  return response;
}


export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    "/((?!api|_next/static|_next/image|logo.svg|next.svg|vercel.svg|homepage_pictures|loading|logo|others|reviews|specification|favicon.ico).*)",
  ],
};