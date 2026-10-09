import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { type NextRequest, type NextResponse } from 'next/server'

export function createClient(request: NextRequest) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            if (value === undefined) {
              request.cookies.delete(name)
            } else {
              request.cookies.set(name, value)
            }
          })
          // To set cookies via the response object, you need to return
          // them from your server component or route handler.
        },
      },
    }
  )
}

// Helper to get the supabase client in server components / edge functions
export async function updateSession(request: NextRequest) {
  const supa = createClient(request)
  const { data, error } = await supa.auth.getSession()
  if (error) {
    // redirect to login etc.
  }
  return data.session
}