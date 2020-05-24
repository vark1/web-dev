const User = require('../../db').User
const route = require('express').Router()

route.get('/',(req,res)=>{
    //We want to send array of all users
    //from our database here
    User.findAll() //finds all the user in the database
        .then((users)=>{
            res.status(200).send(users)
        })
        .catch((err)=>{
            res.status(500).send({
                error: "Could not retrieve users"
            })
        })
})

route.post('/', (req,res)=>{
    //we expect the req to have name in it
    //we will create a new user

    User.create({
        name: req.body.name
    }).then((user)=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(501).send({
            error: "Could not add new user"
        })
    })
})

exports = module.exports = route