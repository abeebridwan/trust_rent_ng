import { createAdminClient, createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import SignOutButton from "@/components/common/signOutButton"
import GohomePage from "@/components/common/goHomepage"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function AdminDashboard() {
  const supabase = await createClient()
  const adminSupabase = createAdminClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect("/login")
  console.log(user)  

  let avatarUrl = user.user_metadata?.avatar_url || null;
  if (avatarUrl && !avatarUrl.startsWith('https://')) {
    const { data, error } = await adminSupabase.storage
      .from("avatars")
      .createSignedUrl(avatarUrl, 60 * 60);
    avatarUrl = data?.signedUrl;
    if(error) console.log("fetching avatar", error)
  }

 const getInitials = (name: string) => {
    const names = name.trim().split(' ');
    if (names.length > 1) {
      return (names[0][0] + names[names.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-800">
            Admin Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 flex flex-col items-center">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src={avatarUrl} alt="User avatar" />
              <AvatarFallback>
                {user.user_metadata?.full_name ? getInitials(user.user_metadata.full_name) : 'AD'}
              </AvatarFallback>
            </Avatar>
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