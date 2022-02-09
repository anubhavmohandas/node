let express = require('express');
let app = express();
let port = 8210;

// const city = 
// [
//     {
//         "_id": "6187738a62a1816f8858634e",
//         "location_id": 4,
//         "location_name": "Bibvewadi, Pune",
//         "state_id": 2,
//         "state": "Maharashtra",
//         "country_name": "India"
//     },
//     {
//         "_id": "6187738a62a1816f8858634d",
//         "location_id": 1,
//         "location_name": "Ashok Vihar Phase 3, New Delhi",
//         "state_id": 1,
//         "state": "Delhi",
//         "country_name": "India"
//     }
// ]

// const hotel = 
// [
//     {
//     "_id": "618776b162a1816f885956b9",
//     "restaurant_id": 1,
//     "restaurant_name": "Domino's Pizza",
//     "location_id": 1,
//     "state_id": 1,
//     "address": "Ashok Vihar Phase 3, New Delhi",
//     "restaurant_thumb": "https://b.zmtcdn.com/data/pictures/chains/3/143/c77dfea619f2d7786a7d054afab5cd88_featured_v2.jpg",
//     "average_rating": 4.2,
//     "rating_text": "Very Good",
//     "cost": 666,
//     "contact_number": 9453524651,
//     "mealTypes": [
//       {
//         "mealtype_id": 1,
//         "mealtype_name": "Breakfast"
//       },
//       {
//         "mealtype_id": 2,
//         "mealtype_name": "Lunch"
//       }
//     ],
//     "cuisines": [
//       {
//         "cuisine_id": 1,
//         "cuisine_name": "North Indian"
//       },
//       {
//         "cuisine_id": 4,
//         "cuisine_name": "Fast Food"
//       }
//     ],
//     "image_gallery": [
//       "https://b.zmtcdn.com/data/pictures/chains/3/143/fbc2c4c9e55a3f011c493dda79c399f5.jpg",
//       "https://b.zmtcdn.com/data/pictures/chains/3/143/1adb116d088669540c89150836d668f9.jpg",
//       "https://b.zmtcdn.com/data/pictures/chains/3/143/2781ab2c532b711ecd401571cdd87eb9.jpg",
//       "https://b.zmtcdn.com/data/pictures/chains/3/143/c751805b5927046d340926f870a95f5e.jpg"
//     ]
//   },
//   {
//     "_id": "618776b162a1816f885956ba",
//     "restaurant_id": 2,
//     "restaurant_name": "Pandit Ji Paratha Hut",
//     "location_id": 2,
//     "state_id": 1,
//     "address": "Shop 44, Plot C,  Ashok Vihar Phase 2,Chincholi, Delhi-110006, Delhi",
//     "restaurant_thumb": "https://b.zmtcdn.com/data/pictures/6/307406/bc1a8c29f7ac21c07077a301ca4b4c00.jpg",
//     "average_rating": 3.5,
//     "rating_text": "Good",
//     "cost": 450,
//     "contact_number": "122345352465",
//     "mealTypes": [
//       {
//         "mealtype_id": 1,
//         "mealtype_name": "Breakfast"
//       },
//       {
//         "mealtype_id": 3,
//         "mealtype_name": "Dinner"
//       }
//     ],
//     "cuisines": [
//       {
//         "cuisine_id": 1,
//         "cuisine_name": "North Indian"
//       },
//       {
//         "cuisine_id": 5,
//         "cuisine_name": "Street Food"
//       }
//     ],
//     "image_gallery": [
//       "https://b.zmtcdn.com/data/reviews_photos/ec1/33873687c26d9719713d71f0712faec1_1532256472.jpg",
//       "https://b.zmtcdn.com/data/reviews_photos/bb2/460e82b7be8f808ef09655f5b7edbbb2_1516122671.jpg",
//       "https://b.zmtcdn.com/data/reviews_photos/ff4/8ea6f51aebe1cad803c293574f0afff4_1453703271.jpg",
//       "https://b.zmtcdn.com/data/reviews_photos/baa/30e9afd319d48c1122e7c19228287baa_1517462886.jpg"
//     ]
//   }
// ]

/*Get Request */
app.get('/',(req,res) => {
    res.send("Welcome to express")
})

/* Get City */
app.get('/city',(req,res) => {
    res.send(city)
})

/* Get hotel */
app.get('/hotel',(req,res) => {
    res.send(hotel)
})

app.listen(port,() => {
    console.log(`Listening to the port ${port}`)
});