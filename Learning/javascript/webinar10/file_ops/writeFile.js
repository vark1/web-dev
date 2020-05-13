const fs = require('fs') //node js api file system
//by including fs, we can use many file system functions

fs.writeFile(__dirname + '/myfile.txt', "some text", function (err){ 
    //writes a file  (name of the file, buffer/url, callback function which is call whether if file is called or not)
    //__dirname + '/filename' is used so that file is created in the directory this js file exists
    if (err) throw err

    console.log("File was written")
    
})