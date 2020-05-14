const express = require('express')
const sv = express()

sv.get('/a', (req, res) => {res.send("AEYOAEYO") })  //we omitted out the next function and wrote the arrow function for short
sv.get('/b', (req, res) => {res.send("BEYOBEYO") }) 

sv.use((req,res) => res.send("<h2>404: not found</h2>")) //we use sv.use instead of sv.get because we want to handle every type of req


sv.listen(2345)