export default defineNuxtPlugin(async () => {
  const auth = useAuth()
  if (!auth.loaded.value) {
    await auth.fetchMe()
  }
})