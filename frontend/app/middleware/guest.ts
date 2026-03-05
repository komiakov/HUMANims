export default defineNuxtRouteMiddleware(async () => {
  const auth = useAuth()

  if (!auth.loaded.value) {
    await auth.fetchMe()
  }

  if (auth.user.value) {
    return navigateTo('/ims')
  }
})