// const express = require('express')
// const Router = express.Router  //creating a router fn inside express
// const route = Router()  //calling the router fn to create route
const route = require('express').Router()//in short

let teachers = [
    {name: "a", subject:"a1s2"},
    {name: "b", subject:"a2s3"}
]

route.get('/', (req,res) => res.send(teachers))
route.get('/add',(req, res) => {
    teachers.push({         //here im not getting a response back, and if a req doesnt get a res back its called a timeout. on the client side, a timout looks like an error that the server wasnt able to do anything
        name: req.query.name,
        subject: req.query.subject
    })
    res.send(teachers) //This is to prevent the timeout from happening
})

route.get('/:id', (req,res) => res.send(teachers[req.params.id])) //if someone sends the req id, for eg id=0, they get name 'a' subject 'a1s2'

//route is a mini express server which can be included in another express server 
//it is a type of middleware in which we can create small middlewaress

module.exports = route