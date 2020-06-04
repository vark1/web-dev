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
    },
    name:{
        type: Sequelize.STRING,
        allowNull:false
    }
})

db.sync()
    .then(()=>console.log("database synced"))
    .catch((err)=>console.log("error creating database"))

exports = module.exports = {
    User
}