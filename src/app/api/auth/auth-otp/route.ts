import { NextResponse } from "next/server"
import { createClient, createAdminClient } from "@/utils/supabase/server"
import { Resend } from "resend"
import crypto from "crypto"
import { nextLinkbyRole } from "@/utils/roleRoute"
import { getEmailHtml } from "@/utils/email";

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

  // Detect if request is JSON or FormData
  const contentType = req.headers.get("content-type") || ""

  let action, email, code, role, password, full_name, date_of_birth, avatarFile

  if (contentType.includes("application/json")) {
    const body = await req.json()
    action = body.action
    email = body.email
    code = body.code
    role = body.role
    password = body.password
    full_name = body.full_name
    date_of_birth = body.date_of_birth
  } else if (contentType.includes("multipart/form-data")) {
    const formData = await req.formData()
    action = formData.get("action") as string
    email = formData.get("email") as string
    role = formData.get("role") as string
    password = formData.get("password") as string
    full_name = formData.get("full_name") as string
    date_of_birth = formData.get("date_of_birth") as string
    avatarFile = formData.get("avatar") as File | null
  }
  console.log(action, email, code, role, password, date_of_birth, "all sender")


  if (action === "send") {
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    const salt = process.env.OTP_SALT!
    const hashedOtp = hashOtp(otp, salt)
    const hashedEmail = hashOtp(email, salt)
    // Insert hashed OTP into Supabase
    try {
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
        subject: "Vetarent Verification Code",
        html: getEmailHtml(otp),
        attachments: [
          {
            "path": "https://trust-rent-ng.vercel.app/Logo/Logo-2.png",
            "filename": "Logo-2.png",
            "contentId": "logo-image",
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
        subject: "New Vetarent Verification Code",
        html: getEmailHtml(otp),
        attachments: [
          {
            "path": "https://trust-rent-ng.vercel.app/Logo/Logo-2.png",
            "filename": "Logo-2.png",
            "contentId": "logo-image",
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
    try {
      const salt = process.env.OTP_SALT!;
      const hashedEmail = hashOtp(email, salt)

      const { data: otpRecord, error: otpError } = await adminSupabase
        .from("otps")
        .select("*")
        .eq("email", hashedEmail)
        .gte("expires_at", new Date().toISOString())
        .eq("used", false)
        .single();

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
    
      const { data: existingUser } = await adminSupabase
        .from('profiles')
        .select('*')
        .eq('email', email)
        .single()

      console.log({existingUser})

      if (existingUser) {
        console.error("Existing user error");
        return NextResponse.json({ proceed: false, exist: true });
      }

      const user = existingUser;

      if (!user) {
        // if new user ...proceed then
        return NextResponse.json({ success: true, proceed: true, exist: false });
      }

      
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
        let avatarPath: string | null = null

        if (avatarFile) {
          avatarPath = `${user.id}/${full_name}/${Date.now()}-${avatarFile.name}`;

          const { error: uploadError } = await adminSupabase.storage
            .from("avatars") // 👈 private bucket
            .upload(avatarPath, avatarFile, {
              upsert: true,
              contentType: avatarFile.type,
            });

          if (uploadError) {
            console.error("Upload error:", uploadError.message)
            avatarPath = null
            throw new Error("Avatar upload failed: " + uploadError.message);
          }
        }

        const { error: updateError } = await adminSupabase.auth.admin.updateUserById(user.id, {
            user_metadata: {
              ...user.user_metadata, // Keep existing metadata
              avatar_url: avatarPath,
            }
          })
          
          if (updateError) {
            console.error("updateMetaError", updateError)
            throw new Error("auth user metadata for for avatarPath/avatar_url...  not updated")
          }

        const {error: insertError} = await adminSupabase.from('profiles').insert({
          id: user.id,
          name: full_name,
          role: role,
          email: user.email,
          avatar_url: avatarPath,
          date_of_birth: date_of_birth,
          provider:"Direct"
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

