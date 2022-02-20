let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
// const mongoUrl = "mongodb://localhost:27017"
const mongoUrl = "mongodb+srv://test:test123@cluster0.p7mvq.mongodb.net/novintern?retryWrites=true&w=majority"
const dotenv = require('dotenv');
dotenv.config()
const bodyParser = require('body-parser')
const cors = require('cors')
let port = process.env.PORT || 8210;
var db;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

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

/*app.get('/restaurantmenu',(req,res) => {
    db.collection('restaurantmenu').find().toArray((err, result) =>{
        if(err) throw err;
        res.send(result)
    })
})*/


/*Restaurants as per Location */
app.get('/restaurantdata',(req,res) => {
    let StateId = Number(req.query.state_id)
    let mealId = Number(req.query.meal_id)
    let query = {};
    if (StateId && mealId){
        query = {"mealTypes.mealtype_id":mealId,state_id:StateId};
    }
    else if (StateId){
        query = {state_id:StateId};
    }
    else if (mealId){
        query = {"mealTypes.mealtype_id":mealId};
    }

    console.log(">>>>restID" ,StateId)
    db.collection('restaurantdata').find(query).toArray((err, result) =>{
        if(err) throw err;
        res.send(result)
    })
})

/* Filters*/
app.get('/filter/:mealId',(req,res) => {
    let sort = {cost:1}
    let mealId = Number(req.params.mealId)
    let skip = 0
    let limit = 1000000000;
    let cuisineId = Number(req.query.cuisine)
    let lcost = Number(req.query.lcost);
    let hcost = Number(req.query.hcost)
    let query = {}
    if(req.query.sort){
        sort = {cost:req.query.sort}
    }
    if(req.query.skip && req.query.limit){
        skip = Number(req.query.skip);
        limit = Number(req.query.limit)
    }

    if(cuisineId&lcost&hcost) {
        query = {"cuisines.cuisine_id":cuisineId, "mealTypes.mealtype_id":mealId, $and:[{cost:{$gt:lcost, $lt:hcost}}]
    }
}

    else if(cuisineId){
        query = {"cuisines.cuisine_id":cuisineId,"mealTypes.mealtype_id":mealId}
    }

    else if(lcost&hcost){
        query = {$and:[{cost:{$gt:lcost, $lt:hcost}}],"mealTypes.mealtype_id":mealId}
    }

    db.collection('restaurantdata').find(query).sort(sort).skip(skip).limit(limit).toArray((err, result) =>{
        if(err) throw err;
        res.send(result)
    })
})



/* Get mealtype */
app.get('/mealtype',(req,res) => {
    db.collection('mealtype').find().toArray((err, result) =>{
        if(err) throw err;
        res.send(result)
    })
})

/*Restaurant details*/
app.get('/details/:id',(req,res) => {
    let restID = Number(req.params.id)
    //restID = mongo.ObjectId(req.params.id)
    db.collection('restaurantdata').find({restaurant_id:restID}).toArray((err, result) =>{
        if(err) throw err;
        res.send(result)
    })
})

/*Menu with respect to details*/
app.get('/menu/:id',(req,res) => {
    let restID = Number(req.params.id)
    db.collection('restaurantmenu').find({restaurant_id:restID}).toArray((err, result) =>{
        if(err) throw err;
        res.send(result)
    })
})

/*Menu on basis of USER SELCETION */

//Get all Orders 
app.get('/orders',(req,res) => {
    let email = req.query.email
    let query = {};
    if (email){
        query = {"email":email};
    }

    db.collection('order').find(query).toArray((err, result) =>{
        if(err) throw err;
        res.send(result)
    })
})

/* Place Order */
app.post('/placeOrder', (req, res) => {
    //console.log(req.body)
    db.collection('order').insert(req.body, (err, result) =>{
        if(err) throw err;
        res.send('Order Added Successfully')
    })
})

app.post('/menuItem', (req, res) => {
    console.log(req.body)
    db.collection('restaurantmenu').find({menu_id:{$in:req.body}}).toArray((err, result) =>{
        if(err) throw err;
        res.send(result)
    })
})

/* Delete Orders */
app.delete('/deleteOrder', (req, res) => {
    db.collection('order').remove({}, (err, result)  =>{
        if(err) throw err;
        res.send(result)
    })
})

/* Update Orders */
// app.put('/updateOrder/:id', (req, res) => {
//     let oId = mongo.ObjectId(req.params.id)
//     let status = req.query.status?req.query.status:'Pending'
//     db.collection('order').updateOne(
//         {_id: oId},
//         {$set:{
//             "status":status
//         }}, (err, result) =>{
//             if(err) throw err;
//             res.send(`Status updated to ${status}`)
//         })
// })

/* Update with Bank Name */
app.put('/updateOrder/:id', (req, res) => {
    let oId = mongo.ObjectId(req.params.id)
    let status = req.query.status?req.query.status:'Pending'
    db.collection('order').updateOne(
        {_id: oId},
        {$set:{
            "status":status,
            "bank_name":req.body.bank_name,
            "bank_status":req.body.bank_status,
        }}, (err, result) =>{
            if(err) throw err;
            res.send(`Status updated to ${status}`)
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