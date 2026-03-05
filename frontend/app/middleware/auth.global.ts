export default defineNuxtRouteMiddleware(async (to) => {
  // проверяем только страницы /ims/*
  if (!to.path.startsWith('/ims')) {
    return
  }

  const auth = useAuth()

  if (!auth.loaded.value) {
    await auth.fetchMe()
  }

  if (!auth.user.value) {
    return navigateTo('/auth/login')
  }
})