import { NextResponse } from "next/server"
import { createClient, createAdminClient } from "@/utils/supabase/server"
import { Resend } from "resend"
import crypto from "crypto"
import { nextLinkbyRole } from "@/utils/roleRoute"
import { getForgotPasswordEmailHtml } from "@/utils/email";

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
  const { action, email, code, role, password, full_name, avartar_url  } = await req.json()
  console.log(action, email, code, role, password, full_name, avartar_url, "all sender")

  if (action === "send") {
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    const salt = process.env.OTP_SALT!
    const hashedOtp = hashOtp(otp, salt)
    const hashedEmail = hashOtp(email, salt)

    // Insert hashed OTP into Supabase
    try {
      const { data: user, error: userError } = await adminSupabase
        .from('profiles')
        .select('id, provider')
        .eq('email', email)
        .single()

        console.log(user)

      if (!user) {
        console.error("Supabase check error:", userError)
        return NextResponse.json(
        { success: false, message:  "The email you entered does not exist, please try again."},
        { status: 500 })
      } 

      if (user.provider !== "Direct") {
        return NextResponse.json(
        { success: false, message:  "Different Signup Method used"},
        { status: 500 })
      } 

      await adminSupabase.from("otps").delete().eq("email", hashedEmail).eq("used", false);
      const { error } = await adminSupabase.from("otps").insert({
        email: hashedEmail,
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
        subject: "Vetarent Password Reset Code",
        html: getForgotPasswordEmailHtml(otp),
        attachments: [
          {
            path: "https://trust-rent-ng.vercel.app/Logo/Logo-2.png",
            filename: "Logo-2.png",
            contentId: "logo-image",
          },
        ],
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

  if (action === "resend") {
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    const salt = process.env.OTP_SALT!
    const hashedOtp = hashOtp(otp, salt)
    const hashedEmail = hashOtp(email, salt)

    // Insert hashed OTP into Supabase
    try {
      const {error: deleteError } =await adminSupabase.from("otps").delete().eq("email", hashedEmail).eq("used", false);
      
      if (deleteError) {
        console.error("Supabase delete otp error:", deleteError)
        return NextResponse.json(
        { success: false, message:  "otp resend unsuccessful"},
        { status: 500 })
      } 

      const { data: user, error: userError } = await adminSupabase
        .from('profiles')
        .select('id, provider')
        .eq('email', email)
        .single()

        console.log(user)

      if (!user) {
        console.error("Supabase check error:", userError)
        return NextResponse.json(
        { success: false, message:  "user email doesn't exist"},
        { status: 500 })
      } 

      if (user.provider !== "Direct") {
        return NextResponse.json(
        { success: false, message:  "Different Signup Method used"},
        { status: 500 })
      } 

      const { error } = await adminSupabase.from("otps").insert({
        email: hashedEmail,
        code: hashedOtp,
        expires_at: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
        used: false,
      })

      if (error) {
        console.error("Supabase insert error:", error)
        throw new Error("Unable to generate new OTP at this time")
      }
    } catch (dbError) {
      console.error("Database error:", dbError)
      return NextResponse.json(
        { success: false, message: "Unable to generate new OTP. Please try again." },
        { status: 500 }
      )
    }

    // Send OTP email
    try {
      await resend.emails.send({
        from: "merittadmin@meritt.live",
        to: email,
        subject: "New Vetarent Password Reset Code",
        html: getForgotPasswordEmailHtml(otp),
        attachments: [
          {
            path: "https://trust-rent-ng.vercel.app/Logo/Logo-2.png",
            filename: "Logo-1.png",
            contentId: "logo",
          },
        ],
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
    const salt = process.env.OTP_SALT!;
    const hashedEmail = hashOtp(email, salt)
    try {
      const { data: otpRecord, error: otpError } = await adminSupabase
        .from("otps")
        .select("*")
        .eq("email", hashedEmail)
        .gte("expires_at", new Date().toISOString())
        .eq("used", false)
        .single();
        console.log({otpRecord})

      if (otpError || !otpRecord) {
        return NextResponse.json({ error: "Invalid or expired code" }, { status: 400 });
      }

      const { code: storedHash } = otpRecord;
      const inputHash = hashOtp(code, salt);

      if (inputHash === storedHash) {
        // delete OTP confirmed
        await adminSupabase.from("otps").delete().eq("id", otpRecord.id).eq("used", false);
      } else {
        return NextResponse.json({ error: "Invalid code" }, { status: 400 });
      }

      return NextResponse.json({ success: true, proceed: true, exist: false });

    } catch (error) {
      console.error("OTP verification error:", error);
      return NextResponse.json(
        { success: false, message: "OTP verification failed." },
        { status: 500 }
      );
    }
  }


  if(action === "reset"){
     const { data: user, error: userError } = await adminSupabase
        .from('profiles')
        .select('id, provider')
        .eq('email', email)
        .single()

        console.log(user)

     if (!user) {
        console.error("Supabase check error:", userError)
        return NextResponse.json(
        { success: false, message:  "user email doesn't exist"},
        { status: 500 })
      } 


     const { error: resetError } = await adminSupabase.auth.admin.updateUserById(user.id, {
        password,
      })

      if (resetError) {
        console.error("ResetUserError", resetError)
        return NextResponse.json({ error: resetError.message }, { status: 400 })
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

  return NextResponse.json({ error: "Invalid action" }, { status: 400 })
}

