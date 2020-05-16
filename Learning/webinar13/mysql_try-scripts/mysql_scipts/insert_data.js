const mysql = require('mysql2')

const insert = {
    name: process.argv[2], //used to get the arguments passed to the node.js process when run in the command line
    //process.argv[0] is node
    //process.argv[1] is the file itself
    age: parseInt(process.argv[3]),
    city: process.argv[4]
}

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'myuser',
    password: 'mypass'
})

connection.query(
    `INSERT INTO persons (name, age, city) VALUES(
        '${insert.name}',
        ${insert.age},
        '${insert.city}'

    )`,
    function(err, results){
        if (err){
            console.log(err)
        }else {
            console.log(results)
            console.log("Inserted successfully")
        }
        connection.close();
    }
)