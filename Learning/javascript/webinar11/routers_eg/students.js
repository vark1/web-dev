const route = require('express').Router()

 let students = [
    {name: "varun", colg:"abc", year:"III"},
    {name: "vishal", colg:"xyz", year:"IV"},
    {name: "anmol", colg:"pqr", year:"III"},
    {name: "adarsh", colg:"rst", year:"II"}
]

route.get('/', (req,res) => res.send(students))
route.post('/',(req,res)=>{
    students.push({
        name: req.body.name,
        colg: req.body.colg,
        year: req.body.year
    })
    res.send(students)
})
route.get('/:id', (req,res) => res.send(students[req.params.id]))

module.exports = route