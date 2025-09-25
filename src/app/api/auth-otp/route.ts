import { NextResponse } from "next/server"
import { createClient, createAdminClient } from "@/utils/supabase/server"
import { Resend } from "resend"
import crypto from "crypto"


const resend = new Resend(process.env.RESEND_API_KEY!)

// Helper to hash OTP with a random salt
function hashOtp(otp: string, salt: string) {
  return crypto
    .createHmac("sha256", salt)
    .update(otp)
    .digest("hex")
}

export async function POST(req: Request) {
  const clientSupabase = await createClient()
  const adminSupabase = createAdminClient()
  const { action, email, code, role, password, full_name, date_of_birth, avartar_url  } = await req.json()
  console.log(action, email, code, role, password, date_of_birth, avartar_url, "all sender")

  if (action === "send") {
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    const salt = process.env.OTP_SALT!
    const hashedOtp = hashOtp(otp, salt)

    // Insert hashed OTP into Supabase
    try {
      const { error } = await adminSupabase.from("otps").insert({
        email,
        code: hashedOtp,
        expires_at: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
        used: false,
      })

      if (error) {
        console.error("Supabase insert error:", error)
        throw new Error("Unable to generate OTP at this time")
      }
    } catch (dbError) {
      console.error("Database error:", dbError)
      return NextResponse.json(
        { success: false, message: "Unable to generate OTP. Please try again." },
        { status: 500 }
      )
    }

    // Send OTP email
    try {
      await resend.emails.send({
        from: "merittadmin@meritt.live",
        to: email,
        subject: "Your login code",
        html: `<p>Your OTP is <b>${otp}</b>. It expires in 5 minutes.</p>`,
      })
    } catch (emailError) {
      console.error("Resend email error:", emailError)
      return NextResponse.json(
        { success: false, message: "OTP was generated but email could not be sent." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  }

  if (action === "verify") {
    try {
      const { data: otpRecord, error: otpError } = await adminSupabase
        .from("otps")
        .select("*")
        .eq("email", email)
        .gte("expires_at", new Date().toISOString())
        .eq("used", false)
        .single();

      if (otpError || !otpRecord) {
        return NextResponse.json({ error: "Invalid or expired code" }, { status: 400 });
      }

      const { code: storedHash } = otpRecord;
      const salt = process.env.OTP_SALT!;
      const inputHash = hashOtp(code, salt);

      if (inputHash === storedHash) {
        // delete OTP confirmed
        await adminSupabase.from("otps").delete().eq("id", otpRecord.id).eq("used", false);
      } else {
        return NextResponse.json({ error: "Invalid code" }, { status: 400 });
      }

      // ✅ check if user exists via RPC
      const { data: existingUserId, error: rpcError } = await adminSupabase.rpc("get_user_by_email", {
        p_email: email,
      });

      if (rpcError) {
        console.error("Supabase RPC error:", rpcError);
        throw new Error("Unable to check if user exists via RPC");
      }

      const user = existingUserId;

      if (!user.id) {
        // if new user ...proceed then
        return NextResponse.json({ success: true, proceed: true, exist: false });
      }

      return NextResponse.json({ proceed: false, exist: true, role: user.role });
    } catch (error) {
      console.error("OTP verification error:", error);
      return NextResponse.json(
        { success: false, message: "OTP verification failed." },
        { status: 500 }
      );
    }
  }


  if(action === "proceed"){

     const { data: newUser, error: newUserError } = await adminSupabase.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: {
          full_name: full_name, 
          avatar_url: avartar_url, 
          role: role,
          date_of_birth: date_of_birth, 
        }
      })
      if (newUserError) {
        console.error("createUserError", newUserError)
        return NextResponse.json({ error: newUserError.message }, { status: 400 })
      }


      if (newUser) {
        const user = newUser.user
        console.log({user})
        
        const {error: insertError} = await adminSupabase.from('profiles').insert({
          id: user.id,
          name: full_name,
          role: role,
          email: user.email,
          avatar_url: avartar_url,
          date_of_birth: date_of_birth, 
        })

        if (insertError) {
          console.error("insertError", insertError)
          return NextResponse.json({ error: insertError.message }, { status: 400 })
        }

        // sign in user
        const { error: signInerror } = await clientSupabase.auth.signInWithPassword({
          email,
          password,
        })

        if (signInerror) {
          console.error("signInUserError", signInerror)
          return NextResponse.json({ error: signInerror.message }, { status: 400 })
        }

        const next = nextLinkbyRole(role)
        
       return NextResponse.json({success: true, url:next })
        
    }
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 })
}



function nextLinkbyRole(role: string){
  let finalRedirect = '/'
  switch (role) {
    case 'landlord':
      finalRedirect = '/landlord/dashboard'
      break
    case 'tenant':
      finalRedirect = '/properties?search=all'
      break
    default:
      finalRedirect = '/properties?search=all'
  }

  return finalRedirect
}