// script.js
// Create a label element
const label = document.createElement('label');
label.classList.add('switch');

// Create an input element
const input = document.createElement('input');
input.setAttribute('type', 'checkbox');

// Create a span element
const span = document.createElement('span');
span.classList.add('slider');

// Append the input and span elements to the label
label.appendChild(input);
label.appendChild(span);

document.body.appendChild(label);


let minimap = document.createElement("div");
let minimapSize = document.createElement("div");
let viewer = document.createElement("div");
let minimapContent = document.createElement("iframe");
let scale = 0.1;
let realScale;

minimap.className = "minimap__container";
minimapSize.className = "minimap__size";
viewer.className = "minimap__viewer";
minimapContent.className = "minimap__content";

minimap.append(minimapSize, viewer, minimapContent);
document.body.appendChild(minimap);

let html = document.documentElement.outerHTML.replace(
  /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  ""
);

let iframeDoc = minimapContent.contentWindow.document;

iframeDoc.open();
iframeDoc.write(html);
iframeDoc.close();

function getDimensions() {
  let bodyWidth = document.body.clientWidth;
  let bodyRatio = document.body.clientHeight / bodyWidth;
  let winRatio = window.innerHeight / window.innerWidth;

  minimap.style.width = "15%";

  realScale = minimap.clientWidth / bodyWidth;

  minimapSize.style.paddingTop = `${bodyRatio * 100}%`;
  viewer.style.paddingTop = `${winRatio * 100}%`;

  minimapContent.style.transform = `scale(${realScale})`;
  minimapContent.style.width = `${100 / realScale}%`;
  minimapContent.style.height = `${100 / realScale}%`;
}

function trackScroll() {
  viewer.style.transform = `translateY(${window.scrollY * realScale}px)`;
}

getDimensions();
window.addEventListener("scroll", trackScroll);
window.addEventListener("resize", getDimensions);

document.addEventListener("keydown", function (event) {
  if (event.key === "x") {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    iframeDoc.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
  }
});

// Check localStorage for user's dark mode preference when the page loads
window.addEventListener("DOMContentLoaded", () => {
  const isDarkMode = localStorage.getItem("darkMode") === "true";

  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    iframeDoc.body.classList.add("dark-mode");
  }
});


