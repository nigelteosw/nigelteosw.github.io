document.addEventListener("keydown", function (event) {
  if (event.key === "x") {
    const isDarkMode = document.body.classList.toggle("light-mode");
    iframeDoc.body.classList.toggle("light-mode");
    localStorage.setItem("lightMode", isDarkMode);
  }
});

// Check localStorage for user's dark mode preference when the page loads
window.addEventListener("DOMContentLoaded", () => {
  const isDarkMode = localStorage.getItem("lightMode") === "true";

  if (isDarkMode) {
    document.body.classList.add("light-mode");
    iframeDoc.body.classList.add("light-mode");
  }
});


