type ProfileRow = {
  id: string
  first_name: string | null
  last_name: string | null
}

export function useAuth() {
  const supabase = useSupabaseClient()

  async function getProfile() {
    const { data: { user }, error } = await supabase.auth.getUser()

    if (error || !user) return null

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("id, first_name, last_name")
      .eq("id", user.id)
      .maybeSingle<ProfileRow>()

    if (profileError) {
      console.error(profileError)
      return null
    }

    return {
      id: user.id,
      first_name: profile?.first_name ?? "",
      last_name: profile?.last_name ?? "",
      email: user.email
    }
  }

  async function logout() {
    await supabase.auth.signOut()
    await navigateTo("/auth/login")
  }

  return {
    getProfile,
    logout
  }
}