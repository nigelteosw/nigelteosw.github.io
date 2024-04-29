const posts = []

const images = [
    "/images/photos/nigel.JPG",
    "/images/photos/AzfarulMatin38.JPG",
    "/images/photos/faberlous.JPG",
    "/images/photos/bangkok-night.JPG",
    "/images/photos/pinatubo.PNG",
    "/images/photos/concert.jpg"
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