import { NextResponse, type NextRequest } from "next/server";

/**
 * `/buy` was a byte-for-byte duplicate of `/inventory` (same filters, same
 * cards, no inbound links of its own). Keep old links and bookmarks alive
 * with a permanent redirect instead of maintaining two copies of the page.
 */
export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  url.pathname = "/inventory";
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: "/buy",
};
