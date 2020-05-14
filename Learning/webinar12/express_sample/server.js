const express = require('express')
const server = express()
const todoRoute = require('./routes/todos')

server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.get('/hello', function(req,res){
    res.send("hello")
})

server.use('/public', express.static(__dirname + "/public")) 
/*express.static(__dirname + "/public") will make the public folder available as a static website
In static website, there is no dynamic content. The response you get does not depend on the request you send
When you go to the public page, the same page gets loaded everytime. There is no difference whatsoever*/

server.use('/todos', todoRoute)

server.listen(3456)