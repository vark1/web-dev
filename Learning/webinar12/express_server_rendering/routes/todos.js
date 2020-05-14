const route = require('express').Router()

let todos = [
    {task: "this is task 1"},
    {task: "this is task 2"},
    {task: "this is task 3"}
]

route.get('/', function(req,res){
    res.render('todos.hbs', {todos})   //the 'todos' file is todos.hbs. We have specified hbs as our view engine in server.js file
})

route.post('/', function(req,res){
    todos.push({
        task: req.body.newtodo
    })
    res.redirect('todos') //redirects user back to the same path
})

module.exports = route