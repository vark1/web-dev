const sv = require('express')() //calling express right after require in short

const teacherRoute = require('./teachers')
const studentRoute = require('./students')

sv.use('/students', studentRoute)
sv.use('/teachers', teacherRoute)


sv.listen(2233)