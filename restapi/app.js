let express = require('express');
let app = express();
const mongo = require('mongodb');
const mongi
const dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 8210;


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