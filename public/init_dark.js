const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const darkMode = localStorage.getItem("darkMode");
const sDarkValue =
  darkMode === "auto"
    ? isDarkMode
      ? true
      : false
    : darkMode === "dark"
    ? true
    : false;

document.documentElement.classList.toggle("s-dark", sDarkValue);
