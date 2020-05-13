
function download(url){
    return new Promise(function (resolve, reject){
        if (!url.startsWith("http")){
            reject(new Error("Url does not start with http"))
        } else {
            console.log("Start download: ")
            setTimeout(function(){  //fake 3 second download task
                let fileName = url.split('/').pop()
                resolve(fileName)
            },3000)  
        }
    })
}


function resize(fileName){
    return new Promise(function (resolve, reject){
        if (!fileName.endsWith(".png")){
            reject(new Error("File is not a png"))
        } else {
            console.log("Start resizing: ")
            setTimeout(function(){  // fake 3-sec resize task
                //change x.png -> x-resized.png
                let resizedFile = fileName.split('.')[0] + '-resized.png'
                resolve(resizedFile)
            },3000)
        }
        
    })
}

Promise.all(["http://google.com/hob.png","http://google.com/ds.png","http://google.com/eq.png"])
.then(function (downloadValues){
    return Promise.all(downloadValues.map(download))
}).then(function (resizeValues){
    return Promise.all(resizeValues.map(resize))
})
.catch(function(err){
    console.log(err)
})