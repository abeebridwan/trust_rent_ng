import { NextResponse } from 'next/server'
import { createClient, createAdminClient } from '@/utils/supabase/server'
import { Resend } from 'resend'
import { getWelcomeEmailHtml } from '@/utils/email'

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function GET(request: Request) {

try {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  let next = searchParams.get('next') ?? '/properties?search=all'
  const role = searchParams.get('role') ?? "tenant"
  const flow = searchParams.get('flow') ?? "login"
  console.log(next, role, flow, "callback")
  if (!next.startsWith('/')) {
    next = '/'
  }
  
  if (code) {
    const supabase = await createClient()
    const adminSupabase = createAdminClient()
    const {  data: sessionData, error } = await supabase.auth.exchangeCodeForSession(code)

    

    if (!error && sessionData) {
      const user = sessionData.user

      // Update auth user metadata with admin client
      const { data: updatedUserData, error: updateError } = await adminSupabase.auth.admin.updateUserById(user.id, {
      user_metadata: {
        ...user.user_metadata, // Keep existing metadata
        role: role,
        date_of_birth: "unknown",
      }
    })

      if (updateError) {
        console.error("updateError", updateError)
        throw new Error("auth user metadata not updated")
      }

     // ✅ REFRESH THE SESSION with updated metadata
      const { data: refreshedSession, error: refreshError } = await supabase.auth.refreshSession()
      
      if (refreshError) {
        console.error("Failed to refresh session:", refreshError)
      } else {
        //console.log("Session refreshed with new metadata:", refreshedSession.user?.user_metadata)
      }

      // Use the refreshed user data
      const currentUser = refreshedSession?.user || updatedUserData.user
      const provider = currentUser.app_metadata.provider === 'google' ? 'Google' : 'Apple'

      
      // Create profile if it doesn't exist
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('id, role, provider')
        .eq('id', currentUser.id)
        .single()

      // After exchangeCodeForSession
       if (!existingProfile) {
        if (flow === "signup") {
          // ✅ Only create profile in signup flow
          await supabase.from('profiles').insert({
            id: currentUser.id,
            name: currentUser.user_metadata.full_name || currentUser.email,
            role: currentUser.user_metadata.role,
            email: currentUser.email,
            avatar_url: currentUser.user_metadata.avatar_url || null,
            date_of_birth: currentUser.user_metadata.date_of_birth || "unknown",
            provider:provider
            })

            // Send welcome email
          try {
            await resend.emails.send({
              from: "merittadmin@meritt.live",
              to: currentUser.email!,
              subject: "Welcome to Vetarent!",
              html: getWelcomeEmailHtml(currentUser.user_metadata.full_name || currentUser.email!),
              attachments: [
                {
                  path: "https://trust-rent-ng.vercel.app/Logo/Logo-2.png",
                  filename: "Logo-2.png",
                  contentId: "logo-image",
                },
              ],
            });
          } catch (emailError) {
            console.error("Resend email error:", emailError);
          }
          } else {
              // 🚫 User tried to login but never signed up
              // Delete their auth.users row so it doesn't remain
              console.log("user has no account")
              await adminSupabase.auth.admin.deleteUser(currentUser.id)
              return NextResponse.redirect(`${origin}/signup?reason=not_registered`)
          }
        } else {
          // Profile exists → check provider mismatch
          if (existingProfile.provider === "Direct") {
            
            console.log('Profile exist and not google')
             // Update auth user metadata with admin client
            const { error: updateError } = await adminSupabase.auth.admin.updateUserById(user.id, {
            user_metadata: {
              ...user.user_metadata, // Keep existing metadata
              role: existingProfile.role,
            }
          })
          if (updateError) {
            console.error("updateMetaError", updateError)
            throw new Error("auth user metadata for mismatch... not updated")
          }
          }

          //refresh data
          const { error: refreshError } = await supabase.auth.refreshSession()
      
          if (refreshError) {
            console.error("Failed to refresh session:", refreshError)
          } else {
            //console.log("Session refreshed with new metadata:", refreshedSession.user?.user_metadata)
          }
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