// script.js

document.addEventListener("keydown", function (event) {
  if (event.key === "x") {
    document.body.classList.toggle("dark-mode");
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
