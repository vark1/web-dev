
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

download("http://google.com/google.google.google.png").then(resize).then(function (resizedFile){
    console.log("resized file is at : "+resizedFile)
}).catch(function (err){
    console.log(err)
})