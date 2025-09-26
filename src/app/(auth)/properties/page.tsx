import { createAdminClient, createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import SignOutButton from "@/components/common/signOutButton"
import GohomePage from "@/components/common/goHomepage"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function PropertySearchPage() {
  const supabase = await createClient()
  const adminSupabase = createAdminClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect("/login")

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
      <h1 className="text-3xl font-bold text-center text-gray-800">Tenant Search Dashboard</h1>

      <div className="mt-6 bg-white p-6 rounded-xl shadow flex flex-col items-center">
        <Avatar className="w-24 h-24 mb-4">
          <AvatarImage src={avatarUrl} alt="User avatar" />
          <AvatarFallback>
            {user.user_metadata?.full_name ? getInitials(user.user_metadata.full_name) : 'TE'}
          </AvatarFallback>
        </Avatar>
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
      <div className="flex gap-4 mt-4">
        <GohomePage />
        <SignOutButton />
      </div>
    </div>
  )
}
