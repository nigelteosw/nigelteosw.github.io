const posts = []

const images = [
    "../images/photos/nigel.JPG",
    "../images/photos/faberlous.JPG",
    "../images/photos/housecomm.JPG",
    "../images/photos/langtanglirung.JPG",
    "../images/photos/kyanging.JPG",
    "../images/photos/concert.jpg",
    "../images/photos/pulai.JPG",
    "../images/photos/artsweek2324.JPEG",
    "../images/photos/pinatubojeep.JPG",
    "../images/photos/pinatubobeach.JPG",
    "../images/photos/pinatubo.JPG",
    "../images/photos/bondingtrek.JPG",
    "../images/photos/anambasboat.JPG",
    "../images/photos/tembuconversationsasean2.JPG",
    "../images/photos/tembuconversationsasean.JPG",
    "../images/photos/openhouse.JPG",
    "../images/photos/tstudios.JPG",
    "../images/photos/tstudiosphotowalk.JPG",
    "../images/photos/mountfaber.JPG",
    "../images/photos/bangkok-night.JPG",
]

const title = [
    "Anambas Regency",
    "NUS Rovers @ Mount Faber",
    "Tancho House Committee",
    "Langtang Lirung",
    "Kyanging Gompa",
    "NUS Symphony Orchestra",
    "NUS Rovers @ Pulai",
    "Tembusu Arts Week AY23/24 Sem 2",
    "Pinatubo Jeep Ride",
    "Pinatubo",
    "Pinatubo Crater Lake",
    "NUS Rovers Bonding Trek",
    "The Four Friends",
    "Tembusu Conversations ASEAN",
    "Tembusu Conversations ASEAN",
    "Tembusu Open House",
    "tStudios",
    "tStudios Photo Walk",
    "Mount Faber",
    "Bangkok",
]

const description = [

]

let imageIndex = 0;

for(let i = 1; i <= images.length; i++){
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