const route = require('express').Router()

route.use('/users',require('./users'))

exports = module.exports = {
    route
}