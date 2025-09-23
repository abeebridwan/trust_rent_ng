// First, let's add a simple test route to see if routing works
// app/auth/test/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: "Auth route working" })
}
