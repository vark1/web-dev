const Sequelize = require('sequelize')

const db = new Sequelize ('journaldb','journalist','journalpass',{
    host:'localhost',
    dialect:'mysql'
})

const User = db.define('users', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
})