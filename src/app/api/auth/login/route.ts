import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { nextLinkbyRole } from "@/utils/roleRoute"

export async function POST(request: NextRequest) {
  try {
    const { email, password, rememberMe } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    const supabase = await createClient(rememberMe)

    // Sign in the user
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.error('Login error:', error)
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }

    if (data.user) {
      // Optionally fetch user profile data
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', data.user.id)
        .single()

      if (profileError) {
        console.error('Profile fetch error:', profileError)
        return NextResponse.json(
        { success: false, message:  "Profile does not exist"},
        { status: 500 })
      }
      
      const next = nextLinkbyRole(data.user.user_metadata.role)
        
      return NextResponse.json({
        message: 'success',
        user: data.user,
        profile: profile || null,
        url:next
      })
    }

    return NextResponse.json(
      { error: 'Login failed' },
      { status: 400 }
    )

  } catch (error) {
    console.error('Login API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}