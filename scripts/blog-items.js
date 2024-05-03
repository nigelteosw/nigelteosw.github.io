const posts = []

const images = [
    "/images/nigel.JPG",
    "/images/AzfarulMatin38.JPG",
    "/images/faberlous.JPG",
    "/images/bangkok-night.JPG",
    "/images/pinatubo.PNG",
    "/images/concert.jpg"
]

let imageIndex = 0;

for(let i = 1; i <= 80; i++){
    let item = {
        id: i,
        title: `Post ${i}`,
        image: images[imageIndex]
    }
    posts.push(item);
    imageIndex++;
    if (imageIndex > images.length - 1) imageIndex = 0;
}

// console.log(posts)