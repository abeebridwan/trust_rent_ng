import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    // Sign in the user
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.error('Admin login error:', error)
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }

    if (data.user) {
      const role = data.user.user_metadata?.role || 'tenant'
      console.log("daat", data)
      // Only allow admins
      if (role !== 'admin') {
        return NextResponse.json(
          { error: 'Access denied. Admins only.' },
          { status: 403 }
        )
      }

      // Optionally fetch admin profile data
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', data.user.id)
        .single()

      if (profileError) {
        console.error('Admin profile fetch error:', profileError)
        return NextResponse.json(
        { success: false, message:  "Profile does not exist"},
        { status: 500 })
      }

      const next = '/admin/dashboard'

      return NextResponse.json({
        message: 'success',
        user: data.user,
        profile: profile || null,
        url: next,
      })
    }

    return NextResponse.json(
      { error: 'Admin login failed' },
      { status: 400 }
    )
  } catch (error) {
    console.error('Admin login API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
