const express = require('express')
const server = express() //this creates a new server for us


//server.get(a,b) //a is the path and b is the function
//b runs as soon as a get request comes on the server
server.get('/',function (req, res, next){  //recieves a get request on this route path
    console.log("hey") //this will execute only when a request comes on '/' path on the server
    res.send("Hello World")
})
//req is the request which has come from the client to the server
//res is the response the server will send to the client
//next allows us to call next such functions
//these type of functions are called middlewares

server.get('/greet/:tod/:name', function(req, res, next){
    let tod = 'Morning'
    switch(req.params.tod){
        case 'evening': tod = "Evening";break;
        case 'morning': tod = "Morning";break;

    }
    // let greeting = "Good " + tod +', ' + req.params.name //name is now a variable available inside req.params.name, we use 'localhost:2121/greet/evening/Varun'.
    let greeting = "Good " + tod +', ' + req.query.name //for query, in url we use 'localhost:2121/greet/evening?name=Varun'. then it will display name, or else it will display undefined
    res.send(greeting)
})

server.get('/html', function(req, res, next){
    res.send(`
    <html>
        <body>
            <h1>This is a htMl page heading</h1>
            <p>This is very nice</p>
        </body>
    </html>
    `)
})

server.listen(2121)  //use localhost:2121 //localhost is used for your own system, 2121 is the port