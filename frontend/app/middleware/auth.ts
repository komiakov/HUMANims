export default defineNuxtRouteMiddleware(async (to) => {
  // защищаем только /ims
  if (!to.path.startsWith('/ims')) return

  // на сервере пропускаем проверку (SSR)
  if (process.server) return

  const supabase = useSupabaseClient()

  const { data, error } = await supabase.auth.getSession()

  // если нет сессии — редирект на логин
  if (error || !data.session) {
    return navigateTo('/auth/login')
  }
})