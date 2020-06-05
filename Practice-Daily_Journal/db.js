const Sequelize = require('sequelize')

const db = new Sequelize ('journaldb','journalist','journalpass',{
    host:'localhost',
    dialect:'mysql'
})

const User = db.define('users', { 
    //when you first run this code, the table will be created and you cant change the code here then.
    //for eg, if you want to add password, then you have to either create a new table or alter the table 
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