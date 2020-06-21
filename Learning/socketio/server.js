const http = require('http')           //socketio requires http server to run on
const express = require('express')
const app = express()
const socketio = require('socket.io')

const server = http.createServer(app)  //creating http server
const io = socketio(server)            //calling socketio on server
//when i call socketio lib with my http server, it enables certain functionality in my http server. One of them being serving the socketio js file
//localhost:1635/socket.io/socket.io.js

io.on('connection', (socket) => {
   console.log('connected with socket id = ', socket.id)

   socket.on('boom',()=>{              //event from client to the server
      console.log('boom recieved from: ', socket.id)
   })

   setInterval(()=>{
      socket.emit('whizz')             //event from server to the client
   },2000)
})

app.use('/',express.static(__dirname + '/public'))

server.listen(1635,()=>{               //same as app.listen
   console.log("server started at http://localhost:1635")
})