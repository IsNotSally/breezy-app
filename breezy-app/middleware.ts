

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/members-only', request.url))
// }
import  {withMiddlewareAuthRequired}  from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired();

export const config = {
  matcher: '/members-only/:path*'
}

