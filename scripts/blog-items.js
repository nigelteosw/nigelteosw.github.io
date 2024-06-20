const posts = []

const images = [
    "../images/nigel.JPG",
    "../images/AzfarulMatin38.JPG",
    "../images/faberlous.JPG",
    "../images/bangkok-night.JPG",
    "../images/pinatubo.PNG",
    "../images/concert.jpg"
]

const title = [
    "Nigel",
    "Azfarul Matin",
    "Faberlous",
    "Bangkok Night",
    "Pinatubo",
    "Concert"
]

const description = [
    "Nigel is a great friend of mine. He is a very talented photographer.",
    "Azfarul Matin is a great friend of mine. He is a very talented photographer.",
    "Faberlous is a great friend of mine. He is a very talented photographer.",
    "Bangkok Night is a great friend of mine. He is a very talented photographer.",
    "Pinatubo is a great friend of mine. He is a very talented photographer.",
    "Concert is a great friend of mine. He is a very talented photographer."
]

let imageIndex = 0;

for(let i = 1; i <= 80; i++){
    let item = {
        id: i,
        title: `${title[imageIndex]}`,
        description: `${description[imageIndex]}`,
        image: images[imageIndex]
    }
    posts.push(item);
    imageIndex++;
    if (imageIndex > images.length - 1) imageIndex = 0;
}

// console.log(posts)