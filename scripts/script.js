// script.js
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


let paragraph = [...document.querySelectorAll('p')];
let spans = [];

paragraph.forEach(paragraph => {
  let htmlString = '';
  let pArray = paragraph.textContent.split(' ');
  for (let i = 0; i < pArray.length; i++) {
    htmlString += `<span>${pArray[i]}</span> `;
  }
  paragraph.innerHTML = htmlString;
});

spans = [...document.querySelectorAll('span')];

function revealSpans() {
  for(let i = 0; i < spans.length; i++) {
    if(spans[i].parentElement.getBoundingClientRect().top < window.innerHeight * 0.7) { // Change the condition
      let {left, top} = spans[i].getBoundingClientRect();
      top = top - (window.innerHeight * .7); // Adjust the threshold
      let opacityValue = 1 - ((top * 0.01) + (left * 0.001)) < 0.1 ? 0.1 : 1 - ((top * 0.01) + (left * 0.001)).toFixed(3);
      opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3);
      spans[i].style.opacity = opacityValue;
    }
  }
}


window.addEventListener('scroll', () => {
  revealSpans();
});
revealSpans();