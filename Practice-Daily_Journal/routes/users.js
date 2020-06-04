const user = require('../db').User
const route = require('express').Router()

route.get('/', (req,res)=>[
    user.findAll() //finds all the users in the db
        .then((users)=>{
            res.status(200).send(users)
        })
        .catch((err)=>{
            res.status(500).send({
                error: "Could not retrieve users"
            })
        })
])

route.post('/', (req,res)=>{
    user.create({   //create a user
        name: req.body.name,
        password: req.body.password
    }).then((user)=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(501).send({
            error:"error creating user"
        })
    })
})

exports = module.exports = route