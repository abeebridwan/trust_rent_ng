import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase environment variables')
    return NextResponse.next()
  }

  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll()
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          request.cookies.set(name, value)
          response.cookies.set(name, value, options)
        })
      },
    },
  })

  try {
    const { data: { user }, error } = await supabase.auth.getUser()
    if (error) console.error('Auth error in middleware:', error.message)

    const isAuthRoute = request.nextUrl.pathname.startsWith('/login') ||
                        request.nextUrl.pathname.startsWith('/signup') ||
                        request.nextUrl.pathname.startsWith('/auth')  ||
                         request.nextUrl.pathname === '/admin/login'

    // Redirect unauthenticated users accessing protected routes
    if (!user) {
      const protectedRoutes = ['/landlord', '/properties', '/admin']
      if (protectedRoutes.some(path => request.nextUrl.pathname.startsWith(path))) {
        const loginUrl = new URL('/login', request.url)
        loginUrl.searchParams.set('redirectTo', request.nextUrl.pathname)
        return NextResponse.redirect(loginUrl)
      }
    }

    // Redirect authenticated users away from login/signup
    if (user && isAuthRoute) {
      // Example: assume you store role in user.metadata.role
      const role = user?.user_metadata?.role

      let redirectPath = '/'
      switch (role) {
        case 'landlord':
          redirectPath = '/landlord/dashboard'
          break
        case 'tenant':
          redirectPath = '/properties?search=all'
          break
        case 'admin':
          redirectPath = '/admin/dashboard'
          break
        default:
          redirectPath = '/landlord/dashboard' // fallback
      }

      return NextResponse.redirect(new URL(redirectPath, request.url))
    }

  } catch (error) {
    console.error('Unexpected error in middleware:', error)
  }

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$|api/).*)',
  ],
}
