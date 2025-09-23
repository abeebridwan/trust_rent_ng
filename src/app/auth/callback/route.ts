import { NextResponse } from 'next/server'
import { createClient } from '@/util/supabase/server'

export async function GET(request: Request) {

try {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  let next = searchParams.get('next') ?? '/properties?search=all'
  const role = searchParams.get('role') ?? "tenant"
  console.log(next, role, "callback")
  if (!next.startsWith('/')) {
    next = '/'
  }
  
  if (code) {
    const supabase = await createClient()
    const {  data: sessionData, error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error && sessionData) {
      const user = sessionData.user
      // Create profile if it doesn't exist
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('id, role')
        .eq('id', user.id)
        .single()

      if (!existingProfile) {
        await supabase.from('profiles').insert({
          id: user.id,
          name: user.user_metadata.full_name || user.email,
          role: role,
          email: user.email,
          avatar_url: user.user_metadata.avatar_url || null,
          date_of_birth: null, 
        })
      }

      const forwardedHost = request.headers.get('x-forwarded-host') 
      const isLocalEnv = process.env.NODE_ENV === 'development'

      // Determine redirect based on role
      const existingRole = existingProfile?.role 
      let finalRedirect = '/'
      
      switch (existingRole) {
        case 'landlord':
          finalRedirect = '/landlord/dashboard'
          break
        case 'tenant':
          finalRedirect = '/properties?search=all'
          break
        default:
          finalRedirect = '/properties?search=all'
      }

      if (isLocalEnv) {
        if(existingRole){
          return NextResponse.redirect(`${origin}${finalRedirect}`)
        }
        return NextResponse.redirect(`${origin}${next}`)
      } else if (forwardedHost) {
        if(existingRole){
          return NextResponse.redirect(`https://${forwardedHost}${finalRedirect}`)
        }
        return NextResponse.redirect(`https://${forwardedHost}${next}`)
      } else {
        if(existingRole){
          return NextResponse.redirect(`${origin}${existingRole}`)
        }
        return NextResponse.redirect(`${origin}${next}`)
      }
    }
  }
  } catch (err) {
    console.error(err)
    return NextResponse.redirect(`${origin}/signup`)
  }
  
}