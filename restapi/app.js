let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongoUrl = "mongodb://localhost:27017"
const dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 8210;
var db;

/*Get Request */
app.get('/',(req,res) => {
    res.send("Welcome to express")
})

// /* Get City */
// app.get('/city',(req,res) => {
//     res.send(city)
// })

// /* Get hotel */
// app.get('/hotel',(req,res) => {
//     res.send(hotel)
// })

/* Get Location */
app.get('/location',(req,res) => {
    db.collection('location').find().toArray((err, result) =>{
        if(err) throw err;
        res.send(hotel)
    })
})

MongoClient.connect(mongoUrl, (err, connection) => {
    if(err) console.log('Error While Connecting');
    db = connection.db('novintern')
    app.listen(port,() => {
        console.log(`Listening to the port ${port}`)
    });
})



// app.listen(port,() => {
//     console.log(`Listening to the port ${port}`)
// });



