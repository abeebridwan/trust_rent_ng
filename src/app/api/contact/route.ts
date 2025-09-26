import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getContactFormEmailHtml } from "@/utils/email";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await resend.emails.send({
      from: "merittadmin@meritt.live",
      to: ["olumideuae@gmail.com", "support@vetarent.ng", "support@vetarent.com"],
      subject: `New Contact Form Submission: ${subject}`,
      html: getContactFormEmailHtml(name, email, phone, subject, message),
       attachments: [
          {
            path: "https://trust-rent-ng.vercel.app/Logo/Logo-2.png",
            filename: "Logo-2.png",
            contentId: "logo-image",
          },
        ],
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Resend email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
