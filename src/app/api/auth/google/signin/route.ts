import { createClient } from '@/util/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { searchParams } = new URL(request.url)
    const role = searchParams.get('role') || "tenant"

    const next = role === 'landlord' ? '/landlord/dashboard' : role === 'tenant'? '/properties?search=all': "";
    const redirectTo = `${process.env.NEXT_PUBLIC_HOST_URL}/auth/callback?next=${encodeURIComponent(next)}&role=${encodeURIComponent(role)}`
    
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    if (data.url) {
      // Directly redirect user to Google login
      return NextResponse.redirect(data.url)
    }

    return NextResponse.json({ error: 'No redirect URL received' }, { status: 400 })
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}