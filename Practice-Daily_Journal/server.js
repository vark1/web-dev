const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/hello', (req,res) => res.send("hello"))

app.use('/public',express.static(path.join(__dirname,"static")))
app.use('/routes', require('./routes').route)

app.listen(3434, ()=>{console.log("server started at http://localhost:3434")})