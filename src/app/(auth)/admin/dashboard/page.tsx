import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import SignOutButton from "@/components/common/signOutButton"
import GohomePage from "@/components/common/goHomepage"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AdminDashboard() {
  const supabase = await createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) redirect("/login")
  console.log(session)  
  const user = session.user

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-800">
            Admin Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-lg font-semibold">
              Welcome {user.user_metadata?.full_name || "N/A"}
            </p>
            <p className="text-base font-normal">
              email: {user.email || "N/A"}
            </p>
            <p className="text-gray-600">
              Role: {user.user_metadata?.role || "N/A"}
            </p>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex gap-4 mt-6">
        <GohomePage />
        <SignOutButton />
      </div>
    </div>
  )
}