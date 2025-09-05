const theme = ref("light");

function switchTheme() {
  document.documentElement.classList.add("theme-transition");
  theme.value = theme.value == "light" ? "dark" : "light";
  setTimeout(() => {
    document.documentElement.classList.remove("theme-transition");
  }, 300);
}

export function useTheme() {
  return {
    theme,
    switchTheme
  };
}
