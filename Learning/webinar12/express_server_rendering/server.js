const express = require('express')
const todoRoute = require('./routes/todos')
const srv = express()

srv.set('view engine', 'hbs')  //used to set certain data inside the web application. Here, my server uses hbs as a view engine
//view engine is a library which helps in rendering files 

srv.use(express.json())
srv.use(express.urlencoded({extended: true}))

srv.set('views',__dirname + '/views') //where to look for 'views'

srv.use('/todos',todoRoute)

srv.listen(4567)