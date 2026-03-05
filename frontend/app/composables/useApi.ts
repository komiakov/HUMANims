export const useApi = () => {
  const headers = import.meta.server ? useRequestHeaders(['cookie']) : undefined

  return $fetch.create({
    baseURL: '/',            // важно: идём на Nuxt origin (/api/** уйдёт в proxy)
    credentials: 'include',  // важно: cookies
    headers,                 // важно: SSR прокидывает cookie
  })
}