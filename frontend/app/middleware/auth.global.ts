export default defineNuxtRouteMiddleware(async (to) => {
  const supabase = useSupabaseClient()
  const { data, error } = await supabase.auth.getSession()

  // Если пользователь залогинен и пытается зайти на логин
  if (data.session && to.path.startsWith('/auth/login')) {
    return navigateTo('/ims')
  }

  // защищаем только /ims
  if (!to.path.startsWith('/ims')) return

  // если нет сессии — редирект на логин
  if (error || !data.session) {
    return navigateTo('/auth/login')
  }
})
