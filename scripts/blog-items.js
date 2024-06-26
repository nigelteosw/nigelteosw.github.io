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
    "On a STEER trip with NUS Seafarers, we visited villages that hatched turtle eggs.",
    "NUS Roves organized a hike to Mount Faber during the reading week AY23/24 Sem 2.",
    "As the house captain of Tancho, I led the house committee to organize events for the house.",
    "While hiking the Langtang Valley trail, we managed to catch a glimpse of Langtang Lirung, a mountain in the Langtang Himal range in Nepal.",
    "The last stop of the Langtang Valley trek was Kyanging Gompa, a Buddhist monastery in the Langtang region.",
    "I was contracted by the NUS Symphony Orchestra to photograph their performance at the University Cultural Centre.",
    "NUS Rovers organized a hike to Gunnung Pulai in Johor during the recess week AY23/24 Sem 2.",
    "As a bassist in a band, I performed at the Tembusu Arts Week in AY23/24 Sem 2.",
    "We rode jeeps to the base of Mount Pinatubo before hiking to the crater lake.",
    "The hike to Mount Pinatubo was a challenging but rewarding experience.",
    "The Pinatubo Crater Lake was a beautiful sight to behold.",
    "The NUS Rovers committee organized a bonding trek to Gunnung Pulai.",
    "The Four Friends, a schooner that took us on a trip around the Anambas Regency.",
    "Tembusu Conversations ASEAN was a series of talks and discussions on ASEAN.",
    "A group of indonesian NUS students shared their experiences with Dr. Marty M. Natalegawa.",
    "Tembusu Open House was an event where residents showcased their talents and hobbies.",
    "I led tStudios, a student-run photography studio in Tembusu College as its head in AY2022/2023.",
    "tStudios and I led a photo walk around Chinatown to teach students about photography.",
    "Mount Faber is a hill in Singapore that offers a panoramic view of the city.",
    "Bangkok is a city in Thailand known for its vibrant street life and ornate shrines.",
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