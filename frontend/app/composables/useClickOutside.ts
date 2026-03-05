export function useClickOutside() {
  const isOpen = ref(false)
  const dropdownRef = ref<HTMLElement | null>(null)

  const handleClickOutside = (event: MouseEvent) => {
    const el = dropdownRef.value
    if (el && !el.contains(event.target as Node)) {
      isOpen.value = false
    }
  }

  onMounted(() => document.addEventListener('click', handleClickOutside))
  onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))

  return { isOpen, dropdownRef }
}