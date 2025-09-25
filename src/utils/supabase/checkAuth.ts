import { createClient } from '@/utils/supabase/server'

export async function checkAuth() {
  const supabase = await createClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

   if (error || !user) {
    throw new Error("Unauthorized");
  }
  
  //throw 401 for unauthorized
  return { user, supabase }
}
