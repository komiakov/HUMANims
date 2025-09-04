const theme = ref("dark");

function changeTheme() {
    document.documentElement.classList.add('theme-transition')
    theme.value = theme.value == 'dark' ? 'light' : 'dark'
    setTimeout(() => {
    document.documentElement.classList.remove('theme-transition')
  }, 300)
}

export function useThemes() {
  return {
    theme,
    changeTheme,
  };
}
