const express = require('express')
const server = express();

const m1 = function (req, res, next){
    console.log("We are in middleware 1")
    next()
}

const m2 = function (req, res, next){
    console.log("We are in middleware 2")
    next()
}

const m3 = function (req, res, next){
    console.log("We are in middleware 3")
    next()
}

server.use(m1) //this middleware runs in all paths as there is no path defined and it is before get function

server.use('/a',m2) //this middleware only runs in '/a' path

server.get('/a', function(req, res, next){     //only runs in '/a' path
    res.send("Hello world")
})

server.use(m3)  //this middleware runs in all paths except '/a' as it is interrupted by get function

server.listen(1234)