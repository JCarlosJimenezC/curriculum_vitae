// ============================================
// CV — Interactivity
// ============================================

document.addEventListener("DOMContentLoaded", () => {

  // ---------- Dark-mode toggle ----------
  const darkBtn = document.getElementById("dark-mode-btn");
  const storedTheme = localStorage.getItem("cv-theme");

  if (storedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    darkBtn.textContent = "☀️";
  }

  darkBtn.addEventListener("click", () => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";

    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("cv-theme", "light");
      darkBtn.textContent = "🌙";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("cv-theme", "dark");
      darkBtn.textContent = "☀️";
    }
  });


});
