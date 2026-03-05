type Me = { id: number; email: string; first_name: string; last_name: string }

export const useAuth = () => {
  const api = useApi()

  const user = useState<Me | null>('auth_user', () => null)
  const loaded = useState<boolean>('auth_loaded', () => false)

  const fetchMe = async () => {
    try {
      user.value = await api<Me>('/api/auth/me/')
    } catch {
      user.value = null
    } finally {
      loaded.value = true
    }
  }

  const login = async (email: string, password: string) => {
    await api('/api/auth/login/', {
      method: 'POST',
      body: { email, password },
    })
    await fetchMe()
  }

  const logout = async () => {
    await api('/api/auth/logout/', { method: 'POST' })
    user.value = null
    loaded.value = true
  }

  return { user, loaded, fetchMe, login, logout }
}