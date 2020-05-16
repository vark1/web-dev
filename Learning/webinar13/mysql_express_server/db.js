const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'mypass',
    database: 'mytestdb'

})

function getAllPersons() {
    return new Promise(function (resolve, reject){
        connection.query(
            `SELECT * FROM persons`,
            function(err,rows,cols){
                if(err)     console.log(err)
                else{
                    resolve(rows)
                }
            }
        )
    })
}

function addNewPerson(name, age, city){

    return new Promise (function (resolve, reject){
        connection.query(
            `INSERT INTO persons (name, age, city) VALUES (?, ?, ?)`,
            [name, age, city], //We are taking values like this to prevent the sql injection attack
            function(err, results) {
                if(err){
                    reject(err)
                }else resolve()
            }
        )
    })
}

exports = module.exports = {
    getAllPersons,
    addNewPerson
}