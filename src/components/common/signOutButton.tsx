"use client"
import { supabase } from "@/utils/supabase/client"
import { Button } from "../ui/button"

export default function SignOutButton() {
  const handleSignOut = async () => {
    await supabase.auth.signOut()
    window.location.href = "/login" // redirect after logout
  }

  return (
    <Button
      onClick={handleSignOut}
      className="mt-6 px-4 py-2 bg-vetarent-orange text-white rounded-lg hover:bg-vetarent-orange/20"
    >
      Sign Out
    </Button>
  )
}
