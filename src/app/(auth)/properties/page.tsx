import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import SignOutButton from "@/components/common/signOutButton"
import GohomePage from "@/components/common/goHomepage"

export default async function PropertySearchPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect("/login")
  console.log(user)  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800">Tenant Search Dashboard</h1>

      <div className="mt-6 bg-white p-6 rounded-xl shadow">
        <p className="text-lg font-semibold">
          Welcome {user.user_metadata?.full_name || "N/A"}
        </p>
        <p className="text-base font-normal">
          email: {user.email || "N/A"}
        </p>
        <p className="text-gray-600 mt-2">
          Role: {user.user_metadata?.role || "N/A"}
        </p>
      </div>
      <div className="flex gap-4">
        <GohomePage />
        <SignOutButton />
      </div>
    </div>
  )
}
