const container = document.querySelector(".blog-container");

function generateMasonryGrid(columns, posts) {
  container.innerHTML = "";

  let columnWrappers = {};

  for (let i = 0; i < columns; i++) {
    columnWrappers[`column${i}`] = [];
  }

  for (let i = 0; i < posts.length; i++) {
    const column = i % columns;
    columnWrappers[`column${column}`].push(posts[i]);
  }

  for(let i = 0; i < columns; i++){
    let columnPosts = columnWrappers[`column${i}`];
    let div = document.createElement('div');
    div.classList.add('column');

    columnPosts.forEach(post => {
        let postDiv = document.createElement('div');
        postDiv.classList.add('post');
        let image = document.createElement('img');
        image.classList.add('blog-image');
        image.src = post.image;
        
        let hoverDiv = document.createElement('div');
        hoverDiv.classList.add('overlay');
        
        let title = document.createElement('h3');
        title.innerText = post.title;

        let description = document.createElement('p');
        description.innerText = post.description;

        hoverDiv.appendChild(title);
        hoverDiv.appendChild(description);
        
        postDiv.append(image, hoverDiv)
        div.appendChild(postDiv) 
    });
    container.appendChild(div);
}
}

let previousScreenSize = window.innerWidth;

window.addEventListener("resize", () => {
  imageIndex = 0;
  if (window.innerWidth < 600 && previousScreenSize >= 600) {
    generateMasonryGrid(1, posts);
  // } else if (
  //   window.innerWidth >= 600 &&
  //   window.innerWidth < 1000 &&
  //   (previousScreenSize < 600 || previousScreenSize >= 1000)
  // ) {
  //   generateMasonryGrid(2, posts);
  } else if (window.innerWidth >= 1000 && previousScreenSize < 1000) {
    generateMasonryGrid(2, posts);
  }
  previousScreenSize = window.innerWidth;
});

if (previousScreenSize < 600) {
  generateMasonryGrid(1, posts);
// } else if (previousScreenSize >= 600 && previousScreenSize < 1000) {
//   generateMasonryGrid(2, posts);
} else {
  generateMasonryGrid(2, posts);
}


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
