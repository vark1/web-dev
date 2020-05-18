const express = require('express')
const app = express();

app.get('/hello', (req,res) => res.send("hello"))

app.use('/public',express.static(__dirname + "/static"))

app.listen(3434)