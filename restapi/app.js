let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
// const mongoUrl = "mongodb://localhost:27017"
const mongoUrl = "mongodb+srv://test:test123@cluster0.p7mvq.mongodb.net/novintern?retryWrites=true&w=majority"
const dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 8210;
var db;

/*Get Request */
app.get('/',(req,res) => {
    res.send("Welcome to express")
})


/* Get Location */
app.get('/location',(req,res) => {
    db.collection('location').find().toArray((err, result) =>{
        if(err) throw err;
        res.send(result)
    })
})

app.get('/restaurantmenu',(req,res) => {
    db.collection('restaurantmenu').find().toArray((err, result) =>{
        if(err) throw err;
        res.send(result)
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