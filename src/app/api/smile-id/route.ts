
import { NextResponse } from "next/server"
import axios from "axios"

// This is a placeholder for the user ID. In a real application, you would get this from the authenticated user.
const USER_ID = "12345"

// Environment variables should be set in your .env.local file
const SMILE_ID_PARTNER_ID = process.env.SMILE_ID_PARTNER_ID
const SMILE_ID_API_KEY = process.env.SMILE_ID_API_KEY
const SMILE_ID_SID_SERVER = process.env.SMILE_ID_SID_SERVER || "0"

export async function POST() {
  try {
    if (!SMILE_ID_PARTNER_ID || !SMILE_ID_API_KEY) {
      return NextResponse.json(
        { error: "Smile ID environment variables are not set" },
        { status: 500 }
      )
    }

    const requestBody = {
      user_id: USER_ID,
      job_id: `job_${USER_ID}_${Date.now()}`,
      partner_id: SMILE_ID_PARTNER_ID,
      callback_url: "http://localhost:3000/kyc/callback",
      partner_params: {
        user_id: USER_ID,
        job_id: `job_${USER_ID}_${Date.now()}`,
      },
    };

    const smileIdUrl = SMILE_ID_SID_SERVER === "1"
        ? "https://api.smileidentity.com/v1/token"
        : "https://api.sandbox.smileidentity.com/v1/token";

    const response = await axios.post(
      smileIdUrl,
      requestBody,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error generating Smile ID signature:", error)
    return NextResponse.json(
      { error: "Failed to generate Smile ID signature" },
      { status: 500 }
    )
  }
}
