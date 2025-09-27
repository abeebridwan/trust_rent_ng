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
    request: { headers: request.headers },
  })

  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll: (cookiesToSet) => {
        cookiesToSet.forEach(({ name, value, options }) => {
          request.cookies.set(name, value)
          response.cookies.set(name, value, options)
        })
      },
    },
  })

  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser()
    //if (error) console.error('Auth error in middleware:', error.message)

    const authRoutes = ['/login', '/signup', '/admin/login']

    // 🔒 Protect routes for unauthenticated users
    if (!user) {
      const protectedRoutes = ['/landlord', '/properties', '/admin']
      if (
        protectedRoutes.some((path) => request.nextUrl.pathname.startsWith(path)) &&
        !authRoutes.includes(request.nextUrl.pathname)
      ) {
        const loginUrl = new URL('/login', request.url)
        loginUrl.searchParams.set('redirectTo', request.nextUrl.pathname)
        return NextResponse.redirect(loginUrl)
      }
    }

    // 🔑 Role-based restrictions
    if (user) {
      const role = user.user_metadata?.role || 'tenant' // default fallback

      // Skip role checks for auth routes
      if (!authRoutes.includes(request.nextUrl.pathname)) {
        // Landlord cannot access tenant routes
        if (role === 'landlord' && request.nextUrl.pathname.startsWith('/properties')) {
          return NextResponse.redirect(new URL('/landlord/dashboard', request.url))
        }

        // Tenant cannot access landlord routes
        if (role === 'tenant' && request.nextUrl.pathname.startsWith('/landlord')) {
          return NextResponse.redirect(new URL('/properties?search=all', request.url))
        }

        // Only admins can access /admin
        if (role !== 'admin' && request.nextUrl.pathname.startsWith('/admin')) {
          return NextResponse.redirect(new URL('/', request.url))
        }
      }

      // Redirect authenticated users away from login/signup/admin login
      if (authRoutes.includes(request.nextUrl.pathname)) {
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
            redirectPath = '/properties?search=all'
        }
        return NextResponse.redirect(new URL(redirectPath, request.url))
      }
    }
  } catch (err) {
    console.error('Unexpected error in middleware:', err)
  }

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$|api/).*)',
  ],
}
