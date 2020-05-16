const route = require('express').Router()
//rout is on '/api/' path

const db= require('../db')

route.get('/persons/', (req,res) => {
    //send all the persons as an array here
    setTimeout(() => {
        db.getAllPersons()
        .then((persons) => res.send(persons))
        .catch((err)=>res.send({error: err}))
    },2000)
})

route.post('/persons/', (req,res) => {
    //Add new persons(details in body)

    db.addNewPerson(req.body.name, req.body.age, req.body.city)
        .then(() => res.redirect('/api/persons/'))      //redirect to get all persons data
        .catch((err) => res.send({error: err}))
})

exports = module.exports= {
    route
}