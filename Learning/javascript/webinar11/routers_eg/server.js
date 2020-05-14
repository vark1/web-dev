const express = require('express')
const sv = express();

const teacherRoute = require('./teachers')
const studentRoute = require('./students')

sv.use(express.json()) 
/*json middleware is present inside express which can decode the body of the request if it is in json and turn it into a js object*/
sv.use(express.urlencoded({extended: true}))
/*urlencoded middleware is present inside express which can decode the body of the request if it is in url*/

sv.use('/students', studentRoute)
sv.use('/teachers', teacherRoute)


sv.listen(2233)